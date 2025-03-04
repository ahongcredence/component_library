import type { Meta, StoryObj } from '@storybook/react';
import Footer from '../../components/footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    version: { 
      control: { type: 'text' },
      description: 'Version number to display in the footer',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

// Default state of the footer
export const Default: Story = {
  args: {
    version: "1.0.0",
  },
};

// Footer with different version
export const WithVersion: Story = {
  args: {
    version: "2.3.1",
  },
};

// Mobile view
export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    version: "1.0.0",
  },
};

// Footer with content above
export const WithContentAbove: Story = {
  render: () => (
    <div className="w-full">
      <div className="p-4 bg-gray-50">
        <h2 className="text-xl font-bold mb-2">Page Content</h2>
        <p>This demonstrates how the footer looks with content above it.</p>
      </div>
      <Footer version="1.0.0" />
    </div>
  ),
};

// Footer with long version number
export const LongVersion: Story = {
  args: {
    version: "3.14.159-beta",
  },
};