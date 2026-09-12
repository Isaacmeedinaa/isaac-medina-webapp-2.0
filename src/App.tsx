import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Compass,
  Copy,
  Layers3,
  MapPin,
  Menu,
  Plus,
  ShieldCheck,
  Smartphone,
  X,
} from 'lucide-react'
import { capabilities, experience, profile, projects } from './content'
import type { Project } from './content'
import ProjectDialog from './components/ProjectDialog'

const navItems = [
  { label: 'Work', id: 'work' },
  { label: 'Experience', id: 'experience' },
  { label: 'About', id: 'about' },
]
const capabilityIcons = {
  mobile: Smartphone,
  layers: Layers3,
  shield: ShieldCheck,
  compass: Compass,
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [filter, setFilter] = useState('All work')
  const [project, setProject] = useState<Project | null>(null)
  const [copyStatus, setCopyStatus] = useState('')
  const menuButton = useRef<HTMLButtonElement>(null)
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const visibleProjects = projects.filter(
    (item) => filter === 'All work' || item.category === filter,
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-15% 0px -60% 0px', threshold: 0 },
    )
    document.querySelectorAll('main > section[id]').forEach((section) => observer.observe(section))
    return () => {
      observer.disconnect()
      if (copyTimer.current) clearTimeout(copyTimer.current)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }
    const onResize = () => {
      if (window.innerWidth > 760) setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopyStatus('Email copied!')
    } catch {
      setCopyStatus('Copy the email address shown above, or use the email link.')
    }
    if (copyTimer.current) clearTimeout(copyTimer.current)
    copyTimer.current = setTimeout(() => setCopyStatus(''), 4500)
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="shell header-inner">
          <a
            className="brand"
            href="#home"
            onClick={() => setMenuOpen(false)}
            aria-label="Isaac Medina, home"
          >
            <span className="monogram">
              im<span>.</span>
            </span>
            <span>
              Isaac Medina<span className="brand-role">SOFTWARE ENGINEER</span>
            </span>
          </a>
          <button
            ref={menuButton}
            className="menu-toggle icon-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav
            id="main-nav"
            aria-label="Main navigation"
            className={menuOpen ? 'main-nav is-open' : 'main-nav'}
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? 'location' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
              Let’s talk <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero shell" id="home" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" /> ENGINEER BY TRADE. BUILDER AT HEART.
            </p>
            <h1 id="hero-title">
              Great products.
              <br />
              Built with <span className="serif-accent">intent.</span>
            </h1>
            <p className="hero-description">
              I’m Isaac, a senior software engineer turning complex challenges into thoughtful
              mobile and web experiences. From the first commit to the production launch, I own the
              details.
            </p>
            <div className="hero-actions">
              <a className="button button-blue" href="#work">
                Explore my work <ArrowDown size={17} />
              </a>
              <a className="text-link" href={profile.resume} download>
                Download résumé <ArrowDownToLine size={16} />
              </a>
            </div>
            <div className="hero-note">
              <MapPin size={15} />
              <span>Chicago, IL</span>
              <span className="note-divider" />
              <span>8+ years building what’s next</span>
            </div>
          </div>
          <div className="portrait-area">
            <div className="portrait-decoration" aria-hidden="true">
              <Plus />
              <Plus />
              <Plus />
              <Plus />
            </div>
            <div className="portrait-frame">
              <div className="portrait-top">
                <span>SOFTWARE ENGINEER &amp; PRODUCT BUILDER</span>
                <span>↗</span>
              </div>
              <img
                className="portrait"
                src="/images/isaac-medina.png"
                alt="Isaac Medina, senior software engineer based in Chicago"
                width="612"
                height="612"
                fetchPriority="high"
              />
              <div className="portrait-bottom">
                <span>ISAAC MEDINA</span>
                <Code2 size={20} />
                <span>BASED IN CHICAGO</span>
              </div>
            </div>
            <div className="portrait-sticker">
              <span className="sticker-symbol">↗</span>
              <div>
                From zero to shipped.<span>That’s my kind of work.</span>
              </div>
            </div>
          </div>
        </section>

        <div className="trust-strip shell">
          <p>
            REAL PRODUCTS.
            <br />
            <strong>EXPERIENCED TEAMS.</strong>
          </p>
          <div className="company-wordmark finra-wordmark">
            FINRA<span>Financial Industry Regulatory Authority</span>
          </div>
          <div className="company-wordmark vivid-wordmark">
            vivid<span>seats</span>
            <i aria-hidden="true">▰</i>
          </div>
          <div className="company-wordmark walmart-wordmark">
            Walmart<span aria-hidden="true">✳</span>
          </div>
          <div className="company-wordmark sams-wordmark">
            <span className="sams-diamond" aria-hidden="true" />
            Sam’s Club
          </div>
        </div>

        <section id="work" className="work-section section-padding" aria-labelledby="work-title">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow section-eyebrow">
                  <span>01 / SELECTED WORK</span>
                </p>
                <h2 id="work-title">
                  Less talk. <span className="muted">More shipped.</span>
                </h2>
              </div>
              <p>
                A few products I’ve helped bring to life.
                <br />
                Real teams, real challenges, real impact.
              </p>
            </div>
            <div className="work-toolbar">
              <div className="filters" role="group" aria-label="Filter projects">
                {['All work', 'Enterprise', 'Consumer'].map((item) => (
                  <button
                    key={item}
                    aria-pressed={filter === item}
                    className={filter === item ? 'filter active' : 'filter'}
                    onClick={() => setFilter(item)}
                  >
                    {item}
                    {item === 'All work' && <span>03</span>}
                  </button>
                ))}
              </div>
              <span className="work-count" aria-live="polite">
                0{visibleProjects.length} PROJECT{visibleProjects.length === 1 ? '' : 'S'}
              </span>
            </div>
            <div className="project-grid">
              {visibleProjects.map((item) => (
                <article className={`project-card ${item.id}`} key={item.id}>
                  <button
                    className="project-visual"
                    onClick={() => setProject(item)}
                    aria-label={`Explore ${item.name}`}
                  >
                    <span className="project-visual-top">
                      <span className="project-art-label">
                        {item.id === 'finra'
                          ? 'BUILT FOR RESOLUTION.'
                          : item.id === 'vivid'
                            ? 'MADE FOR THE MOMENT.'
                            : 'BUILT FOR EVERY DAY.'}
                      </span>
                      <ArrowUpRight size={19} />
                    </span>
                    <span className="project-art-word" aria-hidden="true">
                      {item.company}
                    </span>
                    <span className="project-orbit" aria-hidden="true" />
                    <img
                      className="project-screen"
                      src={`/images/${item.id}-screen.jpg`}
                      alt={`${item.name} official app preview`}
                      loading="lazy"
                      width="221"
                      height="480"
                    />
                    <img
                      className="project-app-icon"
                      src={`/images/${item.id}-icon.jpg`}
                      alt=""
                      loading="lazy"
                      width="64"
                      height="64"
                    />
                    <span className="project-visual-bottom">
                      {item.id === 'vivid'
                        ? 'MOBILE COMMERCE'
                        : item.id === 'finra'
                          ? 'DISPUTE RESOLUTION'
                          : 'ASSOCIATE EXPERIENCE'}
                      <span>iOS / ANDROID</span>
                    </span>
                  </button>
                  <div className="project-copy">
                    <p className="small-label">{item.role}</p>
                    <h3>
                      <button onClick={() => setProject(item)}>
                        {item.name}
                        <ArrowUpRight size={23} />
                      </button>
                    </h3>
                    <p className="project-description">{item.description}</p>
                    <div className="tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="work-footnote">
              <span>
                <span className="status-dot" /> A few highlights from 8+ years in engineering.
              </span>
              <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
                More on GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="experience-section section-padding shell"
          aria-labelledby="experience-title"
        >
          <div className="experience-intro">
            <p className="eyebrow section-eyebrow">02 / THE EXPERIENCE</p>
            <h2 id="experience-title">
              A builder’s mindset.
              <br />
              <span className="muted">Enterprise experience.</span>
            </h2>
            <p>
              I’ve worked where reliability is essential and where the next idea needs to move fast.
              I bring both perspectives to every team.
            </p>
            <a className="text-link" href={profile.resume} download>
              The full story, on paper <ArrowDownToLine size={16} />
            </a>
            <div className="experience-stats">
              <div>
                <strong>
                  8<span>+</span>
                </strong>
                <span>YEARS OF EXPERIENCE</span>
              </div>
              <div>
                <strong aria-label="Zero to one">
                  0<span> → </span>1
                </strong>
                <span>LED FINRA’S MOBILE LAUNCH</span>
              </div>
              <div>
                <strong>3</strong>
                <span>MAJOR BRANDS</span>
              </div>
              <div>
                <strong>
                  25<span>+</span>
                </strong>
                <span>REUSABLE COMPONENTS AT FINRA</span>
              </div>
              <div className="experience-stat-ai">
                <strong>2</strong>
                <span>CUSTOM KIRO AI SKILLS</span>
                <p>Release readiness checks · Code maintainability &amp; JSDoc documentation</p>
              </div>
            </div>
          </div>
          <div className="timeline">
            {experience.map((item, index) => (
              <details
                className="experience-item"
                key={item.company}
                open={index === 0 ? true : undefined}
              >
                <summary>
                  <span className="timeline-dot" />
                  <span className="experience-summary">
                    <span className="experience-meta">
                      <span>{item.period}</span>
                      {index === 0 && <span className="current-tag">CURRENT</span>}
                    </span>
                    <span className="experience-company">{item.company}</span>
                    <span className="experience-role">{item.role}</span>
                  </span>
                  <ChevronDown className="experience-chevron" size={20} />
                </summary>
                <div className="experience-details">
                  <h3>{item.summary}</h3>
                  <p>{item.details}</p>
                  <div className="tags">
                    {item.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="capability-section section-padding" aria-labelledby="capability-title">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow section-eyebrow">03 / HOW I CAN HELP</p>
                <h2 id="capability-title">
                  The craft behind <span className="muted">the code.</span>
                </h2>
              </div>
              <p>
                Good engineering connects the details
                <br />
                to the bigger picture.
              </p>
            </div>
            <div className="capability-grid">
              {capabilities.map((item, index) => {
                const Icon = capabilityIcons[item.icon as keyof typeof capabilityIcons]
                return (
                  <article className="capability" key={item.title}>
                    <div className="capability-top">
                      <Icon size={25} strokeWidth={1.5} />
                      <span>0{index + 1}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <div className="capability-tools">{item.tools}</div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="about-section section-padding shell"
          aria-labelledby="about-title"
        >
          <div className="about-aside">
            <p className="eyebrow section-eyebrow">04 / BEYOND THE JOB TITLE</p>
            <div className="about-signature">
              Isaac<span>Medina.</span>
              <ArrowUpRight aria-hidden="true" />
            </div>
            <div className="about-location">
              <MapPin size={16} /> Chicago roots. Product mindset.
            </div>
            <div className="about-learning">
              <p className="eyebrow">CURRENTLY EXPLORING</p>
              <h3>Learning AI engineering.</h3>
              <p>
                I’m using Kiro and Codex in my workflow and diving into Claude as I learn more about
                AI engineering. I’m exploring how these tools can help me build better software,
                from planning an idea to working through the implementation.
              </p>
              <div className="tags" aria-label="AI tools I’m exploring">
                <span>Kiro</span>
                <span>Codex</span>
                <span>Claude</span>
              </div>
            </div>
          </div>
          <div className="about-content">
            <h2 id="about-title">
              I care about what happens
              <br />
              <span className="serif-accent">after launch.</span>
            </h2>
            <p>
              A product isn’t finished when the code is merged. It has to work for the person using
              it, the team maintaining it, and the business behind it.
            </p>
            <p>
              That’s why I like owning the whole journey. I’m as comfortable shaping architecture
              and untangling an API as I am refining an interaction, tracking down a production
              issue, or helping another engineer find their footing.
            </p>
            <p>
              My background spans enterprise teams and founder-led products. The common thread? A
              practical, hands-on approach to building things that hold up in the real world.
            </p>
            <h3 className="about-personal-heading">Away from the keyboard.</h3>
            <p>
              I have Mexican heritage and call Chicago home. My faith is deeply important to me and
              a central part of who I am.
            </p>
            <p>
              Outside of engineering, I enjoy gaming, especially Minecraft, settling in for a movie,
              and meeting new people. Always happy to trade game recommendations or hear what
              you’ve been watching lately.
            </p>
            <div className="about-footer">
              <span>
                <span className="small-label">ALWAYS A STUDENT</span>Flatiron School · Software
                Engineering
              </span>
              <a
                className="icon-button"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Isaac Medina on LinkedIn"
              >
                <span className="linkedin-mark" aria-hidden="true">
                  in
                </span>
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="shell contact-inner">
            <div className="contact-heading">
              <p className="eyebrow">
                <span className="status-dot" /> GREAT WORK STARTS WITH A CONVERSATION
              </p>
              <h2 id="contact-title">
                Something in mind?
                <br />
                Let’s <span className="serif-accent">build it.</span>
              </h2>
              <p>
                A product to launch. A platform to grow. A team to make stronger.
                <br />
                I’d love to hear what you’re working on.
              </p>
            </div>
            <a
              className="contact-arrow"
              href={`mailto:${profile.email}`}
              aria-label="Email Isaac to start a conversation"
            >
              <ArrowUpRight strokeWidth={1.2} />
            </a>
            <div className="contact-bottom">
              <div className="email-group">
                <a href={`mailto:${profile.email}`} className="email-link">
                  {profile.email}
                </a>
                <button
                  className="icon-button copy-button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                >
                  {copyStatus === 'Email copied!' ? <Check size={18} /> : <Copy size={18} />}
                </button>
                <span className="copy-status" role="status">
                  {copyStatus}
                </span>
              </div>
              <div className="social-links">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <ArrowUpRight size={16} />
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight size={16} />
                </a>
                <a href={profile.resume} download>
                  Résumé <ArrowDownToLine size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer shell">
        <a className="footer-brand" href="#home">
          Isaac Medina<span>© {new Date().getFullYear()}</span>
        </a>
        <span>Thoughtfully built. Always evolving.</span>
        <a href="#home">
          Back to top <ArrowRight className="up-arrow" size={16} />
        </a>
      </footer>
      <ProjectDialog project={project} onClose={() => setProject(null)} />
    </>
  )
}
