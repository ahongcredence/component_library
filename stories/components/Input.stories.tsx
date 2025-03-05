import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const meta: Meta<typeof Input> = {
    title: "Components/Input",
    component: Input,
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: {
                type: "select",
            },
            options: ["text", "password", "email", "number", "tel"],
            description: "The input type",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "text" },
            },
        }
    }
}
export default meta
type Story = StoryObj<typeof Input>

export const Text: Story = {
    args: {
        type: "text",
        placeholder: "Enter your full name",
        className: "w-full max-w-md border-2 border-gray-200 focus:border-blue-500 rounded-lg px-4 py-3 text-base transition-all duration-200 shadow-sm focus:shadow-md focus:ring-2 focus:ring-blue-200 focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:focus:border-blue-400 dark:focus:ring-blue-900/30"
    },
    render: (args) => (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-500 dark:text-gray-400">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
                <Input {...args} className={`${args.className} pl-10`} />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Please enter your legal name as it appears on your ID.</p>
        </div>
    )
} 

export const Email: Story = {
    args: {
        type: "email",
        placeholder: "you@example.com",
        className: "w-full max-w-md border-2 border-gray-200 focus:border-indigo-500 rounded-lg px-4 py-3 text-base transition-all duration-200 shadow-sm focus:shadow-md focus:ring-2 focus:ring-indigo-200 focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:focus:border-indigo-400 dark:focus:ring-indigo-900/30"
    },
    render: (args) => (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-500 dark:text-gray-400">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                </div>
                <Input {...args} className={`${args.className} pl-10`} />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">We'll never share your email with anyone else.</p>
        </div>
    )
} 

export const Password: Story = {
    args: {
        type: "password",
        placeholder: "Enter password",
        className: "w-full max-w-md border-2 border-gray-200 focus:border-purple-500 rounded-lg px-4 py-3 text-base transition-all duration-200 shadow-sm focus:shadow-md focus:ring-2 focus:ring-purple-200 focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:focus:border-purple-400 dark:focus:ring-purple-900/30"
    },
    render: (args) => {
        const [showPassword, setShowPassword] = useState(false);
        
        return (
            <div className="space-y-2">
                <div className="flex justify-between">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                    <a href="#" className="text-sm text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300">Forgot password?</a>
                </div>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-500 dark:text-gray-400">
                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                    </div>
                    <Input 
                        {...args} 
                        type={showPassword ? "text" : "password"} 
                        className={`${args.className} pl-10 pr-10`} 
                    />
                    <button 
                        type="button" 
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                                <line x1="2" x2="22" y1="2" y2="22"></line>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                        )}
                    </button>
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-1/4 h-1 bg-red-200 rounded-full"></div>
                    <div className="w-1/4 h-1 bg-yellow-200 rounded-full"></div>
                    <div className="w-1/4 h-1 bg-green-200 rounded-full"></div>
                    <div className="w-1/4 h-1 bg-gray-200 rounded-full"></div>
                    <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">Medium strength</span>
                </div>
            </div>
        );
    }
} 

export const WithButton: Story = {
    render: () => (
        <div className="w-full max-w-md">
            <div className="space-y-2 mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subscribe to our newsletter</label>
                <p className="text-sm text-gray-500 dark:text-gray-400">Get the latest updates and exclusive offers directly to your inbox</p>
            </div>
            <div className="flex">
                <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-500 dark:text-gray-400">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                    </div>
                    <Input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="w-full border-2 border-r-0 border-gray-200 rounded-l-lg px-4 py-3 pl-10 text-base transition-all duration-200 focus:shadow-md focus:ring-2 focus:ring-blue-200 focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:border-blue-400 dark:focus:ring-blue-900/30" 
                    />
                </div>
                <Button 
                    variant="default" 
                    className="border-2 border-blue-600 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white font-medium rounded-r-lg px-6 py-3 text-base shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-200 dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-900/30"
                >
                    Subscribe
                </Button>
            </div>
            <div className="mt-3 flex items-center">
                <input type="checkbox" id="terms" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <label htmlFor="terms" className="ml-2 block text-xs text-gray-500 dark:text-gray-400">
                    I agree to receive marketing emails (you can unsubscribe anytime)
                </label>
            </div>
        </div>
    ),
}