import { experience, profile, projects, skills } from './data'
import './App.css'

function App() {
  return (
    <div className="page">
      <div className="atmosphere" aria-hidden="true">
        <div className="glow glow-a" />
        <div className="glow glow-b" />
        <div className="glow glow-c" />
        <div className="grain" />
      </div>

      <header className="nav">
        <nav className="nav-left" aria-label="Primary left">
          <a href="#work">
            Work <span>({projects.length})</span>
          </a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="avatar" href="#top" aria-label={profile.name}>
          AM
        </a>
        <nav className="nav-right" aria-label="Primary right">
          <a href="#about">About</a>
          <a className="chat-link" href={profile.links.email}>
            Let&apos;s chat →
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="hero-kicker fade up d1">{profile.name}</p>
          <h1 className="fade up d2">
            Building apps for teams who care about{' '}
            <em>shipping.</em>
          </h1>
          <p className="hero-sub fade up d3">
            MERN / Full-Stack developer. Previously at HOGR — now looking for
            the next product team to build with.
          </p>
          <div className="hero-actions fade up d4">
            <a className="btn btn-primary" href="#work">
              View work
            </a>
            <a className="btn btn-ghost" href={profile.links.email}>
              Get in touch
            </a>
          </div>
          <p className="status-pill fade up d5">
            <span className="dot" aria-hidden="true" />
            {profile.status}
          </p>
        </section>

        <section className="section" id="work">
          <div className="section-head">
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title">Projects that show the stack end to end</h2>
          </div>
          <div className="work-grid">
            {projects.map((project) => (
              <a
                key={project.name}
                className={`work-card accent-${project.accent}`}
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="work-visual">
                  <img src={project.image} alt="" />
                </div>
                <div className="work-copy">
                  <div>
                    <p className="work-kind">{project.kind}</p>
                    <h3>{project.name}</h3>
                    <p className="work-blurb">{project.blurb}</p>
                  </div>
                  <span className="work-link">View on GitHub →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-head">
            <p className="eyebrow">Experience</p>
            <h2 className="section-title">Previously at HOGR</h2>
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
          <div className="section-head">
            <p className="eyebrow">About</p>
            <h2 className="section-title">
              {profile.title}
              <span className="title-muted"> · {profile.tagline}</span>
            </h2>
          </div>
          <p className="about-lead">{profile.summary}</p>
          <div className="skill-list">
            {skills.map((group) => (
              <div key={group.label} className="skill-row">
                <h3>{group.label}</h3>
                <p>{group.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let&apos;s build the next one together.</h2>
          <p className="about-lead">
            Open to full-stack roles and product-minded engineering work.
          </p>
          <div className="hero-actions left">
            <a className="btn btn-primary" href={profile.links.email}>
              {profile.email}
            </a>
            <a
              className="btn btn-ghost"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn btn-ghost"
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <p className="phone">{profile.phone}</p>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Available for full-stack roles</span>
      </footer>
    </div>
  )
}

export default App
