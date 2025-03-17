import {Meta, StoryObj} from '@storybook/react';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';
import {AppWindow, BadgeCheck, ChartLine, ChevronDownIcon} from 'lucide-react';
import {cn} from '@/lib/utils';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
        options: ['single', 'multiple'],
        control: {
           type: 'radio' 
        },
        description: 'The type of accordion. Single allows only one item to be open at a time, multiple allows multiple items to be open at a time.',
        defaultValue: 'single'
    },
    collapsible: {
        control: {
            type: 'boolean'
        },
        description: 'Whether the accordion can be collapsed or not.',
        defaultValue: true
    },
    disabled: {
        control: {
            type: 'boolean'},
        description: 'Whether the accordion is disabled or not.',
        defaultValue: false
    }
  }
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    type: 'single',
    collapsible: true,
    disabled: false
  },
  render: (args) => { 
    return (
      <Accordion 
        className="w-full max-w-md mx-auto rounded-lg border border-gray-200 shadow-lg bg-white overflow-hidden" 
        {...args}
      >
        <AccordionItem 
          value="item1" 
          className="border-b border-gray-200 last:border-0"
        >
          <AccordionTrigger className="flex justify-between items-center p-5 hover:bg-gray-50 transition-all duration-200 font-medium text-lg">
            <div className="flex items-center space-x-3">
              
              <span>Security Features</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="bg-gray-50 p-5 text-gray-700">
            <div className="space-y-3">
              <h3 className="font-semibold text-blue-600">Advanced Protection</h3>
              <p className="leading-relaxed">
                Our platform employs state-of-the-art encryption and multi-factor authentication to ensure your data remains secure. Regular security audits and updates provide peace of mind.
              </p>
              <div className="flex justify-end mt-2">
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">Learn more →</button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
};

export const CustomStyling: Story = {
    args: {
      type: "single",
      collapsible: true,
    },
    render: (args) => (
      <Accordion className="w-full max-w-md" {...args}>
        <AccordionItem value="item-1" className="border-b border-blue-200">
          <AccordionTrigger className="text-blue-600 hover:text-blue-800">
            Custom Colors
          </AccordionTrigger>
          <AccordionContent className="text-blue-700">
            This accordion has custom colors applied.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b border-green-200">
          <AccordionTrigger className="text-green-600 hover:text-green-800">
            Different Styling
          </AccordionTrigger>
          <AccordionContent className="text-green-700">
            Each accordion item can have its own custom styling.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b border-purple-200">
          <AccordionTrigger className="text-purple-600 hover:text-purple-800">
            More Options
          </AccordionTrigger>
          <AccordionContent className="text-purple-700">
            Customize the styling to match your design system.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
  };

  export const WithIcons: Story = {
    args: {
      type: "single",
      collapsible: true,
    },
    render: (args) => (
      <Accordion className="w-full max-w-md" {...args}>
        <AccordionItem value="item-1" className="">
          <AccordionTrigger className="">
          <div className="flex items-center gap-2">
          <AppWindow />
            Option 1
            </div>
          </AccordionTrigger>
          <AccordionContent className="">
            This accordion has custom colors applied.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="">
          <AccordionTrigger className="">
          <div className="flex items-center gap-2">
          <BadgeCheck />
            Option 2
            </div>
          </AccordionTrigger>
          <AccordionContent className="">
            Each accordion item can have its own custom styling.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="">
          <AccordionTrigger className="">
          <div className="flex items-center gap-2">
          <ChartLine />
            Option 3
            </div>
          </AccordionTrigger>
          <AccordionContent className="">
            Customize the styling to match your design system.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
  };

  export const Nested: Story = {
    args: {
      type: 'single',
      collapsible: true,
      disabled: false
    },
    render: (args) => { 
      return (
        <Accordion className='w-full max-w-md' {...args} >
          <AccordionItem value="item1">
            <AccordionTrigger>Option 1</AccordionTrigger>
            <AccordionContent>
              <Accordion type="multiple" className='pt-1 ml-12'>
                <AccordionItem value="item1-1">
                  <AccordionTrigger>Sub Option 1</AccordionTrigger>
                  <AccordionContent>
                    <p>Sub Content 1</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item1-2">
                  <AccordionTrigger>Sub Option 2</AccordionTrigger>
                  <AccordionContent>
                    <p>Sub Content 2</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item1-3">
                  <AccordionTrigger>Sub Option 3</AccordionTrigger>
                  <AccordionContent>
                    <p>Sub Content 3</p>
                  </AccordionContent>
                </AccordionItem>

              </Accordion>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item2">
            <AccordionTrigger>Option 2</AccordionTrigger>
            <AccordionContent>
              <p>Content 2</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item3">
            <AccordionTrigger>Option 3</AccordionTrigger>
            <AccordionContent>
              <p>Content 3</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )
    }
  };