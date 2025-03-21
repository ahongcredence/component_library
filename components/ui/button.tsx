import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-xs hover:cursor-pointer hover:bg-primary-hover",
        outline:
          "border border-primary text-primary bg-background shadow-xs hover:bg-accent hover:cursor-pointer hover:text-accent-foreground",
        secondary:
          "bg-secondary text-white shadow-xs hover:cursor-pointer hover:bg-secondary-hover",
        outlineSecondary:
          "border border-secondary text-secondary bg-background shadow-xs hover:bg-accent hover:cursor-pointer hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:cursor-pointer hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:cursor-pointer hover:underline",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        default: "h-10 px-4",
        lg: "h-11 px-8",
        icon: "h-10 w-10 p-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
