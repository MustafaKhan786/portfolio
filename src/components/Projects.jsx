// Kal yahan project add karenge. Format:
// { title: '...', desc: '...', tags: ['React'], link: 'https://...', linkText: 'Live Demo →' }
const projects = []

function ProjectCard({ title, desc, tags, link, linkText }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="tags">
        {tags.map((t) => <span className="tag" key={t}>{t}</span>)}
      </div>
      <a className="more" href={link} target="_blank" rel="noreferrer">{linkText}</a>
    </div>
  )
}

function Projects() {
  return (
    <>
      <h2 className="panel-title">Projects</h2>
      <p className="panel-sub">Things I've built</p>
      {projects.length === 0 ? (
        <div className="empty">
          <h3>Projects coming soon</h3>
          <p>I'm adding my latest work here. Check my GitHub in the meantime.</p>
        </div>
      ) : (
        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      )}
    </>
  )
}

export default Projects