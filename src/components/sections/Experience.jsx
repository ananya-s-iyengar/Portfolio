import { experience } from '../../data/content.js';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="Professional experience."
          lead="Professional work only — personal projects and labs are listed separately."
        />
        <ol className="timeline">
          {experience.map((job) => (
            <Reveal as="li" key={job.company + job.period} className="timeline-item">
              <span className="timeline-node" aria-hidden="true" />
              <article className="glass job">
                <header className="job-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="job-company">
                      {job.company} <span className="muted">· {job.employment}</span>
                    </p>
                  </div>
                  <span className="period-pill">{job.period}</span>
                </header>
                <p className="job-summary">{job.summary}</p>
                <ul className="check-list">
                  {job.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                <ul className="tag-list" aria-label="Tools used">
                  {job.tags.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
