import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ShadForm from '@/components/ShadForm';
import StoresHeader from '@/components/StoresHeader';
const meta: Meta<typeof ShadForm> = {
  title: 'Forms/ShadForm',
  component: ShadForm,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ShadForm>;

export const Default: Story = {
  render: () =>(
    <>
    <StoresHeader />
  <ShadForm />
  </>
  )
};