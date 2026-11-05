"use client";

import { useState, useEffect, FormEvent } from "react";
import Nav from "../components/Nav";
import FadeIn from "../components/FadeIn";
import { type Lang } from "../components/LanguageToggle";

// ─── Brain visual component ───────────────────────────────────────────────────
function BrainSVG() {
  return (
    <div className="relative w-full h-full">
      {/* Outer pulse rings */}
      <div className="absolute inset-0 rounded-full border border-[#2bbfbf]/10 animate-ping" style={{ animationDuration: "3s" }} />
      <div className="absolute inset-4 rounded-full border border-[#2bbfbf]/8 animate-ping" style={{ animationDuration: "3.6s", animationDelay: "0.5s" }} />
      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
        <defs>
          <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2bbfbf" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#2bbfbf" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="glowSoft">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <circle cx="200" cy="200" r="180" fill="url(#brainGlow)" />
        <path d="M200 95 C175 90 155 95 140 108 C120 125 110 148 108 168 C105 188 108 205 112 218 C118 238 128 252 135 262 C145 275 152 282 155 290 C158 298 158 308 160 316 C162 322 165 326 170 328 C175 330 182 329 188 327 C194 325 198 320 200 316"
          stroke="#2bbfbf" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round" fill="none" filter="url(#glowSoft)" />
        <path d="M200 95 C225 90 245 95 260 108 C280 125 290 148 292 168 C295 188 292 205 288 218 C282 238 272 252 265 262 C255 275 248 282 245 290 C242 298 242 308 240 316 C238 322 235 326 230 328 C225 330 218 329 212 327 C206 325 202 320 200 316"
          stroke="#2bbfbf" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round" fill="none" filter="url(#glowSoft)" />
        <path d="M200 95 C198 120 198 160 200 200 C202 240 202 280 200 316"
          stroke="#2bbfbf" strokeWidth="0.8" strokeOpacity="0.2" strokeLinecap="round" strokeDasharray="4 6" fill="none" />
        {[
          ["145 145","175 165"],["175 165","200 155"],["200 155","228 160"],
          ["228 160","255 148"],["145 145","160 190"],["175 165","185 210"],
          ["200 155","200 210"],["228 160","218 205"],["255 148","248 190"],
          ["160 190","185 210"],["185 210","200 210"],["200 210","218 205"],
          ["218 205","248 190"],["160 190","155 235"],["185 210","178 250"],
          ["200 210","200 255"],["218 205","222 248"],["248 190","245 232"],
          ["155 235","178 250"],["178 250","200 255"],["200 255","222 248"],
          ["222 248","245 232"],["145 145","130 175"],["255 148","270 178"],
          ["130 175","155 235"],["270 178","245 232"],
        ].map(([a,b],i) => (
          <line key={i} x1={a.split(" ")[0]} y1={a.split(" ")[1]} x2={b.split(" ")[0]} y2={b.split(" ")[1]}
            stroke="#2bbfbf" strokeWidth="0.7" strokeOpacity="0.18" />
        ))}
        {[[145,145],[130,175],[155,235],[255,148],[270,178],[245,232],[160,190],[248,190]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="2.5" fill="#2bbfbf" fillOpacity="0.15" />
        ))}
        {[{x:175,y:165,d:"0s"},{x:200,y:155,d:"0.4s"},{x:228,y:160,d:"0.8s"},
          {x:185,y:210,d:"1.1s"},{x:200,y:210,d:"0.6s"},{x:218,y:205,d:"1.4s"},
          {x:178,y:250,d:"1.8s"},{x:200,y:255,d:"0.3s"},{x:222,y:248,d:"1.0s"},
        ].map((n,i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="5" fill="#2bbfbf" fillOpacity="0.08" filter="url(#glow)">
              <animate attributeName="r" values="4;7;4" dur="2.5s" begin={n.d} repeatCount="indefinite" />
              <animate attributeName="fill-opacity" values="0.08;0.2;0.08" dur="2.5s" begin={n.d} repeatCount="indefinite" />
            </circle>
            <circle cx={n.x} cy={n.y} r="2" fill="#2bbfbf" fillOpacity="0.7" filter="url(#glow)">
              <animate attributeName="fill-opacity" values="0.5;1;0.5" dur="2.5s" begin={n.d} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
        <circle r="3" fill="#2bbfbf" fillOpacity="0.9" filter="url(#glow)">
          <animateMotion dur="4s" repeatCount="indefinite" path="M175,165 L200,155 L228,160 L218,205 L200,210 L185,210 L178,250 L200,255 L222,248 L245,232 L248,190 L228,160" />
          <animate attributeName="fill-opacity" values="0;0.9;0.9;0" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle r="3" fill="#2bbfbf" fillOpacity="0.9" filter="url(#glow)">
          <animateMotion dur="4s" begin="2s" repeatCount="indefinite" path="M145,145 L160,190 L155,235 L178,250 L200,255 L200,210 L200,155 L175,165 L145,145" />
          <animate attributeName="fill-opacity" values="0;0.9;0.9;0" dur="4s" begin="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="200" r="4" fill="#2bbfbf" fillOpacity="0.3" filter="url(#glow)">
          <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite" />
          <animate attributeName="fill-opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
      {/* Floating label chips — only on desktop where there's room */}
      <div className="hidden md:block absolute top-[18%] left-[-8%] text-[9px] font-bold tracking-[0.2em] text-[#2bbfbf]/60 uppercase border border-[#2bbfbf]/15 rounded-full px-3 py-1 bg-[#080808]/80 backdrop-blur-sm">STRATEGY</div>
      <div className="hidden md:block absolute top-[35%] right-[-10%] text-[9px] font-bold tracking-[0.2em] text-[#2bbfbf]/60 uppercase border border-[#2bbfbf]/15 rounded-full px-3 py-1 bg-[#080808]/80 backdrop-blur-sm">DESIGN</div>
      <div className="hidden md:block absolute bottom-[28%] left-[-12%] text-[9px] font-bold tracking-[0.2em] text-[#2bbfbf]/60 uppercase border border-[#2bbfbf]/15 rounded-full px-3 py-1 bg-[#080808]/80 backdrop-blur-sm">BUILD</div>
      <div className="hidden md:block absolute bottom-[15%] right-[-8%] text-[9px] font-bold tracking-[0.2em] text-[#2bbfbf]/60 uppercase border border-[#2bbfbf]/15 rounded-full px-3 py-1 bg-[#080808]/80 backdrop-blur-sm">RESEARCH</div>
    </div>
  );
}

// ─── Translations ─────────────────────────────────────────────────────────────

const t = {
  en: {
    present: "ADHD for CEOs presents",
    heroTitle: "Rent My Brain",
    heroSub: "Real problems. Different minds. Something gets built.",
    ctaNeedBrain: "I NEED A BRAIN",
    ctaAmBrain: "I AM A BRAIN",
    heroBadge: "Free to participate · Community-powered · Built for impact",

    ideaLabel: "The idea",
    ideaTitle: "Sometimes you need a different perspective.",
    ideaBody: "Rent My Brain connects companies and founders with talented people from the ADHD for CEOs community — not a freelance marketplace, not free outsourcing. A community initiative where real challenges meet different minds.",

    howLabel: "How it works",
    steps: [
      { n: "01", title: "Submit your challenge", desc: "Tell us the problem. No jargon needed." },
      { n: "02", title: "Meet the brains", desc: "We find community members with the right angle on it." },
      { n: "03", title: "Match & connect", desc: "Quick intro, clear scope, agreed expectations." },
      { n: "04", title: "Build something", desc: "A sprint, an audit, a prototype. Something real." },
      { n: "05", title: "Give back", desc: "If it helped, support the community however you can." },
      { n: "06", title: "Share the impact", desc: "We document what unconventional thinking can build." },
    ],

    formatLabel: "Ways to work together",
    formats: [
      { name: "Brainstorm", duration: "30–60 min", output: "Fresh ideas and honest takes." },
      { name: "Brain Sprint", duration: "2–5 hours", output: "An audit, strategy, or first prototype." },
      { name: "Brain Project", duration: "1–2 weeks", output: "Defined scope, agreed terms, real output." },
    ],

    catLabel: "What we build",
    categories: [
      { num: "01", title: "Digital & Tech", skills: ["Web development", "No-code / AI", "UX/UI design", "Data analysis"] },
      { num: "02", title: "Creative", skills: ["Branding", "Social strategy", "Content", "Creative direction"] },
      { num: "03", title: "Business", skills: ["Strategy", "Market research", "Pitch feedback", "Financial modelling"] },
      { num: "04", title: "Research", skills: ["Problem solving", "Sustainability", "Education", "Social innovation"] },
    ],

    challengerLabel: "For companies & founders",
    challengerTitle: "I NEED\nA BRAIN.",
    challengerSub: "Have a real problem? Submit it. We’ll find someone who can help — or at least think about it differently.",
    noFee: "No agency fees",
    noGuarantee: "No guaranteed outcome (we’re honest about that)",
    noReplace: "No replacing paid work without proper agreements",

    fieldCompany: "Company / Organization",
    fieldCompanyPh: "Your company name",
    fieldEmail: "Your email",
    fieldEmailPh: "you@company.com",
    fieldChallenge: "What problem are you solving?",
    fieldChallengePh: "Describe the challenge. The messier the better.",
    fieldExpertise: "What type of expertise do you need?",
    fieldExpertisePh: "Select a category",
    fieldOutcome: "Expected outcome (optional)",
    fieldOutcomePh: "What would a good result look like?",
    submitChallenger: "SUBMIT MY CHALLENGE",
    challengerNote: "We review every submission and reply within 5 business days.",
    successChallenger: "Challenge received. We’ll be in touch within 5 business days.",

    brainLabel: "For the community",
    brainTitle: "I AM\nA BRAIN.",
    brainSub: "You have skills and an unconventional way of thinking. Prove what your brain can build.",
    noDiag: "No ADHD diagnosis required",
    youChoose: "You choose what you take on",
    realProblems: "Real problems, real portfolio, real connections",

    fieldName: "Your name",
    fieldNamePh: "Name",
    fieldCountry: "Country",
    fieldCountryPh: "Where are you?",
    fieldSkills: "What are your skills?",
    fieldSkillsPh: "What do you do well? Don’t be modest.",
    fieldPortfolio: "Portfolio / LinkedIn / GitHub (optional)",
    fieldPortfolioPh: "A link to your work",
    fieldAvail: "How much time per month?",
    fieldAvailPh: "Select availability",
    fieldMotiv: "What do you hope to get out of this?",
    fieldMotivPh: "Experience, connections, portfolio…",
    submitBrain: "JOIN AS A BRAIN",
    brainNote: "No diagnosis required. Open to everyone who thinks differently.",
    successBrain: "Application received. Welcome to the community.",

    commitLabel: "Our commitments",
    commitRules: [
      "No one is obligated to accept a challenge.",
      "Scope and hours are agreed before anything starts.",
      "Participants never replace paid roles.",
      "IP is agreed in writing before work begins.",
      "Contributors always get credit.",
      "Commercial projects requiring substantial work require proper compensation.",
    ],

    sponsorsLabel: "Sponsors & partners",
    sponsorsThanks: "Thank you for making this possible.",

    bigLabel: "The ecosystem",
    bigCards: [
      { title: "ADHD for CEOs Hackathon", desc: "48 hours to turn an idea into something real.", cta: "Learn more", link: "/" },
      { title: "Rent My Brain", desc: "Connect talent with real challenges all year round.", cta: null, link: null, active: true },
      { title: "Community", desc: "Build relationships, share experiences, generate real opportunities.", cta: "Join", link: "/#connect" },
    ],

    closingTitle: "Got a problem?\nWe might have\nthe mind for it.",
    closingSub: "Borrow a perspective. Unlock a solution.",
    footerTag: "Rent My Brain — A community-powered initiative.",
    footerRights: "All rights reserved.",
  },

  es: {
    present: "ADHD for CEOs presenta",
    heroTitle: "Rent My Brain",
    heroSub: "Problemas reales. Mentes diferentes. Se construye algo.",
    ctaNeedBrain: "NECESITO UN CEREBRO",
    ctaAmBrain: "SOY UN CEREBRO",
    heroBadge: "Gratis para participar · Impulsado por la comunidad · Hecho para el impacto",

    ideaLabel: "La idea",
    ideaTitle: "A veces necesitas una perspectiva diferente.",
    ideaBody: "Rent My Brain conecta empresas y founders con personas talentosas de la comunidad ADHD for CEOs — no es un marketplace freelance. Una iniciativa donde los retos reales se encuentran con mentes diferentes.",

    howLabel: "Cómo funciona",
    steps: [
      { n: "01", title: "Envía tu reto", desc: "Cuéntanos el problema. Sin tecnicismos." },
      { n: "02", title: "Conoce los cerebros", desc: "Encontramos miembros con el enfoque adecuado." },
      { n: "03", title: "Conecta", desc: "Intro rápida, alcance claro, expectativas acordadas." },
      { n: "04", title: "Construye algo", desc: "Un sprint, una auditoría, un prototipo. Algo real." },
      { n: "05", title: "Devuelve", desc: "Si ayudó, apoya la comunidad como puedas." },
      { n: "06", title: "Comparte el impacto", desc: "Documentamos lo que el pensamiento diferente puede construir." },
    ],

    formatLabel: "Formas de colaborar",
    formats: [
      { name: "Brainstorm", duration: "30–60 min", output: "Ideas frescas y recomendaciones honestas." },
      { name: "Brain Sprint", duration: "2–5 horas", output: "Una auditoría, estrategia o primer prototipo." },
      { name: "Brain Project", duration: "1–2 semanas", output: "Alcance definido, términos acordados, resultado real." },
    ],

    catLabel: "Qué construimos",
    categories: [
      { num: "01", title: "Digital & Tech", skills: ["Desarrollo web", "No-code / IA", "Diseño UX/UI", "Análisis de datos"] },
      { num: "02", title: "Creatividad", skills: ["Branding", "Estrategia social", "Contenido", "Dirección creativa"] },
      { num: "03", title: "Negocio", skills: ["Estrategia", "Investigación de mercado", "Feedback de pitch", "Modelado financiero"] },
      { num: "04", title: "Investigación", skills: ["Resolución de problemas", "Sostenibilidad", "Educación", "Innovación social"] },
    ],

    challengerLabel: "Para empresas y founders",
    challengerTitle: "NECESITO\nUN CEREBRO.",
    challengerSub: "¿Tienes un problema real? Envíalo. Encontraremos a alguien que pueda ayudar.",
    noFee: "Sin honorarios de agencia",
    noGuarantee: "Sin resultado garantizado (somos honestos sobre eso)",
    noReplace: "Sin reemplazar trabajo remunerado sin acuerdos",

    fieldCompany: "Empresa / Organización",
    fieldCompanyPh: "Nombre de tu empresa",
    fieldEmail: "Tu email",
    fieldEmailPh: "tu@empresa.com",
    fieldChallenge: "¿Qué problema estás resolviendo?",
    fieldChallengePh: "Describe el reto. Cuanto más desordenado, mejor.",
    fieldExpertise: "¿Qué tipo de experiencia necesitas?",
    fieldExpertisePh: "Selecciona una categoría",
    fieldOutcome: "Resultado esperado (opcional)",
    fieldOutcomePh: "¿Cómo sería un buen resultado?",
    submitChallenger: "ENVIAR MI RETO",
    challengerNote: "Revisamos cada envío y respondemos en 5 días hábiles.",
    successChallenger: "Reto recibido. Te contactaremos en 5 días hábiles.",

    brainLabel: "Para la comunidad",
    brainTitle: "SOY\nUN CEREBRO.",
    brainSub: "Tienes habilidades y una forma poco convencional de pensar. Demuestra lo que tu cerebro puede construir.",
    noDiag: "No se requiere diagnóstico de TDAH",
    youChoose: "Tú eliges lo que aceptas",
    realProblems: "Problemas reales, portfolio real, conexiones reales",

    fieldName: "Tu nombre",
    fieldNamePh: "Nombre",
    fieldCountry: "País",
    fieldCountryPh: "¿Dónde estás?",
    fieldSkills: "¿Cuáles son tus habilidades?",
    fieldSkillsPh: "¿En qué eres bueno? No seas modesto.",
    fieldPortfolio: "Portfolio / LinkedIn / GitHub (opcional)",
    fieldPortfolioPh: "Un enlace a tu trabajo",
    fieldAvail: "¿Cuánto tiempo al mes?",
    fieldAvailPh: "Selecciona disponibilidad",
    fieldMotiv: "¿Qué esperas obtener?",
    fieldMotivPh: "Experiencia, conexiones, portfolio…",
    submitBrain: "UNIRME COMO CEREBRO",
    brainNote: "No se requiere diagnóstico. Abierto a todos los que piensan diferente.",
    successBrain: "Solicitud recibida. Bienvenido a la comunidad.",

    commitLabel: "Nuestros compromisos",
    commitRules: [
      "Nadie está obligado a aceptar un reto.",
      "El alcance y las horas se acuerdan antes de comenzar.",
      "Los participantes nunca reemplazan roles remunerados.",
      "La propiedad intelectual se acuerda por escrito antes de trabajar.",
      "Los colaboradores siempre reciben crédito.",
      "Los proyectos comerciales que requieren trabajo sustancial requieren compensación adecuada.",
    ],

    sponsorsLabel: "Sponsors y partners",
    sponsorsThanks: "Gracias por hacer esto posible.",

    bigLabel: "El ecosistema",
    bigCards: [
      { title: "ADHD for CEOs Hackathon", desc: "48 horas para convertir una idea en algo real.", cta: "Saber más", link: "/" },
      { title: "Rent My Brain", desc: "Conecta talento con retos reales durante todo el año.", cta: null, link: null, active: true },
      { title: "Comunidad", desc: "Construye relaciones, comparte experiencias, genera oportunidades.", cta: "Unirse", link: "/#connect" },
    ],

    closingTitle: "¿Tienes un problema?\nTal vez tenemos\nla mente para eso.",
    closingSub: "Préstame una perspectiva. Desbloquea una solución.",
    footerTag: "Rent My Brain — Una iniciativa comunitaria.",
    footerRights: "Todos los derechos reservados.",
  },

  fr: {
    present: "ADHD for CEOs présente",
    heroTitle: "Rent My Brain",
    heroSub: "Vrais problèmes. Esprits différents. Quelque chose se construit.",
    ctaNeedBrain: "J'AI BESOIN D'UN CERVEAU",
    ctaAmBrain: "JE SUIS UN CERVEAU",
    heroBadge: "Gratuit · Porté par la communauté · Fait pour l’impact",

    ideaLabel: "L’idée",
    ideaTitle: "Parfois vous avez besoin d’une perspective différente.",
    ideaBody: "Rent My Brain connecte des entreprises et des fondateurs avec des personnes talentueuses de la communauté ADHD for CEOs — pas un marché freelance. Une initiative où de vrais défis rencontrent des esprits différents.",

    howLabel: "Comment ça marche",
    steps: [
      { n: "01", title: "Soumettez votre défi", desc: "Dites-nous le problème. Pas de jargon nécessaire." },
      { n: "02", title: "Rencontrez les cerveaux", desc: "Nous trouvons des membres avec le bon angle." },
      { n: "03", title: "Connectez-vous", desc: "Intro rapide, périmètre clair, attentes convenues." },
      { n: "04", title: "Construisez quelque chose", desc: "Un sprint, un audit, un prototype. Quelque chose de réel." },
      { n: "05", title: "Redonnez", desc: "Si ça a aidé, soutenez la communauté comme vous pouvez." },
      { n: "06", title: "Partagez l’impact", desc: "Nous documentons ce que la pensée différente peut construire." },
    ],

    formatLabel: "Façons de collaborer",
    formats: [
      { name: "Brainstorm", duration: "30–60 min", output: "Idées fraîches et recommandations honnêtes." },
      { name: "Brain Sprint", duration: "2–5 heures", output: "Un audit, une stratégie ou un premier prototype." },
      { name: "Brain Project", duration: "1–2 semaines", output: "Périmètre défini, termes convenus, vrai résultat." },
    ],

    catLabel: "Ce que nous construisons",
    categories: [
      { num: "01", title: "Digital & Tech", skills: ["Développement web", "No-code / IA", "Design UX/UI", "Analyse de données"] },
      { num: "02", title: "Créatif", skills: ["Branding", "Stratégie sociale", "Contenu", "Direction créative"] },
      { num: "03", title: "Business", skills: ["Stratégie", "Recherche de marché", "Feedback pitch", "Modélisation financière"] },
      { num: "04", title: "Recherche", skills: ["Résolution de problèmes", "Durabilité", "Éducation", "Innovation sociale"] },
    ],

    challengerLabel: "Pour les entreprises & fondateurs",
    challengerTitle: "J'AI BESOIN\nD'UN CERVEAU.",
    challengerSub: "Vous avez un vrai problème ? Soumettez-le. Nous trouverons quelqu’un qui peut aider.",
    noFee: "Pas de frais d’agence",
    noGuarantee: "Pas de résultat garanti (on est honnêtes là-dessus)",
    noReplace: "Pas de remplacement de travail rémunéré sans accord",

    fieldCompany: "Entreprise / Organisation",
    fieldCompanyPh: "Votre entreprise",
    fieldEmail: "Votre email",
    fieldEmailPh: "vous@entreprise.com",
    fieldChallenge: "Quel problème résolvez-vous ?",
    fieldChallengePh: "Décrivez le défi. Plus c’est complexe, mieux c’est.",
    fieldExpertise: "Quel type d’expertise vous faut-il ?",
    fieldExpertisePh: "Sélectionnez une catégorie",
    fieldOutcome: "Résultat attendu (optionnel)",
    fieldOutcomePh: "À quoi ressemblerait un bon résultat ?",
    submitChallenger: "SOUMETTRE MON DÉFI",
    challengerNote: "Nous examinons chaque soumission et répondons sous 5 jours ouvrables.",
    successChallenger: "Défi reçu. Nous vous contacterons sous 5 jours ouvrables.",

    brainLabel: "Pour la communauté",
    brainTitle: "JE SUIS\nUN CERVEAU.",
    brainSub: "Vous avez des compétences et une façon non conventionnelle de penser. Prouvez ce que votre cerveau peut construire.",
    noDiag: "Pas de diagnostic TDAH requis",
    youChoose: "Vous choisissez ce que vous acceptez",
    realProblems: "Vrais problèmes, vrai portfolio, vraies connexions",

    fieldName: "Votre nom",
    fieldNamePh: "Nom",
    fieldCountry: "Pays",
    fieldCountryPh: "Où êtes-vous ?",
    fieldSkills: "Quelles sont vos compétences ?",
    fieldSkillsPh: "En quoi êtes-vous bon ? Ne soyez pas modeste.",
    fieldPortfolio: "Portfolio / LinkedIn / GitHub (optionnel)",
    fieldPortfolioPh: "Un lien vers votre travail",
    fieldAvail: "Combien de temps par mois ?",
    fieldAvailPh: "Sélectionnez la disponibilité",
    fieldMotiv: "Qu’espérez-vous en retirer ?",
    fieldMotivPh: "Expérience, connexions, portfolio…",
    submitBrain: "REJOINDRE EN TANT QUE CERVEAU",
    brainNote: "Pas de diagnostic requis. Ouvert à tous ceux qui pensent différemment.",
    successBrain: "Candidature reçue. Bienvenue dans la communauté.",

    commitLabel: "Nos engagements",
    commitRules: [
      "Personne n’est obligé d’accepter un défi.",
      "La portée et les heures sont convenues avant de commencer.",
      "Les participants ne remplacent jamais les rôles rémunérés.",
      "La propriété intellectuelle est convenue par écrit avant de travailler.",
      "Les contributeurs reçoivent toujours du crédit.",
      "Les projets commerciaux nécessitant un travail substantiel requièrent une compensation adéquate.",
    ],

    sponsorsLabel: "Sponsors & partenaires",
    sponsorsThanks: "Merci de rendre cela possible.",

    bigLabel: "L’écosystème",
    bigCards: [
      { title: "ADHD for CEOs Hackathon", desc: "48 heures pour transformer une idée en quelque chose de réel.", cta: "En savoir plus", link: "/" },
      { title: "Rent My Brain", desc: "Connecter talents et défis réels toute l’année.", cta: null, link: null, active: true },
      { title: "Communauté", desc: "Construisez des relations, partagez des expériences, créez des opportunités.", cta: "Rejoindre", link: "/#connect" },
    ],

    closingTitle: "Vous avez un problème ?\nNous avons peut-être\nl’esprit qu’il faut.",
    closingSub: "Empruntez une perspective. Débloquez une solution.",
    footerTag: "Rent My Brain — Une initiative communautaire.",
    footerRights: "Tous droits réservés.",
  },
};

const sponsors = [
  { name: "Raimar-Repara.es", logo: "/sponsors/raimar.jpg", url: "https://raimar-repara.es" },
  { name: "AgroCarbonX.es", logo: "/sponsors/agrocarbonx.jpg", url: "https://agrocarbonx.es" },
  { name: "AdherAI.es", logo: "/sponsors/adherai.jpg", url: "https://adherai.es" },
  { name: "Ostal.es", logo: "/sponsors/ostal.jpg", url: "https://ostal.es" },
];

// ─── Form hook ────────────────────────────────────────────────────────────────

type FormState = "idle" | "loading" | "success" | "error";

function useContactForm(formType: string) {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");
    const data: Record<string, string> = { formType };
    new FormData(e.currentTarget).forEach((v, k) => { data[k] = v.toString(); });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setState("success");
      } else {
        const j = await res.json().catch(() => ({}));
        setErrorMsg(j.error || "Something went wrong. Please try again.");
        setState("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setState("error");
    }
  }

  return { state, errorMsg, submit };
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function RentMyBrainContent() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("adhdceos-lang") as Lang | null;
      if (saved && ["en", "es", "fr"].includes(saved)) setLang(saved);
    } catch {}
  }, []);

  const c = t[lang];
  const challenger = useContactForm("challenger");
  const brain = useContactForm("brain");

  return (
    <main className="bg-[#080808] text-white overflow-x-hidden">
      <Nav lang={lang} onLangChange={setLang} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center px-6 md:px-10 pt-28 pb-16 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.025]" aria-hidden="true"
          style={{ backgroundImage: "linear-gradient(#2bbfbf 1px,transparent 1px),linear-gradient(90deg,#2bbfbf 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        {/* Glow behind brain */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#2bbfbf] opacity-[0.06] blur-[140px] pointer-events-none" aria-hidden="true" />

        {/* Brain visual — absolute on mobile (bg), grid column on desktop */}
        <FadeIn delay={180}>
          <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[340px] h-[340px] opacity-25 md:opacity-100 md:hidden pointer-events-none" aria-hidden="true">
            <BrainSVG />
          </div>
        </FadeIn>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left: text */}
          <div>
            <FadeIn>
              <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-8">{c.present}</p>
            </FadeIn>
            <FadeIn delay={60}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8">
                {c.heroTitle}
              </h1>
            </FadeIn>
            <FadeIn delay={140}>
              <p className="text-xl text-white/50 font-light max-w-md leading-relaxed mb-12">
                {c.heroSub}
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#need-a-brain" className="inline-flex items-center justify-center bg-[#2bbfbf] hover:bg-[#25aaaa] text-black font-bold text-sm tracking-widest rounded-full px-10 py-5 transition-colors duration-200">
                  {c.ctaNeedBrain}
                </a>
                <a href="#am-a-brain" className="inline-flex items-center justify-center bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-white font-semibold text-sm tracking-widest rounded-full px-10 py-5 transition-colors duration-200">
                  {c.ctaAmBrain}
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={280}>
              <p className="mt-10 text-white/20 text-xs tracking-widest">{c.heroBadge}</p>
            </FadeIn>
          </div>

          {/* Right: futuristic brain visual — desktop only grid column */}
          <FadeIn delay={180}>
            <div className="hidden md:flex items-center justify-end">
              <div className="relative w-[420px] h-[420px]">
                <BrainSVG />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── THE IDEA ────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-6">{c.ideaLabel}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight">
              {c.ideaTitle}
            </h2>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="text-white/45 text-xl leading-relaxed">{c.ideaBody}</p>
          </FadeIn>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-12">{c.howLabel}</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
            {c.steps.map((step, i) => (
              <FadeIn key={i} delay={i * 50}>
                <div className="bg-[#080808] p-8 md:p-10 hover:bg-white/[0.02] transition-colors duration-500 h-full">
                  <p className="text-5xl font-bold text-white/[0.06] mb-5 tracking-tight leading-none">{step.n}</p>
                  <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-3">{step.title}</h3>
                  <p className="text-white/35 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMATS ──────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-12">{c.formatLabel}</p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {c.formats.map((f, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className={`rounded-2xl p-8 md:p-10 border ${i === 0 ? "border-white/[0.08]" : i === 1 ? "border-[#2bbfbf]/30" : "border-[#2bbfbf]"} hover:bg-white/[0.02] transition-colors duration-500`}>
                  <p className="text-[#2bbfbf] text-xs font-bold tracking-[0.3em] uppercase mb-4">{f.duration}</p>
                  <h3 className="text-white font-bold text-2xl mb-3">{f.name}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{f.output}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-12">{c.catLabel}</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
            {c.categories.map((cat, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="bg-[#080808] p-8 md:p-10 hover:bg-white/[0.02] transition-colors duration-500 h-full">
                  <p className="text-white/[0.07] text-5xl font-bold mb-5 tracking-tight leading-none">{cat.num}</p>
                  <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">{cat.title}</h3>
                  <ul className="space-y-2.5">
                    {cat.skills.map((skill, j) => (
                      <li key={j} className="text-white/30 text-sm flex items-start gap-2">
                        <span className="text-[#2bbfbf]/30 flex-shrink-0 text-xs mt-0.5" aria-hidden="true">→</span>
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

      {/* ── I NEED A BRAIN ───────────────────────────────────────────────── */}
      <section id="need-a-brain" className="py-24 md:py-40 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <FadeIn>
            <div>
              <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-8">{c.challengerLabel}</p>
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-[1.0] tracking-tight mb-6">
                {c.challengerTitle.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
              </h2>
              <p className="text-white/40 text-lg leading-relaxed mb-8">{c.challengerSub}</p>
              <div className="space-y-3 text-white/25 text-sm">
                <p className="flex items-start gap-2"><span className="text-[#2bbfbf]/50 mt-0.5">→</span>{c.noFee}</p>
                <p className="flex items-start gap-2"><span className="text-[#2bbfbf]/50 mt-0.5">→</span>{c.noGuarantee}</p>
                <p className="flex items-start gap-2"><span className="text-[#2bbfbf]/50 mt-0.5">→</span>{c.noReplace}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={140}>
            {challenger.state === "success" ? (
              <div className="rounded-2xl border border-[#2bbfbf]/30 bg-[#2bbfbf]/[0.05] p-10 text-center">
                <p className="text-3xl mb-4">✓</p>
                <p className="text-white font-semibold text-lg">{c.successChallenger}</p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={challenger.submit}>
                <div>
                  <label className="block text-white/35 text-xs tracking-widest uppercase mb-2">{c.fieldCompany}</label>
                  <input type="text" name="company" placeholder={c.fieldCompanyPh} required className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-white/35 text-xs tracking-widest uppercase mb-2">{c.fieldEmail}</label>
                  <input type="email" name="email" placeholder={c.fieldEmailPh} required className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-white/35 text-xs tracking-widest uppercase mb-2">{c.fieldChallenge}</label>
                  <textarea name="challenge" rows={4} placeholder={c.fieldChallengePh} required className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors resize-none" />
                </div>
                <div>
                  <label className="block text-white/35 text-xs tracking-widest uppercase mb-2">{c.fieldExpertise}</label>
                  <select name="expertise" defaultValue="" className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white/60 text-sm focus:outline-none focus:border-[#2bbfbf]/50 transition-colors appearance-none">
                    <option value="" disabled>{c.fieldExpertisePh}</option>
                    <option value="digital-tech">Digital &amp; Tech</option>
                    <option value="creative-marketing">Creative &amp; Marketing</option>
                    <option value="business-strategy">Business &amp; Strategy</option>
                    <option value="research-innovation">Research &amp; Innovation</option>
                    <option value="unsure">{lang === "en" ? "Not sure — help me figure it out" : lang === "es" ? "No estoy seguro" : "Pas sûr"}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/35 text-xs tracking-widest uppercase mb-2">{c.fieldOutcome}</label>
                  <input type="text" name="outcome" placeholder={c.fieldOutcomePh} className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors" />
                </div>
                {challenger.state === "error" && (
                  <p className="text-red-400 text-xs text-center">{challenger.errorMsg}</p>
                )}
                <button type="submit" disabled={challenger.state === "loading"} className="w-full bg-[#2bbfbf] hover:bg-[#25aaaa] disabled:opacity-50 text-black font-bold text-sm tracking-widest rounded-full px-10 py-5 transition-colors duration-200 mt-2">
                  {challenger.state === "loading" ? "…" : c.submitChallenger}
                </button>
                <p className="text-white/20 text-xs text-center pt-1">{c.challengerNote}</p>
              </form>
            )}
          </FadeIn>
        </div>
      </section>

      {/* ── I AM A BRAIN ─────────────────────────────────────────────────── */}
      <section id="am-a-brain" className="py-24 md:py-40 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <FadeIn>
            <div>
              <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-8">{c.brainLabel}</p>
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-[1.0] tracking-tight mb-6">
                {c.brainTitle.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
              </h2>
              <p className="text-white/40 text-lg leading-relaxed mb-8">{c.brainSub}</p>
              <div className="space-y-3 text-white/25 text-sm">
                <p className="flex items-start gap-2"><span className="text-[#2bbfbf]/50 mt-0.5">→</span>{c.noDiag}</p>
                <p className="flex items-start gap-2"><span className="text-[#2bbfbf]/50 mt-0.5">→</span>{c.youChoose}</p>
                <p className="flex items-start gap-2"><span className="text-[#2bbfbf]/50 mt-0.5">→</span>{c.realProblems}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={140}>
            {brain.state === "success" ? (
              <div className="rounded-2xl border border-[#2bbfbf]/30 bg-[#2bbfbf]/[0.05] p-10 text-center">
                <p className="text-3xl mb-4">✓</p>
                <p className="text-white font-semibold text-lg">{c.successBrain}</p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={brain.submit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/35 text-xs tracking-widest uppercase mb-2">{c.fieldName}</label>
                    <input type="text" name="name" placeholder={c.fieldNamePh} required className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-white/35 text-xs tracking-widest uppercase mb-2">{c.fieldCountry}</label>
                    <input type="text" name="country" placeholder={c.fieldCountryPh} className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-white/35 text-xs tracking-widest uppercase mb-2">{c.fieldEmail}</label>
                  <input type="email" name="email" placeholder={c.fieldEmailPh} required className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-white/35 text-xs tracking-widest uppercase mb-2">{c.fieldSkills}</label>
                  <textarea name="skills" rows={3} placeholder={c.fieldSkillsPh} required className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors resize-none" />
                </div>
                <div>
                  <label className="block text-white/35 text-xs tracking-widest uppercase mb-2">{c.fieldPortfolio}</label>
                  <input type="text" name="portfolio" placeholder={c.fieldPortfolioPh} className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-white/35 text-xs tracking-widest uppercase mb-2">{c.fieldAvail}</label>
                  <select name="availability" defaultValue="" className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white/60 text-sm focus:outline-none focus:border-[#2bbfbf]/50 transition-colors appearance-none">
                    <option value="" disabled>{c.fieldAvailPh}</option>
                    <option value="1-3h">1–3 {lang === "en" ? "hours" : lang === "es" ? "horas" : "heures"}</option>
                    <option value="3-8h">3–8 {lang === "en" ? "hours" : lang === "es" ? "horas" : "heures"}</option>
                    <option value="8-20h">8–20 {lang === "en" ? "hours" : lang === "es" ? "horas" : "heures"}</option>
                    <option value="flexible">{lang === "en" ? "Flexible — depends on the project" : lang === "es" ? "Flexible — depende del proyecto" : "Flexible — selon le projet"}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/35 text-xs tracking-widest uppercase mb-2">{c.fieldMotiv}</label>
                  <input type="text" name="motivation" placeholder={c.fieldMotivPh} className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[#2bbfbf]/50 transition-colors" />
                </div>
                {brain.state === "error" && (
                  <p className="text-red-400 text-xs text-center">{brain.errorMsg}</p>
                )}
                <button type="submit" disabled={brain.state === "loading"} className="w-full bg-white/[0.07] hover:bg-white/[0.12] disabled:opacity-50 border border-white/15 text-white font-bold text-sm tracking-widest rounded-full px-10 py-5 transition-colors duration-200 mt-2">
                  {brain.state === "loading" ? "…" : c.submitBrain}
                </button>
                <p className="text-white/20 text-xs text-center pt-1">{c.brainNote}</p>
              </form>
            )}
          </FadeIn>
        </div>
      </section>

      {/* ── COMMITMENTS ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-6">{c.commitLabel}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {lang === "en" ? "We create opportunities,\nnot free labor." : lang === "es" ? "Creamos oportunidades,\nno trabajo gratuito." : "Nous créons des opportunités,\npas du travail gratuit."}
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <ul className="space-y-0">
              {c.commitRules.map((rule, i) => (
                <li key={i} className="flex items-start gap-4 py-4 border-b border-white/[0.05] last:border-0">
                  <span className="text-[#2bbfbf]/40 text-xs mt-1 flex-shrink-0" aria-hidden="true">→</span>
                  <span className="text-white/40 text-sm leading-relaxed">{rule}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ── SPONSORS ─────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
              <div className="flex-shrink-0">
                <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-2">{c.sponsorsLabel}</p>
                <p className="text-white/25 text-xs">{c.sponsorsThanks}</p>
              </div>
              <div className="flex flex-wrap items-center gap-6 md:gap-10">
                {sponsors.map((s) => (
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

      {/* ── ECOSYSTEM ────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-[10px] font-bold tracking-[0.35em] text-[#2bbfbf] uppercase mb-12">{c.bigLabel}</p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden">
            {c.bigCards.map((item, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className={`bg-[#080808] p-8 md:p-10 h-full transition-colors duration-500 ${"active" in item && item.active ? "ring-inset ring-1 ring-[#2bbfbf]/20" : "hover:bg-white/[0.02]"}`}>
                  <p className="text-white/[0.07] text-5xl font-bold mb-5 tracking-tight leading-none">0{i + 1}</p>
                  <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">{item.title}</h3>
                  <p className="text-white/30 text-sm leading-relaxed mb-6">{item.desc}</p>
                  {item.link ? (
                    <a href={item.link} className="text-[#2bbfbf] text-xs font-semibold tracking-widest uppercase hover:text-white transition-colors">
                      {item.cta} →
                    </a>
                  ) : (
                    "active" in item && item.active && (
                      <span className="text-[#2bbfbf]/50 text-xs font-semibold tracking-widest uppercase">
                        {lang === "en" ? "You’re here ↑" : lang === "es" ? "Estás aquí ↑" : "Vous êtes ici ↑"}
                      </span>
                    )
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ──────────────────────────────────────────────────── */}
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
          <p className="text-white/30 text-xl font-light mb-12">{c.closingSub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#need-a-brain" className="inline-flex items-center justify-center bg-[#2bbfbf] hover:bg-[#25aaaa] text-black font-bold text-sm tracking-widest rounded-full px-10 py-5 transition-colors duration-200">
              {c.ctaNeedBrain}
            </a>
            <a href="#am-a-brain" className="inline-flex items-center justify-center bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-white font-semibold text-sm tracking-widest rounded-full px-10 py-5 transition-colors duration-200">
              {c.ctaAmBrain}
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.06] px-6 md:px-10 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <svg width="28" height="19" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="opacity-50">
              <path d="M0 21L8 1L16 21M3.5 14H12.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M31 7C29 4 26.5 2.5 23.5 2.5C18.5 2.5 15 6.5 15 11C15 15.5 18.5 19.5 23.5 19.5C26.5 19.5 29 18 31 15" stroke="#2bbfbf" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            <span className="text-white/30 text-sm">ADHD for CEOs</span>
          </div>
          <div className="text-white/20 text-xs leading-relaxed">
            <p>{c.footerTag}</p>
            <p className="mt-0.5">&copy; {new Date().getFullYear()} ADHD for CEOs. {c.footerRights}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
