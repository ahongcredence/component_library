import type { Meta, StoryObj } from '@storybook/react';
import Footer from '../../components/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Examples/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    // Set a default viewport that will apply to all stories unless overridden
    viewport: {
      defaultViewport: 'responsive',
    },
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
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
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