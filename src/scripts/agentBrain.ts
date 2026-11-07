import { portfolioData } from '../data/portfolioData';

export interface LeadBrief {
  summary: string;
  whatsappUrl: string;
  emailUrl: string;
  emailAddress: string;
  whatsappNumber: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  timestamp: Date;
  isLeadAction?: boolean;
  leadBrief?: LeadBrief;
}

export interface AgentResponse {
  reply: string;
  isLeadIntent: boolean;
  leadBrief?: LeadBrief;
}

const { personalInfo, services, projects, workProcess, skillCategories, faq } = portfolioData;

// Commercial intent triggers
const LEAD_KEYWORDS = [
  'hire', 'project', 'work with', 'start', 'quote', 'cost', 'price', 'pricing',
  'budget', 'timeline', 'interested', 'service', 'build me', 'need a bot',
  'need an agent', 'contract', 'freelance', 'available', 'job', 'collaborate',
  'contact', 'whatsapp', 'proposal', 'scope', 'kaaj', 'lagbe', 'dite chai'
];

export function processAgentQuery(query: string, conversationHistory: ChatMessage[] = []): AgentResponse {
  const clean = query.trim().toLowerCase();

  // 1. Check for Commercial / Lead Intent
  const hasLeadIntent = LEAD_KEYWORDS.some((kw) => clean.includes(kw));

  // 2. Lead Intent Response Generation
  if (hasLeadIntent) {
    const summary = query.length > 8 ? query : 'Inquiry regarding AI & Automation Project';
    const presetMsg = `Hello Sharif! I spoke with your AI Agent on your portfolio and I would like to discuss a project:\n"${summary}"`;
    const whatsappUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(presetMsg)}`;
    
    const emailSubject = `Project Inquiry: AI & Automation for Sharif Mia`;
    const emailBody = `Hi Sharif,\n\nI was interacting with your AI Agent on your portfolio and would like to discuss a project:\n\nProject Scope / Requirement:\n"${summary}"\n\nPlease let me know your availability.\n\nBest regards,\n[Your Name]`;
    const emailUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    return {
      reply: `That's fantastic! Sharif would love to collaborate with you. He is currently **${personalInfo.availabilityText.toLowerCase()}**.\n\nI have pre-packaged your project inquiry so you can notify Sharif with **1-click via WhatsApp or Email** right now:`,
      isLeadIntent: true,
      leadBrief: {
        summary,
        whatsappUrl,
        emailUrl,
        emailAddress: personalInfo.email,
        whatsappNumber: personalInfo.whatsappNumber,
      },
    };
  }

  // 3. Who is Sharif / About
  if (clean.includes('who are you') || clean.includes('who is sharif') || clean.includes('about') || clean.includes('intro')) {
    return {
      reply: `${personalInfo.name} is an ${personalInfo.title} based in ${personalInfo.location}.\n\n${personalInfo.bio}\n\nHe builds practical, production-ready AI tools with verified metrics. Would you like to see his projects or discuss an automation for your team?`,
      isLeadIntent: false,
    };
  }

  // 4. Services Inquiry
  if (clean.includes('service') || clean.includes('what can you do') || clean.includes('capabilities') || clean.includes('offer')) {
    const serviceList = services.map((s, idx) => `${idx + 1}. **${s.title}**: ${s.shortDescription}`).join('\n\n');
    return {
      reply: `Sharif provides 3 primary engineering services:\n\n${serviceList}\n\nWhich of these areas are you interested in exploring?`,
      isLeadIntent: false,
    };
  }

  // 5. Projects Inquiry
  if (clean.includes('project') || clean.includes('portfolio') || clean.includes('work') || clean.includes('case study') || clean.includes('example')) {
    const projectList = projects.map((p) => `• **${p.title}** (${p.category}): ${p.summary} [Tech: ${p.techStack.slice(0, 3).join(', ')}]`).join('\n\n');
    return {
      reply: `Here are some of Sharif's verified case studies:\n\n${projectList}\n\nYou can inspect each project on this page or ask me for details on a specific project!`,
      isLeadIntent: false,
    };
  }

  // 6. Specific Technologies (RAG, Gemini, Python, WhatsApp, n8n)
  if (clean.includes('rag') || clean.includes('vector') || clean.includes('gemini') || clean.includes('llm') || clean.includes('langchain')) {
    return {
      reply: `Sharif architects custom **RAG (Retrieval-Augmented Generation)** systems using Gemini API, vector embeddings, and semantic search. These allow companies to query their internal documents, policies, or technical guides with grounded source citations and zero hallucination.`,
      isLeadIntent: false,
    };
  }

  if (clean.includes('whatsapp') || clean.includes('messenger') || clean.includes('bot') || clean.includes('automation') || clean.includes('n8n')) {
    return {
      reply: `Sharif builds production-grade 24/7 business bots with the official **WhatsApp Cloud API** and Meta Graph API, integrated with Google Sheets, CRMs, and n8n webhooks. His systems automatically capture leads, qualify prospects, and route alerts.`,
      isLeadIntent: false,
    };
  }

  if (clean.includes('skill') || clean.includes('stack') || clean.includes('technolog') || clean.includes('python')) {
    const skillsText = skillCategories.map((c) => `**${c.categoryName}**: ${c.skills.join(', ')}`).join('\n');
    return {
      reply: `Sharif's core technical stack includes:\n\n${skillsText}\n\nHe works primarily with Python (FastAPI), Astro, Next.js, TypeScript, PostgreSQL, and modern LLM APIs.`,
      isLeadIntent: false,
    };
  }

  // 7. Work Process / How I work
  if (clean.includes('process') || clean.includes('how you work') || clean.includes('steps')) {
    const steps = workProcess.map((s) => `${s.stepNumber}. **${s.title}**: ${s.description}`).join('\n');
    return {
      reply: `Sharif follows a disciplined 5-step engineering methodology:\n\n${steps}\n\nThis guarantees a fixed scope, clear milestones, and zero surprises.`,
      isLeadIntent: false,
    };
  }

  // 8. Contact methods
  if (clean.includes('email') || clean.includes('phone') || clean.includes('location') || clean.includes('dhaka') || clean.includes('contact')) {
    const emailSubject = `Contact Inquiry for Sharif Mia`;
    const emailBody = `Hi Sharif,\n\nI visited your portfolio and would like to get in touch with you.`;
    return {
      reply: `You can reach Sharif directly:\n• **Email:** ${personalInfo.email}\n• **WhatsApp:** +${personalInfo.whatsappNumber}\n• **Location:** ${personalInfo.location}\n• **Status:** ${personalInfo.availabilityText}\n\nChoose an option below to reach him immediately:`,
      isLeadIntent: true,
      leadBrief: {
        summary: 'Direct contact request',
        whatsappUrl: `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(personalInfo.whatsappPresetMessage)}`,
        emailUrl: `mailto:${personalInfo.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`,
        emailAddress: personalInfo.email,
        whatsappNumber: personalInfo.whatsappNumber,
      },
    };
  }

  // 9. Default friendly response
  return {
    reply: `Hello! I am Sharif's AI Portfolio Assistant. You can ask me anything about his background, services (AI Agents, Automations, Web Apps), technical projects, or engineering workflow.\n\nAre you looking to build a new system or optimize an existing workflow?`,
    isLeadIntent: false,
  };
}
