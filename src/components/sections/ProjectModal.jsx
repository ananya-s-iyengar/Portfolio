import { useEffect, useRef } from 'react';
import Icon from '../ui/Icon.jsx';
import Button from '../ui/Button.jsx';

/** Accessible project detail dialog built on the native <dialog> element. */
export default function ProjectModal({ project, onClose, onNavigate, index, total }) {
  const ref = useRef(null);

  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return undefined;
    if (!dlg.open) dlg.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    ref.current?.querySelector('.modal-body')?.scrollTo({ top: 0 });
  }, [project.id]);

  const onKey = (e) => {
    if (e.key === 'ArrowRight') onNavigate(1);
    if (e.key === 'ArrowLeft') onNavigate(-1);
  };

  return (
    <dialog
      ref={ref}
      className={`modal accent-${project.accent}`}
      aria-labelledby="modal-title"
      onClose={onClose}
      onCancel={onClose}
      onKeyDown={onKey}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      <div className="modal-card">
        <header className="modal-head">
          <div>
            <div className="badge-row">
              <span className={`badge status ${project.status === 'In Development' ? 'dev' : 'lab'}`}>{project.status}</span>
              <span className="badge">{project.type}</span>
            </div>
            <h3 id="modal-title">
              {project.name} <span className="muted">— {project.subtitle}</span>
            </h3>
          </div>
          <button type="button" className="icon-btn" onClick={onClose} aria-label="Close project details">
            <Icon name="close" />
          </button>
        </header>

        <div className="modal-body">
          <section>
            <h4>Overview</h4>
            <p>{project.overview}</p>
          </section>
          <section>
            <h4>Problem statement</h4>
            <p>{project.problem}</p>
          </section>
          <section>
            <h4>{project.featuresLabel}</h4>
            <ul className="check-list">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>
          <section>
            <h4>Architecture overview</h4>
            <ol className="arch">
              {project.architecture.map((a, i) => (
                <li key={a.step}>
                  <span className="arch-num">{i + 1}</span>
                  <div>
                    <strong>{a.step}</strong>
                    <p>{a.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
          <section>
            <h4>Technologies</h4>
            <ul className="tag-list">
              {project.tech.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <footer className="modal-foot">
          <Button
            href={project.repo}
            external
            variant="secondary"
            icon="github"
            placeholderLabel="GitHub repository link coming soon"
          >
            {project.repo ? 'View on GitHub' : 'GitHub link — coming soon'}
          </Button>
          <div className="modal-nav">
            <button type="button" className="btn btn-ghost" onClick={() => onNavigate(-1)} aria-label="Previous project">
              ← Prev
            </button>
            <span className="muted" aria-live="polite">
              {index + 1} / {total}
            </span>
            <button type="button" className="btn btn-ghost" onClick={() => onNavigate(1)} aria-label="Next project">
              Next →
            </button>
          </div>
        </footer>
      </div>
    </dialog>
  );
}
