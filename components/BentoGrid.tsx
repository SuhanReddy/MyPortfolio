"use client";

import { useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Activity,
  Boxes,
  Check,
  Copy,
  ExternalLink,
  Github,
  Radio,
  Workflow,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Project = {
  number: string;
  name: string;
  category: string;
  summary: string;
  impact: string;
  impactLabel: string;
  technologies: string[];
  kind: "search" | "vision" | "platform";
  liveUrl: string;
  repoUrl: string;
};

const projects: Project[] = [
  {
    number: "01",
    name: "Semantic Search Studio",
    category: "APPLIED AI / NLP",
    summary: "A retrieval workflow that helps teams find useful answers across a growing knowledge base.",
    impact: "40%",
    impactLabel: "sample latency improvement",
    technologies: ["Python", "Embeddings", "FastAPI", "PostgreSQL"],
    kind: "search",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    number: "02",
    name: "Visual Quality Monitor",
    category: "MACHINE LEARNING",
    summary: "An inspection dashboard concept that brings model output and review context into one place.",
    impact: "3×",
    impactLabel: "sample review throughput",
    technologies: ["PyTorch", "Python", "React", "Computer Vision"],
    kind: "vision",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    number: "03",
    name: "Model Ops Workbench",
    category: "ENGINEERING / TOOLING",
    summary: "A small platform for comparing experiments and making model behavior easier to inspect.",
    impact: "12 hrs",
    impactLabel: "sample setup saved per sprint",
    technologies: ["TypeScript", "Next.js", "Python", "Docker"],
    kind: "platform",
    liveUrl: "#",
    repoUrl: "#",
  },
];

const activityBars = [25, 48, 36, 72, 43, 60, 34, 83, 52, 40, 68, 32, 56, 77, 47, 64, 30, 54, 87, 44, 70, 37, 59, 79, 49, 65, 41, 74, 53, 33, 62, 84, 46, 57, 72, 38, 67, 50, 78, 43, 61, 35, 80, 55, 69, 42, 58, 76];

function ProjectPreview({ kind }: { kind: Project["kind"] }) {
  if (kind === "search") {
    return (
      <div className="preview-window search-preview" aria-hidden="true">
        <div className="preview-topline"><span /><span /><span /><i>knowledge / search</i></div>
        <div className="search-query"><span>⌕</span> How do we improve retrieval quality?</div>
        <div className="search-result"><b>01</b><div><i>RESEARCH NOTE · 4 MIN READ</i><strong>Embedding evaluation, made practical</strong><span>Relevance signals, retrieval benchmarks, and...</span></div><ArrowUpRight size={14} /></div>
        <div className="search-result muted-result"><b>02</b><div><i>ENGINEERING · 7 MIN READ</i><strong>Choosing a vector index</strong><span>A useful guide to index tradeoffs...</span></div><ArrowUpRight size={14} /></div>
      </div>
    );
  }
  if (kind === "vision") {
    return (
      <div className="preview-window vision-preview" aria-hidden="true">
        <div className="preview-topline"><span /><span /><span /><i>inspection / batch 028</i></div>
        <div className="vision-layout"><div className="vision-image"><div className="vision-object" /><div className="vision-box" /><span>CONFIDENCE 0.98</span></div><div className="vision-metrics"><i>MODEL STATUS</i><b>Healthy</b><i>FLAGGED</i><b>03 <small>items</small></b><div className="metric-line"><span /></div><i>PRECISION</i><b>98.4%</b></div></div>
      </div>
    );
  }
  return (
    <div className="preview-window platform-preview" aria-hidden="true">
      <div className="preview-topline"><span /><span /><span /><i>experiment / overview</i></div>
      <div className="platform-body"><div className="platform-sidebar"><span /><span /><span /><span /></div><div className="platform-content"><i>EXPERIMENT 024 / RETRIEVAL V2</i><strong>Run comparison</strong><div className="chart-grid"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div><div className="chart-legend"><span />baseline <span />candidate</div></div></div>
    </div>
  );
}

export default function BentoGrid() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("suhan@example.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = "mailto:suhan@example.com";
    }
  }

  return (
    <div className="bento-grid">
      {projects.map((project, index) => (
        <motion.article
          key={project.number}
          className={cn("project-card group transition-transform duration-300 hover:-translate-y-1", `project-${project.kind}`, index === 0 && "project-featured")}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
        >
          <div className="project-topline"><span>{project.number} / {project.category}</span><a href={project.repoUrl} aria-label={`${project.name} source code`}><Github size={17} /></a></div>
          <ProjectPreview kind={project.kind} />
          <div className="project-copy"><div className="project-impact"><strong>{project.impact}</strong><span>{project.impactLabel}</span></div><h3>{project.name}</h3><p>{project.summary}</p><div className="project-tech">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></div>
          <div className="project-links"><a href={project.liveUrl}>Live preview <ExternalLink size={14} /></a><a href={project.repoUrl}>Source <ArrowUpRight size={14} /></a></div>
        </motion.article>
      ))}

      <motion.article className="bento-card github-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: 0.24 }}>
        <div className="card-label"><Github size={15} /> OPEN SOURCE <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="Open GitHub profile"><ArrowUpRight size={15} /></a></div>
        <div className="github-card-heading"><strong>Consistent curiosity.</strong><span>Activity preview · replace with your GitHub data</span></div>
        <div className="activity-grid" aria-label="Sample activity visualization">{activityBars.map((height, index) => <span key={index} style={{ "--bar-height": `${height}%` } as CSSProperties} />)}</div>
        <div className="activity-legend"><span><i /> learning</span><span><i /> building</span><span>Last 12 months</span></div>
        <div className="github-stats"><div><strong>Python</strong><span>most-used language</span></div><div><strong>Open source</strong><span>always learning in public</span></div></div>
      </motion.article>

      <motion.article className="bento-card now-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: 0.32 }}>
        <div className="card-label"><Radio size={15} /> NOW <span className="now-pulse" /></div>
        <div className="now-illustration"><div className="now-orbit orbit-a" /><div className="now-orbit orbit-b" /><div className="now-core"><Workflow size={25} /></div><span className="orbit-node node-a"><Activity size={14} /></span><span className="orbit-node node-b"><Boxes size={14} /></span></div>
        <p className="now-kicker">CURRENT FOCUS</p>
        <h3>Useful AI.<br />Thoughtful systems.</h3>
        <p className="now-description">Going deeper on NLP and LLM applications, while sharpening the product engineering around them.</p>
        <div className="focus-tags"><span>Retrieval systems</span><span>Evaluation</span><span>Human-centered AI</span></div>
      </motion.article>

      <motion.article className="bento-card terminal-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: 0.4 }}>
        <div className="card-label"><span className="terminal-status" /> A SMALL NOTE TO SELF</div>
        <div className="terminal-code"><span className="code-comment">// engineering, in a few lines</span><br /><span className="code-keyword">const</span> <span className="code-name">goodSoftware</span> = (problem) =&gt; {'{'}<br /><span className="code-indent">return</span> <span className="code-string">"clarity"</span><br /><span className="code-indent">+ thoughtfulTradeoffs(problem)</span><br /><span className="code-indent">+ measurableImpact;</span><br />{'}'};</div>
        <button className="copy-email" onClick={copyEmail} type="button">{copied ? <Check size={14} /> : <Copy size={14} />}{copied ? "Email copied" : "Copy my email"}</button>
        <AnimatePresence>{copied && <motion.span className="copy-toast" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }}>suhan@example.com</motion.span>}</AnimatePresence>
      </motion.article>
    </div>
  );
}