"use client";

import { useEffect, useState } from "react";
import { FaArrowUp, FaBars, FaTimes } from "react-icons/fa";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Floats flat over the hero, then picks up its border and shadow once you scroll.
  const raised = scrollY > 40 || open;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <nav
          className={`mx-auto max-w-6xl rounded-[28px] border-2 px-3 py-2 transition-all duration-300 sm:px-4 ${
            raised
              ? "border-ink bg-paper-light/95 shadow-hard backdrop-blur"
              : "border-transparent bg-transparent"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <a href="#home" className="flex items-center gap-3" aria-label="Back to top">
              <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-tang font-display text-lg font-black italic text-ink">
                AM
              </span>
              <span className="hidden font-display text-lg font-bold sm:block">
                Avishkar M.
              </span>
            </a>

            <ul className="hidden items-center gap-1 md:flex">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="kicker rounded-full px-3 py-2 transition-colors hover:bg-mustard"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <a
                href={profile.resume}
                download="Avishkar_Mahalingpure_Resume.pdf"
                className="btn btn-sm btn-mustard"
              >
                CV
              </a>
              <button
                onClick={() => setOpen((o) => !o)}
                className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-paper-light md:hidden"
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label="Toggle menu"
              >
                {open ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {open && (
            <ul id="mobile-menu" className="grid gap-1 border-t-2 border-dashed border-ink/30 pb-2 pt-3 md:hidden">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-3 py-3 font-display text-2xl font-bold hover:bg-mustard"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </header>

      <a
        href="#home"
        aria-label="Back to top"
        className={`btn btn-tang fixed bottom-5 right-5 z-40 !p-0 h-12 w-12 justify-center transition-all duration-300 ${
          scrollY > 600 ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <FaArrowUp />
      </a>
    </>
  );
}
