import React, { useState } from "react";
import * as Icons from "lucide-react";

interface LegalViewerProps {
  initialTab?: string;
  onBack: () => void;
}

export const LegalViewer: React.FC<LegalViewerProps> = ({
  initialTab = "legal-notice",
  onBack,
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const tabs = [
    {
      id: "legal-notice",
      label: "Legal Notice",
      icon: "FileText",
      category: "Corporate",
    },
    {
      id: "privacy-policy",
      label: "Privacy Policy",
      icon: "ShieldCheck",
      category: "Data Integrity",
    },
    {
      id: "terms-conditions",
      label: "Terms & Conditions",
      icon: "Scale",
      category: "Commercial Contract",
    },
    {
      id: "disclaimer",
      label: "Disclaimer",
      icon: "AlertOctagon",
      category: "Risk Allocations",
    },
    {
      id: "cookie-policy",
      label: "Cookie Policy",
      icon: "Cookie",
      category: "Data Integrity",
    },
    {
      id: "acceptable-use",
      label: "Acceptable Use Policy",
      icon: "UserCheck",
      category: "Compliance",
    },
  ];

  // Helper to resolve Lucide Icons dynamically
  const getIcon = (iconName: string, className: string = "w-4 h-4") => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.FileText className={className} />;
  };

  // Content definitions
  const legalDocs: Record<string, { title: string; subtitle: string; lastUpdated: string; sections: Array<{ heading: string; body: string; bulletPoints?: string[] }> }> = {
    "legal-notice": {
      title: "Legal Notice & Corporate Disclosures",
      subtitle: "Regulatory registration statistics of Eunimart Private Limited",
      lastUpdated: "May 2026",
      sections: [
        {
          heading: "1. Corporate Identity & Registration",
          body: "Eunimart and 'Eunimart Private Limited' represents a registered corporate group incorporated under the Companies Act, 2013 in the Republic of India. The corporation maintains licensed local sandboxes, high-performance computing arrays, and local regional offices in Maharashtra.",
          bulletPoints: [
            "Corporate Identification Number (CIN): U72900MH2026PTC384729",
            "Registrar of Companies (RoC): RoC Mumbai, Maharashtra",
            "Entity Class: Private Limited Indian Non-Government Company",
            "Main Business Division: Computing infrastructure, artificial cognitive models execution, and localized transactional multi-currency translation structures."
          ]
        },
        {
          heading: "2. Head Office & Postal Inquiries",
          body: "For security, direct inquiries, or compliance notices, please send certified couriers to our central administrative desk located in Mumbai:",
          bulletPoints: [
            "Registered Block: Level 5, Sovereign Arcade, Link Road, Goregaon West, Mumbai, MH, 400104, India",
            "General Email Terminal: compliance@eunimart.in",
            "Direct Dial Operations Desk: +91 22 4972 8812 (Available weekdays 10:00 AM - 6:00 PM IST)"
          ]
        },
        {
          heading: "3. Executive Governance",
          body: "Operations, platform deployments, and security oversight of all hosted model ranges (including Commerce Engine translation sequences and agent pipelines) are headed by our Chief Executive Officer, Ratan Kumar. Compliance cases are evaluated according to the Ministry of Corporate Affairs regulations and standard SOC-2 certified guidelines.",
        },
        {
          heading: "4. Intellectual Property Holdings",
          body: "All logos, vector graphics, proprietary code (including the Eunimart AI Orchestrator 2.0 system code, custom training datasets, and model weight modifiers) remain exclusive under global intellectual property bindings. No entity may duplicate components or retrieve code from the Sandbox environment without express written delegation under license bonds.",
        }
      ]
    },
    "privacy-policy": {
      title: "Privacy Policy",
      subtitle: "State-of-the-art secure personal data governance under global legislation standards",
      lastUpdated: "May 2026",
      sections: [
        {
          heading: "1. Security Commitment & Data Controllers",
          body: "We prioritize local confidentiality. Eunimart Private Limited serves as the Data Fiduciary under the Indian Digital Personal Data Protection (DPDP) Act, 2023, and acts as a Data Processor for global clients under the General Data Protection Regulation (GDPR). All customer API requests are run on dedicated local air-gapped server groups in Mumbai BOM-1 zones.",
        },
        {
          heading: "2. Information We Collect",
          body: "To sustain secure and functional cloud services, we log absolute minimum parameters required for operation validation:",
          bulletPoints: [
            "Account Identifiers: Corporate emails, registered representative names, and contact parameters submitted during demo bookings.",
            "Execution Tokens: Temporary database transaction numbers and localized translation logs required to process e-commerce lists.",
            "Telemetry & System Indicators: Approximate geography for ingress routing, browser versions, and device formats to format the layout grids correctly."
          ]
        },
        {
          heading: "3. Zero-Retention Cognitive Isolation",
          body: "Unlike typical consumer-grade services, Eunimart's enterprise generative models run on a strict Zero-Retention Caching protocol. Payload queries submitted via our system endpoints are NEVER stored in cleartext caches and are NEVER used to train, retrain, or improve our standard model weight indices. Your data boundaries remain fully air-gapped.",
        },
        {
          heading: "4. Data Fiduciary Rights & Compliance",
          body: "Under statutory guidelines, you retain clear privileges regarding your information:",
          bulletPoints: [
            "Right to Erasure: You may request complete purging of login handles and demo logs at any time.",
            "Right to Restrict Processing: You may restrict custom database syncing from of your connected sandbox elements.",
            "Dedicated Data Protection Officer (DPO): Reach our local security panel at dpo@eunimart.in for immediate audits."
          ]
        }
      ]
    },
    "terms-conditions": {
      title: "Terms & Conditions",
      subtitle: "Statutory commercial rules governing the use of Eunimart's digital frameworks",
      lastUpdated: "May 2026",
      sections: [
        {
          heading: "1. Regulatory Authorization & Scope",
          body: "By entering our virtual platform, initializing the active Sandbox, or registering your enterprise email, you accept these terms in full. If you represent a conglomerate or subsidiary, you warrant that you are authorized to bind your firm to these commercial bounds.",
        },
        {
          heading: "2. API Token Limitations and Licensing Overage",
          body: "Eunimart structures its operational pricing based on contract terms, specifying fixed limits for cumulative monthly tokens:",
          bulletPoints: [
            "Starter Node ($299/mo): Supports limited API connections and dynamic commerce listings. Overage limits are automatically blocked at 120% of quota.",
            "Professional Suite ($1,200/mo): Grants advanced analytics access. Overages are billed at $0.00012 per additional 1K tokens.",
            "Enterprise Cloud & Sovereign Air-Gap: Managed by custom SLAs under signature contracts."
          ]
        },
        {
          heading: "3. Commercial Payments and SLA baselines",
          body: "Monthly fees are settled on a pre-paid basis in INR or USD equivalent values. Services are backed by a minimum contract SLA of 99.95% availability on BOM-1 main nodes. Maintenance schedules are broadcasted 72 hours in advance to client administrators.",
        },
        {
          heading: "4. Indemnification & Mumbai Jurisdiction",
          body: "These conditions shall be construed and governed in compliance with the legal statutes of the Republic of India. Any actions, claims, or contract reviews arising under these terms must be exclusively initiated before certified tribunals in Mumbai, Maharashtra.",
        }
      ]
    },
    "disclaimer": {
      title: "Statutory Liability Disclaimer",
      subtitle: "Platform risk limits regarding probabilistic outputs of Generative AI nodes",
      lastUpdated: "May 2026",
      sections: [
        {
          heading: "1. Probabilistic System Output Notice",
          body: "Generative AI systems process data via statistical vector models. Eunimart Private Limited provides high-accuracy, sovereign-trained translation systems, but explicitly states that all outputs, summaries, catalog classifications, and automated responses are PROBABILISTIC by design. Users must verify terminal suggestions before live deployment.",
        },
        {
          heading: "2. No Financial, Tax, or Regulatory Advisory",
          body: "No information within our chatbot systems, sandbox visualizations, or platform documents constitutes certified professional advisory:",
          bulletPoints: [
            "Commercial Risks: Cross-border tax values and e-commerce regulatory updates represent simulated models and must be vetted by local accounting partners.",
            "Translation Disclaimers: Local dialect nuances may produce minor discrepancies in SKU listing interpretations. The platform is not liable for inventory logistics mismatches caused by translation hallucination."
          ]
        },
        {
          heading: "3. 'As-Is' Operational Paradigm",
          body: "Except as expressly written inside an executed Enterprise SLA contract, all public platform capabilities, virtual sandboxes, and consulting booking widgets are provided on an 'As-Is' and 'As-Available' footing, without warranty of any format, explicit or implied. We do not guarantee continuous uptime on public preview links.",
        }
      ]
    },
    "cookie-policy": {
      title: "Cookie & Local Storage Policy",
      subtitle: "Detailed list of functional and session trackers used in tracking pipelines",
      lastUpdated: "May 2026",
      sections: [
        {
          heading: "1. Rationale for Tracking",
          body: "Eunimart avoids consumer-style bulk telemetry tracking. We do not run any third-party behavioral cookie networks, and we never auction your navigation trends. Our tracking cookies serve completely functional purposes to stabilize enterprise dashboard states and maintain security authentication loops.",
        },
        {
          heading: "2. Exact Inventory of Operational Elements Used",
          body: "We map cookie usage to direct local system tasks:",
          bulletPoints: [
            "Authentications Session Tokens: Encrypted string cookies used to identify authorized login instances, preventing unauthorized access to the Live Sandbox dashboard.",
            "Local Sandbox State: Browser 'localStorage' is used to record demo lead listings generated by the live chat, enabling responsive demonstrations that persist between page refreshes.",
            "Display Configurations: Saves customized layout parameters and views like current user navigation choices."
          ]
        },
        {
          heading: "3. Complete Absence of Third-Party Advertising Pixels",
          body: "To guarantee military-grade isolation for banks and health organizations, our platform does not integrate Meta Custom Audiences, Google DoubleClick, or similar marketing pixels. Our code remains strictly clean.",
        },
        {
          heading: "4. Revocation & Disabling Guides",
          body: "You may decline functional session trackers via standard browser security panels. However, restricting necessary cookies will immediately prevent access to the secure authentication systems, locking you out of the Live Sandbox.",
        }
      ]
    },
    "acceptable-use": {
      title: "Acceptable Use Policy (AUP)",
      subtitle: "Operational bounds and security codes for pipeline safety",
      lastUpdated: "May 2026",
      sections: [
        {
          heading: "1. Ethical Boundaries of Enterprise Generative AI",
          body: "Eunimart's products are engineered to optimize lawful commerce, digital automation, and business translation data. You are strictly forbidden from submitting prompt scripts designed to generate or facilitate harmful outcomes:",
          bulletPoints: [
            "Adversarial Prompt Injection: Actions that seek to intentionally trigger system crashes, circumvent security filters, or force our system models to reveal hidden context buffers.",
            "Harmful Code Engineering: Do not use our code generation portals to draft malicious network scripts, phishing models, or tracking viruses.",
            "Unlicensed Regulated Sectors: Do not deploy our non-air-gapped public models to formulate certified financial audit assessments or direct clinical diagnostics without appropriate medical certification."
          ]
        },
        {
          heading: "2. Mechanical Integrity and Scraper bans",
          body: "Users must not load automated crawlers, request spiders, or continuous high-velocity shell scripts against our main ingress gateways. Rate limits are dynamically tracked, and excess transactions beyond normal human limits are automatically blocked by our safety firewalls.",
        },
        {
          heading: "3. Severe Sanctions for Compliance Infractions",
          body: "Failure to follow this Acceptable Use Policy leads to immediate and irreversible consequences:",
          bulletPoints: [
            "Immediate Revocation: Revocation of active team seat keys without eligibility for fee reimbursement.",
            "Air-Gap Blocking: Complete blacklisting of of network ranges, enterprise IP blocks, and custom VPN endpoints from our Mumbai datacenter.",
            "Legal Referral: Reporting of validated unlawful conduct directly to national cyber-crime response teams (CERT-In) and global law-enforcement institutions."
          ]
        }
      ]
    },
  };

  const activeDoc = legalDocs[activeTab] || legalDocs["legal-notice"];

  // Filter content by search query if present
  const renderSections = () => {
    if (!searchQuery.trim()) return activeDoc.sections;
    const query = searchQuery.toLowerCase();
    return activeDoc.sections.filter(
      (sec) =>
        sec.heading.toLowerCase().includes(query) ||
        sec.body.toLowerCase().includes(query) ||
        (sec.bulletPoints &&
          sec.bulletPoints.some((bp) => bp.toLowerCase().includes(query)))
    );
  };

  const filteredSections = renderSections();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="legal-master-viewer">
      
      {/* Upper Navigation/Banner */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 border-b border-slate-900 pb-6">
        <div className="space-y-1">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-350 transition-colors font-mono cursor-pointer"
            id="btn-back-to-home-legal"
          >
            <Icons.ArrowLeft className="w-3.5 h-3.5" />
            Return to Enterprise Portal
          </button>
          <div className="flex items-center gap-2 mt-2">
            <h1 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">Compliance & Legal Center</h1>
            <span className="text-[9px] bg-emerald-500/20 text-emerald-400 font-mono font-bold px-2 py-0.5 rounded border border-emerald-500/20">
              VETTED May 2026
            </span>
          </div>
          <p className="text-xs text-slate-400">Review statutory guidelines, security disclosures, and regulatory bindings of Eunimart.</p>
        </div>

        {/* PDF / Actions simulator */}
        <div className="flex gap-2">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5"
            id="btn-print-legal"
          >
            <Icons.Printer className="w-3.5 h-3.5 text-slate-400" />
            Print Document
          </button>
          <button
            onClick={() => alert("Enterprise PDF Generation triggered. Security hash signed: SHA-256/Eunimart-Compliance-BOM-1.")}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-705 text-slate-200 hover:text-white rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5"
            id="btn-download-pdf-legal"
          >
            <Icons.Download className="w-3.5 h-3.5 text-slate-400" />
            Download PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Category Sidebar tabs */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Quick search input */}
          <div className="bg-[#090d16] border border-slate-850 p-4 rounded-2xl space-y-2">
            <label className="text-[10px] font-mono text-slate-500 uppercase font-black block">Search legal codes</label>
            <div className="relative">
              <Icons.Search className="w-3.5 h-3.5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search terms, compliance, liabilities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-850 focus:border-blue-500 text-slate-250 placeholder-slate-600 rounded-xl pl-9 pr-4 py-2 text-xs focus:outline-none"
                id="legal-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-500 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Navigation links groups */}
          <div className="bg-[#090d16] border border-slate-850 rounded-2xl p-2.5 space-y-1">
            <p className="text-[10px] font-mono font-black text-slate-500 px-3 py-2 uppercase border-b border-slate-900 mb-2">Available Disclosures</p>
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSearchQuery("");
                  }}
                  id={`legal-sidebar-tab-${tab.id}`}
                  className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-blue-950/40 via-purple-950/40 to-slate-950 border border-purple-500/30 text-white font-bold"
                      : "bg-transparent text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${isSelected ? "bg-purple-500/20 text-purple-400" : "bg-slate-950 text-slate-500"}`}>
                      {getIcon(tab.icon, "w-4 h-4")}
                    </div>
                    <div>
                      <h4 className="text-xs tracking-tight">{tab.label}</h4>
                      <p className="text-[9px] text-slate-500 font-mono">{tab.category}</p>
                    </div>
                  </div>
                  <Icons.ChevronRight className={`w-3.5 h-3.5 text-slate-500 transition-transform ${isSelected ? "rotate-90 text-purple-400" : ""}`} />
                </button>
              );
            })}
          </div>

          {/* Prompt contact compliance widget */}
          <div className="bg-[#090d16] border border-slate-850 p-5 rounded-2xl space-y-3">
            <div className="flex items-center gap-2">
              <Icons.ShieldAlert className="w-5 h-5 text-blue-400" />
              <h4 className="text-xs font-mono font-black text-white uppercase">Sovereign Compliance Assurance</h4>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
              Need customized legal declarations tailored to specific enterprise sectors, local banking codes, or on-premises server security agreements?
            </p>
            <div className="pt-1.5">
              <span className="text-[10px] font-mono text-slate-500 uppercase block">Compliance Desk:</span>
              <p className="text-xs font-bold text-white font-mono mt-0.5">compliance@eunimart.in</p>
              <p className="text-[10px] text-slate-500 mt-1">Eunimart Regulatory Group BOM-1</p>
            </div>
          </div>

        </div>

        {/* Right Column: Display Document Content */}
        <div className="lg:col-span-8 bg-[#090d16] border border-slate-850 rounded-3xl p-6 sm:p-8 space-y-6">
          
          <div className="space-y-2 border-b border-slate-900 pb-5">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span className="uppercase">Eunimart Private Limited &middot; Legal Registry</span>
              <span>Last Revised: {activeDoc.lastUpdated}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">{activeDoc.title}</h2>
            <p className="text-xs text-slate-400 font-sans italic">{activeDoc.subtitle}</p>
          </div>

          <div className="space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed font-sans" id="legal-doc-content-body">
            
            {filteredSections.length > 0 ? (
              filteredSections.map((section, idx) => (
                <div key={idx} className="space-y-3" id={`legal-section-${idx}`}>
                  <h3 className="text-sm font-extrabold text-white uppercase tracking-wider font-mono border-l-2 border-blue-500 pl-3">
                    {section.heading}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-xs">
                    {section.body}
                  </p>
                  
                  {section.bulletPoints && (
                    <ul className="space-y-1.5 pl-5 list-disc text-xs text-slate-400">
                      {section.bulletPoints.map((bp, bpIdx) => (
                        <li key={bpIdx}>
                          {bp}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-10 space-y-3">
                <Icons.SearchX className="w-10 h-10 text-slate-650 mx-auto" />
                <p className="text-xs text-slate-500 font-mono font-bold">No clauses matched your filter &ldquo;{searchQuery}&rdquo;</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-xs font-mono text-blue-400 rounded-lg"
                >
                  Reset Document Search
                </button>
              </div>
            )}

            {/* Footer Sign-off inside the doc */}
            {filteredSections.length > 0 && (
              <div className="pt-8 border-t border-slate-900 text-center space-y-2 text-[10px] font-mono text-slate-500">
                <p>Eunimart Private Limited Compliance Envelope Signature</p>
                <p className="text-slate-600 uppercase">SYSSEC: BOM-1-2026-MCA-VETTED-KEY-0X8975ACFF</p>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};
