"use client";

import { personalInfo, education, certifications, companies } from "@/lib/data";
import { Mail, MapPin, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center pt-20 floral-bg">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Introduction */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary text-sm font-medium tracking-wider uppercase">
                Welcome
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-balance">{personalInfo.name}</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium">
                {personalInfo.title}
              </p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                {personalInfo.location}
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail size={16} className="text-primary" />
                {personalInfo.email}
              </a>
              <a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Linkedin size={16} className="text-primary" />
                LinkedIn
              </a>
            </div>

            {/* Explore My Experience */}
            <div className="pt-4">
              <p className="text-sm font-medium text-foreground mb-4">
                Explore My Experience
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/experience/swe"
                  className="group px-4 py-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg text-sm font-medium text-secondary-foreground transition-all flex items-center gap-2"
                >
                  Software Engineering
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/experience/ml"
                  className="group px-4 py-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg text-sm font-medium text-secondary-foreground transition-all flex items-center gap-2"
                >
                  ML / AI
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/experience/data"
                  className="group px-4 py-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg text-sm font-medium text-secondary-foreground transition-all flex items-center gap-2"
                >
                  Data Science
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>

            {/* Explore My Projects */}
            <div className="pt-2">
              <p className="text-sm font-medium text-foreground mb-4">
                Explore My Projects
              </p>
              <Link
                href="/projects"
                className="group px-4 py-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg text-sm font-medium text-secondary-foreground transition-all inline-flex items-center gap-2"
              >
                View All My Projects
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>

          {/* Right Column - Profile Picture, Education & Certifications */}
          <div className="space-y-6">
            {/* Large Profile Picture */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/40 shadow-xl shadow-primary/20">
                <Image
                  src="/profile.jpg"
                  alt="Sanjukktha Senthil Kumar"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Company Logos - directly under profile pic, no squares, bigger */}
              <div className="flex items-center justify-center gap-6 mt-6">
                {companies.map((company) => (
                  <Image
                    key={company.name}
                    src={company.logo}
                    alt={company.name}
                    width={100}
                    height={100}
                    className="object-contain h-16 w-auto"
                  />
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-primary/30 pl-4 hover:border-primary transition-colors"
                  >
                    <h3 className="font-medium text-foreground">{edu.degree}</h3>
                    <p className="text-primary text-sm">{edu.school}</p>
                    <p className="text-muted-foreground text-sm">
                      {edu.location} {edu.date && `• ${edu.date}`}
                    </p>
                    <p className="text-primary/80 text-sm font-medium">
                      GPA: {edu.gpa}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Certifications
              </h2>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="px-4 py-2.5 bg-secondary text-secondary-foreground text-sm rounded-lg leading-relaxed"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
