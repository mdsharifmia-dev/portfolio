import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'MD SHARIF MIA',
    title: 'AI & Automation Engineer | AI Solutions & Full-Stack Developer',
    headline: 'AI Automation & Software That Solves Real Business Problems',
    bio: 'I build practical AI assistants, workflow automations, and full-stack web applications to help teams eliminate repetitive tasks, optimize client communication, and scale operational efficiency.',
    location: 'Dhaka, Bangladesh',
    availabilityText: 'Available for freelance projects & contracts',
    email: 'mdsharifmia.dev@gmail.com',
    whatsappNumber: '8801823286674',
    whatsappPresetMessage: 'Hello Sharif, I saw your portfolio and would like to discuss an AI/automation project.',
    githubUrl: 'https://github.com/mdsharifmia-dev',
    linkedinUrl: 'https://www.linkedin.com/in/mdsharifmia',
    youtubeUrl: 'https://www.youtube.com/@mdsharifmia-dev',
  },

  services: [
    {
      id: 'ai-agents',
      title: 'AI Agents & RAG Systems',
      shortDescription: 'Custom autonomous agents and intelligent document assistants engineered around your proprietary business knowledge and technical documentation.',
      iconName: 'Bot',
      features: [
        'Document retrieval & knowledge-base Q&A (RAG)',
        'Multi-step reasoning and automated task orchestration',
        'Custom Gemini and OpenAI API production integrations',
        'Grounded answers with verifiable source citations and safety guardrails',
      ],
    },
    {
      id: 'automation',
      title: 'Business Workflow & Chatbot Automation',
      shortDescription: 'Connecting your communication channels, CRMs, and databases into reliable, self-healing 24/7 automated pipelines.',
      iconName: 'Workflow',
      features: [
        'WhatsApp Cloud API & Facebook Messenger bot architecture',
        'Automated lead capture, instant qualification, and CRM routing',
        'n8n, Make, and webhook-driven custom automations',
        'Scheduled cross-platform data synchronization & telemetry alerts',
      ],
    },
    {
      id: 'web-apps',
      title: 'Full-Stack Web Applications',
      shortDescription: 'Ultra-fast, accessible web applications engineered with modern frameworks for internal enterprise tools, client portals, and real-time dashboards.',
      iconName: 'Code',
      features: [
        'Modern frontends built with Astro, Next.js, React, and Tailwind CSS',
        'High-performance Python (FastAPI) and Node.js REST API backends',
        'Secure database integration (PostgreSQL, Supabase) with row-level security',
        'Responsive, fluid typography and animations optimized for 120Hz displays',
      ],
    },
  ],

  projects: [
    {
      id: 'omnichannel-bot',
      title: 'Omnichannel Business Assistant',
      summary: 'Conversational assistant integrating Facebook Messenger and WhatsApp to answer common customer inquiries, collect qualified leads, and sync details to Google Sheets.',
      problem: 'Small businesses struggle to reply promptly to repetitive customer inquiries across messaging channels outside business hours, leading to dropped leads.',
      solution: 'Configured a webhook-driven automated responder with intent classification and automatic Google Sheets / CRM synchronization.',
      role: 'Designed webhook routing, implemented Meta Graph API endpoints, and integrated Google Sheets syncing.',
      category: 'Automation',
      status: 'Demo',
      techStack: ['WhatsApp Cloud API', 'Meta Graph API', 'Python', 'FastAPI', 'Webhooks'],
      githubUrl: 'https://github.com/mdsharifmia-dev',
      impactMetric: {
        label: 'Inquiry Capture',
        value: 'Instant 24/7 lead capture',
        evidenceNote: 'Demonstrated in prototype testing',
      },
    },
    {
      id: 'news-collector-agent',
      title: 'News Collector Agent (Telegram AI Assistant)',
      summary: 'Autonomous AI agent that crawls and browses tech publications, ingests newsletters and RSS feeds, and summarizes critical business intelligence with instant Telegram push alerts.',
      problem: 'Daily manual browsing across dozens of websites and newsletters consumes hours of valuable engineering time and risks missing crucial market shifts.',
      solution: 'Automated 24/7 web scraping, Gemini 3.8 Flash summarization pipeline, and real-time Telegram Bot digest delivery.',
      role: 'Engineered autonomous web crawler, AI summarization engine, and Telegram notification pipeline.',
      category: 'AI Agents',
      status: 'Live',
      techStack: ['Python', 'Gemini 3.8 Flash', 'Telegram Bot API', 'Headless Crawler', 'FastAPI'],
      githubUrl: 'https://github.com/mdsharifmia-dev/News-Collector-Agent',
      impactMetric: {
        label: 'Intelligence Efficiency',
        value: '100% automated news digest',
        evidenceNote: 'Delivers daily distilled updates to Telegram',
      },
    },
    {
      id: 'business-dashboard',
      title: 'Operations & Workflow Dashboard',
      summary: 'Full-stack responsive analytics dashboard tracking automation runs, lead capture status, and daily operation metrics with clean data visualizations.',
      problem: 'Teams running multiple automations lack a single pane of glass to monitor event logs, throughput, and success rates.',
      solution: 'Developed a clean, real-time dashboard displaying system health, task counts, and alert feeds.',
      role: 'Built responsive UI in Next.js/Tailwind CSS and connected REST API endpoints for telemetry.',
      category: 'Web Apps',
      status: 'Live',
      techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Supabase'],
      liveUrl: 'https://github.com/mdsharifmia-dev/Local-Coffee-Shop-Bakery',
      githubUrl: 'https://github.com/mdsharifmia-dev/Local-Coffee-Shop-Bakery',
    },
    {
      id: 'crm-sync-automation',
      title: 'Automated CRM & Webhook Pipeline',
      summary: 'Custom data synchronization service bridging web forms, payment webhooks, and customer management systems without manual data re-entry.',
      problem: 'Repetitive manual copy-pasting of leads and order details between web forms and customer management tools causes human error.',
      solution: 'Custom data synchronization service bridging web forms, payment webhooks, and CRM without manual data re-entry.',
      role: 'Created webhook handlers, payload transformations, and idempotent database insertion scripts.',
      category: 'Automation',
      status: 'In progress',
      techStack: ['n8n', 'Node.js', 'REST APIs', 'PostgreSQL'],
    },
  ],

  workProcess: [
    {
      stepNumber: '01',
      title: 'Understand the Requirements',
      description: 'We discuss your specific business challenge, existing bottlenecks, and technical expectations to clearly define the problem.',
    },
    {
      stepNumber: '02',
      title: 'Plan the Solution',
      description: 'I deliver a structured proposal detailing the exact deliverables, technical stack, realistic milestones, and fixed scope.',
    },
    {
      stepNumber: '03',
      title: 'Build the Solution',
      description: 'The solution is built in iterative phases with continuous communication, clean code standards, and security verification.',
    },
    {
      stepNumber: '04',
      title: 'Test and Refine',
      description: 'We run end-to-end testing, error handling checks, and responsive verification to ensure everything functions dependably.',
    },
    {
      stepNumber: '05',
      title: 'Handover and Support',
      description: 'You receive all source code, credential handoff, clear usage guides, and a walkthrough to ensure smooth ongoing operation.',
    },
  ],

  skillCategories: [
    {
      categoryName: 'AI & Automation',
      skills: [
        'Gemini API & OpenAI API',
        'AI Agents & RAG Architecture',
        'Prompt Engineering & Evaluation',
        'WhatsApp Cloud API & Meta APIs',
        'n8n & Webhooks Architecture',
      ],
    },
    {
      categoryName: 'Frontend',
      skills: [
        'Astro 5 & Next.js',
        'React & TypeScript',
        'Tailwind CSS & Scoped CSS',
        'GSAP & Lenis Smooth Scroll',
        'Responsive Design & a11y',
      ],
    },
    {
      categoryName: 'Backend & APIs',
      skills: [
        'Python (FastAPI)',
        'Node.js & Express',
        'RESTful API Design',
        'PostgreSQL & Supabase',
        'Authentication & Webhooks',
      ],
    },
    {
      categoryName: 'Data & Deployment',
      skills: [
        'Vector Databases & Embeddings',
        'Git & GitHub Version Control',
        'Vercel Deployment & Edge CDN',
        'Docker Basics',
        'Linux Environment & Bash',
      ],
    },
  ],

  faq: [
    {
      question: 'What types of projects can you build?',
      answer: 'I specialize in three core areas: AI agents and document Q&A systems (RAG), business workflow and chatbot automations (WhatsApp, Meta APIs, CRMs), and full-stack web applications with Astro/Next.js and Python/Node.js.',
    },
    {
      question: 'What information do you need to start?',
      answer: 'A brief explanation of your current workflow, the specific problem you want to solve, any platforms you want to connect (like WhatsApp, Google Sheets, or CRM), and any existing API keys or accounts.',
    },
    {
      question: 'How do we communicate?',
      answer: 'We communicate primarily via WhatsApp, email, or scheduled video calls. You will receive regular progress updates with working milestones so there are no surprises.',
    },
    {
      question: 'Can you maintain or improve an existing project?',
      answer: 'Yes. I can audit an existing codebase or automation pipeline, identify bugs or bottlenecks, and implement upgrades or new features within a clear, agreed scope.',
    },
    {
      question: 'How are project scope and estimates agreed?',
      answer: 'Before writing code, we define a clear, written scope of work with specific deliverables and realistic milestones. This prevents unexpected costs or delayed deadlines.',
    },
  ],
};
