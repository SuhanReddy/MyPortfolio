"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ChevronRight, Download, Info, Play, X } from "lucide-react";

type PortfolioItem = {
  title: string;
  eyebrow: string;
  meta: string;
  description: string;
  details: string[];
  art: string;
};

type PortfolioRow = {
  id: string;
  title: string;
  items: PortfolioItem[];
};

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const rows: PortfolioRow[] = [
  {
    id: "experience",
    title: "Current Role & Experience (Original Series)",
    items: [{
      title: "Teaching Assistant - Introduction to LLMs",
      eyebrow: "TEACHING ASSISTANT",
      meta: "TU Darmstadt · Oct 2026 – Present",
      description: "Helping students understand the ideas and engineering behind large language models.",
      details: [
        "Assisting in the curriculum for Introduction to Large Language Models at Technische Universität Darmstadt.",
        "Guiding students through LLM architectures, prompt engineering, fine-tuning, and practical implementations.",
      ],
      art: "art-classroom",
    }],
  },
  {
    id: "projects",
    title: "Featured Projects (Trending Now)",
    items: [
      {
        title: "Intelligent Ambulance",
        eyebrow: "AI · HUMAN INTERACTION",
        meta: "Academic project · Published research",
        description: "Bridging AI and human interaction technologies for emergency medical response.",
        details: [
          "An academic project integrating predictive analytics and AI decision support for emergency medical response.",
          "The work explores how intelligent systems can support more informed, human-centered decisions in time-critical situations.",
        ],
        art: "art-ambulance",
      },
      {
        title: "Movie Recommendation System",
        eyebrow: "RECOMMENDATION SYSTEMS",
        meta: "Python · React · Cosine similarity",
        description: "A content-based engine that finds films with a similar feel to the ones you love.",
        details: [
          "A content-based recommendation engine built with Python and React.",
          "Uses cosine similarity to compare movie attributes and surface relevant recommendations.",
        ],
        art: "art-movies",
      },
      {
        title: "Sentiment Analysis Web App",
        eyebrow: "NATURAL LANGUAGE PROCESSING",
        meta: "React · NLP · Real time",
        description: "A focused web experience for understanding the tone behind written text.",
        details: [
          "A real-time NLP web application that classifies text as positive, negative, or neutral.",
          "A React interface makes sentiment results clear and immediate.",
        ],
        art: "art-sentiment",
      },
    ],
  },
  {
    id: "skills",
    title: "Technical Skills (Genre Categories)",
    items: [
      {
        title: "Languages",
        eyebrow: "THE BUILDING BLOCKS",
        meta: "Python · JavaScript",
        description: "Programming languages for prototypes, products, and data-driven applications.",
        details: ["Python", "JavaScript"],
        art: "art-languages",
      },
      {
        title: "AI & Machine Learning",
        eyebrow: "THE MODEL TOOLKIT",
        meta: "Frameworks · Data · Applied AI",
        description: "From deep learning frameworks to language and recommendation systems.",
        details: ["PyTorch", "TensorFlow", "NumPy", "Pandas", "NLP", "Large Language Models (LLMs)", "Recommendation Systems", "Sentiment Analysis"],
        art: "art-ai",
      },
      {
        title: "Web Development",
        eyebrow: "THE INTERFACE LAYER",
        meta: "React · Node.js · Tailwind CSS",
        description: "Building responsive interfaces and the systems that support them.",
        details: ["React", "Node.js", "HTML5", "CSS3", "Tailwind CSS"],
        art: "art-web",
      },
      {
        title: "Tools & Databases",
        eyebrow: "THE WORKBENCH",
        meta: "Git · GitHub · MySQL",
        description: "Version control and relational data tools for dependable development.",
        details: ["Git", "GitHub", "MySQL"],
        art: "art-tools",
      },
      {
        title: "Spoken Languages",
        eyebrow: "ACROSS LANGUAGES",
        meta: "English · German · Telugu",
        description: "Comfortable collaborating across languages and cultures.",
        details: ["English (C1)", "German (A2/B1)", "Telugu (Native)"],
        art: "art-languages-spoken",
      },
    ],
  },
  {
    id: "publications",
    title: "Publications & Research (Critically Acclaimed)",
    items: [{
      title: "The Intelligent Ambulance",
      eyebrow: "RESEARCH PUBLICATION",
      meta: "IJSREM · Vol. 08, Issue 07 · July 2024",
      description: "Bridging AI and human interaction technologies in emergency response.",
      details: [
        '"The Intelligence Ambulance - Bridging AI and Human Interaction Technologies."',
        "Published in the International Journal of Scientific Research in Engineering and Management (IJSREM), Vol. 08, Issue 07 (July 2024).",
        "Impact Factor: 8.448.",
      ],
      art: "art-publication",
    }],
  },
  {
    id: "education",
    title: "Education (Origin Story)",
    items: [
      {
        title: "M.Sc. Artificial Intelligence & Machine Learning",
        eyebrow: "MASTER'S DEGREE",
        meta: "TU Darmstadt, Germany · Oct 2024 – Present",
        description: "Advanced study in artificial intelligence and machine learning.",
        details: ["Master of Science in Artificial Intelligence and Machine Learning.", "Technische Universität Darmstadt, Germany.", "Oct 2024 – Present."],
        art: "art-masters",
      },
      {
        title: "B.Tech in CSE (AI & ML)",
        eyebrow: "BACHELOR'S DEGREE",
        meta: "CMR Engineering College · 2020 – 2024",
        description: "Computer science engineering, specializing in AI and machine learning.",
        details: ["Bachelor of Technology in Computer Science and Engineering (AI & ML).", "CMR Engineering College, Hyderabad, India.", "2020 – 2024 · CGPA: 7.73/10."],
        art: "art-bachelors",
      },
      {
        title: "Senior Secondary (MPC)",
        eyebrow: "SENIOR SECONDARY",
        meta: "Narayana Junior College · 95.8%",
        description: "Mathematics, Physics, and Chemistry.",
        details: ["Senior Secondary (MPC: Mathematics, Physics, Chemistry).", "Narayana Junior College · 95.8%."],
        art: "art-secondary",
      },
    ],
  },
];

function StreamingRow({ row, onSelect }: { row: PortfolioRow; onSelect: (item: PortfolioItem) => void }) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(direction: number) {
    trackRef.current?.scrollBy({ left: direction * trackRef.current.clientWidth * 0.78, behavior: "smooth" });
  }

  return (
    <section className="stream-row" id={row.id} aria-labelledby={`${row.id}-title`}>
      <div className="row-heading">
        <h2 id={`${row.id}-title`}>{row.title}<ChevronRight size={19} aria-hidden="true" /></h2>
        <div className="row-controls">
          <button type="button" onClick={() => scroll(-1)} aria-label={`Scroll ${row.title} left`}><ArrowLeft size={16} /></button>
          <button type="button" onClick={() => scroll(1)} aria-label={`Scroll ${row.title} right`}><ArrowRight size={16} /></button>
        </div>
      </div>
      <div className="carousel-track" ref={trackRef}>
        {row.items.map((item, index) => (
          <button className="title-card" type="button" key={item.title} onClick={() => onSelect(item)} aria-label={`View details for ${item.title}`}>
            <span className={`card-art ${item.art}`} aria-hidden="true">
              <span className="art-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="art-mark" />
              <span className="art-caption">{item.eyebrow}</span>
            </span>
            <span className="card-copy">
              <span className="card-title">{item.title}</span>
              <span className="card-meta">{item.meta}</span>
              <span className="card-description">{item.description}</span>
              <span className="card-action"><Info size={14} /> More info</span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    if (!selected) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selected]);

  return (
    <main className="streaming-site" id="home">
      <header className="stream-header">
        <a className="netflix-mark" href="#home" aria-label="Suhan Reddy Vanga home">SR<span>.</span></a>
        <nav className="stream-nav" aria-label="Main navigation">
          {navigation.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}
        </nav>
        <a className="profile-link" href="#contact" aria-label="Go to contact section"><span>SV</span></a>
      </header>

      <section className="billboard" aria-labelledby="hero-title">
        <div className="billboard-backdrop" />
        <div
          className="billboard-image-wrap"
          role="img"
          aria-label="Portrait of Suhan Reddy Vanga"
        />
        <div className="billboard-copy">
          <p className="billboard-kicker"><span className="netflix-n">N</span> PORTFOLIO ORIGINAL</p>
          <h1 id="hero-title">Suhan Reddy Vanga</h1>
          <p className="billboard-subtitle">M.Sc. Artificial Intelligence &amp; Machine Learning Student | AI/ML &amp; Web Developer</p>
          <div className="billboard-tags"><span>TU Darmstadt</span><i /> <span>Top 10 | AI/ML &amp; Web Development</span><i /> <span>English C1 | German B1</span></div>
          <p className="billboard-description">Building intelligent systems and thoughtful digital experiences, one meaningful problem at a time.</p>
          <div className="billboard-actions">
            <a className="billboard-button play-button" href="#projects"><Play size={17} fill="currentColor" /> Explore Work</a>
            <a className="billboard-button resume-button" href="/Resume.pdf" download="Suhan-Reddy-Vanga-Resume.pdf"><Download size={18} /> Download Resume</a>
          </div>
          <a className="scroll-cue" href="#experience"><ArrowDown size={14} /> Scroll to explore</a>
        </div>
        <div className="billboard-fade" />
      </section>

      <div className="catalogue">
        {rows.map((row) => <StreamingRow row={row} onSelect={setSelected} key={row.id} />)}
      </div>

      <footer className="stream-footer" id="contact">
        <div className="footer-inner">
          <p className="footer-label"><span className="netflix-n">N</span> READY FOR THE NEXT CHAPTER</p>
          <h2>Let&apos;s build something that matters.</h2>
          <p>AI/ML &amp; Web Developer · TU Darmstadt · Darmstadt, Germany</p>
          <a className="linkedin-link" href="https://www.linkedin.com/in/suhan-reddy-vanga-b475b9246/" target="_blank" rel="noreferrer">Connect on LinkedIn <ChevronRight size={16} /></a>
          <span className="copyright">© {new Date().getFullYear()} Suhan Reddy Vanga</span>
        </div>
      </footer>

      {selected && (
        <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
          <section className="detail-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button className="modal-close" type="button" onClick={() => setSelected(null)} aria-label="Close details"><X size={19} /></button>
            <div className={`modal-art card-art ${selected.art}`} aria-hidden="true"><span className="art-mark" /><span className="art-caption">{selected.eyebrow}</span></div>
            <div className="modal-copy">
              <p className="modal-eyebrow">{selected.eyebrow}</p>
              <h2 id="modal-title">{selected.title}</h2>
              <p className="modal-meta">{selected.meta}</p>
              <p className="modal-description">{selected.description}</p>
              <ul>{selected.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              <button className="modal-done" type="button" onClick={() => setSelected(null)}>Close</button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}