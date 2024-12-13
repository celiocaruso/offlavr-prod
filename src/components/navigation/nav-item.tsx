import { NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { MenuItem } from '@/types/menu';

interface NavItemProps {
  item: MenuItem;
}

export function NavItem({ item }: NavItemProps) {
  if (!item.items && item.path) {
    return (
      <NavigationMenuItem>
        <NavigationMenuLink
          href={item.path}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
          )}
        >
          {item.title}
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        {item.title}
      </NavigationMenuTrigger>
      {item.items && (
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            {item.items.map((subItem) => (
              <li key={subItem.title}>
                <NavigationMenuLink
                  href={subItem.path}
                  className={cn(
                    "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                  )}
                >
                  <div className="text-sm font-medium leading-none">{subItem.title}</div>
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      )}
    </NavigationMenuItem>
  );
}