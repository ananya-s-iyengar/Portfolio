import { useEffect, useState } from 'react';

/**
 * Checks whether the resume file actually exists (the dev/preview servers fall back to
 * index.html for unknown paths, so we verify the response is a real PDF).
 */
export function useResumeAvailable(path) {
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(path, { method: 'HEAD' })
      .then((res) => {
        const type = res.headers.get('content-type') || '';
        if (!cancelled) setAvailable(res.ok && type.includes('pdf'));
      })
      .catch(() => {
        if (!cancelled) setAvailable(false);
      });
    return () => {
      cancelled = true;
    };
  }, [path]);

  return available;
}
