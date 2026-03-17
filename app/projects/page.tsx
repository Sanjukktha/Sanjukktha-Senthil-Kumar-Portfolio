"use client";

import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { projects, ExperienceType } from "@/lib/data";
import { useState } from "react";
import { cn } from "@/lib/utils";

const filters = [
  { id: "all", label: "All Projects" },
  { id: "swe", label: "Software Engineering" },
  { id: "ml", label: "ML / AI" },
  { id: "data", label: "Data Science" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type.includes(activeFilter as ExperienceType));

  return (
    <main className="min-h-screen floral-bg" style={{ backgroundColor: '#fff5f7' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-12 px-6 bg-gradient-to-b from-primary/20 to-primary/5">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4 animate-fade-in-up opacity-0">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up opacity-0 animation-delay-100">
            Projects
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl animate-fade-in-up opacity-0 animation-delay-200">
            These are a collection of my projects spanning software engineering, machine
            learning, and data analytics. Each project represents a unique
            challenge and learning experience.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 animate-fade-in-up opacity-0 animation-delay-300">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  activeFilter === filter.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No projects found for this filter.
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>Sanjukktha Senthil Kumar</p>
          <p>Built with Next.js</p>
        </div>
      </footer>
    </main>
  );
}
