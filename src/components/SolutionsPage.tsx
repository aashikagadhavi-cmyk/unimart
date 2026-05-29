import React, { useState } from "react";
import * as Icons from "lucide-react";
import { INDUSTRIES, CASE_STUDIES } from "../data";

export const SolutionsPage: React.FC = () => {
  const [activeIndustryId, setActiveIndustryId] = useState<string>("film-studios");

  const activeIndustry = INDUSTRIES.find((ind) => ind.id === activeIndustryId) || INDUSTRIES[0];
  const activeCaseStudies = CASE_STUDIES.filter((cs) => cs.industry === activeIndustry.name);

  const getLucideIcon = (iconName: string, className: string = "w-5 h-5") => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.Sparkles className={className} />;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="solutions-page-container">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/15 text-xs font-mono font-bold text-blue-400 rounded-full border border-blue-500/20 uppercase tracking-widest">
          Industry Deployments
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none uppercase">
          Client Solutions Hub
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed font-sans">
          How Eunimart Private Limited configures specialized, secure model pipelines to unlock extreme efficiency across enterprise domains.
        </p>
      </div>

      {/* Selector Navigation Strip */}
      <div className="border-b border-slate-900 pb-4">
        <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none" id="solutions-industry-picker">
          {INDUSTRIES.map((ind) => {
            const isSel = ind.id === activeIndustryId;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustryId(ind.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all shrink-0 cursor-pointer ${
                  isSel
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow shadow-purple-500/20"
                    : "bg-slate-900/40 border border-slate-800 text-slate-450 hover:text-slate-200 hover:border-slate-750"
                }`}
                id={`sol-tab-${ind.id}`}
              >
                {getLucideIcon(ind.icon, "w-4 h-4")}
                {ind.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Solution Details panel */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/5">
                {getLucideIcon(activeIndustry.icon, "w-6 h-6")}
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Target Verticals Integration</span>
                <h3 className="text-2xl font-extrabold text-white uppercase">{activeIndustry.name}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-350 leading-relaxed font-sans pt-2">
              Our bespoke models ingest specific company training assets inside closed local networks, bypassing public latency queues and data harvesting, delivering secure translations and generative animations optimized specifically for your team's deliverables.
            </p>
          </div>

          {/* ROI Metric Card Highlight */}
          <div className="bg-[#090d16] border border-slate-800/80 p-6 rounded-3xl grid grid-cols-2 gap-4 items-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-[60px] pointer-events-none"></div>
            
            <div className="space-y-1">
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">Performance Increase Lift</span>
              <p className="text-4xl md:text-5xl font-black font-mono text-teal-400 tracking-tight leading-none group-hover:scale-105 transition-transform duration-300">
                {activeIndustry.statValue}
              </p>
            </div>

            <div className="space-y-1 pl-4 border-l border-slate-850">
              <p className="text-xs font-mono font-extrabold text-white text-ellipsis overflow-hidden uppercase leading-snug">
                {activeIndustry.statLabel}
              </p>
              <p className="text-[10px] text-slate-400 font-sans">Verified on global client registries.</p>
            </div>
          </div>

          {/* Deep dive details */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-extrabold text-slate-400 uppercase tracking-wider">Enterprise Workflow Blueprint</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900/10 border border-slate-850 p-4 rounded-2xl space-y-2">
                <h5 className="text-xs font-bold text-white flex items-center gap-1.5 font-mono">
                  <Icons.Flame className="w-3.5 h-3.5 text-orange-400" />
                  Old Legacy Bottlenecks
                </h5>
                <p className="text-[11px] text-slate-400 leading-normal font-sans">
                  Manual storyboard delays, high external actor booking invoices, lack of vocal dial consistency, and complex licensing liabilities.
                </p>
              </div>

              <div className="bg-slate-900/10 border border-slate-850 p-4 rounded-2xl space-y-2">
                <h5 className="text-xs font-bold text-white flex items-center gap-1.5 font-mono">
                  <Icons.Zap className="w-3.5 h-3.5 text-cyan-400" />
                  Empowered Eunimart State
                </h5>
                <p className="text-[11px] text-slate-400 leading-normal font-sans">
                  Programmable text-to-video generation streams with stable character casting database seeds, in SOC-2 air-gapped secure loops.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Case Studies Highlight */}
        <div className="lg:col-span-5 space-y-6">
          {/* Active Industry Visual Banner */}
          <div className="border border-slate-800 rounded-3xl overflow-hidden relative h-48 bg-slate-900 shadow-xl group">
            <img 
              src={
                activeIndustryId === "film-studios"
                  ? "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
                  : activeIndustryId === "marketing"
                  ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  : activeIndustryId === "e-learning"
                  ? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  : activeIndustryId === "localization"
                  ? "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80"
                  : "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80"
              }
              alt={activeIndustry.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-4">
              <span className="text-[10px] font-mono text-cyan-400 bg-slate-950/90 border border-slate-800 px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                Live Deployment Spotlight
              </span>
            </div>
          </div>

          <div className="border border-slate-850 bg-slate-905 p-6 rounded-3xl space-y-6">
            <h4 className="text-xs font-mono font-extrabold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
              <Icons.Award className="w-4 h-4" />
              Verified Case Logs
            </h4>

            {activeCaseStudies.length > 0 ? (
              activeCaseStudies.map((study) => (
                <div key={study.id} className="space-y-4 border-b border-slate-850 pb-6 last:border-0 last:pb-0" id={`case-study-${study.id}`}>
                  <h5 className="text-sm font-semibold text-white leading-snug">{study.title}</h5>
                  
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-900">
                      <p className="text-[8px] font-mono text-slate-500 uppercase">Legacy Timeframe</p>
                      <p className="text-sm font-bold text-rose-450 font-mono mt-0.5">{study.beforeVal}</p>
                    </div>
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-blue-900/20">
                      <p className="text-[8px] font-mono text-blue-400 uppercase">Eunimart Speed</p>
                      <p className="text-sm font-bold text-emerald-450 font-mono mt-0.5">{study.afterVal}</p>
                    </div>
                  </div>

                  <p className="text-xs text-indigo-300 font-mono font-semibold bg-indigo-500/5 p-2 rounded text-center border border-indigo-500/10">
                    ROI Metrics: {study.roiText}
                  </p>

                  <div className="p-3 bg-slate-900/30 border-l-2 border-indigo-500 rounded-r-xl">
                    <p className="text-[11px] text-slate-350 italic leading-relaxed">&ldquo;{study.quote}&rdquo;</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xs text-slate-500 italic">No case studies published on registry yet.</p>
            )}
          </div>
        </div>
      </div>

      {/* Production Solutions Portfolios Showcase (4 static high-fidelity images) */}
      <div className="border border-slate-850 bg-[#090d16] rounded-3xl p-6 sm:p-8 space-y-6" id="solutions-portfolios-gallery">
        <div>
          <span className="text-[10px] font-mono text-indigo-400 tracking-wider uppercase font-bold">
            Eunimart Global Portfolios Showcase
          </span>
          <h3 className="text-xl font-bold font-display text-white uppercase tracking-tight mt-1">
            Active Enterprise Deployments Registry
          </h3>
          <p className="text-xs text-slate-405 leading-relaxed max-w-2xl mt-1">
            Explore photographic records from physical partner installations utilizing closed Eunimart VidGen models.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-slate-800 rounded-2xl bg-slate-950 overflow-hidden relative group h-48">
            <img 
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&h=300&q=80" 
              alt="Film Studios Deployment" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
              <span className="text-[8px] font-mono text-blue-400 font-black uppercase">CASE: FILM-BOM-002</span>
              <strong className="text-xs text-white uppercase font-display select-none">Epic Narrative Synthesis</strong>
              <p className="text-[10px] text-slate-400 font-sans leading-tight mt-1">Accelerated sequence renderings inside elite digital studio rigs.</p>
            </div>
          </div>

          <div className="border border-slate-800 rounded-2xl bg-slate-950 overflow-hidden relative group h-48">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=300&q=80" 
              alt="Marketing Brands Deployment" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
              <span className="text-[8px] font-mono text-purple-400 font-black uppercase">CASE: MKTG-BNR-502</span>
              <strong className="text-xs text-white uppercase font-display select-none">Localized Multi-Channel</strong>
              <p className="text-[10px] text-slate-400 font-sans leading-tight mt-1">Drafting variant dynamic product video ads on-demand.</p>
            </div>
          </div>

          <div className="border border-slate-800 rounded-2xl bg-slate-950 overflow-hidden relative group h-48">
            <img 
              src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=400&h=300&q=80" 
              alt="E-Learning Deployment" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
              <span className="text-[8px] font-mono text-cyan-400 font-black uppercase">CASE: DUBB-VOC-305</span>
              <strong className="text-xs text-white uppercase font-display select-none">Interactive Dialect Mapping</strong>
              <p className="text-[10px] text-slate-400 font-sans leading-tight mt-1">Phonetic sound translations to fit native regional accents.</p>
            </div>
          </div>

          <div className="border border-slate-800 rounded-2xl bg-slate-950 overflow-hidden relative group h-48">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&h=300&q=80" 
              alt="Global Localization Deployment" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-4">
              <span className="text-[8px] font-mono text-[#22d3ee] font-black uppercase">CASE: EDU-COUR-104</span>
              <strong className="text-xs text-white uppercase font-display select-none">Autonomous Presenter</strong>
              <p className="text-[10px] text-slate-400 font-sans leading-tight mt-1">Simulating visual avatars reciting core curriculum topics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
