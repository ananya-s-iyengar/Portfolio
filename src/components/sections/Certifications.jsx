import { certifications } from '../../data/content.js';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Icon from '../ui/Icon.jsx';

export default function Certifications() {
  const { earned, inProgress } = certifications;

  return (
    <section id="certifications" className="section" aria-labelledby="certs-title">
      <div className="container">
        <SectionHeading
          id="certs-title"
          eyebrow="Certifications"
          title="Credentials & learning."
          lead={`${earned.length} earned credentials, from industry certifications to vendor badges.`}
        />
        <ul className="cert-grid">
          {earned.map((c, i) => (
            <Reveal as="li" key={c.name} delay={(i % 3) * 70} className={`glass cert-card ${i < 2 ? 'is-featured' : ''}`}>
              <div className="cert-card-top">
                <span className="icon-chip">
                  <Icon name="award" size={22} />
                </span>
                <span className="badge status earned">
                  <Icon name="check" size={13} /> Earned
                </span>
              </div>
              <h3>{c.name}</h3>
              <p className="cert-issuer">
                {c.issuer} <span className="muted">· {c.type}</span>
              </p>
              <p className="cert-level">{c.level}</p>
              {c.credentialUrl && (
                <a className="link-inline" href={c.credentialUrl} target="_blank" rel="noopener noreferrer">
                  Verify credential <Icon name="external" size={15} />
                </a>
              )}
            </Reveal>
          ))}
          {inProgress.map((p) => (
            <Reveal as="li" key={p.name} className="cert-card cert-pending">
              <div className="cert-card-top">
                <span className="icon-chip muted-chip">
                  <Icon name="clock" size={22} />
                </span>
                <span className="badge status dev">In progress</span>
              </div>
              <h3>{p.name}</h3>
              <p className="cert-issuer">{p.issuer}</p>
              <p className="cert-level">{p.note}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
