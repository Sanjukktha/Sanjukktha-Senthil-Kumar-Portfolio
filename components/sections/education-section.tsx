"use client";

import { education } from "@/lib/data";
import { ScrollReveal } from "@/components/scroll-reveal";

export function EducationSection() {
  return (
    <section
      id="education"
      style={{
        padding: "8rem 1.5rem",
        background: "var(--cream-2)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1100px" }}>
        <ScrollReveal>
          <div className="eyebrow mb-3">Education</div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2.1rem, 3.2vw, 3rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "var(--navy)",
              marginBottom: "3rem",
            }}
          >
            Academic <em style={{ fontStyle: "italic" }}>background</em>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-6">
          {education.map((edu, idx) => (
            <ScrollReveal key={idx} delay={idx * 80}>
              <div className="edu-card">
                <div>
                  <div className="font-serif edu-degree">{edu.degree}</div>
                  <div className="edu-school">{edu.school}</div>
                  <div className="edu-meta">
                    {edu.location}
                    {edu.date ? ` · ${edu.date}` : ""}
                  </div>
                  <div className="edu-honors">{edu.honors}</div>
                </div>
                <div className="edu-gpa">
                  <div className="font-serif gpa-big">{edu.gpa}</div>
                  <div className="gpa-sub">GPA / 4.00</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        :global(.edu-card) {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2.5rem 3rem;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 2.5rem;
          align-items: start;
        }
        :global(.edu-degree) {
          font-size: 1.85rem;
          font-weight: 400;
          color: var(--navy);
          margin-bottom: 0.4rem;
          line-height: 1.2;
        }
        :global(.edu-school) {
          font-size: 1rem;
          color: var(--accent);
          font-weight: 500;
          margin-bottom: 0.4rem;
        }
        :global(.edu-meta) {
          font-size: 0.85rem;
          color: var(--muted);
          font-weight: 400;
          margin-bottom: 1.4rem;
        }
        :global(.edu-honors) {
          font-size: 0.95rem;
          color: var(--muted);
          line-height: 1.85;
          font-weight: 300;
        }
        :global(.edu-gpa) {
          text-align: center;
          padding: 1.75rem 2.25rem;
          background: var(--navy);
          border-radius: 8px;
          color: white;
          flex-shrink: 0;
        }
        :global(.gpa-big) {
          font-size: 3rem;
          font-weight: 600;
          color: var(--accent);
          line-height: 1;
        }
        :global(.gpa-sub) {
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 0.5rem;
        }

        @media (max-width: 700px) {
          :global(.edu-card) {
            grid-template-columns: 1fr;
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
