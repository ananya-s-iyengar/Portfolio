/**
 * Single source of truth for all portfolio content.
 * Edit this file to update the site — no component changes required.
 *
 * Leave a URL / email as an empty string ('') and the UI will render a
 * clearly-labelled, non-clickable placeholder instead of a broken link.
 */

export const profile = {
  name: 'Ananya S.',
  title: 'Cybersecurity Analyst | SOC Analyst | Cloud Security Enthusiast',
  role: 'Cybersecurity Analyst at IBM',
  headline: ['Securing Digital Infrastructure.', 'Investigating Threats.', 'Building Resilience.'],
  intro:
    'I monitor, triage and investigate security alerts across AWS environments as a Cybersecurity Analyst at IBM — turning raw telemetry into clear, actionable findings.',
  // Put a photo in /public/profile/ and set e.g. '/profile/ananya.jpg'. Empty = placeholder.
  profileImage: '/profile/ananya.jpg',
  // Drop the PDF into /public/resume/ using this exact name (or change the path).
  resumePath: '/resume/Ananya_S_Cybersecurity_Resume.pdf',
  resumeFileName: 'Ananya_S_Cybersecurity_Resume.pdf',
  // ---- Contact placeholders (fill in when ready) ----
  email: 'ananyaiyengar55@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ananya-s-164400350/', // e.g. 'https://www.linkedin.com/in/your-profile'
  github: 'https://github.com/ananya-s-iyengar', // e.g. 'https://github.com/your-username'
};

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const heroFacts = [
  { value: '1+ yr', label: 'Professional security experience' },
  { value: '50+', label: 'Cloud security incidents investigated' },
  { value: '9.05', label: 'BCA CGPA (out of 10)' },
];

export const about = {
  paragraphs: [
    'I am a Cybersecurity Analyst supporting IBM through Artech Information Systems, working in Tier 1 SOC operations since August 2025. My day-to-day work centres on monitoring AWS security services, analysing alerts, and investigating suspicious activity so that genuine threats are separated from noise quickly and documented clearly.',
    'Working with AWS GuardDuty, Security Hub, CloudTrail and CloudWatch has given me a practical understanding of how cloud activity is logged, how detections are raised, and how an investigation moves from an alert to a conclusion. I also manage and update security tickets in ServiceNow so every investigation leaves a clear trail.',
    'Outside of work, I build personal projects and labs to deepen my understanding of cloud threat detection, attack techniques and security data analysis. I am especially interested in cloud security and in growing from analyst-level investigation towards detection engineering and security architecture.',
  ],
  focus: [
    { icon: 'radar', title: 'Threat Analysis', text: 'Investigating alerts and activity to understand what happened and why.' },
    { icon: 'cloud', title: 'AWS Security Monitoring', text: 'Working with GuardDuty, Security Hub, CloudTrail and CloudWatch.' },
    { icon: 'search', title: 'Incident Investigation', text: 'Triage, evidence gathering and clear reporting.' },
    { icon: 'layers', title: 'Continuous Learning', text: 'Personal projects and labs to build hands-on depth.' },
  ],
};

export const experience = [
  {
    company: 'IBM',
    role: 'Cybersecurity Analyst',
    employment: 'Contract through Artech Information Systems Pvt. Ltd.',
    period: 'August 2025 – Present',
    summary:
      'Tier 1 security operations role supporting enterprise AWS cloud security: monitoring, triaging and investigating security events.',
    responsibilities: [
      'Performed Tier 1 SOC alert triage, incident investigation and threat analysis using AWS GuardDuty, Security Hub, CloudTrail and ServiceNow.',
      'Investigated 50+ enterprise cloud security incidents and ServiceNow requests across AWS production environments.',
      'Analysed GuardDuty findings involving S3 exposure, IAM anomalies, Amazon RDS, Amazon SES and Kubernetes workloads.',
      'Reviewed CloudTrail logs to validate suspicious activity, investigate potential root causes and support remediation.',
      'Monitored Security Hub findings and investigated activity using CloudWatch alongside CloudTrail.',
      'Coordinated remediation through ServiceNow, contributing to an estimated 6–7% improvement in the AWS Security Hub compliance score.',
      'Collaborated with cloud security teams to strengthen cloud security posture and incident response.',
    ],
    tags: ['AWS GuardDuty', 'AWS Security Hub', 'CloudTrail', 'CloudWatch', 'ServiceNow', 'IAM', 'S3'],
  },
];

export const skillCategories = [
  {
    id: 'secops',
    label: 'Security Operations',
    icon: 'shield',
    blurb: 'The analyst workflow I use in a SOC environment.',
    skills: [
      { name: 'Tier 1 SOC Operations', note: 'Daily monitoring, triage and escalation workflow.' },
      { name: 'Security Monitoring', note: 'Watching alerts and activity for signs of risk.' },
      { name: 'Incident Investigation', note: 'Following evidence from alert to conclusion.' },
      { name: 'Threat Detection & Analysis', note: 'Assessing whether activity is malicious.' },
      { name: 'Threat Hunting', note: 'Proactively looking for suspicious behaviour.' },
      { name: 'Security Alert Triage', note: 'Prioritising and classifying incoming alerts.' },
      { name: 'Incident Response', note: 'Supporting containment and follow-up actions.' },
      { name: 'Remediation Coordination', note: 'Tracking fixes through ServiceNow.' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud Security',
    icon: 'cloud',
    blurb: 'Security monitoring across AWS services.',
    skills: [
      { name: 'AWS Cloud Security', note: 'Security concepts applied to AWS environments.' },
      { name: 'Cloud Security Monitoring', note: 'Tracking security signals in the cloud.' },
      { name: 'AWS GuardDuty', note: 'Reviewing threat detection findings.' },
      { name: 'AWS Security Hub', note: 'Reviewing aggregated security findings.' },
      { name: 'AWS CloudTrail', note: 'Investigating API and account activity.' },
      { name: 'AWS CloudWatch', note: 'Logs and metrics for investigation.' },
      { name: 'IAM, S3, RDS, SES, EKS', note: 'Working familiarity with these AWS services.' },
    ],
  },
  {
    id: 'tools',
    label: 'Security Tools',
    icon: 'tool',
    blurb: 'Tooling for detection, investigation and tracking.',
    skills: [
      { name: 'SIEM Fundamentals', note: 'Core concepts of log collection and correlation.' },
      { name: 'IBM QRadar', note: 'Foundational knowledge; SIEM Foundation badge.' },
      { name: 'AWS GuardDuty', note: 'Managed threat detection service.' },
      { name: 'AWS Security Hub', note: 'Centralised security findings view.' },
      { name: 'ServiceNow', note: 'Security ticket management.' },
    ],
  },
  {
    id: 'programming',
    label: 'Programming',
    icon: 'code',
    blurb: 'Languages I use for analysis and automation.',
    skills: [
      { name: 'Python', note: 'Scripting and security-focused projects.' },
      { name: 'SQL', note: 'Querying and analysing data.' },
    ],
  },
  {
    id: 'platforms',
    label: 'Platforms & Technologies',
    icon: 'layers',
    blurb: 'Platforms I work and build with.',
    skills: [
      { name: 'Amazon Web Services', note: 'Primary cloud platform.' },
      { name: 'Linux', note: 'Command-line familiarity.' },
      { name: 'ServiceNow', note: 'ITSM / ticketing platform.' },
      { name: 'Git', note: 'Version control.' },
      { name: 'GitHub', note: 'Code hosting and collaboration.' },
    ],
  },
];

/**
 * status: 'professional' is never used here — these are personal projects / labs,
 * and are labelled as such in the UI. Update `status` and `repo` as work progresses.
 * Allowed status values: 'In Development' | 'Personal Project' | 'Hands-on Lab'
 */
export const projects = [
  {
    id: 'sentineliq',
    name: 'SentinelIQ',
    subtitle: 'AWS Security Monitoring',
    type: 'Personal Project',
    status: 'In Development',
    accent: 'blue',
    icon: 'radar',
    overview:
      'A personal AWS security monitoring project that brings together findings and activity from AWS security services into one place for easier review and investigation.',
    problem:
      'Security signals in AWS are spread across several services, which makes it slow to see the full picture of an alert. This project explores consolidating them into a clearer monitoring view.',
    tech: ['AWS GuardDuty', 'AWS Security Hub', 'AWS CloudTrail', 'AWS CloudWatch', 'Python'],
    features: [
      'Collect findings from GuardDuty and Security Hub',
      'Use CloudTrail and CloudWatch data as investigation context',
      'Prioritise alerts for faster triage',
    ],
    featuresLabel: 'Planned features',
    architecture: [
      { step: 'AWS Sources', detail: 'GuardDuty, Security Hub, CloudTrail, CloudWatch' },
      { step: 'Collection', detail: 'Python-based ingestion of findings and events' },
      { step: 'Analysis', detail: 'Normalisation and alert prioritisation' },
      { step: 'Review', detail: 'Monitoring view for analyst investigation' },
    ],
    repo: 'https://github.com/ananya-s-iyengar/SentinelIQ-AWS-Security-Monitoring', // e.g. 'https://github.com/your-username/sentineliq'
  },
  {
    id: 'ai-security-knowledge-graph',
    name: 'AI Security Knowledge Graph',
    subtitle: 'Connecting security data as a graph',
    type: 'Personal Project',
    status: 'In Development',
    accent: 'violet',
    icon: 'graph',
    overview:
      'A personal project exploring how security concepts, alerts and relationships can be modelled as a knowledge graph to support analysis and investigation.',
    problem:
      'Security data is often siloed in flat lists. Representing entities and relationships as a graph may make connections between events, assets and techniques easier to explore.',
    tech: ['Python', 'SQL', 'Graph modelling', 'Git & GitHub'],
    features: [
      'Model security entities and their relationships',
      'Explore connections between alerts, assets and techniques',
      'Support analyst-style questions over linked data',
    ],
    featuresLabel: 'Planned features',
    architecture: [
      { step: 'Security Data', detail: 'Alerts, events and reference knowledge' },
      { step: 'Extraction', detail: 'Python processing into entities and relations' },
      { step: 'Graph Model', detail: 'Linked representation of security concepts' },
      { step: 'Exploration', detail: 'Queries to explore relationships' },
    ],
    repo: '',
  },
  {
    id: 'cloud-attack-simulator',
    name: 'Cloud Attack Simulator',
    subtitle: 'Generating detection test scenarios',
    type: 'Personal Project',
    status: 'In Development',
    accent: 'blue',
    icon: 'target',
    overview:
      'A personal project to simulate common cloud attack behaviours in a controlled, owned AWS test environment so that detection and monitoring can be validated.',
    problem:
      'Detection tooling is only useful if it is tested. Safely reproducing known attacker behaviour helps verify what monitoring services actually surface.',
    tech: ['Python', 'AWS', 'AWS CloudTrail', 'AWS GuardDuty'],
    features: [
      'Scenario-based simulation of common cloud attack behaviours',
      'Designed for isolated, self-owned test accounts only',
      'Observe the resulting logs and detections',
    ],
    featuresLabel: 'Planned features',
    architecture: [
      { step: 'Scenario', detail: 'Defined attack behaviour to reproduce' },
      { step: 'Simulation', detail: 'Python-driven actions in a test account' },
      { step: 'Telemetry', detail: 'CloudTrail logs and service findings' },
      { step: 'Validation', detail: 'Review what was and was not detected' },
    ],
    repo: '',
  },
  {
    id: 'aws-threat-detection-lab',
    name: 'AWS Threat Detection Lab',
    subtitle: 'Detection and investigation practice',
    type: 'Hands-on Lab',
    status: 'Hands-on Lab',
    accent: 'violet',
    icon: 'flask',
    overview:
      'A hands-on lab for practising threat detection and investigation workflows using AWS security services in a personal environment.',
    problem:
      'Reading about detections is not the same as investigating them. A lab provides a safe place to practise following findings through logs to a conclusion.',
    tech: ['AWS GuardDuty', 'AWS Security Hub', 'AWS CloudTrail', 'AWS CloudWatch'],
    features: [
      'Review GuardDuty findings in a personal AWS environment',
      'Trace activity through CloudTrail and CloudWatch',
      'Document investigation steps and conclusions',
    ],
    featuresLabel: 'Lab focus',
    architecture: [
      { step: 'Lab Account', detail: 'Personal AWS environment' },
      { step: 'Detection', detail: 'GuardDuty and Security Hub findings' },
      { step: 'Investigation', detail: 'CloudTrail and CloudWatch log analysis' },
      { step: 'Write-up', detail: 'Documented findings and lessons' },
    ],
    repo: 'https://github.com/ananya-s-iyengar/SentinelLog---Log-Ananlysis-threat-detection-tool',
  },
];

/**
 * `level` is the descriptor shown on the badge itself. `credentialUrl` is optional —
 * add each badge's Credly link and a "Verify" link appears automatically.
 */
export const certifications = {
  earned: [
    { name: 'CompTIA Security+ ce', type: 'Certification', issuer: 'CompTIA', level: 'Security+ · Plus Series', credentialUrl: 'https://www.credly.com/badges/dd507e4e-2672-499f-96da-d1f9a1607c33' },
    {
      name: 'IBM QRadar SIEM Foundation',
      type: 'Badge',
      issuer: 'IBM',
      level: 'IBM Security · Intermediate',
      credentialUrl: 'https://www.credly.com/badges/8aeaaa51-7cc1-4816-adb5-ba3266219163',
    },
    { name: 'QRadar Security Orchestration and Response (SOAR) Sales Foundation', type: 'Badge', issuer: 'IBM', level: 'IBM Security · Sales Foundation', credentialUrl: 'https://www.credly.com/badges/b876bfa3-5035-47dc-850c-76c27037a927' },
    { name: 'QRadar Endpoint Detection and Response (EDR) Sales Foundation', type: 'Badge', issuer: 'IBM', level: 'IBM Security · Sales Foundation', credentialUrl: 'https://www.credly.com/badges/eabf625c-deaa-4176-a24c-d18cac3b366e' },
    { name: 'Think Like a Hacker', type: 'Badge', issuer: 'IBM', level: 'IBM Security · Foundational', credentialUrl: 'https://www.credly.com/badges/9c1472c9-ed8a-4c99-8adf-08838cd9cc8d' },
    { name: 'IBM Generative & Agentic AI Foundation', type: 'Badge', issuer: 'IBM', level: 'IBM Consulting · Foundational', credentialUrl: 'https://www.credly.com/badges/697cf1da-fe5a-4b55-8c05-192c5a252dfc' },
    { name: 'watsonx.data Sales Foundation', type: 'Badge', issuer: 'IBM', level: 'IBM Data and AI · Sales Foundation', credentialUrl: 'https://www.credly.com/badges/b7510228-f13b-47a8-bb38-37a043c900c6' },
    { name: 'Bobathon Innovator', type: 'Badge', issuer: 'IBM', level: 'IBM Software', credentialUrl: 'https://www.credly.com/badges/6a4f2bd3-bce1-42ca-9cd5-a145e92140d3' },
    { name: 'OpenAI Cyber Solutions Practitioner', type: 'Badge', issuer: 'OpenAI', level: 'Practitioner', credentialUrl: '' },
    { name: 'OpenAI Cyber Deployment Practitioner', type: 'Badge', issuer: 'OpenAI', level: 'Practitioner', credentialUrl: '' },
    { name: 'Claude Partner Badge – Claude Code', type: 'Badge', issuer: 'Anthropic', level: 'Partner Badge', credentialUrl: '' },
  ],
  inProgress: [
    { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', note: 'Expected 2026 — not yet earned' },
  ],
};

export const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  institution: 'Bangalore City University',
  cgpa: '9.05',
  scale: '10',
};

export const contact = {
  closing:
    'I am always happy to connect with security professionals, recruiters and university admissions teams. If you would like to talk about security operations, cloud security or opportunities, send me a message.',
};
