import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { 
  RadioGroup, 
  RadioGroupItem 
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDisabledOption: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="r1-option-one" />
        <Label htmlFor="r1-option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="r1-option-two" />
        <Label htmlFor="r1-option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="r1-option-three" disabled />
        <Label 
          htmlFor="r1-option-three" 
          className="text-muted-foreground"
        >
          Disabled Option
        </Label>
      </div>
    </RadioGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one" className="space-y-2">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="r2-option-one" />
        <Label htmlFor="r2-option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="r2-option-two" />
        <Label htmlFor="r2-option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="r2-option-three" />
        <Label htmlFor="r2-option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one" className="flex space-x-4">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="r3-option-one" />
        <Label htmlFor="r3-option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="r3-option-two" />
        <Label htmlFor="r3-option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="r3-option-three" />
        <Label htmlFor="r3-option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithStateManagement: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = React.useState("option-one");
    
    return (
      <div className="space-y-4">
        <RadioGroup 
          value={selectedValue} 
          onValueChange={setSelectedValue}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="r4-option-one" />
            <Label htmlFor="r4-option-one">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="r4-option-two" />
            <Label htmlFor="r4-option-two">Option Two</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="r4-option-three" />
            <Label htmlFor="r4-option-three">Option Three</Label>
          </div>
        </RadioGroup>
        
        <div className="p-4 border rounded-md">
          <p>Selected value: <strong>{selectedValue}</strong></p>
        </div>
      </div>
    );
  },
};

export const InForm: Story = {
  render: () => {
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      alert(`Selected plan: ${formData.get("plan")}`);
    };
    
    return (
      <form onSubmit={handleSubmit} className="space-y-6 w-80">
        <div>
          <h2 className="text-lg font-medium mb-4">Select your plan</h2>
          <RadioGroup defaultValue="basic" name="plan" className="space-y-3">
            <div className="flex items-start space-x-3 p-3 border rounded-md">
              <RadioGroupItem value="basic" id="basic" className="mt-1" />
              <div>
                <Label htmlFor="basic" className="font-medium">Basic</Label>
                <p className="text-sm text-muted-foreground">
                  Perfect for individuals and small projects
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 border rounded-md">
              <RadioGroupItem value="pro" id="pro" className="mt-1" />
              <div>
                <Label htmlFor="pro" className="font-medium">Pro</Label>
                <p className="text-sm text-muted-foreground">
                  Advanced features for professionals and teams
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 border rounded-md">
              <RadioGroupItem value="enterprise" id="enterprise" className="mt-1" />
              <div>
                <Label htmlFor="enterprise" className="font-medium">Enterprise</Label>
                <p className="text-sm text-muted-foreground">
                  Custom solutions for large organizations
                </p>
              </div>
            </div>
          </RadioGroup>
        </div>
        
        <button 
          type="submit" 
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Continue
        </button>
      </form>
    );
  },
};