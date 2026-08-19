import { ServiceCategory } from '../types';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    key: 'it',
    title: 'IT Product Services',
    badge: 'Technology & Cloud',
    tagline: 'Smart Technology for Business Acceleration',
    description: 'Professional technology solutions designed to support your business operations and digital growth with robust, scalable architectures.',
    route: '/services/it',
    iconName: 'Code2',
    color: 'from-blue-600 to-indigo-600',
    services: [
      {
        id: 'it-products',
        title: 'IT Product Solutions',
        shortDescription: 'Modern software tools, web platforms, and tailored digital infrastructure designed to streamline everyday workflows.',
        fullDescription: 'We architect and build modern software applications, responsive web applications, and enterprise product solutions tailored to your operational scale. From database design to frontend interaction, we build systems that perform securely.',
        iconName: 'Layers',
        categoryKey: 'it',
        route: '/services/it#it-products',
        features: [
          'Custom Web Application Development',
          'Responsive Cross-Platform Interfaces',
          'Database Architecture & Optimization',
          'API Integration & Microservices',
          'Cloud Hosting Setup & Management'
        ],
        deliverables: [
          'Full-stack application code',
          'Deployment configuration',
          'System architecture blueprint',
          'Technical documentation & user manual'
        ]
      },
      {
        id: 'business-tech',
        title: 'Business Technology Solutions',
        shortDescription: 'Enterprise software integration, workflow automation, and centralized data systems for modern enterprises.',
        fullDescription: 'Modernize legacy operations with structured business technologies. We integrate CRM systems, inventory engines, billing portals, and communication tools into an interconnected digital ecosystem.',
        iconName: 'Server',
        categoryKey: 'it',
        route: '/services/it#business-tech',
        features: [
          'Enterprise Workflow Automation',
          'CRM & ERP Integration',
          'Centralized Business Dashboards',
          'Multi-user Access Control & Roles',
          'Automated Email & SMS Notifications'
        ],
        deliverables: [
          'Configured business toolstack',
          'Custom integration connectors',
          'Admin control console',
          'Staff onboarding session'
        ]
      },
      {
        id: 'digital-solutions',
        title: 'Digital Solutions',
        shortDescription: 'Comprehensive corporate web presence, portals, customer-facing interfaces, and cloud-ready assets.',
        fullDescription: 'Establish an authoritative online presence with high-performance digital solutions. We engineer lightning-fast digital portals, interactive catalog systems, and customer self-service modules with high visual polish.',
        iconName: 'Globe',
        categoryKey: 'it',
        route: '/services/it#digital-solutions',
        features: [
          'Corporate Brand Portals & Landing Platforms',
          'E-Commerce & Digital Catalog Systems',
          'Customer Self-Service Knowledge Hubs',
          'SEO-Optimized Semantic Architecture',
          'High-Speed CDN & Asset Distribution'
        ],
        deliverables: [
          'Live production-grade portal',
          'CMS / Content management interface',
          'SEO setup and performance audit',
          'Mobile responsiveness validation'
        ]
      },
      {
        id: 'custom-tech',
        title: 'Customized Technology Services',
        shortDescription: 'Custom engineering, API middleware, specialized utilities, and dedicated technical maintenance.',
        fullDescription: 'Every business presents unique technical challenges. We construct bespoke scripts, middleware connectors, automated data validation routines, and long-term tech maintenance services.',
        iconName: 'Cpu',
        categoryKey: 'it',
        route: '/services/it#custom-tech',
        features: [
          'Bespoke Middleware & Data Pipelines',
          'Legacy Data Migration & Cleansing',
          'Scheduled Routine Backups & Disaster Recovery',
          'Security Vulnerability Audits',
          'Ongoing Technical Maintenance & SLA'
        ],
        deliverables: [
          'Custom utility code & scripts',
          'Scheduled backup cron jobs',
          'Security audit log report',
          'Direct technical support channel'
        ]
      }
    ]
  },
  {
    key: 'tally',
    title: 'Tally Solutions',
    badge: 'Accounting & ERP',
    tagline: 'Optimized Accounting Workflow & TDL Power',
    description: 'Professional Tally solutions including customization, support and services to improve your accounting workflow and operational precision.',
    route: '/services/tally',
    iconName: 'FileSpreadsheet',
    color: 'from-blue-700 to-cyan-600',
    services: [
      {
        id: 'tdl-customisation',
        title: 'TDL Customisation',
        shortDescription: 'Customized TDL solutions based on specific business requirements to unlock Tally’s full potential.',
        fullDescription: 'Tally Definition Language (TDL) customization transforms standard Tally into an enterprise-grade ERP tailored strictly to your industry requirements. We build customized invoice templates, voucher approval hierarchies, customized ledger views, and specialized reports.',
        iconName: 'FileCode2',
        categoryKey: 'tally',
        route: '/services/tally#tdl-customisation',
        features: [
          'Custom Invoice Formats & Print Layouts',
          'Voucher Approval Workflow & Level Controls',
          'Barcode & QR Code Printing Integration',
          'Custom Fields, Ledger Tags & Transaction Fields',
          'Automated Outstanding SMS / WhatsApp Alerts'
        ],
        deliverables: [
          'Compiled .tcp / .tdl customization files',
          'Installation & activation in your Tally environment',
          'Sample test runs & format proofs',
          'TDL configuration backup documentation'
        ]
      },
      {
        id: 'tally-support',
        title: 'Tally Support',
        shortDescription: 'Reliable support for Tally-related issues, configuration, data recovery, and operational requirements.',
        fullDescription: 'Minimize business downtime with prompt, dependable Tally support. Our specialists resolve data sync errors, company corruption issues, multi-user license licensing glitches, and version upgrade migrations with zero data loss.',
        iconName: 'Headphones',
        categoryKey: 'tally',
        route: '/services/tally#tally-support',
        features: [
          'Remote & On-Site Troubleshooting Support',
          'Tally Data Repair & Corruption Recovery',
          'Multi-User Gold / Silver License Configuration',
          'Version Upgrades & TallyPrime Migration',
          'User Role Management & Security Controls'
        ],
        deliverables: [
          'Immediate issue resolution log',
          'Verified clean data backup',
          'Security permission matrix report',
          'Quarterly health check recommendations'
        ]
      },

    ]
  },
  {
    key: 'gst',
    title: 'GST & Business Services',
    badge: 'Compliance & Taxation',
    tagline: 'Simplifying Registrations, Filings & Corporate Compliance',
    description: 'Reliable, accurate business compliance support to keep your organization legally aligned, timely filed, and fully protected.',
    route: '/services/gst',
    iconName: 'ShieldCheck',
    color: 'from-indigo-600 to-blue-800',
    services: [
      {
        id: 'gst-registration',
        title: 'GST Registration',
        shortDescription: 'Professional assistance with new GST registration for proprietorships, partnerships, LLPs, and companies.',
        fullDescription: 'Complete end-to-end guidance for obtaining your Goods and Services Tax Identification Number (GSTIN). We manage document verification, application submission, query clarifications from tax officers, and timely issuance of your GST certificate.',
        iconName: 'BadgeCheck',
        categoryKey: 'gst',
        route: '/services/gst#gst-registration',
        features: [
          'Document Verification & Eligibility Review',
          'Application Drafting & HSN/SAC Code Mapping',
          'Prompt Department Query Resolution',
          'GST Certificate Issuance & Portal Handover',
          'Initial Invoicing Guidance for GST Compliance'
        ],
        deliverables: [
          'Official GSTIN Certificate',
          'GST Portal login credentials & profile',
          'Core HSN code reference list',
          'Filing calendar schedule'
        ]
      },
      {
        id: 'msme-registration',
        title: 'MSME / Udyam Registration',
        shortDescription: 'Support for MSME (Udyam) registration and documentation to unlock government subsidies and business benefits.',
        fullDescription: 'Secure your official Udyam Registration Certificate smoothly. Registered MSMEs gain priority lending benefits, collateral-free credit access, protection against delayed payments, and concessions on trademark and patent filings.',
        iconName: 'Building2',
        categoryKey: 'gst',
        route: '/services/gst#msme-registration',
        features: [
          'Enterprise Classification (Micro, Small, Medium)',
          'NIC Code Selection & Activity Classification',
          'Fast-Track Portal Submission with Aadhaar Verification',
          'Zero-Error Document Verification',
          'Udyam Certificate Generation & Guidance'
        ],
        deliverables: [
          'Verified Udyam Registration Certificate with QR Code',
          'Summary of applicable government MSME benefits',
          'Guidance on delayed payment protection rights'
        ]
      },
      {
        id: 'gst-filing',
        title: 'GST Filing',
        shortDescription: 'Reliable GST filing assistance for businesses including GSTR-1, GSTR-3B, and Annual Returns.',
        fullDescription: 'Ensure 100% compliance with accurate, penalty-free GST return filing. We reconcile sales invoices with purchase data (GSTR-2B matching), optimize Input Tax Credit (ITC) claims, and handle monthly, quarterly, and annual GSTR-9 filings.',
        iconName: 'Receipt',
        categoryKey: 'gst',
        route: '/services/gst#gst-filing',
        features: [
          'Monthly / Quarterly GSTR-1 & GSTR-3B Filings',
          'GSTR-2B Input Tax Credit (ITC) Reconciliation',
          'Annual Return Preparation (GSTR-9 & 9C)',
          'Late Fee & Penalty Prevention Monitoring',
          'Vendor Tax Compliance & ITC Mismatch Tracking'
        ],
        deliverables: [
          'Official ARN / Filing Acknowledgement Receipts',
          'Monthly ITC Reconciliation Ledger Sheet',
          'Tax Liability Computation Summary',
          'Quarterly Compliance Health Report'
        ]
      },
      {
        id: 'it-filing',
        title: 'IT Filing (Income Tax)',
        shortDescription: 'Professional income tax filing support for business entities, professionals, and individual entrepreneurs.',
        fullDescription: 'Streamline your direct tax compliance. We handle computation of total income, eligible deductions optimization, advance tax calculations, ITR preparation (ITR-1 through ITR-7), and seamless e-verification with the Income Tax Department.',
        iconName: 'Calculator',
        categoryKey: 'gst',
        route: '/services/gst#it-filing',
        features: [
          'Income Computation & Legitimate Deduction Maximization',
          'Preparation & E-Filing of ITR-1 to ITR-7 Forms',
          'Advance Tax & Self-Assessment Tax Calculation',
          'Form 26AS & AIS/TIS Tax Credit Matching',
          'Tax Refund Tracking & Intimation Notice Review'
        ],
        deliverables: [
          'Filed ITR-V Acknowledgement Form',
          'Detailed Income Computation Statement',
          'Tax Clearance / Refund Verification Proof',
          'Archived Tax Filing Package for Financial Records'
        ]
      }
    ]
  },
  {
    key: 'creative',
    title: 'Creative & Editing Services',
    badge: 'Design & Visual Media',
    tagline: 'Distinctive Visual Identity & Compelling Media Content',
    description: 'Build a stronger visual identity with professional creative design, video editing, and digital content solutions that connect with your target audience.',
    route: '/services/creative',
    iconName: 'Palette',
    color: 'from-blue-600 to-sky-500',
    services: [
      {
        id: 'logo-making',
        title: 'Logo Making & Brand Identity',
        shortDescription: 'Professional and memorable logo designs aligned with your brand identity, values, and market positioning.',
        fullDescription: 'Your logo is the foundation of your company’s public identity. We design memorable, versatile, vector-based brand emblems accompanied by typography guides, color palettes, and comprehensive brand identity guidelines ready for print and digital applications.',
        iconName: 'Sparkles',
        categoryKey: 'creative',
        route: '/services/creative#logo-making',
        features: [
          'Multiple Unique Design Concepts & Explorations',
          'Full Vector Source Files (AI, EPS, SVG, High-Res PNG, PDF)',
          'Monochrome, Inverted & Transparent Background Variants',
          'Brand Typography Pairing & Color Palette Codes (HEX, RGB, CMYK)',
          'Favicon & Social Media Profile Kit'
        ],
        deliverables: [
          'Complete Logo Master File Package (Vector & Raster)',
          'Brand Identity Guidelines Manual (PDF)',
          'Social Media Display Asset Pack',
          'Full Commercial Ownership & Copyright Transfer'
        ]
      },
      {
        id: 'video-editing',
        title: 'Video Editing',
        shortDescription: 'Engaging and professional video editing for digital platforms, social campaigns, and corporate presentations.',
        fullDescription: 'Transform raw footage into polished visual stories. We provide precision cuts, color grading, dynamic subtitles, audio mastering, visual motion graphics, and platform-tailored aspect ratios for YouTube, Instagram Reels, LinkedIn, and corporate presentations.',
        iconName: 'Video',
        categoryKey: 'creative',
        route: '/services/creative#video-editing',
        features: [
          'Corporate & Promotional Video Production',
          'Social Media Reels, Shorts & TikTok Optimizations',
          'Motion Graphics, Kinetic Typography & Lower Thirds',
          'Sound Design, Background Score Licensing & Audio Cleanup',
          'Color Correction & High-Fidelity 4K/1080p Rendering'
        ],
        deliverables: [
          'Final High-Definition Video Export (MP4, ProRes)',
          'Multi-Format Aspect Ratios (16:9, 9:16, 1:1)',
          'Synchronized Subtitles (.SRT file)',
          'Project archive for future revision flexibility'
        ]
      },
      {
        id: 'poster-making',
        title: 'Poster & Banner Making',
        shortDescription: 'Creative promotional posters and digital advertising banners designed to communicate your message effectively.',
        fullDescription: 'Capture customer attention instantly with striking promotional posters, digital marketing creatives, trade show banners, event flyers, and social media carousels crafted with strict visual hierarchy and marketing psychology.',
        iconName: 'Image',
        categoryKey: 'creative',
        route: '/services/creative#poster-making',
        features: [
          'Event Posters & Business Promotional Banners',
          'Social Media Ad Creatives & Multi-Slide Carousels',
          'Print-Ready High-DPI Layouts with Bleed Margins',
          'Product Launch & Seasonal Campaign Graphics',
          'Trade Show Standees & Large Format Print Creatives'
        ],
        deliverables: [
          'Print-Ready 300 DPI CMYK PDF with Crop Marks',
          'High-Resolution Web RGB PNG/JPEG Assets',
          'Editable Source Templates (Figma / PSD / Illustrator)',
          'Multi-Size Platform Adaptation Pack'
        ]
      }
    ]
  }
];

export const SERVICE_DROPDOWN_OPTIONS = [
  { value: 'IT Product Services', label: 'IT Product Services (Software / Web)' },
  { value: 'Tally TDL Customisation', label: 'Tally TDL Customisation' },
  { value: 'Tally Support', label: 'Tally Support & Troubleshooting' },
  { value: 'Tally Services', label: 'Tally Services & Cloud Setup' },
  { value: 'GST Registration', label: 'GST Registration' },
  { value: 'MSME Registration', label: 'MSME / Udyam Registration' },
  { value: 'GST Filing', label: 'GST Filing (GSTR-1, 3B, Annual)' },
  { value: 'IT Filing', label: 'IT Filing (Income Tax Returns)' },
  { value: 'Logo Making', label: 'Logo Making & Brand Identity' },
  { value: 'Video Editing', label: 'Video Editing & Content Creation' },
  { value: 'Poster Making', label: 'Poster Making & Marketing Creatives' },
  { value: 'Other', label: 'Other / Complete Multi-Service Package' }
];
