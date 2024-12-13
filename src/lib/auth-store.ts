import { create } from 'zustand';
import { supabase } from './supabase';
import { User } from '@supabase/supabase-js';
import { createCompany } from './supabase/company';
import { createUserProfile } from './supabase/user-profile';
import type { UserProfile } from './supabase/types';

interface AuthState {
  user: User | null;
  profile: UserProfile | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string, companyName: string) => Promise<void>;
  signOut: () => Promise<void>;
  setUser: (user: User | null) => void;
  setProfile: (profile: UserProfile | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  profile: null,
  isLoading: true,
  setUser: (user) => set({ user }),
  setProfile: (profile) => set({ profile }),

  signIn: async (email: string, password: string) => {
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    // Fetch user profile
    const { data: profile } = await supabase
      .from('USER-PROFILE')
      .select('*')
      .eq('user_email', email)
      .single();

    set({ user: data.user, profile });
  },

  signUp: async (email: string, password: string, name: string, companyName: string) => {
    const { error, data } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;
    if (!data.user) throw new Error('User creation failed');

    try {
      // Create company
      const company = await createCompany(companyName, data.user.id);

      // Create user profile
      const profile = await createUserProfile(
        data.user.id,
        company.id,
        name,
        email
      );

      set({ user: data.user, profile });
    } catch (err) {
      // If profile or company creation fails, delete the auth user
      await supabase.auth.admin.deleteUser(data.user.id);
      throw err;
    }
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    set({ user: null, profile: null });
  },
}));