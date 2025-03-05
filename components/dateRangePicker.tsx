import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DateRangePickerProps {
  className?: string;
  initialDateRange?: DateRange;
  onDateRangeChange?: (dateRange: DateRange | undefined) => void;
}

export function DateRangePicker({
  className,
  initialDateRange,
  onDateRangeChange,
}: DateRangePickerProps) {
  const [date, setDate] = React.useState<DateRange | undefined>(
    initialDateRange || {
      from: new Date(),
      to: addDays(new Date(), 7),
    }
  );
  const [isOpen, setIsOpen] = React.useState(false);

  // Handle date change and invoke callback if provided
  const handleDateChange = (newDate: DateRange | undefined) => {
    setDate(newDate);
    if (onDateRangeChange) {
      onDateRangeChange(newDate);
    }
  };

  // Format the date range for display
  const formatDateRange = () => {
    if (!date?.from) {
      return "Select date range";
    }

    if (date.to) {
      return `${format(date.from, "LLL dd, y")} - ${format(date.to, "LLL dd, y")}`;
    }

    return format(date.from, "LLL dd, y");
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {formatDateRange()}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateChange}
            numberOfMonths={2}
          />
          <div className="flex items-center justify-between p-3 border-t">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const today = new Date();
                handleDateChange({
                  from: today,
                  to: addDays(today, 7),
                });
                setIsOpen(false);
              }}
            >
              Next 7 days
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const today = new Date();
                handleDateChange({
                  from: today,
                  to: addDays(today, 30),
                });
                setIsOpen(false);
              }}
            >
              Next 30 days
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Done
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}