import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface AuthFormProps {
  title: string;
  subtitle: ReactNode;
  error?: string;
  children: ReactNode;
  onSubmit: (e: React.FormEvent) => void;
}

export function AuthForm({ title, subtitle, error, children, onSubmit }: AuthFormProps) {
  return (
    <div className="w-full space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-text">{title}</h2>
        <p className="mt-2 text-sm text-gray-3">{subtitle}</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        {error && (
          <div className="p-3 text-sm text-error bg-error/10 rounded-md">
            {error}
          </div>
        )}
        {children}
      </form>
    </div>
  );
}