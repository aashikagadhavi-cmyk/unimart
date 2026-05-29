import React from "react";
import { Sparkles, Users, Target, ShieldCheck, Landmark, Briefcase, Network, Globe } from "lucide-react";
import { MILESTONES } from "../data";

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="about-page-container">
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 text-xs font-mono font-bold text-blue-400 rounded-full border border-blue-500/20 uppercase tracking-widest">
          Corporate Deep Dive
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none uppercase">
          Eunimart Private Limited
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Pioneering sovereign spatial-temporal generative video models to power global film systems, dubbing houses, and enterprise marketing pipelines.
        </p>
      </div>

      {/* Grid of Corporate Foundations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#090d16] border border-slate-800 rounded-3xl p-6 space-y-4 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all"></div>
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/25 text-blue-400">
            <Landmark className="w-5 h-5" />
          </div>
          <h3 className="text-base font-extrabold text-white uppercase font-mono">Incorporation</h3>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Registered as <strong>Eunimart Private Limited</strong>, headquartered in Goregaon West, Mumbai, Maharashtra, India.
          </p>
        </div>

        <div className="bg-[#090d16] border border-slate-800 rounded-3xl p-6 space-y-4 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-all"></div>
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/25 text-purple-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-extrabold text-white uppercase font-mono">Sovereign Focus</h3>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Committed to building private, air-gapped machine models that secure enterprise storytelling IP under SOC-2 frameworks.
          </p>
        </div>

        <div className="bg-[#090d16] border border-slate-800 rounded-3xl p-6 space-y-4 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all"></div>
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/25 text-cyan-400">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-base font-extrabold text-white uppercase font-mono">Corporate Mission</h3>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Bypass traditional render farms completely. Scale original concepts from paragraphs directly to broadcast-quality clips.
          </p>
        </div>

        <div className="bg-[#090d16] border border-slate-800 rounded-3xl p-6 space-y-4 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 rounded-full blur-2xl group-hover:bg-pink-500/10 transition-all"></div>
          <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center border border-pink-500/25 text-pink-400">
            <Network className="w-5 h-5" />
          </div>
          <h3 className="text-base font-extrabold text-white uppercase font-mono">Hardware Nodes</h3>
          <p className="text-xs text-slate-400 leading-relaxed font-sans">
            Hosted over custom GPU micro-grids within Mumbai data shelters to ensure lightning fast, secure local executions.
          </p>
        </div>
      </div>

      {/* Leadership Spotlight & Vision Statement Quote */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-900/20 border border-slate-850 rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-72 h-72 bg-gradient-to-br from-blue-500/10 to-purple-650/5 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
          <div className="relative inline-block">
            {/* Elegant Leader Placeholder Circle */}
            <div className="w-32 h-32 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-800 p-0.5 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-2xl flex flex-col items-center justify-center p-3 text-center">
                <Users className="w-10 h-10 text-blue-400 mb-1" />
                <span className="text-xs font-mono font-bold text-white">Ratan Kumar</span>
                <span className="text-[9px] font-mono text-slate-500">Founder & CEO</span>
              </div>
            </div>
            <span className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-600 border border-blue-400/40 text-[9px] font-mono font-extrabold px-2 py-0.5 rounded text-white shadow">
              Active CEO
            </span>
          </div>

          <div>
            <h3 className="text-lg font-black text-white">Ratan Kumar</h3>
            <p className="text-xs font-mono text-slate-500">Eunimart Private Limited CEO Office</p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <span className="font-mono text-xs uppercase text-indigo-400 tracking-wider font-bold">EXECUTIVE STRATEGY DIALECT</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight uppercase">
            "We believe professional cinema is ready to bypass legacy manual layout blocks completely."
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            &ldquo;Traditional digital pipeline structures are deeply bottlenecked by manual assets rigging, expensive lighting adjustments, and lengthy, uncoordinated rendering sequences. Eunimart resolves this friction by deploying specialized generative pipelines trained with strict physical limits, delivering instant, consistent character and vector translations straight from your written paragraphs.&rdquo;
          </p>

          <div className="border-t border-slate-800 pt-4 flex gap-6 text-xs text-slate-400 font-mono">
            <div>
              <p className="text-white font-bold">Email Dispatch:</p>
              <a href="mailto:ratankumar@eunimart.in" className="text-blue-400 hover:underline">ratankumar@eunimart.in</a>
            </div>
            <div>
              <p className="text-white font-bold">Operational Sector:</p>
              <p className="text-slate-300">Goregaon West, Mumbai, IN</p>
            </div>
          </div>
        </div>
      </div>

      {/* Historical Milestones Timeline */}
      <div className="space-y-8">
        <div className="text-center lg:text-left">
          <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">Historical Innovation Ledger</span>
          <h2 className="text-2xl font-black text-white uppercase mt-1">Timeline of Accomplishments</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative before:absolute before:inset-y-0 before:left-4 md:before:left-1/2 before:w-[1px] before:bg-slate-800/80">
          {MILESTONES.map((ms, idx) => (
            <div key={idx} className="bg-slate-905 border border-slate-850 p-6 rounded-3xl space-y-2 relative" id={`milestone-${idx}`}>
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-400/25 flex items-center justify-center font-mono text-xs font-black text-blue-400">
                {idx + 1}
              </div>
              <span className="text-sm font-mono font-bold text-cyan-400 block pt-2">{ms.year}</span>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">{ms.event}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values / Competency Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <div className="bg-[#080c14] border border-slate-800/80 p-6 rounded-3xl space-y-3">
          <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-bold uppercase">
            <Sparkles className="w-4 h-4" />
            01. Cinematic Geometrics
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Our models operate with true physical limits, tracking illumination bounces and anatomical movements rather than simple statistical pixel arrays.
          </p>
        </div>

        <div className="bg-[#080c14] border border-slate-800/80 p-6 rounded-3xl space-y-3">
          <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase">
            <ShieldCheck className="w-4 h-4" />
            02. Secure Local Encapsulation
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Eunimart Private Limited values IP confidentiality. Our code frameworks can deploy entirely local in secured docker boxes for studio giants.
          </p>
        </div>

        <div className="bg-[#080c14] border border-slate-800/80 p-6 rounded-3xl space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase">
            <Globe className="w-4 h-4" />
            03. Multi-Lingual Phonics
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            We specialize in deep micro-syllabic audio alignments, bridging local dialects and global languages seamlessly in high fidelity.
          </p>
        </div>
      </div>
    </div>
  );
};
