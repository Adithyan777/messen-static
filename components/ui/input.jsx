import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, disabled, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        disabled ? "cursor-not-allowed opacity-50 bg-slate-300" : "", // Add disabled styles conditionally
        className
      )}
      ref={ref}
      disabled={disabled} // Ensure the input is actually disabled
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
