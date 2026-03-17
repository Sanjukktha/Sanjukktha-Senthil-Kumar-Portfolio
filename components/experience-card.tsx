"use client";

import { Experience } from "@/lib/data";
import { Building2, MapPin, Calendar } from "lucide-react";
import Image from "next/image";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <article
      className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {experience.role}
          </h3>
          <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Building2 size={14} className="text-primary" />
              {experience.company}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-primary" />
              {experience.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-primary" />
              {experience.date}
            </span>
          </div>
        </div>
        {experience.logo && (
          <Image
            src={experience.logo}
            alt={`${experience.company} logo`}
            width={80}
            height={80}
            className="object-contain h-16 w-auto flex-shrink-0"
          />
        )}
      </div>

      <ul className="space-y-2">
        {experience.bullets.map((bullet, bulletIndex) => (
          <li
            key={bulletIndex}
            className="text-muted-foreground text-sm leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-primary/50 before:rounded-full"
          >
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  );
}
