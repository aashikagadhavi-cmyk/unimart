import React, { useState } from "react";
import { Sparkles, Check, DollarSign, ArrowRight, HelpCircle, ArrowUpRight } from "lucide-react";

export const PricingPage: React.FC = () => {
  // Billing cycle toggle
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  
  // ROI Cost Estimator inputs
  const [productionHours, setProductionHours] = useState<number>(10);

  // Computed values
  const discountMultiplier = billingCycle === "annual" ? 0.8 : 1.0;

  const plans = [
    {
      name: "Creator Studio",
      monthlyPrice: 249,
      badge: "Indie standard",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=500&h=250&q=80",
      description: "Perfect for single storytellers scaling outline storyboard concepts.",
      features: [
        "Up to 500 compilation render minutes",
        "Consistent multi-character seeds",
        "1080p high definition output",
        "Standard gRPC queue priority",
        "Eunimart Node SDK access"
      ],
      popular: false
    },
    {
      name: "Studio Peak",
      monthlyPrice: 1150,
      badge: "Most popular",
      imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=500&h=250&q=80",
      description: "Engineered for agency marketing teams and independent dubbing houses.",
      features: [
        "Unlimited rendering minutes",
        "True 4K UHD upscaling controls",
        "5 global vocal clone profiles",
        "Priority dedicated thread pipelines",
        "Automatic multilingual subtitle burn",
        "Direct webhook endpoints integration"
      ],
      popular: true
    },
    {
      name: "Sovereign Enterprise",
      monthlyPrice: "Custom",
      badge: "Air-gapped nodes",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=500&h=250&q=80",
      description: "Dedicated isolated local GPU clusters serving global media studios.",
      features: [
        "Closed air-gapped server configurations",
        "Custom spatial geometrical face locks",
        "Zero data retention guarantees",
        "Full programmatic compliance scripts",
        "Dedicated corporate director consultations",
        "Full SOC-2 compliance audits support"
      ],
      popular: false
    }
  ];

  // SLA ROI savings computations: Traditional video costs are roughly $1500/hr, Eunimart is about $120/hr
  const legacyCostsTotal = productionHours * 1350;
  const eunimartCostsTotal = Math.round(productionHours * 110 * discountMultiplier);
  const netSavingsTotal = legacyCostsTotal - eunimartCostsTotal;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="pricing-page-container">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-blue-500/10 to-indigo-500/15 text-xs font-mono font-bold text-blue-400 rounded-full border border-blue-500/20 uppercase tracking-widest">
          Sovereign Tier Access
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none uppercase">
          Flexible Pricing Models
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed font-sans">
          Select standard cloud tiers or request custom isolated physical local nodes within Eunimart Private Limited data nodes.
        </p>

        {/* Monthly / Annual Toggle Selector */}
        <div className="pt-4 flex justify-center">
          <div className="bg-slate-950 p-1 rounded-2xl border border-slate-905 flex items-center justify-center gap-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-br from-slate-900 to-[#101726] text-white border border-slate-800 shadow"
                  : "text-slate-550 hover:text-slate-300"
              }`}
              id="pricing-cycle-monthly"
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                billingCycle === "annual"
                  ? "bg-gradient-to-br from-slate-900 to-[#101726] text-white border border-slate-800 shadow"
                  : "text-slate-550 hover:text-slate-300"
              }`}
              id="pricing-cycle-annual"
            >
              Annual Billing
              <span className="text-[9px] bg-emerald-500/10 text-emerald-450 border border-emerald-500/20 px-1 py-0.5 rounded font-black">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Sovereign Infrastructure Quick Feature Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#090d16] border border-slate-850 rounded-3xl p-6 sm:p-8 relative overflow-hidden" id="pricing-infrastructure-banner">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest">Enterprise Bare-Metal Storage</span>
          </div>
          <h3 className="text-xl font-bold font-display text-white uppercase tracking-tight">Mumbai Sovereign GPU Micro-Grid Array</h3>
          <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-2xl">
            We operate fully secure physical server arrays located directly inside Goregaon West, Mumbai. Every video synthesis computation executes on high-performance H100 cores, guaranteeing low latency, high uptime, and zero shared public cloud vectors.
          </p>
          <div className="flex flex-wrap gap-4 text-[10px] font-mono text-slate-500">
            <span>● 54 Keyframe temporal consistency loops</span>
            <span><span>● AES-256 air-gapped session encryption</span></span>
            <span>● Multi-node priority failover</span>
          </div>
        </div>
        <div className="lg:col-span-4 h-40 rounded-2xl overflow-hidden border border-slate-850 relative group">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&h=300&q=80" 
            alt="Physical Mumbai GPU hardware servers" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-3">
            <span className="text-[8px] font-mono text-emerald-400 font-extrabold uppercase">BOM-1 Datacenter Cage</span>
          </div>
        </div>
      </div>

      {/* Plans comparison cards display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((p, idx) => (
          <div
            key={idx}
            className={`bg-[#090d16] border rounded-3xl p-6 relative flex flex-col justify-between overflow-hidden shadow-2xl transition-transform hover:scale-[1.01] ${
              p.popular
                ? "border-blue-500/50 ring-1 ring-blue-500/20"
                : "border-slate-850"
            }`}
            id={`pricing-plan-${p.name.replace(/\s+/g, "-")}`}
          >
            {/* Ambient gradients */}
            {p.popular && (
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
            )}

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${
                  p.popular
                    ? "bg-blue-500/15 border-blue-400/20 text-blue-400"
                    : "bg-slate-950 border-slate-900 text-slate-500"
                }`}>
                  {p.badge}
                </span>
                {p.popular && (
                  <span className="text-[9px] font-mono text-purple-400 uppercase font-black tracking-widest animate-pulse">Enterprise Priority choice</span>
                )}
              </div>

              <div>
                {p.imageUrl && (
                  <div className="h-32 w-full rounded-2xl overflow-hidden border border-slate-850 bg-slate-950 relative mb-4 group">
                    <img 
                      src={p.imageUrl} 
                      alt={p.name} 
                      className="w-full h-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-2.5">
                      <span className="text-[8px] font-mono tracking-widest text-[#22d3ee] uppercase font-bold">
                        Model Output Showcase
                      </span>
                    </div>
                  </div>
                )}
                <h3 className="text-xl font-bold text-white uppercase font-mono">{p.name}</h3>
                <p className="text-xs text-slate-450 leading-relaxed mt-2 font-sans min-h-[40px]">{p.description}</p>
              </div>

              {/* Price display zone */}
              <div className="flex items-baseline gap-1 relative z-10 border-b border-slate-855 pb-6">
                <span className="text-3xl font-extrabold text-white font-mono leading-none">
                  {typeof p.monthlyPrice === "number"
                    ? `$${Math.round(p.monthlyPrice * discountMultiplier)}`
                    : p.monthlyPrice}
                </span>
                {typeof p.monthlyPrice === "number" && (
                  <span className="text-xs text-slate-500 font-mono">/ month</span>
                )}
              </div>

              {/* Features list */}
              <ul className="space-y-3 font-sans text-xs">
                {p.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex gap-2.5 items-start" id={`feat-bullet-${idx}-${fIdx}`}>
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${p.popular ? "text-blue-400" : "text-emerald-400"}`} />
                    <span className="text-slate-300 leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <button
                type="button"
                className={`w-full py-3 text-xs font-extrabold rounded-xl transition-opacity flex items-center justify-center gap-1.5 cursor-pointer ${
                  p.popular
                    ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-650 text-white shadow-lg"
                    : "bg-slate-950 hover:bg-slate-900 border border-slate-850 text-slate-200"
                }`}
                id={`pricing-cta-${p.name.replace(/\s+/g, "-")}`}
              >
                Access Tier Seat
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ROI Operating Savings Calculator Integration */}
      <div className="bg-[#0b101c] border border-slate-800 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none"></div>

        <div className="lg:col-span-6 space-y-4">
          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 p-1 px-2.5 rounded border border-emerald-500/25 uppercase tracking-widest block w-max">
            ROI return calculator
          </span>
          <h3 className="text-2xl font-black text-white leading-tight uppercase font-sans">
            Calculate your operational savings
          </h3>
          <p className="text-xs sm:text-xs text-slate-400 leading-relaxed font-sans max-w-lg">
            Traditional premium cinematic production cycles involve booking film equipment, booking voiceover actor hours, editing times, and manual translations. See how automating through VidGen 4.5 weights cuts budgets.
          </p>

          <div className="space-y-2 pt-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-300 uppercase">Estimated Video Production hours Needed / Month</span>
              <span className="text-white font-extrabold text-sm">{productionHours} Hours</span>
            </div>
            <input
              type="range"
              min="2"
              max="150"
              step="2"
              value={productionHours}
              onChange={(e) => setProductionHours(parseInt(e.target.value))}
              className="w-full accent-emerald-500 h-1 bg-slate-950 rounded-lg cursor-pointer"
              id="roi-hours-slider"
            />
          </div>
        </div>

        {/* Operating returns comparison */}
        <div className="lg:col-span-6 bg-slate-950/60 p-4 sm:p-6 rounded-2xl border border-slate-900 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center font-mono relative">
          <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-900">
            <p className="text-[8px] text-slate-500 uppercase leading-snug">Traditional VFX cost</p>
            <p className="text-sm font-bold text-rose-400 mt-2">${legacyCostsTotal.toLocaleString()}</p>
          </div>

          <div className="bg-slate-950/80 p-3 rounded-xl border border-indigo-900/15">
            <p className="text-[8px] text-blue-400 uppercase leading-snug">Eunimart VidGen cost</p>
            <p className="text-sm font-bold text-cyan-400 mt-2">${eunimartCostsTotal.toLocaleString()}</p>
          </div>

          <div className="bg-indigo-950/30 p-3 rounded-xl border border-emerald-500/20 col-span-full sm:col-span-1">
            <p className="text-[8px] text-emerald-400 uppercase leading-snug">Net monthly Savings</p>
            <p className="text-sm font-black text-emerald-450 mt-2">+${netSavingsTotal.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
