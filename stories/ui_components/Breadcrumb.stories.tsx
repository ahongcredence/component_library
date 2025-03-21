import type {Meta, StoryObj} from '@storybook/react';
import {Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator} from '@/components/ui/breadcrumb';

const meta: Meta = {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
    tags: ['autodocs'],

}

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
    render: (args) => (
        <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 p-4 rounded-lg shadow-sm">
            <Breadcrumb {...args} className="font-medium">
                <BreadcrumbList className="flex items-center space-x-1">
                    <BreadcrumbItem className="flex items-center transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">
                        <div className="p-1 bg-blue-50 dark:bg-blue-900/30 rounded-full mr-1">
                          
                        </div>
                        <BreadcrumbLink href="/" className="text-sm hover:underline">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-gray-400">
                      
                    </BreadcrumbSeparator>
                    <BreadcrumbItem className="flex items-center transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">
                        <div className="p-1 bg-purple-50 dark:bg-purple-900/30 rounded-full mr-1">
                         
                        </div>
                        <BreadcrumbLink href="/about" className="text-sm hover:underline">About</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-gray-400">
                     
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                            <div className="p-1 bg-green-50 dark:bg-green-900/30 rounded-full mr-1">
                            
                            </div>
                            <BreadcrumbPage className="text-sm font-bold">Current Page</BreadcrumbPage>
                        </div>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
};

export const NoSeparator: Story = {
    render: (args) => (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-4 rounded-lg shadow-sm">
            <Breadcrumb {...args} className="font-medium">
                <BreadcrumbList className="flex items-center">
                    <BreadcrumbItem className="px-3 py-1 rounded-l-full bg-white dark:bg-gray-800 shadow-sm border-r border-gray-100 dark:border-gray-700 flex items-center">
                    
                        
                        <BreadcrumbLink href="/" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    
                    <BreadcrumbItem className="px-3 py-1 bg-white dark:bg-gray-800 shadow-sm border-r border-gray-100 dark:border-gray-700 flex items-center">
                      
                        <BreadcrumbLink href="/about" className="text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</BreadcrumbLink>
                    </BreadcrumbItem>
                    
                    <BreadcrumbItem className="px-3 py-1 rounded-r-full bg-gray-100 dark:bg-gray-700 shadow-sm flex items-center">
                      
                        <BreadcrumbPage className="text-sm font-bold">Current Page</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
};

export const Ellipses: Story = {
    render: (args) => (
        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
            <Breadcrumb {...args} className="font-medium">
                <BreadcrumbList className="flex items-center space-x-1">
                    <BreadcrumbItem className="transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md">
                        <BreadcrumbLink href="/" className="flex items-center px-2.5 py-1.5 text-sm hover:underline">
                        
                            Home
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-gray-400">
                        
                    </BreadcrumbSeparator>
                    <BreadcrumbEllipsis className="flex">
                        <button className="px-1.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-1">
                            <span>...</span>
                           
                            <span className="sr-only">More pages</span>
                        </button>
                        {/* Dropdown items would go here */}
                    </BreadcrumbEllipsis>
                    <BreadcrumbSeparator className="text-gray-400">
                    
                    </BreadcrumbSeparator>
                    <BreadcrumbItem className="transition-all duration-200 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-md">
                        <BreadcrumbLink href="/about" className="flex items-center px-2.5 py-1.5 text-sm hover:underline">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="h-3.5 w-3.5 mr-1.5"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 16v-4" />
                                <path d="M12 8h.01" />
                            </svg>
                            About
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-gray-400">
                      
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-md px-2.5 py-1.5">
                      
                            <BreadcrumbPage className="text-sm font-bold">Current Page</BreadcrumbPage>
                        </div>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
};