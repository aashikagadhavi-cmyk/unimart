import React, { useState } from "react";
import { Sparkles, Sliders, Database, Cpu, ShieldAlert, CheckCircle, LineChart, Table } from "lucide-react";

export const TechnologyPage: React.FC = () => {
  // Neural weight parameter sliders state
  const [cfgScale, setCfgScale] = useState<number>(7.5);
  const [denoiseSteps, setDenoiseSteps] = useState<number>(30);
  const [temporalCoh, setTemporalCoh] = useState<number>(85);

  // Computed metrics based on parameters
  const calculatedVram = (1.5 + (denoiseSteps * 0.12) + (temporalCoh * 0.05)).toFixed(1);
  const calculatedLatency = (1.2 + (denoiseSteps * 0.15) + (temporalCoh * 0.03)).toFixed(2);
  const fidelityIndex = (70 + (cfgScale * 1.5) + (temporalCoh * 0.15) - (denoiseSteps * 0.1)).toFixed(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="technology-page-container">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 text-xs font-mono font-bold text-blue-400 rounded-full border border-blue-500/20 uppercase tracking-widest">
          VidGen Core Infrastructure
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none uppercase">
          Proprietary Neural Spec
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed font-sans">
          Exploring spatial consistency mathematical weights, phonetic voice vector fields, and SOC-2 air-gapped data shields.
        </p>
      </div>

      {/* Model Spec Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Specifications Cards list */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-xl font-bold font-mono text-white uppercase tracking-wider flex items-center gap-2">
            <Cpu className="w-5 h-5 text-indigo-400" />
            VidGen 4.5 Architectural Benchmarks
          </h2>
          
          <div className="space-y-4">
            <div className="bg-[#090d16] border border-slate-800 p-5 rounded-2xl flex gap-4 items-start">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/15 flex items-center justify-center font-mono text-xs font-bold text-indigo-400 shrink-0">
                1
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white uppercase">Temporal Consistency Keyframes</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Unlike baseline diffusion engines that analyze frame-by-frame independently, Eunimart's mathematical temporal weights monitor adjacent motion vectors over 8-second segments, completely preventing character features flickering or clothing pattern distortions.
                </p>
              </div>
            </div>

            <div className="bg-[#090d16] border border-slate-800 p-5 rounded-2xl flex gap-4 items-start">
              <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center font-mono text-xs font-bold text-blue-400 shrink-0">
                2
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white uppercase">Sovereign Phonics Trajectories</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Our Voice synthesizers map scripts onto expressive physical vector grids rather than simple phonetic maps. We sync dialects and pauses perfectly with adjacent lip-sync contractions, maintaining flawless actor consistency natively.
                </p>
              </div>
            </div>

            <div className="bg-[#090d16] border border-slate-800 p-5 rounded-2xl flex gap-4 items-start">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center font-mono text-xs font-bold text-cyan-400 shrink-0">
                3
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white uppercase">Air-Gapped Cloud Clusters (SOC-2)</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  We configure models inside completely secure, sovereign clouds where training logs, prompts, and videos never leave corporate boundaries. This guarantees complete intellectual safety for video outline storyboards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specification Parameters Simulator */}
        <div className="lg:col-span-5 bg-slate-905 border border-slate-850 p-6 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="border-b border-slate-850 pb-3">
            <h3 className="text-sm font-mono font-extrabold text-blue-400 uppercase tracking-widest">
              Model Weight Parameters Analyzer
            </h3>
            <p className="text-[10px] text-slate-500 font-mono mt-1">PROGRAMMATIC ENGINE COST PREDICTION INTERFACE</p>
          </div>

          <div className="space-y-4">
            {/* Range Slider 1 */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400 uppercase">CFG Guidance Scale</span>
                <span className="text-white font-bold">{cfgScale}x</span>
              </div>
              <input
                type="range"
                min="3.0"
                max="15.0"
                step="0.5"
                value={cfgScale}
                onChange={(e) => setCfgScale(parseFloat(e.target.value))}
                className="w-full accent-blue-500 h-1 bg-slate-950 rounded-lg cursor-pointer"
                id="tech-cfg-slider"
              />
            </div>

            {/* Range Slider 2 */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400 uppercase">Denoising Steps</span>
                <span className="text-white font-bold">{denoiseSteps} Steps</span>
              </div>
              <input
                type="range"
                min="15"
                max="80"
                step="5"
                value={denoiseSteps}
                onChange={(e) => setDenoiseSteps(parseInt(e.target.value))}
                className="w-full accent-purple-500 h-1 bg-slate-950 rounded-lg cursor-pointer"
                id="tech-steps-slider"
              />
            </div>

            {/* Range Slider 3 */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400 uppercase">Temporal Coherence lock</span>
                <span className="text-white font-bold">{temporalCoh}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="98"
                step="2"
                value={temporalCoh}
                onChange={(e) => setTemporalCoh(parseInt(e.target.value))}
                className="w-full accent-cyan-500 h-1 bg-slate-950 rounded-lg cursor-pointer"
                id="tech-temporal-slider"
              />
            </div>
          </div>

          {/* Computed Results Matrix */}
          <div className="border-t border-slate-850 pt-5 space-y-3 font-mono">
            <h4 className="text-[10px] text-slate-500 uppercase">Calculated VRAM & Model Latency outputs:</h4>
            
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-slate-950 p-2 text-[10px] rounded-xl border border-slate-900">
                <p className="text-slate-550 italic">Est. VRAM</p>
                <p className="text-white font-black mt-1 text-sm text-indigo-400">{calculatedVram} GB</p>
              </div>

              <div className="bg-slate-950 p-2 text-[10px] rounded-xl border border-slate-900">
                <p className="text-slate-550 italic">Frame Latency</p>
                <p className="text-white font-black mt-1 text-sm text-cyan-400">{calculatedLatency}s</p>
              </div>

              <div className="bg-slate-950 p-2 text-[10px] rounded-xl border border-slate-900">
                <p className="text-slate-550 italic">Fidelity Index</p>
                <p className="text-white font-black mt-1 text-sm text-emerald-400">{fidelityIndex}%</p>
              </div>
            </div>

            <p className="text-[9px] text-slate-500 leading-normal text-center bg-slate-950/40 p-2 rounded-xl border border-slate-900">
              *Tuning CFM ratios below 40% will cause degradation of multi-character seed coordination.
            </p>
          </div>
        </div>
      </div>

      {/* Compliance / Security Badges Footer Section */}
      <div className="bg-gradient-to-r from-blue-950/10 via-slate-900/40 to-transparent p-6 sm:p-8 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center gap-6 justify-between select-none">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 p-1 px-2.5 rounded border border-emerald-500/20 uppercase tracking-widest">
            Sovereign Certified Private Cloud
          </span>
          <h3 className="text-lg font-black text-white uppercase font-sans">SOC-2 Type II Certified Ecosystem</h3>
          <p className="text-xs text-slate-400 max-w-xl font-sans">
            Our codebase contains active compliance scripts validating user session records, multi-merchant token databases, and isolated cloud runs to prevent leakage.
          </p>
        </div>

        <div className="flex gap-4 font-mono text-[10px] text-slate-350 shrink-0">
          <div className="flex items-center gap-1 bg-slate-950 px-3 py-2 rounded-lg border border-slate-800">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            ISO 27001
          </div>
          <div className="flex items-center gap-1 bg-slate-950 px-3 py-2 rounded-lg border border-slate-800">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            GDPR Compliant
          </div>
        </div>
      </div>
    </div>
  );
};
