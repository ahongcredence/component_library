// src/stories/ThemeDemo.stories.jsx
import React from 'react';

export default {
  title: 'Design System/Theme Demo',
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    backgroundColor: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'background', 'background-alt'],
      mapping: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        'background-alt': 'var(--color-background-alt)',
      },
    },
    textColor: {
      control: { type: 'select' },
      options: ['text', 'text-dark', 'text-light', 'primary', 'secondary'],
      mapping: {
        text: 'var(--color-text)',
        'text-dark': 'var(--color-text-dark)',
        'text-light': 'var(--color-text-light)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
    },
  },
};

interface ThemePreviewProps {
  backgroundColor: string;
  textColor: string;
}

export const ThemePreview = ({ backgroundColor, textColor }: ThemePreviewProps) => (
  <div 
    className="p-8 rounded-lg"
    style={{ backgroundColor }}
  >
    <h2 className="text-2xl mb-4" style={{ color: textColor }}>Theme Preview</h2>
    <p style={{ color: textColor }}>
      This component demonstrates how your theme colors look when applied to different elements.
      Try changing the background and text colors using the controls below.
    </p>
    <button
      className="mt-4 px-4 py-2 rounded-md"
      style={{ 
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-text-light)'
      }}
    >
      Primary Button
    </button>
    <button
      className="mt-4 ml-4 px-4 py-2 rounded-md"
      style={{ 
        backgroundColor: 'var(--color-secondary)',
        color: 'var(--color-text-light)' 
      }}
    >
      Secondary Button
    </button>
  </div>
);

ThemePreview.args = {
  backgroundColor: 'var(--color-background)',
  textColor: 'var(--color-text)',
};