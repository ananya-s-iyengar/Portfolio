# Ananya S. — Cybersecurity Portfolio

React + Vite single-page portfolio. Plain CSS, inline SVG icons, self-hosted fonts (no CDN calls).

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # serve the production build
```

## Personalise (everything lives in `src/data/content.js`)

| What                | Where                                                                 |
| ------------------- | --------------------------------------------------------------------- |
| Email               | `profile.email` — enables the mailto link and the contact form        |
| LinkedIn / GitHub   | `profile.linkedin`, `profile.github`                                  |
| Profile photo       | put image in `public/profile/`, set `profile.profileImage`            |
| Resume              | put `Ananya_S_Resume.pdf` in `public/resume/` (button activates itself) |
| Project repo links  | `projects[n].repo`                                                    |
| Project status      | `projects[n].status` (`In Development` / `Hands-on Lab`)              |
| Credential URL      | `certifications.earned[0].credentialUrl`                              |
| New certifications  | replace entries in `certifications.planned`                           |

Empty values render clearly-labelled, non-clickable placeholders — never broken links.

## Structure

```
src/
  data/content.js           all copy and links
  hooks/                    useScroll (reveal, active section, progress), useResumeAvailable
  components/
    layout/                 Header, Footer
    sections/               Hero, About, Experience, Skills, Projects (+ProjectModal),
                            Certifications, Education, Contact
    ui/                     Button, ResumeButton, Icon, Reveal, SectionHeading
  styles/                   base.css, components.css, sections.css
```

## Notes

- The contact form has no backend: valid submissions open the visitor's mail client via `mailto:` once `profile.email` is set.
- Projects are personal projects/labs and are labelled as such; no features are claimed as completed.
- Respects `prefers-reduced-motion`; keyboard navigable; native `<dialog>` for project details.
