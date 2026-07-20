// Set includeInPdf: false on any item to exclude it from the PDF.
// Items default to included if the flag is omitted.
// Set sections.<name> to false to skip an entire section in the PDF.

export const resume = {
  name: 'Franco Lopez',
  headline: 'Platform & DevOps Engineer · Kubernetes · GitOps · Cloud Infrastructure',
  pdfHeadline: 'Platform & DevOps Engineer',  // shorter, used only in PDF
  location: 'Raleigh-Durham, NC',
  availability: 'Open to remote and hybrid Platform, DevOps, SRE, and Cloud Infrastructure roles',
  languages: ['English', 'Spanish'],
  contact: {
    email: 'hello@jfrancolopez.com',
    linkedin: 'linkedin.com/in/jfranco-lopez',
    github: 'github.com/jfrancolopez',
    blog: 'jfrancolopez.com',
  },

  // PDF section toggles — set to false to omit a whole section from the PDF.
  pdfSections: {
    summary: true,
    skills: true,
    experience: true,
    projects: true,
    educationAndCertifications: true,
    currentlyLearning: false,
    languages: false,
    companyContext: false,
    stackLines: false,
  },

  // Long version — used on the website.
  summary:
        'Platform and DevOps engineer with 15+ years of experience in software engineering, cloud infrastructure, and production systems. I design and operate Kubernetes-hosted platforms, modernize cloud and identity infrastructure, and build automation and internal platforms that real users depend on. My current production work runs on a 3-node Kubernetes cluster serving more than 350 dealers across North America. I started my career as a software engineer, spent the last decade building and leading the systems behind manufacturing and business operations, and now focus on hands-on platform engineering, Kubernetes, and DevOps. Currently pursuing the Certified Kubernetes Administrator (CKA).',

  // Short version — used only in the PDF. Falls back to summary if omitted.
  pdfSummary:
      'Platform and DevOps engineer with over 15 years of experience in software engineering, cloud infrastructure, and production systems. I design and operate Kubernetes platforms, modernize cloud and identity infrastructure, and build automation and internal platforms used by hundreds of users across North America. Bilingual in English and Spanish.',

  skills: [
    {
      label: 'Platform Engineering',
      items: ['Linux','Kubernetes','Docker','Talos Linux','VMware','Hyper-V','Networking','Fortinet','Cisco'],
    },
    {
      label: 'Cloud & Identity',
      items: ['Microsoft Azure', 'GCP', 'Linode', 'Cloudflare', 'Azure IaaS', 'Azure AD / Entra ID', 'MFA', 'Conditional Access'],
    },
    {
      label: 'DevOps & Automation',
      items: ['GitOps', 'Flux CD', 'GitHub Actions', 'CI/CD', 'Helm', 'Bash', 'Python', 'Automation'],
    },
    {
      label: 'Development',
      items: ['PostgreSQL', 'REST APIs', 'SQL', 'React', 'Claris Filemaker', 'PHP', 'Microsoft 365'],
    },
  ],

  experience: [
  {
    company: 'LS Tractor USA',
    companyContext:
      'North American operations of LS Mtron — a global tractor manufacturer (LS Group, Korea) sold in the US under both LS and New Holland Agriculture Tractors.',
    role: 'IT Manager — Platform Engineering',
    location: 'Raleigh, NC',
    dates: 'Oct 2022 – Present',
    bullets: [
      {
          text: 'Lead platform engineering initiatives supporting manufacturing systems, dealer platforms, cloud infrastructure, networking, identity, and cybersecurity across North American operations.',
      },
      {
          text: 'Design and operate production Kubernetes platforms supporting internal and dealer-facing applications, including CI/CD workflows, containerized deployments, backup strategies, and disaster recovery.',
      },
      {
        text: 'Modernized enterprise identity by migrating 200+ users from on-prem Active Directory to Microsoft Entra ID with Azure AD Connect, MFA, Conditional Access, and OneDrive adoption.',
      },
      {
        text: 'Designed and deployed complete infrastructure for new manufacturing facilities in Texas and North Carolina, including networking, compute, security, identity, and secure remote access.',
      },
      {
          text: 'Build internal platforms and automation that streamline dealer operations, employee training, and corporate workflows.',
      },
      {
        text: 'Build and mentor a cross-functional engineering team across infrastructure, applications, and security.',
        includeInPdf: false,
      },
    ],
    stack: [
      'Kubernetes',
      'Linode',
      'Azure',
      'Docker',
      'GCP',
      'GitHub Actions',
      'React',
      'PostgreSQL',
      'Fortinet',
      'Cloudflare',
    ],
  },

    {
      company: 'Interamerican Foods Corp. / La Moderna USA',
      companyContext: 'US arm of Grupo La Moderna — the leading pasta brand in Mexico and one of the largest pasta manufacturers in Latin America. Flagship US plant produces private-label pasta for Walmart (Great Value), Campbell\'s, and Goya.',
      role: 'IT Manager — Cloud Infrastructure',
      location: 'Cleburne, TX',
      dates: 'Jun 2017 – Oct 2022',
      bullets: [
        { text: 'Stood up the entire IT and infrastructure stack for a 24/7 automated manufacturing facility from greenfield — networking, compute, storage, identity, and OT/IT integration.' },
        { text: 'Designed and deployed the company\'s US web platform (lamodernausa.com) on Azure IaaS, including DNS, TLS, and supporting infrastructure.' },
        { text: 'Built and implemented a multi-tier cloud backup and disaster recovery system to protect multiple 24/7 production and packaging line servers, with automated validation and failover testing, reducing recovery time from over 1 hour to under 10 minutes.' },
        { text: 'Hardened the perimeter with next-gen firewalls, Cloudflare DNS/WAF, WireGuard VPN, and network segmentation across distributed sites.' },
        { text: 'Led Cisco Meraki rollout (networking, wireless, security cameras) across all US locations with zero production downtime.' },
        { text: 'Rolled out FreshService ITSM across 27 sites in the US, Mexico, and Guatemala — 2,500+ users, with SLA tracking and automated workflows.', includeInPdf: false },
      ],
      stack: ['Azure', 'VMware', 'HPE SimpliVity', 'Cisco Meraki', 'Fortinet', 'Cloudflare', 'WireGuard', 'Microsoft 365', 'FreshService'],
    },
    {
      company: 'SR Traffic Service Inc.',
      companyContext: 'Cross-border logistics operator running four distribution facilities between the US and Mexico.',
      role: 'Software Engineer',
      location: 'Laredo, TX',
      dates: 'Jan 2010 – Jun 2017',
      bullets: [
        { text: 'Built a Warehouse Management System from scratch — barcode generation, handheld scanner integration, mobile and desktop clients, real-time inventory, customs documentation, and client-facing reporting. Served 20+ international clients across 4 facilities.' },
        { text: 'Designed REST APIs and SQL-backed workflows powering inventory, dispatch, customs paperwork, and customer portals.' },
        { text: 'Automated build, test, and deployment processes; migrated workloads to cloud infrastructure for scalability and cost control.' },
        { text: 'Ran regular security audits and led remediation work across business-critical systems.', includeInPdf: false },
      ],
      stack: ['JavaScript', 'PHP', 'SQL', 'REST APIs', 'BASH', 'Filemaker Claris', 'Cloud Infrastructure', 'CI/CD Foundations'],
    },
  ],

  projects: [
    {
      name: 'Start Blue — Production Quote Platform',
      url: 'startblue.lstractorusa.com',
      description:
         'Design and operate a production 3-node Kubernetes platform serving more than 350 dealers across the US and Canada. Built the React + PostgreSQL application, deployment pipelines, backup strategy, and disaster recovery. Two years in production with no major incidents and more than 2,000 quotes processed.',
      stack: ['Kubernetes', 'Linode', 'React', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    },
    
    {
      name: 'LS Academy — Learning Platform (in progress)',
      description:
          'Designing a Kubernetes-hosted learning platform for more than 500 users using GitOps, Argo CD, and GitHub Actions to standardize deployments and application lifecycle management.',
      stack: ['Kubernetes', 'Argo CD', 'GitHub Actions', 'GitOps'],
      includeInPdf: false,
    },
    {
      name: 'Azure AD / Entra ID Migration',
      description:
        'Modernized enterprise identity by migrating more than 200 users from on-prem Active Directory to Microsoft Entra ID with Azure AD Connect, MFA, Conditional Access, GPO modernization, and NAS-to-OneDrive migration.',
      stack: ['Azure AD / Entra ID', 'Azure AD Connect', 'Microsoft 365', 'PowerShell'],
    },
    {
  name: 'Cybersecurity & Disaster Recovery',
  description:
      'Designed and implemented a multi-layer backup and disaster recovery strategy, secured public-facing services with Cloudflare, deployed WireGuard VPN for secure remote access, and strengthened infrastructure security through network hardening and recovery validation.',
  stack: ['Cloudflare', 'WireGuard', 'Linux', 'Backup & DR', 'Networking'],
    },
    
    
    
    {
      name: 'Personal Developer Platform',
      url: 'github.com/jfrancolopez/Domum',
      description:
          'Self-hosted platform running Talos Kubernetes, Proxmox, Docker, and Debian infrastructure. Uses GitOps workflows to automate service deployment, secrets management, monitoring, backups, DNS, and platform operations for continuous experimentation and infrastructure development.',
      stack: ['Proxmox', 'Kubernetes', 'Docker', 'GitOps', 'Linux', 'Traefik', 'Talos', 'Flux CD', 'Helm'],
      includeInPdf: false,
    },
    
    {
      name: 'LS Tractor Dealer Recruitment Site',
      url: 'recruitment.lstractorusa.com',
      description:
        'Corporate recruitment funnel for prospective LS Tractor dealers. Owned design, frontend build, deployment, DNS, and TLS on a corporate subdomain.',
      stack: ['HTML/CSS/JS', 'DNS/TLS', 'Subdomain Provisioning'],
      includeInPdf: false,
    },
    {
      name: 'LibrAIry — AI-Powered File Organization',
      url: 'github.com/jfrancolopez/LibrAIry',
      description:
         'AI-assisted file organization pipeline combining local language models, metadata fingerprinting, and Bash automation to classify, analyze, and organize large file collections without relying on cloud services.',
      stack: ['Bash', 'Local AI Models', 'Linux'],
      includeInPdf: false,
    },
    
    
  ],

  educationAndCertifications: [
    {
      title: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'The Linux Foundation',
      status: 'In progress',
    },
    {
      title: 'B.S. Computer Systems Engineering',
      issuer: 'Universidad del Valle de México',
      status: '2005 – 2010',
    },
    {
      title: 'Microsoft Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      status: 'Mar 2022',
    },
    {
      title: 'Engineering Cisco Meraki Solutions',
      issuer: 'Cisco Meraki',
      status: 'Sep 2021',

    },
    {
      title: 'HPE SimpliVity 380 System Administration (VMware)',
      issuer: 'HPE',
      status: 'Apr 2019',

    },
  ],

  currentlyLearning: [
    'Certified Kubernetes Administrator (CKA) — in progress',
    'Argo CD and advanced GitOps patterns (deploying with LS Academy)',
    'Terraform and Infrastructure as Code (next, post-CKA)',
    'Go Programming Language (for building Kubernetes tooling and automation) (on the roadmap)',
    'Building with AI developer tools (Claude Code, MCP, agentic workflows) for infrastructure automation and documentation',
  ],
};
