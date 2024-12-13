import { Bell, User } from 'lucide-react';
import { HeaderIcon } from './header-icon';

export function HeaderIcons() {
  return (
    <div className="flex items-center space-x-1">
      <HeaderIcon Icon={Bell} label="Notifications" />
      <HeaderIcon Icon={User} label="User profile" />
    </div>
  );
}