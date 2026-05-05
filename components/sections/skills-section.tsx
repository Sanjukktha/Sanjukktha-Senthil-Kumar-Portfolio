"use client";

import { skillGroups } from "@/lib/data";
import { ScrollReveal } from "@/components/scroll-reveal";

export function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        padding: "8rem 1.5rem",
        background: "var(--white)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1100px" }}>
        <ScrollReveal>
          <div className="eyebrow mb-3">Skills</div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2.1rem, 3.2vw, 3rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "var(--navy)",
              marginBottom: "1rem",
            }}
          >
            Tools and <em style={{ fontStyle: "italic" }}>expertise</em>
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--muted)",
              lineHeight: 1.85,
              fontWeight: 300,
              maxWidth: "640px",
              marginBottom: "3.5rem",
            }}
          >
            From distributed event-streaming pipelines and agentic AI workflows
            to Snowflake data platforms and Power BI dashboards — I work across
            the full stack of software, ML, and analytics.
          </p>
        </ScrollReveal>

        <div className="skills-rows">
          {skillGroups.map((group, idx) => (
            <ScrollReveal key={group.title} delay={idx * 60}>
              <div className="skill-row">
                <div className="sr-title">{group.title}</div>
                <div className="sr-pills">
                  {group.skills.map((s) => (
                    <span key={s} className="sr-pill">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-rows {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        :global(.skill-row) {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 2rem;
          align-items: center;
          padding: 1.25rem 1.5rem;
          border: 1px solid var(--border);
          border-radius: 10px;
          background: var(--white);
          transition: all 0.3s ease;
        }
        :global(.skill-row:hover) {
          border-color: var(--accent-2);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
        }
        :global(.sr-title) {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          line-height: 1.4;
        }
        :global(.sr-pills) {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        :global(.sr-pill) {
          font-size: 0.85rem;
          color: var(--text);
          font-weight: 400;
          padding: 0.3rem 0.85rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          background: var(--cream);
          line-height: 1.4;
          transition: all 0.2s ease;
        }
        :global(.skill-row:hover .sr-pill) {
          border-color: rgba(201, 168, 76, 0.35);
        }

        @media (max-width: 760px) {
          :global(.skill-row) {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}
