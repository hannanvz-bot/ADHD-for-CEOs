"use client";

import { useEffect } from "react";

export type Lang = "en" | "es" | "fr";

interface Props {
  current: Lang;
  onChange: (lang: Lang) => void;
}

const langs: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "fr", label: "FR" },
];

export default function LanguageToggle({ current, onChange }: Props) {
  // Persist preference
  useEffect(() => {
    try {
      localStorage.setItem("adhdceos-lang", current);
    } catch {}
  }, [current]);

  return (
    <div className="flex items-center gap-1 bg-white/[0.05] rounded-full p-1">
      {langs.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => onChange(code)}
          className={`text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full transition-all duration-200 ${
            current === code
              ? "bg-[#2bbfbf] text-black"
              : "text-white/40 hover:text-white/80"
          }`}
          aria-pressed={current === code}
          aria-label={`Switch to ${label}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
