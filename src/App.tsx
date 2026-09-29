import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  Accessibility,
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  Bot,
  Boxes,
  Braces,
  BriefcaseBusiness,
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Copy,
  Database,
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
  MonitorSmartphone,
  Moon,
  Palette,
  Send,
  Sparkles,
  Sun,
  TerminalSquare,
  Trophy,
  Users,
  Workflow,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiCss,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiClaude,
  SiGooglegemini,
  SiLuau,
  SiNodedotjs,
  SiOpencode,
  SiPhp,
  SiPython,
  SiReact,
  SiSupabase,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { BsOpenai } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";
import { Chatbot } from "./components/Chatbot";
import { portfolio } from "./data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
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

const skillIcons = [Code2, Boxes, TerminalSquare, Users, Bot];

const technologyIcons: Record<string, LucideIcon | IconType> = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  python: SiPython,
  php: SiPhp,
  html: SiHtml5,
  css: SiCss,
  luau: SiLuau,
  react: SiReact,
  responsive: MonitorSmartphone,
  rest: Braces,
  accessibility: Accessibility,
  node: SiNodedotjs,
  sql: Database,
  supabase: SiSupabase,
  api: Workflow,
  git: SiGit,
  github: SiGithub,
  vscode: VscVscode,
  vercel: SiVercel,
  kiro: Sparkles,
  figma: SiFigma,
  canva: Palette,
  chatgpt: BsOpenai,
  opencode: SiOpencode,
  claude: SiClaude,
  gemini: SiGooglegemini,
  quickai: Zap,
};

const awardGroupIcons: Record<string, LucideIcon> = {
  recognition: Award,
  competition: Trophy,
  academic: GraduationCap,
};

const assetPath = (path: string) =>
  path.startsWith("http") ? path : `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

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

type ExperienceDetail = {
  title: string;
  label: string;
  date: string;
  meta: string;
  description: string;
  tags?: readonly string[];
  takeaways: readonly string[];
  images: readonly string[];
  imageAlt: string;
  fallbackImage?: string;
  proofUrl?: string;
};

function OpeningSequence({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(onComplete, reducedMotion ? 600 : 5000);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="opening-sequence" role="dialog" aria-modal="true" aria-label="Portfolio introduction">
      <div className="opening-atmosphere" aria-hidden="true" />
      <div className="opening-smoke" aria-hidden="true"><i /><i /><i /></div>
      <div className="opening-grid" aria-hidden="true" />
      <div className="opening-hud" aria-hidden="true"><i /><i /></div>
      <div className="opening-circuit opening-circuit-left" aria-hidden="true" />
      <div className="opening-circuit opening-circuit-right" aria-hidden="true" />
      <div className="opening-particles" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>
      <div className="opening-light" aria-hidden="true" />
      <div className="opening-letterbox opening-letterbox-top" aria-hidden="true" />
      <div className="opening-letterbox opening-letterbox-bottom" aria-hidden="true" />
      <div className="opening-title-card">
        <p className="opening-kicker">A digital portfolio</p>
        <div className="opening-mark" data-text={`<${portfolio.initials}/>`} aria-hidden="true"><span>&lt;</span>{portfolio.initials}<span>/&gt;</span></div>
        <div className="opening-rule" aria-hidden="true"><i /></div>
        <h1 data-text={portfolio.name}>{portfolio.name}</h1>
        <p className="opening-role">Computer Science <span>/</span> Software Engineering <span>/</span> Game Development</p>
      </div>
      <button type="button" onClick={onComplete}>Skip intro</button>
    </div>
  );
}

function ExperienceModal({ detail, onClose }: { detail: ExperienceDetail; onClose: () => void }) {
  const [activeImage, setActiveImage] = useState(0);
  const [showProof, setShowProof] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setActiveImage(0);
    setShowProof(false);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [detail]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (showProof) setShowProof(false);
        else onClose();
      }
      if (!showProof && event.key === "ArrowRight" && detail.images.length > 1) {
        setActiveImage((current) => (current + 1) % detail.images.length);
      }
      if (!showProof && event.key === "ArrowLeft" && detail.images.length > 1) {
        setActiveImage((current) => (current - 1 + detail.images.length) % detail.images.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [detail, onClose, showProof]);

  const hasImages = detail.images.length > 0;
  const displayedImage = hasImages && activeImage < detail.images.length ? activeImage : 0;

  return (
    <div className="experience-modal-backdrop" onPointerDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="experience-modal" role="dialog" aria-modal="true" aria-labelledby="experience-title">
        <header className="experience-modal-header">
          <div><small>{detail.label}</small><span>{detail.date}</span></div>
          <button ref={closeButtonRef} type="button" onClick={onClose} aria-label="Close experience"><X size={21} /></button>
        </header>
        <div className="experience-modal-grid">
          <div className="experience-gallery">
            <div className={`experience-main-image ${hasImages || showProof ? "" : "is-placeholder"}`}>
              {showProof && detail.proofUrl ? (
                <img src={assetPath(detail.proofUrl)} alt={`${detail.title} certificate or proof`} />
              ) : hasImages ? (
                <img
                  src={assetPath(detail.images[displayedImage])}
                  alt={`${detail.imageAlt} ${displayedImage + 1}`}
                  onError={(event) => {
                    if (!detail.fallbackImage || event.currentTarget.dataset.fallback) return;
                    event.currentTarget.dataset.fallback = "true";
                    event.currentTarget.src = assetPath(detail.fallbackImage);
                  }}
                />
              ) : <><Camera size={34} /><strong>Gallery ready</strong><span>Add as many photos as you want</span></>}
              {detail.proofUrl && (
                <button
                  className={`experience-proof-toggle ${showProof ? "is-close" : ""}`}
                  type="button"
                  onClick={() => setShowProof((current) => !current)}
                  aria-label={showProof ? "Back to event photos" : "View certificate or proof"}
                >
                  {showProof ? <><X size={17} /> Back to photos</> : <><Award size={17} /> View certificate</>}
                </button>
              )}
            </div>
            {!showProof && detail.images.length > 1 && (
              <div className="experience-gallery-controls">
                <button type="button" aria-label="Previous photo" onClick={() => setActiveImage((current) => (current - 1 + detail.images.length) % detail.images.length)}><ChevronLeft /></button>
                <span>{displayedImage + 1} / {detail.images.length}</span>
                <button type="button" aria-label="Next photo" onClick={() => setActiveImage((current) => (current + 1) % detail.images.length)}><ChevronRight /></button>
              </div>
            )}
            {!showProof && detail.images.length > 1 && <div className="experience-thumbnails">
              {detail.images.map((image, index) => (
                <button className={index === displayedImage ? "is-active" : ""} type="button" onClick={() => setActiveImage(index)} key={`${image}-${index}`} aria-label={`View photo ${index + 1}`}>
                  <img src={assetPath(image)} alt="" />
                </button>
              ))}
            </div>}
          </div>
          <div className="experience-copy">
            <p className="experience-meta">{detail.meta}</p>
            <h2 id="experience-title">{detail.title}</h2>
            <p>{detail.description}</p>
            {detail.tags && <div className="experience-tags">{detail.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}
            <h3>Key takeaways</h3>
            <ul>{detail.takeaways.map((takeaway) => <li key={takeaway}><CheckCircle2 size={17} />{takeaway}</li>)}</ul>
          </div>
        </div>
      </section>
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

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [menuOpen]);

  const toggleTheme = (event: ReactMouseEvent<HTMLButtonElement>) => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = bounds.left + bounds.width / 2;
    const y = bounds.top + bounds.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    root.style.setProperty("--theme-x", `${x}px`);
    root.style.setProperty("--theme-y", `${y}px`);
    root.style.setProperty("--theme-radius", `${radius}px`);

    const applyTheme = () => {
      setTheme(nextTheme);
      root.dataset.theme = nextTheme;
      localStorage.setItem("javier-portfolio-theme", nextTheme);
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", nextTheme === "dark" ? "#07111f" : "#f4f8fb");
    };
    const transitionDocument = document as Document & {
      startViewTransition?: (update: () => void) => { finished: Promise<void> };
    };
    if (!transitionDocument.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      applyTheme();
      return;
    }
    root.classList.add("theme-transitioning");
    transitionDocument.startViewTransition(applyTheme).finished.finally(() => {
      root.classList.remove("theme-transitioning");
    });
  };

  return (
    <header className="site-header">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="header-inner shell">
        <a className="brand" href="#top" aria-label={`${portfolio.name}, back to top`}>
          <span>&lt;</span>{portfolio.initials}<span>/&gt;</span>
        </a>

        <nav className={`primary-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <div className="mobile-nav-heading"><small>NAVIGATION_PROTOCOL</small><strong>Where should we go?</strong></div>
          {navLinks.map((link, index) => (
            <a
              href={link.href}
              key={link.href}
              className={activeSection === link.href.slice(1) ? "is-active" : ""}
              aria-current={activeSection === link.href.slice(1) ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mobile-nav-index">0{index + 1}</span>{link.label}<ArrowUpRight className="mobile-nav-arrow" size={18} />
            </a>
          ))}
          <div className="mobile-nav-footer"><span className="status-dot" /> Available for opportunities</div>
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
            src={assetPath(portfolio.profileImage)}
            alt={portfolio.profileAlt}
            onError={(event) => {
              const image = event.currentTarget;
              if (!image.dataset.fallback) {
                image.dataset.fallback = "github";
                image.src = portfolio.profileFallbackImage;
                return;
              }
              if (image.dataset.fallback === "github") {
                image.dataset.fallback = "placeholder";
                image.src = `${import.meta.env.BASE_URL}profile-placeholder.svg`;
              }
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
  const [typedRole, setTypedRole] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = portfolio.roles[roleIndex];
    let delay = deleting ? 38 : 72;
    if (!deleting && typedRole === role) delay = 1500;
    if (deleting && typedRole === "") delay = 260;

    const timer = window.setTimeout(() => {
      if (!deleting && typedRole === role) {
        setDeleting(true);
      } else if (deleting && typedRole === "") {
        setDeleting(false);
        setRoleIndex((current) => (current + 1) % portfolio.roles.length);
      } else {
        setTypedRole(role.slice(0, typedRole.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [deleting, roleIndex, typedRole]);

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
            <span className="role-text" aria-hidden="true">{typedRole}<i className="typing-cursor" /></span>
            <span className="sr-only" aria-live="polite">{portfolio.roles[roleIndex]}</span>
          </div>
          <p className="hero-summary hero-enter hero-enter-five">{portfolio.summary}</p>
          <div className="hero-facts hero-enter hero-enter-five">
            <span><GraduationCap size={16} /> {portfolio.course}</span>
            <span><MapPin size={16} /> {portfolio.location}</span>
            <span className="hero-credential"><Award size={16} /> {portfolio.primaryCredential.title} · {portfolio.primaryCredential.date}</span>
          </div>
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
  const [activePrinciple, setActivePrinciple] = useState(0);

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
          <div className="principles-grid" data-reveal>
            {portfolio.about.principles.map((principle, index) => (
              <button
                className={`principle-card interactive-card ${activePrinciple === index ? "is-active" : ""}`}
                type="button"
                aria-expanded={activePrinciple === index}
                aria-controls="mobile-principle-detail"
                onClick={() => setActivePrinciple(index)}
                key={principle.number}
              >
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </button>
            ))}
            <div className="principle-mobile-detail" id="mobile-principle-detail" aria-live="polite">
              <strong>{portfolio.about.principles[activePrinciple].title}</strong>
              <p>{portfolio.about.principles[activePrinciple].text}</p>
            </div>
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

type AwardGroup = (typeof portfolio.awardGroups)[number];

type AwardDeckProps = {
  group: AwardGroup;
  index: number;
  onOpen: (detail: ExperienceDetail) => void;
};

function AwardDeck({ group, index, onOpen }: AwardDeckProps) {
  const [activeCard, setActiveCard] = useState(0);
  const pointerStart = useRef<number | null>(null);
  const suppressClick = useRef(false);
  const count = group.cards.length;
  const GroupIcon = awardGroupIcons[group.id];
  const showNext = () => setActiveCard((current) => (current + 1) % count);
  const showPrevious = () => setActiveCard((current) => (current - 1 + count) % count);
  const cycleCard = () => {
    if (suppressClick.current) {
      suppressClick.current = false;
      return;
    }
    if (count > 1) showNext();
  };

  return (
    <article className={`award-deck award-deck-${group.id}`} data-reveal style={revealDelay(index * 100)}>
      <header className="award-deck-header">
        <span className="award-deck-icon"><GroupIcon size={20} /></span>
        <div>
          <small>Collection 0{index + 1}</small>
          <h3>{group.label}</h3>
        </div>
        <span className="award-deck-count">{String(activeCard + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}</span>
      </header>

      <div className="award-deck-stage">
        {group.cards.map((card, cardIndex) => {
          const position = (cardIndex - activeCard + count) % count;
          const stackPosition = Math.min(position, 3);
          const cardStyle = {
            "--stack-position": stackPosition,
            zIndex: count - position,
          } as CSSProperties;

          return (
            <article
              className={`award-photo-card ${position === 0 ? "is-active" : ""} ${position > 2 ? "is-hidden" : ""}`}
              style={cardStyle}
              aria-hidden={position !== 0}
              aria-label={position === 0 && count > 1 ? `${card.title}. Activate to show the next card.` : undefined}
              role={position === 0 && count > 1 ? "button" : undefined}
              tabIndex={position === 0 && count > 1 ? 0 : -1}
              onClick={position === 0 ? cycleCard : undefined}
              onKeyDown={position === 0 && count > 1 ? (event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  showNext();
                }
              } : undefined}
              onPointerDown={position === 0 && count > 1 ? (event) => {
                pointerStart.current = event.clientX;
              } : undefined}
              onPointerUp={position === 0 && count > 1 ? (event) => {
                if (pointerStart.current === null) return;
                const distance = event.clientX - pointerStart.current;
                pointerStart.current = null;
                if (Math.abs(distance) < 45) return;
                suppressClick.current = true;
                if (distance < 0) showNext();
                else showPrevious();
              } : undefined}
              key={`${group.id}-${card.title}`}
            >
              <span className="award-photo-wrap">
                <img
                  src={assetPath(card.image)}
                  alt={card.imageAlt}
                  onError={(event) => {
                    const image = event.currentTarget;
                    if (image.dataset.fallback) return;
                    image.dataset.fallback = "true";
                    image.src = assetPath(group.fallbackImage);
                  }}
                />
                <span className="award-photo-date">{card.date}</span>
              </span>
              <span className="award-card-body">
                <small>{card.organization}</small>
                <strong>{card.title}</strong>
                <span>{card.description}</span>
                <button
                  className="view-experience"
                  type="button"
                  tabIndex={position === 0 ? 0 : -1}
                  onClick={(event) => {
                    event.stopPropagation();
                    onOpen({
                    title: card.title,
                    label: group.label,
                    date: card.date,
                    meta: card.organization,
                    description: card.description,
                    takeaways: card.takeaways,
                    images: card.images,
                    imageAlt: card.imageAlt,
                    fallbackImage: group.fallbackImage,
                      proofUrl: card.proofUrl,
                    });
                  }}
                >
                  View experience <ArrowUpRight size={16} />
                </button>
              </span>
            </article>
          );
        })}
      </div>

      {count > 1 ? (
        <footer className="award-deck-controls">
          <button type="button" onClick={showPrevious} aria-label={`Previous ${group.label} card`}>
            <ChevronLeft size={17} />
          </button>
          <div className="award-deck-dots" aria-hidden="true">
            {group.cards.map((card, cardIndex) => (
              <i className={cardIndex === activeCard ? "is-active" : ""} key={card.title} />
            ))}
          </div>
          <button type="button" onClick={showNext} aria-label={`Next ${group.label} card`}>
            <ChevronRight size={17} />
          </button>
        </footer>
      ) : <p className="award-single-label">Single experience</p>}
    </article>
  );
}

function AwardsSection({ onOpen }: { onOpen: (detail: ExperienceDetail) => void }) {
  return (
    <section className="section awards-section" id="awards">
      <div className="shell">
        <SectionHeading
          eyebrow="Recognition"
          title="Milestones worth remembering."
          description="Awards, distinctions, and moments that reflect growth and meaningful contribution."
        />
        <div className="award-decks-grid">
          {portfolio.awardGroups.map((group, index) => (
            <AwardDeck group={group} index={index} onOpen={onOpen} key={group.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventsSection({ onOpen }: { onOpen: (detail: ExperienceDetail) => void }) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const scrollTimeline = (direction: number) => {
    timelineRef.current?.scrollBy({ left: direction * 390, behavior: "smooth" });
  };

  return (
    <section className="section events-section" id="events">
      <div
        className="events-photo-bg"
        style={{
          backgroundImage: `url(${assetPath("images/events/events-background.jpg")}), url(${assetPath("images/events/events-background-placeholder.svg")})`,
        }}
        aria-hidden="true"
      />
      <div className="events-grid-bg" aria-hidden="true" />
      <div className="shell">
        <SectionHeading
          eyebrow="Events and conferences"
          title="Beyond the classroom, into the industry."
          description="A timeline of technology spaces that expanded how I see connected systems, infrastructure, and emerging products."
        />
        <div className="event-scroll-controls" aria-label="Event timeline controls">
          <span>Scroll through events</span>
          <button type="button" onClick={() => scrollTimeline(-1)} aria-label="Scroll to previous event"><ChevronLeft size={18} /></button>
          <button type="button" onClick={() => scrollTimeline(1)} aria-label="Scroll to next event"><ChevronRight size={18} /></button>
        </div>
        <div className="events-timeline" data-reveal ref={timelineRef}>
          {portfolio.events.map((event, index) => (
            <article
              className="event-card"
              data-reveal
              style={{
                ...revealDelay(index * 120),
                "--event-image": `url(${assetPath(event.images[0] ?? "images/events/events-background-placeholder.svg")})`,
              } as CSSProperties}
              key={event.title}
            >
              <div className="event-year"><span>{event.year}</span><i /></div>
              <div className="event-card-content">
                <div className="event-icon"><CalendarDays size={20} /></div>
                <small>{event.date} // {event.venue}</small>
                <h3>{event.shortTitle}</h3>
                <p>{event.description}</p>
                <div className="event-tags">{event.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <button
                  className="view-experience"
                  type="button"
                  onClick={() => onOpen({
                    title: event.title,
                    label: "Event experience",
                    date: event.date,
                    meta: `${event.role} | ${event.venue}`,
                    description: event.description,
                    tags: event.tags,
                    takeaways: event.takeaways,
                    images: event.images,
                    imageAlt: `${event.title} experience photo`,
                    proofUrl: event.proofUrl,
                  })}
                >
                  View experience <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type TimelineProps = {
  type: "education" | "leadership" | "experience";
};

function Timeline({ type }: TimelineProps) {
  const isEducation = type === "education";
  const isLeadership = type === "leadership";
  const items = isEducation ? portfolio.education : isLeadership ? portfolio.leadership : portfolio.professionalExperience;
  const Icon = isEducation ? GraduationCap : isLeadership ? Users : BriefcaseBusiness;
  const title = isEducation ? "Education" : isLeadership ? "Leadership" : "Experience";
  const track = isEducation ? "01" : isLeadership ? "02" : "03";

  return (
    <div className="journey-column" data-reveal>
      <div className="journey-column-title">
        <span><Icon size={20} /></span>
        <div>
          <p>Track {track}</p>
          <h3>{title}</h3>
        </div>
      </div>
      {items.length > 0 ? <div className="timeline">
        {items.map((item, index) => (
          <article className="timeline-item" style={revealDelay(index * 90)} key={`${item.period}-${index}`}>
            <div className="timeline-node"><i /></div>
            <span className="timeline-period">{item.period}</span>
            <h4>{isEducation && "degree" in item ? item.degree : "role" in item ? item.role : ""}</h4>
            <h5>{isEducation && "school" in item ? item.school : "organization" in item ? item.organization : ""}</h5>
            <p>{item.detail}</p>
          </article>
        ))}
      </div> : <div className="experience-empty">
        <Sparkles size={24} />
        <span>Next chapter</span>
        <h4>Ready for my first professional opportunity.</h4>
        <p>I am currently open to internships and entry-level opportunities where I can learn, contribute, and grow with a team.</p>
        <a href="#contact">Start a conversation <ArrowRight size={16} /></a>
      </div>}
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
          <Timeline type="experience" />
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

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
                  <div className="skill-logos" role="list" aria-label={`${group.label} skills`}>
                    {group.items.map((item) => {
                      const Logo = technologyIcons[item.icon];
                      const logoStyle = { "--logo-color": item.color } as CSSProperties;
                      return (
                        <div className="skill-logo-item" role="listitem" key={item.name}>
                          <button
                            className={`skill-logo ${activeSkill === item.name ? "is-active" : ""}`}
                            type="button"
                            aria-label={item.name}
                            aria-pressed={activeSkill === item.name}
                            style={logoStyle}
                            onClick={() => setActiveSkill((current) => current === item.name ? null : item.name)}
                          >
                            <Logo size={30} aria-hidden="true" />
                            <span>{item.name}</span>
                          </button>
                        </div>
                      );
                    })}
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
                    <img
                      className="project-image"
                      src={assetPath(project.image)}
                      alt=""
                      onError={(event) => {
                        const image = event.currentTarget;
                        if (image.dataset.fallback) return;
                        image.dataset.fallback = "true";
                        image.src = assetPath(project.fallbackImage);
                      }}
                    />
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
                   {project.sourceUrl ? (
                     <a href={project.sourceUrl} target="_blank" rel="noreferrer">
                       <Github size={17} /> View source <ArrowUpRight size={15} />
                     </a>
                   ) : <span>Source unavailable</span>}
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
  const [activeExperience, setActiveExperience] = useState<ExperienceDetail | null>(null);
  const [showIntro, setShowIntro] = useState(() => sessionStorage.getItem("javier-intro-seen") !== "true");

  const closeIntro = () => {
    sessionStorage.setItem("javier-intro-seen", "true");
    setShowIntro(false);
  };

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
      {showIntro && <OpeningSequence onComplete={closeIntro} />}
      <Header />
      <main id="main-content">
        <Hero onOpenAssistant={() => setAssistantOpen(true)} />
        <About />
        <AwardsSection onOpen={setActiveExperience} />
        <EventsSection onOpen={setActiveExperience} />
        <Journey />
        <Skills />
        <Work />
        <Contact onOpenAssistant={() => setAssistantOpen(true)} />
      </main>
      <Footer />
      {activeExperience && (
        <ExperienceModal
          detail={activeExperience}
          key={`${activeExperience.title}-${activeExperience.date}`}
          onClose={() => setActiveExperience(null)}
        />
      )}
      <Chatbot open={assistantOpen} onOpenChange={setAssistantOpen} />
    </>
  );
}
