import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderIconProps {
  Icon: LucideIcon;
  label: string;
  onClick?: () => void;
}

export function HeaderIcon({ Icon, label, onClick }: HeaderIconProps) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "p-2 text-gray-400 hover:text-gray-500 rounded-full hover:bg-gray-100",
        "transition-colors duration-200"
      )}
      aria-label={label}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}