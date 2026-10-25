import { experience, profile, projects, skills } from './data'
import './App.css'

function App() {
  return (
    <div className="site">
      <header className="topbar">
        <a className="mark" href="#top">
          Akshay M S
        </a>
        <nav aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-media" aria-hidden="true">
            <img src="/hero-field.svg" alt="" />
          </div>

          <div className="hero-copy">
            <p className="eyebrow anim anim-1">{profile.title}</p>
            <h1 className="brand anim anim-2">
              <span>Akshay</span>
              <span>M S</span>
            </h1>
            <p className="lede anim anim-3">
              Production web &amp; mobile products — shipped with a MERN core
              and owned end to end.
            </p>
            <div className="hero-cta anim anim-4">
              <a className="btn solid" href="#work">
                View work
              </a>
              <a className="btn line" href={profile.links.email}>
                Email
              </a>
            </div>
          </div>
        </section>

        <section className="band" id="work">
          <div className="band-head">
            <h2>Selected work</h2>
            <p>Personal builds that show the full path from API to UI.</p>
          </div>

          <ol className="work-list">
            {projects.map((project, index) => (
              <li key={project.name}>
                <a
                  className="work-item"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="work-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="work-body">
                    <div className="work-title-row">
                      <h3>{project.name}</h3>
                      <span className="work-kind">{project.kind}</span>
                    </div>
                    <p>{project.blurb}</p>
                  </div>
                  <span className="work-link">GitHub</span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section className="band" id="experience">
          <div className="band-head">
            <h2>Experience</h2>
            <p>{profile.summary}</p>
          </div>

          <div className="jobs">
            {experience.map((job) => (
              <article key={`${job.role}-${job.period}`} className="job">
                <header>
                  <h3>
                    {job.role}
                    <span> @ {job.company}</span>
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

        <section className="band" id="stack">
          <div className="band-head">
            <h2>Stack</h2>
          </div>
          <div className="stack">
            {skills.map((group) => (
              <div key={group.label} className="stack-item">
                <h3>{group.label}</h3>
                <p>{group.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="band contact" id="contact">
          <p className="eyebrow">Contact</p>
          <h2>
            <a href={profile.links.email}>{profile.email}</a>
          </h2>
          <p className="contact-meta">{profile.phone}</p>
          <div className="socials">
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="foot">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built to be read, not decorated.</span>
      </footer>
    </div>
  )
}

export default App
