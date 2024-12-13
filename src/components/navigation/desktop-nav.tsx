import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu';
import { menuItems } from '@/config/menu';
import { NavItem } from './nav-item';

export function DesktopNav() {
  return (
    <nav className="hidden md:flex md:space-x-8 md:ml-10">
      <NavigationMenu>
        <NavigationMenuList>
          {menuItems.map((item) => (
            <NavItem key={item.title} item={item} />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}