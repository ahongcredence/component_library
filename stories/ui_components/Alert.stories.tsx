import * as React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { AlertTriangle, InfoIcon, CheckCircleIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
      description: "The visual style of the alert"
    },
    closable: {
      control: "boolean",
      description: "Whether the alert can be dismissed"
    },
    onClose: {
      action: "closed",
      description: "Action to perform when close button is clicked"
    }
  }
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  
  render: (args) => { 
    const [visible, setIsVisible] = React.useState(true)
    if (!visible) {
      return <div></div>;
    }
    return (
    <Alert {...args} onClose={() => setIsVisible(false)}>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  )},
  args: {
    variant: "default",
    closable: true
  }
}

export const Destructive: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTriangle />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
  args: {
    variant: "error",
    closable: true
  }
}

export const Warning: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTriangle />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        This Space for Urgent Messages if Needed
      </AlertDescription>
    </Alert>
  ),
  args: {
    variant: "warning",
    closable: true // Enable the close button for warning alerts
  }
}

export const WithIcon: Story = {
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>Note</AlertTitle>
      <AlertDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDescription>
    </Alert>
  ),
  args: {
    variant: "default"
  }
}

export const SuccessAlert: Story = {
  render: (args) => (
    <Alert {...args} className="border-green-500 bg-green-50 text-green-800">
      <CheckCircleIcon className="text-green-500" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription className="text-green-700">
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  ),
  args: {
    variant: "default"
  }
}

export const TitleOnly: Story = {
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>This is just a title with no description</AlertTitle>
    </Alert>
  ),
  args: {
    variant: "default"
  }
}

export const DescriptionOnly: Story = {
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertDescription>
        This is just a description with no title. Sometimes you might want to use this for simple messages.
      </AlertDescription>
    </Alert>
  ),
  args: {
    variant: "default"
  }
}

export const WithAction: Story = {
  render: (args) => (
    <Alert {...args}>
      <InfoIcon />
      <AlertTitle>Browser Update Available</AlertTitle>
      <AlertDescription>
        <p>A new version of this browser is available with important security updates.</p>
        <div className="mt-4 flex gap-2">
          <button className="rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90">
            Update now
          </button>
          <button className="rounded-md border border-input bg-background px-2.5 py-1.5 text-xs font-medium hover:bg-accent hover:text-accent-foreground">
            Remind me later
          </button>
        </div>
      </AlertDescription>
    </Alert>
  ),
  args: {
    variant: "default"
  }
}

export const Closable: Story = {
  render: (args) => {
    const [isVisible, setIsVisible] = React.useState(true)
    
    if (!isVisible) {
      return (
        <div className="p-4 border border-dashed rounded-lg border-muted-foreground">
          <p className="text-sm text-muted-foreground">Alert dismissed</p>
        </div>
      )
    }
    
    return (
      <Alert 
        {...args} 
        onClose={() => setIsVisible(false)}
      >
        <InfoIcon />
        <AlertTitle>Dismissible Alert</AlertTitle>
        <AlertDescription>
          This alert can be dismissed by clicking the close button in the corner.
        </AlertDescription>
      </Alert>
    )
  },
  args: {
    variant: "default",
    closable: true // Enable the close button
  }
}

