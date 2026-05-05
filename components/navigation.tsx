"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300"
      style={{
        height: scrolled ? "56px" : "68px",
        background: "rgba(250, 248, 244, 0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderColor: "rgba(0,0,0,0.08)",
      }}
    >
      <nav className="max-w-7xl mx-auto h-full px-6 sm:px-10 flex items-center justify-between">
        <a
          href="#top"
          className="font-serif text-[1.1rem] sm:text-[1.25rem] font-semibold transition-colors"
          style={{ color: "var(--navy)" }}
        >
          Sanjukktha Senthil Kumar
        </a>

        <ul className="hidden md:flex items-center gap-8 lg:gap-10 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-anchor relative text-[0.78rem] font-medium tracking-[0.06em] uppercase transition-colors"
                style={{ color: "var(--muted)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 -mr-2"
          style={{ color: "var(--navy)" }}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div
          className="md:hidden border-t"
          style={{
            background: "rgba(250, 248, 244, 0.98)",
            backdropFilter: "blur(20px)",
            borderColor: "rgba(0,0,0,0.08)",
          }}
        >
          <ul className="flex flex-col gap-1 px-6 py-4 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[0.78rem] font-medium tracking-[0.06em] uppercase"
                  style={{ color: "var(--muted)" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style jsx>{`
        .nav-anchor::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 0;
          height: 1px;
          background: var(--accent);
          transition: width 0.3s ease;
        }
        .nav-anchor:hover {
          color: var(--text);
        }
        .nav-anchor:hover::after {
          width: 100%;
        }
      `}</style>
    </header>
  );
}
