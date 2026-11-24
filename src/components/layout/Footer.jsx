import { profile } from '../../data/content.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name} · Cybersecurity Analyst
        </p>
        <p className="muted">
          Personal projects and labs are labelled as such and are separate from professional work.
        </p>
      </div>
    </footer>
  );
}
