function initials(title) {
  return title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export default function ProjectCard({ project, index = 0 }) {
  const { title, description, image, tags = [], github, demo, website } = project;

  return (
    <article className="project">
      <div className="thumb">
        <span className="stage-tag">Stage {String(index + 1).padStart(2, '0')}</span>
        {image ? (
          <img src={image} alt={`Screenshot of ${title}`} loading="lazy" />
        ) : (
          <div className={`thumb-ph tone-${(index % 4) + 1}`} aria-hidden="true">
            <span>{initials(title)}</span>
          </div>
        )}
      </div>

      <div className="project-body">
        <h3>{title}</h3>
        <p className="muted">{description}</p>

        <ul className="tag-list" aria-label="Tech stack">
          {tags.map((t) => (
            <li key={t} className={`tag ${t === 'Ongoing' ? 'tag-live' : ''}`}>{t}</li>
          ))}
        </ul>

        {(github || demo || website) && (
          <div className="project-links">
            {demo && (
              <a className="btn btn-sm play" href={demo} target="_blank" rel="noreferrer">
                Live demo
              </a>
            )}
            {website && (
              <a className="btn btn-ghost btn-sm" href={website} target="_blank" rel="noreferrer">
                Website
              </a>
            )}
            {github && (
              <a className="btn btn-ghost btn-sm" href={github} target="_blank" rel="noreferrer">
                Source code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
