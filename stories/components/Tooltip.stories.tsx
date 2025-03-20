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