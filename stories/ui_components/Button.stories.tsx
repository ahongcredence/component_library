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