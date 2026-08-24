# Ananya S — Cybersecurity Portfolio

Personal professional portfolio for **Ananya S**, Cybersecurity Analyst (SOC · AWS Cloud Security).  
Built as a fully static two-file site — zero framework, zero build step, no dependencies except an optional Google Fonts request.

---

## Live Preview

> **Requires a local web server** — do not open `index.html` directly via `file://` (fonts and JS module loading behave incorrectly without HTTP).

**VS Code Live Server (recommended)**
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
2. Right-click `index.html` → **Open with Live Server**.
3. Browser opens at `http://127.0.0.1:5500`.

**Python (no install needed)**
```bash
# From the project directory:
python -m http.server 8080
# Then open: http://localhost:8080
```

---

## Project Structure

```
Ananya Portfolio/
├── index.html                          # Entire site — HTML, CSS, and JS in one file
├── data.js                             # All personal content as a PORTFOLIO config object
└── AnanyaIyengar_CybersecurityAnalyst.pdf   # Resume (linked from hero + resume section)
```

There are exactly **two files** to maintain:

| File | What to edit |
|------|-------------|
| `data.js` | Name, roles, summary, experience, projects, skills, credentials, education, contact links |
| `index.html` | Layout, design, animations, or section structure |

**Never hardcode personal data in `index.html`** — all content is injected at runtime by `renderPortfolio()` reading from `data.js`.

---

## Architecture

```
data.js          — const PORTFOLIO = { ... }
    ↓  loaded via <script src="data.js">
index.html
    ↓  renderPortfolio() runs at DOMContentLoaded
    ↓  injects data into DOM via data-bind attributes and id-keyed containers
Browser renders the complete portfolio
```

### Key JS functions in `index.html`

| Function | Purpose |
|----------|---------|
| `renderPortfolio()` | Injects all `PORTFOLIO.*` data into the DOM |
| `copyPortfolioUrl()` | Copies the portfolio URL to clipboard (QR section) |
| `openProjectModal(id)` | Opens the project detail modal for a given project ID |
| `closeProjectModal()` | Closes the project modal |
| `openSidebar()` / `closeSidebar()` | Mobile sidebar toggle |
| `initQR()` IIFE | Pure-JS QR code encoder/renderer (no CDN) |

---

## Updating Content

### Personal information

Open `data.js` and edit the fields at the top of the `PORTFOLIO` object:

```js
name:     "Ananya S",
email:    "ananyaiyengar55@gmail.com",
linkedin: "https://www.linkedin.com/in/ananya-s-164400350",
github:   "https://github.com/ananya-s-iyengar",
resume:   "AnanyaIyengar_CybersecurityAnalyst.pdf",
```

### Experience / bullets

Edit the `experience` array in `data.js`. Each entry has:
- `title`, `company`, `client`, `location`, `period`, `current`
- `bullets` — array of resume bullet strings
- `tags` — technology badges shown on the card

### Projects

Edit the `projects` array in `data.js`. Key fields per project:

| Field | Description |
|-------|-------------|
| `tier` | `1` = Professional Security Portfolio (featured row), `2` = Other Projects |
| `github` | Full GitHub URL, or `""` for private repos |
| `privateNote` | Shown instead of the GitHub button when `github` is `""` |
| `filters` | Array of filter IDs used by the project filter bar |

### Skills, credentials, education

All in `data.js` under `skills`, `credentials`, and `education` arrays respectively.

---

## Activating the QR Code

The QR code section is fully implemented with a pure-JS encoder (no CDN, no library).  
By default it shows a "not configured" placeholder.

To activate it:

1. Deploy the portfolio to a public URL (e.g. GitHub Pages, Netlify).
2. Open `index.html` and find line ~2217:

```js
const portfolioUrl = '';
```

3. Set it to your deployed URL:

```js
const portfolioUrl = 'https://ananya-s-iyengar.github.io/portfolio';
```

4. Save and reload — the QR code will render automatically and the **Download QR Code** button will generate a 600×600 PNG.

---

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `portfolio`).
2. Push all three files:
   ```
   index.html
   data.js
   AnanyaIyengar_CybersecurityAnalyst.pdf
   ```
3. Go to **Settings → Pages → Source → Deploy from branch → `main` / `root`**.
4. Your portfolio will be live at `https://<username>.github.io/portfolio`.
5. Update `portfolioUrl` in `index.html` with that URL to enable the QR code.

---

## Design System

The site uses a **dark SOC dashboard theme** — enterprise/professional, not gaming or hacker-themed.

### Color tokens (CSS custom properties)

| Variable | Value | Use |
|----------|-------|-----|
| `--bg-primary` | `#070b14` | Page background |
| `--bg-secondary` | `#0d1424` | Sidebar, footer |
| `--bg-card` | `#111827` | Cards, panels |
| `--border` | `#1e2d45` | Card borders |
| `--accent` | `#3b82f6` | Primary blue accent |
| `--cyan` | `#06b6d4` | Secondary accent |
| `--green` | `#10b981` | Success / positive |
| `--amber` | `#f59e0b` | Warning / highlight |
| `--red` | `#ef4444` | Critical / alert |
| `--text-primary` | `#e2e8f0` | Main readable text |
| `--text-secondary` | `#94a3b8` | Supporting text |
| `--text-muted` | `#64748b` | Labels, captions |

### Fonts

| Role | Font |
|------|------|
| All headings & body | Inter (Google Fonts) |
| Technical elements (code, AWS service names, logs) | JetBrains Mono |

The site works offline — fonts fall back to `system-ui, sans-serif` and `monospace` if the Google Fonts request fails.

### Responsive breakpoints

| Breakpoint | Layout |
|------------|--------|
| `> 1100px` | Sidebar + main content side by side |
| `768px – 1100px` | Sidebar collapses, hamburger menu appears |
| `< 768px` | Single column, mobile-optimised cards |
| `< 480px` | Compact typography and spacing |

---

## Sections

| Section ID | Navigation label | Description |
|------------|-----------------|-------------|
| `#hero` | Overview | Hero: name, roles, pipeline visualization, stack badges |
| `#about` | About | Professional summary |
| `#experience` | Experience | Work history (Artech / IBM client environment) |
| `#soc-workflow` | Security Operations | Interactive 7-stage SOC workflow diagram |
| `#aws-security` | AWS Security | AWS service cards: GuardDuty, Security Hub, CloudTrail, IAM, ServiceNow |
| `#projects` | Projects | Filterable project cards + detail modals |
| `#skills` | Skills | 8 skill groups |
| `#credentials` | Credentials | Certifications and badges with filter bar |
| `#achievements` | Achievements | Notable achievements |
| `#education` | Education | Academic background |
| `#resume` | Resume | View / Download resume PDF |
| `#qrcode` | Portfolio QR | QR code for the deployed portfolio URL |
| `#contact` | Contact | Email, LinkedIn, GitHub cards |

---

## Content Accuracy Policy

> The resume (`AnanyaIyengar_CybersecurityAnalyst.pdf`) is the **authoritative source** for all professional content.

Rules followed throughout this project:

- Employer is **Artech Information Systems Pvt. Ltd.** (staffing agency) — client is IBM. The word "IBM" is never used as the employer.
- Real metrics only: **50+ incidents**, **estimated 6–7% Security Hub compliance improvement** (the word "estimated" is always present).
- The IBM Watsonx project has **no public GitHub** — source code is private due to API credentials. The portfolio shows "Source Code: Private" for this project.
- No fabricated percentages, counts, detection rates, or response-time claims.

---

## License

This portfolio and its content are personal and not open-source licensed.  
The code structure may be reused for educational purposes, but all personal data, resume content, and project descriptions belong to Ananya S.
