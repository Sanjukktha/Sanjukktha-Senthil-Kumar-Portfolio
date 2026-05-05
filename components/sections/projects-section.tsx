"use client";

import { personalInfo, projects, type ProjectCategory } from "@/lib/data";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ArrowRight } from "lucide-react";

function ProjectCover({
  category,
  label,
}: {
  category: ProjectCategory;
  label: string;
}) {
  if (category === "Software Engineering") {
    return (
      <svg
        viewBox="0 0 600 180"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="600" height="180" fill="#0f1f3d" />
        {/* Network nodes */}
        <line x1="100" y1="60" x2="200" y2="100" stroke="#c9a84c" strokeWidth="1" opacity="0.5" />
        <line x1="200" y1="100" x2="320" y2="50" stroke="#c9a84c" strokeWidth="1" opacity="0.5" />
        <line x1="320" y1="50" x2="450" y2="120" stroke="#c9a84c" strokeWidth="1" opacity="0.5" />
        <line x1="200" y1="100" x2="450" y2="120" stroke="#c9a84c" strokeWidth="1" opacity="0.4" />
        <line x1="320" y1="50" x2="540" y2="80" stroke="#c9a84c" strokeWidth="1" opacity="0.4" />
        <line x1="450" y1="120" x2="540" y2="80" stroke="#4a7fc1" strokeWidth="1" opacity="0.3" />
        <circle cx="100" cy="60" r="6" fill="#c9a84c" />
        <circle cx="200" cy="100" r="8" fill="#c9a84c" />
        <circle cx="320" cy="50" r="6" fill="#e8d5a3" />
        <circle cx="450" cy="120" r="7" fill="#c9a84c" />
        <circle cx="540" cy="80" r="5" fill="#4a7fc1" opacity="0.7" />
        <text
          x="20"
          y="30"
          fill="rgba(255,255,255,0.35)"
          fontSize="11"
          fontFamily="sans-serif"
          letterSpacing="2"
        >
          {label}
        </text>
      </svg>
    );
  }
  if (category === "AI / ML") {
    return (
      <svg
        viewBox="0 0 600 180"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="600" height="180" fill="#0f1f3d" />
        {/* Concentric pulses */}
        <circle cx="300" cy="95" r="70" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.25" />
        <circle cx="300" cy="95" r="50" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.4" />
        <circle cx="300" cy="95" r="30" fill="none" stroke="#c9a84c" strokeWidth="1.2" opacity="0.6" />
        <circle cx="300" cy="95" r="14" fill="#c9a84c" opacity="0.85" />
        {/* Vector tokens */}
        {[80, 130, 180, 230].map((x, i) => (
          <rect
            key={`l-${i}`}
            x={x}
            y={120 - i * 6}
            width="8"
            height={20 + i * 8}
            fill="#4a7fc1"
            opacity={0.4 + i * 0.1}
            rx="1"
          />
        ))}
        {[370, 420, 470, 520].map((x, i) => (
          <rect
            key={`r-${i}`}
            x={x}
            y={120 - (3 - i) * 6}
            width="8"
            height={20 + (3 - i) * 8}
            fill="#c9a84c"
            opacity={0.4 + (3 - i) * 0.1}
            rx="1"
          />
        ))}
        <text
          x="20"
          y="30"
          fill="rgba(255,255,255,0.35)"
          fontSize="11"
          fontFamily="sans-serif"
          letterSpacing="2"
        >
          {label}
        </text>
      </svg>
    );
  }
  // Data Analytics
  return (
    <svg
      viewBox="0 0 600 180"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <rect width="600" height="180" fill="#0f1f3d" />
      <polyline
        points="0,140 50,110 100,120 150,80 200,95 250,55 300,70 350,45 400,60 450,30 500,48 550,25 600,40"
        fill="none"
        stroke="#c9a84c"
        strokeWidth="2.5"
        opacity="0.9"
      />
      <polyline
        points="0,155 50,138 100,145 150,120 200,130 250,100 300,112 350,88 400,100 450,72 500,85 550,65 600,78"
        fill="none"
        stroke="#4a7fc1"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <polyline
        points="0,165 50,158 100,162 150,150 200,155 250,142 300,147 350,135 400,140 450,128 500,133 550,122 600,127"
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
      />
      <circle cx="250" cy="55" r="4" fill="#c9a84c" />
      <circle cx="350" cy="45" r="4" fill="#c9a84c" />
      <circle cx="450" cy="30" r="4" fill="#c9a84c" />
      <circle cx="550" cy="25" r="4" fill="#c9a84c" />
      <text
        x="20"
        y="30"
        fill="rgba(255,255,255,0.35)"
        fontSize="11"
        fontFamily="sans-serif"
        letterSpacing="2"
      >
        {label}
      </text>
    </svg>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: "8rem 1.5rem",
        background: "var(--navy)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1100px" }}>
        <ScrollReveal>
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "0.75rem",
            }}
          >
            Projects
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "white",
              marginBottom: "3rem",
            }}
          >
            Selected <em style={{ fontStyle: "italic" }}>work</em>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <ScrollReveal key={p.id} delay={idx * 60}>
              <article className="proj-card">
                <div className="proj-cover">
                  <ProjectCover category={p.category} label={p.coverLabel} />
                </div>
                <div className="proj-body">
                  <div
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {p.category} · {p.date}
                  </div>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "1.55rem",
                      fontWeight: 400,
                      color: "white",
                      lineHeight: 1.25,
                      marginBottom: "0.85rem",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.75,
                      fontWeight: 300,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tags.map((t) => (
                      <span key={t} className="proj-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="proj-highlights">
                    {p.highlights.slice(0, 2).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={120}>
          <div className="text-center mt-12">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors"
              style={{
                color: "var(--accent)",
                fontSize: "0.85rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              See more on GitHub <ArrowRight size={14} />
            </a>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .proj-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .proj-card:hover {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(201, 168, 76, 0.4);
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        .proj-cover {
          height: 170px;
          overflow: hidden;
        }
        .proj-body {
          padding: 1.75rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        :global(.proj-tag) {
          font-size: 0.7rem;
          padding: 0.22rem 0.65rem;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 2px;
          color: rgba(255, 255, 255, 0.55);
        }
        .proj-highlights {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .proj-highlights li {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.45);
          line-height: 1.75;
          font-weight: 300;
          padding-left: 1rem;
          position: relative;
          margin-bottom: 0.4rem;
        }
        .proj-highlights li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: var(--accent);
        }
      `}</style>
    </section>
  );
}

