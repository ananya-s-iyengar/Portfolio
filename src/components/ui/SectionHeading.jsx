import Reveal from './Reveal.jsx';

export default function SectionHeading({ id, eyebrow, title, lead }) {
  return (
    <Reveal className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  );
}
