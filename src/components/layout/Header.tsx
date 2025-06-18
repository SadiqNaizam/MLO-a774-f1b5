import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Hexagon, Menu as MenuIcon } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prevIsOpen => {
      const newIsOpen = !prevIsOpen;
      // This console.log is for demonstration. In a real app, this might trigger other UI changes.
      console.log('Mobile menu toggled. New state:', newIsOpen);
      return newIsOpen;
    });
  }, []); // setIsMobileMenuOpen from useState is guaranteed to be stable

  return (
    <header
      className={cn(
        'bg-background text-foreground sticky top-0 z-10 border-b',
        'h-16', // As per Layout Requirements: header.height
        className
      )}
      role="banner"
    >
      <div
        className={cn(
          'w-full max-w-screen-md mx-auto flex items-center justify-between h-full',
          'px-4 sm:px-6 lg:px-8' // Standard horizontal padding for header content container
        )}
      >
        <Link to="/" className="flex items-center gap-2 group" aria-label="SynergyFlow Home">
          <Hexagon className="h-7 w-7 text-primary group-hover:text-primary/90 transition-colors" aria-hidden="true" />
          <span className="text-2xl font-bold text-primary group-hover:text-primary/90 transition-colors">SynergyFlow</span>
        </Link>

        {/* Menu Toggle Button */}
        {/* The requirement is for a "menu toggle on the right". 
            This button fulfills that. The actual expandable menu panel is beyond the scope
            of this specific component's requirements but would be controlled by 'isMobileMenuOpen'. */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleMobileMenu} 
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <MenuIcon className="h-6 w-6" />
        </Button>
      </div>

      {/* 
        The actual mobile menu panel is not specified as part of this Header.tsx component.
        If it were included or handled by a child component, its visibility would be toggled 
        by `isMobileMenuOpen`. For example:
        
        {isMobileMenuOpen && <MobileMenuPanel items={navigationItems} onClose={() => setIsMobileMenuOpen(false)} />}
        
        Or, if implemented directly:
        {isMobileMenuOpen && (
          <div 
            // id="mobile-menu-panel" // would be used by aria-controls on the button
            className="absolute top-16 left-0 right-0 bg-background border-b shadow-md md:hidden"
          >
            <nav className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col space-y-1">
              {/* Example navigation links would go here */}
              {/* <Link to="/features" className="px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Features</Link> */}
              {/* <Link to="/pricing" className="px-3 py-2 text-base font-medium text-foreground hover:bg-muted rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link> */}
            {/* </nav>
          </div>
        )}
      */}
    </header>
  );
};

export default Header;
