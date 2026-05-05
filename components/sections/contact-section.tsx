"use client";

import { useState } from "react";
import { Send, CheckCircle, Mail, Linkedin, Github } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { ScrollReveal } from "@/components/scroll-reveal";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(data.error || "Failed to send message. Please try again.");
      }
    } catch {
      setError(
        "Failed to send message. Please email me directly at " +
          personalInfo.email
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "8rem 1.5rem",
        background: "var(--navy)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1100px" }}>
        <ScrollReveal>
          <div className="text-center">
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
              Contact
            </div>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)",
                fontWeight: 300,
                lineHeight: 1.15,
                color: "white",
                marginBottom: "1.25rem",
              }}
            >
              Let&rsquo;s <em style={{ fontStyle: "italic" }}>connect</em>
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.55)",
                maxWidth: "560px",
                margin: "0 auto 3rem",
                fontWeight: 300,
                lineHeight: 1.8,
              }}
            >
              Open to full-time engineering roles across software, ML, and data
              areas. Based in Dallas, TX — happy to chat about software systems,
              AI, or what you&rsquo;re building.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info column */}
          <ScrollReveal className="lg:col-span-2">
            <div className="info-stack">
              <a href={`mailto:${personalInfo.email}`} className="info-row">
                <Mail size={18} />
                <div>
                  <div className="info-label">Email</div>
                  <div className="info-value">{personalInfo.email}</div>
                </div>
              </a>
              <a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="info-row"
              >
                <Linkedin size={18} />
                <div>
                  <div className="info-label">LinkedIn</div>
                  <div className="info-value">
                    /in/sanjukkthasenthilkumar
                  </div>
                </div>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="info-row"
              >
                <Github size={18} />
                <div>
                  <div className="info-label">GitHub</div>
                  <div className="info-value">github.com/Sanjukktha</div>
                </div>
              </a>
            </div>
          </ScrollReveal>

          {/* Form column */}
          <ScrollReveal delay={120} className="lg:col-span-3">
            <div className="form-card">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle
                    size={40}
                    style={{ color: "var(--accent)", marginBottom: "1rem" }}
                  />
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "1.5rem",
                      color: "white",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Message sent
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      marginBottom: "2rem",
                      fontWeight: 300,
                    }}
                  >
                    Thanks for reaching out — I&rsquo;ll reply soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="ghost-btn"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div
                      style={{
                        padding: "0.85rem 1rem",
                        background: "rgba(229, 57, 53, 0.12)",
                        border: "1px solid rgba(229, 57, 53, 0.35)",
                        borderRadius: "4px",
                        color: "#ffb4b4",
                        fontSize: "0.85rem",
                      }}
                    >
                      {error}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="dark-label">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Your name"
                        className="dark-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="dark-label">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@company.com"
                        className="dark-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="dark-label">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="What's this about?"
                      className="dark-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="dark-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me a bit about it…"
                      className="dark-input dark-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="submit-btn"
                  >
                    {isSubmitting ? (
                      "Sending…"
                    ) : (
                      <>
                        <Send size={15} /> Send message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        .info-stack {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        :global(.info-row) {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          color: var(--accent);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        :global(.info-row:hover) {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(201, 168, 76, 0.4);
          transform: translateX(4px);
        }
        :global(.info-label) {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.25rem;
        }
        :global(.info-value) {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.75);
          font-weight: 300;
        }

        .form-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 2.5rem;
        }

        :global(.dark-label) {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.55);
          display: block;
          margin-bottom: 0.55rem;
        }
        :global(.dark-input) {
          width: 100%;
          padding: 0.85rem 1rem;
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          color: white;
          font-family: inherit;
          font-size: 0.95rem;
          font-weight: 300;
          transition: all 0.2s ease;
        }
        :global(.dark-input::placeholder) {
          color: rgba(255, 255, 255, 0.3);
        }
        :global(.dark-input:focus) {
          outline: none;
          border-color: var(--accent);
          background: rgba(0, 0, 0, 0.4);
        }
        :global(.dark-textarea) {
          resize: vertical;
          min-height: 140px;
          line-height: 1.6;
        }

        :global(.submit-btn) {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.95rem 2.25rem;
          background: var(--accent);
          color: var(--navy);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid var(--accent);
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        :global(.submit-btn:hover) {
          background: transparent;
          color: var(--accent);
        }
        :global(.submit-btn:disabled) {
          opacity: 0.6;
          cursor: not-allowed;
        }

        :global(.ghost-btn) {
          padding: 0.65rem 1.5rem;
          background: transparent;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        :global(.ghost-btn:hover) {
          border-color: var(--accent);
          color: var(--accent);
        }
      `}</style>
    </section>
  );
}
