"use client";

import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import FadeIn from "../components/FadeIn";
import { type Lang } from "../components/LanguageToggle";

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

// ─── Translations ────────────────────────────────────────────────────────────

const t = {
  en: {
    present: "ADHD for CEOs presents",
    heroSub: "Your next big idea might need a different brain.",
    ctaNeedBrain: "I NEED A BRAIN",
    ctaAmBrain: "I AM A BRAIN",
    heroBadge: "Free to participate. Community-powered. Built for impact.",

    ideaLabel: "The idea",
    ideaTitle: "Companies don’t always need another agency.",
    idea1: "Sometimes they need a different perspective. And sometimes, someone just needs a real problem to prove what their brain can build.",
    idea2: "Rent My Brain connects companies, founders, and organizations with talented people from the ADHD for CEOs community — people with unconventional thinking, genuine skills, and the kind of energy that makes boring problems interesting.",
    idea3: "Not a freelance marketplace. Not a free outsourcing agency.",
    idea4: "A community-powered initiative where real challenges meet different minds — and something actually gets built.",

    ecoLabel: "The ecosystem",
    ecoTitle: "Think different. Build together.",

    howLabel: "How it works",
    howTitle: "Submit → Match → Build → Give Back.",

    formatLabel: "Collaboration formats",
    formatTitle: "Three ways to work together.",
    formatSub: "Each Brain chooses what they take on and how much time they give. Nothing is unlimited. Everything is agreed up front.",

    catLabel: "What can we build",
    catTitle: "Not just developers.",
    catSub: "The real advantage of ADHD for CEOs is the diversity of thinking. We’re not a dev shop.",

    challengerLabel: "For companies & founders",
    challengerTitle: "I NEED\nA BRAIN.",
    challengerSub: "Have a real problem? Submit your challenge and we’ll find someone who can help — or at least think about it differently.",
    noFee: "No agency fees",
    noGuarantee: "No guaranteed outcome (we’re honest about that)",
    noReplace: "No replacing paid work without proper agreements",
    ifHelps: "If it helps, give back however you can.",

    fieldCompany: "Company / Organization",
    fieldCompanyPh: "Your company name",
    fieldEmail: "Your email",
    fieldEmailPh: "you@company.com",
    fieldChallenge: "What problem are you trying to solve?",
    fieldChallengePh: "Describe the challenge. The messier the better — we’re good with messy.",
    fieldExpertise: "What type of expertise do you need?",
    fieldExpertisePh: "Select a category",
    fieldOutcome: "Expected outcome (optional)",
    fieldOutcomePh: "What would a good result look like?",
    submitChallenger: "SUBMIT MY CHALLENGE",
    challengerNote: "We review every submission and reply within 5 business days.",

    brainLabel: "For the community",
    brainTitle: "I AM\nA BRAIN.",
    brainSub: "You have skills, ideas, or an unconventional way of thinking. Prove what your brain can build.",
    noDiag: "No ADHD diagnosis required",
    youChoose: "You choose what you take on",
    realProblems: "Real problems, real portfolio, real connections",
    createOpp: "We create opportunities, not free labor.",

    fieldName: "Your name",
    fieldNamePh: "Name",
    fieldCountry: "Country",
    fieldCountryPh: "Where are you?",
    fieldSkills: "What are your skills?",
    fieldSkillsPh: "What do you do well? What do you enjoy? Don’t be modest.",
    fieldPortfolio: "Portfolio / LinkedIn / GitHub (optional)",
    fieldPortfolioPh: "A link to your work",
    fieldAvail: "How much time can you give per month?",
    fieldAvailPh: "Select availability",
    fieldMotiv: "What do you hope to get out of this?",
    fieldMotivPh: "Experience, connections, portfolio, something to build...",
    submitBrain: "JOIN AS A BRAIN",
    brainNote: "No diagnosis required. Open to everyone who thinks differently.",

    commitLabel: "Our commitments",
    commitTitle: "We create opportunities,\nnot free labor.",
    commitSub: "These are the rules we don’t negotiate. They protect everyone.",
    commitRules: [
      "No one is obligated to accept a challenge.",
      "Collaboration scope and hours are agreed before anything starts.",
      "Participants are never used to replace paid roles.",
      "Intellectual property is agreed in writing before work begins.",
      "Contributors always get credit for their work.",
      "Donations don’t buy priority or guarantee a solution.",
      "Commercial projects requiring substantial professional work require proper compensation.",
    ],

    bigLabel: "The bigger picture",
    bigTitle: "Part of the ADHD for CEOs ecosystem.",
    bigCards: [
      { title: "ADHD for CEOs Hackathon", desc: "48 hours to turn an idea into something real. The original experiment.", cta: "Learn more", link: "/" },
      { title: "Rent My Brain", desc: "Connect talent with real challenges during the whole year. That’s what you’re looking at.", cta: null, link: null, active: true },
      { title: "ADHD for CEOs Community", desc: "Build relationships, share experiences, and generate real opportunities.", cta: "Join the community", link: "/#connect" },
    ],

    closingTitle: "Got a problem?\nWe might have\nthe mind for it.",
    closingSub: "Borrow a perspective. Unlock a solution.",
    footerTag: "Rent My Brain — A community-powered initiative.",
    footerRights: "All rights reserved.",
  },

  es: {
    present: "ADHD for CEOs presenta",
    heroSub: "Tu próxima gran idea puede necesitar un cerebro diferente.",
    ctaNeedBrain: "NECESITO UN CEREBRO",
    ctaAmBrain: "SOY UN CEREBRO",
    heroBadge: "Gratis para participar. Impulsado por la comunidad. Hecho para el impacto.",

    ideaLabel: "La idea",
    ideaTitle: "Las empresas no siempre necesitan otra agencia.",
    idea1: "A veces necesitan una perspectiva diferente. Y a veces, alguien solo necesita un problema real para demostrar lo que su cerebro puede construir.",
    idea2: "Rent My Brain conecta empresas, founders y organizaciones con personas talentosas de la comunidad ADHD for CEOs — personas con pensamiento poco convencional, habilidades genuinas y el tipo de energía que hace que los problemas aburridos se vuelvan interesantes.",
    idea3: "No es un marketplace freelance. No es una agencia de externalización gratuita.",
    idea4: "Una iniciativa comunitaria donde los retos reales se encuentran con mentes diferentes — y se construye algo de verdad.",

    ecoLabel: "El ecosistema",
    ecoTitle: "Piensa diferente. Construye juntos.",

    howLabel: "Cómo funciona",
    howTitle: "Envía → Conecta → Construye → Devuelve.",

    formatLabel: "Formatos de colaboración",
    formatTitle: "Tres formas de trabajar juntos.",
    formatSub: "Cada Brain elige lo que acepta y cuánto tiempo da. Nada es ilimitado. Todo se acuerda de antemano.",

    catLabel: "Qué podemos construir",
    catTitle: "No solo desarrolladores.",
    catSub: "La verdadera ventaja de ADHD for CEOs es la diversidad de pensamiento. No somos una agencia de desarrollo.",

    challengerLabel: "Para empresas y founders",
    challengerTitle: "NECESITO\nUN CEREBRO.",
    challengerSub: "¿Tienes un problema real? Envía tu reto y encontraremos a alguien que pueda ayudar — o al menos pensarlo diferente.",
    noFee: "Sin honorarios de agencia",
    noGuarantee: "Sin resultado garantizado (somos honestos con eso)",
    noReplace: "Sin reemplazar trabajo pagado sin acuerdos previos",
    ifHelps: "Si ayuda, devuelve como puedas.",

    fieldCompany: "Empresa / Organización",
    fieldCompanyPh: "Nombre de tu empresa",
    fieldEmail: "Tu email",
    fieldEmailPh: "tu@empresa.com",
    fieldChallenge: "¿Qué problema intentas resolver?",
    fieldChallengePh: "Describe el reto. Cuanto más desordenado mejor — somos buenos con el caos.",
    fieldExpertise: "¿Qué tipo de expertise necesitas?",
    fieldExpertisePh: "Selecciona una categoría",
    fieldOutcome: "Resultado esperado (opcional)",
    fieldOutcomePh: "¿Cómo sería un buen resultado?",
    submitChallenger: "ENVIAR MI RETO",
    challengerNote: "Revisamos cada envío y respondemos en 5 días hábiles.",

    brainLabel: "Para la comunidad",
    brainTitle: "SOY\nUN CEREBRO.",
    brainSub: "Tienes habilidades, ideas o una forma poco convencional de pensar. Demuestra lo que tu cerebro puede construir.",
    noDiag: "No se requiere diagnóstico de TDAH",
    youChoose: "Tú eliges lo que aceptas",
    realProblems: "Problemas reales, portfolio real, conexiones reales",
    createOpp: "Creamos oportunidades, no trabajo gratuito.",

    fieldName: "Tu nombre",
    fieldNamePh: "Nombre",
    fieldCountry: "País",
    fieldCountryPh: "¿Dónde estás?",
    fieldSkills: "¿Cuáles son tus habilidades?",
    fieldSkillsPh: "¿En qué eres bueno? ¿Qué disfrutas? No seas modesto.",
    fieldPortfolio: "Portfolio / LinkedIn / GitHub (opcional)",
    fieldPortfolioPh: "Un enlace a tu trabajo",
    fieldAvail: "¿Cuánto tiempo puedes dar al mes?",
    fieldAvailPh: "Selecciona disponibilidad",
    fieldMotiv: "¿Qué esperas obtener de esto?",
    fieldMotivPh: "Experiencia, conexiones, portfolio, algo que construir...",
    submitBrain: "UNIRME COMO BRAIN",
    brainNote: "Sin diagnóstico requerido. Abierto a todos los que piensan diferente.",

    commitLabel: "Nuestros compromisos",
    commitTitle: "Creamos oportunidades,\nno trabajo gratuito.",
    commitSub: "Estas son las reglas que no negociamos. Protegen a todos.",
    commitRules: [
      "Nadie está obligado a aceptar un reto.",
      "El alcance y las horas de colaboración se acuerdan antes de empezar.",
      "Los participantes nunca se usan para reemplazar roles pagados.",
      "La propiedad intelectual se acuerda por escrito antes de comenzar.",
      "Los colaboradores siempre reciben crédito por su trabajo.",
      "Las donaciones no compran prioridad ni garantizan solución.",
      "Los proyectos comerciales que requieren trabajo profesional sustancial requieren compensación adecuada.",
    ],

    bigLabel: "El panorama más amplio",
    bigTitle: "Parte del ecosistema ADHD for CEOs.",
    bigCards: [
      { title: "Hackathon ADHD for CEOs", desc: "48 horas para convertir una idea en algo real. El experimento original.", cta: "Saber más", link: "/" },
      { title: "Rent My Brain", desc: "Conecta talento con retos reales durante todo el año. Esto es lo que estás viendo.", cta: null, link: null, active: true },
      { title: "Comunidad ADHD for CEOs", desc: "Construye relaciones, comparte experiencias y genera oportunidades reales.", cta: "Unirse a la comunidad", link: "/#connect" },
    ],

    closingTitle: "¿Tienes un problema?\nQuizás tenemos\nla mente para eso.",
    closingSub: "Toma prestada una perspectiva. Desbloquea una solución.",
    footerTag: "Rent My Brain — Una iniciativa comunitaria.",
    footerRights: "Todos los derechos reservados.",
  },

  fr: {
    present: "ADHD for CEOs présente",
    heroSub: "Votre prochaine grande idée a peut-être besoin d’un cerveau différent.",
    ctaNeedBrain: "J’AI BESOIN D’UN CERVEAU",
    ctaAmBrain: "JE SUIS UN CERVEAU",
    heroBadge: "Gratuit pour participer. Propulsé par la communauté. Fait pour l’impact.",

    ideaLabel: "L’idée",
    ideaTitle: "Les entreprises n’ont pas toujours besoin d’une autre agence.",
    idea1: "Parfois, elles ont besoin d’une perspective différente. Et parfois, quelqu’un a simplement besoin d’un vrai problème pour prouver ce que son cerveau peut construire.",
    idea2: "Rent My Brain connecte les entreprises, les fondateurs et les organisations avec des personnes talentueuses de la communauté ADHD for CEOs — des personnes à la pensée non conventionnelle, avec de vraies compétences et ce type d’énergie qui rend les problèmes ennuyeux intéressants.",
    idea3: "Pas une marketplace freelance. Pas une agence de sous-traitance gratuite.",
    idea4: "Une initiative communautaire où de vrais défis rencontrent des esprits différents — et quelque chose se construit vraiment.",

    ecoLabel: "L’écosystème",
    ecoTitle: "Pensez différemment. Construisez ensemble.",

    howLabel: "Comment ça marche",
    howTitle: "Soumettre → Matcher → Construire → Rendre.",

    formatLabel: "Formats de collaboration",
    formatTitle: "Trois façons de travailler ensemble.",
    formatSub: "Chaque Cerveau choisit ce qu’il accepte et le temps qu’il donne. Rien n’est illimité. Tout est convenu à l’avance.",

    catLabel: "Ce que nous construisons",
    catTitle: "Pas seulement des développeurs.",
    catSub: "Le vrai avantage d’ADHD for CEOs est la diversité de la pensée. Nous ne sommes pas une agence de dev.",

    challengerLabel: "Pour les entreprises et fondateurs",
    challengerTitle: "J’AI BESOIN\nD’UN CERVEAU.",
    challengerSub: "Vous avez un vrai problème ? Soumettez votre défi et nous trouverons quelqu’un pour aider — ou au moins y penser différemment.",
    noFee: "Pas d’honoraires d’agence",
    noGuarantee: "Pas de résultat garanti (on est honnêtes là-dessus)",
    noReplace: "Pas de remplacement de travail rémunéré sans accords",
    ifHelps: "Si ça aide, redonnez comme vous pouvez.",

    fieldCompany: "Entreprise / Organisation",
    fieldCompanyPh: "Nom de votre entreprise",
    fieldEmail: "Votre email",
    fieldEmailPh: "vous@entreprise.com",
    fieldChallenge: "Quel problème essayez-vous de résoudre ?",
    fieldChallengePh: "Décrivez le défi. Plus c’est désordonné, mieux c’est — on est bons avec le désordre.",
    fieldExpertise: "Quel type d’expertise avez-vous besoin ?",
    fieldExpertisePh: "Sélectionnez une catégorie",
    fieldOutcome: "Résultat attendu (optionnel)",
    fieldOutcomePh: "À quoi ressemblerait un bon résultat ?",
    submitChallenger: "SOUMETTRE MON DÉFI",
    challengerNote: "Nous examinons chaque soumission et répondons sous 5 jours ouvrables.",

    brainLabel: "Pour la communauté",
    brainTitle: "JE SUIS\nUN CERVEAU.",
    brainSub: "Vous avez des compétences, des idées ou une façon non conventionnelle de penser. Prouvez ce que votre cerveau peut construire.",
    noDiag: "Pas de diagnostic TDAH requis",
    youChoose: "Vous choisissez ce que vous acceptez",
    realProblems: "Vrais problèmes, vrai portfolio, vraies connexions",
    createOpp: "Nous créons des opportunités, pas du travail gratuit.",

    fieldName: "Votre nom",
    fieldNamePh: "Nom",
    fieldCountry: "Pays",
    fieldCountryPh: "Où êtes-vous ?",
    fieldSkills: "Quelles sont vos compétences ?",
    fieldSkillsPh: "Dans quoi êtes-vous bon ? Qu’est-ce que vous aimez ? Ne soyez pas modeste.",
    fieldPortfolio: "Portfolio / LinkedIn / GitHub (optionnel)",
    fieldPortfolioPh: "Un lien vers votre travail",
    fieldAvail: "Combien de temps pouvez-vous donner par mois ?",
    fieldAvailPh: "Sélectionnez la disponibilité",
    fieldMotiv: "Qu’espérez-vous tirer de ceci ?",
    fieldMotivPh: "Expérience, connexions, portfolio, quelque chose à construire...",
    submitBrain: "REJOINDRE EN TANT QUE CERVEAU",
    brainNote: "Pas de diagnostic requis. Ouvert à tous ceux qui pensent différemment.",

    commitLabel: "Nos engagements",
    commitTitle: "Nous créons des opportunités,\npas du travail gratuit.",
    commitSub: "Ce sont les règles que nous ne négocions pas. Elles protègent tout le monde.",
    commitRules: [
      "Personne n’est obligé d’accepter un défi.",
      "La portée et les heures de collaboration sont convenues avant le début.",
      "Les participants ne sont jamais utilisés pour remplacer des rôles rémunérés.",
      "La propriété intellectuelle est convenue par écrit avant le début du travail.",
      "Les contributeurs reçoivent toujours du crédit pour leur travail.",
      "Les dons n’achètent pas la priorité ni ne garantissent une solution.",
      "Les projets commerciaux nécessitant un travail professionnel substantiel requièrent une compensation appropriée.",
    ],

    bigLabel: "La vue d’ensemble",
    bigTitle: "Partie de l’écosystème ADHD for CEOs.",
    bigCards: [
      { title: "Hackathon ADHD for CEOs", desc: "48 heures pour transformer une idée en quelque chose de réel. L’expérience originale.", cta: "En savoir plus", link: "/" },
      { title: "Rent My Brain", desc: "Connectez les talents avec de vrais défis tout au long de l’année. C’est ce que vous regardez.", cta: null, link: null, active: true },
      { title: "Communauté ADHD for CEOs", desc: "Construisez des relations, partagez des expériences et générez de vraies opportunités.", cta: "Rejoindre la communauté", link: "/#connect" },
    ],

    closingTitle: "Vous avez un problème ?\nNous avons peut-être\nl’esprit qu’il faut.",
    closingSub: "Empruntez une perspective. Débloquez une solution.",
    footerTag: "Rent My Brain — Une initiative communautaire.",
    footerRights: "Tous droits réservés.",
  },
};

export default function RentMyBrainContent() {
  const [lang, setLang] = useState<Lang>("en");

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

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-32 pb-20">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
          aria-hidden="true"
          style={{
            background: "radial-gradient(ellipse at center, rgba(43,191,191,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto w-full relative">
          <FadeIn>
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase">
                {c.present}
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
              {c.heroSub}
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#need-a-brain"
                className="inline-flex items-center justify-center bg-[#2bbfbf] hover:bg-[#25aaaa] text-black font-bold text-sm tracking-widest rounded-full px-10 py-5 transition-colors duration-200"
              >
                {c.ctaNeedBrain}
              </a>
              <a
                href="#am-a-brain"
                className="inline-flex items-center justify-center bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-white font-semibold text-sm tracking-widest rounded-full px-10 py-5 transition-colors duration-200"
              >
                {c.ctaAmBrain}
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={260}>
            <p className="mt-8 text-white/25 text-sm tracking-wide">
              {c.heroBadge}
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
                {c.ideaLabel}
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight">
                {c.ideaTitle}
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="md:pt-16 space-y-5 text-white/50 text-lg leading-relaxed">
              <p>{c.idea1}</p>
              <p>{c.idea2}</p>
              <p className="text-white/70 font-medium">{c.idea3}</p>
              <p>{c.idea4}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="py-20 md:py-32 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-8">
              {c.ecoLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 max-w-xl">
              {c.ecoTitle}
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
            {[
              { label: "THE CHALLENGERS", desc: lang === "en" ? "Companies, founders, and nonprofits with real problems they can't solve alone." : lang === "es" ? "Empresas, founders y ONGs con problemas reales que no pueden resolver solos." : "Entreprises, fondateurs et associations avec de vrais problèmes qu’ils ne peuvent pas résoudre seuls." },
              { label: "THE BRAINS", desc: lang === "en" ? "Community members with skills, ideas, and an unconventional way of approaching things." : lang === "es" ? "Miembros de la comunidad con habilidades, ideas y una forma poco convencional de abordar las cosas." : "Les membres de la communauté avec des compétences, des idées et une approche non conventionnelle." },
              { label: "THE SUPPORTERS", desc: lang === "en" ? "Organizations and individuals contributing tools, mentorship, and opportunities." : lang === "es" ? "Organizaciones e individuos que contribuyen con herramientas, mentoría y oportunidades." : "Les organisations et individus contribuant avec des outils, du mentorat et des opportunités." },
              { label: "ADHD FOR CEOs", desc: lang === "en" ? "The platform connecting people, challenges, and outcomes." : lang === "es" ? "La plataforma que conecta personas, retos y resultados." : "La plateforme connectant les personnes, les défis et les résultats." },
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
              {c.howLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 max-w-xl">
              {c.howTitle}
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
              {c.formatLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 max-w-xl">
              {c.formatTitle}
            </h2>
            <p className="text-white/35 text-base mb-16 max-w-lg leading-relaxed">
              {c.formatSub}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {formats.map((f, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className={`border ${f.color} rounded-2xl p-8 md:p-10 hover:bg-white/[0.02] transition-colors duration-500`}>
                  <h3 className="text-white font-bold text-xl mb-2">{f.name}</h3>
                  <p className="text-[#2bbfbf] text-sm font-medium mb-5">{f.duration}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{f.output}</p>
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
              {c.catLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              {c.catTitle}
            </h2>
            <p className="text-white/35 text-lg mb-16 max-w-lg leading-relaxed">
              {c.catSub}
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
            {brainCategories.map((cat, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="bg-[#080808] p-8 md:p-10 hover:bg-white/[0.02] transition-colors duration-500 h-full">
                  <p className="text-white/15 text-4xl font-bold mb-4 tracking-tight">{cat.num}</p>
                  <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">{cat.title}</h3>
                  <ul className="space-y-2">
                    {cat.skills.map((skill, j) => (
                      <li key={j} className="flex items-start gap-2 text-white/35 text-sm">
                        <span className="text-[#2bbfbf]/40 mt-0.5 flex-shrink-0 text-xs" aria-hidden="true">→</span>
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

      {/* I NEED A BRAIN */}
      <section id="need-a-brain" className="py-24 md:py-40 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <FadeIn>
            <div>
              <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-8">
                {c.challengerLabel}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-6">
                {c.challengerTitle.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
              </h2>
              <p className="text-white/45 text-lg leading-relaxed mb-8">
                {c.challengerSub}
              </p>
              <div className="space-y-3 text-white/30 text-sm">
                <p>&rarr; &nbsp;{c.noFee}</p>
                <p>&rarr; &nbsp;{c.noGuarantee}</p>
                <p>&rarr; &nbsp;{c.noReplace}</p>
                <p className="text-white/50 mt-5">{c.ifHelps}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={140}>
            <form className="space-y-5" action="https://formspree.io/f/rentmybrain-challenger" method="POST">
              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">{c.fieldCompany}</label>
                <input type="text" name="company" placeholder={c.fieldCompanyPh} className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors" />
              </div>
              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">{c.fieldEmail}</label>
                <input type="email" name="email" placeholder={c.fieldEmailPh} className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors" />
              </div>
              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">{c.fieldChallenge}</label>
                <textarea name="challenge" rows={4} placeholder={c.fieldChallengePh} className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors resize-none" />
              </div>
              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">{c.fieldExpertise}</label>
                <select name="expertise" className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white/60 text-sm focus:outline-none focus:border-[#2bbfbf]/50 transition-colors appearance-none">
                  <option value="" disabled>{c.fieldExpertisePh}</option>
                  <option value="digital-tech">Digital &amp; Tech</option>
                  <option value="creative-marketing">Creative &amp; Marketing</option>
                  <option value="business-strategy">Business &amp; Strategy</option>
                  <option value="research-innovation">Research &amp; Innovation</option>
                  <option value="unsure">{lang === "en" ? "Not sure — help me figure it out" : lang === "es" ? "No estoy seguro — ayúdame a descubrirlo" : "Pas sûr — aidez-moi à le découvrir"}</option>
                </select>
              </div>
              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">{c.fieldOutcome}</label>
                <input type="text" name="outcome" placeholder={c.fieldOutcomePh} className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors" />
              </div>
              <button type="submit" className="w-full bg-[#2bbfbf] hover:bg-[#25aaaa] text-black font-bold text-sm tracking-widest rounded-full px-10 py-5 transition-colors duration-200 mt-2">
                {c.submitChallenger}
              </button>
              <p className="text-white/20 text-xs text-center pt-1">{c.challengerNote}</p>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* I AM A BRAIN */}
      <section id="am-a-brain" className="py-24 md:py-40 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <FadeIn>
            <div>
              <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-8">
                {c.brainLabel}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-6">
                {c.brainTitle.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
              </h2>
              <p className="text-white/45 text-lg leading-relaxed mb-8">
                {c.brainSub}
              </p>
              <div className="space-y-3 text-white/30 text-sm">
                <p>&rarr; &nbsp;{c.noDiag}</p>
                <p>&rarr; &nbsp;{c.youChoose}</p>
                <p>&rarr; &nbsp;{c.realProblems}</p>
                <p className="text-white/50 mt-5">{c.createOpp}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={140}>
            <form className="space-y-5" action="https://formspree.io/f/rentmybrain-brain" method="POST">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">{c.fieldName}</label>
                  <input type="text" name="name" placeholder={c.fieldNamePh} className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">{c.fieldCountry}</label>
                  <input type="text" name="country" placeholder={c.fieldCountryPh} className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">{c.fieldEmail}</label>
                <input type="email" name="email" placeholder={c.fieldEmailPh} className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors" />
              </div>
              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">{c.fieldSkills}</label>
                <textarea name="skills" rows={3} placeholder={c.fieldSkillsPh} className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors resize-none" />
              </div>
              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">{c.fieldPortfolio}</label>
                <input type="text" name="portfolio" placeholder={c.fieldPortfolioPh} className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors" />
              </div>
              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">{c.fieldAvail}</label>
                <select name="availability" className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white/60 text-sm focus:outline-none focus:border-[#2bbfbf]/50 transition-colors appearance-none">
                  <option value="" disabled>{c.fieldAvailPh}</option>
                  <option value="1-3h">1–3 {lang === "en" ? "hours" : lang === "es" ? "horas" : "heures"}</option>
                  <option value="3-8h">3–8 {lang === "en" ? "hours" : lang === "es" ? "horas" : "heures"}</option>
                  <option value="8-20h">8–20 {lang === "en" ? "hours" : lang === "es" ? "horas" : "heures"}</option>
                  <option value="flexible">{lang === "en" ? "Flexible — depends on the project" : lang === "es" ? "Flexible — depende del proyecto" : "Flexible — selon le projet"}</option>
                </select>
              </div>
              <div>
                <label className="block text-white/40 text-xs tracking-widest uppercase mb-2">{c.fieldMotiv}</label>
                <input type="text" name="motivation" placeholder={c.fieldMotivPh} className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors" />
              </div>
              <button type="submit" className="w-full bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 text-white font-bold text-sm tracking-widest rounded-full px-10 py-5 transition-colors duration-200 mt-2">
                {c.submitBrain}
              </button>
              <p className="text-white/20 text-xs text-center pt-1">{c.brainNote}</p>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* RULES */}
      <section className="py-20 md:py-28 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div>
              <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-6">
                {c.commitLabel}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                {c.commitTitle.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
              </h2>
              <p className="text-white/40 text-base leading-relaxed">{c.commitSub}</p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <ul className="space-y-4">
              {c.commitRules.map((rule, i) => (
                <li key={i} className="flex items-start gap-4 py-4 border-b border-white/[0.05] last:border-0">
                  <span className="text-[#2bbfbf]/50 text-xs mt-1 flex-shrink-0" aria-hidden="true">→</span>
                  <span className="text-white/45 text-sm leading-relaxed">{rule}</span>
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
              {c.bigLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 max-w-xl">
              {c.bigTitle}
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
            {c.bigCards.map((item, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className={`bg-[#080808] p-8 md:p-10 h-full ${"active" in item && item.active ? "ring-1 ring-[#2bbfbf]/20" : "hover:bg-white/[0.02]"} transition-colors duration-500`}>
                  <p className="text-white/15 text-4xl font-bold mb-5 tracking-tight">0{i + 1}</p>
                  <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">{item.title}</h3>
                  <p className="text-white/35 text-sm leading-relaxed mb-6">{item.desc}</p>
                  {item.link && (
                    <a href={item.link} className="text-[#2bbfbf] text-xs font-semibold tracking-widest uppercase hover:text-white transition-colors">
                      {item.cta} →
                    </a>
                  )}
                  {"active" in item && item.active && (
                    <span className="text-[#2bbfbf]/60 text-xs font-semibold tracking-widest uppercase">
                      {lang === "en" ? "You’re here ↑" : lang === "es" ? "Estás aquí ↑" : "Vous êtes ici ↑"}
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
            {c.closingTitle.split("\n").map((line, i, arr) => (
              <span key={i}>
                {i === 1 ? <span className="text-[#2bbfbf]">{line}</span> : line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </p>
          <p className="text-white/35 text-xl font-light mb-12">{c.closingSub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#need-a-brain" className="inline-flex items-center justify-center bg-[#2bbfbf] hover:bg-[#25aaaa] text-black font-bold text-sm tracking-widest rounded-full px-10 py-5 transition-colors duration-200">
              {c.ctaNeedBrain}
            </a>
            <a href="#am-a-brain" className="inline-flex items-center justify-center bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-white font-semibold text-sm tracking-widest rounded-full px-10 py-5 transition-colors duration-200">
              {c.ctaAmBrain}
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
            <svg width="28" height="19" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="opacity-50">
              <path d="M0 21L8 1L16 21M3.5 14H12.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M31 7C29 4 26.5 2.5 23.5 2.5C18.5 2.5 15 6.5 15 11C15 15.5 18.5 19.5 23.5 19.5C26.5 19.5 29 18 31 15" stroke="#2bbfbf" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            <span className="text-white/30 text-sm">ADHD for CEOs</span>
          </div>
          <div className="text-white/20 text-xs leading-relaxed">
            <p>{c.footerTag}</p>
            <p className="mt-0.5">© {new Date().getFullYear()} ADHD for CEOs. {c.footerRights}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
