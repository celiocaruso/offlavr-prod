import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SignInPage } from './pages/auth/sign-in';
import { SignUpPage } from './pages/auth/sign-up';
import { MainLayout } from './components/layout/main-layout';
import { useAuthStore } from './lib/auth-store';
import { supabase } from './lib/supabase';

export default function App() {
  const { user, setUser, setProfile } = useAuthStore();

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
        // Fetch user profile
        supabase
          .from('USER-PROFILE')
          .select('*')
          .eq('user_email', session.user.email)
          .single()
          .then(({ data }) => {
            setProfile(data);
          });
      }
    });

    // Listen for changes on auth state
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        // Fetch user profile
        supabase
          .from('USER-PROFILE')
          .select('*')
          .eq('user_email', session.user.email)
          .single()
          .then(({ data }) => {
            setProfile(data);
          });
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!user) {
    return (
      <Router>
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<Navigate to="/signin" replace />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <MainLayout>
        <div className="w-full h-[calc(100vh-4rem)] bg-white rounded-lg shadow">
          <iframe
            id="content-frame"
            className="w-full h-full border-none"
            src="about:blank"
            title="Content"
          />
        </div>
      </MainLayout>
    </Router>
  );
}