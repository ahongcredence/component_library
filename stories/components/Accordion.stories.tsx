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
              <div className="bg-blue-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M12 22s8-4 8-10V4l-8-2-8 2v8c0 6 8 10 8 10z" />
                </svg>
              </div>
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
        
        <AccordionItem 
          value="item2"
          className="border-b border-gray-200 last:border-0"
        >
          <AccordionTrigger className="flex justify-between items-center p-5 hover:bg-gray-50 transition-all duration-200 font-medium text-lg">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <span>User Experience</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="bg-gray-50 p-5 text-gray-700">
            <div className="space-y-3">
              <h3 className="font-semibold text-green-600">Intuitive Design</h3>
              <p className="leading-relaxed">
                Our user-centered approach focuses on creating intuitive interfaces that are accessible to all. Customizable dashboards and themes allow you to personalize your experience.
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="bg-white p-2 rounded border border-gray-200 text-center text-sm">
                  <span className="block text-green-600 font-bold">99%</span>
                  <span className="text-xs text-gray-500">Satisfaction</span>
                </div>
                <div className="bg-white p-2 rounded border border-gray-200 text-center text-sm">
                  <span className="block text-green-600 font-bold">24/7</span>
                  <span className="text-xs text-gray-500">Support</span>
                </div>
                <div className="bg-white p-2 rounded border border-gray-200 text-center text-sm">
                  <span className="block text-green-600 font-bold">5★</span>
                  <span className="text-xs text-gray-500">Rating</span>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem 
          value="item3"
          className="border-b border-gray-200 last:border-0"
        >
          <AccordionTrigger className="flex justify-between items-center p-5 hover:bg-gray-50 transition-all duration-200 font-medium text-lg">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <span>Performance Metrics</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="bg-gray-50 p-5 text-gray-700">
            <div className="space-y-3">
              <h3 className="font-semibold text-purple-600">Analytics Dashboard</h3>
              <p className="leading-relaxed">
                Track your progress with comprehensive analytics and real-time reporting. Visualize trends and identify opportunities for optimization.
              </p>
              <div className="mt-4 h-12 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-purple-300 w-3/4 flex items-center">
                  <span className="ml-3 text-xs font-bold text-white">75% Performance Increase</span>
                </div>
              </div>
              <div className="flex justify-end mt-2">
                <button className="text-sm text-purple-600 hover:text-purple-800 font-medium">View full report →</button>
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