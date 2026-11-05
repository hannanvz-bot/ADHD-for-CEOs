"use client";

import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import HeroVideo from "./components/HeroVideo";
import FadeIn from "./components/FadeIn";
import ConnectForm from "./components/ConnectForm";
import { type Lang } from "./components/LanguageToggle";

// ─── Translations ────────────────────────────────────────────────────────────

const t = {
  en: {
    // Problem
    sectionQuestion: "The question",
    headline: "What if you don't need to think differently?",
    subheadline: "What if the environment needs to work differently?",
    p1: "Some people have more ideas than they know what to do with.",
    p2: "Some move between ideas quickly. Some build differently. Some struggle inside environments designed around a completely different way of working.",
    p3: "ADHD for CEOs is exploring what happens when those people have an environment built for them instead.",

    // Hackathon
    sectionFirst: "First experiment",
    hackTitle: "THE FIRST ADHD FOR CEOs HACKATHON",
    hackSub: "48 hours to turn an idea you've been carrying around into something real.",
    statPeople: "people",
    statHours: "hours",
    statIdeas: "ideas",
    statProtos: "real prototypes",
    bring1: "Bring the idea you've been thinking about for six months.",
    bring2: "The business you keep talking about.\nThe website you never built.\nThe nonprofit you keep postponing.\nThe product you can't stop thinking about.",
    bring3: "Bring it.",
    bringEnd: "We'll build it together.",
    sectionBuild: "What we build",
    ctaBuild: "I WANT TO BUILD",
    ctaHelp: "I WANT TO HELP",

    // Build categories
    buildCategories: [
      { label: "Websites", desc: "The one you keep putting off." },
      { label: "MVPs", desc: "A real product, not a pitch deck." },
      { label: "Businesses", desc: "Something that exists when the weekend is over." },
      { label: "Communities", desc: "A place for people like you." },
      { label: "Creative projects", desc: "Art, writing, music. Real things." },
      { label: "Social impact", desc: "Nonprofits, causes, change." },
    ],

    // Bridge section
    sectionEcosystem: "Two ways to participate",
    bridgeTitle: "The Hackathon and Rent My Brain work together.",
    bridgeBody: "The Hackathon is where you build — 48 hours, one idea, real output. Rent My Brain is how the community keeps working between events: founders and companies bring real challenges, and community members step in with the expertise to help solve them. One feeds the other. The people who build at the hackathon become the brains that companies rent. The problems companies bring become the ideas worth building.",
    bridgeCtaHackathon: "JOIN THE HACKATHON",
    bridgeCtaBrain: "RENT MY BRAIN",

    // Origin
    sectionWhy: "Why this exists",
    originTitle: "This started in 2020.",
    o1: "In 2020, Hannan Vilchis-Zubizarreta created HaviZú Corp, a nonprofit in Florida, because he wanted to help people turn ideas into reality.",
    o2: "Over the following years, the same instinct kept appearing: helping friends build businesses, creating communities, turning ideas into things that actually existed.",
    o3: "After moving to Spain, Hannan was diagnosed with ADHD. Suddenly, a lot made sense.",
    o4: "Then a conversation at The Launch Pad at the University of Miami changed things. For the first time in a long time, he felt understood rather than judged. He could jump between thoughts, lose his train of thought, return to something later — without apologizing for how his mind worked.",
    o5: "That conversation made him ask: what if that kind of environment existed for more people?",
    photoCaption: "LaVegaInnova Hackathon · Madrid, 2024",
    quote: "“I spent years feeling like I was too much — too many ideas, too little structure, too hard to explain. Then I sat in a room where none of that mattered. Now I want to build that room for other people.”",
    quoteAuthor: "— Hannan Vilchis, Founder",

    // For
    sectionFor: "Who this is for",
    forTitle: "You're probably not the only one.",
    forSub: "We're starting by listening.",
    audience: [
      { title: "Founders", sub: "You've built things that didn't fit any existing template." },
      { title: "Future founders", sub: "The idea is there. The right environment isn't — yet." },
      { title: "CEOs", sub: "You lead well. You also struggle with things nobody in the room talks about." },
      { title: "Builders", sub: "You move fast, connect dots, and rarely do just one thing." },
      { title: "ADHD professionals", sub: "You've made it work inside systems that weren't built for you." },
      { title: "Unconventional thinkers", sub: "You've been told to focus. You're tired of being told to focus." },
    ],

    // Future
    sectionExploring: "What we're exploring",
    futureTitle: "What could this become?",
    futureSub: "If the community wants it, this could become:",
    futures: ["Hackathons", "Founder community", "Peer mentorship", "Founder stories", "Workshops", "Build weekends", "University partnerships", "Resources"],

    // Help
    sectionSupport: "Support",
    helpTitle: "Help us build the first one.",
    helpSub: "Before we build a big organization, we want to prove that people want this.",
    helpItems: [
      ["Joining", "Be part of the first community."],
      ["Building", "Bring your idea to the hackathon."],
      ["Mentoring", "Help others build their ideas."],
      ["Sharing", "Tell someone who needs to hear this."],
      ["Connecting", "Introduce us to people who get it."],
    ],
    ctaWantHelp: "I WANT TO HELP",

    // CTA
    sectionJoin: "Join the community",
    ctaTitle: "Maybe this is where it starts.",
    ctaBody: "We're looking for founders, builders, CEOs, students, mentors, and people with ideas that refuse to leave them alone.",
    ctaFine: "No spam. No noise. Just the things that matter.",

    // Close
    closeHeadline: "Maybe you were never the problem.",
    closeSub: "Maybe you just needed the right environment.",

    // Footer
    footerTag: "A nonprofit initiative.",
    footerRights: "All rights reserved.",
  },

  es: {
    sectionQuestion: "La pregunta",
    headline: "¿Y si no necesitas pensar diferente?",
    subheadline: "¿Y si el entorno necesita funcionar diferente?",
    p1: "Algunas personas tienen más ideas de las que saben qué hacer con ellas.",
    p2: "Algunas se mueven rápido entre ideas. Algunas construyen diferente. Algunas luchan dentro de entornos diseñados para una forma de trabajar completamente distinta.",
    p3: "ADHD for CEOs explora qué pasa cuando esas personas tienen un entorno construido para ellas.",

    sectionFirst: "Primer experimento",
    hackTitle: "EL PRIMER HACKATHON ADHD FOR CEOs",
    hackSub: "48 horas para convertir una idea que llevas meses dando vueltas en algo real.",
    statPeople: "personas",
    statHours: "horas",
    statIdeas: "ideas",
    statProtos: "prototipos reales",
    bring1: "Trae la idea que llevas seis meses pensando.",
    bring2: "El negocio que siempre mencionas.\nLa web que nunca construiste.\nLa ONG que sigues posponiendo.\nEl producto que no puedes dejar de imaginar.",
    bring3: "Tráelo.",
    bringEnd: "Lo construimos juntos.",
    sectionBuild: "Qué construimos",
    ctaBuild: "QUIERO CONSTRUIR",
    ctaHelp: "QUIERO AYUDAR",

    buildCategories: [
      { label: "Webs", desc: "La que llevas tiempo aplazando." },
      { label: "MVPs", desc: "Un producto real, no una presentación." },
      { label: "Negocios", desc: "Algo que exista cuando acabe el fin de semana." },
      { label: "Comunidades", desc: "Un lugar para gente como tú." },
      { label: "Proyectos creativos", desc: "Arte, escritura, música. Cosas reales." },
      { label: "Impacto social", desc: "ONGs, causas, cambio." },
    ],

    sectionEcosystem: "Dos formas de participar",
    bridgeTitle: "El Hackathon y Rent My Brain funcionan juntos.",
    bridgeBody: "El Hackathon es donde construyes — 48 horas, una idea, resultado real. Rent My Brain es cómo la comunidad sigue trabajando entre eventos: founders y empresas traen retos reales, y los miembros de la comunidad aportan la experiencia para resolverlos. Uno alimenta al otro. Las personas que construyen en el hackathon se convierten en los 'brains' que las empresas contratan. Los problemas que traen las empresas se convierten en las ideas que vale la pena construir.",
    bridgeCtaHackathon: "UNIRME AL HACKATHON",
    bridgeCtaBrain: "RENT MY BRAIN",

    sectionWhy: "Por qué existe esto",
    originTitle: "Esto empezó en 2020.",
    o1: "En 2020, Hannan Vilchis-Zubizarreta creó HaviZú Corp, una organización sin ánimo de lucro en Florida, porque quería ayudar a las personas a convertir ideas en realidad.",
    o2: "En los años siguientes, el mismo instinto seguía apareciendo: ayudar a amigos a construir negocios, crear comunidades, convertir ideas en cosas que realmente existían.",
    o3: "Después de mudarse a España, a Hannan le diagnosticaron TDAH. De repente, muchas cosas tuvieron sentido.",
    o4: "Luego una conversación en The Launch Pad de la Universidad de Miami cambió todo. Por primera vez en mucho tiempo, se sintió comprendido en lugar de juzgado. Podía saltar entre pensamientos, perder el hilo, volver a algo más tarde — sin pedir perdón por cómo funcionaba su mente.",
    o5: "Esa conversación le hizo preguntarse: ¿y si ese tipo de entorno existiera para más personas?",
    photoCaption: "Hackathon LaVegaInnova · Madrid, 2024",
    quote: "“Pasé años sintiéndome demasiado — demasiadas ideas, poca estructura, difícil de explicar. Luego me senté en una sala donde nada de eso importaba. Ahora quiero construir esa sala para otras personas.”",
    quoteAuthor: "— Hannan Vilchis, Fundador",

    sectionFor: "Para quién es esto",
    forTitle: "Probablemente no eres el único.",
    forSub: "Empezamos escuchando.",
    audience: [
      { title: "Founders", sub: "Has construido cosas que no encajaban en ningún molde." },
      { title: "Futuros founders", sub: "La idea está ahí. El entorno adecuado todavía no." },
      { title: "CEOs", sub: "Lideras bien. También luchas con cosas de las que nadie habla en la sala." },
      { title: "Builders", sub: "Vas rápido, conectas puntos y rara vez haces solo una cosa." },
      { title: "Profesionales con TDAH", sub: "Has conseguido que funcione dentro de sistemas que no estaban hechos para ti." },
      { title: "Pensadores poco convencionales", sub: "Te han dicho que te concentres. Estás cansado de que te lo digan." },
    ],

    sectionExploring: "Qué exploramos",
    futureTitle: "¿En qué podría convertirse esto?",
    futureSub: "Si la comunidad lo quiere, esto podría incluir:",
    futures: ["Hackathons", "Comunidad de founders", "Mentoría entre pares", "Historias de founders", "Talleres", "Fines de semana de construcción", "Alianzas universitarias", "Recursos"],

    sectionSupport: "Apoyo",
    helpTitle: "Ayúdanos a construir el primero.",
    helpSub: "Antes de construir una gran organización, queremos demostrar que la gente lo quiere.",
    helpItems: [
      ["Uniéndote", "Sé parte de la primera comunidad."],
      ["Construyendo", "Trae tu idea al hackathon."],
      ["Mentorizando", "Ayuda a otros a construir sus ideas."],
      ["Compartiendo", "Cuéntaselo a alguien que necesite escucharlo."],
      ["Conectando", "Preséntanos a personas que lo entiendan."],
    ],
    ctaWantHelp: "QUIERO AYUDAR",

    sectionJoin: "Únete a la comunidad",
    ctaTitle: "Quizás aquí es donde empieza.",
    ctaBody: "Buscamos founders, builders, CEOs, estudiantes, mentores y personas con ideas que no les dejan en paz.",
    ctaFine: "Sin spam. Sin ruido. Solo lo que importa.",

    closeHeadline: "Quizás nunca fuiste el problema.",
    closeSub: "Quizás solo necesitabas el entorno adecuado.",

    footerTag: "Una iniciativa sin ánimo de lucro.",
    footerRights: "Todos los derechos reservados.",
  },

  fr: {
    sectionQuestion: "La question",
    headline: "Et si vous n'aviez pas besoin de penser différemment ?",
    subheadline: "Et si c'est l'environnement qui devait fonctionner différemment ?",
    p1: "Certaines personnes ont plus d'idées qu'elles ne savent quoi en faire.",
    p2: "Certaines passent rapidement d'une idée à l'autre. Certaines construisent différemment. Certaines peinent dans des environnements conçus pour une façon de travailler radicalement différente.",
    p3: "ADHD for CEOs explore ce qui se passe quand ces personnes ont un environnement fait pour elles.",

    sectionFirst: "Premier expériment",
    hackTitle: "LE PREMIER HACKATHON ADHD FOR CEOs",
    hackSub: "48 heures pour transformer une idée que vous portez depuis des mois en quelque chose de réel.",
    statPeople: "personnes",
    statHours: "heures",
    statIdeas: "idées",
    statProtos: "prototypes réels",
    bring1: "Apportez l'idée à laquelle vous pensez depuis six mois.",
    bring2: "Le business dont vous parlez toujours.\nLe site que vous n'avez jamais construit.\nL'association que vous continuez de reporter.\nLe produit que vous ne pouvez pas arrêter d'imaginer.",
    bring3: "Apportez-la.",
    bringEnd: "On la construira ensemble.",
    sectionBuild: "Ce que nous construisons",
    ctaBuild: "JE VEUX CONSTRUIRE",
    ctaHelp: "JE VEUX AIDER",

    buildCategories: [
      { label: "Sites web", desc: "Celui que vous repoussez depuis trop longtemps." },
      { label: "MVPs", desc: "Un vrai produit, pas un pitch deck." },
      { label: "Entreprises", desc: "Quelque chose qui existe quand le week-end se termine." },
      { label: "Communautés", desc: "Un endroit pour des gens comme vous." },
      { label: "Projets créatifs", desc: "Art, écriture, musique. Des vraies choses." },
      { label: "Impact social", desc: "Associations, causes, changement." },
    ],

    sectionEcosystem: "Deux façons de participer",
    bridgeTitle: "Le Hackathon et Rent My Brain fonctionnent ensemble.",
    bridgeBody: "Le Hackathon est l'endroit où vous construisez — 48 heures, une idée, un résultat concret. Rent My Brain est la façon dont la communauté continue de travailler entre les événements : des fondateurs et des entreprises apportent de vrais défis, et les membres de la communauté interviennent avec leur expertise. L'un nourrit l'autre. Les personnes qui construisent au hackathon deviennent les cerveaux que les entreprises sollicitent. Les problèmes que les entreprises apportent deviennent les idées qui valent la peine d'être construites.",
    bridgeCtaHackathon: "REJOINDRE LE HACKATHON",
    bridgeCtaBrain: "RENT MY BRAIN",

    sectionWhy: "Pourquoi ça existe",
    originTitle: "Tout a commencé en 2020.",
    o1: "En 2020, Hannan Vilchis-Zubizarreta a créé HaviZú Corp, une organisation à but non lucratif en Floride, parce qu'il voulait aider les gens à transformer leurs idées en réalité.",
    o2: "Au fil des années suivantes, le même instinct revenait : aider des amis à construire des entreprises, créer des communautés, transformer des idées en choses qui existaient vraiment.",
    o3: "Après s'être installé en Espagne, Hannan a reçu un diagnostic de TDAH. Soudain, beaucoup de choses avaient du sens.",
    o4: "Puis une conversation au Launch Pad de l'Université de Miami a tout changé. Pour la première fois depuis longtemps, il s'est senti compris plutôt que jugé. Il pouvait sauter d'une pensée à l'autre, perdre le fil, revenir à quelque chose plus tard — sans s'excuser de la façon dont son esprit fonctionnait.",
    o5: "Cette conversation lui a fait se demander : et si ce type d'environnement existait pour plus de personnes ?",
    photoCaption: "Hackathon LaVegaInnova · Madrid, 2024",
    quote: "“J’ai passé des années à me sentir trop — trop d’idées, trop peu de structure, trop difficile à expliquer. Puis je me suis assis dans une pièce où rien de tout cela n’avait d’importance. Maintenant je veux construire cette pièce pour d’autres personnes.”",
    quoteAuthor: "— Hannan Vilchis, Fondateur",

    sectionFor: "À qui s'adresse ceci",
    forTitle: "Vous n'êtes probablement pas le seul.",
    forSub: "Nous commençons par écouter.",
    audience: [
      { title: "Fondateurs", sub: "Vous avez construit des choses qui ne rentraient dans aucun modèle existant." },
      { title: "Futurs fondateurs", sub: "L'idée est là. Le bon environnement pas encore." },
      { title: "PDGs", sub: "Vous dirigez bien. Vous luttez aussi avec des choses dont personne ne parle." },
      { title: "Builders", sub: "Vous allez vite, connectez les points et faites rarement une seule chose." },
      { title: "Professionnels TDAH", sub: "Vous avez réussi à fonctionner dans des systèmes qui n'étaient pas faits pour vous." },
      { title: "Penseurs non conventionnels", sub: "On vous a dit de vous concentrer. Vous en avez assez qu'on vous le dise." },
    ],

    sectionExploring: "Ce que nous explorons",
    futureTitle: "Qu'est-ce que ça pourrait devenir ?",
    futureSub: "Si la communauté le veut, cela pourrait inclure :",
    futures: ["Hackathons", "Communauté de fondateurs", "Mentorat entre pairs", "Histoires de fondateurs", "Ateliers", "Week-ends de construction", "Partenariats universitaires", "Ressources"],

    sectionSupport: "Soutien",
    helpTitle: "Aidez-nous à construire le premier.",
    helpSub: "Avant de construire une grande organisation, nous voulons prouver que les gens le veulent.",
    helpItems: [
      ["Rejoindre", "Faites partie de la première communauté."],
      ["Construire", "Apportez votre idée au hackathon."],
      ["Mentorer", "Aidez les autres à construire leurs idées."],
      ["Partager", "Dites-le à quelqu'un qui a besoin de l'entendre."],
      ["Connecter", "Présentez-nous des personnes qui comprennent."],
    ],
    ctaWantHelp: "JE VEUX AIDER",

    sectionJoin: "Rejoindre la communauté",
    ctaTitle: "C'est peut-être ici que ça commence.",
    ctaBody: "Nous cherchons des fondateurs, des builders, des PDGs, des étudiants, des mentors et des personnes avec des idées qui refusent de les laisser tranquilles.",
    ctaFine: "Pas de spam. Pas de bruit. Juste ce qui compte.",

    closeHeadline: "Peut-être que vous n'étiez jamais le problème.",
    closeSub: "Peut-être que vous aviez juste besoin du bon environnement.",

    footerTag: "Une initiative à but non lucratif.",
    footerRights: "Tous droits réservés.",
  },
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");

  // Restore preference on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("adhdceos-lang") as Lang | null;
      if (saved && ["en", "es", "fr"].includes(saved)) setLang(saved);
    } catch {}
  }, []);

  const c = t[lang];

  return (
    <main className="bg-[#080808] text-white overflow-x-hidden">
      <Nav lang={lang} onLangChange={setLang} />

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
                {c.sectionQuestion}
              </p>
              <h2
                id="problem-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white"
              >
                {c.headline}
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="md:pt-20">
              <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light mb-6">
                {c.subheadline}
              </p>
              <div className="space-y-4 text-white/40 text-base leading-relaxed">
                <p>{c.p1}</p>
                <p>{c.p2}</p>
                <p>{c.p3}</p>
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
              {c.sectionFirst}
            </p>
            <h2
              id="hackathon-heading"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.0] tracking-tight mb-6 max-w-3xl"
            >
              {c.hackTitle}
            </h2>
            <p className="text-xl md:text-2xl text-white/50 font-light max-w-xl leading-relaxed mb-16">
              {c.hackSub}
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden mb-16">
              {[
                { n: "20", label: c.statPeople },
                { n: "48", label: c.statHours },
                { n: "10", label: c.statIdeas },
                { n: "∞", label: c.statProtos },
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
                <p>{c.bring1}</p>
                <p>{c.bring2.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}</p>
                <p className="text-white text-xl font-semibold">{c.bring3}</p>
                <p className="text-white/55">{c.bringEnd}</p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="space-y-3">
                <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-5">
                  {c.sectionBuild}
                </p>
                {c.buildCategories.map((cat, i) => (
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
                {c.ctaBuild}
              </a>
              <a
                href="#help"
                className="inline-flex items-center justify-center bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-white font-semibold text-sm tracking-wide rounded-full px-10 py-4 transition-colors duration-200"
              >
                {c.ctaHelp}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* BRIDGE: Hackathon ↔ Rent My Brain */}
      <section
        className="py-24 md:py-36 px-6 md:px-10 border-t border-white/[0.06] bg-white/[0.015]"
        aria-labelledby="ecosystem-heading"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-8">
              {c.sectionEcosystem}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <FadeIn delay={80}>
              <h2
                id="ecosystem-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-8"
              >
                {c.bridgeTitle}
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-10">
                {c.bridgeBody}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#connect"
                  className="inline-flex items-center justify-center bg-[#2bbfbf] hover:bg-[#25aaaa] text-black font-bold text-sm tracking-widest rounded-full px-8 py-4 transition-colors duration-200"
                >
                  {c.bridgeCtaHackathon}
                </a>
                <a
                  href="/rent-my-brain"
                  className="inline-flex items-center justify-center bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-white font-semibold text-sm tracking-widest rounded-full px-8 py-4 transition-colors duration-200"
                >
                  {c.bridgeCtaBrain}
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={160}>
              <div className="grid grid-cols-1 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
                {[
                  {
                    icon: "⚡",
                    title: lang === "en" ? "The Hackathon" : lang === "es" ? "El Hackathon" : "Le Hackathon",
                    desc: lang === "en"
                      ? "48 hours. One idea. A room full of people who build instead of talk. You leave with something real."
                      : lang === "es"
                      ? "48 horas. Una idea. Una sala llena de personas que construyen en lugar de hablar. Sales con algo real."
                      : "48 heures. Une idée. Une salle pleine de gens qui construisent plutôt que de parler. Vous repartez avec quelque chose de réel.",
                    cta: lang === "en" ? "Join →" : lang === "es" ? "Unirme →" : "Rejoindre →",
                    href: "#connect",
                    highlight: true,
                  },
                  {
                    icon: "🧠",
                    title: "Rent My Brain",
                    desc: lang === "en"
                      ? "Between hackathons, the community keeps working. Companies bring challenges. Community members bring expertise. Real collaboration, real impact."
                      : lang === "es"
                      ? "Entre hackathons, la comunidad sigue trabajando. Las empresas traen retos. Los miembros aportan expertise. Colaboración real, impacto real."
                      : "Entre les hackathons, la communauté continue de travailler. Les entreprises apportent des défis. Les membres apportent leur expertise. Collaboration réelle, impact réel.",
                    cta: lang === "en" ? "Explore →" : lang === "es" ? "Explorar →" : "Explorer →",
                    href: "/rent-my-brain",
                    highlight: false,
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className={`block p-8 md:p-10 transition-colors duration-300 group ${
                      item.highlight
                        ? "bg-[#2bbfbf]/[0.07] hover:bg-[#2bbfbf]/[0.12]"
                        : "bg-[#080808] hover:bg-white/[0.03]"
                    }`}
                  >
                    <div className="flex items-start gap-5">
                      <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#2bbfbf] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed mb-4">{item.desc}</p>
                        <span className="text-[#2bbfbf] text-xs font-bold tracking-widest uppercase">
                          {item.cta}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>
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
              {c.sectionWhy}
            </p>
            <h2
              id="origin-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-16"
            >
              {c.originTitle}
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
            <FadeIn delay={80}>
              <div className="space-y-5 text-white/50 text-lg leading-relaxed">
                <p>{c.o1}</p>
                <p>{c.o2}</p>
                <p>{c.o3}</p>
                <p>{c.o4}</p>
                <p className="text-white/70">{c.o5}</p>
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
                  {c.photoCaption}
                </figcaption>
              </figure>
              <blockquote className="mt-8 border-l-2 border-[#2bbfbf]/40 pl-6">
                <p className="text-lg text-white/60 font-light leading-relaxed italic">
                  {c.quote}
                </p>
                <footer className="mt-4 text-white/25 text-sm tracking-wide">
                  {c.quoteAuthor}
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
              {c.sectionFor}
            </p>
            <h2
              id="for-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-3"
            >
              {c.forTitle}
            </h2>
            <p className="text-white/35 text-lg mb-16 max-w-lg">
              {c.forSub}
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
            {c.audience.map((item, i) => (
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
                {c.sectionExploring}
              </p>
              <h2
                id="future-heading"
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                {c.futureTitle}
              </h2>
              <p className="text-white/30 text-base max-w-sm leading-relaxed">
                {c.futureSub}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <ul className="grid grid-cols-2 gap-4 pt-2">
              {c.futures.map((item, i) => (
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
                {c.sectionSupport}
              </p>
              <h2
                id="help-heading"
                className="text-3xl md:text-4xl font-bold text-white leading-snug mb-6"
              >
                {c.helpTitle}
              </h2>
              <p className="text-white/45 text-lg leading-relaxed">
                {c.helpSub}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="space-y-4">
              {c.helpItems.map(([action, desc], i) => (
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
                  {c.ctaWantHelp}
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
              {c.sectionJoin}
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <h2
              id="cta-heading"
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.0] tracking-tight mb-10 max-w-3xl"
            >
              {c.ctaTitle}
            </h2>
          </FadeIn>
          <FadeIn delay={160}>
            <p className="text-white/45 text-lg leading-relaxed max-w-lg mb-10">
              {c.ctaBody}
            </p>
          </FadeIn>
          <FadeIn delay={220}>
            <ConnectForm />
          </FadeIn>
          <FadeIn delay={280}>
            <p className="mt-7 text-white/20 text-xs tracking-wide">
              {c.ctaFine}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 md:py-24 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
              <div className="flex-shrink-0">
                <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-2">
                  {lang === "en" ? "Sponsors & partners" : lang === "es" ? "Sponsors y partners" : "Sponsors & partenaires"}
                </p>
                <p className="text-white/25 text-xs">
                  {lang === "en" ? "Thank you for making this possible." : lang === "es" ? "Gracias por hacer esto posible." : "Merci de rendre cela possible."}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-6 md:gap-10">
                {[
                  { name: "Raimar-Repara.es", logo: "/sponsors/raimar.jpg", url: "https://raimar-repara.es" },
                  { name: "AgroCarbonX.es", logo: "/sponsors/agrocarbonx.jpg", url: "https://agrocarbonx.es" },
                  { name: "AdherAI.es", logo: "/sponsors/adherai.jpg", url: "https://adherai.es" },
                  { name: "Ostal.es", logo: "/sponsors/ostal.jpg", url: "https://ostal.es" },
                ].map((s) => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                    className="opacity-40 hover:opacity-70 transition-opacity duration-300 flex items-center"
                    aria-label={s.name}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.logo} alt={s.name} className="h-8 md:h-10 w-auto object-contain" style={{ filter: "grayscale(100%) brightness(200%)" }} />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. Final close */}
      <section className="py-28 md:py-44 px-6 md:px-10 border-t border-white/[0.06] text-center">
        <FadeIn>
          <p className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            {c.closeHeadline}
          </p>
          <p className="text-white/35 text-xl font-light mb-2">
            {c.closeSub}
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
            <p>ADHDCEOs.org — {c.footerTag}</p>
            <p className="mt-0.5">
              © {new Date().getFullYear()} ADHD for CEOs. {c.footerRights}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
