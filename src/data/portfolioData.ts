import { PortfolioItem } from '../types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'proj-it-1',
    title: 'Enterprise Inventory & Dispatch Management Portal',
    category: 'it',
    categoryLabel: 'Websites & IT',
    clientIndustry: 'Logistics & Distribution Sector [Demonstration Case Study]',
    shortDescription: 'Custom web dashboard for multi-warehouse inventory tracking, dispatch scheduling, and real-time shipment status.',
    fullDescription: 'Designed and engineered a high-speed web portal enabling warehousing teams to monitor SKU movements, automate dispatch slip generation, and maintain cross-facility stock reconciliation with role-based staff access.',
    challenge: 'The client struggled with disconnected spreadsheet logs leading to stock discrepancies and manual dispatch delays during peak hours.',
    solution: 'Engineered a centralized web application featuring real-time SKU tracking, barcode scanner support, automated dispatch manifests, and an executive dashboard.',
    deliverables: [
      'Responsive Web Application & Admin Console',
      'PostgreSQL Database Architecture & REST API',
      'Barcode Label Generator & Export Module',
      'Automated Daily Dispatch Summary Email Service'
    ],
    tags: ['Web Application', 'Inventory Management', 'REST API', 'Enterprise Dashboard'],
    metrics: [
      { label: 'Dispatch Speed', value: '+45% Faster' },
      { label: 'Stock Accuracy', value: '99.8%' },
      { label: 'Manual Entries', value: '-70% Reduced' }
    ],
    accentColor: '#2563EB'
  },
  {
    id: 'proj-tally-1',
    title: 'Multi-Level Voucher Approval & Barcode TDL Suite',
    category: 'tally',
    categoryLabel: 'Tally Solutions',
    clientIndustry: 'Industrial Manufacturing [Demonstration Case Study]',
    shortDescription: 'Custom TDL solution for TallyPrime with automated 3-tier purchase order approvals and QR-coded GST invoice generation.',
    fullDescription: 'Developed bespoke TDL modules integrated into the client’s TallyPrime system. The customization enforces hierarchical manager approvals on high-value purchase orders and auto-embeds dynamic UPI/IRN QR codes on printed invoices.',
    challenge: 'Unauthorized purchase entries and manual IRN/QR code additions caused audit bottlenecks and payment verification delays.',
    solution: 'Built modular TDL files configuring strict authorization locks on voucher saving until designated department heads approve with digital timestamps.',
    deliverables: [
      'Custom .TCP / .TDL Customization Suite',
      'Custom 3-Tier Voucher Approval Matrix',
      'Dynamic QR / Barcode Print Template Module',
      'On-Site Tally Staff Configuration & Training'
    ],
    tags: ['TallyPrime', 'TDL Customization', 'Voucher Approval', 'QR Invoicing'],
    metrics: [
      { label: 'Approval Turnaround', value: 'Real-time' },
      { label: 'Invoice Generation', value: '1-Click Print' },
      { label: 'Audit Compliance', value: '100% Verified' }
    ],
    accentColor: '#1D4ED8'
  },
  {
    id: 'proj-creative-1',
    title: 'Corporate Brand Identity & Visual Asset Kit',
    category: 'creative',
    categoryLabel: 'Creative & Design',
    clientIndustry: 'Renewable Energy Solutions [Demonstration Case Study]',
    shortDescription: 'Modern corporate logo design, brand typography guidelines, corporate stationery, and digital presentation templates.',
    fullDescription: 'Crafted a cohesive visual identity reflecting sustainability and engineering precision. Developed vector logo marks, CMYK/RGB color palettes, typography hierarchies, business cards, email signatures, and master pitch deck templates.',
    challenge: 'The client was undergoing an enterprise rebrand and lacked consistent visual assets across print collateral and digital touchpoints.',
    solution: 'Executed a minimalist, geometric brand identity with comprehensive usage guidelines and versatile digital/print exports.',
    deliverables: [
      'Primary, Secondary & Icon Logo Vector Files (SVG, AI, EPS, PNG)',
      '32-Page Brand Style Guidelines Manual (PDF)',
      'Corporate Stationery (Business Cards, Letterhead, Envelopes)',
      'Digital Presentation & Social Media Brand Templates'
    ],
    tags: ['Logo Design', 'Brand Identity', 'Vector Design', 'Corporate Stationery'],
    metrics: [
      { label: 'Deliverables', value: '15+ Master Assets' },
      { label: 'Formats', value: 'Vector & 300DPI' },
      { label: 'Copyright', value: 'Full Commercial Transfer' }
    ],
    accentColor: '#0284C7'
  },
  {
    id: 'proj-it-2',
    title: 'Modern Corporate Portal & Customer Service Hub',
    category: 'it',
    categoryLabel: 'Websites & IT',
    clientIndustry: 'Commercial Facility Services [Demonstration Case Study]',
    shortDescription: 'SEO-optimized, ultra-responsive corporate website featuring service booking forms and live inquiry tracking.',
    fullDescription: 'Engineered a modern, accessible web portal designed to showcase multi-city service capabilities, drive qualified customer leads, and provide automated instant quote calculations for business clients.',
    challenge: 'An outdated, slow-loading website was failing mobile usability tests and losing inbound commercial inquiries.',
    solution: 'Designed and deployed a lightning-fast responsive portal with optimized Core Web Vitals, accessible forms, and CRM webhook routing.',
    deliverables: [
      'Responsive Website with 100% Mobile Optimization',
      'Interactive Service Quote Calculator',
      'Lead Capture & Email Notification Pipeline',
      'Full SEO Meta Setup & Google Search Console Integration'
    ],
    tags: ['Corporate Website', 'React & Tailwind', 'SEO Optimized', 'Lead Generation'],
    metrics: [
      { label: 'PageSpeed Score', value: '98/100' },
      { label: 'Mobile Conversion', value: '+35%' },
      { label: 'Load Time', value: '< 1.1s' }
    ],
    accentColor: '#2563EB'
  },
  {
    id: 'proj-video-1',
    title: 'Brand Promotional Video & Social Reel Campaign',
    category: 'video',
    categoryLabel: 'Video Editing',
    clientIndustry: 'FinTech & Digital Payments [Demonstration Case Study]',
    shortDescription: 'Dynamic 60-second corporate explainer video and 5 high-impact short-form reels with custom motion typography.',
    fullDescription: 'Produced end-to-end video post-production featuring pacing cuts, custom 2D motion graphics, kinetic subtitles, color grading, and crisp sound mastering tailored for digital campaign deployment across LinkedIn, YouTube, and Instagram.',
    challenge: 'Complex fintech workflow needed to be explained clearly and engagingly in under 60 seconds for digital ad campaigns.',
    solution: 'Scripted visual pacing, designed custom animated UI mockups, synchronized voiceover tracks, and rendered multi-aspect ratio video master files.',
    deliverables: [
      '60-Second Master Corporate Promo Video (16:9 4K)',
      '5 x 15-Second Campaign Social Reels (9:16 Full HD)',
      'Synchronized Subtitles (.SRT) & Clean Audio Mix',
      'Licensed Commercial Soundtrack & Sound Effects'
    ],
    tags: ['Video Editing', 'Motion Graphics', 'Social Media Reels', 'Sound Design'],
    metrics: [
      { label: 'Video Quality', value: '4K Ultra HD' },
      { label: 'Formats', value: '16:9 & 9:16' },
      { label: 'Retention Rate', value: 'High Engagement' }
    ],
    accentColor: '#3B82F6'
  },

  {
    id: 'proj-creative-2',
    title: 'High-Impact Promotional Poster & Event Campaign Series',
    category: 'creative',
    categoryLabel: 'Creative & Design',
    clientIndustry: 'Education & Professional Training Academy [Demonstration Case Study]',
    shortDescription: 'Series of 8 professional promotional posters, outdoor standees, and digital social media advertising carousels.',
    fullDescription: 'Designed a comprehensive visual campaign for a flagship professional conference. Delivered high-contrast print layouts, digital social media slides, event banners, and roll-up standees maintaining strict brand consistency.',
    challenge: 'The event organizers needed striking, legible, print-ready marketing collateral in under 48 hours for immediate distribution.',
    solution: 'Crafted structured visual layouts emphasizing hierarchy, date clarity, speaker highlights, and clean QR code registration links.',
    deliverables: [
      '8 High-Resolution Print Posters (A3, A2, 300 DPI CMYK)',
      '2 Large-Format Trade Show Standee Banners',
      '10 Digital Ad Creative Carousels for Instagram/Facebook',
      'Layered Source Files for Future In-House Edits'
    ],
    tags: ['Poster Design', 'Marketing Collateral', 'Event Branding', 'Print Ready'],
    metrics: [
      { label: 'Resolution', value: '300 DPI Print' },
      { label: 'Color Space', value: 'CMYK & RGB' },
      { label: 'Turnaround', value: 'Fast Delivery' }
    ],
    accentColor: '#0284C7'
  }
];
