"use client";

import { Download } from "lucide-react";
import { personalInfo, heroStats } from "@/lib/data";
import { CountUp } from "@/components/count-up";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center"
      style={{ paddingTop: "8.5rem", paddingBottom: "4rem" }}
    >
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div className="fade-up flex items-center gap-3 mb-7">
              <div className="h-px w-10" style={{ background: "var(--accent)" }} />
              <span
                className="text-[0.78rem] font-medium uppercase"
                style={{ letterSpacing: "0.15em", color: "var(--muted)" }}
              >
                {personalInfo.eyebrow}
              </span>
            </div>

            <h1
              className="fade-up delay-1 font-serif font-light leading-[1.0]"
              style={{
                fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
                color: "var(--navy)",
                marginBottom: "1.75rem",
              }}
            >
              <span className="block">Sanjukktha</span>
              <strong
                className="block font-semibold"
                style={{ color: "var(--accent)" }}
              >
                Senthil Kumar
              </strong>
            </h1>

            <p
              className="fade-up delay-2 max-w-[460px]"
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.85,
                color: "var(--muted)",
                fontWeight: 300,
                marginBottom: "2.5rem",
              }}
            >
              {personalInfo.summary}
            </p>

            <div className="fade-up delay-3 flex flex-wrap gap-2">
              <a
                href="/Sanjukktha-Senthil-Kumar-Resume.pdf"
                download
                className="cta-primary"
              >
                <Download size={14} /> Download Resume
              </a>
              <a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-outline"
              >
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-outline"
              >
                GitHub
              </a>
              <a href={`mailto:${personalInfo.email}`} className="cta-outline">
                Email
              </a>
            </div>
          </div>

          {/* Right - stat cards */}
          <div className="fade-up delay-2 grid grid-cols-2 gap-5">
            {heroStats.map((stat, i) => (
              <div key={i} className="stat-card">
                <div
                  className="font-serif font-semibold"
                  style={{
                    fontSize: "2.5rem",
                    lineHeight: 1,
                    color: "var(--navy)",
                    marginBottom: "0.5rem",
                  }}
                >
                  <CountUp
                    value={stat.value}
                    decimal={stat.decimal ?? 0}
                    suffix={stat.suffix}
                  />
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--muted)",
                    fontWeight: 300,
                    lineHeight: 1.5,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-8 flex-col items-center gap-2 fade-up delay-5 pointer-events-none">
        <span
          className="text-[0.65rem] uppercase"
          style={{ letterSpacing: "0.18em", color: "var(--muted)" }}
        >
          Scroll
        </span>
        <span
          className="block w-px h-11"
          style={{
            background: "linear-gradient(to bottom, var(--accent), transparent)",
            animation: "scrollAnim 1.6s infinite",
          }}
        />
      </div>

      <style jsx>{`
        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.75rem 1.35rem;
          background: var(--navy);
          color: white;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 2px;
          border: 1px solid var(--navy);
          transition: all 0.3s ease;
        }
        .cta-primary:hover {
          background: var(--accent);
          border-color: var(--accent);
          color: var(--navy);
        }
        .cta-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.75rem 1.35rem;
          background: transparent;
          color: var(--navy);
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 2px;
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }
        .cta-outline:hover {
          border-color: var(--navy);
        }
        .stat-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1.75rem;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .stat-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background: var(--accent);
        }
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </section>
  );
}
