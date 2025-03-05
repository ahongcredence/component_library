# UI Component Library Storybook

This Storybook instance documents and showcases our UI component library built with React and shadcn/ui. It serves as both a development environment and living documentation for our component system.

## Purpose

- **Development Environment**: Provides an isolated environment to build and test UI components
- **Documentation**: Serves as a living styleguide for developers and designers
- **Component Showcase**: Demonstrates component variations, states, and usage patterns
- **Accessibility Testing**: Enables testing of components for accessibility compliance
- **Responsive Testing**: Offers viewport controls to test components at different screen sizes

## Components

Our Storybook includes the following UI components:

### Layout Components
- **Header**: Application header with responsive behavior and authentication states
- **Footer**: Application footer with version display
- **NavigationMenu**: Multi-level navigation with dropdown menus and responsive layout

### Form Components
- **Button**: Multi-variant buttons with different states, sizes, and icon placements
- **Input**: Text input fields with various types and states
- **RadioGroup**: Radio button groups for single-selection options
- **DateRangePicker**: Calendar-based date range selection component

### Feedback Components
- **Alert**: Status alerts with different variants, icons, and dismissal functionality
- **Tooltip**: Contextual help tooltips with positioning options and rich content support

### Display Components
- **Avatar**: User avatars with image support, fallbacks, and size options

## Usage Guide

### Running Storybook

```bash
# Install dependencies
npm install

# Start Storybook development server
npm run storybook
```

### Component Documentation

Each component includes comprehensive documentation:

- **Props/Arguments**: All available component props with descriptions and default values
- **Variants**: Visual variations of components (e.g., Button variants like default, outline, ghost)
- **States**: Different component states (e.g., disabled, loading, hover)
- **Responsive Behavior**: How components adapt to different viewport sizes
- **Usage Examples**: Real-world examples showing the component in context

### Viewing Stories

1. Browse components in the left sidebar navigation
2. Select a component to view its stories
3. Each story demonstrates a specific variant, state, or usage pattern
4. Use the "Docs" tab for comprehensive documentation
5. Use the "Canvas" tab for interactive component testing

### Interacting with Components

- **Controls Panel**: Modify component props in real-time to see how they affect rendering
- **Actions Panel**: Monitor events triggered by component interactions
- **Viewport Toolbar**: Test components at different screen sizes
- **Accessibility Panel**: Check components for accessibility issues

## Development Workflow

### Adding New Components

1. Create your component in the source code
2. Create a corresponding `ComponentName.stories.tsx` file
3. Define a default story and additional stories for variants/states
4. Include proper documentation in the story file

### Story Structure

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import MyComponent from './MyComponent';

const meta: Meta<typeof MyComponent> = {
  title: 'Category/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
  // Add component documentation and controls
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

// Basic story
export const Default: Story = {
  args: {
    // Component props go here
  },
};

// Additional variants/stories
export const Variant: Story = {
  args: {
    // Variant-specific props
  },
};
```

## Best Practices

- Create separate stories for each component variant and state
- Use the `render` function for complex stories with multiple components
- Provide meaningful descriptions for all props and stories
- Use decorators for consistent component presentation
- Test components at different viewport sizes
- Include usage examples showing components in context

## Additional Resources

- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Component Design Guidelines](link-to-your-design-guidelines)