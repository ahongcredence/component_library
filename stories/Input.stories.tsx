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
        className: "w-full max-w-md border-2 border-gray-200 focus:border-blue-100 rounded-lg px-4 py-3 text-base transition-all duration-200"
    },
    render: (args) => (
        <div className="space-y-2">
            <label className="block text-sm text-gray-700 dark:text-gray-300">Full Name</label>
            <div className="relative">
                <Input {...args} className={`${args.className}`} />
            </div>
        </div>
    )
} 