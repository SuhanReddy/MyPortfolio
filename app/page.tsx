import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import BentoGrid from "@/components/BentoGrid";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

const technologies = {
  Languages: ["Python", "TypeScript", "JavaScript", "SQL"],
  "AI / ML": ["NLP", "LLMs", "PyTorch", "scikit-learn"],
  "Product engineering": ["React", "Next.js", "Node.js", "Git"],
};

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Suhan Reddy, home">
          <span className="wordmark-mark">sr<span>.</span></span>
          <span>Vanga Suhan Reddy</span>
        </a>
        <nav className="topnav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.label}>{item.label}</a>
          ))}
        </nav>
        <a className="topbar-cta" href="#contact">
          Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </header>

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot" /> Open to software engineering roles</div>
          <p className="eyebrow">SOFTWARE ENGINEER <span>·</span> APPLIED AI</p>
          <h1>Making complex<br />systems feel <em>simple.</em></h1>
          <p className="hero-intro">
            I&apos;m Suhan, an AI/ML master&apos;s student at TU Darmstadt. I turn
            hard engineering problems into clear, useful software, from
            thoughtful interfaces to language-driven systems.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button button-primary">Explore my work <ArrowDown size={16} /></a>
            <a href="#contact" className="button button-secondary"><Mail size={16} /> Get in touch</a>
          </div>
          <div className="social-links" aria-label="Social profiles">
            <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
            <span className="social-divider" />
            <a href="https://www.linkedin.com/in/suhan-reddy-vanga-b475b9246/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} /></a>
          </div>
        </div>
        <aside className="hero-aside" aria-label="Introduction details">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-aside-content">
            <span className="aside-index">01 / 03</span>
            <div className="aside-glyph"><Braces size={27} strokeWidth={1.4} /></div>
            <p className="aside-label">CURRENTLY EXPLORING</p>
            <p className="aside-focus">Language models,<br />retrieval &amp; human-centered AI.</p>
            <div className="aside-location"><MapPin size={14} /> Darmstadt, Germany</div>
          </div>
          <span className="hero-aside-caption">Curiosity, made concrete.</span>
        </aside>
        <div className="hero-bottomline"><span>SELECTED WORK &amp; ENGINEERING NOTES</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="section-wrap work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A FEW THINGS I&apos;VE BEEN BUILDING</p>
            <h2>Selected work<span className="heading-period">.</span></h2>
          </div>
          <p className="section-note">A mix of product thinking, applied machine learning, and hands-on engineering.</p>
        </div>
        <BentoGrid />
      </section>

      <section className="section-wrap approach-section" id="approach">
        <div className="section-heading">
          <div>
            <p className="eyebrow">HOW I LIKE TO BUILD</p>
            <h2>Strong foundations.<br /><em>Useful outcomes.</em></h2>
          </div>
          <p className="section-note">I care about the details users feel and the engineering decisions they never have to think about.</p>
        </div>
        <div className="approach-grid">
          <article className="approach-card">
            <span className="approach-number">01</span>
            <Sparkles size={20} className="approach-icon" />
            <h3>Start with the real problem</h3>
            <p>Understand the people, constraints, and failure modes before choosing a framework or model.</p>
          </article>
          <article className="approach-card">
            <span className="approach-number">02</span>
            <Braces size={20} className="approach-icon" />
            <h3>Make complexity legible</h3>
            <p>Build clear interfaces and well-shaped systems that are easier to use, test, and extend.</p>
          </article>
          <article className="approach-card">
            <span className="approach-number">03</span>
            <ArrowRight size={20} className="approach-icon" />
            <h3>Measure what matters</h3>
            <p>Use evidence and iteration to improve reliability, speed, and the actual user experience.</p>
          </article>
        </div>
        <div className="experience-strip">
          <div className="experience-date">CURRENT</div>
          <div className="experience-marker" />
          <div className="experience-copy">
            <h3>M.Sc. Artificial Intelligence &amp; Machine Learning</h3>
            <p>TU Darmstadt <span>·</span> Deepening my work in NLP, language models, and applied machine learning.</p>
          </div>
          <span className="experience-tag">ACADEMIC FOCUS</span>
        </div>
      </section>

      <section className="section-wrap skills-section" aria-labelledby="skills-title">
        <div className="skills-intro">
          <p className="eyebrow">TOOLS I REACH FOR</p>
          <h2 id="skills-title">A practical toolkit<span className="heading-period">.</span></h2>
          <p>No arbitrary scores. Just the technologies I use to think, build, and ship.</p>
        </div>
        <div className="skill-groups">
          {Object.entries(technologies).map(([category, items]) => (
            <div className="skill-group" key={category}>
              <span className="skill-category">{category}</span>
              <div className="tech-chips">{items.map((item) => <span className="tech-chip" key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <div>
            <p className="eyebrow">HAVE A GOOD PROBLEM?</p>
            <h2>Let&apos;s make<br /><em>something useful.</em></h2>
            <p className="contact-copy">I&apos;m open to software engineering opportunities and thoughtful collaborations.</p>
          </div>
          <div className="contact-action">
            <a href="mailto:suhan@example.com" className="button button-primary"><Mail size={17} /> suhan@example.com <ArrowUpRight size={16} /></a>
            <p>Replace with your preferred email address.</p>
          </div>
        </div>
      </section>

      <footer className="section-wrap footer">
        <a className="wordmark footer-mark" href="#top"><span className="wordmark-mark">sr<span>.</span></span><span>Vanga Suhan Reddy</span></a>
        <span>Designed with intention. Built with curiosity.</span>
        <a href="#top" className="back-to-top">Back to top ↑</a>
      </footer>
    </main>
  );
}