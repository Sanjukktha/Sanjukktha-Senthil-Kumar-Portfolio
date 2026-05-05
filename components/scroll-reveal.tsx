"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Variant = "up" | "left";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  delay?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  variant = "up",
  className = "",
  delay = 0,
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const base = variant === "left" ? "reveal-left" : "reveal";

  return (
    <div
      ref={ref}
      className={`${base} ${visible ? "visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
