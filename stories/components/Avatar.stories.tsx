import * as React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the avatar",
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center p-8">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Avatar>

// Basic Avatar with Image
export const WithImage: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="/default_avatar.png" alt="Avatar" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}

// Avatar with Initials
export const WithInitials: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
}

// Custom Sizes
export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center space-x-4">
      <Avatar className="size-6">
        <AvatarImage src="/default_avatar.png" alt="Avatar" />
        <AvatarFallback>XS</AvatarFallback>
      </Avatar>
      
      <Avatar className="size-8">
        <AvatarImage src="/default_avatar.png" alt="Avatar" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      
      <Avatar className="size-12">
        <AvatarImage src="/default_avatar.png" alt="Avatar" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      
      <Avatar className="size-16">
        <AvatarImage src="/default_avatar.png" alt="Avatar" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      
      <Avatar className="size-20">
        <AvatarImage src="/default_avatar.png" alt="Avatar" />
        <AvatarFallback>XL</AvatarFallback>
      </Avatar>
    </div>
  ),
}

// Custom Colors for Fallbacks
export const Colors: Story = {
  render: (args) => (
    <div className="flex items-center space-x-4">
      <Avatar>
        <AvatarFallback className="bg-primary text-primary-foreground">PR</AvatarFallback>
      </Avatar>
      
      <Avatar>
        <AvatarFallback className="bg-secondary text-secondary-foreground">SE</AvatarFallback>
      </Avatar>
      
      <Avatar>
        <AvatarFallback className="bg-accent text-accent-foreground">AC</AvatarFallback>
      </Avatar>
      
      <Avatar>
        <AvatarFallback className="bg-destructive text-destructive-foreground">DE</AvatarFallback>
      </Avatar>
      
      <Avatar>
        <AvatarFallback className="bg-muted text-muted-foreground">MU</AvatarFallback>
      </Avatar>
    </div>
  ),
}

// Avatar Group
export const AvatarGroup: Story = {
  render: (args) => (
    <div className="flex -space-x-2">
      <Avatar className="border-2 border-background">
        <AvatarImage src="/default_avatar.png" alt="Avatar 1" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      
      <Avatar className="border-2 border-background">
        <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
      </Avatar>
      
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/colinhacks.png" alt="Avatar 3" />
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
      
      <Avatar className="border-2 border-background">
        <AvatarFallback className="bg-secondary text-secondary-foreground">DK</AvatarFallback>
      </Avatar>
      
      <Avatar className="border-2 border-background flex items-center justify-center bg-muted text-muted-foreground text-xs">
        <span>+5</span>
      </Avatar>
    </div>
  ),
}

// With Status Indicators
export const WithStatus: Story = {
  render: (args) => (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <Avatar>
          <AvatarImage src="/default_avatar.png" alt="Online User" />
          <AvatarFallback>ON</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 block size-2.5 rounded-full bg-green-500 ring-2 ring-background" />
      </div>
      
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://github.com/colinhacks.png" alt="Busy User" />
          <AvatarFallback>BU</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 block size-2.5 rounded-full bg-yellow-500 ring-2 ring-background" />
      </div>
      
      <div className="relative">
        <Avatar>
          <AvatarFallback>OF</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 block size-2.5 rounded-full bg-gray-500 ring-2 ring-background" />
      </div>
      
      <div className="relative">
        <Avatar>
          <AvatarFallback>DND</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 block size-2.5 rounded-full bg-red-500 ring-2 ring-background" />
      </div>
    </div>
  ),
}

// Interactive Avatar with Tooltip
export const InteractiveAvatar: Story = {
  render: (args) => (
    <div className="group relative cursor-pointer">
      <Avatar>
        <AvatarImage src="/default_avatar.png" alt="User Profile" />
        <AvatarFallback>UP</AvatarFallback>
      </Avatar>
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10 w-32 p-2 bg-popover text-popover-foreground text-xs text-center rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity">
        John Doe
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-popover rotate-45"></div>
      </div>
    </div>
  ),
}