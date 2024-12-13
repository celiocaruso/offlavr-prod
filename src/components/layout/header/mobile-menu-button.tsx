import { Menu } from 'lucide-react';

interface MobileMenuButtonProps {
  onClick: () => void;
}

export function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary md:hidden"
      onClick={onClick}
    >
      <span className="sr-only">Open sidebar</span>
      <Menu className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}