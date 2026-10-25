import { experience, profile, projects, skills } from './data'
import './App.css'

function App() {
  return (
    <div className="page">
      <div className="atmosphere" aria-hidden="true">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="grain" />
      </div>

      <header className="nav">
        <a className="nav-brand" href="#top">
          AM
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="hero-kicker rise delay-1">{profile.title}</p>
          <h1 className="hero-brand rise delay-2">{profile.name}</h1>
          <p className="hero-line rise delay-3">
            Building production web &amp; mobile products with a MERN core —
            and the discipline to ship them clean.
          </p>
          <p className="hero-support rise delay-4">{profile.summary}</p>
          <div className="hero-actions rise delay-5">
            <a className="btn btn-primary" href="#work">
              See selected work
            </a>
            <a className="btn btn-ghost" href={profile.links.email}>
              Email me
            </a>
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-head">
            <h2>Selected work</h2>
            <p>Personal builds that show the full stack end to end.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <a
                key={project.name}
                className="project-row"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <h3>{project.name}</h3>
                  <p className="project-kind">{project.kind}</p>
                  <p className="project-blurb">{project.blurb}</p>
                </div>
                <span className="project-cta">GitHub →</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-head">
            <h2>Experience</h2>
            <p>Shipping live consumer products at HOGR.</p>
          </div>
          <div className="experience-list">
            {experience.map((job) => (
              <article key={`${job.role}-${job.period}`} className="job">
                <div className="job-top">
                  <h3>
                    {job.role} <span>· {job.company}</span>
                  </h3>
                  <p className="job-period">{job.period}</p>
                </div>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="stack">
          <div className="section-head">
            <h2>Stack</h2>
            <p>Tools I use to move from idea to production.</p>
          </div>
          <dl className="stack-list">
            {skills.map((group) => (
              <div key={group.label} className="stack-row">
                <dt>{group.label}</dt>
                <dd>{group.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section contact" id="contact">
          <div className="section-head">
            <h2>Let&apos;s build</h2>
            <p>Open to full-stack roles and thoughtful product work.</p>
          </div>
          <div className="contact-block">
            <a className="contact-email" href={profile.links.email}>
              {profile.email}
            </a>
            <p className="contact-phone">{profile.phone}</p>
            <div className="contact-links">
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Designed to stay light, fast, and honest.</p>
      </footer>
    </div>
  )
}

export default App
