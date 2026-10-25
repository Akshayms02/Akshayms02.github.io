import { useState } from 'react'
import {
  experience,
  profile,
  projects,
  skills,
  solutions,
  tags,
} from './data'
import './App.css'

const faq = [
  {
    q: 'What kind of roles are you looking for?',
    a: 'Full-stack or backend-leaning roles where I can own features across web, APIs, and product analytics.',
  },
  {
    q: 'What did you do at HOGR?',
    a: 'Shipped food-delivery features, AI companion products, Flutter client work, and owned GA4 / GTM / Meta Pixel across live apps.',
  },
  {
    q: 'Are CureCue and Harmony Hue client work?',
    a: 'No — those are personal learning projects from when I was building my full-stack foundation. Professional work is listed under Experience.',
  },
  {
    q: 'How can we start a conversation?',
    a: 'Email me or reach out on LinkedIn. Happy to walk through projects, stack fit, and what you need built.',
  },
]

function Icon({ name }: { name: 'home' | 'work' | 'about' | 'mail' }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }
  if (name === 'home') {
    return (
      <svg {...common}>
        <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
      </svg>
    )
  }
  if (name === 'work') {
    return (
      <svg {...common}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    )
  }
  if (name === 'about') {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 19c1.5-3.2 4-4.8 7-4.8s5.5 1.6 7 4.8" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="page">
      <header className="nav-wrap">
        <nav className="pill-nav" aria-label="Primary">
          <a href="#top" className="nav-item active" aria-label="Home">
            <Icon name="home" />
          </a>
          <a href="#projects" className="nav-item" aria-label="Projects">
            <Icon name="work" />
          </a>
          <a href="#about" className="nav-item" aria-label="About">
            <Icon name="about" />
          </a>
          <a href="#contact" className="nav-item" aria-label="Contact">
            <Icon name="mail" />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="tag-row fade up d1">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="fade up d2">
            Bold thinking,
            <br />
            Better code.
          </h1>
          <p className="hero-sub fade up d3">
            {profile.name} — {profile.title}. Previously at HOGR, now open to
            full-stack roles.
          </p>
          <div className="hero-actions fade up d4">
            <a className="btn mint" href="#projects">
              See work
            </a>
            <a className="btn ghost" href="#contact">
              Let&apos;s talk
            </a>
          </div>
          <p className="status fade up d5">
            <span className="dot" />
            {profile.status}
          </p>
        </section>

        <section className="section" id="projects">
          <div className="section-bar">
            <h2>
              Projects <span>({projects.length})</span>
            </h2>
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              See all
            </a>
          </div>
          <p className="section-note">
            Personal builds from my learning path — separate from HOGR work.
          </p>
          <div className="project-stack">
            {projects.map((project) => (
              <a
                key={project.name}
                className="project-card"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="project-media">
                  <img src={project.image} alt="" />
                  <span className="chip">{project.category}</span>
                  <div className="project-brand">
                    <strong>{project.name}</strong>
                    <em>{project.kind}</em>
                  </div>
                </div>
                <div className="project-meta">
                  <h3>{project.name}</h3>
                  <p>{project.blurb}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="solutions">
          <div className="section-bar">
            <h2>
              Solutions <span>(4)</span>
            </h2>
          </div>
          <div className="solutions-grid">
            {solutions.map((item) => (
              <article key={item.num} className="solution-card">
                <span>{item.num}.</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-bar">
            <h2>Experience</h2>
          </div>
          <div className="experience-list">
            {experience.map((job) => (
              <article key={`${job.role}-${job.period}`}>
                <header>
                  <h3>
                    {job.role} <span>@ {job.company}</span>
                  </h3>
                  <p>{job.period}</p>
                </header>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-bar">
            <h2>About</h2>
          </div>
          <p className="about-lead">{profile.summary}</p>
          <p className="about-lead soft">{profile.location}</p>
          <div className="skill-list">
            {skills.map((group) => (
              <div key={group.label} className="skill-row">
                <h3>{group.label}</h3>
                <p>{group.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section-bar">
            <h2>
              Most asked questions <span>({faq.length})</span>
            </h2>
          </div>
          <div className="faq-list">
            {faq.map((item, index) => {
              const open = openFaq === index
              return (
                <button
                  key={item.q}
                  type="button"
                  className={`faq-item${open ? ' open' : ''}`}
                  onClick={() => setOpenFaq(open ? null : index)}
                  aria-expanded={open}
                >
                  <span className="faq-q">
                    {item.q}
                    <span aria-hidden="true">{open ? '−' : '+'}</span>
                  </span>
                  {open ? <span className="faq-a">{item.a}</span> : null}
                </button>
              )
            })}
          </div>
        </section>

        <section className="section contact-band" id="contact">
          <div className="contact-card">
            <p className="eyebrow">Work together</p>
            <h2>Are you ready to take the next step?</h2>
            <p>
              Have a product idea or an open role? Let&apos;s shape something
              you&apos;re proud to ship.
            </p>
            <div className="hero-actions">
              <a className="btn mint" href={profile.links.email}>
                Email me
              </a>
              <a
                className="btn ghost"
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <p className="phone">{profile.phone}</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <h2>Let&apos;s create something solid together</h2>
        <div className="footer-links">
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.links.email}>Email</a>
        </div>
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </div>
  )
}

export default App
