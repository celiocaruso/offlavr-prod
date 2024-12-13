import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '@/components/auth/auth-layout';
import { AuthForm } from '@/components/auth/auth-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';
import { useAuthStore } from '@/lib/auth-store';

export function SignInPage() {
  const navigate = useNavigate();
  const signIn = useAuthStore((state) => state.signIn);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await signIn(email, password);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <AuthForm
        title="Bem-vindo de volta!"
        subtitle={
          <>
            Não tem uma conta?{' '}
            <Link to="/signup" className="font-medium text-primary hover:text-primary/90">
              Cadastre-se
            </Link>
          </>
        }
        error={error}
        onSubmit={handleSubmit}
      >
        <div className="space-y-4">
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            className="h-input"
            required
          />

          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              className="h-input pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-3" />
              ) : (
                <Eye className="h-5 w-5 text-gray-3" />
              )}
            </button>
          </div>
        </div>

        <div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-input bg-primary text-white hover:bg-primary/90 disabled:opacity-50"
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </Button>
        </div>

        <div className="text-center">
          <Link
            to="/forgot-password"
            className="text-sm font-medium text-primary hover:text-primary/90"
          >
            Esqueceu sua senha?
          </Link>
        </div>
      </AuthForm>
    </AuthLayout>
  );
}