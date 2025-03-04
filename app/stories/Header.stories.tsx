import type { Meta, StoryObj } from '@storybook/react';
import Header from '../../components/header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    isLoggedIn: { 
      control: { type: 'boolean' },
      description: 'Whether the user is logged in or not',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

// Default story with the header as implemented
export const Default: Story = {
  args: {
    isLoggedIn: true,
  },
};

// Show the header in a mobile viewport
export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

// Show the header with content below
export const WithContent: Story = {
  render: () => (
    <div className="w-full">
      <Header />
      <div className="p-4 bg-gray-50">
        <h2 className="text-xl font-bold mb-2">Page Content</h2>
        <p>This demonstrates how the header looks with content below it.</p>
      </div>
    </div>
  ),
};

// Show header for logged out user
export const LoggedOut: Story = {
  args: {
    isLoggedIn: false,
  },
};