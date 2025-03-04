import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "../../components/ui/input"
import { Button } from "@/components/ui/button"

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
        placeholder: "Text input"
    },
} 

export const Email: Story = {
    args: {
        type: "email",
        placeholder: "Email input"
    },
} 

export const Password: Story = {
    args: {
        type: "password",
        placeholder: "Password input"
    },
} 

export const WithButton: Story = {
    render: () => (
        <div className="flex gap-2 w-md">
            <Input type="text" placeholder="Text input" />
            <Button variant="default" className="px-4 py-2">Submit</Button>
        </div>
    ),
}
