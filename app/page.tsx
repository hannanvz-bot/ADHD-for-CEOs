import Nav from "./components/Nav";
import HeroVideo from "./components/HeroVideo";
import FadeIn from "./components/FadeIn";
import ConnectForm from "./components/ConnectForm";

const buildCategories = [
  { label: "Websites", desc: "The one you keep putting off." },
  { label: "MVPs", desc: "A real product, not a pitch deck." },
  { label: "Businesses", desc: "Something that exists when the weekend is over." },
  { label: "Communities", desc: "A place for people like you." },
  { label: "Creative projects", desc: "Art, writing, music. Real things." },
  { label: "Social impact", desc: "Nonprofits, causes, change." },
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
  "Hackathons",
  "Founder community",
  "Peer mentorship",
  "Founder stories",
  "Workshops",
  "Build weekends",
  "University partnerships",
  "Resources",
];

export default function Home() {
  return (
    <main className="bg-[#080808] text-white overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <HeroVideo />

      {/* 1. The Problem */}
      <section
        className="relative py-28 md:py-40 px-6 md:px-10"
        aria-labelledby="problem-heading"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <FadeIn>
            <div>
              <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-8">
                The question
              </p>
              <h2
                id="problem-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white"
              >
                What if you don&rsquo;t need<br className="hidden md:block" /> to think differently?
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="md:pt-20">
              <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light mb-6">
                What if the environment needs to work differently?
              </p>
              <div className="space-y-4 text-white/40 text-base leading-relaxed">
                <p>Some people have more ideas than they know what to do with.</p>
                <p>Some move between ideas quickly. Some build differently. Some struggle inside environments designed around a completely different way of working.</p>
                <p>ADHD for CEOs is exploring what happens when those people have an environment built for them instead.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. THE HACKATHON */}
      <section
        id="hackathon"
        className="py-24 md:py-40 px-6 md:px-10 border-t border-white/[0.06]"
        aria-labelledby="hackathon-heading"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-8">
              First experiment
            </p>
            <h2
              id="hackathon-heading"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.0] tracking-tight mb-6 max-w-3xl"
            >
              THE FIRST ADHD<br />FOR CEOs HACKATHON
            </h2>
            <p className="text-xl md:text-2xl text-white/50 font-light max-w-xl leading-relaxed mb-16">
              48 hours to turn an idea you&rsquo;ve been carrying around into something real.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden mb-16">
              {[
                { n: "20", label: "people" },
                { n: "48", label: "hours" },
                { n: "10", label: "ideas" },
                { n: "∞", label: "real prototypes" },
              ].map((s, i) => (
                <div key={i} className="bg-[#080808] px-8 py-10 md:py-12">
                  <p className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-none mb-2">
                    {s.n}
                  </p>
                  <p className="text-white/35 text-sm tracking-wide uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <FadeIn delay={150}>
              <div className="space-y-5 text-white/55 text-lg leading-relaxed">
                <p>Bring the idea you&rsquo;ve been thinking about for six months.</p>
                <p>The business you keep talking about.<br />
                The website you never built.<br />
                The nonprofit you keep postponing.<br />
                The product you can&rsquo;t stop thinking about.</p>
                <p className="text-white text-xl font-semibold">Bring it.</p>
                <p className="text-white/55">We&rsquo;ll build it together.</p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="space-y-3">
                <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-5">
                  What we build
                </p>
                {buildCategories.map((cat, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-4 border-b border-white/[0.06] last:border-0"
                  >
                    <span className="text-[#2bbfbf]/50 text-xs mt-1 flex-shrink-0" aria-hidden="true">→</span>
                    <div>
                      <span className="text-white font-semibold text-sm">{cat.label}</span>
                      <span className="text-white/30 text-sm ml-2">{cat.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={250}>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#connect"
                className="inline-flex items-center justify-center bg-[#2bbfbf] hover:bg-[#25aaaa] text-black font-bold text-sm tracking-wide rounded-full px-10 py-4 transition-colors duration-200"
              >
                I WANT TO BUILD
              </a>
              <a
                href="#help"
                className="inline-flex items-center justify-center bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-white font-semibold text-sm tracking-wide rounded-full px-10 py-4 transition-colors duration-200"
              >
                I WANT TO HELP
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. Origin */}
      <section
        className="py-20 md:py-32 px-6 md:px-10 border-t border-white/[0.06]"
        aria-labelledby="origin-heading"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-6">
              Why this exists
            </p>
            <h2
              id="origin-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-16"
            >
              This started in 2020.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
            <FadeIn delay={80}>
              <div className="space-y-5 text-white/50 text-lg leading-relaxed">
                <p>
                  In 2020, Hannan Vilchis-Zubizarreta created HaviZú Corp, a nonprofit in Florida, because he wanted to help people turn ideas into reality.
                </p>
                <p>
                  Over the following years, the same instinct kept appearing: helping friends build businesses, creating communities, turning ideas into things that actually existed.
                </p>
                <p>
                  After moving to Spain, Hannan was diagnosed with ADHD. Suddenly, a lot made sense.
                </p>
                <p>
                  Then a conversation at The Launch Pad at the University of Miami changed things. For the first time in a long time, he felt understood rather than judged. He could jump between thoughts, lose his train of thought, return to something later — without apologizing for how his mind worked.
                </p>
                <p className="text-white/70">
                  That conversation made him ask: what if that kind of environment existed for more people?
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={160}>
              <figure className="relative rounded-2xl overflow-hidden bg-white/[0.03]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/founder.jpg"
                  alt="Hannan Vilchis at the LaVegaInnova hackathon in Madrid, 2024"
                  className="w-full h-auto block"
                  style={{ objectFit: "contain" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(8,8,8,0.5) 0%, transparent 30%)",
                  }}
                  aria-hidden="true"
                />
                <figcaption className="absolute bottom-4 left-4 text-white/40 text-xs tracking-wide">
                  LaVegaInnova Hackathon · Madrid, 2024
                </figcaption>
              </figure>
              <blockquote className="mt-8 border-l-2 border-[#2bbfbf]/40 pl-6">
                <p className="text-lg text-white/60 font-light leading-relaxed italic">
                  &ldquo;I spent years feeling like I was too much — too many ideas, too little structure, too hard to explain. Then I sat in a room where none of that mattered. Now I want to build that room for other people.&rdquo;
                </p>
                <footer className="mt-4 text-white/25 text-sm tracking-wide">
                  — Hannan Vilchis, Founder
                </footer>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Who It's For */}
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
              You&rsquo;re probably not the only one.
            </h2>
            <p className="text-white/35 text-lg mb-16 max-w-lg">
              We&rsquo;re starting by listening.
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

      {/* 5. What Could Come Next */}
      <section
        className="py-20 md:py-28 px-6 md:px-10 border-t border-white/[0.06]"
        aria-labelledby="future-heading"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div>
              <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-6">
                What we&rsquo;re exploring
              </p>
              <h2
                id="future-heading"
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                What could this become?
              </h2>
              <p className="text-white/30 text-base max-w-sm leading-relaxed">
                If the community wants it, this could become:
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <ul className="grid grid-cols-2 gap-4 pt-2">
              {futures.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-white/45 text-sm leading-relaxed"
                >
                  <span className="text-[#2bbfbf]/50 mt-0.5 flex-shrink-0 text-xs" aria-hidden="true">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* 6. I WANT TO HELP */}
      <section
        id="help"
        className="py-20 md:py-32 px-6 md:px-10 border-t border-white/[0.06]"
        aria-labelledby="help-heading"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div>
              <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-6">
                Support
              </p>
              <h2
                id="help-heading"
                className="text-3xl md:text-4xl font-bold text-white leading-snug mb-6"
              >
                Help us build<br />the first one.
              </h2>
              <p className="text-white/45 text-lg leading-relaxed">
                Before we build a big organization, we want to prove that people want this.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="space-y-4">
              {[
                ["Joining", "Be part of the first community."],
                ["Building", "Bring your idea to the hackathon."],
                ["Mentoring", "Help others build their ideas."],
                ["Sharing", "Tell someone who needs to hear this."],
                ["Connecting", "Introduce us to people who get it."],
              ].map(([action, desc], i) => (
                <div key={i} className="flex items-start gap-4 py-4 border-b border-white/[0.06] last:border-0">
                  <span className="text-[#2bbfbf]/50 text-xs mt-1 flex-shrink-0" aria-hidden="true">→</span>
                  <div>
                    <span className="text-white font-semibold text-sm">{action}</span>
                    <span className="text-white/30 text-sm ml-2">{desc}</span>
                  </div>
                </div>
              ))}
              <div className="pt-4">
                <a
                  href="#connect"
                  className="inline-flex items-center justify-center bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-white font-semibold text-sm tracking-wide rounded-full px-8 py-4 transition-colors duration-200"
                >
                  I WANT TO HELP
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. Join CTA */}
      <section
        id="connect"
        className="py-28 md:py-44 px-6 md:px-10 border-t border-white/[0.06]"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-8">
              Join the community
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <h2
              id="cta-heading"
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.0] tracking-tight mb-10 max-w-3xl"
            >
              Maybe this is<br />where it starts.
            </h2>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="text-white/45 text-lg leading-relaxed max-w-lg mb-10">
              We&rsquo;re looking for founders, builders, CEOs, students, mentors, and people with ideas that refuse to leave them alone.
            </p>
          </FadeIn>
          <FadeIn delay={220}>
            <ConnectForm />
          </FadeIn>
          <FadeIn delay={280}>
            <p className="mt-7 text-white/20 text-xs tracking-wide">
              No spam. No noise. Just the things that matter.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 8. Final close */}
      <section className="py-28 md:py-44 px-6 md:px-10 border-t border-white/[0.06] text-center">
        <FadeIn>
          <p className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Maybe you were<br />never the problem.
          </p>
          <p className="text-white/35 text-xl font-light mb-2">
            Maybe you just needed the right environment.
          </p>
          <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mt-10">
            ADHD for CEOs — adhdceos.org
          </p>
        </FadeIn>
      </section>

      {/* Footer */}
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
