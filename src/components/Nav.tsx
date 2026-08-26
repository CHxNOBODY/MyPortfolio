"use client";

import { useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#keys", label: "Keys" },
  { href: "#about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur-sm">
      <nav className="shell flex items-center justify-between py-4 md:py-[26px]">
        <a href="#top" className="font-serif text-display-s text-ink">
          Khaopun
        </a>

        <div className="hidden items-center gap-[38px] md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[15px] font-medium text-ink-2 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-line-strong px-[22px] py-3 font-sans text-[15px] font-medium text-ink transition-colors hover:border-ink md:block"
        >
          Get in touch
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 flex size-11 flex-col items-end justify-center gap-[7px] md:hidden"
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px bg-ink transition-all duration-300 ${
              open ? "w-6 -translate-y-1 -rotate-45" : "w-4"
            }`}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="shell overflow-hidden border-t border-line-soft pb-6 md:hidden"
      >
        <div className="flex flex-col">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line-soft py-4 font-sans text-[17px] text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="py-4 font-sans text-[17px] font-medium text-accent"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
