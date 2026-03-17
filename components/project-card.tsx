"use client";

import { Project } from "@/lib/data";
import { ArrowUpRight, Calendar } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const typeLabels = {
    swe: "SWE",
    ml: "ML/AI",
    data: "Data",
  };

  return (
    <Link href={`/projects/${project.id}`}>
      <article
        className="group h-full sketch-card hover:border-primary/70 hover:shadow-lg transition-all duration-300"
      >
        <div className="flex items-start justify-between mb-3">
          <span
            className="px-2 py-0.5 text-xs font-medium rounded border bg-primary/10 text-primary border-primary/20"
          >
            {typeLabels[project.type]}
          </span>
          <ArrowUpRight
            size={18}
            className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
          />
        </div>

        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
          {project.title}
        </h3>
        <p className="text-primary/80 text-sm font-medium mb-2">
          {project.subtitle}
        </p>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar size={12} />
          {project.date}
        </div>
      </article>
    </Link>
  );
}
