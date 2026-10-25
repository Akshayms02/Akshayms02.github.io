import { experience, profile, projects, skills } from './data'
import './App.css'

function App() {
  return (
    <div className="page">
      <div className="atmosphere" aria-hidden="true">
        <div className="glow glow-a" />
        <div className="glow glow-b" />
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
          <a href={profile.links.email}>Let&apos;s chat →</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <h1 className="fade up d1">
            Building apps for teams who care about{' '}
            <em>shipping.</em>
          </h1>
          <div className="hero-actions fade up d2">
            <a className="btn btn-primary" href="#work">
              View work
            </a>
            <a className="btn btn-ghost" href="#about">
              How I can help
            </a>
          </div>
          <p className="currently fade up d3">
            <span>Currently shipping at</span>
            <strong>HOGR</strong>
          </p>
        </section>

        <section className="section" id="work">
          <p className="eyebrow">Selected work</p>
          <div className="work-grid">
            {projects.map((project) => (
              <a
                key={project.name}
                className="work-card"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="work-visual" aria-hidden="true">
                  <span>{project.name.slice(0, 1)}</span>
                </div>
                <div className="work-copy">
                  <div>
                    <h2>{project.name}</h2>
                    <p>{project.blurb}</p>
                  </div>
                  <span>{project.kind}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Recently &amp; currently</h2>
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
          <p className="eyebrow">About</p>
          <h2 className="section-title">
            {profile.name} — {profile.title}
          </h2>
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
          <h2 className="section-title">Let&apos;s chat</h2>
          <p className="about-lead">
            Open to full-stack roles and product-minded engineering work.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={profile.links.email}>
              Email me
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
        <span>MERN / Full-Stack</span>
      </footer>
    </div>
  )
}

export default App
