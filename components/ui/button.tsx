import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 px-22 whitespace-nowrap rounded-full text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
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
        default: "h-6 py-2 has-[>svg]:px-3",
        sm: "h-4 px-12 gap-1.5  has-[>svg]:px-2.5",
        lg: "h-8 has-[>svg]:px-4",
        icon: "size-9",
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
