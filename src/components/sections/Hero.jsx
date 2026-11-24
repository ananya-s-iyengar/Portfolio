import { profile, heroFacts } from '../../data/content.js';
import Button from '../ui/Button.jsx';
import ResumeButton from '../ui/ResumeButton.jsx';
import Icon from '../ui/Icon.jsx';
import HeroBackground from './HeroBackground.jsx';

function ProfileImage() {
  return (
    <div className="profile-frame">
      <div className="profile-ring" aria-hidden="true" />
      <div className="profile-inner">
        {profile.profileImage ? (
          <img
            src={profile.profileImage}
            alt={`Portrait of ${profile.name}`}
            width="420"
            height="520"
            decoding="async"
          />
        ) : (
          <div className="profile-placeholder" role="img" aria-label="Profile photo placeholder">
            <Icon name="user" size={64} />
            <span>Profile photo</span>
            <small>Add an image in content.js</small>
          </div>
        )}
      </div>
      <div className="profile-badge">
        <span className="dot" aria-hidden="true" />
        <span>
          <strong>IBM</strong> · Cybersecurity Analyst
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const scrollToWork = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <HeroBackground />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-kicker">
            <span className="pulse" aria-hidden="true" />
            {profile.role}
          </p>
          <h1 id="hero-title">
            {profile.headline.map((line, i) => (
              <span key={line} className={`hero-line ${i === 1 ? 'accent' : ''}`} style={{ animationDelay: `${120 + i * 140}ms` }}>
                {line}
              </span>
            ))}
          </h1>
          <p className="hero-intro">
            <strong>{profile.name}</strong> — {profile.intro}
          </p>
          <div className="hero-cta">
            <Button href="#projects" icon="arrow" onClick={scrollToWork}>
              Explore My Work
            </Button>
            <ResumeButton />
          </div>
          <dl className="hero-facts">
            {heroFacts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="hero-visual">
          <ProfileImage />
        </div>
      </div>
      <a
        href="#about"
        className="scroll-cue"
        aria-label="Scroll to About section"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span />
      </a>
    </section>
  );
}
