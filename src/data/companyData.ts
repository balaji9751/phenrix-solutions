import { WhyUsItem, ProcessStepItem } from '../types';

export const COMPANY_INFO = {
  name: 'Phenrix Solutions',
  tagline: 'Technology, Business & Creative Solutions — All Under One Roof.',
  headline: 'Smart Solutions. Powerful Results.',
  description: 'Phenrix Solutions delivers reliable IT solutions, Tally customization and support, GST & business services, and professional creative design solutions tailored to help businesses grow.',
  shortAbout: 'Phenrix Solutions is a professional solutions company focused on helping businesses simplify technology, accounting software, compliance requirements and digital branding. The company provides practical, reliable and customized services designed around client requirements.',
  mission: 'To deliver reliable, innovative and affordable solutions that help businesses work smarter and grow faster.',
  vision: 'To become a trusted technology and business solutions partner for businesses of every size.',
  values: [
    { title: 'Trust', description: 'Building dependable relationships through consistent honesty and operational reliability.' },
    { title: 'Quality', description: 'Upholding strict execution standards in every line of code, tax filing, and design asset.' },
    { title: 'Innovation', description: 'Applying modern techniques and smart workflows to solve complex operational challenges.' },
    { title: 'Transparency', description: 'Clear communication, straightforward pricing, and open collaboration at every step.' },
    { title: 'Customer Satisfaction', description: 'Measuring our success by the measurable growth and peace of mind of our clients.' },
    { title: 'Continuous Improvement', description: 'Constantly upgrading our toolstacks, technical expertise, and service delivery speed.' }
  ],
  contact: {
    phonePlaceholder: '+91 [Contact Number Available on Inquiry]',
    emailPlaceholder: 'contact@phenrixsolutions.com',
    locationPlaceholder: 'Business Operations Hub [City / Region]',
    hoursPlaceholder: 'Monday – Saturday: 9:00 AM – 7:00 PM IST',
    responseTime: 'Prompt response within 2–4 business hours'
  }
};

export const WHY_US_ITEMS: WhyUsItem[] = [
  {
    title: 'Professional Expertise',
    description: 'Solutions designed with practical business requirements in mind, backed by hands-on industry knowledge across technical, financial, and creative domains.',
    iconName: 'Award',
    highlight: 'Industry-Tested Methods'
  },
  {
    title: 'Customized Solutions',
    description: 'No cookie-cutter templates. Every system, TDL script, compliance strategy, and design identity is tailored strictly to your individual business model.',
    iconName: 'Sliders',
    highlight: 'Tailored to Your Workflow'
  },
  {
    title: 'Reliable Support',
    description: 'We prioritize long-term client support and service continuity, ensuring your mission-critical accounting and IT systems operate without disruption.',
    iconName: 'LifeBuoy',
    highlight: 'Direct Accountability'
  },
  {
    title: 'Quality First',
    description: 'Every project undergoes rigorous review and testing to ensure uncompromising performance, error-free compliance, and high visual polish.',
    iconName: 'CheckCircle2',
    highlight: 'Zero-Compromise Standards'
  },
  {
    title: 'Transparent Approach',
    description: 'Clear deliverables, upfront communication, honest turnaround timelines, and straightforward service delivery without hidden complexities.',
    iconName: 'Eye',
    highlight: 'Clear & Open Process'
  },
  {
    title: 'Complete Solutions',
    description: 'IT infrastructure, Tally customization, GST compliance, and creative branding under one cohesive company — eliminating the need for fragmented vendors.',
    iconName: 'Boxes',
    highlight: 'Single-Window Partner'
  }
];

export const WORK_PROCESS_STEPS: ProcessStepItem[] = [
  {
    number: '01',
    title: 'Understand',
    summary: 'Requirement Discovery',
    description: 'We listen carefully to understand your specific business objectives, existing software setup, pain points, and target timeline.',
    iconName: 'Compass'
  },
  {
    number: '02',
    title: 'Plan',
    summary: 'Solution Strategy',
    description: 'We formulate a clear blueprint, technical architecture, compliance checklist, or creative storyboard with milestones.',
    iconName: 'FileText'
  },
  {
    number: '03',
    title: 'Build',
    summary: 'Execution & Development',
    description: 'Our dedicated team codes, customizes TDL, prepares statutory documentation, or crafts creative assets with precision.',
    iconName: 'Cpu'
  },
  {
    number: '04',
    title: 'Review',
    summary: 'Quality Check & Feedback',
    description: 'We perform thorough quality checks, data reconciliation, code reviews, and collect your feedback for refined perfection.',
    iconName: 'CheckSquare'
  },
  {
    number: '05',
    title: 'Deliver',
    summary: 'Deployment & Handover',
    description: 'We roll out the finalized solution, provide official certificates, hand over complete master assets, and ensure smooth operational transition.',
    iconName: 'Send'
  },
  {
    number: '06',
    title: 'Support',
    summary: 'Continued Assistance',
    description: 'We remain by your side with dependable post-delivery support, version updates, compliance filings, and technical assistance.',
    iconName: 'HeartHandshake'
  }
];

export const TRUST_PILLARS = [
  {
    title: 'IT Solutions',
    subtitle: 'Modern Web & Software Systems',
    description: 'Scalable web applications, digital portals, and workflow automation tools.',
    iconName: 'Code2',
    link: '/services/it'
  },
  {
    title: 'Tally Solutions',
    subtitle: 'TDL Customization & Support',
    description: 'Tailored invoice formats, approval workflows, and remote Tally assistance.',
    iconName: 'FileSpreadsheet',
    link: '/services/tally'
  },
  {
    title: 'GST & Business Services',
    subtitle: 'Registrations & Tax Filings',
    description: 'GST, MSME registrations, timely return filing, and direct tax compliance.',
    iconName: 'ShieldCheck',
    link: '/services/gst'
  },
  {
    title: 'Creative Design',
    subtitle: 'Branding, Video & Posters',
    description: 'Vector logo design, corporate video editing, and marketing campaign creatives.',
    iconName: 'Palette',
    link: '/services/creative'
  }
];
