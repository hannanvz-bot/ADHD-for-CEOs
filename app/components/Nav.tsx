"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-xl border-b border-white/8"
          : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        {/* Wordmark — rendered in CSS, always white */}
        <a
          href="#top"
          className="flex items-center gap-2 group"
          aria-label="ADHD for CEOs home"
        >
          {/* AC monogram */}
          <svg
            width="32"
            height="22"
            viewBox="0 0 32 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M0 21L8 1L16 21M3.5 14H12.5"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M31 7C29 4 26.5 2.5 23.5 2.5C18.5 2.5 15 6.5 15 11C15 15.5 18.5 19.5 23.5 19.5C26.5 19.5 29 18 31 15"
              stroke="#2bbfbf"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-white font-semibold text-sm tracking-wide">
            ADHD for CEOs
          </span>
        </a>

        <a
          href="#connect"
          className="text-xs font-semibold tracking-widest uppercase text-white/70 hover:text-[#2bbfbf] transition-colors duration-300"
        >
          Join the community
        </a>
      </div>
    </nav>
  );
}
