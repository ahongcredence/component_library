import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from '@/components/dateRangePicker';
import { addDays, subDays } from 'date-fns';
import {Button} from "@/components/ui/button";
const meta: Meta<typeof DateRangePicker> = {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {
  args: {},
};

export const WithCustomInitialRange: Story = {
  args: {
    initialDateRange: {
      from: subDays(new Date(), 6),
      to: new Date(),
    },
  },
};

export const WithCallback: Story = {
  render: () => {
    const [selectedRange, setSelectedRange] = React.useState<any>({
      from: new Date(),
      to: addDays(new Date(), 14),
    });

    return (
      <div className="space-y-4">
        <DateRangePicker
          initialDateRange={selectedRange}
          onDateRangeChange={(range) => setSelectedRange(range)}
        />
        
        <div className="p-4 border rounded-md">
          <h3 className="font-medium mb-2">Selected Range:</h3>
          <p>
            From: {selectedRange?.from ? selectedRange.from.toDateString() : 'Not selected'}
          </p>
          <p>
            To: {selectedRange?.to ? selectedRange.to.toDateString() : 'Not selected'}
          </p>
          {selectedRange?.from && selectedRange?.to && (
            <p className="mt-2">
              Duration: {Math.round((selectedRange.to - selectedRange.from) / (1000 * 60 * 60 * 24))} days
            </p>
          )}
        </div>
      </div>
    );
  },
};

export const InForm: Story = {
  render: () => {
    const [formData, setFormData] = React.useState({
      eventName: '',
      dateRange: {
        from: addDays(new Date(), 1),
        to: addDays(new Date(), 5),
      },
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(
        `Event "${formData.eventName}" scheduled from ${formData.dateRange.from.toDateString()} to ${formData.dateRange.to.toDateString()}`
      );
    };

    return (
      <form onSubmit={handleSubmit} className="w-80 space-y-4">
        <div className="space-y-2">
          <label htmlFor="event-name" className="text-sm font-medium">
            Event Name
          </label>
          <input
            id="event-name"
            className="w-full px-3 py-2 border rounded-md"
            value={formData.eventName}
            onChange={(e) => setFormData({ ...formData, eventName: e.target.value })}
            placeholder="Enter event name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="date" className="text-sm font-medium">
            Event Duration
          </label>
          <DateRangePicker
            initialDateRange={formData.dateRange}
            onDateRangeChange={(range) => 
              setFormData({ ...formData, dateRange: {
                from: range?.from ?? formData.dateRange.from,
                to: range?.to ?? formData.dateRange.to
              }})
            }
          />
        </div>

        <Button
          variant="default"
          type="submit"
          className="w-full px-4 py-2"
        >
          Schedule Event
        </Button>
      </form>
    );
  },
};