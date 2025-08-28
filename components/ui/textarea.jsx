import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  className,
  ...props
}) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[120px] w-full rounded-md border bg-[var(--color-primary)] px-4 py-4 text-base text-white placeholder:text-white/60 outline-none transition-colors duration-200", "border-white/10 hover:border-[var(--color-accent)] focus:border-[var(--color-accent)]", "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props} />
  );
}

export { Textarea }
