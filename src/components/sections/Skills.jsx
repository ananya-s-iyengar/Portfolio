import { useState } from 'react';
import { skillCategories } from '../../data/content.js';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Icon from '../ui/Icon.jsx';

export default function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const active = skillCategories.find((c) => c.id === activeId);

  const onKeyDown = (e) => {
    const i = skillCategories.findIndex((c) => c.id === activeId);
    let next = i;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % skillCategories.length;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + skillCategories.length) % skillCategories.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = skillCategories.length - 1;
    else return;
    e.preventDefault();
    const id = skillCategories[next].id;
    setActiveId(id);
    document.getElementById(`tab-${id}`)?.focus();
  };

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow="Technical Skills"
          title="Capabilities, grouped by discipline."
          lead="Select a category to explore. Skills are listed by what I work with, not self-rated percentages."
        />
        <Reveal className="skills-layout">
          <div className="skill-tabs" role="tablist" aria-label="Skill categories" onKeyDown={onKeyDown}>
            {skillCategories.map((c) => (
              <button
                key={c.id}
                id={`tab-${c.id}`}
                type="button"
                role="tab"
                aria-selected={c.id === activeId}
                aria-controls={`panel-${c.id}`}
                tabIndex={c.id === activeId ? 0 : -1}
                className={`skill-tab ${c.id === activeId ? 'is-active' : ''}`}
                onClick={() => setActiveId(c.id)}
              >
                <span className="icon-chip sm">
                  <Icon name={c.icon} size={18} />
                </span>
                <span>{c.label}</span>
                <span className="count">{c.skills.length}</span>
              </button>
            ))}
          </div>

          <div
            key={active.id}
            id={`panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            className="skill-panel"
          >
            <p className="skill-blurb">{active.blurb}</p>
            <ul className="skill-grid">
              {active.skills.map((s, i) => (
                <li key={s.name} className="glass skill-card" style={{ animationDelay: `${i * 50}ms` }}>
                  <h3>{s.name}</h3>
                  <p>{s.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
