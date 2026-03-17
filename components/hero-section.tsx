"use client";

import { personalInfo, education, certifications, companies } from "@/lib/data";
import { Mail, MapPin, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center pt-24 pb-12 floral-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:items-start">
          
          {/* Mobile: Profile Picture First */}
          <div className="lg:hidden flex flex-col items-center w-full">
            {/* Profile Picture with breathing animation and cute shadow */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-[0_20px_50px_rgba(209,77,114,0.3)] animate-float">
              <Image
                src="/profile.jpg"
                alt="Sanjukktha Senthil Kumar"
                width={224}
                height={224}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Company Logos - mobile */}
            <div className="flex items-center justify-center gap-4 mt-5 flex-wrap">
              {companies.map((company) => (
                <Image
                  key={company.name}
                  src={company.logo}
                  alt={company.name}
                  width={80}
                  height={40}
                  className={`object-contain w-auto ${company.size}`}
                />
              ))}
            </div>
          </div>

          {/* Left Column - Introduction */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-3">
              <p className="text-primary text-sm font-medium tracking-wider uppercase">
                Welcome
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-balance">{personalInfo.name}</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-primary font-medium">
                {personalInfo.title}
              </p>
            </div>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                {personalInfo.location}
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail size={16} className="text-primary" />
                <span className="hidden sm:inline">{personalInfo.email}</span>
                <span className="sm:hidden">Email</span>
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
            <div className="pt-2">
              <p className="text-sm font-medium text-foreground mb-3">
                Explore My Experience
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                <Link
                  href="/experience/swe"
                  className="group px-3 sm:px-4 py-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg text-xs sm:text-sm font-medium text-secondary-foreground transition-all flex items-center gap-1.5 sm:gap-2"
                >
                  Software Engineering
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/experience/ml"
                  className="group px-3 sm:px-4 py-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg text-xs sm:text-sm font-medium text-secondary-foreground transition-all flex items-center gap-1.5 sm:gap-2"
                >
                  ML / AI
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/experience/data"
                  className="group px-3 sm:px-4 py-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg text-xs sm:text-sm font-medium text-secondary-foreground transition-all flex items-center gap-1.5 sm:gap-2"
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
            <div className="pt-1">
              <p className="text-sm font-medium text-foreground mb-3">
                Explore My Projects
              </p>
              <Link
                href="/projects"
                className="group px-3 sm:px-4 py-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg text-xs sm:text-sm font-medium text-secondary-foreground transition-all inline-flex items-center gap-1.5 sm:gap-2"
              >
                View All My Projects
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>

          {/* Right Column - Profile Picture (Desktop), Education & Certifications */}
          <div className="space-y-5 w-full">
            {/* Large Profile Picture - Desktop Only */}
            <div className="hidden lg:flex flex-col items-center">
              {/* Profile Picture with breathing animation and cute shadow */}
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-[0_25px_60px_rgba(209,77,114,0.35)] animate-float">
                <Image
                  src="/profile.jpg"
                  alt="Sanjukktha Senthil Kumar"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Company Logos - desktop */}
              <div className="flex items-center justify-center gap-6 mt-6">
                {companies.map((company) => (
                  <Image
                    key={company.name}
                    src={company.logo}
                    alt={company.name}
                    width={120}
                    height={60}
                    className={`object-contain w-auto ${company.size}`}
                  />
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="sketch-card">
              <h2 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">
                Education
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-primary/30 pl-3 sm:pl-4 hover:border-primary transition-colors"
                  >
                    <h3 className="font-medium text-foreground text-sm sm:text-base">{edu.degree}</h3>
                    <p className="text-primary text-xs sm:text-sm">{edu.school}</p>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      {edu.location} {edu.date && `• ${edu.date}`}
                    </p>
                    <p className="text-primary/80 text-xs sm:text-sm font-medium">
                      GPA: {edu.gpa}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="sketch-card">
              <h2 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">
                Certifications
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 py-2 bg-secondary text-secondary-foreground text-xs sm:text-sm rounded-lg leading-relaxed hover:shadow-md transition-shadow"
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
