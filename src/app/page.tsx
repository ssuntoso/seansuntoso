"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState } from "react";

/* ─── NAV ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur border-b border-border/30" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-5 sm:px-6 py-3 sm:py-4">
        <a href="#" className="flex items-center">
          <img src="/logo.svg" alt="SS" className="h-8 w-8" />
        </a>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-muted hover:text-foreground transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="sm:hidden text-muted"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden nav-blur border-t border-border/30 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-muted hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-svh flex items-center justify-center overflow-hidden">
      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-75 sm:w-125 h-75 sm:h-125 rounded-full bg-accent/5 blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-62.5 sm:w-100 h-62.5 sm:h-100 rounded-full bg-purple-500/5 blur-[80px] sm:blur-[120px]" />
      </div>

      <div className="relative z-10 text-center px-8 sm:px-12 md:px-16 max-w-4xl mx-auto">
        <p className="hero-animate text-xs sm:text-sm md:text-base tracking-widest uppercase text-muted mb-4 sm:mb-6">
          Software Engineer &bull; Hong Kong
        </p>
        <h1 className="hero-animate-delay-1 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.08]">
          <span className="gradient-text">Sean Michael Suntoso</span>
        </h1>
        <p className="hero-animate-delay-2 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
          Building smart contracts, AI systems, and cloud infrastructure.
          <br className="hidden sm:block" />
          BASc Applied AI from the University of Hong Kong.
        </p>
        <div className="hero-animate-delay-3 mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#experience"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors duration-200 text-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 rounded-full border border-border text-sm font-medium text-foreground hover:bg-surface transition-colors duration-200 text-center"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hero-animate-delay-3">
        <span className="text-[10px] uppercase tracking-widest text-muted">Scroll</span>
        <div className="w-px h-8 bg-linear-to-b from-muted to-transparent" />
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function About() {
  const stats = [
    { value: "5+", label: "Years Coding" },
    { value: "3+", label: "Years AI Agents Orchestration" },
    { value: "US$200K+", label: "Cost Savings" },
    { value: "US$20M+", label: "AUM Monitored" },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div>
            <p className="reveal text-xs uppercase tracking-widest text-accent mb-4">About</p>
            <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Engineer at the intersection of{" "}
              <span className="text-accent">AI</span>,{" "}
              <span className="text-purple-400">Web3</span> &{" "}
              <span className="text-green-400">Cloud</span>
            </h2>
            <p className="reveal mt-6 text-muted leading-relaxed">
              I&apos;m a software engineer with a passion for building scalable systems.
              At Animoca Brands, I develop smart contracts for token distribution,
              build AI trading agents, and manage cloud infrastructure overseeing
              digital assets exceeding US$20M AUM.
            </p>
            <p className="reveal mt-4 text-muted leading-relaxed">
              I hold a BASc in Applied AI from the University of Hong Kong with a focus on technology
              and a minor in finance, supported by the HKU Foundation Entrance Scholarship (full tuition).
            </p>
          </div>
          <div className="stagger-children grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="card-glow rounded-2xl bg-surface p-4 sm:p-6 text-center"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">{s.value}</div>
                <div className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-muted uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── EXPERIENCE ─── */
const experiences = [
  {
    company: "Animoca Brands",
    role: "Junior Software Engineer",
    period: "Feb 2025 – Mar 2026",
    location: "Hong Kong",
    url: "https://www.animocabrands.com",
    highlights: [
      "Developed smart contracts for token distribution, saving US$200K annually",
      "Built node monitoring dashboard for US$20M+ AUM",
      "Engineered multi-agent AI trading system",
      "Managed full-stack development with cloud infrastructure design & CI/CD pipelines",
      "Built interactive dashboard to monitor all token investments",
    ],
  },
  {
    company: "beNovelty Limited",
    role: "Cloud / System Engineer Intern",
    period: "Jun 2024 – Nov 2024",
    location: "Hong Kong",
    url: "https://www.benovelty.com",
    highlights: [
      "Developed APIs automating data syncing with Argo Workflow",
      "Set up Kubernetes orchestration in Azure AKS",
      "Configured Azure Key Vault, Azure Blob, and AWS EC2/S3",
    ],
  },
  {
    company: "REVOTECH Limited",
    role: "RAG-LLM Research Intern",
    period: "Jul 2023 – Apr 2024",
    location: "Hong Kong",
    highlights: [
      "Implemented RAG-LLM system for HK Drainage Services Department",
      "Analyzed documents & FAQs to improve system performance",
      "Presented research findings to government stakeholders",
    ],
  },
  {
    company: "PwC Consulting HK",
    role: "Digital Redesign Practice",
    period: "Jul 2023 – Dec 2023",
    location: "Hong Kong",
    url: "https://www.pwchk.com",
    highlights: [
      "Implemented SAP SuccessFactors Cloud for 500+ daily users",
      "Developed pipeline integrating multiple cloud services",
    ],
  },
  {
    company: "HKU",
    role: "Research Assistant",
    period: "Nov 2022 – Jun 2023",
    location: "Hong Kong",
    url: "https://www.hku.hk",
    highlights: [
      "Researched AI/LLM applications under a former IBM researcher",
      "Implemented AI Generated Content (AIGC) techniques",
    ],
  },
  {
    company: "Choco Up",
    role: "Data Engineering Intern",
    period: "Jun 2022 – Aug 2022",
    location: "Hong Kong",
    url: "https://www.choco-up.com",
    highlights: [
      "Integrated Lazada & Google Ads data into client dashboards",
      "Wrote documentation for AWS Lake Formation implementation",
    ],
  },
  {
    company: "Provident Acquisition Corp.",
    role: "Full Stack Website Developer",
    period: "Jan 2022 – Mar 2022",
    location: "Hong Kong",
    highlights: [
      "Developed company website to help routing information to investors",
      "Utilised Gatsby.js, React, and Tailwind CSS",
      "Responsible for hosting and DNS setup",
    ],
  },
  {
    company: "Wardaya College",
    role: "Software Engineer Intern",
    period: "Jul 2021 – Sep 2021",
    location: "Indonesia",
    url: "https://wardayaonline.com",
    highlights: [
      "Rewrote online learning platform with the CS department",
      "Implemented Google Analytics and Search Engine Optimisation (SEO)",
      "Increased traffic to more than 1,800 visitors per month",
    ],
  },
  {
    company: "SMAK 1 PENABUR Jakarta",
    role: "Student Council Software Developer",
    period: "Oct 2017 – Oct 2020",
    location: "Indonesia",
    url: "https://smakone.org",
    highlights: [
      "Led student council developer team in building school-sponsored websites",
      "Led product team for online ticketing system (3,000 customers served annually)",
      "Implemented SEO, generating 100+ visitors each month",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="reveal text-xs uppercase tracking-widest text-accent mb-4 text-center">
          Experience
        </p>
        <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-12 sm:mb-16 lg:mb-20">
          Where I&apos;ve worked
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line md:-translate-x-1/2" />

          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={exp.company} className="relative md:grid md:grid-cols-2 md:gap-12">
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 top-1 w-3 h-3 rounded-full bg-accent border-2 border-background -translate-x-1/2 z-10" />

                  <div
                    className={`pl-10 md:pl-0 ${
                      isLeft
                        ? "reveal-left md:text-right md:pr-12"
                        : "reveal-right md:col-start-2 md:pl-12"
                    }`}
                  >
                    <span className="text-xs text-muted">{exp.period}</span>
                    <div className={`flex items-center gap-2.5 mt-1 ${isLeft ? "md:justify-end" : ""}`}>
                      {exp.url && (
                        <img
                          src={`https://www.google.com/s2/favicons?domain=${new URL(exp.url).hostname}&sz=32`}
                          alt={exp.company}
                          className="w-5 h-5 rounded-sm shrink-0"
                        />
                      )}
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl font-semibold hover:text-accent transition-colors duration-200"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <h3 className="text-xl font-semibold">{exp.company}</h3>
                      )}
                    </div>
                    <p className="text-sm text-accent">{exp.role}</p>
                    <p className="text-xs text-muted mt-0.5">{exp.location}</p>
                    <ul className={`mt-4 space-y-2.5 text-left ${isLeft ? "md:ml-auto md:max-w-sm" : "md:max-w-sm"}`}>
                      {exp.highlights.map((h) => (
                        <li key={h} className="text-sm text-muted leading-relaxed flex items-start gap-2.5">
                          <span className="mt-1.75 w-1.5 h-1.5 rounded-full bg-accent/70 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SKILLS ─── */
const skillCategories = [
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: ["GCP", "AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    title: "AI & ML",
    icon: "🤖",
    skills: ["AI Agent", "LLM", "RAG", "Python", "Fast API"],
  },
  {
    title: "Web3",
    icon: "⛓️",
    skills: ["Solidity", "Smart Contracts", "Token Distribution"],
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Certifications",
    icon: "📜",
    skills: [
      "Google Cloud Architect",
      "AWS Solutions Architect",
    ],
  },
  {
    title: "Languages",
    icon: "🌏",
    skills: ["English (Native)", "Indonesian (Native)", "Mandarin (HSK 3)", "Cantonese (Basic)"],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8 bg-surface/50">
      <div className="mx-auto max-w-6xl">
        <p className="reveal text-xs uppercase tracking-widest text-accent mb-4 text-center">
          Skills & Certifications
        </p>
        <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-center mb-10 sm:mb-16">
          What I bring to the table
        </h2>

        <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="card-glow rounded-2xl bg-surface p-5 sm:p-6 hover:bg-surface-hover transition-colors duration-300"
            >
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="text-lg font-semibold mt-3 mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-full bg-background/80 text-muted border border-border/50"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── EDUCATION ─── */
function Education() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="reveal text-xs uppercase tracking-widest text-accent mb-4">Education</p>
        <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
          The University of Hong Kong
        </h2>
        <div className="reveal-scale">
          <div className="card-glow inline-block rounded-2xl bg-surface p-6 sm:p-8 md:p-12 text-justify w-full max-w-xl mx-auto">
            <p className="text-xl font-semibold">BASc in Applied AI</p>
            <p className="text-sm text-muted mt-1">
              Focus on Technology &bull; Minor in Finance
            </p>
            <p className="text-sm text-muted mt-1">Sep 2020 – Jan 2025</p>
            <div className="mt-6 pt-6 border-t border-border/50">
              <p className="text-xs uppercase tracking-wider text-accent mb-2">Award</p>
              <p className="text-sm text-foreground">
                HKU Foundation Entrance Scholarship
              </p>
              <p className="text-xs text-muted mt-1">
                Full tuition + accommodation allowance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── HACKATHON ─── */
function Hackathon() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="reveal-scale card-glow rounded-2xl bg-surface p-6 sm:p-8 md:p-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <span className="text-3xl">🏆</span>
            <div>
              <h3 className="text-xl font-semibold">Cathay Hackathon 2024</h3>
              <p className="text-sm text-accent">Outstanding Developer Award</p>
            </div>
          </div>
          <p className="text-sm text-muted leading-relaxed">
            Pitched and implemented a personalised in-flight entertainment solution
            using AWS Personalize and EKS, earning recognition as an outstanding developer.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  const links = [
    {
      label: "Email",
      href: "mailto:ssuntoso@gmail.com",
      display: "ssuntoso@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/ssuntoso",
      display: "linkedin.com/in/ssuntoso",
    },
    {
      label: "GitHub",
      href: "https://github.com/ssuntoso",
      display: "github.com/ssuntoso",
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="reveal text-xs uppercase tracking-widest text-accent mb-4">Contact</p>
        <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
          Let&apos;s connect
        </h2>
        <p className="reveal text-muted mb-12 max-w-md mx-auto">
          Open to new opportunities and collaborations. Feel free to reach out.
        </p>
        <div className="stagger-children flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-5 sm:px-6 py-3 sm:py-4 rounded-xl border border-border/50 hover:border-accent/50 hover:bg-surface transition-all duration-300 w-full sm:w-auto text-center sm:text-left"
            >
              <span className="block text-xs text-muted group-hover:text-accent transition-colors">
                {l.label}
              </span>
              <span className="block text-sm font-medium mt-1">{l.display}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="border-t border-border/30 py-6 sm:py-8 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Sean Michael Suntoso. All rights reserved.
        </p>
        <p className="text-xs text-muted">Hong Kong</p>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  useScrollReveal();

  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Hackathon />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
