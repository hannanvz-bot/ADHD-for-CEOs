import Nav from "./components/Nav";
import HeroVideo from "./components/HeroVideo";
import FadeIn from "./components/FadeIn";
import ConnectForm from "./components/ConnectForm";

// ─── Data ────────────────────────────────────────────────────────────────────

const timeline = [
  {
    year: "2020",
    label: "University of Miami",
    body: "COVID. No hiring. A recent graduate with more ideas than certainty — and no clear path.",
  },
  {
    year: "2020",
    label: "HaviZú Corp",
    body: "Registered a 501(c)(3) nonprofit in Florida. Not because I had a plan. Because I wanted to help people build things that mattered.",
  },
  {
    year: "2020–2025",
    label: "Five years of building",
    body: "Communities, brands, MVPs, platforms, digital products. Always starting. Always connecting. Always a few too many things at once.",
  },
  {
    year: "2023",
    label: "An ADHD diagnosis",
    body: "After moving to Spain. Suddenly, a lot about my life started making sense.",
  },
  {
    year: "October 2026",
    label: "The Launch Pad, University of Miami",
    body: "I spoke with Sam Palmer, Director of The Launch Pad. I went looking for direction. What I found was a room where I didn't feel like too much. I could lose my train of thought. Jump between ideas. Take time to find the words. And there was patience.",
  },
  {
    year: "Now",
    label: "ADHD for CEOs",
    body: "That conversation made me ask: what if that kind of environment existed for more people?",
  },
];

const audience = [
  { title: "Founders", sub: "You've built things that didn't fit any existing template." },
  { title: "Future founders", sub: "The idea is there. The right environment isn't — yet." },
  { title: "CEOs", sub: "You lead well. You also struggle with things nobody in the room talks about." },
  { title: "Builders", sub: "You move fast, connect dots, and rarely do just one thing." },
  { title: "ADHD professionals", sub: "You've made it work inside systems that weren't built for you." },
  { title: "Unconventional thinkers", sub: "You've been told to focus. You're tired of being told to focus." },
];

const futures = [
  "Founder community",
  "Peer mentorship",
  "Founder stories",
  "Workshops and conversations",
  "Entrepreneurship resources",
  "University partnerships",
  "Research on ADHD and leadership",
  "Programs for ADHD professionals",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="bg-[#080808] text-white overflow-x-hidden">
      <Nav />

      {/* ── Hero ── */}
      <HeroVideo />

      {/* ── 1. The Question ── */}
      <section
        className="relative py-28 md:py-40 px-6 md:px-10"
        aria-labelledby="question-heading"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left — big statement */}
          <FadeIn>
            <div>
              <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-8">
                The question
              </p>
              <h2
                id="question-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white"
              >
                Maybe you were<br className="hidden md:block" /> never<br className="hidden md:block" /> the problem.
              </h2>
            </div>
          </FadeIn>

          {/* Right — explanation */}
          <FadeIn delay={120}>
            <div className="md:pt-24">
              <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light mb-6">
                Some minds don&rsquo;t fit neatly into the systems that were
                built for them. That doesn&rsquo;t mean something is wrong with
                the mind.
              </p>
              <p className="text-base text-white/35 leading-relaxed">
                ADHD for CEOs exists to ask what happens when unconventional
                thinkers are given the right environment to build.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 2. What This Is ── */}
      <section
        className="py-20 md:py-28 px-6 md:px-10 border-t border-white/[0.06]"
        aria-labelledby="what-heading"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-6">
              What this is
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <FadeIn delay={80}>
              <h2
                id="what-heading"
                className="text-3xl md:text-4xl font-bold text-white leading-snug"
              >
                ADHD for CEOs
              </h2>
            </FadeIn>
            <FadeIn delay={160}>
              <div className="space-y-5 text-white/55 text-lg leading-relaxed">
                <p>
                  An emerging community and nonprofit initiative for ADHD
                  entrepreneurs, founders, CEOs, and ambitious professionals
                  who think differently about how they build.
                </p>
                <p>
                  We are not a therapy organization. Not a support group. Not
                  here to explain ADHD to you.
                </p>
                <p>
                  We believe different minds can build extraordinary things —
                  when they have the right environment, community, and people
                  around them.
                </p>
                <p className="text-white/30 text-base">
                  The organization was originally incorporated in Florida in
                  2020 as HaviZú Corp, a 501(c)(3) nonprofit. ADHD for CEOs is
                  a new direction for that foundation.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 3. Origin Timeline ── */}
      <section
        className="py-20 md:py-32 px-6 md:px-10 border-t border-white/[0.06]"
        aria-labelledby="origin-heading"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-6">
              Origin
            </p>
            <h2
              id="origin-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-16 md:mb-24"
            >
              How we got here
            </h2>
          </FadeIn>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical track */}
            <div
              className="absolute left-0 top-3 bottom-3 w-px hidden md:block"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(43,191,191,0.25) 20%, rgba(43,191,191,0.25) 80%, transparent)",
              }}
              aria-hidden="true"
            />

            <div className="space-y-14 md:space-y-16">
              {timeline.map((item, i) => (
                <FadeIn key={i} delay={i * 70}>
                  <div className="md:grid md:grid-cols-[180px_1fr] gap-10 items-start md:pl-8">
                    {/* Year + dot */}
                    <div className="relative flex items-start gap-4 mb-3 md:mb-0">
                      {/* Dot on track */}
                      <div
                        className="absolute -left-[2.4rem] top-1.5 w-2 h-2 rounded-full bg-[#2bbfbf] hidden md:block"
                        aria-hidden="true"
                      />
                      <span className="text-xs font-semibold text-[#2bbfbf] tracking-widest uppercase whitespace-nowrap">
                        {item.year}
                      </span>
                    </div>
                    {/* Content */}
                    <div>
                      <h3 className="text-white font-semibold text-xl mb-2">
                        {item.label}
                      </h3>
                      <p className="text-white/45 text-base leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Founder quote + photo */}
          <FadeIn delay={200}>
            <div className="mt-20 md:mt-28 md:pl-8 grid md:grid-cols-[1fr_280px] gap-12 items-center">
              <div className="border-l-2 border-[#2bbfbf]/40 pl-8">
                <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed italic">
                  &ldquo;I spent years feeling like I was too much — too many
                  ideas, too little structure, too hard to explain. Then I sat
                  in a room where none of that mattered. Now I want to build
                  that room for other people.&rdquo;
                </p>
                <p className="mt-5 text-white/30 text-sm tracking-wide">
                  — Hannan Vilchis, Founder
                </p>
              </div>
              {/* Founder photo */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[3/4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/founder.jpg"
                  alt="Hannan Vilchis explaining a concept at a hackathon"
                  className="w-full h-full object-cover object-right-top"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(8,8,8,0.7) 0%, transparent 50%)",
                  }}
                  aria-hidden="true"
                />
                <p className="absolute bottom-4 left-4 text-white/40 text-xs tracking-wide">
                  Hackathon LaVegaInnova · Madrid, 2024
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 4. Who It's For ── */}
      <section
        className="py-20 md:py-32 px-6 md:px-10 border-t border-white/[0.06]"
        aria-labelledby="for-heading"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-6">
              Who this is for
            </p>
            <h2
              id="for-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-3"
            >
              You already know if this is you.
            </h2>
            <p className="text-white/35 text-lg mb-16 max-w-lg">
              Not a checklist. Just a recognition.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
            {audience.map((item, i) => (
              <FadeIn key={i} delay={i * 50}>
                <div className="bg-[#080808] p-8 md:p-10 hover:bg-white/[0.02] transition-colors duration-500 group">
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#2bbfbf] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/35 text-sm leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Where We Are ── */}
      <section
        className="py-20 md:py-32 px-6 md:px-10 border-t border-white/[0.06]"
        aria-labelledby="now-heading"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div>
              <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-6">
                Right now
              </p>
              <h2
                id="now-heading"
                className="text-3xl md:text-4xl font-bold text-white leading-snug"
              >
                We&rsquo;re at the very beginning.
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="space-y-5 text-white/50 text-lg leading-relaxed">
              <p>
                This is not a movement with thousands of members, a team,
                programs, or funding. It&rsquo;s an experiment in whether this
                community needs to exist.
              </p>
              <p>
                The question right now is simple: is this needed?
              </p>
              <p>
                If you think it is, we want to hear from you.
              </p>
              <div className="pt-4">
                <span className="inline-flex items-center gap-2.5 text-white/25 text-xs border border-white/10 rounded-full px-4 py-2 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2bbfbf] animate-pulse flex-shrink-0" />
                  Validating — October 2026
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 6. What Could Come Next ── */}
      <section
        className="py-20 md:py-28 px-6 md:px-10 border-t border-white/[0.06]"
        aria-labelledby="future-heading"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-6">
              What we&rsquo;re exploring
            </p>
            <h2
              id="future-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-3"
            >
              Possible future directions
            </h2>
            <p className="text-white/30 text-sm mb-14 max-w-md">
              These are directions, not promises. Everything here depends on
              whether the community actually needs it.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {futures.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-white/45 text-sm leading-relaxed"
                >
                  <span
                    className="text-[#2bbfbf]/60 mt-0.5 flex-shrink-0 text-xs"
                    aria-hidden="true"
                  >
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ── 7. CTA ── */}
      <section
        id="connect"
        className="py-28 md:py-44 px-6 md:px-10 border-t border-white/[0.06]"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-8">
              Join us
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <h2
              id="cta-heading"
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.0] tracking-tight mb-10 max-w-3xl"
            >
              Maybe this is where it starts.
            </h2>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="text-white/45 text-lg leading-relaxed max-w-lg mb-10">
              Leave your email. We&rsquo;ll reach out when the community opens.
              No noise — just the things that matter.
            </p>
          </FadeIn>
          <FadeIn delay={220}>
            <ConnectForm />
          </FadeIn>
          <FadeIn delay={280}>
            <p className="mt-7 text-white/20 text-xs tracking-wide">
              No spam. You can unsubscribe at any time.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.06] px-6 md:px-10 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <svg
              width="28"
              height="19"
              viewBox="0 0 32 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="opacity-50"
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
            <span className="text-white/30 text-sm">ADHD for CEOs</span>
          </div>
          <div className="text-white/20 text-xs leading-relaxed">
            <p>ADHDCEOs.org — A nonprofit initiative.</p>
            <p className="mt-0.5">
              © {new Date().getFullYear()} ADHD for CEOs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
