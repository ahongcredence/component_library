import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { 
  Info, 
  HelpCircle, 
  Settings, 
  Plus, 
  User
} from "lucide-react";

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">
          <HelpCircle className="h-4 w-4" />
          <span className="ml-2">Hover Me</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p className='text-white'>This is a helpful tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="flex items-center justify-center space-x-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <HelpCircle className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p className='text-white'>Top tooltip</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <HelpCircle className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p className='text-white'>Right tooltip</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <HelpCircle className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p className='text-white'>Bottom tooltip</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <HelpCircle className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p className='text-white'>Left tooltip</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <Tooltip delayDuration={700}>
      <TooltipTrigger asChild>
        <Button variant="outline">
          <Settings className="h-4 w-4 mr-2" />
          Hover (Delayed)
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p className='text-white'>This tooltip has a 700ms delay</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithRichContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">
          <Info className="h-4 w-4 mr-2" />
          Feature Info
        </Button>
      </TooltipTrigger>
      <TooltipContent className="w-80">
        <div className="space-y-2">
          <h4 className="font-medium">Advanced Features</h4>
          <p className="text-sm text-white">
            This feature enables advanced workflows for your team, including automated reporting,
            custom integrations, and enhanced security options.
          </p>
          <div className="border-t pt-2 text-xs text-muted-foreground">
            Available on Pro and Enterprise plans
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex space-x-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
            <span className="sr-only">Settings</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className='text-white'>Settings</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <User className="h-4 w-4" />
            <span className="sr-only">User profile</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className='text-white'>User profile</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Plus className="h-4 w-4" />
            <span className="sr-only">Add new</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className='text-white'>Add new item</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};

export const WithDisabledButton: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <span tabIndex={0}>
          <Button variant="outline" disabled>
            Disabled Button
          </Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p className='text-white'>You need permission to perform this action</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    
    return (
      <div className="space-y-4">
        <div className="flex space-x-4">
          <Button onClick={() => setOpen(true)} variant="outline">
            Show Tooltip
          </Button>
          <Button onClick={() => setOpen(false)} variant="outline">
            Hide Tooltip
          </Button>
        </div>
        
        <div className="pt-4">
          <Tooltip open={open} onOpenChange={setOpen}>
            <TooltipTrigger asChild>
              <Button variant="default">
                Controlled Tooltip
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className='text-white'>This tooltip is controlled programmatically</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    );
  },
};