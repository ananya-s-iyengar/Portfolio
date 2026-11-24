import { useRef, useState } from 'react';
import { projects } from '../../data/content.js';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Icon from '../ui/Icon.jsx';
import ProjectModal from './ProjectModal.jsx';

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);
  const lastTrigger = useRef(null);

  const open = (i, el) => {
    lastTrigger.current = el;
    setOpenIndex(i);
  };
  const close = () => {
    setOpenIndex(null);
    lastTrigger.current?.focus();
  };
  const navigate = (dir) => setOpenIndex((i) => (i + dir + projects.length) % projects.length);

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          eyebrow="Projects"
          title="Personal projects & labs."
          lead="These are self-directed projects and labs — not professional work. Status labels reflect their current state."
        />
        <ul className="project-grid">
          {projects.map((p, i) => (
            <Reveal as="li" key={p.id} delay={(i % 2) * 90} className={`project-card glass accent-${p.accent}`}>
              <div className="project-top">
                <span className="icon-chip lg">
                  <Icon name={p.icon} size={24} />
                </span>
                <div className="badge-row">
                  <span className={`badge status ${p.status === 'In Development' ? 'dev' : 'lab'}`}>{p.status}</span>
                  <span className="badge">{p.type}</span>
                </div>
              </div>
              <h3>{p.name}</h3>
              <p className="project-sub">{p.subtitle}</p>
              <p className="project-overview">{p.overview}</p>
              <ul className="tag-list" aria-label={`${p.name} technologies`}>
                {p.tech.slice(0, 4).map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
                {p.tech.length > 4 && <li className="tag tag-more">+{p.tech.length - 4}</li>}
              </ul>
              <div className="project-actions">
                <button type="button" className="btn btn-primary" onClick={(e) => open(i, e.currentTarget)}>
                  <span>View Project</span>
                  <Icon name="arrow" size={18} />
                </button>
                {p.repo ? (
                  <a className="link-inline" href={p.repo} target="_blank" rel="noopener noreferrer">
                    <Icon name="github" size={18} /> GitHub
                  </a>
                ) : (
                  <span className="link-inline is-disabled" title="Repository link coming soon">
                    <Icon name="github" size={18} /> Repo coming soon
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
      {openIndex !== null && (
        <ProjectModal
          project={projects[openIndex]}
          index={openIndex}
          total={projects.length}
          onClose={close}
          onNavigate={navigate}
        />
      )}
    </section>
  );
}
