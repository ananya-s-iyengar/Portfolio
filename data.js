/**
 * ============================================================
 *  PORTFOLIO DATA — Ananya S
 *  Source: Professional resume (authoritative)
 *  Edit this file to update content. Save and reload to apply.
 * ============================================================
 */

const PORTFOLIO = {

  /* ----------------------------------------------------------
   * IDENTITY
   * ---------------------------------------------------------- */
  name:     "Ananya S",
  initials: "AS",
  title:    "Cybersecurity Analyst",
  roles: [
    "Cybersecurity Analyst",
    "SOC Operations",
    "AWS Cloud Security",
    "Security Monitoring"
  ],

  summary: `Cybersecurity Analyst with experience supporting IBM enterprise AWS cloud security operations. Skilled in SOC operations, incident investigation, AWS GuardDuty, Security Hub, CloudTrail, IAM, ServiceNow, Python, and SQL.`,

  /* ----------------------------------------------------------
   * CONTACT & LINKS  (from resume)
   * ---------------------------------------------------------- */
  email:    "ananyaiyengar55@gmail.com",
  linkedin: "https://www.linkedin.com/in/ananya-s-164400350",
  github:   "https://github.com/ananya-s-iyengar",
  resume:   "AnanyaIyengar_CybersecurityAnalyst.pdf",

  /* ----------------------------------------------------------
   * HERO STATUS BAR
   * ---------------------------------------------------------- */
  heroBadge: "IBM CLIENT ENVIRONMENT · SOC · AWS CLOUD SECURITY",

  /* ----------------------------------------------------------
   * HERO SECURITY STACK BADGES
   * ---------------------------------------------------------- */
  securityStack: [
    { name: "GuardDuty",    color: "blue" },
    { name: "Security Hub", color: "blue" },
    { name: "CloudTrail",   color: "blue" },
    { name: "IAM",          color: "cyan" },
    { name: "ServiceNow",   color: "cyan" },
    { name: "Python",       color: "gray" },
    { name: "SQL",          color: "gray" }
  ],

  /* ----------------------------------------------------------
   * EXPERIENCE  (from resume — authoritative)
   * ---------------------------------------------------------- */
  experience: [
    {
      title:   "Cybersecurity Analyst",
      company: "Artech Information Systems Pvt. Ltd.",
      client:  "IBM",                  // staffing client — displayed separately
      location:"Bangalore, India",
      period:  "August 2025",          // "August 2025 – Present" rendered by JS
      current: true,
      bullets: [
        "Investigated 50+ enterprise cloud security incidents and ServiceNow requests across AWS production environments.",
        "Performed Tier-1 SOC alert triage, incident investigation, and threat analysis using AWS GuardDuty, Security Hub, CloudTrail, and ServiceNow.",
        "Investigated GuardDuty findings involving S3 exposure, IAM anomalies, Amazon RDS, Amazon SES, and Kubernetes workloads.",
        "Reviewed AWS CloudTrail logs to validate suspicious activities, identify root causes, and support remediation efforts.",
        "Coordinated remediation through ServiceNow, contributing to an estimated 6–7% improvement in AWS Security Hub compliance score.",
        "Collaborated with cloud security teams to strengthen enterprise cloud security posture and improve incident response."
      ],
      tags: [
        { name: "AWS GuardDuty",    color: "blue" },
        { name: "Security Hub",     color: "blue" },
        { name: "CloudTrail",       color: "cyan" },
        { name: "IAM",              color: "cyan" },
        { name: "ServiceNow",       color: "amber" },
        { name: "Python",           color: "gray"  }
      ],
      qradarNote: null
    }
  ],

  /* ----------------------------------------------------------
   * PROJECTS  (ordered by resume priority)
   *
   * tier:        1 = Professional Security Portfolio
   *              2 = Other Technical Projects
   * featured:    true = Tier 1 featured row
   * github:      "" = private / not published
   * privateNote: shown instead of GitHub button when github is ""
   * ---------------------------------------------------------- */
  projects: [

    /* ── TIER 1 — PROFESSIONAL SECURITY PORTFOLIO ── */
    {
      id:            "sentineliq",
      tier:          1,
      featured:      true,
      name:          "SentinelIQ – AWS Cloud Security Monitoring Platform",
      label:         "AWS Security Monitoring",
      badge:         "",
      category:      "Cloud Security · AWS",
      categoryColor: "blue",
      description:   "An AWS-based cloud security monitoring platform designed to centralize GuardDuty, Security Hub, and CloudTrail findings to improve cloud security visibility.",
      relevance:     "AWS Security Monitoring · GuardDuty · Security Hub · CloudTrail · Cloud Threat Visibility",
      projectDomain: null,
      features: [
        "Centralized AWS security findings",
        "GuardDuty monitoring",
        "Security Hub monitoring",
        "CloudTrail analysis",
        "Security event dashboards",
        "Incident tracking",
        "Cloud threat visibility"
      ],
      workflow: [
        { label: "AWS Environment",     icon: "cloud"  },
        { label: "Security Monitoring", icon: "eye"    },
        { label: "Security Events",     icon: "alert"  },
        { label: "Analysis",            icon: "list"   },
        { label: "Findings",            icon: "shield" },
        { label: "Investigation",       icon: "search" }
      ],
      tags: [
        { name: "AWS",          color: "blue" },
        { name: "GuardDuty",    color: "blue" },
        { name: "Security Hub", color: "blue" },
        { name: "CloudTrail",   color: "cyan" },
        { name: "Python",       color: "gray" }
      ],
      filters:     ["cybersecurity", "aws-cloud"],
      github:      "https://github.com/ananya-s-iyengar/SentinelIQ-AWS-Security-Monitoring",
      demo:        "",
      privateNote: "",
      status:      "Public Repository",
      screenshots: []
    },
    {
      id:            "sentinellog",
      tier:          1,
      featured:      true,
      name:          "SentinelLog – Log Analysis & Threat Detection Tool",
      label:         "Log Analysis & Threat Detection",
      badge:         "",
      category:      "Cybersecurity · Log Analysis · Threat Detection",
      categoryColor: "amber",
      description:   "A security log analysis platform that parses logs, detects suspicious activities, and classifies incidents by severity.",
      relevance:     "Log Analysis · Suspicious Activity Detection · Incident Severity Classification · SOC",
      projectDomain: null,
      features: [
        "Security log parsing",
        "Suspicious activity detection",
        "Incident severity classification",
        "Interactive SOC dashboard",
        "Security investigation support",
        "Incident reporting"
      ],
      workflow: [
        { label: "Log Input",           icon: "file"   },
        { label: "Log Analysis",        icon: "list"   },
        { label: "Pattern Detection",   icon: "search" },
        { label: "Suspicious Activity", icon: "alert"  },
        { label: "Threat Analysis",     icon: "shield" },
        { label: "Result",              icon: "check"  }
      ],
      tags: [
        { name: "Log Analysis",     color: "blue"  },
        { name: "Threat Detection", color: "amber" },
        { name: "Python",           color: "gray"  },
        { name: "SOC",              color: "gray"  }
      ],
      filters:     ["cybersecurity", "threat-detection"],
      github:      "https://github.com/ananya-s-iyengar/SentinelLog---Log-Analysis-threat-detection-tool",
      demo:        "",
      privateNote: "",
      status:      "Public Repository",
      screenshots: []
    },
    {
      id:            "watsonx",
      tier:          1,
      featured:      true,
      name:          "AI-Powered Security Investigation & Threat Analysis Platform",
      label:         "IBM Watsonx Challenge",
      badge:         "IBM Watsonx Challenge — Featured Project",
      category:      "Cybersecurity · AI · Security Investigation",
      categoryColor: "blue",
      description:   "An AI-powered security investigation and threat analysis platform developed for the IBM Watsonx Challenge. The project combines AI-assisted analysis with AWS security concepts to support structured security investigation, evidence analysis, and report generation.",
      relevance:     "AI-assisted security investigation · AWS security analysis · Threat analysis · Automated security reporting",
      projectDomain: null,
      features: [],
      workflow: [
        { label: "Security Finding",    icon: "alert"  },
        { label: "Investigation",       icon: "search" },
        { label: "Evidence Analysis",   icon: "file"   },
        { label: "AI-Assisted Analysis",icon: "brain"  },
        { label: "Security Assessment", icon: "shield" },
        { label: "Investigation Report",icon: "report" }
      ],
      tags: [
        { name: "IBM Watsonx",  color: "blue" },
        { name: "AWS Security", color: "blue" },
        { name: "AI Analysis",  color: "cyan" },
        { name: "Python",       color: "gray" }
      ],
      filters:     ["cybersecurity", "ai-ml"],
      github:      "",
      demo:        "",
      privateNote: "Source code is not publicly published because the project contains protected credentials/secrets.",
      status:      "Private / Not Publicly Published",
      screenshots: []
    },
    {
      id:            "sentinelnexus",
      tier:          1,
      featured:      true,
      name:          "SentinelNexus",
      label:         "AI SIEM / Cybersecurity",
      badge:         "",
      category:      "Cybersecurity · SIEM · AI",
      categoryColor: "cyan",
      description:   "An AI-assisted security analysis platform designed to support security event monitoring, log correlation, investigation workflows, and threat analysis.",
      relevance:     "SIEM · AI-assisted analysis · Security event monitoring · Threat investigation",
      projectDomain: null,
      features: [],
      workflow: [],
      tags: [
        { name: "SIEM",     color: "blue" },
        { name: "AI",       color: "cyan" },
        { name: "Python",   color: "gray" },
        { name: "Security", color: "gray" }
      ],
      filters:     ["cybersecurity", "siem", "ai-ml"],
      github:      "https://github.com/ananya-s-iyengar/SentinelNexus_AI_SEIM_tool",
      demo:        "",
      privateNote: "",
      status:      "Public Repository",
      screenshots: []
    },

    /* ── TIER 2 — OTHER TECHNICAL PROJECTS ── */
    {
      id:            "threat-intel-dashboard",
      tier:          2,
      featured:      false,
      name:          "Threat Intelligence & Detection Dashboard",
      label:         "Threat Intelligence",
      badge:         "",
      category:      "Cybersecurity · Threat Intelligence",
      categoryColor: "amber",
      description:   "A real-time dashboard displaying global threat intelligence, attack trends, and automated threat summaries.",
      relevance:     "Threat Intelligence · Attack Trend Monitoring · Security Analytics",
      projectDomain: null,
      features: [
        "Global threat intelligence visualization",
        "Attack trend monitoring",
        "Automated threat summaries",
        "Interactive security analytics",
        "Threat visibility dashboard"
      ],
      workflow: [],
      tags: [
        { name: "Threat Intelligence", color: "amber" },
        { name: "Security Analytics",  color: "blue"  },
        { name: "Python",              color: "gray"  }
      ],
      filters:     ["cybersecurity", "threat-detection"],
      github:      "",     // [UPDATE: GitHub URL if/when published]
      demo:        "",
      privateNote: "",
      status:      "Public Repository",
      screenshots: []
    },
    {
      id:            "face-recognition",
      tier:          2,
      featured:      false,
      name:          "Face Recognition Security System",
      label:         "Computer Vision",
      badge:         "",
      category:      "Computer Vision",
      categoryColor: "cyan",
      description:   "A computer-vision project implementing face recognition for identity and access-control use cases.",
      relevance:     "Computer Vision · Face Recognition · Access Control Prototype",
      projectDomain: null,
      features:      [],
      workflow:      [],
      tags: [
        { name: "Python",          color: "gray" },
        { name: "OpenCV",          color: "cyan" },
        { name: "Computer Vision", color: "cyan" }
      ],
      filters:     ["computer-vision"],
      github:      "https://github.com/ananya-s-iyengar/face-recognition",
      demo:        "",
      privateNote: "",
      status:      "Public Repository",
      screenshots: []
    },
    {
      id:            "vehicle-detection",
      tier:          2,
      featured:      false,
      name:          "Vehicle Detection",
      label:         "Computer Vision / AI",
      badge:         "",
      category:      "Computer Vision · AI",
      categoryColor: "amber",
      description:   "A computer-vision project implementing vehicle detection from image or video input using object-detection techniques.",
      relevance:     null,
      projectDomain: "Computer Vision · Object Detection · Artificial Intelligence",
      features:      [],
      workflow:      [],
      tags: [
        { name: "Python",          color: "gray"  },
        { name: "Computer Vision", color: "amber" },
        { name: "AI",              color: "cyan"  }
      ],
      filters:     ["computer-vision", "ai-ml"],
      github:      "https://github.com/ananya-s-iyengar/Vehicle-detection",
      demo:        "",
      privateNote: "",
      status:      "Public Repository",
      screenshots: []
    },
    {
      id:            "heart-disease",
      tier:          2,
      featured:      false,
      name:          "Heart Disease Prediction Using AI/ML",
      label:         "Academic / Machine Learning",
      badge:         "Academic Project — BCA Final Year",
      category:      "AI · Machine Learning",
      categoryColor: "green",
      description:   "BCA final-year academic project applying machine-learning techniques to predict heart disease from clinical datasets. The project explores classification algorithms and predictive modelling.",
      relevance:     null,
      projectDomain: "Machine Learning · Predictive Modelling · Classification · AI/ML",
      features:      [],
      workflow:      [],
      tags: [
        { name: "Python",           color: "gray"  },
        { name: "Scikit-learn",     color: "cyan"  },
        { name: "Pandas",           color: "gray"  },
        { name: "Machine Learning", color: "green" }
      ],
      filters:     ["ai-ml"],
      github:      "https://github.com/ananya-s-iyengar/heart-disease-prediction-using-AI-ML",
      demo:        "",
      privateNote: "",
      status:      "Academic Project",
      screenshots: []
    },
    {
      id:            "jik-effect",
      tier:          2,
      featured:      false,
      name:          "Jik-effect",
      label:         "Development · Creative",
      badge:         "",
      category:      "Development · Creative Project",
      categoryColor: "gray",
      description:   "A development and creative project demonstrating implementation and experimentation with interactive software concepts.",
      relevance:     null,
      projectDomain: null,
      features:      [],
      workflow:      [],
      tags: [
        { name: "Development", color: "gray" }
      ],
      filters:     ["development"],
      github:      "https://github.com/ananya-s-iyengar/Jik-effect",
      demo:        "",
      privateNote: "",
      status:      "Public Repository",
      screenshots: []
    }
  ],

  /* ----------------------------------------------------------
   * SKILLS  (resume-aligned — professional experience prioritized)
   * ---------------------------------------------------------- */
  skills: [
    {
      title: "Security Operations",
      color: "default",
      items: [
        { name: "SOC Operations",             mono: false },
        { name: "Tier-1 Alert Triage",        mono: false },
        { name: "Incident Investigation",     mono: false },
        { name: "Threat Analysis",            mono: false },
        { name: "Security Monitoring",        mono: false },
        { name: "Incident Response",          mono: false },
        { name: "Security Finding Analysis",  mono: false }
      ]
    },
    {
      title: "AWS Security",
      color: "cyan",
      items: [
        { name: "Amazon GuardDuty",  mono: true  },
        { name: "AWS Security Hub",  mono: true  },
        { name: "AWS CloudTrail",    mono: true  },
        { name: "AWS IAM",           mono: true  },
        { name: "Amazon S3",         mono: true  },
        { name: "Amazon RDS",        mono: true  },
        { name: "Amazon SES",        mono: true  },
        { name: "Amazon EKS",        mono: true  },
        { name: "Kubernetes Security",mono: false }
      ]
    },
    {
      title: "Security Operations / ITSM",
      color: "amber",
      items: [
        { name: "ServiceNow",                  mono: true  },
        { name: "Incident Management",         mono: false },
        { name: "Security Incident Documentation", mono: false },
        { name: "Remediation Coordination",    mono: false }
      ]
    },
    {
      title: "Development",
      color: "green",
      items: [
        { name: "Python",       mono: true },
        { name: "SQL",          mono: true },
        { name: "Git",          mono: true },
        { name: "Linux",        mono: true }
      ]
    },
    {
      title: "Programming Languages",
      color: "default",
      items: [
        { name: "Python",      mono: true },
        { name: "Java",        mono: true },
        { name: "JavaScript",  mono: true },
        { name: "C",           mono: true },
        { name: "C++",         mono: true }
      ]
    },
    {
      title: "AI / Data",
      color: "cyan",
      items: [
        { name: "Pandas / NumPy",        mono: true  },
        { name: "Matplotlib",            mono: true  },
        { name: "Scikit-learn",          mono: true  },
        { name: "Machine Learning",      mono: false },
        { name: "IBM Watsonx",           mono: true  },
        { name: "AI-assisted Analysis",  mono: false }
      ]
    },
    {
      title: "Networking",
      color: "default",
      items: [
        { name: "TCP/IP",                    mono: false },
        { name: "DNS",                       mono: false },
        { name: "HTTP",                      mono: false },
        { name: "Network Security Concepts", mono: false },
        { name: "Firewalls",                 mono: false },
        { name: "Security Groups",           mono: false }
      ]
    },
    {
      title: "Security Frameworks & Concepts",
      color: "blue",
      items: [
        { name: "MITRE ATT&CK",               mono: false },
        { name: "NIST Cybersecurity Framework",mono: false },
        { name: "OWASP Top 10",               mono: false },
        { name: "AWS Well-Architected",        mono: false }
      ]
    }
  ],

  /* ----------------------------------------------------------
   * CREDENTIALS & BADGES
   *
   * type:          "credential" | "badge" | "recognition"
   * level:         displayed as a sub-label
   * filters:       array of filter keys for the credential filter bar
   * credentialUrl: "" = no link shown  (NEVER invent URLs)
   * imageUrl:      "" = fallback icon  (add real badge image paths here)
   * note:          optional small disclaimer shown on the card
   * ---------------------------------------------------------- */
  credentials: [
    /* ── CYBERSECURITY / SIEM — high visual prominence ── */
    {
      id:            "qradar-siem-foundation",
      name:          "IBM QRadar SIEM Foundation",
      issuer:        "IBM Security",
      type:          "credential",
      level:         "Intermediate",
      category:      "SIEM · Security Operations",
      categoryColor: "blue",
      description:   "IBM Security credential demonstrating foundational-to-intermediate knowledge of IBM QRadar SIEM concepts and security operations workflows.",
      note:          "Demonstrates training and knowledge — not production QRadar administration experience.",
      filters:       ["cybersecurity", "siem"],
      credentialUrl: "",   // [UPDATE: verified credential URL if available]
      imageUrl:      ""    // [UPDATE: badge image path, e.g. "img/qradar-badge.png"]
    },
    {
      id:            "think-like-a-hacker",
      name:          "Think Like a Hacker",
      issuer:        "IBM",
      type:          "badge",
      level:         "IBM Security — Foundational",
      category:      "Cybersecurity",
      categoryColor: "blue",
      description:   "IBM Security foundational credential covering attacker mindset and cybersecurity concepts.",
      note:          "",
      filters:       ["cybersecurity"],
      credentialUrl: "",
      imageUrl:      ""
    },
    {
      id:            "qradar-edr-sales-foundation",
      name:          "QRadar Endpoint Detection and Response (EDR) Sales Foundation",
      issuer:        "IBM Security",
      type:          "badge",
      level:         "Sales Foundation",
      category:      "Endpoint Security · QRadar",
      categoryColor: "cyan",
      description:   "IBM Security foundational credential covering QRadar Endpoint Detection and Response (EDR) concepts.",
      note:          "Sales Foundation credential — not representative of hands-on QRadar EDR administration or engineering experience.",
      filters:       ["cybersecurity", "siem"],
      credentialUrl: "",
      imageUrl:      ""
    },
    /* ── AI ── */
    {
      id:            "ibm-gen-agentic-ai-foundation",
      name:          "IBM Generative & Agentic AI Experienced Cybersecurity Engineer",
      issuer:        "IBM Consulting",
      type:          "badge",
      level:         "Foundational",
      category:      "Artificial Intelligence",
      categoryColor: "cyan",
      description:   "IBM credential recognizing generative and agentic AI knowledge in a cybersecurity engineer context.",
      note:          "",
      filters:       ["ai"],
      credentialUrl: "",
      imageUrl:      ""
    },
    /* ── CLOUD / DATA ── */
    {
      id:            "watsonx-data-sales-foundation",
      name:          "watsonx.data Sales Foundation",
      issuer:        "IBM",
      type:          "badge",
      level:         "Sales Foundation",
      category:      "Data · AI",
      categoryColor: "cyan",
      description:   "IBM foundational credential covering watsonx.data and its data and AI platform concepts.",
      note:          "Sales Foundation credential — not representative of production administration or engineering experience.",
      filters:       ["ai", "cloud-data"],
      credentialUrl: "",
      imageUrl:      ""
    },
    /* ── DEVELOPER / TECHNOLOGY ── */
    {
      id:            "claude-partner-badge",
      name:          "Claude Partner Badge – Claude Code",
      issuer:        "Anthropic / Claude",
      type:          "badge",
      level:         "Developer / AI Tooling",
      category:      "Developer · AI Tooling",
      categoryColor: "gray",
      description:   "Claude Partner Badge associated with Claude Code tooling.",
      note:          "Partner badge — not a formal professional certification.",
      filters:       ["developer-technology"],
      credentialUrl: "",
      imageUrl:      ""
    },
    /* ── INNOVATION ── */
    {
      id:            "bobathon-innovator",
      name:          "Bobathon Innovator",
      issuer:        "IBM",
      type:          "recognition",
      level:         "Credential / Recognition",
      category:      "Innovation · Technology",
      categoryColor: "amber",
      description:   "Recognition associated with participation and innovation through the IBM Bobathon.",
      note:          "Credential / Recognition — not a competition placement or award.",
      filters:       ["innovation"],
      credentialUrl: "",
      imageUrl:      ""
    }
  ],

  /* ----------------------------------------------------------
   * PROFESSIONAL DEVELOPMENT (in-progress / preparing)
   * ---------------------------------------------------------- */
  professionalDevelopment: [
    {
      name:   "CompTIA Security+",
      status: "Expected 2026",
      color:  "amber"
    },
    {
      name:   "AWS Certified Cloud Practitioner",
      status: "Expected 2026",
      color:  "cyan"
    }
  ],

  /* ----------------------------------------------------------
   * ACHIEVEMENTS
   * Only real accomplishments. No placeholder entries.
   * ---------------------------------------------------------- */
  achievements: [
    {
      title:       "IBM Watsonx Challenge",
      description: "Developed an AI-powered security investigation and threat analysis platform for the IBM Watsonx Challenge, combining AI-assisted analysis with AWS security concepts.",
      date:        "",          // [UPDATE: actual year/date if available]
      color:       "blue"
    }
  ],

  /* ----------------------------------------------------------
   * EDUCATION
   * [UPDATE: period] — replace with actual graduation years
   * ---------------------------------------------------------- */
  education: [
    {
      degree:      "Bachelor of Computer Applications (BCA)",
      institution: "Bangalore City University",
      location:    "Bangalore, India",
      period:      "",          // [UPDATE: "YYYY – YYYY"]
      cgpa:        "9.05",
      coursework:  [
        "Network Security",
        "Database Systems",
        "Software Engineering",
        "Data Structures",
        "Operating Systems",
        "Artificial Intelligence"
      ],
      project:     "Heart Disease Prediction Using Machine Learning"
    }
  ],

  /* ----------------------------------------------------------
   * AVAILABILITY (contact section)
   * show: false hides any items from public display
   * ---------------------------------------------------------- */
  availability: []

};
