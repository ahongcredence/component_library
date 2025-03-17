import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ItemRequestForm from '@/components/ItemRequestForm';

// Import required CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/components/styles/ItemRequestFormStyle.scss';

const meta: Meta<typeof ItemRequestForm> = {
  title: 'Forms/ItemRequestForm',
  component: ItemRequestForm,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ItemRequestForm>;

// Default story
export const Default: Story = {
  render: () => <ItemRequestForm />
};

// Pre-filled form story
export const Prefilled: Story = {
  render: () => <ItemRequestForm 
    initialValues={{
      requestNumber: '7930016080485',
      requesterType: 'EA',
      catalogType: 'EA',
      stockExistsInStore: 'Yes',
      stockBeingReplaced: 'No',
      customerPOC: 'John Doe',
      pocEmail: 'john.doe@example.mil',
      installationName: 'Fort Testing',
      pocPhone: '555-123-4567'
    }}
  />
};

// Mobile view story
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: () => <ItemRequestForm />
};

// Form with validation errors
export const WithValidationErrors: Story = {
  render: () => <ItemRequestForm 
    showValidationErrors={true}
    initialValues={{
      requestNumber: '',
      pocEmail: 'invalid-email',
      customerPOC: '',
      installationName: ''
    }}
  />
};

// Read-only form story
export const ReadOnly: Story = {
  render: () => <ItemRequestForm 
    readOnly={true}
    initialValues={{
      requestNumber: '7930016080485',
      requesterType: 'EA',
      catalogType: 'EA',
      customerPOC: 'John Doe',
      pocEmail: 'john.doe@example.mil'
    }}
  />
};

// Dark theme story
export const DarkTheme: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: () => (
    <div className="theme-dark">
      <ItemRequestForm theme="dark" />
    </div>
  )
};