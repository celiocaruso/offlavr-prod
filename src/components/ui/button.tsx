import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-[30px] text-sm font-medium", // Changed from rounded-md to rounded-[30px]
          "transition-colors focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-primary focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";