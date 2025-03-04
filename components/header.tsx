import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ShoppingCart, HelpCircle, LogOut, User, Search } from 'lucide-react';
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
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
  return (
    <div>
      <header className="w-full border-b z-0 border-gray-200 bg-primary text-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo on the left */}
          <div className="flex items-center">
            <div className="h-20 w-20 flex items-center justify-center">
              <img src="/thumbnail_DLA_logo_transparent-002@2x.png" alt="Logo" />
              <img src="/fedmallCommerceLogo.png" alt="Logo" />
            </div>

            {/* CUI for mobile - shown next to logo */}
            <div className="ml-3 hidden">
              <h1 className="text-lg font-bold text-white">CUI</h1>
            </div>
          </div>

          {/* CUI in the middle - only visible on medium screens and larger */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
            <h1 className="text-xl font-bold text-white">CUI</h1>
          </div>

          {/* Right side buttons: Help, Log out, My Account, Cart */}
          <div className="flex items-center space-x-1 md:space-x-6 z-10">
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



                {/* Avatar only shows when logged in */}
                {/* <Avatar className="h-8 w-8">
                <AvatarImage src="/api/placeholder/32/32" alt="User" />
                <AvatarFallback>J.</AvatarFallback>
              </Avatar> */}
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
      <div className="flex border-b-1" >
        <div>
            <div className='p-1 mx-12'>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Corridors</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex flex-col w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {corridors.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                |
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex flex-col w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {tools.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
       
            </div>
        </div>
        <div>

          <NavigationMenu>
            <NavigationMenuList>

            </NavigationMenuList>
          </NavigationMenu>


        </div>
        <div className="flex ml-32 mr-32 p-1">
          <input 
            type="text" 
            placeholder="enter nsn or keyword to search"
            className="rounded-l-md border border-r-0 px-4 py-1 focus:outline-none focus:ring-2 focus:ring-primary w-xl h-8"
          />
          <select className="rounded-r-md border px-4 py-1 focus:outline-none focus:ring-2 focus:ring-primary h-8">
            {corridors.map((component, idx) => (
              <option key={idx} value={component.href}>{component.title}</option>
            ))}
            
          </select>
        </div>
        <div>
          <Button variant="ghost" size="sm" className="flex flex-col items-center text-primary underline mt-1">
     
            <span className="hidden md:inline">Advanced Search</span>
          </Button>
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
        <div>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground border-b border-gray-200 pb-2 mb-2",
              className
            )}
            {...props}
          >
            <div className="flex justify-between text-sm font-medium leading-none">{title} </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>

        </div>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Header;