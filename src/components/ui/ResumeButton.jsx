import { useState } from 'react';
import Button from './Button.jsx';
import { profile } from '../../data/content.js';
import { useResumeAvailable } from '../../hooks/useResumeAvailable.js';

export default function ResumeButton({ variant = 'secondary', className = '' }) {
  const available = useResumeAvailable(profile.resumePath);
  const [notice, setNotice] = useState(false);

  if (available) {
    return (
      <Button
        href={profile.resumePath}
        download={profile.resumeFileName}
        variant={variant}
        icon="download"
        className={className}
      >
        Download Resume
      </Button>
    );
  }

  return (
    <span className="resume-wrap">
      <Button
        variant={variant}
        icon="download"
        className={className}
        onClick={() => setNotice(true)}
      >
        Download Resume
      </Button>
      {notice && (
        <span className="resume-notice" role="status">
          Resume coming soon — add <code>{profile.resumeFileName}</code> to <code>public/resume/</code>.
        </span>
      )}
    </span>
  );
}
