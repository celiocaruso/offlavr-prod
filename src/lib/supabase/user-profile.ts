import { supabase } from '../supabase';
import type { UserProfile } from './types';

export async function createUserProfile(
  uid: string,
  companyId: string,
  userName: string,
  userEmail: string
): Promise<UserProfile> {
  const { data, error } = await supabase
    .from('USER-PROFILE')
    .insert([
      {
        uid,
        company_id: companyId,
        user_name: userName,
        user_email: userEmail,
      },
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
}