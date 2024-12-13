import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex justify-center">
      <div className="flex w-full max-w-[2000px]">
        <div className="flex-1 flex flex-col justify-center items-center py-12 px-4 sm:px-6 md:flex-none md:w-[600px] lg:px-8">
          <div className="flex flex-col items-center justify-center mb-12">
            <img
              className="h-28 w-auto mb-4"
              src="https://utfs.io/f/vacIC1PeQNAlIdmOUQoWobUsIKDuHTNqOc0fazk7LtxJMEwh"
              alt="Offlavr"
            />
          </div>
          <div className="w-full min-w-[300px] max-w-[400px] mx-auto">
            {children}
          </div>
        </div>
        
        {!isMobile && (
          <div className="hidden md:block flex-1 max-w-[1400px] bg-[#f1f3f6]">
            <div className="h-full w-full relative">
              <img
                className="h-full w-full object-cover"
                src="https://utfs.io/f/vacIC1PeQNAl3tEtk49mim4QbAUe7xYCBjuMoRHkNpPvdFly"
                alt="Auth background"
              />
              <div 
                className={cn(
                  "absolute inset-0",
                  "bg-gradient-to-r from-black/10 to-transparent"
                )}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}