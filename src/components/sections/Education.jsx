import { education } from '../../data/content.js';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Icon from '../ui/Icon.jsx';

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading id="education-title" eyebrow="Education" title="Academic foundation." />
        <Reveal className="glass edu-card">
          <span className="icon-chip lg">
            <Icon name="graduation" size={26} />
          </span>
          <div className="edu-main">
            <h3>{education.degree}</h3>
            <p className="muted">{education.institution}</p>
          </div>
          <div className="edu-score" aria-label={`CGPA ${education.cgpa} out of ${education.scale}`}>
            <span className="score">{education.cgpa}</span>
            <span className="scale">/ {education.scale} CGPA</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
