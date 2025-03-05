import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { 
  Alert, 
  AlertDescription, 
  AlertTitle 
} from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { 
  Terminal, 
  AlertCircle, 
  Info as InfoIcon, 
  CheckCircle,
  X
} from 'lucide-react';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

// Component for demonstrating dismissible alerts
const DismissibleAlert = ({ children, variant, className }: { 
  children: React.ReactNode, 
  variant?: "default" | "destructive",
  className?: string
}) => {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null;
  
  // Check if children contains AlertTitle to adjust layout and spacing
  const hasTitle = React.Children.toArray(children).some(
    child => React.isValidElement(child) && child.type === AlertTitle
  );
  
  return (
    <Alert variant={variant} className={`relative pr-10 ${className || ''}`}>
      {children}
      <Button 
        variant="ghost" 
        size="sm" 
        className={`absolute right-2 h-6 w-6 p-0 ${hasTitle ? 'top-2' : 'top-1/2 -translate-y-1/2'}`}
        onClick={() => setIsVisible(false)}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </Button>
    </Alert>
  );
};

export const Default: Story = {
  render: () => (
    <DismissibleAlert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </DismissibleAlert>
  ),
};

export const WithTerminalIcon: Story = {
  render: () => (
    <DismissibleAlert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </DismissibleAlert>
  ),
};

export const Success: Story = {
  render: () => (
    <DismissibleAlert className="border-green-500 bg-green-50 dark:bg-green-950">
      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </DismissibleAlert>
  ),
};

export const Error: Story = {
  render: () => (
    <DismissibleAlert 
      variant="destructive" 
      className="border-2 border-black text-accent-rust [&>svg]:text-current *:data-[slot=alert-description]:text-destructive-foreground/80"
    >
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        There was a problem with your request. Please try again.
      </AlertDescription>
    </DismissibleAlert>
  ),
};

export const Info: Story = {
  render: () => (
    <DismissibleAlert className="border-blue-500 bg-blue-50 dark:bg-blue-950">
      <InfoIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This action will take some time to complete.
      </AlertDescription>
    </DismissibleAlert>
  ),
};

export const WithLongText: Story = {
  render: () => (
    <DismissibleAlert>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Important Notice</AlertTitle>
      <AlertDescription>
        This is a longer description that might span multiple lines to demonstrate
        how the Alert component handles longer content. The alert component is designed
        to be flexible and accommodate varying amounts of text while maintaining
        its aesthetic appeal and readability.
      </AlertDescription>
    </DismissibleAlert>
  ),
};

export const TitleOnly: Story = {
  render: () => (
    <DismissibleAlert>
      <AlertTitle>Notification</AlertTitle>
    </DismissibleAlert>
  ),
};

export const DescriptionOnly: Story = {
  render: () => (
    <DismissibleAlert>
      <AlertDescription>
        This alert contains only a description without a title.
      </AlertDescription>
    </DismissibleAlert>
  ),
};

export const MultipleAlerts: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <DismissibleAlert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>System maintenance scheduled for tonight.</AlertDescription>
      </DismissibleAlert>
      
      <DismissibleAlert variant="destructive" className="border-2 border-black text-accent-rust [&>svg]:text-current *:data-[slot=alert-description]:text-destructive-foreground/80">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Failed to upload document.</AlertDescription>
      </DismissibleAlert>
      
      <DismissibleAlert className="border-green-500 bg-green-50 dark:bg-green-950">
        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Profile updated successfully.</AlertDescription>
      </DismissibleAlert>
    </div>
  ),
};