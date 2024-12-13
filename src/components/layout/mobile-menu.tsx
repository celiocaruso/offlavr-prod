import { useState } from 'react';
import { cn } from '@/lib/utils';
import { menuItems } from '@/config/menu';
import { X, ChevronDown } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ExpandedState {
  [key: string]: boolean;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<ExpandedState>({});

  const toggleExpand = (title: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <div className={cn(
      "md:hidden fixed inset-0 z-40",
      isOpen ? "pointer-events-auto" : "pointer-events-none"
    )}>
      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-gray-600 transition-opacity duration-300 ease-in-out",
          isOpen ? "opacity-75" : "opacity-0"
        )}
        onClick={onClose}
      />
      
      {/* Menu panel */}
      <div 
        className={cn(
          "fixed inset-y-0 left-0 flex flex-col w-full max-w-xs bg-white shadow-xl",
          "transform transition-all duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-gray-200">
          <div className="flex-1 flex justify-center">
            <img
              className="h-12 w-auto"
              src="https://utfs.io/f/vacIC1PeQNAl1TyRDdL7aQjJ1KE7GOAyUPtBV2zTR3D09okn"
              alt="Offlavr"
            />
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto">
          <ul className="px-2 py-4">
            {menuItems.map((item) => (
              <li key={item.title} className="mb-1">
                {item.items ? (
                  <div>
                    <button
                      onClick={() => toggleExpand(item.title)}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-2 text-left",
                        "text-gray-600 hover:bg-gray-50 rounded-md font-normal",
                        expandedItems[item.title] && "bg-gray-50"
                      )}
                    >
                      <span>{item.title}</span>
                      <ChevronDown 
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          expandedItems[item.title] && "transform rotate-180"
                        )} 
                      />
                    </button>
                    {expandedItems[item.title] && (
                      <ul className="ml-4 mt-1 space-y-1">
                        {item.items.map((subItem) => (
                          <li key={subItem.title}>
                            <a
                              href={subItem.path}
                              className="block px-4 py-2 text-gray-500 hover:bg-gray-50 rounded-md font-light"
                            >
                              {subItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.path}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md font-normal"
                  >
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}