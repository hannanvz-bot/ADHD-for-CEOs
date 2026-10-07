"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <section
      id="top"
      className="relative w-full h-screen min-h-[640px] flex items-end overflow-hidden bg-black"
      aria-label="Brand introduction"
    >
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/brand-video.mp4"
        poster="/logo-dark.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Base dark overlay — ensures text is always readable regardless of video frame */}
      <div
        className="absolute inset-0 bg-black/40"
        aria-hidden="true"
      />

      {/* Gradient — stronger bottom fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.0) 35%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.95) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Hero text — bottom left */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-5">
            adhdceos.org
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.0] tracking-tight">
            Maybe you were<br />
            never the problem.
          </h1>
          <p className="mt-6 text-white/50 text-base md:text-lg font-light max-w-md leading-relaxed">
            A community for ADHD entrepreneurs, founders, and unconventional thinkers.
          </p>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 right-8 z-10" aria-hidden="true">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.3em] text-white/30 uppercase rotate-90 origin-center translate-y-4">
            scroll
          </span>
          <span className="w-px h-10 bg-gradient-to-b from-white/0 to-[#2bbfbf]/60" />
        </div>
      </div>
    </section>
  );
}
