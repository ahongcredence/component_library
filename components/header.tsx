import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, HelpCircle, LogOut, User, Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

// Add props interface with isLoggedIn
interface HeaderProps {
  isLoggedIn?: boolean;
}

const corridors: { title: string; href: string; description: string }[] = [
  {
    title: "FedMall",
    href: "/docs/primitives/fedmall",
    description:
      "A central procurement platform for federal agencies to purchase supplies and services.",
  },
  {
    title: "NSNs Only",
    href: "/docs/primitives/nsns-only",
    description:
      "Search and procurement limited to items with National Stock Numbers.",
  },
  {
    title: "DLA Contracts",
    href: "/docs/primitives/dla-contracts",
    description:
      "Access to Defense Logistics Agency contract vehicles and procurement options.",
  },
  {
    title: "GSA Global Supply [BIC]",
    href: "/docs/primitives/gsa-global-supply",
    description: "Government-wide procurement through GSA Global Supply program.",
  },
  {
    title: "GSA Commercial",
    href: "/docs/primitives/gsa-commercial",
    description:
      "Commercial items available through General Services Administration contracts.",
  },
  {
    title: "MarketPlace",
    href: "/docs/primitives/marketplace",
    description:
      "An open marketplace for various government-approved vendors and products.",
  },
  {
    title: "Wildland Fire Program",
    href: "/docs/primitives/wildland-fire",
    description:
      "Specialized equipment and supplies for wildland firefighting operations.",
  },
  {
    title: "Warfighter Clothing and Textiles",
    href: "/docs/primitives/warfighter-clothing",
    description:
      "Military uniforms, protective clothing, and textile products for service members.",
  },
  {
    title: "NAVFAC",
    href: "/docs/primitives/navfac",
    description:
      "Naval Facilities Engineering Systems Command procurement options for infrastructure and facilities.",
  },
  {
    title: "Tire",
    href: "/docs/primitives/tire",
    description:
      "Tire procurement program for government and military vehicles.",
  },
  {
    title: "DLA Toner Cartridges",
    href: "/docs/primitives/dla-toner",
    description:
      "Specialized procurement channel for printer toner cartridges through the Defense Logistics Agency.",
  },
];

const tools: { title: string; href: string; description: string }[] = [
  {
    title: "DLA Orders",
    href: "/tools/dla-orders",
    description:
      "Central hub for managing and tracking Defense Logistics Agency procurement orders.",
  },
  {
    title: "Receive Orders / Requisition (MRA Search)",
    href: "/tools/receive-orders-mra",
    description:
      "Tool for receiving orders and conducting Material Receipt Acknowledgment searches.",
  },
  {
    title: "Interactive DLA Map Catalog",
    href: "/tools/dla-map-catalog",
    description:
      "Visual interactive catalog for locating and ordering Defense Logistics Agency items.",
  },
  {
    title: "Supportability Analysis Stock Out Report (SASOR)",
    href: "/tools/sasor",
    description:
      "Analytical reporting tool for monitoring stock availability and identifying potential supply chain issues.",
  },
  {
    title: "Upload DLMS Map Order",
    href: "/tools/upload-dlms-map",
    description:
      "Interface for uploading Defense Logistics Management Standards (DLMS) mapping orders.",
  },
  {
    title: "Materiel Order Entry System (MOES) / Create DDE",
    href: "/tools/moes-dde",
    description:
      "System for entering material orders and creating Direct Delivery Entry transactions.",
  },
];

const Header: React.FC<HeaderProps> = ({ isLoggedIn = true }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCorridor, setSelectedCorridor] = useState(corridors[0].href);

  return (
    <div>
      <header className="w-full border-b z-10 border-gray-200 bg-primary text-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo on the left */}
          <div className="flex items-center">
            <div className="h-16 w-20 flex items-center justify-center">
              <img src="/thumbnail_DLA_logo_transparent-002@2x.png" alt="Logo" className="max-h-full max-w-full object-contain" />
              <img src="/fedmallCommerceLogo.png" alt="Logo" className="max-h-full max-w-full object-contain ml-1 hidden sm:block" />
            </div>

            {/* CUI for mobile - shown next to logo on small screens */}
            <div className="ml-2 sm:hidden">
              <h1 className="text-sm font-bold text-white">CUI</h1>
            </div>
          </div>

          {/* CUI in the middle - only visible on medium screens and larger */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
            <h1 className="text-xl font-bold text-white">CUI</h1>
          </div>

          {/* Mobile menu button */}
          <div className="block sm:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Right side buttons: Help, Log out, My Account, Cart */}
          <div className="hidden sm:flex items-center space-x-1 md:space-x-3 lg:space-x-6 z-10">
            <Button variant="default" size="sm" className="flex flex-col items-center">
              <HelpCircle className="h-4 w-4 mr-1" />
              <span className="hidden md:inline">Help</span>
            </Button>

            {isLoggedIn ? (
              <>
                <Button variant="default" size="sm" className="flex flex-col items-center">
                  <LogOut className="h-4 w-4 mr-1" />
                  <span className="hidden md:inline">Log Out</span>
                </Button>

                <Button variant="default" size="sm" className="flex flex-col items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span className="hidden md:inline">My Account</span>
                </Button>
              </>
            ) : (
              <Button variant="default" size="sm">
                Sign In
              </Button>
            )}

            <Button variant="default" size="sm" className="flex flex-col items-center relative">
              <ShoppingCart className="h-4 w-4 mr-1" />
              <span className="hidden md:inline">Cart</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu panel (only visible when menu is open) */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-gray-200 py-2 px-4">
          <div className="flex flex-col space-y-2">
            <Button variant="outline" size="sm" className="flex justify-start items-center">
              <HelpCircle className="h-4 w-4 mr-2" />
              <span>Help</span>
            </Button>
            
            {isLoggedIn ? (
              <>
                <Button variant="outline" size="sm" className="flex justify-start items-center">
                  <LogOut className="h-4 w-4 mr-2" />
                  <span>Log Out</span>
                </Button>
                
                <Button variant="outline" size="sm" className="flex justify-start items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>My Account</span>
                </Button>
              </>
            ) : (
              <Button variant="outline" size="sm" className="flex justify-start items-center">
                Sign In
              </Button>
            )}
            
            <Button variant="outline" size="sm" className="flex justify-start items-center relative">
              <ShoppingCart className="h-4 w-4 mr-2" />
              <span>Cart</span>
              <span className="ml-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </Button>

            <div className="py-2 border-t border-gray-200">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none py-2">
                  <span className="font-medium">Corridors</span>
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <ul className="pl-4 mt-1 space-y-1">
                  {corridors.map((item) => (
                    <li key={item.title} className="text-sm py-1 border-b border-gray-100">
                      <a href={item.href} className="hover:text-primary">{item.title}</a>
                    </li>
                  ))}
                </ul>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none py-2">
                  <span className="font-medium">Tools</span>
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <ul className="pl-4 mt-1 space-y-1">
                  {tools.map((item) => (
                    <li key={item.title} className="text-sm py-1 border-b border-gray-100">
                      <a href={item.href} className="hover:text-primary">{item.title}</a>
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          </div>
        </div>
      )}

      {/* Navigation bar with search */}
      <div className="flex flex-col md:flex-row border-b border-gray-200">
        {/* Navigation menu for corridors and tools */}
        <div className="hidden sm:block">
          <div className="p-1 mx-2 md:mx-6 lg:mx-12">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Corridors</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {corridors.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <span className="mx-2">|</span>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {tools.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Search area */}
        <div className="flex flex-grow flex-col sm:flex-row items-center p-2 px-4 sm:ml-4 md:ml-8 lg:ml-32 sm:mr-2 md:mr-8 lg:mr-32">
          <div className="flex w-full max-w-2xl">
            <input 
              type="text" 
              placeholder="enter nsn or keyword to search"
              className="rounded-l-md border border-r-0 px-4 py-1 focus:outline-none focus:ring-2 focus:ring-primary w-full h-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select 
              className="rounded-r-md border px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary h-8 text-sm"
              value={selectedCorridor}
              onChange={(e) => setSelectedCorridor(e.target.value)}
            >
              {corridors.map((component) => (
                <option key={component.href} value={component.href}>{component.title}</option>
              ))}
            </select>
          </div>
          <div className="mt-2 sm:mt-0 sm:ml-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center text-primary underline"
            >
              <span>Advanced Search</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
});
ListItem.displayName = "ListItem"

export default Header;