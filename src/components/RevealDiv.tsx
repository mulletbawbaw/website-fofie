"use client";

import { useReveal } from "@/hooks/useReveal";
import type { CSSProperties, HTMLAttributes } from "react";

interface RevealDivProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function RevealDiv({ children, className, style, ...rest }: RevealDivProps) {
  const ref = useReveal();
  return (
    <div ref={ref} className={className} style={style} {...rest}>
      {children}
    </div>
  );
}
