import { Product, Industry, Testimonial, CaseStudy, BlogPost } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "ai-commerce",
    name: "AI Commerce Platform",
    category: "Commerce",
    badge: "Enterprise Flagship",
    icon: "ShoppingBag",
    description: "Self-optimizing e-commerce intelligence system coordinating cross-border sales, pricing, and catalog optimization automatically.",
    longDescription: "Deploy an active machine learning layer over your global digital commerce. Eunimart AI Commerce platform unifies multi-channel supply operations, automatically translates lists, standardizes international taxonomy, and dynamically prices items using live competitor mapping and price-elasticity analytics.",
    features: [
      "Dynamic Multi-Market Price Optimization",
      "Automated Catalog Taxonomy Mapping",
      "Predictive Stock Allocation & Supply Restocking",
      "Multi-Currency & Cross-Border Compliance Rules"
    ],
    benefits: [
      "Boost checkout conversions by up to 34% with adaptive checkout funnels",
      "Reduce inventory holding overheads by automated stock transfers",
      "Standardize 10,000+ SKU catalogs into structured local schemas instantly"
    ],
    useCases: [
      "Direct-to-Consumer brands scaling into European and Asian marketplaces",
      "Enterprise logistics units merging dynamic supply with customer demands",
      "Global retail groups standardizing localized catalog translations at scale"
    ],
    pricingPlans: [
      { tier: "Growth", rate: "$499/mo", description: "Up to $100k sales volume monitored" },
      { tier: "Scale", rate: "$1,499/mo", description: "Up to $1M sales volume + full SLA support" },
      { tier: "Enterprise Custom", rate: "Contact Sales", description: "Tailor-made multi-region architectures" }
    ],
    apiSample: `// Eunimart Commerce Edge API
import { EunimartClient } from '@eunimart/sdk';

const eunimart = new EunimartClient({ apiKey: 'em_live_92a3f...' });

const priceRecommendation = await eunimart.commerce.getOptimalPrice({
  sku: 'GLOBAL-TECH-X1',
  targetMarket: 'EU-WEST-1',
  competitorTracking: true,
  baseMarginMin: 0.15
});

console.log('Optimized Merchant Price (EUR):', priceRecommendation.optimalPrice);`
  },
  {
    id: "ai-automation",
    name: "AI Business Automation Suite",
    category: "Automation",
    badge: "Efficiency Max",
    icon: "Cpu",
    description: "Orchestrate enterprise workflows utilizing autonomous AI agents that run processes and interface systems securely.",
    longDescription: "Re-engineer daily enterprise workflows. The AI Business Automation Suite allows you to model multi-department tasks inside a drag-and-drop workspace where intelligent agents perform security audits, trigger email alerts, query legacy databases, and generate summary sheets.",
    features: [
      "No-Code Autonomous Workflow Builder",
      "Legacy Windows/Mainframe Terminal Integration",
      "Automatic Security Sandbox Verification",
      "Intelligent Exception Handlers"
    ],
    benefits: [
      "Eliminate repetitive paperwork routing loops entirely",
      "Shorten standard process turnarounds from weeks to seconds",
      "High accuracy mapping of messy multi-format business requests"
    ],
    useCases: [
      "Corporate finance department automating monthly reconciliation audits",
      "Compliance officers managing international cross-check logs on autopilot",
      "HR agents dispatching and synthesizing applicant records natively"
    ],
    pricingPlans: [
      { tier: "Starter", rate: "$299/mo", description: "Includes 5 active automated agents" },
      { tier: "Enterprise Base", rate: "$1,850/mo", description: "Unlimited active agent workflows" },
      { tier: "Custom", rate: "Talk to Expert", description: "Dedicated host on sovereign clouds" }
    ],
    apiSample: `// Orchestrate automation sequence programmatically
const agent = await eunimart.automation.createAgent({
  role: 'AuditSpecialist',
  capabilities: ['read_sheets', 'push_slack', 'sap_ledger_write']
});

const task = await agent.runWorkflow('monthly_reconciliation_sys', {
  ledgerUrl: 'https://internal.vault/ledgers/may2026.csv'
});`
  },
  {
    id: "ai-analytics",
    name: "AI Analytics Engine",
    category: "Analytics",
    badge: "Big Data",
    icon: "BarChart3",
    description: "Ingest multi-terabyte enterprise data streams to forecast, model scenarios, and extract clean text narratives automatically.",
    longDescription: "Turn historical and active metrics into conversational intelligence. Eunimart's predictive engine is optimized for high-volume tabular, metric, or log streams, providing instant anomaly reports, multi-variable projections, and executive bullet-point summaries.",
    features: [
      "Predictive Trend Vector Projections",
      "Interactive Natural Language Query Interface (NLQ)",
      "Instant Anomaly Detection & SMS Alerting",
      "Sovereign Security Air-Gapped Compliance"
    ],
    benefits: [
      "Replace difficult SQL query writing with natural, conversational requests",
      "Understand outlier risk conditions hours before customer impact issues",
      "Export executive summaries instantly for C-suite meetings"
    ],
    useCases: [
      "Utility networks monitoring sensor flow patterns and alert signals",
      "Digital banks compiling live risk logs to spot anomalous payments",
      "E-commerce conglomerates charting supply chain disruption forecasts"
    ],
    pricingPlans: [
      { tier: "Analytics Basic", rate: "$399/mo", description: "Up to 10M active telemetry lines" },
      { tier: "Analytics Business", rate: "$1,200/mo", description: "Up to 250M metrics rows + Dedicated clusters" },
      { tier: "Enterprise Customized", rate: "Quote Available", description: "Multi-petabyte database integrations" }
    ],
    apiSample: `// Prompt analytics with conversational requests
const queryResult = await eunimart.analytics.query({
  streamId: 'telco_traffic_99',
  prompt: 'Analyze spikes in latency and predict peak load times for June',
  outputFormat: 'visual_svg'
});`
  },
  {
    id: "ai-chatbot",
    name: "Conversational AI Assistant",
    category: "Transformation",
    badge: "Next Gen NLP",
    icon: "MessageSquareCode",
    description: "Multilingual, brand-aligned cognitive agent resolving consumer enquiries and internal queries instantly.",
    longDescription: "A fully embeddable cognitive conversational assistant that integrates directly into your custom platforms, customer service hubs, or Slack/Teams structure, capable of answering questions, booking services, and updating customer records.",
    features: [
      "Dynamic Semantic Guardrails & Brand Alignment",
      "Deep Out-of-the-Box API Action Linking",
      "95+ Language Support with Dialect Nuance",
      "Hybrid Human-in-the-Loop Safe Failovers"
    ],
    benefits: [
      "Solve up to 88% of standard support requests without human help",
      "Ensure 24/7 client response coverage at fractions of operational costs",
      "Instant, safe personalization based on active database profile values"
    ],
    useCases: [
      "Large-scale e-commerce support routing tracking files and processing refunds",
      "Corporate internal helpdesk managing IT tickets and equipment bookings",
      "Private medical clinics organizing check-in documents and reservations"
    ],
    pricingPlans: [
      { tier: "Base API", rate: "$199/mo", description: "Includes 50k conversations monthly" },
      { tier: "Pro SaaS", rate: "$699/mo", description: "Includes 300k chats + Live agent dashboard" },
      { tier: "Enterprise", rate: "Custom SLA", description: "Dedicated host and self-learning loops" }
    ],
    apiSample: `// Initiate conversational channel with semantic controls
const session = await eunimart.chat.startSession({
  userId: 'user_cust_881',
  persona: 'BrandGuideSecure',
  contextSummary: 'Client bought Order #902 which was late in Mumbai'
});

const response = await session.sendMessage('Can I apply a coupon to offset my wait time?');`
  },
  {
    id: "ai-crm",
    name: "AI CRM Intelligence",
    category: "Analytics",
    badge: "Sales Accelerant",
    icon: "Users",
    description: "Automated customer journey tracking, conversion probability scoring, dynamic outreach, and touchpoint analysis.",
    longDescription: "Supercharge your existing Salesforce, HubSpot, or legacy CRM records. By active profiling of client touchpoints, emails, phone logs, and browsing behavior, our AI CRM Intelligence automatically labels intent and scores churn risk.",
    features: [
      "Automatic Deal Win Probability Forecasts",
      "Predictive Intent Labels on Client Profiles",
      "Generative Email Pitch Orchestrator",
      "Interactive Team Activity Overlays"
    ],
    benefits: [
      "Increase outbound engagement close rates by targeted intent messaging",
      "Save reps hours of manual data entry with speech-to-text summaries",
      "Flag unhappy clients automatically based on tone drop thresholds"
    ],
    useCases: [
      "SaaS startup sales development groups maximizing lead score prioritizations",
      "Real estate agencies tailoring dynamic custom brochures to buyer budgets",
      "Financial consulting groups tracking high-net-worth client engagement milestones"
    ],
    pricingPlans: [
      { tier: "CRM Standard", rate: "$150/user/mo", description: "Up to 50 sales team accounts" },
      { tier: "Enterprise Unlimited", rate: "$299/user/mo", description: "Unlimited teams + automated flows" }
    ],
    apiSample: `// Fetch profile predictive analytics scorecard
const crmScore = await eunimart.crm.getPredictiveScore({
  leadId: 'lead_992_auto',
  trackTouchpoints: true
});

console.log('Churn Risk:', crmScore.churnRiskPercent);
console.log('Win Probability:', crmScore.winProbability);`
  },
  {
    id: "ai-marketing",
    name: "AI Marketing Optimization",
    category: "Commerce",
    badge: "ROI Enhancer",
    icon: "Sparkles",
    description: "Dynamic ad creative variants generation, automated bidding, keyword optimization, and unified attribution reporting.",
    longDescription: "A specialized portal that builds, tests, and deploys marketing campaigns across Meta, Google, and TikTok. It learns which copies and graphics convert, dynamically allocating budgets to high-return vectors while pausing low-performers automatically.",
    features: [
      "Creative Ad Variant Generative Suite",
      "Dynamic Cross-Network Ad Budget Swaps",
      "Semantic Audience Micro-Profile Builder",
      "Clean Pixel-Free First-Party UTM Tracking"
    ],
    benefits: [
      "Achieve average of 42% decrease in customer acquisition costs",
      "Scale from 3 layouts to 50+ optimized variations instantly",
      "Clean unified dashboard proving real marketing contribution metrics"
    ],
    useCases: [
      "Direct E-commerce stores adjusting seasonal discount pushes",
      "Digital marketing service agencies bulk testing copy hooks on autopilot",
      "Global travel tech platforms optimizing high-yield search ad bids"
    ],
    pricingPlans: [
      { tier: "Growth Ad", rate: "$250/mo", description: "Ad spend managed up to $15k" },
      { tier: "Performance Max", rate: "$950/mo", description: "Ad spend managed up to $100k + auto-generations" },
      { tier: "Enterprise Agency", rate: "Contact Sales", description: "Unlimited ad budget managed on private keys" }
    ],
    apiSample: `// Programmatically spin creative marketing variants
const copies = await eunimart.marketing.generateCopyVariants({
  productName: 'EcoSip Flask',
  usp: 'Insulated 36 Hours cold, oceanic colors',
  tone: 'Playful yet sophisticated',
  platforms: ['instagram_story', 'google_search']
});`
  },
  {
    id: "ai-document",
    name: "AI Document Processing",
    category: "Automation",
    badge: "Smart OCR",
    icon: "FileText",
    description: "Highly robust parser converting messy PDFs, certificates, customs paperwork, and invoices into structured databases.",
    longDescription: "Tackle thousands of complex business papers instantly. The system leverages spatial neural networks to identify and copy pricing columns, tables, stamps, handwritten signatures, and dates perfectly, bypassing typical optical character reading errors.",
    features: [
      "Spacial & Visual Table Cell Identification",
      "Handwritten Signature & Stamp Validations",
      "Automatic Multi-Language Legal Checkups",
      "Direct API Webhook Output Handlers"
    ],
    benefits: [
      "Cut down typical file typing/verification efforts from hours to fractions",
      "Instantly spot compliance mistakes or fake contract values",
      "Unified JSON records directly injected to SAP or legacy databases"
    ],
    useCases: [
      "Customs brokers indexing cargo manifests and dangerous goods filings",
      "Accounting services importing thousands of physical vendor bills",
      "Legal counsel auditing compliance gaps in merger agreements"
    ],
    pricingPlans: [
      { tier: "Doc Starter", rate: "$180/mo", description: "Up to 5,000 pages parsed" },
      { tier: "High Volume", rate: "$750/mo", description: "Up to 50,000 pages + SLA validations" },
      { tier: "Custom Enterprise", rate: "Scale Quote", description: "Hosted securely on enterprise server containers" }
    ],
    apiSample: `// Parse legal or shipping document with webhook update
const parsedDoc = await eunimart.documents.parseFile({
  fileUrl: 'https://cdn.eunimart.in/cargo_manifest_98.pdf',
  schemaTemplate: 'GlobalShippingManifest',
  waitForVerification: false
});`
  },
  {
    id: "ai-workflow",
    name: "AI Workflow Automation",
    category: "Automation",
    badge: "System Sync",
    icon: "Network",
    description: "Seamless event-based loops uniting cloud apps, ERPs, webhooks, and modern APIs with smart conditional rules.",
    longDescription: "The absolute nexus for systems integration. Link Salesforce, Slack, SAP, Jira, and custom client database engines through visual state rules that use large language capabilities to summarize or branch outputs intelligently.",
    features: [
      "Intelligent LLM branching criteria",
      "1,200+ prebuilt enterprise app hooks",
      "Interactive error alert notifications and fallbacks",
      "Local state file temporary cache storage"
    ],
    benefits: [
      "No specialized programming needed to link legacy tools with AI integrations",
      "Instant triggers following system-level changes",
      "Build highly multi-layered workflows without high code development cycles"
    ],
    useCases: [
      "Customer success dispatches checking support logs and flagging account reviews",
      "Finance units consolidating multi-currency bills and warning bank managers",
      "Tech teams routing crash notifications, summaries, and priority labels in real-time"
    ],
    pricingPlans: [
      { tier: "Standard Workflow", rate: "$299/mo", description: "Up to 50,000 active execution runs" },
      { tier: "Scale Workflow", rate: "$900/mo", description: "Up to 500,000 active execution runs" }
    ],
    apiSample: `// Define visual flow triggers as a program
const flow = await eunimart.workflows.create({
  trigger: 'stripe.payment_intent.succeeded',
  steps: [
    { action: 'ai.summarize_invoice' },
    { action: 'quickbooks.add_item' },
    { action: 'slack.post_congratulations' }
  ]
});`
  },
  {
    id: "ai-predictive",
    name: "AI Predictive Insights",
    category: "Analytics",
    badge: "Forecasting",
    icon: "TrendingUp",
    description: "Anticipate market shifts, demographic trends, and resource spikes with advanced temporal time-series AI models.",
    longDescription: "Deploy sophisticated predictive algorithms optimized specifically for multi-variable inputs. Identify seasonal demand spikes, predict utility grid failures, and model complex pricing strategies before executing in production.",
    features: [
      "Multi-variable Time Series Modeling",
      "What-If Dynamic Interactive Canvas Simulation",
      "Client Demographics Shift Trainee Maps",
      "Real-time sensor warning triggers"
    ],
    benefits: [
      "Increase supply chain availability safety up to 98.7%",
      "Spot drop-off indicators on marketing channels months before revenue impact",
      "Model pricing adjustments and predict competitor counter-strategy shifts"
    ],
    useCases: [
      "Manufacturing divisions planning machinery maintenance schedules",
      "Hospital groups tracking pediatric emergency room occupancy trends",
      "Real-estate groups estimating market valuation pricing patterns"
    ],
    pricingPlans: [
      { tier: "Predict Base", rate: "$450/mo", description: "Up to 3 predictive metrics streams" },
      { tier: "Predict Pro", rate: "$1,350/mo", description: "Unlimited metrics streams + Auto-retraining" }
    ],
    apiSample: `// Retrain modeling and forecast metrics dynamically
const model = await eunimart.predictive.createModel({
  datasetId: 'mumbai_retail_sales',
  targetMetric: 'revenue_daily'
});

const forecastResult = await model.forecast({
  horizonPeriods: 90,
  confidenceInterval: 0.95
});`
  },
  {
    id: "ai-transformation",
    name: "AI Transformation Cloud",
    category: "Transformation",
    badge: "SaaS Complete",
    icon: "Cloud",
    description: "Unified suite representing the ultimate executive control hub for enterprise-wide AI platform control.",
    longDescription: "The sovereign cloud environment combining API key managers, usage dashboards, user safety guardrails, team collaboration modules, billing history, and priority customer support tickets in a unified dashboard.",
    features: [
      "Complete Executive Management Dashboard Console",
      "Centralized Shared API Token Guard & Policy Rules",
      "Usage Cost Allotments & Dynamic Threshold Limits",
      "Top-tier SOC2 Type II, ISO-27001, GDPR compliance"
    ],
    benefits: [
      "Complete organizational view over your deployed AI applications",
      "Full cost control preventing rogue token runaways or overages",
      "Secure, vetted corporate workspaces safeguarding customer privacy perfectly"
    ],
    useCases: [
      "C-Suite executing enterprise-wide AI adoption goals",
      "IT Directors setting token rate limits for development, staging, or production",
      "Risk Officers maintaining legal safety parameters on training inputs"
    ],
    pricingPlans: [
      { tier: "Organization Cloud", rate: "$2,200/mo", description: "Includes 5 departments and basic audits" },
      { tier: "Enterprise Complete", rate: "Custom Contract", description: "Fully customized sovereign physical clouds" }
    ],
    apiSample: `// Audit enterprise-wide token burn securely
const auditReport = await eunimart.cloud.getAuditLogs({
  timeframe: '7d',
  riskCheck: true,
  alertSensitiveFields: true
});

console.log('Unusual access vectors flagged:', auditReport.anomalies.length);`
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: "e-commerce",
    name: "E-Commerce",
    description: "Cross-border dynamic price optimization, instant global translation, and multi-channel supply logistics coordination.",
    statValue: "34%",
    statLabel: "Average lift in checkout conversion rate",
    icon: "Globe"
  },
  {
    id: "retail",
    name: "Retail",
    description: "Connect catalog streams with real-time physical store inventory, optimize regional stockpiles, and automate promotions.",
    statValue: "18%",
    statLabel: "Decrease in obsolete inventory stockpiles",
    icon: "Store"
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Vetted document processing, medical record indexing, queue timing optimization, and patient assistance chatbots.",
    statValue: "4.8x",
    statLabel: "Acceleration in administrative record indexing",
    icon: "Stethoscope"
  },
  {
    id: "banking",
    name: "Banking & Fintech",
    description: "Predictive risk profile rating, autonomous document validation audits, and intelligent conversational support managers.",
    statValue: "$12M",
    statLabel: "Unusual micro-payment transfers identified",
    icon: "Coins"
  },
  {
    id: "logistics",
    name: "Logistics",
    description: "Vessel arrival time modeling, automated customs and shipping invoice indexers, and adaptive load route planners.",
    statValue: "22%",
    statLabel: "Improvement in fleet scheduling reliability",
    icon: "Truck"
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "Sensory machinery wear forecasts, real-time raw materials allocation, and assembly-line anomaly detection.",
    statValue: "40%",
    statLabel: "Reduction in unforeseen device downtimes",
    icon: "Factory"
  },
  {
    id: "real-estate",
    name: "Real Estate",
    description: "Localized asset valuation projections, customized lead engagement systems, and instant brochure builders.",
    statValue: "3.2x",
    statLabel: "Growth in brochure close-ratio metrics",
    icon: "Building"
  },
  {
    id: "government",
    name: "Government",
    description: "Secure, air-gapped file parsing, municipal document translation services, and public service information routers.",
    statValue: "92%",
    statLabel: "General citizen support satisfaction rating",
    icon: "ShieldAlert"
  },
  {
    id: "education",
    name: "Education",
    description: "Intelligent student learning progress trackers, automated test parsing helpers, and online course recommendation systems.",
    statValue: "29%",
    statLabel: "Uplift in remote content completion rates",
    icon: "GraduationCap"
  },
  {
    id: "startups",
    name: "Startups",
    description: "Rapidly embed state-of-the-art AI capabilities, leverage ready APIs, and scale workflows without large initial capital expenses.",
    statValue: "60%",
    statLabel: "Faster sprint deployment cycle timelines",
    icon: "Rocket"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Arun Swaminathan",
    role: "Chief Technology Officer",
    company: "Zeta Global Commerce",
    text: "Eunimart's AI Commerce platform revolutionized how we manage international listings. Translating, taxonomizing, and dynamically pricing 80k products across 12 countries went from a operational nightmare to a completely automated process.",
    rating: 5
  },
  {
    id: "2",
    name: "Devangana Sharma",
    role: "VP of Product Infrastructure",
    company: "Asta Healthcare Solutions",
    text: "We integrated Eunimart CRM Intelligence and Document Processing workflows into our billing suite. Patient intake papers are processed in real-time with flawless accuracy, drastically cutting waiting room delays.",
    rating: 5
  },
  {
    id: "3",
    name: "Mark Henderson",
    role: "Director of Supply Chain Planning",
    company: "Alliance Heavy Logistics",
    text: "Predicting arrival logs is extremely tricky in today's maritime shipping climate. Eunimart's AI Analytics Engine and predictive signals accurately forecasted shipping delays 48 hours before they occurred, protecting our raw supply timelines.",
    rating: 5
  },
  {
    id: "4",
    name: "Rohan Advani",
    role: "VP of Digital Innovation",
    company: "Mumbai Fintech Trust",
    text: "SOC2 security and data privacy are non-negotiable for our payment system layers. Eunimart's sovereign air-gapped AI Transformation Cloud allowed our internal risk models to leverage LLMs safely, with complete audit logs.",
    rating: 5
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-1",
    title: "Global Supply Chain Group Drives 42% ROI Improvement",
    industry: "Logistics",
    beforeVal: "14 Days",
    afterVal: "38 Minutes",
    metricName: "Customs Clearance Verification Time",
    roiText: "420% Annual Return on AI Deployment Investment",
    quote: "We unified invoice parsing via Eunimart's Document Processing suite. It resolved critical supply validation queues instantly and paid for itself in less than two weeks."
  },
  {
    id: "cs-2",
    title: "Tech Retailer Enhances Conversion and Customer Retention",
    industry: "E-Commerce",
    beforeVal: "2.1%",
    afterVal: "4.8%",
    metricName: "Checkout conversion rate across SEA channels",
    roiText: "$4.2M Added Revenue in Under 90 Days",
    quote: "By dynamically positioning products and adapting prices in direct response to competitor stock outrages, the merchant achieved unprecedented profit margin growth."
  },
  {
    id: "cs-3",
    title: "Regional Financial Conglomerate Automates Audit Reconciliation",
    industry: "Banking & Fintech",
    beforeVal: "240 Hours/Mo",
    afterVal: "8 Hours/Mo",
    metricName: "Regulatory Compliance Audit Compilation Period",
    roiText: "98% Reduction in Manual Audit Compilation Costs",
    quote: "Autonomous agent networks scanned legal records, verified payment transaction ledgers, flagged exceptions, and built perfect reports on schedule."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "The Future of Cross-Border Commerce: How AI Optimizes Global Merchant Margins",
    category: "Commerce",
    readTime: "5 min read",
    date: "May 25, 2026",
    summary: "Examine how unified taxonomy standardizations and predictive competitor price mapping allow medium-sized brands to compete aggressively across global markets."
  },
  {
    id: "blog-2",
    title: "Securing the Enterprise LLM: Overcoming Privacy Hurdles in Highly Regulated Industries",
    category: "Security",
    readTime: "7 min read",
    date: "April 18, 2026",
    summary: "An in-depth review of air-gapping strategies, dynamic user-level input masking models, and token utilization audits that fulfill SOC2 Type II requirements."
  },
  {
    id: "blog-3",
    title: "Orchestrating Autonomous Staffing: The Next Wave of Business Process Automation Suite",
    category: "Automation",
    readTime: "4 min read",
    date: "March 12, 2026",
    summary: "Transitioning from rigid event-triggered integrations to thinking, reactive agent networks that adapt to format changes and legacy software mainframes seamlessly."
  }
];

export const MILESTONES = [
  { year: "2021", event: "Eunimart Private Limited founded with a core vision to build automated cloud integration platforms." },
  { year: "2022", event: "Deployed the world's first multi-channel automated listing translator and market synchronizer." },
  { year: "2023", event: "Introduced Eunimart Enterprise Automation Suite, serving retail leaders across Asia-Pacific." },
  { year: "2024", event: "Achieved full SOC2 security validation; rolled out sovereign, air-gapped secure local LLM cloud deployments." },
  { year: "2025", event: "Launched AI Analytics and Conversational Agents layer; scaled platform capacity to handle over 10B monthly API tokens." },
  { year: "2026", event: "Unifying commerce, analytics, and business transformation platforms into the complete Eunimart Transformation Cloud." }
];

export const FAQ_ITEMS = [
  {
    q: "How does Eunimart guarantee security for sensitive corporate datasets?",
    a: "Eunimart platforms are fully built with the highest standards, including SOC2 Type II compliance, ISO 27001, GDPR compliance, and granular Role-Based Access Controls (RBAC). For highly regulated clients, we configure air-gapped, sovereign deployment containers so your proprietary data never leaves your enterprise firewalls or trains open-market LLMs."
  },
  {
    q: "Can Eunimart integrate into our legacy mainframe or proprietary SAP setups?",
    a: "Yes. Our AI Business Automation Suite includes direct prebuilt API hooks for SAP, Salesforce, Microsoft Dynamics, Oracle Netsuite, and standard ERPs, alongside advanced computer vision-driven agents capable of securely reading and keying into legacy terminal screens where APIs are missing."
  },
  {
    q: "What is the typical deployment timeframe for custom enterprise AI models?",
    a: "Standard prebuilt platforms (like AI Commerce, Document Processing, or conversational assistants) can be plugged in and synced with your database endpoints in less than 48 hours. Fully bespoke LLM adaptation, training, or legacy workflow automation networks generally require 3 to 6 weeks from initial assessment to production."
  },
  {
    q: "Does Eunimart provide dedicated live assistance and continuous SLA coverage?",
    a: "Absolutely. All Scale and Enterprise-tier customers are backed by a formal Service Level Agreement (SLA) with 24/7 dedicated system monitoring support, a designated technical account analyst, and immediate priority assistance tickets."
  }
];
