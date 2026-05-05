"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  decimal?: number;
  suffix?: string;
  duration?: number;
}

export function CountUp({ value, decimal = 0, suffix = "", duration = 1800 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState<string>(decimal ? "0.0" : "0");
  const numericTarget = parseFloat(value);
  const isNumeric = !Number.isNaN(numericTarget);

  useEffect(() => {
    if (!isNumeric) {
      setDisplay(value);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);

        let start: number | null = null;
        const step = (ts: number) => {
          if (start === null) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = eased * numericTarget;
          setDisplay(decimal ? current.toFixed(decimal) : Math.floor(current).toString());
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [numericTarget, decimal, duration, isNumeric, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
