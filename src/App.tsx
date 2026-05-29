import React, { useState, useEffect } from "react";
import * as Icons from "lucide-react";

import { Header } from "./components/Header";
import { AIProductViewer } from "./components/AIProductViewer";
import { SmartChatbot } from "./components/SmartChatbot";
import { AuthSystem } from "./components/AuthSystem";
import { DashboardDemo } from "./components/DashboardDemo";
import { LegalViewer } from "./components/LegalViewer";
import { PlatformViewer } from "./components/PlatformViewer";
import { TextToVideoHero } from "./components/TextToVideoHero";
import { AboutPage } from "./components/AboutPage";
import { SolutionsPage } from "./components/SolutionsPage";
import { TechnologyPage } from "./components/TechnologyPage";
import { DevelopersPage } from "./components/DevelopersPage";
import { PricingPage } from "./components/PricingPage";
import { ContactPage } from "./components/ContactPage";
import { INDUSTRIES, TESTIMONIALS, CASE_STUDIES, BLOG_POSTS, MILESTONES, FAQ_ITEMS } from "./data";

export default function App() {
  const [currentView, setView] = useState<string>("home");
  const [userEmail, setUserEmail] = useState<string>("");
  const [requestedDemoProduct, setRequestedDemoProduct] = useState<string>("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMsg, setContactMsg] = useState("");
  const [contactSuccess, setContactSuccess] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [selectedIndustryFilter, setSelectedIndustryFilter] = useState<string>("all");
  const [selectedCalendarSlot, setSelectedCalendarSlot] = useState<string>("" );
  const [selectedLegalTab, setSelectedLegalTab] = useState<string>("legal-notice");
  const [selectedPlatformTab, setSelectedPlatformTab] = useState<string>("video-engine");

  // Captured local leads list (interactive simulation storage)
  const [allLeads, setAllLeads] = useState<Array<{ name: string; email: string; product: string }>>([]);

  // Check state to persist logins
  useEffect(() => {
    const savedUser = localStorage.getItem("eunimart_user_email");
    if (savedUser) {
      setUserEmail(savedUser);
    }
  }, []);

  const handleLoginSuccess = (email: string) => {
    setUserEmail(email);
    localStorage.setItem("eunimart_user_email", email);
    setView("dashboard");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogout = () => {
    setUserEmail("");
    localStorage.removeItem("eunimart_user_email");
    setView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLeadCapture = (lead: { name: string; email: string; product: string }) => {
    setAllLeads((prev) => [lead, ...prev]);
    // Save to local storage mock log
    const savedLeads = JSON.parse(localStorage.getItem("mock_leads") || "[]");
    localStorage.setItem("mock_leads", JSON.stringify([lead, ...savedLeads]));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail.trim() || !contactName.trim()) return;
    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
      setContactName("");
      setContactEmail("");
      setContactMsg("");
    }, 4500);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes("@")) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterSuccess(false);
      setNewsletterEmail("");
    }, 3500);
  };

  // Helper to resolve Lucide Icons on the main page dynamically
  const getIcon = (iconName: string, className: string = "w-5 h-5") => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.Bot className={className} />;
  };

  // Filters industry cards
  const filteredIndustries = selectedIndustryFilter === "all" 
    ? INDUSTRIES 
    : INDUSTRIES.filter(ind => ind.id === selectedIndustryFilter);

  // Dynamic quick scheduling slots
  const calendarSlots = [
    { time: "10:30 AM IST", status: "Available" },
    { time: "01:00 PM IST", status: "Available" },
    { time: "03:30 PM IST", status: "Available" },
    { time: "05:00 PM IST", status: "Available" }
  ];

  return (
    <div className="min-h-screen bg-[#070b13] text-slate-100 font-sans selection:bg-purple-600/30 selection:text-white" id="main-master-wrapper">
      
      {/* 1. Brand Header */}
      <Header 
        currentView={currentView}
        setView={setView}
        isLightTheme={false}
        setLightTheme={() => {}}
      />

      {/* Main Container Switch */}
      {currentView === "login" ? (
        <AuthSystem 
          onLoginSuccess={handleLoginSuccess}
          onExit={() => setView("home")}
          requestedDemoProduct={requestedDemoProduct}
        />
      ) : currentView === "dashboard" ? (
        <DashboardDemo 
          userEmail={userEmail}
          onLogout={handleLogout}
        />
      ) : currentView === "legal" ? (
        <LegalViewer 
          initialTab={selectedLegalTab}
          onBack={() => {
            setView("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      ) : currentView === "platform" ? (
        <PlatformViewer 
          initialTab={selectedPlatformTab}
          onBack={() => {
            setView("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      ) : currentView === "about" ? (
        <AboutPage />
      ) : currentView === "solutions" ? (
        <SolutionsPage />
      ) : currentView === "technology" ? (
        <TechnologyPage />
      ) : currentView === "developers" ? (
        <DevelopersPage />
      ) : currentView === "pricing" ? (
        <PricingPage />
      ) : currentView === "contact" ? (
        <ContactPage />
      ) : (
        /* Home Public View */
        <main className="relative overflow-hidden">
          
          {/* Subtle cosmic background grids & blurs */}
          <div className="absolute top-[10%] left-[-10%] w-[45%] h-[55%] bg-purple-750/10 rounded-full blur-[160px] pointer-events-none z-0"></div>
          <div className="absolute top-[40%] right-[-10%] w-[40%] h-[50%] bg-blue-750/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

          {/* SECTION 1: HERO SECTION */}
          <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32" id="hero-section">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column Text & CTAs */}
              <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
                
                {/* Brand announcement badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-blue-500/10 via-purple-650/15 to-transparent text-xs font-semibold text-blue-400 rounded-full border border-blue-500/20 shadow-md">
                  <Icons.Sparkles className="w-3.5 h-3.5 text-blue-405 animate-pulse" />
                  Eunimart VidGen 4.5 Sovereign Model Released
                </span>

                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white">
                    Written Paragraph To{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                      AI Cinema Video
                    </span>
                  </h1>
                  
                  <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Eunimart delivers a high-fidelity sovereign AI diffusion engine built to synthesize raw paragraph scripts into highly consistent, professional cinematic videos with autonomous camera tracks and emotional vocal narratives.
                  </p>
                </div>

                {/* Main CTAs */}
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
                  <button
                    onClick={() => {
                      setView("login");
                      setRequestedDemoProduct("AI Video Engine Suite");
                    }}
                    id="hero-cta-demo"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-extrabold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:opacity-95 shadow-lg shadow-purple-500/10 hover:shadow-cyan-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Icons.PlayCircle className="w-4 h-4 shrink-0" />
                    Book Secure Demo
                  </button>
                  <a
                    href="#products-section"
                    id="hero-cta-explore"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs text-slate-200 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    Explore AI Products
                    <Icons.ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Mini Trust Stats */}
                <div className="pt-6 border-t border-slate-900 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-left">
                  <div>
                    <h3 className="text-xl font-extrabold text-white font-mono">3.5M+</h3>
                    <p className="text-[10px] text-slate-500 font-mono">Cinematic Videos Rendered</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white font-mono">12.5x</h3>
                    <p className="text-[10px] text-slate-500 font-mono">Production Cost reduction</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white font-mono">99.8%</h3>
                    <p className="text-[10px] text-slate-500 font-mono">Sovereign Physics Sync</p>
                  </div>
                </div>

              </div>

              {/* Right Column visual text-to-video studio component */}
              <div className="lg:col-span-5 relative z-10">
                <TextToVideoHero />
              </div>

            </div>
          </section>

          {/* SECTION 2: TRUSTED BY SECTION */}
          <section className="bg-slate-950/40 border-y border-slate-900 py-10" id="trusted-by">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-[10px] font-mono tracking-wider text-slate-400 text-center uppercase font-bold mb-6">
                Orchestrating Platform Integrations & Support Alongside Global Tech Leaders
              </p>

              {/* Grid of clean mock SVG logos */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-60">
                <div className="flex items-center justify-center gap-1.5 hover:opacity-100 transition-opacity">
                  <span className="text-sm font-extrabold text-white font-mono">/ OpenAI /</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 hover:opacity-100 transition-opacity">
                  <span className="text-sm font-extrabold text-slate-200 font-mono">&lt;Anthropic&gt;</span>
                </div>
                <div className="flex items-center justify-center gap-1 hover:opacity-100 transition-opacity">
                  <span className="text-sm font-extrabold text-blue-400 font-mono">NVIDIA AI</span>
                </div>
                <div className="flex items-center justify-center gap-1 hover:opacity-100 transition-opacity">
                  <span className="text-sm font-extrabold text-white font-mono">amazon.s3</span>
                </div>
                <div className="flex items-center justify-center gap-1 hover:opacity-100 transition-opacity">
                  <span className="text-sm font-extrabold text-purple-400 font-mono">Hubspot Connect</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 hover:opacity-100 transition-opacity">
                  <span className="text-sm font-extrabold text-white font-mono">stripe</span>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: AI PRODUCTS VIEWPORT */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24" id="products-section">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase font-bold bg-blue-500/5 border border-blue-500/10 px-3 py-1 rounded-full">
                EUNIMART AI PRODUCTS SUITE
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-none mt-4">
                Enterprise-Grade AI Architecture
              </h2>
              <p className="text-sm text-slate-400 mt-3">
                Select and investigate the performance parameters, live API terminals, and price structures matching your localized workflows.
              </p>
            </div>

            {/* Embed the rich Products Panel */}
            <AIProductViewer onSelectDemo={(prdName) => {
              setRequestedDemoProduct(prdName);
              setView("login");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
          </section>

          {/* SECTION 4: INDUSTRIES WE SERVE */}
          <section className="bg-slate-950/30 border-t border-slate-900 py-20 px-4 sm:px-6 lg:px-8" id="industries-section">
            <div className="max-w-7xl mx-auto">
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                <div>
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-bold">REGIONAL ADAPTABILITY</span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1.5 leading-none">Industries We Serve</h2>
                  <p className="text-xs text-slate-450 mt-2">Tailored semantic models optimized for secure regional compliance regulations.</p>
                </div>

                {/* Filter tabs */}
                <div className="flex flex-wrap gap-2">
                  <button 
                    onClick={() => setSelectedIndustryFilter("all")}
                    className={`px-3 py-1.5 text-[10px] font-extrabold rounded-lg tracking-wider uppercase transition-all ${
                      selectedIndustryFilter === "all" ? "bg-purple-600 text-white" : "bg-slate-900 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    All Sectors
                  </button>
                  {INDUSTRIES.slice(0, 5).map((ind) => (
                    <button
                      key={ind.id}
                      onClick={() => setSelectedIndustryFilter(ind.id)}
                      className={`px-3 py-1.5 text-[10px] font-extrabold rounded-lg tracking-wider uppercase transition-all ${
                        selectedIndustryFilter === ind.id ? "bg-purple-600 text-white" : "bg-slate-900 text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {ind.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid lists */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="industries-cards-grid">
                {filteredIndustries.map((ind) => (
                  <div 
                    key={ind.id} 
                    className="bg-slate-900/40 border border-slate-800 hover:border-purple-500/45 p-6 rounded-2xl relative overflow-hidden group transition-all duration-300"
                    id={`industry-card-${ind.id}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-all">
                        {getIcon(ind.icon, "w-5 h-5")}
                      </div>
                      
                      {/* Metric Showcase badge */}
                      <span className="text-xs font-mono font-black text-emerald-400 tracking-tight bg-emerald-500/5 px-2 py-1 rounded border border-emerald-500/10">
                        {ind.statValue}
                      </span>
                    </div>

                    <h3 className="text-sm font-extrabold text-white tracking-widest uppercase">{ind.name}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mt-2.5">{ind.description}</p>
                    
                    <p className="text-[10px] font-mono text-slate-500 tracking-wide mt-4 border-t border-slate-850 pt-3">
                      SLA Baseline: <span className="text-slate-300">{ind.statLabel}</span>
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* SECTION 5: AI CAPABILITIES GRID */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24" id="capabilities-section">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold">ENGINEERING PARAMETERS</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1.5 leading-none">Core AI Capabilities</h2>
              <p className="text-xs text-slate-400 mt-2.5">Unified tools optimized for swift client integration frameworks.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-900/20 border border-slate-800 rounded-2xl relative overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                  <Icons.Zap className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Generative Deep Learning</h3>
                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                  Utilize our highly-tuned specialized LLM base weights optimized specifically for business reconciliations and dynamic cross-market pricing.
                </p>
              </div>

              <div className="p-6 bg-slate-900/20 border border-slate-800 rounded-2xl relative overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
                  <Icons.Bot className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Autonomous Operations</h3>
                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                  Design workflow agents capable of recursively inspecting regulatory files, managing inventory checklists, and raising SMS warnings natively.
                </p>
              </div>

              <div className="p-6 bg-slate-900/20 border border-slate-800 rounded-2xl relative overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
                  <Icons.Shield className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Sovereign Air Gapped Clouds</h3>
                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                  Host complete physical cluster nodes on pre-approved corporate bounds keeping critical banking, health records entirely private.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 6: DEMO EXPERIENCE SECTION */}
          <section className="bg-slate-950/40 border-t border-slate-900 py-20 px-4 sm:px-6 lg:px-8" id="demo-section">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Side: Onboarding Agent chat widget */}
                <div className="lg:col-span-5">
                  <SmartChatbot onLeadCaptured={handleLeadCapture} />
                </div>

                {/* Right Side: Demo pitch and lead log simulation */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 tracking-wider uppercase font-bold">INTERACTIVE SIMULATOR CLIENT</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 leading-tight">
                      Experience Autonomous Intelligence
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
                      Converse with our virtual operator on the left. Input your name and email when prompted to register a complimentary consulting session with CEO Ratan Kumar.
                    </p>
                  </div>

                  {/* Active captured lead logs in memory */}
                  <div className="bg-slate-950/60 border border-slate-850 rounded-2xl p-4">
                    <span className="text-[10px] font-mono text-slate-500 block uppercase mb-3 font-semibold">Active Demonstration Logs</span>
                    <div className="space-y-2 h-24 overflow-y-auto font-mono text-[10px]">
                      {allLeads.length > 0 ? (
                        allLeads.map((ld, i) => (
                          <div key={i} className="text-emerald-400" id={`lead-log-${i}`}>
                            &gt; REGISTERED LEAD: {ld.name} ({ld.email}) - Interest: {ld.product}
                          </div>
                        ))
                      ) : (
                        <div className="text-slate-600 italic">No demo users logged. Populate the chat widget on the left to trigger logs.</div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-mono font-bold uppercase text-slate-300">Included Features Preview:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex gap-2 items-center text-xs text-slate-400">
                        <Icons.Check className="w-4 h-4 text-emerald-400" />
                        <span>Interactive AI chatbot demo</span>
                      </div>
                      <div className="flex gap-2 items-center text-xs text-slate-400">
                        <Icons.Check className="w-4 h-4 text-emerald-400" />
                        <span>Direct Sandbox Simulation</span>
                      </div>
                      <div className="flex gap-2 items-center text-xs text-slate-400">
                        <Icons.Check className="w-4 h-4 text-emerald-400" />
                        <span>API Sandbox quotas builder</span>
                      </div>
                      <div className="flex gap-2 items-center text-xs text-slate-400">
                        <Icons.Check className="w-4 h-4 text-emerald-400" />
                        <span>Visual agent workflow models</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-start">
                    <button
                      onClick={() => {
                        setView("dashboard");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-550 text-white font-extrabold text-xs transition-all cursor-pointer flex items-center gap-1.5 shadow-lg"
                      id="btn-sandbox-redirect"
                    >
                      <Icons.LayoutDashboard className="w-4 h-4" />
                      Try Live Sandbox Dashboard Directly
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* SECTION 8: WHY CHOOSE EUNIMART */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 font-mono text-center" id="why-choose-us">
            <span className="text-[10px] text-slate-500 font-bold uppercase">SECURED PLATFORM STANDARDS</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 leading-none uppercase">Why Choose Eunimart</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-left">
              <div className="p-5 bg-slate-900/35 border border-slate-805 rounded-2xl">
                <span className="text-blue-400 font-bold text-xs">01 // SECURITY</span>
                <p className="text-xs text-white uppercase font-bold mt-2">Enterprise Security</p>
                <p className="text-xs text-slate-400 leading-relaxed font-sans mt-2">SOC2 Type II, ISO-27001, and GDPR compliance validation metrics checked weekly.</p>
              </div>
              <div className="p-5 bg-slate-900/35 border border-slate-850 rounded-2xl">
                <span className="text-purple-400 font-bold text-xs">02 // ROI LIFT</span>
                <p className="text-xs text-white uppercase font-bold mt-2">High Cost ROI</p>
                <p className="text-xs text-slate-400 leading-relaxed font-sans mt-2">Optimized SKU translations cut customer onboarding delays, yielding measurable growth.</p>
              </div>
              <div className="p-5 bg-slate-900/35 border border-slate-855 rounded-2xl">
                <span className="text-cyan-400 font-bold text-xs">03 // SLA EXPERTS</span>
                <p className="text-xs text-white uppercase font-bold mt-2">24/7 Live Monitoring</p>
                <p className="text-xs text-slate-400 leading-relaxed font-sans mt-2">Backed by native support engineers responding to critical cases under contractual bounds.</p>
              </div>
              <div className="p-5 bg-slate-900/35 border border-slate-850 rounded-2xl">
                <span className="text-teal-400 font-bold text-xs">04 // RAPID SYNC</span>
                <p className="text-xs text-white uppercase font-bold mt-2">Fast Deployment</p>
                <p className="text-xs text-slate-400 leading-relaxed font-sans mt-2">Utilize prebuilt API keys to synchronize active databases in less than 48 hours safely.</p>
              </div>
            </div>
          </section>

          {/* SECTION 9: CASE STUDIES & SUCCESS STORIES */}
          <section className="bg-slate-950/40 border-t border-slate-900 py-20 px-4 sm:px-6 lg:px-8" id="case-studies">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold">CASE STUDY LOGS</span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 leading-none">Enterprise Impact Case Studies</h2>
                <p className="text-xs text-slate-400 mt-2.5">Documented operation transformations after deploying our platform.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CASE_STUDIES.map((cs) => (
                  <div 
                    key={cs.id}
                    className="p-6 bg-slate-900/20 border border-slate-800 rounded-2xl hover:border-blue-500/35 transition-all flex flex-col justify-between"
                    id={`case-study-${cs.id}`}
                  >
                    <div>
                      <span className="text-[9px] font-mono uppercase bg-blue-500/10 text-blue-400 font-semibold px-2 py-0.5 rounded">
                        {cs.industry}
                      </span>
                      <h4 className="text-sm font-extrabold text-white mt-3 leading-snug">{cs.title}</h4>
                      
                      {/* Before vs After comparison */}
                      <div className="grid grid-cols-2 gap-2 text-center mt-5 py-3 border-y border-slate-850">
                        <div>
                          <p className="text-[8px] font-mono text-slate-500 uppercase">Legacy System</p>
                          <p className="text-sm font-bold text-red-400 font-mono mt-0.5">{cs.beforeVal}</p>
                        </div>
                        <div>
                          <p className="text-[8px] font-mono text-slate-505 uppercase">Eunimart Engine</p>
                          <p className="text-sm font-bold text-emerald-400 font-mono mt-0.5">{cs.afterVal}</p>
                        </div>
                      </div>

                      <p className="text-xs text-slate-500 font-mono mt-3 text-center uppercase tracking-wider">{cs.metricName}</p>
                      
                      <p className="text-xs text-slate-350 leading-relaxed italic mt-4">
                        &ldquo;{cs.quote}&rdquo;
                      </p>
                    </div>

                    <p className="text-[10px] font-mono font-bold text-blue-450 tracking-wider uppercase mt-5 border-t border-slate-850 pt-3">
                      Value Lift: {cs.roiText}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 10: TESTIMONIALS SECTION */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="testimonials">
            <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 text-center font-bold">CLIENT SATISFACTION VERIFICATIONS</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 leading-none text-center">COMMUNITY TESTIMONIALS</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {TESTIMONIALS.map((test) => (
                <div 
                  key={test.id}
                  className="p-6 bg-slate-900/10 border border-slate-850 rounded-2xl flex flex-col justify-between"
                  id={`testimonial-${test.id}`}
                >
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    &ldquo;{test.text}&rdquo;
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-slate-850 pt-4 mt-4">
                    <div>
                      <h4 className="text-xs font-extrabold text-white">{test.name}</h4>
                      <p className="text-[10px] text-slate-500 font-mono">{test.role} &middot; {test.company}</p>
                    </div>

                    {/* Simple rendering of star scores */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: test.rating }).map((_, i) => (
                        <Icons.Sparkles key={i} className="w-3 h-3 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 11: PRICING SECTION & TABLE */}
          <section className="bg-slate-950/40 border-t border-slate-900 py-20 px-4 sm:px-6 lg:px-8" id="pricing-section">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-bold">COMPREHENSIVE LEVEL METRICS</span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 leading-none">Transparent Enterprise Tiers</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                
                {/* Starter Tier */}
                <div className="p-6 bg-slate-900/20 border border-slate-800 rounded-2xl flex flex-col justify-between relative overflow-hidden" id="pricing-tier-starter">
                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase text-slate-400">Starter Node</h3>
                    <p className="text-xs text-slate-500 mt-1">For growing teams building first APIs.</p>
                    <p className="text-2xl font-black font-mono text-white mt-4">$299<span className="text-xs text-slate-500">/mo</span></p>
                    
                    <ul className="space-y-2 mt-6 text-xs text-slate-350">
                      <li className="flex gap-2 items-center">
                        <Icons.Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>Up to 50k tokens monthly</span>
                      </li>
                      <li className="flex gap-2 items-center">
                        <Icons.Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>Commerce listing translation</span>
                      </li>
                      <li className="flex gap-2 items-center text-slate-600">
                        <span>No custom LLM host</span>
                      </li>
                    </ul>
                  </div>

                  <button 
                    onClick={() => { setView("login"); setRequestedDemoProduct("Starter Tier ($299)"); }}
                    className="w-full mt-6 py-2 bg-slate-800 hover:bg-slate-750 text-slate-300 font-bold rounded-lg text-xs transition-all cursor-pointer"
                  >
                    Select Starter
                  </button>
                </div>

                {/* Professional Tier */}
                <div className="p-6 bg-slate-900/40 border border-purple-500/50 rounded-2xl flex flex-col justify-between relative overflow-hidden" id="pricing-tier-pro">
                  <span className="absolute top-2 right-2 text-[8px] bg-purple-500/15 text-purple-300 font-mono font-bold px-2 py-0.5 rounded">
                    PRO POPULAR
                  </span>
                  
                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase text-purple-300">Professional Suite</h3>
                    <p className="text-xs text-slate-400 mt-1">Our flagship commercial setup.</p>
                    <p className="text-2xl font-black font-mono text-white mt-4">$1,200<span className="text-xs text-slate-500">/mo</span></p>
                    
                    <ul className="space-y-2 mt-6 text-xs text-slate-300">
                      <li className="flex gap-2 items-center">
                        <Icons.Check className="w-3.5 h-3.5 text-purple-400" />
                        <span>Up to 2.5M tokens monthly</span>
                      </li>
                      <li className="flex gap-2 items-center">
                        <Icons.Check className="w-3.5 h-3.5 text-purple-400" />
                        <span>Dynamic price tracking edge SDK</span>
                      </li>
                      <li className="flex gap-2 items-center">
                        <Icons.Check className="w-3.5 h-3.5 text-purple-400" />
                        <span>Dedicated business dashboard API</span>
                      </li>
                    </ul>
                  </div>

                  <button 
                    onClick={() => { setView("login"); setRequestedDemoProduct("Professional Tier ($1,200)"); }}
                    className="w-full mt-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-extrabold rounded-lg text-xs transition-all cursor-pointer shadow"
                  >
                    Select Professional
                  </button>
                </div>

                {/* Enterprise Custom Tier */}
                <div className="p-6 bg-slate-900/20 border border-slate-800 rounded-2xl flex flex-col justify-between relative" id="pricing-tier-enterprise">
                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase text-slate-400">Enterprise Cloud</h3>
                    <p className="text-xs text-slate-550 mt-1">Full contractual corporate SLA wrappers.</p>
                    <p className="text-2xl font-black font-mono text-white mt-4">$2,200<span className="text-xs text-slate-550">/mo</span></p>
                    
                    <ul className="space-y-2 mt-6 text-xs text-slate-350">
                      <li className="flex gap-2 items-center">
                        <Icons.Check className="w-3.5 h-3.5 text-blue-400" />
                        <span>5M+ monthly token limits</span>
                      </li>
                      <li className="flex gap-2 items-center">
                        <Icons.Check className="w-3.5 h-3.5 text-blue-400" />
                        <span>Custom model weight host parameters</span>
                      </li>
                      <li className="flex gap-2 items-center">
                        <Icons.Check className="w-3.5 h-3.5 text-blue-400" />
                        <span>Dedicated 24/7 technical specialist</span>
                      </li>
                    </ul>
                  </div>

                  <button 
                    onClick={() => { setView("login"); setRequestedDemoProduct("Enterprise Tier ($2,200)"); }}
                    className="w-full mt-6 py-2 bg-slate-800 hover:bg-slate-750 text-slate-300 font-bold rounded-lg text-xs transition-all cursor-pointer"
                  >
                    Select Enterprise
                  </button>
                </div>

                {/* Custom SLA Transformation */}
                <div className="p-6 bg-slate-950/70 border border-slate-850 rounded-2xl flex flex-col justify-between relative" id="pricing-tier-custom">
                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase text-teal-400">Custom Transformation</h3>
                    <p className="text-xs text-slate-400 mt-1">Bespoke air-gapped on-site server setups.</p>
                    <p className="text-xl font-bold font-mono text-white mt-4">Contact Sales</p>
                    
                    <p className="text-xs text-slate-450 leading-relaxed font-sans mt-5">
                      Perfect for sovereign banks, municipal departments, and pharmaceutical conglomerates requiring highly tailored local model training regimes.
                    </p>
                  </div>

                  <a 
                    href="#contact-section"
                    className="w-full mt-6 text-center py-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 font-bold rounded-lg text-xs transition-colors block"
                  >
                    Consult CEO Office
                  </a>
                </div>

              </div>

              {/* SECTION 11.2 Pricing Comparison list */}
              <div className="mt-12 bg-slate-900/40 border border-slate-800 rounded-3xl p-4 sm:p-6 overflow-x-auto">
                <table className="w-full text-xs text-left min-w-[500px]" id="pricing-comparison-table">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-500 font-mono uppercase text-[9px]">
                      <th className="py-3 px-2">Core Parameter Metrics</th>
                      <th className="py-3 px-2">Starter</th>
                      <th className="py-3 px-2">Professional</th>
                      <th className="py-3 px-2">Enterprise</th>
                      <th className="py-3 px-2">Sovereign Air-Gap</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-850/60 text-slate-300">
                    <tr>
                      <td className="py-3 px-2 font-semibold">API Limits</td>
                      <td className="py-3 px-2">5,000 / mo</td>
                      <td className="py-3 px-2">150,000 / mo</td>
                      <td className="py-3 px-2">1,000,000 / mo</td>
                      <td className="py-3 px-2 text-blue-400 font-bold">Uncapped limit</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-semibold">Users Supported</td>
                      <td className="py-3 px-2">5 Team Seats</td>
                      <td className="py-3 px-2">25 Team Seats</td>
                      <td className="py-3 px-2">100 Team Seats</td>
                      <td className="py-3 px-2 text-blue-400 font-bold">Unlimited Seat license</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-semibold">AI Models access</td>
                      <td className="py-3 px-2">Base Cloud Models</td>
                      <td className="py-3 px-2">Ensemble Models</td>
                      <td className="py-3 px-2">Sovereign custom weights</td>
                      <td className="py-3 px-2 font-mono text-emerald-400">Custom Air Gapped Core</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-semibold">Workflow Simulators</td>
                      <td className="py-3 px-2">Limited (3 max)</td>
                      <td className="py-3 px-2">Comprehensive</td>
                      <td className="py-3 px-2">Priority (Unlimited)</td>
                      <td className="py-3 px-2 text-emerald-400">Full on-site automation</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-semibold">Support Level SLA</td>
                      <td className="py-3 px-2">Email queue (24h)</td>
                      <td className="py-3 px-2">SLA Priority (1h)</td>
                      <td className="py-3 px-2 text-emerald-400 font-bold">Dedicated Specialist (Direct Desk)</td>
                      <td className="py-3 px-2 text-emerald-400 font-bold">24/7 dedicated local engineer</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </section>

          {/* SECTION 12: RESOURCES & INSIGHTS */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="resources-section">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold">EUNIMART PLATFORM BLOG</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1.5 leading-none">Resources & Insights</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BLOG_POSTS.map((post) => (
                <div 
                  key={post.id}
                  className="bg-slate-900/10 border border-slate-850 rounded-2xl flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group overflow-hidden"
                  id={`blog-${post.id}`}
                >
                  <div>
                    {/* Blog Card Widescreen Cover */}
                    {post.imageUrl && (
                      <div className="h-40 overflow-hidden relative border-b border-slate-850 bg-slate-950">
                        <img 
                          src={post.imageUrl} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-2.5 left-2.5 bg-slate-950/90 border border-slate-800 text-[9px] font-mono font-extrabold text-cyan-400 px-2 py-0.5 rounded uppercase tracking-wider">
                          {post.category}
                        </div>
                      </div>
                    )}

                    <div className="p-6 space-y-3">
                      <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono">
                        <span>{post.readTime || "Research Entry"}</span>
                        <span>{post.date}</span>
                      </div>

                      <h4 className="text-sm font-extrabold text-white leading-snug group-hover:text-blue-400 transition-colors">{post.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{post.summary}</p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-1">
                    <p className="text-[10px] text-blue-400 font-mono font-bold uppercase pt-3 border-t border-slate-850/60 flex items-center gap-1 hover:underline cursor-pointer">
                      Read Report Brief
                      <Icons.ExternalLink className="w-3 h-3" />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 13: ABOUT US SECTION */}
          <section className="bg-slate-950/40 border-t border-slate-900 py-20 px-4 sm:px-6 lg:px-8" id="about-section">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold">CORPORATE IDENTITY</span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1 leading-none">About Eunimart Private Limited</h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-350 leading-relaxed">
                  Eunimart Private Limited is a next-generation AI innovation company empowering enterprises through intelligent automation, advanced analytics, and AI-driven digital transformation. Deployed over multi-currency merchant logs and secure supply maps, we bridge legacy networks with the speed of autonomous model pipelines.
                </p>

                {/* Founder statement with specific quotes */}
                <div className="p-5 bg-slate-900/30 border-l-4 border-blue-500 rounded-r-xl space-y-3">
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    &ldquo;Our vision is to bypass outdated code processes entirely. By training specialized, secure local networks on proprietary company data, enterprises secure sustainable revenue leaps and automated taxonomies.&rdquo;
                  </p>
                  
                  <div>
                    <h4 className="text-xs font-extrabold text-white">Ratan Kumar</h4>
                    <p className="text-[10px] text-slate-500 font-mono">Founder & CEO, Eunimart Private Limited</p>
                  </div>
                </div>
              </div>

              {/* Timeline chart */}
              <div className="lg:col-span-5 space-y-6">
                <h3 className="text-sm font-mono font-bold uppercase text-slate-400 tracking-wider">Historical Innovation Timeline:</h3>
                
                <div className="space-y-4 border-l-2 border-slate-800 pl-4">
                  {MILESTONES.map((tick, idx) => (
                    <div key={idx} className="relative" id={`timeline-tick-${idx}`}>
                      {/* marker dot */}
                      <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-blue-500"></span>
                      <span className="text-[10px] font-mono font-bold text-blue-400 block">{tick.year}</span>
                      <p className="text-xs text-slate-400 mt-1">{tick.event}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* SECTION 14: CONTACT SECTION & BOOKING */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="contact-section">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Column: Coordinates */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold">MUMBAI HQ COORDINATES</span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1 leading-none">Contact Our Experts</h2>
                  <p className="text-xs text-slate-400 mt-3">Ready to deploy customized secure model frameworks? File parameters below to consult our directors immediately.</p>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  <div className="flex gap-3.5 items-start">
                    <Icons.MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white uppercase font-bold">Registered Corporate Office</p>
                      <p className="text-slate-400 mt-1 whitespace-pre-line leading-relaxed font-sans">
                        Eunimart Private Limited
                        2647 Anant Vihar,
                        Aarey Piramal Cross Road,
                        Goregaon West, Mumbai,
                        Maharashtra 400104, India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-center">
                    <Icons.Mail className="w-5 h-5 text-purple-400 shrink-0" />
                    <div>
                      <p className="text-white uppercase font-bold">Inquiry Email Dispatch</p>
                      <a href="mailto:ratankumar@eunimart.in" className="text-blue-400 hover:underline leading-relaxed font-sans">
                        ratankumar@eunimart.in
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-center">
                    <Icons.PhoneCall className="w-5 h-5 text-teal-400 shrink-0" />
                    <div>
                      <p className="text-white uppercase font-bold">Active WhatsApp Support</p>
                      <a 
                        href="https://wa.me/919999999999" 
                        target="_blank" 
                        rel="referrer" 
                        className="text-emerald-400 hover:underline font-sans text-xs"
                      >
                        +91 99999 99999 (Simulated Client Chat)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Simulated Google maps visual representation container */}
                <div className="bg-[#0b1321] rounded-2xl border border-slate-800 p-4 h-52 flex flex-col justify-between relative overflow-hidden" id="gmaps-mock-frame">
                  <div className="absolute inset-0 bg-slate-950/20 z-0"></div>
                  
                  {/* Decorative map lines */}
                  <div className="relative z-10 flex-1 flex flex-col justify-center items-center">
                    <svg className="w-full h-full text-slate-800 opacity-40 overflow-visible" viewBox="0 0 100 100">
                      <path d="M 0,10 L 100,10 M 0,30 L 100,30 M 0,60 L 100,60 M 0,80 L 100,80" stroke="currentColor font-mono" strokeWidth="0.5" />
                      <path d="M 10,0 L 10,100 M 40,0 L 40,100 M 70,0 L 70,100 M 90,0 L 90,100" stroke="currentColor font-mono" strokeWidth="0.5" />
                      <circle cx="50" cy="50" r="4" fill="#EF4444" className="animate-ping" />
                      <circle cx="50" cy="50" r="2" fill="#EF4444" />
                    </svg>
                    
                    <span className="text-[9px] font-mono text-slate-400 absolute bottom-12 text-center uppercase tracking-widest font-black">
                      Eunimart Mumbai Center &middot; Goregaon West
                    </span>
                  </div>

                  <p className="text-[8px] font-mono text-slate-500 text-center relative z-10">
                    Sovereign Server Nodes #BOM-CORE-02. Verified Zone.
                  </p>
                </div>
              </div>

              {/* Right Column: Dynamic Form scheduler calendar */}
              <div className="lg:col-span-7 bg-[#090d16] border border-slate-800 p-6 rounded-3xl space-y-6 shadow-2xl">
                
                <form onSubmit={handleContactSubmit} className="space-y-4" id="main-contact-form">
                  <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Leave an inquiry case</h4>
                  
                  {contactSuccess && (
                    <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs rounded-xl flex items-center gap-1.5" id="contact-success-panel">
                      <Icons.CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Thank you, {contactName}! Your inquiry has been registered. CEO Ratan Kumar will contact you shortly.</span>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[11px] text-slate-400 uppercase font-mono">Your Full Name</label>
                      <input
                        type="text"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl p-2.5 text-xs text-white"
                        required
                        id="contact-form-name"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] text-slate-400 uppercase font-mono">Your Business Email</label>
                      <input
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="j.doe@company.in"
                        className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl p-2.5 text-xs text-white"
                        required
                        id="contact-form-email"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] text-slate-400 uppercase font-mono">How can we assist your enterprise transformation goals?</label>
                    <textarea
                      value={contactMsg}
                      onChange={(e) => setContactMsg(e.target.value)}
                      placeholder="e.g. We require secure air-gapped models for medical tracking documents..."
                      rows={3}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl p-2.5 text-xs text-white"
                      id="contact-form-msg"
                    />
                  </div>

                  {/* Calendar scheduler integration */}
                  <div className="border-t border-slate-850 pt-4 space-y-3">
                    <label className="text-[11px] text-slate-400 uppercase font-mono block">
                      Instantly Reserve Consultation Time (CEO Desk Slot Scheduler)
                    </label>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {calendarSlots.map((slot) => (
                        <button
                          key={slot.time}
                          type="button"
                          onClick={() => setSelectedCalendarSlot(slot.time)}
                          className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                            selectedCalendarSlot === slot.time
                              ? "bg-gradient-to-r from-blue-600 to-purple-600 outline-none border-blue-500 text-white text-xs font-extrabold"
                              : "bg-slate-950 border-slate-850 text-slate-400 hover:text-slate-100 hover:border-slate-700 text-xs"
                          }`}
                          id={`timeslot-${slot.time.replace(/\s+/g, "-")}`}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>

                    {selectedCalendarSlot && (
                      <p className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 p-2 rounded border border-emerald-500/20 text-center">
                        Selected Consultation Slot: <strong>{selectedCalendarSlot}</strong> tomorrow.
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-605 text-white font-extrabold rounded-xl text-xs transition-opacity cursor-pointer flex items-center justify-center gap-1.5"
                    id="btn-submit-contact-form"
                  >
                    <Icons.Calendar className="w-4 h-4" />
                    Submit Request & Confirm Reservation
                  </button>
                </form>

              </div>
            </div>
          </section>

          {/* SYSTEM FAQs FAQ_ITEMS */}
          <section className="bg-slate-950/20 border-t border-slate-900 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center">
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">Enterprise FAQ Logs</span>
                <h2 className="text-2xl font-black text-white mt-1 leading-none uppercase">Frequently asked parameters</h2>
              </div>

              <div className="space-y-4">
                {FAQ_ITEMS.map((faq, i) => (
                  <div key={i} className="p-5 bg-slate-900/10 border border-slate-850 rounded-2xl" id={`faq-${i}`}>
                    <h4 className="text-sm font-extrabold text-white flex items-center gap-2">
                      <Icons.HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                      {faq.q}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-2.5 font-sans pl-6">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </main>
      )}

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8" id="footer-section">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Icons.Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">Eunimart</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Leading enterprise cognitive technologies, securing multi-channel ecommerce translations and sovereign machine learning clusters under SOC-2 guidelines.
            </p>
            <div className="text-[10px] font-mono text-slate-550 whitespace-pre-line leading-relaxed">
              Founder & CEO: Ratan Kumar
              ratankumar@eunimart.in
              Mumbai, Maharashtra, India
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase mb-4 tracking-wider">PLATFORM</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    setSelectedPlatformTab("video-engine");
                    setView("platform");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-slate-200 text-left transition-colors cursor-pointer"
                >
                  AI Video Engine
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setSelectedPlatformTab("voice-engine");
                    setView("platform");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-slate-200 text-left transition-colors cursor-pointer"
                >
                  AI Voice Engine
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setSelectedPlatformTab("generative-ai");
                    setView("platform");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-slate-200 text-left transition-colors cursor-pointer"
                >
                  Generative AI
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setSelectedPlatformTab("video-editor");
                    setView("platform");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-slate-200 text-left transition-colors cursor-pointer"
                >
                  AI Video Editor
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setSelectedPlatformTab("language-dubbing");
                    setView("platform");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-slate-200 text-left transition-colors cursor-pointer"
                >
                  Multi-Language Dubbing
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setSelectedPlatformTab("content-generator");
                    setView("platform");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-slate-200 text-left transition-colors cursor-pointer"
                >
                  Content Generator
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase mb-4 tracking-wider">AI PRODUCTS</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#products-section" className="hover:text-slate-200">AI Commerce Platform</a></li>
              <li><a href="#products-section" className="hover:text-slate-200">AI Automation Suite</a></li>
              <li><a href="#products-section" className="hover:text-slate-200">AI Predictive Analytics</a></li>
              <li><a href="#products-section" className="hover:text-slate-200">Conversational AI Agent</a></li>
              <li><a href="#products-section" className="hover:text-slate-200">Sovereign Transformation Cloud</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase mb-4 tracking-wider">INDUSTRIES</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#industries-section" className="hover:text-slate-200">Global E-Commerce</a></li>
              <li><a href="#industries-section" className="hover:text-slate-200">Retail Outlets Sync</a></li>
              <li><a href="#industries-section" className="hover:text-slate-200">Compliant Healthcare</a></li>
              <li><a href="#industries-section" className="hover:text-slate-200">Fintech Payment Scopes</a></li>
              <li><a href="#industries-section" className="hover:text-slate-200">Modern Digital Startups</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase mb-4 tracking-wider">Legal Transparency</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    setSelectedLegalTab("legal-notice");
                    setView("legal");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-slate-200 text-left transition-colors cursor-pointer"
                >
                  Legal Notice
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setSelectedLegalTab("privacy-policy");
                    setView("legal");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-slate-200 text-left transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setSelectedLegalTab("terms-conditions");
                    setView("legal");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-slate-200 text-left transition-colors cursor-pointer"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setSelectedLegalTab("disclaimer");
                    setView("legal");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-slate-200 text-left transition-colors cursor-pointer"
                >
                  Disclaimer
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setSelectedLegalTab("cookie-policy");
                    setView("legal");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-slate-200 text-left transition-colors cursor-pointer"
                >
                  Cookie Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setSelectedLegalTab("acceptable-use");
                    setView("legal");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-slate-200 text-left transition-colors cursor-pointer"
                >
                  Acceptable Use Policy
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Newsletter Hub</h4>
            <p className="text-xs text-slate-500">Subscribe for quarterly AI whitepapers and localized Mumbai conference invites.</p>
            
            {newsletterSuccess && (
              <p className="text-xs text-emerald-400 font-mono" id="news-success-label">
                Success! Subscribed {newsletterEmail}.
              </p>
            )}

            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="name@company.in"
                className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-2 px-3 text-xs text-slate-200 focus:outline-none focus:border-blue-500"
                required
                id="newsletter-email-input"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-slate-800 hover:bg-purple-650 transition-colors text-white font-bold rounded-xl text-xs cursor-pointer"
                id="newsletter-submit-btn"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-900 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600 font-mono">
          <p>Copyright &copy; 2026 Eunimart Private Limited. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center sm:justify-end">
            <button
              onClick={() => {
                setSelectedLegalTab("legal-notice");
                setView("legal");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-slate-400 cursor-pointer transition-colors"
            >
              Legal Notice
            </button>
            <span>&middot;</span>
            <button
              onClick={() => {
                setSelectedLegalTab("privacy-policy");
                setView("legal");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-slate-400 cursor-pointer transition-colors"
            >
              Privacy Policy
            </button>
            <span>&middot;</span>
            <button
              onClick={() => {
                setSelectedLegalTab("terms-conditions");
                setView("legal");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-slate-400 cursor-pointer transition-colors"
            >
              Terms &amp; Conditions
            </button>
            <span>&middot;</span>
            <button
              onClick={() => {
                setSelectedLegalTab("disclaimer");
                setView("legal");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-slate-400 cursor-pointer transition-colors"
            >
              Disclaimer
            </button>
            <span>&middot;</span>
            <button
              onClick={() => {
                setSelectedLegalTab("cookie-policy");
                setView("legal");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-slate-400 cursor-pointer transition-colors"
            >
              Cookie Policy
            </button>
            <span>&middot;</span>
            <button
              onClick={() => {
                setSelectedLegalTab("acceptable-use");
                setView("legal");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-slate-400 cursor-pointer transition-colors"
            >
              Acceptable Use Policy
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
