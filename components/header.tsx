import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ShoppingCart, HelpCircle, LogOut, User } from 'lucide-react';

// Add props interface with isLoggedIn
interface HeaderProps {
  isLoggedIn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn = true }) => {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo on the left */}
        <div className="flex items-center">
          <div className="h-10 w-10 bg-blue-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold">Logo</span>
          </div>
          
          {/* CUI for mobile - shown next to logo */}
          <div className="ml-3 md:hidden">
            <h1 className="text-lg font-bold text-gray-900">CUI</h1>
          </div>
        </div>
        
        {/* CUI in the middle - only visible on medium screens and larger */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
          <h1 className="text-xl font-bold text-gray-900">CUI</h1>
        </div>
        
        {/* Right side buttons: Help, Log out, My Account, Cart */}
        <div className="flex items-center space-x-1 md:space-x-3 z-10">
          <Button variant="ghost" size="sm" className="flex items-center">
            <HelpCircle className="h-4 w-4 mr-1" />
            <span className="hidden md:inline">Help</span>
          </Button>
          
          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="sm" className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span className="hidden md:inline">My Account</span>
              </Button>
              
              <Button variant="ghost" size="sm" className="flex items-center">
                <LogOut className="h-4 w-4 mr-1" />
                <span className="hidden md:inline">Log Out</span>
              </Button>
              
              {/* Avatar only shows when logged in */}
              <Avatar className="h-8 w-8">
                <AvatarImage src="/api/placeholder/32/32" alt="User" />
                <AvatarFallback>UI</AvatarFallback>
              </Avatar>
            </>
          ) : (
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          )}
          
          <Button variant="ghost" size="sm" className="flex items-center relative">
            <ShoppingCart className="h-4 w-4 mr-1" />
            <span className="hidden md:inline">Cart</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;