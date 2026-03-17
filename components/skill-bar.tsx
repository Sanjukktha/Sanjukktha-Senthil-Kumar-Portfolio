"use client";

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
}

export function SkillBar({ name, level, index }: SkillBarProps) {
  return (
    <div
      className="animate-fade-in-up opacity-0"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${level}%`,
            animation: `grow-width 1s ease-out ${index * 50}ms forwards`,
          }}
        />
      </div>
      <style jsx>{`
        @keyframes grow-width {
          from {
            width: 0%;
          }
          to {
            width: ${level}%;
          }
        }
      `}</style>
    </div>
  );
}
