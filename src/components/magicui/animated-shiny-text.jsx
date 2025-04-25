"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const AnimatedShinyText = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <span
        className={cn(
          "text-neutral-600/70 dark:text-neutral-400/70",
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      style={{
        "--shiny-width": `${shimmerWidth}px`,
      }}
      className={cn(
        "mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70",
        // Shine effect
        "animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
        // Shine gradient
        "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
