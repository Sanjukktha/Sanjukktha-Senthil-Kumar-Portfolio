"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { experiences } from "@/lib/data";
import { ScrollReveal } from "@/components/scroll-reveal";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        padding: "8rem 1.5rem",
        background: "var(--cream)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1100px" }}>
        <ScrollReveal>
          <div className="eyebrow mb-3">Experience</div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "var(--navy)",
              marginBottom: "4rem",
            }}
          >
            Where I&rsquo;ve <em style={{ fontStyle: "italic" }}>built</em>
          </h2>
        </ScrollReveal>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <ScrollReveal key={idx} variant="left" delay={idx * 80}>
              <div className="tl-item">
                <div className="tl-dot" />
                {exp.logo && (
                  <div className="tl-logo">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="tl-date">{exp.date}</div>
                <div className="tl-company">
                  {exp.company} · {exp.location}
                </div>
                <div className="tl-role font-serif">{exp.role}</div>
                <ul className="tl-bullets">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tl-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                {exp.pdfPath && (
                  <a
                    href={exp.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tl-pdf-btn"
                  >
                    View Work Experience <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .timeline {
          --line-x: 6rem;
          --gutter: 7.25rem;
          position: relative;
          padding-left: var(--gutter);
          display: flex;
          flex-direction: column;
          gap: 2.75rem;
        }
        .timeline::before {
          content: "";
          position: absolute;
          left: var(--line-x);
          top: 12px;
          bottom: 12px;
          width: 1px;
          background: rgba(0, 0, 0, 0.12);
        }
        :global(.tl-item) {
          position: relative;
        }
        :global(.tl-dot) {
          position: absolute;
          left: -1.25rem;
          top: 8px;
          width: 12px;
          height: 12px;
          margin-left: -6px;
          border-radius: 50%;
          background: var(--cream);
          border: 2px solid rgba(0, 0, 0, 0.18);
          transition: all 0.3s ease;
          z-index: 2;
        }
        :global(.tl-item:hover .tl-dot) {
          background: var(--accent);
          border-color: var(--accent);
          transform: scale(1.3);
        }
        :global(.tl-logo) {
          position: absolute;
          left: -6.75rem;
          top: -16px;
          width: 72px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.3s ease, transform 0.3s ease;
          opacity: 0.95;
        }
        :global(.tl-logo img) {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
        }
        :global(.tl-item:hover .tl-logo) {
          opacity: 1;
          transform: scale(1.05);
        }
        :global(.tl-date) {
          font-size: 0.78rem;
          color: var(--muted);
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        :global(.tl-company) {
          font-size: 0.92rem;
          color: var(--accent);
          font-weight: 500;
          margin-bottom: 0.4rem;
        }
        :global(.tl-role) {
          font-size: 1.7rem;
          font-weight: 400;
          color: var(--navy);
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        :global(.tl-bullets) {
          list-style: none;
          padding: 0;
          margin: 0;
          max-width: 720px;
        }
        :global(.tl-bullets li) {
          font-size: 1rem;
          color: var(--muted);
          line-height: 1.8;
          font-weight: 300;
          margin-bottom: 0.6rem;
          padding-left: 1.1rem;
          position: relative;
        }
        :global(.tl-bullets li::before) {
          content: "—";
          position: absolute;
          left: 0;
          color: var(--accent);
        }
        :global(.tl-tag) {
          font-size: 0.72rem;
          padding: 0.25rem 0.75rem;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 2px;
          color: var(--muted);
          transition: all 0.2s ease;
        }
        :global(.tl-item:hover .tl-tag) {
          border-color: var(--accent-2);
          color: var(--text);
        }
        :global(.tl-pdf-btn) {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 1.5rem;
          padding: 0.6rem 1.25rem;
          background: transparent;
          color: var(--navy);
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid var(--border);
          border-radius: 2px;
          transition: all 0.25s ease;
        }
        :global(.tl-pdf-btn:hover) {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(201, 168, 76, 0.04);
        }

        @media (max-width: 700px) {
          .timeline {
            --line-x: 4rem;
            --gutter: 5rem;
            gap: 2rem;
          }
          :global(.tl-logo) {
            left: -4.5rem;
            top: -8px;
            width: 52px;
            height: 52px;
          }
        }
      `}</style>
    </section>
  );
}
