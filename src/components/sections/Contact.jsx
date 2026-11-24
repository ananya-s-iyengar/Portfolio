import { useState } from 'react';
import { profile, contact } from '../../data/content.js';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import Icon from '../ui/Icon.jsx';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your name (at least 2 characters).';
  if (!v.email.trim()) e.email = 'Email address is required.';
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address.';
  if (v.subject.trim().length < 3) e.subject = 'Please add a short subject.';
  if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters.';
  return e;
}

function Field({ id, label, error, children }) {
  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && (
        <p className="field-error" id={`${id}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | 'sent' | 'unconfigured'

  const set = (k) => (e) => {
    const next = { ...values, [k]: e.target.value };
    setValues(next);
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: validate(next)[k] }));
    setStatus(null);
  };

  const submit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(Object.keys(found)[0] === 'name' ? 'cf-name' : `cf-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    if (!profile.email) {
      setStatus('unconfigured');
      return;
    }
    const body = `${values.message}\n\n— ${values.name} (${values.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
    setStatus('sent');
  };

  const a11y = (k) => ({
    'aria-invalid': errors[k] ? 'true' : 'false',
    'aria-describedby': errors[k] ? `cf-${k}-error` : undefined,
  });

  return (
    <form className="glass contact-form" onSubmit={submit} noValidate>
      <div className="form-row">
        <Field id="cf-name" label="Name" error={errors.name}>
          <input id="cf-name" type="text" autoComplete="name" value={values.name} onChange={set('name')} {...a11y('name')} />
        </Field>
        <Field id="cf-email" label="Email" error={errors.email}>
          <input id="cf-email" type="email" autoComplete="email" value={values.email} onChange={set('email')} {...a11y('email')} />
        </Field>
      </div>
      <Field id="cf-subject" label="Subject" error={errors.subject}>
        <input id="cf-subject" type="text" value={values.subject} onChange={set('subject')} {...a11y('subject')} />
      </Field>
      <Field id="cf-message" label="Message" error={errors.message}>
        <textarea id="cf-message" rows="5" value={values.message} onChange={set('message')} {...a11y('message')} />
      </Field>
      <button type="submit" className="btn btn-primary">
        <span>Send Message</span>
        <Icon name="arrow" size={18} />
      </button>
      <div className="form-status" role="status" aria-live="polite">
        {status === 'sent' && <p className="ok">Opening your email app with the message prepared.</p>}
        {status === 'unconfigured' && (
          <p className="warn">
            Your message looks good, but the contact email has not been configured yet. Set <code>email</code> in{' '}
            <code>src/data/content.js</code> to enable sending.
          </p>
        )}
      </div>
    </form>
  );
}

function ContactLink({ icon, label, value, href, placeholder }) {
  const inner = (
    <>
      <span className="icon-chip sm">
        <Icon name={icon} size={18} />
      </span>
      <span className="cl-text">
        <span className="cl-label">{label}</span>
        <span className="cl-value">{value || placeholder}</span>
      </span>
    </>
  );
  return href ? (
    <a className="contact-link" href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {inner}
    </a>
  ) : (
    <div className="contact-link is-disabled" aria-disabled="true">
      {inner}
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading id="contact-title" eyebrow="Contact" title="Let’s connect." lead={contact.closing} />
        <div className="contact-grid">
          <Reveal className="contact-links">
            <ContactLink
              icon="mail"
              label="Email"
              value={profile.email}
              href={profile.email ? `mailto:${profile.email}` : ''}
              placeholder="Professional email — coming soon"
            />
            <ContactLink
              icon="linkedin"
              label="LinkedIn"
              value={profile.linkedin ? 'View profile' : ''}
              href={profile.linkedin}
              placeholder="LinkedIn profile — coming soon"
            />
            <ContactLink
              icon="github"
              label="GitHub"
              value={profile.github ? 'View profile' : ''}
              href={profile.github}
              placeholder="GitHub profile — coming soon"
            />
          </Reveal>
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
