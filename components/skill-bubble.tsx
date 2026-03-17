"use client";

interface SkillBubbleProps {
  name: string;
  index: number;
}

export function SkillBubble({ name, index }: SkillBubbleProps) {
  return (
    <span
      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full cursor-default transition-all duration-200 hover:bg-primary hover:text-primary-foreground animate-fade-in-up opacity-0"
      style={{ animationDelay: `${index * 30}ms` }}
    >
      {name}
    </span>
  );
}
