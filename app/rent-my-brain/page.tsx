import Nav from "../components/Nav";
import FadeIn from "../components/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rent My Brain — ADHD for CEOs",
  description:
    "A community-powered initiative by ADHD for CEOs. Submit a real challenge. Connect with unconventional thinkers. Build something.",
  openGraph: {
    title: "Rent My Brain 🧠 — ADHD for CEOs",
    description:
      "Your next big idea might need a different brain. Got a problem? We might have the mind for it.",
    url: "https://adhdceos.org/rent-my-brain",
  },
};

const brainCategories = [
  {
    num: "01",
    title: "Digital & Tech",
    skills: [
      "Web development",
      "No-code / AI automation",
      "App & MVP development",
      "UX/UI & product design",
      "Data analysis",
    ],
  },
  {
    num: "02",
    title: "Creative & Marketing",
    skills: [
      "Branding & storytelling",
      "Social media strategy",
      "Content creation",
      "Growth hacking",
      "Creative direction",
    ],
  },
  {
    num: "03",
    title: "Business & Strategy",
    skills: [
      "Business model validation",
      "Market research",
      "Startup strategy",
      "Financial modelling",
      "Pitch deck feedback",
    ],
  },
  {
    num: "04",
    title: "Research & Innovation",
    skills: [
      "Research & problem solving",
      "Sustainability",
      "Architecture",
      "Education",
      "Social innovation",
    ],
  },
];

const steps = [
  {
    n: "01",
    title: "Submit your challenge",
    desc: "Tell us what problem you're trying to solve and what kind of help you need. No jargon required.",
  },
  {
    n: "02",
    title: "Meet the brains",
    desc: "We identify people from the community with relevant skills, interests, or just a genuinely different way of seeing your problem.",
  },
  {
    n: "03",
    title: "Match & connect",
    desc: "A short intro session to get aligned. No surprises. Clear scope, clear expectations.",
  },
  {
    n: "04",
    title: "Build something",
    desc: "A sprint. An audit. A design. An idea that moves things forward. Something real.",
  },
  {
    n: "05",
    title: "Give back",
    desc: "No invoice required. If it helped, you can support the community through donations, tools, mentorship, or opportunities.",
  },
  {
    n: "06",
    title: "Share the impact",
    desc: "If you're both up for it, we document what happened — and show the world what different minds can build.",
  },
];

const formats = [
  {
    name: "Brainstorm",
    duration: "30–60 min",
    output: "Fresh ideas and honest recommendations.",
    color: "border-[#2bbfbf]/30",
  },
  {
    name: "Brain Sprint",
    duration: "2–5 hours",
    output: "An audit, a strategy, or a first prototype.",
    color: "border-[#2bbfbf]/60",
  },
  {
    name: "Brain Project",
    duration: "1–2 weeks",
    output: "A defined scope, agreed terms, real output.",
    color: "border-[#2bbfbf]",
  },
];

export default function RentMyBrain() {
  return (
    <main className="bg-[#080808] text-white overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-32 pb-20">
        {/* Background glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(43,191,191,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto w-full relative">
          <FadeIn>
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase">
                ADHD for CEOs presents
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={60}>
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold text-white leading-[0.95] tracking-tight mb-8">
              RENT MY<br />
              <span className="text-[#2bbfbf]">BRAIN</span>
              <span className="text-[#2bbfbf]"> 🧠</span>
            </h1>
          </FadeIn>

          <FadeIn delay={140}>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/55 font-light max-w-2xl leading-relaxed mb-14">
              Your next big idea might need a different brain.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#need-a-brain"
                className="inline-flex items-center justify-center bg-[#2bbfbf] hover:bg-[#25aaaa] text-black font-bold text-sm tracking-widest rounded-full px-10 py-5 transition-colors duration-200"
              >
                I NEED A BRAIN
              </a>
              <a
                href="#am-a-brain"
                className="inline-flex items-center justify-center bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-white font-semibold text-sm tracking-widest rounded-full px-10 py-5 transition-colors duration-200"
              >
                I AM A BRAIN
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={260}>
            <p className="mt-8 text-white/25 text-sm tracking-wide">
              Free to participate. Community-powered. Built for impact.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* THE CONCEPT */}
      <section className="py-24 md:py-40 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <FadeIn>
            <div>
              <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-8">
                The idea
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight">
                Companies don&rsquo;t always need another agency.
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="md:pt-16 space-y-5 text-white/50 text-lg leading-relaxed">
              <p>
                Sometimes they need a different perspective. And sometimes,
                someone just needs a real problem to prove what their brain can
                build.
              </p>
              <p>
                Rent My Brain connects companies, founders, and organizations
                with talented people from the ADHD for CEOs community — people
                with unconventional thinking, genuine skills, and the kind of
                energy that makes boring problems interesting.
              </p>
              <p className="text-white/70 font-medium">
                Not a freelance marketplace. Not a free outsourcing agency.
              </p>
              <p>
                A community-powered initiative where real challenges meet
                different minds — and something actually gets built.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="py-20 md:py-32 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-8">
              The ecosystem
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 max-w-xl">
              Think different. Build together.
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
            {[
              {
                label: "THE CHALLENGERS",
                desc: "Companies, founders, and nonprofits with real problems they can't solve alone.",
              },
              {
                label: "THE BRAINS",
                desc: "Community members with skills, ideas, and an unconventional way of approaching things.",
              },
              {
                label: "THE SUPPORTERS",
                desc: "Organizations and individuals contributing tools, mentorship, and opportunities.",
              },
              {
                label: "ADHD FOR CEOs",
                desc: "The platform connecting people, challenges, and outcomes.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="bg-[#080808] p-8 md:p-10 hover:bg-white/[0.02] transition-colors duration-500 h-full">
                  <p className="text-[10px] font-bold tracking-[0.3em] text-[#2bbfbf] uppercase mb-5">
                    {item.label}
                  </p>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 md:py-40 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-8">
              How it works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 max-w-xl">
              Submit → Match → Build → Give Back.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="bg-[#080808] p-8 md:p-10 hover:bg-white/[0.02] transition-colors duration-500">
                  <p className="text-4xl font-bold text-white/[0.07] mb-4 tracking-tight">
                    {step.n}
                  </p>
                  <h3 className="text-white font-semibold text-base mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/35 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* COLLABORATION FORMATS */}
      <section className="py-20 md:py-32 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-8">
              Collaboration formats
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 max-w-xl">
              Three ways to work together.
            </h2>
            <p className="text-white/35 text-base mb-16 max-w-lg leading-relaxed">
              Each Brain chooses what they take on and how much time they give.
              Nothing is unlimited. Everything is agreed up front.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {formats.map((f, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div
                  className={`border ${f.color} rounded-2xl p-8 md:p-10 hover:bg-white/[0.02] transition-colors duration-500`}
                >
                  <h3 className="text-white font-bold text-xl mb-2">
                    {f.name}
                  </h3>
                  <p className="text-[#2bbfbf] text-sm font-medium mb-5">
                    {f.duration}
                  </p>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {f.output}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BRAIN CATEGORIES */}
      <section className="py-24 md:py-40 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-8">
              What can we build
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Not just developers.
            </h2>
            <p className="text-white/35 text-lg mb-16 max-w-lg leading-relaxed">
              The real advantage of ADHD for CEOs is the diversity of thinking.
              We&rsquo;re not a dev shop.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
            {brainCategories.map((cat, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="bg-[#080808] p-8 md:p-10 hover:bg-white/[0.02] transition-colors duration-500 h-full">
                  <p className="text-white/15 text-4xl font-bold mb-4 tracking-tight">
                    {cat.num}
                  </p>
                  <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
                    {cat.title}
                  </h3>
                  <ul className="space-y-2">
                    {cat.skills.map((skill, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-white/35 text-sm"
                      >
                        <span
                          className="text-[#2bbfbf]/40 mt-0.5 flex-shrink-0 text-xs"
                          aria-hidden="true"
                        >
                          →
                        </span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* I NEED A BRAIN — FORM */}
      <section
        id="need-a-brain"
        className="py-24 md:py-40 px-6 md:px-10 border-t border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <FadeIn>
            <div>
              <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-8">
                For companies & founders
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-6">
                I NEED<br />A BRAIN.
              </h2>
              <p className="text-white/45 text-lg leading-relaxed mb-8">
                Have a real problem? Submit your challenge and we&rsquo;ll find
                someone who can help — or at least think about it differently.
              </p>
              <div className="space-y-3 text-white/30 text-sm">
                <p>→ &nbsp;No agency fees</p>
                <p>→ &nbsp;No guaranteed outcome (we&rsquo;re honest about that)</p>
                <p>→ &nbsp;No replacing paid work without proper agreements</p>
                <p className="text-white/50 mt-5">
                  If it helps, give back however you can.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={140}>
            <form
              className="space-y-5"
              action="https://formspree.io/f/rentmybrain-challenger"
              method="POST"
            >
              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Your company name"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                  What problem are you trying to solve?
                </label>
                <textarea
                  name="challenge"
                  rows={4}
                  placeholder="Describe the challenge. The messier the better — we're good with messy."
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors resize-none"
                />
              </div>
              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                  What type of expertise do you need?
                </label>
                <select
                  name="expertise"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white/60 text-sm focus:outline-none focus:border-[#2bbfbf]/50 transition-colors appearance-none"
                >
                  <option value="" disabled selected>
                    Select a category
                  </option>
                  <option value="digital-tech">Digital & Tech</option>
                  <option value="creative-marketing">
                    Creative & Marketing
                  </option>
                  <option value="business-strategy">Business & Strategy</option>
                  <option value="research-innovation">
                    Research & Innovation
                  </option>
                  <option value="unsure">Not sure — help me figure it out</option>
                </select>
              </div>
              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                  Expected outcome (optional)
                </label>
                <input
                  type="text"
                  name="outcome"
                  placeholder="What would a good result look like?"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2bbfbf] hover:bg-[#25aaaa] text-black font-bold text-sm tracking-widest rounded-full px-10 py-5 transition-colors duration-200 mt-2"
              >
                SUBMIT MY CHALLENGE
              </button>
              <p className="text-white/20 text-xs text-center pt-1">
                We review every submission and reply within 5 business days.
              </p>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* I AM A BRAIN — FORM */}
      <section
        id="am-a-brain"
        className="py-24 md:py-40 px-6 md:px-10 border-t border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <FadeIn>
            <div>
              <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-8">
                For the community
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-6">
                I AM<br />A BRAIN.
              </h2>
              <p className="text-white/45 text-lg leading-relaxed mb-8">
                You have skills, ideas, or an unconventional way of thinking.
                Prove what your brain can build.
              </p>
              <div className="space-y-3 text-white/30 text-sm">
                <p>→ &nbsp;No ADHD diagnosis required</p>
                <p>→ &nbsp;You choose what you take on</p>
                <p>→ &nbsp;Real problems, real portfolio, real connections</p>
                <p className="text-white/50 mt-5">
                  We create opportunities, not free labor.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={140}>
            <form
              className="space-y-5"
              action="https://formspree.io/f/rentmybrain-brain"
              method="POST"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    placeholder="Where are you?"
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                  What are your skills?
                </label>
                <textarea
                  name="skills"
                  rows={3}
                  placeholder="What do you do well? What do you enjoy? Don't be modest."
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors resize-none"
                />
              </div>
              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                  Portfolio / LinkedIn / GitHub (optional)
                </label>
                <input
                  type="text"
                  name="portfolio"
                  placeholder="A link to your work"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                  How much time can you give per month?
                </label>
                <select
                  name="availability"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white/60 text-sm focus:outline-none focus:border-[#2bbfbf]/50 transition-colors appearance-none"
                >
                  <option value="" disabled selected>
                    Select availability
                  </option>
                  <option value="1-3h">1–3 hours</option>
                  <option value="3-8h">3–8 hours</option>
                  <option value="8-20h">8–20 hours</option>
                  <option value="flexible">Flexible — depends on the project</option>
                </select>
              </div>
              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                  What do you hope to get out of this?
                </label>
                <input
                  type="text"
                  name="motivation"
                  placeholder="Experience, connections, portfolio, something to build..."
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 text-white font-bold text-sm tracking-widest rounded-full px-10 py-5 transition-colors duration-200 mt-2"
              >
                JOIN AS A BRAIN
              </button>
              <p className="text-white/20 text-xs text-center pt-1">
                No diagnosis required. Open to everyone who thinks differently.
              </p>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* RULES / PROTECTION */}
      <section className="py-20 md:py-28 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div>
              <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-6">
                Our commitments
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                We create opportunities,<br />not free labor.
              </h2>
              <p className="text-white/40 text-base leading-relaxed">
                These are the rules we don&rsquo;t negotiate. They protect
                everyone.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <ul className="space-y-4">
              {[
                "No one is obligated to accept a challenge.",
                "Collaboration scope and hours are agreed before anything starts.",
                "Participants are never used to replace paid roles.",
                "Intellectual property is agreed in writing before work begins.",
                "Contributors always get credit for their work.",
                "Donations don't buy priority or guarantee a solution.",
                "Commercial projects requiring substantial professional work require proper compensation.",
              ].map((rule, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 py-4 border-b border-white/[0.05] last:border-0"
                >
                  <span
                    className="text-[#2bbfbf]/50 text-xs mt-1 flex-shrink-0"
                    aria-hidden="true"
                  >
                    →
                  </span>
                  <span className="text-white/45 text-sm leading-relaxed">
                    {rule}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* PART OF SOMETHING BIGGER */}
      <section className="py-20 md:py-32 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-8">
              The bigger picture
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 max-w-xl">
              Part of the ADHD for CEOs ecosystem.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
            {[
              {
                n: "01",
                title: "ADHD for CEOs Hackathon",
                desc: "48 hours to turn an idea into something real. The original experiment.",
                link: "/",
                cta: "Learn more",
              },
              {
                n: "02",
                title: "Rent My Brain",
                desc: "Connect talent with real challenges during the whole year. That's what you're looking at.",
                link: null,
                cta: null,
                active: true,
              },
              {
                n: "03",
                title: "ADHD for CEOs Community",
                desc: "Build relationships, share experiences, and generate real opportunities.",
                link: "/#connect",
                cta: "Join the community",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div
                  className={`bg-[#080808] p-8 md:p-10 h-full ${item.active ? "ring-1 ring-[#2bbfbf]/20" : "hover:bg-white/[0.02]"} transition-colors duration-500`}
                >
                  <p className="text-white/15 text-4xl font-bold mb-5 tracking-tight">
                    {item.n}
                  </p>
                  <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white/35 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      className="text-[#2bbfbf] text-xs font-semibold tracking-widest uppercase hover:text-white transition-colors"
                    >
                      {item.cta} →
                    </a>
                  )}
                  {item.active && (
                    <span className="text-[#2bbfbf]/60 text-xs font-semibold tracking-widest uppercase">
                      You&rsquo;re here ↑
                    </span>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-28 md:py-44 px-6 md:px-10 border-t border-white/[0.06] text-center">
        <FadeIn>
          <p className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.0] tracking-tight mb-8 max-w-4xl mx-auto">
            Got a problem?<br />
            <span className="text-[#2bbfbf]">We might have</span><br />
            the mind for it.
          </p>
          <p className="text-white/35 text-xl font-light mb-12">
            Borrow a perspective. Unlock a solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#need-a-brain"
              className="inline-flex items-center justify-center bg-[#2bbfbf] hover:bg-[#25aaaa] text-black font-bold text-sm tracking-widest rounded-full px-10 py-5 transition-colors duration-200"
            >
              I NEED A BRAIN
            </a>
            <a
              href="#am-a-brain"
              className="inline-flex items-center justify-center bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-white font-semibold text-sm tracking-widest rounded-full px-10 py-5 transition-colors duration-200"
            >
              I AM A BRAIN
            </a>
          </div>
          <p className="mt-10 text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase">
            ADHD for CEOs · adhdceos.org/rent-my-brain
          </p>
        </FadeIn>
      </section>

      {/* FOOTER */}
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
            <p>Rent My Brain — A community-powered initiative.</p>
            <p className="mt-0.5">
              © {new Date().getFullYear()} ADHD for CEOs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
