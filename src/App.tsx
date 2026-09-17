import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  Bot,
  Boxes,
  BriefcaseBusiness,
  Code2,
  Copy,
  ExternalLink,
  Facebook,
  Github,
  Globe2,
  GraduationCap,
  Instagram,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageSquareText,
  Moon,
  Send,
  Sun,
  TerminalSquare,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { Chatbot } from "./components/Chatbot";
import { portfolio } from "./data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

const socialIcons: Record<string, LucideIcon> = {
  linkedin: Linkedin,
  github: Github,
  facebook: Facebook,
  instagram: Instagram,
  tiktok: MessageSquareText,
  website: Globe2,
};

const skillIcons = [Code2, Boxes, TerminalSquare, Users];

const revealDelay = (delay: number) =>
  ({ "--delay": `${delay}ms` }) as CSSProperties;

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading" data-reveal>
      <p className="section-eyebrow"><span>//</span> {eyebrow}</p>
      <div className="section-heading-row">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark",
  );
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0.05, 0.25, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeMenu);
    return () => window.removeEventListener("keydown", closeMenu);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("javier-portfolio-theme", nextTheme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", nextTheme === "dark" ? "#07111f" : "#f4f8fb");
  };

  return (
    <header className="site-header">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="header-inner shell">
        <a className="brand" href="#top" aria-label={`${portfolio.name}, back to top`}>
          <span>&lt;</span>{portfolio.initials}<span>/&gt;</span>
        </a>

        <nav className={`primary-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className={activeSection === link.href.slice(1) ? "is-active" : ""}
              aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            <Sun className="sun-icon" size={17} />
            <Moon className="moon-icon" size={17} />
          </button>
          <a className="header-contact" href="#contact">
            Let's talk <ArrowUpRight size={15} />
          </a>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  );
}

function Portrait() {
  const portraitRef = useRef<HTMLDivElement>(null);
  const animationFrame = useRef<number | null>(null);

  const updateTilt = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || !portraitRef.current) return;
    const element = portraitRef.current;
    const bounds = element.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    animationFrame.current = requestAnimationFrame(() => {
      element.style.setProperty("--rotate-y", `${(x - 0.5) * 10}deg`);
      element.style.setProperty("--rotate-x", `${(0.5 - y) * 10}deg`);
      element.style.setProperty("--shine-x", `${x * 100}%`);
      element.style.setProperty("--shine-y", `${y * 100}%`);
    });
  };

  const resetTilt = () => {
    if (!portraitRef.current) return;
    portraitRef.current.style.setProperty("--rotate-y", "0deg");
    portraitRef.current.style.setProperty("--rotate-x", "0deg");
    portraitRef.current.style.setProperty("--shine-x", "50%");
    portraitRef.current.style.setProperty("--shine-y", "50%");
  };

  return (
    <div className="portrait-stage hero-enter hero-enter-portrait" aria-label="Animated profile portrait">
      <div className="portrait-orbit orbit-one" aria-hidden="true"><i /></div>
      <div className="portrait-orbit orbit-two" aria-hidden="true"><i /></div>
      <div
        className="portrait-float"
        ref={portraitRef}
        onPointerMove={updateTilt}
        onPointerLeave={resetTilt}
      >
        <div className="portrait-card">
          <div className="portrait-corners" aria-hidden="true"><i /><i /><i /><i /></div>
          <img
            src={portfolio.profileImage}
            alt={portfolio.profileAlt}
            onError={(event) => {
              if (event.currentTarget.dataset.fallback) return;
              event.currentTarget.dataset.fallback = "true";
              event.currentTarget.src = `${import.meta.env.BASE_URL}profile-placeholder.svg`;
            }}
          />
          <div className="portrait-scan" aria-hidden="true" />
          <div className="portrait-shine" aria-hidden="true" />
          <div className="portrait-data" aria-hidden="true">
            <span>SUBJECT_01</span>
            <span>FOCUS // CREATE</span>
          </div>
        </div>
      </div>
      <div className="portrait-status glass-card">
        <span className="status-dot" />
        <span><small>Status</small>{portfolio.availability}</span>
      </div>
      <div className="portrait-coordinate" aria-hidden="true">14.5995° N<br />120.9842° E</div>
    </div>
  );
}

type HeroProps = {
  onOpenAssistant: () => void;
};

function Hero({ onOpenAssistant }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % portfolio.roles.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="hero-layout shell">
        <div className="hero-copy">
          <div className="availability-pill hero-enter hero-enter-one">
            <span className="status-dot" />
            {portfolio.availability}
          </div>
          <p className="hero-kicker hero-enter hero-enter-two">{portfolio.eyebrow}</p>
          <h1 className="hero-name hero-enter hero-enter-three">
            {portfolio.name.split(" ").slice(0, -1).join(" ")}
            <span>{portfolio.name.split(" ").slice(-1)}</span>
          </h1>
          <div className="role-line hero-enter hero-enter-four">
            <span className="role-prefix" aria-hidden="true">01</span>
            <span className="role-text" key={portfolio.roles[roleIndex]}>{portfolio.roles[roleIndex]}</span>
          </div>
          <p className="hero-summary hero-enter hero-enter-five">{portfolio.summary}</p>
          <div className="hero-actions hero-enter hero-enter-six">
            <a className="button button-primary" href="#work">
              Explore my work <ArrowDown size={17} />
            </a>
            <button className="button button-ghost" type="button" onClick={onOpenAssistant}>
              <Bot size={18} /> Ask {portfolio.assistant.name}
            </button>
          </div>
          <div className="hero-socials hero-enter hero-enter-seven" aria-label="Social links">
            <span>Connect</span><i />
            {portfolio.socials.slice(0, 4).map((social) => {
              const Icon = socialIcons[social.id];
              return (
                <a href={social.url} target="_blank" rel="noreferrer" aria-label={social.label} key={social.id}>
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </div>
        <Portrait />
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
        <span>Scroll to explore</span><i><ArrowDown size={14} /></i>
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="shell">
        <SectionHeading
          eyebrow="About me"
          title={portfolio.about.title}
          description="A quick look at how I think, create, and collaborate."
        />

        <div className="about-layout">
          <div className="about-story" data-reveal>
            <span className="about-kicker">{portfolio.about.kicker}</span>
            {portfolio.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="about-location">
              <MapPin size={17} /> Based in {portfolio.location}
            </div>
          </div>
          <div className="principles-grid">
            {portfolio.about.principles.map((principle, index) => (
              <article className="principle-card interactive-card" data-reveal style={revealDelay(index * 90)} key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="stats-grid" data-reveal>
          {portfolio.stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardsSection() {
  return (
    <section className="section awards-section" id="awards">
      <div className="shell">
        <SectionHeading
          eyebrow="Recognition"
          title="Milestones worth remembering."
          description="Awards, distinctions, and moments that reflect growth and meaningful contribution."
        />
        <div className="awards-grid">
          {portfolio.awards.map((award, index) => (
            <article className="award-card interactive-card" data-reveal style={revealDelay(index * 100)} key={`${award.title}-${index}`}>
              <div className="award-topline">
                <span className="award-icon"><Award size={20} /></span>
                <span className="mono-label">{award.year}</span>
              </div>
              <p className="award-index">0{index + 1}</p>
              <h3>{award.title}</h3>
              <h4>{award.organization}</h4>
              <p>{award.description}</p>
              <div className="award-trace" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type TimelineProps = {
  type: "education" | "leadership";
};

function Timeline({ type }: TimelineProps) {
  const isEducation = type === "education";
  const items = isEducation ? portfolio.education : portfolio.leadership;
  const Icon = isEducation ? GraduationCap : BriefcaseBusiness;

  return (
    <div className="journey-column" data-reveal>
      <div className="journey-column-title">
        <span><Icon size={20} /></span>
        <div>
          <p>Track {isEducation ? "01" : "02"}</p>
          <h3>{isEducation ? "Education" : "Leadership"}</h3>
        </div>
      </div>
      <div className="timeline">
        {items.map((item, index) => (
          <article className="timeline-item" style={revealDelay(index * 90)} key={`${item.period}-${index}`}>
            <div className="timeline-node"><i /></div>
            <span className="timeline-period">{item.period}</span>
            <h4>{isEducation ? "degree" in item && item.degree : "role" in item && item.role}</h4>
            <h5>{isEducation ? "school" in item && item.school : "organization" in item && item.organization}</h5>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function Journey() {
  return (
    <section className="section journey-section" id="journey">
      <div className="journey-grid-bg" aria-hidden="true" />
      <div className="shell">
        <SectionHeading
          eyebrow="My journey"
          title="Learning, leading, moving forward."
          description="The experiences that shaped both my technical foundation and the way I work with people."
        />
        <div className="journey-layout">
          <Timeline type="education" />
          <Timeline type="leadership" />
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="shell">
        <SectionHeading
          eyebrow="Capabilities"
          title="Tools I use to make ideas real."
          description="A growing toolkit spanning development, design thinking, collaboration, and delivery."
        />
        <div className="skills-layout">
          <div className="skills-grid">
            {portfolio.skillGroups.map((group, index) => {
              const Icon = skillIcons[index];
              return (
                <article className={`skill-card skill-card-${index + 1} interactive-card`} data-reveal style={revealDelay(index * 80)} key={group.label}>
                  <div className="skill-card-heading">
                    <span><Icon size={21} /></span>
                    <small>0{index + 1}</small>
                  </div>
                  <h3>{group.label}</h3>
                  <p>{group.description}</p>
                  <div className="skill-tags">
                    {group.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="language-panel" data-reveal>
            <div className="language-panel-heading">
              <span><Languages size={21} /></span>
              <div><small>Communication</small><h3>Spoken languages</h3></div>
            </div>
            <p>Connecting ideas clearly across teams, communities, and cultures.</p>
            <div className="spoken-list">
              {portfolio.spokenLanguages.map((item, index) => (
                <div className="spoken-item" key={item.language}>
                  <span className="spoken-index">0{index + 1}</span>
                  <strong>{item.language}</strong>
                  <span>{item.level}</span>
                </div>
              ))}
            </div>
            <div className="language-code" aria-hidden="true">
              <span>communication</span>: <b>true</b><br />
              <span>alwaysLearning</span>: <b>true</b>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="section work-section" id="work">
      <div className="shell">
        <SectionHeading
          eyebrow="Selected work"
          title="Ideas shaped into experiences."
          description="A selection of projects where technical decisions support a clear user need."
        />
        <div className="projects-list">
          {portfolio.projects.map((project, index) => (
            <article className={`project-card project-${project.accent}`} data-reveal style={revealDelay(index * 90)} key={project.number}>
              <div className="project-visual" aria-hidden="true">
                <div className="project-window">
                  <div className="project-window-bar"><i /><i /><i /><span>{project.number}.project</span></div>
                  <div className="project-art">
                    <span className="project-art-number">{project.number}</span>
                    <i className="project-shape shape-one" />
                    <i className="project-shape shape-two" />
                    <i className="project-shape shape-three" />
                    <div className="project-code-lines"><i /><i /><i /><i /></div>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-meta"><span>Project / {project.number}</span><span>{project.type}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.sourceUrl} target="_blank" rel="noreferrer">
                    <Github size={17} /> View source <ArrowUpRight size={15} />
                  </a>
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      <ExternalLink size={17} /> Live project <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <span>Live link coming soon</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type ContactProps = {
  onOpenAssistant: () => void;
};

function Contact({ onOpenAssistant }: ContactProps) {
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${email}`);
    setStatus("Opening your email app...");
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolio.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="shell">
        <div className="contact-heading" data-reveal>
          <p className="section-eyebrow"><span>//</span> Start a conversation</p>
          <h2>Have an idea?<br /><span>Let's build what matters.</span></h2>
          <p>Whether it's a project, opportunity, or a simple hello, my inbox is open.</p>
        </div>

        <div className="contact-layout">
          <div className="contact-details" data-reveal>
            <div className="contact-direct">
              <span className="contact-icon"><Mail size={20} /></span>
              <div><small>Email me directly</small><a href={`mailto:${portfolio.email}`}>{portfolio.email}</a></div>
              <button type="button" onClick={copyEmail} aria-label="Copy email address"><Copy size={17} /><span>{copied ? "Copied" : "Copy"}</span></button>
            </div>
            <button className="assistant-invite" type="button" onClick={onOpenAssistant}>
              <span><Bot size={21} /></span>
              <span><small>Need a quick answer?</small>Ask {portfolio.assistant.name} about me</span>
              <ArrowRight size={19} />
            </button>
            <div className="social-contact-grid">
              {portfolio.socials.map((social) => {
                const Icon = socialIcons[social.id];
                return (
                  <a href={social.url} target="_blank" rel="noreferrer" key={social.id}>
                    <Icon size={18} />
                    <span><small>{social.label}</small>{social.handle}</span>
                    <ArrowUpRight size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} data-reveal>
            <div className="form-heading"><span>New message</span><i className="status-dot" /></div>
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" name="name" type="text" placeholder="What should I call you?" required />
            <label htmlFor="contact-email">Email address</label>
            <input id="contact-email" name="email" type="email" placeholder="you@example.com" required />
            <label htmlFor="contact-message">Your message</label>
            <textarea id="contact-message" name="message" rows={5} placeholder="Tell me about your idea or opportunity..." required />
            <button className="button button-primary form-submit" type="submit">
              Send message <Send size={17} />
            </button>
            <p className="form-note" aria-live="polite">{status || "This form opens your default email application."}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <a className="brand" href="#top"><span>&lt;</span>{portfolio.initials}<span>/&gt;</span></a>
        <p>Designed and built with intention. © {new Date().getFullYear()} {portfolio.name}.</p>
        <a className="back-to-top" href="#top">Back to top <ArrowUp size={15} /></a>
      </div>
    </footer>
  );
}

export default function App() {
  const [assistantOpen, setAssistantOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7%" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      document.documentElement.style.setProperty("--scroll-progress", String(progress));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };
    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero onOpenAssistant={() => setAssistantOpen(true)} />
        <About />
        <AwardsSection />
        <Journey />
        <Skills />
        <Work />
        <Contact onOpenAssistant={() => setAssistantOpen(true)} />
      </main>
      <Footer />
      <Chatbot open={assistantOpen} onOpenChange={setAssistantOpen} />
    </>
  );
}
