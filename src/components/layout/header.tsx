import { useState } from 'react';
import { DesktopNav } from '@/components/navigation/desktop-nav';
import { MobileMenu } from './mobile-menu';
import { HeaderLogo } from './header/header-logo';
import { HeaderIcons } from './header/header-icons';
import { MobileMenuButton } from './header/mobile-menu-button';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            <HeaderLogo 
              src="https://utfs.io/f/vacIC1PeQNAl1TyRDdL7aQjJ1KE7GOAyUPtBV2zTR3D09okn"
              alt="Offlavr"
            />
            <DesktopNav />
          </div>
          <HeaderIcons />
        </div>
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
}