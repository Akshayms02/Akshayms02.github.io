import { experience, profile, projects, skills } from './data'
import './App.css'

function App() {
  return (
    <div className="page">
      <div className="wash" aria-hidden="true" />

      <header className="nav">
        <a className="logo" href="#top">
          {profile.name}
        </a>
        <nav aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a className="nav-cta" href={profile.links.email}>
            Let&apos;s chat →
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="hero-name fade up d1">{profile.name}</p>
          <h1 className="hero-title fade up d2">
            Building apps for teams who care about shipping clean product.
          </h1>
          <p className="hero-sub fade up d3">
            Junior Software Developer · MERN / Full-Stack. Production web &amp;
            mobile at HOGR — food delivery, AI companions, and analytics.
          </p>
          <div className="hero-actions fade up d4">
            <a className="btn btn-dark" href="#work">
              View work
            </a>
            <a className="btn btn-light" href="#experience">
              Experience
            </a>
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-label">
            <h2>Selected work</h2>
            <p>Personal builds and product work worth opening.</p>
          </div>

          <div className="rows">
            {projects.map((project) => (
              <a
                key={project.name}
                className="row"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.blurb}</p>
                </div>
                <span className="row-meta">{project.kind}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-label">
            <h2>Currently &amp; recently</h2>
            <p>Shipping live consumer products at HOGR.</p>
          </div>

          <div className="rows">
            {experience.map((job) => (
              <article key={`${job.role}-${job.period}`} className="job-block">
                <div className="row static">
                  <div>
                    <h3>
                      {job.company}
                      <span> · {job.role}</span>
                    </h3>
                  </div>
                  <span className="row-meta">{job.period}</span>
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

        <section className="section" id="about">
          <div className="section-label">
            <h2>How I can help</h2>
            <p>{profile.summary}</p>
          </div>

          <div className="rows">
            {skills.map((group) => (
              <div key={group.label} className="row static skill-row">
                <h3>{group.label}</h3>
                <p>{group.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <h2>Let&apos;s build something solid.</h2>
          <p>
            Open to full-stack roles and product-minded engineering work.
          </p>
          <div className="hero-actions">
            <a className="btn btn-dark" href={profile.links.email}>
              {profile.email}
            </a>
            <a
              className="btn btn-light"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn btn-light"
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
        <span>Inspired by calm, design-led portfolios — rebuilt for engineering.</span>
      </footer>
    </div>
  )
}

export default App
