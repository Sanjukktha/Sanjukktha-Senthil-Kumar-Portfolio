"use client";

import Image from "next/image";
import { personalInfo, certifications } from "@/lib/data";
import { ScrollReveal } from "@/components/scroll-reveal";

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "8rem 1.5rem",
        background: "var(--white)",
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: "1100px",
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        <ScrollReveal>
          <div className="flex flex-col items-center">
            <div
              className="overflow-hidden"
              style={{
                width: "280px",
                height: "340px",
                borderRadius: "4px",
                border: "1px solid var(--border)",
              }}
            >
              <Image
                src="/profile.jpg"
                alt={personalInfo.name}
                width={320}
                height={400}
                priority
                className="w-full h-full object-cover"
                style={{ objectPosition: "top" }}
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="eyebrow mb-3">About</div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2.25rem, 3.5vw, 3rem)",
              fontWeight: 300,
              lineHeight: 1.2,
              color: "var(--navy)",
              marginBottom: "2rem",
            }}
          >
            Building production systems that <em style={{ fontStyle: "italic" }}>actually ship</em>
          </h2>
          <div>
            {personalInfo.about.map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: "1.05rem",
                  color: "var(--muted)",
                  lineHeight: 1.9,
                  marginBottom: "1.4rem",
                  fontWeight: 300,
                }}
              >
                {para}
              </p>
            ))}
          </div>

          <div
            style={{
              marginTop: "2rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: "0.85rem",
              }}
            >
              Certifications
            </div>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="cert-pill"
                  style={{
                    fontSize: "0.85rem",
                    padding: "0.35rem 1rem",
                    border: "1px solid var(--border)",
                    borderRadius: "20px",
                    color: "var(--text)",
                  }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          section :global(.mx-auto) {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
