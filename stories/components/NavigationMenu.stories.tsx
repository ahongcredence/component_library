import * as React from "react"
import { Meta, StoryObj } from "@storybook/react"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const meta: Meta<typeof NavigationMenu> = {
  title: "Components/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
  argTypes: {
    viewport: {
      control: "boolean",
      description: "Whether to show the navigation menu viewport",
      defaultValue: true,
    },
  },
}

export default meta
type Story = StoryObj<typeof NavigationMenu>

// Example links and components for stories
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Getting Started",
    href: "/docs/primitives/getting-started",
    description:
      "A quick tutorial to get you up and running with the component library.",
  },
  {
    title: "Button",
    href: "/docs/primitives/button",
    description:
      "A clickable interactive element that triggers an action or event.",
  },
  {
    title: "Dropdown Menu",
    href: "/docs/primitives/dropdown-menu",
    description:
      "A menu that appears when a button is clicked, showing a list of options.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content that display one panel at a time.",
  },
  {
    title: "Dialog",
    href: "/docs/primitives/dialog",
    description:
      "A window overlaid on the primary content, rendering the content underneath inert.",
  },
]

// Reusable ListItem component for stories
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
})
ListItem.displayName = "ListItem"

// Basic Example
export const Basic: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.slice(0, 4).map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

// Multiple Menu Items
export const MultipleMenuItems: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.slice(0, 3).map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.slice(3).map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

// With Custom Layout
export const CustomLayout: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[500px] p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2 text-sm">UI Components</h3>
                  <ul className="space-y-2">
                    {components.slice(0, 3).map((component) => (
                      <li key={component.title}>
                        <NavigationMenuLink asChild>
                          <a 
                            href={component.href}
                            className="text-sm hover:underline hover:text-primary"
                          >
                            {component.title}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-sm">Layout Components</h3>
                  <ul className="space-y-2">
                    {components.slice(3).map((component) => (
                      <li key={component.title}>
                        <NavigationMenuLink asChild>
                          <a 
                            href={component.href}
                            className="text-sm hover:underline hover:text-primary"
                          >
                            {component.title}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <NavigationMenuLink asChild>
                  <a 
                    href="/docs"
                    className="flex items-center text-sm font-medium hover:underline"
                  >
                    View all components
                    <svg
                      className="ml-1 h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

// With Indicator
export const WithIndicator: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[400px]">
              {components.slice(0, 2).map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[400px]">
              {components.slice(2, 4).map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuIndicator />
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

// Responsive Example
export const Responsive: Story = {
  render: (args) => (
    <div className="w-full">
      {/* Mobile view (hidden on larger screens) */}
      <div className="block md:hidden">
        <NavigationMenu {...args} className="w-full">
          <NavigationMenuList className="flex-col w-full space-y-2 p-2">
            <NavigationMenuItem className="w-full">
              <NavigationMenuTrigger className="w-full justify-between">
                <span>Products</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-full">
                <ul className="grid gap-2 p-4 w-full">
                  {components.slice(0, 3).map((component) => (
                    <li key={component.title}>
                      <NavigationMenuLink asChild>
                        <a 
                          href={component.href}
                          className="block select-none rounded-md p-2 text-sm hover:bg-accent"
                        >
                          {component.title}
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="w-full">
              <NavigationMenuTrigger className="w-full justify-between">
                <span>Resources</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-full">
                <ul className="grid gap-2 p-4 w-full">
                  {components.slice(3).map((component) => (
                    <li key={component.title}>
                      <NavigationMenuLink asChild>
                        <a 
                          href={component.href}
                          className="block select-none rounded-md p-2 text-sm hover:bg-accent"
                        >
                          {component.title}
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Desktop view (hidden on smaller screens) */}
      <div className="hidden md:block">
        <NavigationMenu {...args}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.slice(0, 3).map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.slice(3).map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  ),
}