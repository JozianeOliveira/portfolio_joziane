import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[48px] rounded-md border border-white/10 bg-[var(--color-primary)] px-4 text-base placeholder:text-white/60 outline-none", "transition-colors duration-200",
        "hover:border-[var(--color-accent)] focus:border-[var(--color-accent)]",
        className
      )}
      {...props} />
  );
}

export { Input }
