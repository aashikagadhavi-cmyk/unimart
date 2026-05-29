import React, { useState } from "react";
import * as Icons from "lucide-react";
import { Product } from "../types";
import { PRODUCTS } from "../data";

interface ProductViewerProps {
  onSelectDemo: (productName: string) => void;
}

export const AIProductViewer: React.FC<ProductViewerProps> = ({ onSelectDemo }) => {
  const [selectedProductId, setSelectedProductId] = useState<string>("ai-video-diffusion");
  const [copiedIndex, setCopiedIndex] = useState<boolean>(false);
  const [apiMockOutput, setApiMockOutput] = useState<string>("");
  const [testingApi, setTestingApi] = useState<boolean>(false);

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];

  // Helper to render Lucide icons dynamically
  const renderIcon = (iconName: string, className: string = "w-5 h-5") => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.Bot className={className} />;
  };

  // Mock API compiler execution
  const executeMockApi = () => {
    if (testingApi) return;
    setTestingApi(true);
    setApiMockOutput("Initializing Eunimart SDK Handshake...\nEstablishing secure air-gapped container connection...");
    
    setTimeout(() => {
      setApiMockOutput((prev) => prev + "\nTLS Secure Connection active (Air Gapped #BOM-CORE)...\nProcessing predictive model query matching parameters...");
    }, 800);

    setTimeout(() => {
      if (selectedProduct.id === "ai-commerce") {
        setApiMockOutput((prev) => prev + `\n\n[SUCCESS 200 OK]\n{\n  "sku": "GLOBAL-TECH-X1",\n  "market": "EU-WEST-1",\n  "competitorPriceAvgEUR": 42.50,\n  "recommendedOptimalPriceEUR": 39.99,\n  "elasticityLowerBound": 32.00,\n  "marginYieldPercent": 24.5,\n  "latencyLimitMs": 14\n}`);
      } else if (selectedProduct.id === "ai-automation") {
        setApiMockOutput((prev) => prev + `\n\n[SUCCESS 200 OK]\n{\n  "agentId": "em_special_audit_01",\n  "state": "workflow_finished",\n  "ledgerUrlParsed": "valid",\n  "recordsAudited": 1480,\n  "exceptionsFlagged": 0,\n  "durationSec": 1.22\n}`);
      } else {
        setApiMockOutput((prev) => prev + `\n\n[SUCCESS 200 OK]\n{\n  "status": "active",\n  "timestamp": "19:27:06Z",\n  "queriesProcessed": 1,\n  "summaryText": "The predictive calculations show sustainable operational margins under standard limits."\n}`);
      }
      setTestingApi(false);
    }, 1800);
  };

  const copyEndpointCode = (text: string) => {
    setCopiedIndex(true);
    navigator.clipboard.writeText(text).catch(() => {});
    setTimeout(() => setCopiedIndex(false), 1500);
  };

  return (
    <div className="w-full bg-slate-900/20 rounded-3xl border border-slate-200/10 dark:border-slate-800/80 p-4 sm:p-6 lg:p-8" id="products-interactive-panel">
      
      {/* Product navigation strip */}
      <div className="mb-8 border-b border-slate-250 dark:border-slate-800/80 pb-6">
        <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3 text-center lg:text-left">
          EXPLORE ENTERPRISE GENERATIVE AI SOLUTIONS PANEL
        </label>
        
        {/* Horizontal scroll on mobile, grid layout on lg */}
        <div className="flex xl:grid xl:grid-cols-5 overflow-x-auto gap-2 py-2 scrollbar-none" id="product-tabs-strip">
          {PRODUCTS.map((prod) => (
            <button
              key={prod.id}
              onClick={() => {
                setSelectedProductId(prod.id);
                setApiMockOutput("");
              }}
              id={`tab-prod-${prod.id}`}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                selectedProductId === prod.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow shadow-purple-500/10"
                  : "bg-slate-900/40 border border-slate-800/60 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              {renderIcon(prod.icon, "w-4 h-4 shrink-0")}
              <span className="text-ellipsis overflow-hidden whitespace-nowrap">{prod.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left segment - Descriptions and Details */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-[10px] font-mono tracking-wider uppercase bg-blue-500/10 text-blue-400 font-bold px-2 py-0.5 rounded border border-blue-400/20">
                {selectedProduct.category}
              </span>
              <span className="text-[10px] font-mono tracking-wider uppercase bg-purple-500/15 text-purple-300 font-bold px-2 py-0.5 rounded">
                {selectedProduct.badge}
              </span>
            </div>
            
            <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight leading-tight">
              {selectedProduct.name}
            </h3>
            
            <p className="text-xs text-slate-400 leading-relaxed mt-3">
              {selectedProduct.longDescription}
            </p>
          </div>

          {/* Key Product Features list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950/40 p-4 border border-slate-850 rounded-2xl">
            <div className="col-span-full border-b border-slate-850 pb-2 mb-1">
              <h4 className="text-xs font-mono font-bold uppercase text-slate-305 flex items-center gap-1.5">
                <Icons.Layers className="w-3.5 h-3.5 text-blue-400" />
                Technical Capabilities
              </h4>
            </div>
            {selectedProduct.features.map((feat, i) => (
              <div key={i} className="flex gap-2 items-start" id={`prod-feat-${i}`}>
                <Icons.Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-[11px] text-slate-300 leading-snug">{feat}</span>
              </div>
            ))}
          </div>

          {/* Business Benefits & ROI metrics */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">Enterprise Performance Lift</h4>
            <div className="space-y-2">
              {selectedProduct.benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-2 items-start bg-[#0a101b] p-3 border border-slate-850/80 rounded-xl" id={`prod-benefit-${idx}`}>
                  <Icons.Sparkles className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Use Case Scenarios */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2.5">Production Deployments</h4>
            <div className="space-y-2">
              {selectedProduct.useCases.map((uc, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-400" id={`prod-usecase-${i}`}>
                  <Icons.ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>{uc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cost metrics and Actions */}
          <div className="border-t border-slate-850 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-[9px] font-mono text-slate-500 uppercase">Licensing Starts At</p>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="text-xl font-bold font-mono text-white">
                  {selectedProduct.pricingPlans[0]?.rate || "Contact Sales"}
                </span>
                <span className="text-[10px] text-slate-500 font-mono">/ tier</span>
              </div>
            </div>

            <button
              onClick={() => onSelectDemo(selectedProduct.name)}
              className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-550 active:scale-95 text-white text-xs font-extrabold rounded-xl transition-all cursor-pointer shadow-md shadow-blue-500/10 flex items-center justify-center gap-1.5"
              id={`btn-demo-prd-${selectedProduct.id}`}
            >
              <Icons.CalendarDays className="w-4 h-4" />
              Schedule Demonstration & Consultation
            </button>
          </div>
        </div>

        {/* Right segment - Live Interactive SDK Sandboxes */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Interactive Code Console */}
          <div className="bg-[#090d16] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between min-h-[380px]">
            {/* Console topbar */}
            <div className="bg-slate-950/80 border-b border-slate-850 px-4 h-11 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="text-[10px] text-slate-400 font-mono ml-2">App credentials Edge Console</span>
              </div>
              <button
                onClick={() => copyEndpointCode(selectedProduct.apiSample)}
                className="text-[10px] font-mono text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-900 border border-slate-800 transition-colors"
                title="Copy Code to Clipboard"
                id="btn-copy-product-api"
              >
                {copiedIndex ? "Copied" : "Copy"}
              </button>
            </div>

            {/* JetBrains Mono Syntax Terminal */}
            <div className="p-4 flex-1 h-44 overflow-y-auto">
              <pre className="font-mono text-[10px] leading-relaxed text-slate-300 whitespace-pre-wrap select-all scrollbar-thin">
                {selectedProduct.apiSample}
              </pre>
            </div>

            {/* Mini API compiler verification triggers */}
            <div className="border-t border-slate-850/80 bg-slate-950/45 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono text-slate-500 uppercase">Interactive Edge Execution Simulator</span>
                <button
                  onClick={executeMockApi}
                  disabled={testingApi}
                  id="btn-test-product-api"
                  className={`px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-mono text-[10px] font-bold rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                    testingApi ? "opacity-45 cursor-wait" : "hover:opacity-95"
                  }`}
                >
                  <Icons.Play className="w-2.5 h-2.5" />
                  {testingApi ? "Compiling..." : "Run Test Sync API"}
                </button>
              </div>

              {/* API Output monitor */}
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-850 min-h-[100px] font-mono text-[9px] text-slate-350">
                {apiMockOutput ? (
                  <div className="whitespace-pre-line animate-fadeIn">
                    {apiMockOutput}
                  </div>
                ) : (
                  <span className="text-slate-500 italic block text-center pt-6">
                    Click 'Run Test Sync API' to simulate data calls.
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Interactive ROI Calculator for target product */}
          <div className="bg-slate-900/60 p-4 border border-slate-800 rounded-2xl space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-300 flex items-center gap-1">
              <Icons.DollarSign className="w-3.5 h-3.5 text-emerald-400" />
              SLA Return estimate
            </h4>
            <p className="text-[10px] text-slate-400 leading-relaxed">
              Based on historical retail clients deploying typical <span className="text-slate-200">{selectedProduct.category}</span> resources over 5-month metrics.
            </p>
            <div className="grid grid-cols-2 gap-2 text-center pt-2 border-t border-slate-850">
              <div className="bg-slate-950/55 p-2 rounded-lg">
                <p className="text-[8px] font-mono text-slate-500 uppercase">Avg. Operational Savings</p>
                <p className="text-base font-bold text-emerald-400 font-mono mt-0.5">38% - 46%</p>
              </div>
              <div className="bg-slate-950/55 p-2 rounded-lg">
                <p className="text-[8px] font-mono text-slate-500 uppercase">Est. Conversion Growth</p>
                <p className="text-base font-bold text-blue-400 font-mono mt-0.5">+24% Average</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
