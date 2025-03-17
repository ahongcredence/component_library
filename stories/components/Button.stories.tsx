import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/ui/button"
import { Save, Trash2, Mail, Settings, Bell, ChevronRight, Loader2 } from "lucide-react"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      description: "The visual style of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: {
        type: "select",
      },
      options: ["default", "sm", "lg", "icon"],
      description: "The size of the button",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    asChild: {
      description: "Whether to render as a child component",
      control: {
        type: "boolean",
      },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    className: {
      description: "Additional CSS classes to apply",
      control: {
        type: "text",
      },
    },
    disabled: {
      description: "Whether the button is disabled",
      control: {
        type: "boolean",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

// Base examples for each variant
export const Default: Story = {
  args: {
    variant: "default",
    children: "Default Button",
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
}

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
}

// Size examples
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
}

export const IconButton: Story = {
  args: {
    size: "icon",
    variant: "outline",
    children: <Settings />,
    "aria-label": "Settings",
  },
}

// State examples
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
}

export const Loading: Story = {
  args: {
    children: (
      <>
        <Loader2 className="animate-spin" />
        Loading...
      </>
    ),
    disabled: true,
  },
}

// With icon examples
export const WithLeadingIcon: Story = {
  args: {
    children: (
      <>
        <Mail />
        Email
      </>
    ),
  },
}

export const WithTrailingIcon: Story = {
  args: {
    children: (
      <>
        Next
        <ChevronRight />
      </>
    ),
  },
}

// Group of examples showcasing all variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Button variant="default">Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  ),
}

// Group of examples showcasing all sizes
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        {/* Small buttons */}
        <div className="flex gap-2">
          <Button size="sm" variant="default">Small</Button>
          <Button size="sm" variant="outline">Small</Button>
          <Button size="sm" variant="secondary">Small</Button>
          <Button size="sm" variant="outlineSecondary">Small</Button>
          <Button size="sm" variant="link">Small</Button>
        </div>
        {/* Default size buttons */}
        <div className="flex gap-2">
          <Button size="default" variant="default">Default</Button>
          <Button size="default" variant="outline">Default</Button>
          <Button size="default" variant="secondary">Default</Button>
          <Button size="default" variant="outlineSecondary">Default</Button>
          <Button size="default" variant="link">Default</Button>
        </div>
        {/* Large buttons */}
        <div className="flex gap-2">
          <Button size="lg" variant="default">Large</Button>
          <Button size="lg" variant="outline">Large</Button>
          <Button size="lg" variant="secondary">Large</Button>
          <Button size="lg" variant="outlineSecondary">Large</Button>
          <Button size="lg" variant="link">Large</Button>
        </div>
        {/* Icon buttons */}
        <div className="flex gap-2">
          <Button size="icon" variant="default"><Settings /></Button>
          <Button size="icon" variant="outline"><Settings /></Button>
          <Button size="icon" variant="secondary"><Settings /></Button>
          <Button size="icon" variant="outlineSecondary"><Settings /></Button>
          <Button size="icon" variant="link"><Settings /></Button>
        </div>
      </div>
    </div>
  ),
}

// Use cases examples
export const UseCaseForm: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="default">
        <Save />
        Save Changes
      </Button>
      <Button variant="outline">Cancel</Button>
    </div>
  ),
}


export const UseCaseNotifications: Story = {
  render: () => (
    <div className="w-full max-w-md rounded-md border p-4">
      <h3 className="mb-2 font-semibold">Notification Preferences</h3>
      <p className="mb-4 text-sm text-muted-foreground">
        Manage how you receive notifications.
      </p>
      <div className="flex gap-2">
        <Button variant="secondary">
          <Bell />
          Allow
        </Button>
        <Button variant="ghost">Block</Button>
      </div>
    </div>
  ),
}

// Reactive example showing hover and focus states
export const InteractiveStates: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="space-y-4 rounded-md border p-4">
        <h3 className="font-semibold">Hover</h3>
        <p className="text-sm text-muted-foreground">
          All buttons have hover states that adjust their appearance.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </div>
      <div className="space-y-4 rounded-md border p-4">
        <h3 className="font-semibold">Focus</h3>
        <p className="text-sm text-muted-foreground">
          All buttons have focus states for keyboard navigation.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="focus" variant="default">Tab to me</Button>
          <Button className="focus" variant="outline">Or me</Button>
        </div>
      </div>
    </div>
  ),
}