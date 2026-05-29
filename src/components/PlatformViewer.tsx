import React, { useState } from "react";
import * as Icons from "lucide-react";

interface PlatformViewerProps {
  initialTab?: string;
  onBack: () => void;
}

export const PlatformViewer: React.FC<PlatformViewerProps> = ({
  initialTab = "video-engine",
  onBack,
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [consoleOutput, setConsoleOutput] = useState<string>("");
  const [isRunningAgent, setIsRunningAgent] = useState<boolean>(false);
  const [executionProgress, setExecutionProgress] = useState<number>(0);

  // States for interactive inputs inside various tabs
  const [videoPrompt, setVideoPrompt] = useState<string>("Futuristic drone shipping warehouse in Mumbai, cinematic tracking shot");
  const [videoResolution, setVideoResolution] = useState<string>("4K UHD (3840x2160)");
  const [voiceAccent, setVoiceAccent] = useState<string>("Indian English (Mumbai)");
  const [voiceTone, setVoiceTone] = useState<string>("Professional & Warm");
  const [schemaType, setSchemaType] = useState<string>("E-Commerce Listing Schema");
  const [editorGapCut, setEditorGapCut] = useState<boolean>(true);
  const [editorNoiseRemoval, setEditorNoiseRemoval] = useState<boolean>(true);
  const [dubbingTargetLang, setDubbingTargetLang] = useState<string>("German (DE-Sovereign)");
  const [dubbingVoiceClone, setDubbingVoiceClone] = useState<boolean>(true);
  const [genProductKeywords, setGenProductKeywords] = useState<string>("Sovereign AI Router, high-throughput model execution, 8x GPU nodes");

  const platformTabs = [
    {
      id: "video-engine",
      label: "AI Video Engine",
      icon: "Film",
      category: "Generation",
    },
    {
      id: "voice-engine",
      label: "AI Voice Engine",
      icon: "Mic",
      category: "Acoustics",
    },
    {
      id: "generative-ai",
      label: "Generative AI Core",
      icon: "Cpu",
      category: "Inference",
    },
    {
      id: "video-editor",
      label: "AI Video Editor",
      icon: "Scissors",
      category: "Editing",
    },
    {
      id: "language-dubbing",
      label: "Multi-Language Dubbing",
      icon: "Languages",
      category: "Localization",
    },
    {
      id: "content-generator",
      label: "Content Generator",
      icon: "Sparkles",
      category: "Commerce Marketing",
    },
  ];

  // Resolve Lucide icons
  const getIcon = (iconName: string, className: string = "w-4 h-4") => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.Activity className={className} />;
  };

  // Content specifications
  const platformData: Record<
    string,
    {
      title: string;
      tagline: string;
      techMetrics: Array<{ label: string; value: string }>;
      description: string;
      capabilities: string[];
      benefits: string[];
      apiSample: string;
    }
  > = {
    "video-engine": {
      title: "AI Video Engine",
      tagline: "High-fidelity, temporal-consistent physical scene synthesis",
      techMetrics: [
        { label: "Neural Model", value: "Eunimart-VidGen-v4.5" },
        { label: "Infrastructure Cluster", value: "8x NVIDIA H100 Nodes (BOM-W3)" },
        { label: "Max Output", value: "4K Cinema ProRes 60fps" },
        { label: "Temporal Accuracy", value: "99.8% Physics Calibration" },
      ],
      description: "A leading-edge multi-modal diffusion system designed specifically for enterprise retail and high-fidelity video production. It takes textual descriptions or sketch boards and synthesizes spatially realistic environments, camera tracking motions, and complex cinematic lighting while adhering structurally to rigid physics models.",
      capabilities: [
        "Consistent character preservation across multiple temporal cut sequences",
        "Deep understanding of physical camera flight paths (pans, zooms, cranes, drones)",
        "Zero-flicker frame interpolation leveraging vector motion field predictions",
        "Integrated lighting propagation supporting dynamic shadow matching"
      ],
      benefits: [
        "Cut commercial production budgets by up to 92% compared to standard filming arrays",
        "Generate infinite high-yield localized digital video variations instantly",
        "Enterprise-level air-gapped security safeguarding proprietary asset renders"
      ],
      apiSample: `// Prompt temporal-synthesis pipeline
import { EunimartMedia } from '@eunimart/sdk';

const mediaClient = new EunimartMedia({ apiKey: process.env.EM_SECURE_TOKEN });

const renderJob = await mediaClient.videoEngine.create({
  prompt: "Cinematic drone tracking of global cargo containers crossing ocean",
  resolution: "3840x2160",
  frameRate: 60,
  temporalConsistencyLevel: "military-grade",
  physicsGuidanceScale: 12.5
});`
    },
    "voice-engine": {
      title: "AI Voice Engine",
      tagline: "Neural accent replication and sub-100ms conversational acoustics",
      techMetrics: [
        { label: "Synthesizer Model", value: "Eunimart-VoiceSynth-v3" },
        { label: "Average Latency", value: "~85ms Streaming Response" },
        { label: "Accent Portals", value: "95+ Regional Accents" },
        { label: "Tone Precision", value: "Dual-Path Emotional Mapping" },
      ],
      description: "Our sound synthesis engine is built for demanding high-frequency conversational platforms. Utilizing neural token modulation patterns, it produces completely professional, natural speech. The engine can mirror regional accents (such as Mumbai English, British Received Pronunciation, and US Mid-Atlantic) while retaining professional tone warmth and semantic coherence.",
      capabilities: [
        "Ultra-low latency streaming playback support via active gRPC channels",
        "Dynamic emotional shift markers (enthusiastic, supportive, professional, authoritative)",
        "Zero-shot voice cloning from just 15 seconds of clean source audio",
        "Phoneme-level micro-modulations to simulate breathing and natural speech pauses"
      ],
      benefits: [
        "Sustain natural, unhurried customer calls that feel indistinguishable from human experts",
        "Instantly convert vast databases of text products or instructional files to high-quality audio",
        "Complete compliance architecture masking biometric voices from storage to prevent theft"
      ],
      apiSample: `// Active low-latency voice pipeline sequence
const audioStream = await eunimart.voiceEngine.synthesizeStream({
  text: "Welcome to the Eunimart secure gateway. Preparing cognitive analytics matching.",
  voiceId: "em_voice_priya_mumbai",
  speedModifier: 1.02,
  pitchShiftFactor: 1.0,
  outputEncoding: "audio/opus"
});`
    },
    "generative-ai": {
      title: "Generative AI Core Suite",
      tagline: "Sovereign cognitive reasoning models with certified JSON schema bounds",
      techMetrics: [
        { label: "Core Model Weight", value: "Eunimart-Cognitive-32B" },
        { label: "Context Window", value: "128,000 Active Tokens" },
        { label: "Schema Guarantee", value: "100% Strict JSON Conformity" },
        { label: "Execution Priority", value: "Fast-Track BOM-1 Compute Nodes" },
      ],
      description: "The primary cognitive hub powering all search, logic, and cataloging operations. Eunimart Generative AI Core Suite consists of custom-tuned, high-performance reasoning indices. Unlike generic large models, these models are optimized to execute transactional processes, translate complex multi-currency taxonomies, and maintain rigid compliance guardrails.",
      capabilities: [
        "Rigid output formatting ensuring API payloads match specified schemas without failing",
        "In-context learning designed to execute complex commercial checklists with minimal prompt tuning",
        "Sophisticated cross-border retail compliance analysis pipelines",
        "Optimized database retrieval interfaces for zero-latency lookups"
      ],
      benefits: [
        "Eliminate output format hallucinations that cause application code crashes",
        "Highly compressed operational sizes reducing token latency by up to 60%",
        "Sovereign data insulation under strict SOC-2 guidelines"
      ],
      apiSample: `// Execute reasoning with schema constraints
const taxonomyModel = await eunimart.generativeCore.completions({
  model: "cognitive-32b-instruct",
  prompt: "Standardize SKU attributes from raw data list: Laptop Pro 16, 1TB, 32GB.",
  responseFormat: {
    type: "json_schema",
    schema: {
      properties: {
        productName: { type: "string" },
        ramGB: { type: "integer" },
        storageGB: { type: "integer" },
      },
      required: ["productName", "ramGB", "storageGB"]
    }
  }
});`
    },
    "video-editor": {
      title: "AI Video Editor",
      tagline: "Dynamic browser-native video workflow & acoustic editing panel",
      techMetrics: [
        { label: "Editor Base", value: "Eunimart-Timeline-v2.1" },
        { label: "Auto-Cut Limit", value: "Up to 4 hours of raw assets" },
        { label: "Acoustic Scrubbing", value: "Dynamic Spectral Isolation" },
        { label: "B-Roll Allocation", value: "AI semantic asset-match" },
      ],
      description: "Our cloud-native multi-track editor redefines post-production operations. The AI Video Editor auto-analyzes voice patterns to slice out silent gaps, applies precise spectral filters to isolate speaking voices from noisy environments, and pulls relevant graphical B-roll placeholders matching spoken transcripts to create a unified first-cut timeline automatically.",
      capabilities: [
        "Automated speaker-turn split indexes across raw multi-mic recording sessions",
        "Smart transcript-guided visual timeline cutting (deleting transcript text cuts the video)",
        "Intelligent background noise elimination and master equalization alignment",
        "Automatic zoom framing and visual stabilization targeting focal faces"
      ],
      benefits: [
        "Transform raw multi-hour conference recordings into neat highlight packages in seconds",
        "Eliminate boring mechanical timeline scrolling for video editors",
        "Consolidated localized workspace keeping render streams secure on unified cloud systems"
      ],
      apiSample: `// Automate post-production timeline layout assembly
const editedTimeline = await eunimart.videoEditor.createTimeline({
  rawMediaUrl: "https://secure-s3.eunimart.in/raw/meeting-recording.mp4",
  autoCutGaps: true,
  vocalsOnlyNoiseLevelDb: -42,
  generateHighlightSubclips: true,
  durationGoalSeconds: 90
});`
    },
    "language-dubbing": {
      title: "Multi-Language Dubbing Grid",
      tagline: "Dynamic lip-synchronized translations with tone-preserving cloned vocals",
      techMetrics: [
        { label: "Dubbing Matrix", value: "Eunimart-LipSync-DualSys" },
        { label: "Translating Scope", value: "48+ Complex Dialects" },
        { label: "Warp Accuracy", value: "99.4% Face Mesh Synchronization" },
        { label: "Vocal Retention", value: "Full timbre Preservation" },
      ],
      description: "Deploy and localize marketing webinars, training video channels, or product demos to international markets without hiring voice actors. Multi-Language Dubbing Grid automatically translates voice tracks, alters video mouth patterns using localized visual warp grids, and recreates the original speaker's true voice timbre in the target language.",
      capabilities: [
        "Full vocal stamp extraction mapping identical timbre to German, Japanese, Spanish, etc.",
        "Generative visual lip redirection aligning original mouth motions with new spoken words",
        "Intelligent timestamp stretching to handle different length foreign phrases gracefully",
        "Integrated subtitle generation with exact timing timestamps matching the dubbed sound"
      ],
      benefits: [
        "Unify global team alignment with instantly accessible corporate instructions in several languages",
        "Reach a global customer base with localized promo reels, keeping message consistency flawless",
        "Zero license issues on synthesized translation outputs under global indemnity bounds"
      ],
      apiSample: `// Translate and lip-sync video track
const dubbedAssetClient = await eunimart.dubbingGrid.execute({
  sourceVideoUrl: "https://assets.eunimart.in/mumbai-launch.mp4",
  sourceLanguage: "English-US",
  targetLanguages: ["Hindi-IN", "Spanish-ES", "Japanese-JP"],
  timbreMatching: true,
  enableFaceMeshWarping: true
});`
    },
    "content-generator": {
      title: "Content Generator Platform",
      tagline: "Optimized enterprise copy engine mapping listings and SEO analytics",
      techMetrics: [
        { label: "Copy Engine", value: "Eunimart-CommerceCopy-v5" },
        { label: "Listing Limit", value: "Bulk upload (10,000+ items/sec)" },
        { label: "SEO Intelligence", value: "Live Google/Bing Keyword mapping" },
        { label: "Brand Guardrails", value: "Custom Style-Guide Enforcer" },
      ],
      description: "The premium solution to scale digital retail store catalogs. The Content Generator maps plain specifications and inventories, instantly building thousands of verified and structured product descriptions, highly optimized blog articles, automated ad scripts, and detailed SEO metadata customized for specific geographic commercial guidelines.",
      capabilities: [
        "Bulk translation and optimization mapping raw SKU inventories to commerce descriptions",
        "Style-guide compliance locking tone structures (so copy is never generic or off-brand)",
        "Dynamic first-party search intent mapping ensuring up-to-date query weight alignments",
        "Automated structured schema JSON outputs ready to sync with Shopify or Magento"
      ],
      benefits: [
        "Complete massive catalog optimizations in minutes instead of hiring copywriter armies",
        "Improve digital search performance and organic placements by targeting real buyer intents",
        "Strict compliance preventing trademark infringements or false performance promises"
      ],
      apiSample: `// Generate optimized product marketing copy
const promoMaterials = await eunimart.contentGenerator.buildCampaign({
  productSpecs: {Name: "Enterprise Router v2", Throughput: "100 Gbps"},
  channels: ["ShopifyDescription", "GoogleSearchAds", "LinkedInPost"],
  targetAudience: "Lead Systems Engineers",
  toneGuideline: "Authoritative & Technical"
});`
    },
  };

  const activeDoc = platformData[activeTab] || platformData["video-engine"];

  // Simulation execution handler
  const runSimulation = () => {
    if (isRunningAgent) return;
    setIsRunningAgent(true);
    setExecutionProgress(5);
    setConsoleOutput(`[SYSTEM_BOM_1] Accessing secure compute namespace...`);

    const interval = setInterval(() => {
      setExecutionProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 15;
      });
    }, 300);

    // Dynamic outputs based on the active tab
    setTimeout(() => {
      setConsoleOutput((prev) => prev + `\n[COMPILE] Handshaking with ${activeDoc.techMetrics[0].value}...`);
    }, 400);

    setTimeout(() => {
      setConsoleOutput((prev) => prev + `\n[NETWORK] Allocating resources on cluster ${activeDoc.techMetrics[1].value}...`);
    }, 900);

    setTimeout(() => {
      let resultDoc = "";
      if (activeTab === "video-engine") {
        resultDoc = `
{\n  "jobStatus": "RENDER_SUCCESS",\n  "fileUrl": "https://secure-cdn.eunimart.in/results/job_99a8x_rendered.mp4",\n  "resolution": "3840x2160 (4K Cinema ProRes)",\n  "framesRendered": 540,\n  "fps": 60,\n  "physicsScore": 0.998,\n  "renderTimeMs": 2480,\n  "promptMatched": "${videoPrompt}"\n}`;
      } else if (activeTab === "voice-engine") {
        resultDoc = `
{\n  "voicePipelineStreamStatus": "ACTIVE",\n  "sampleRateHz": 48000,\n  "voiceId": "em_cloned_accent_921_beta",\n  "matchedAccent": "${voiceAccent}",\n  "tonePattern": "${voiceTone}",\n  "encodedStreamFormat": "audio/opus",\n  "streamingLatencyMs": 85,\n  "durationSec": 15.22\n}`;
      } else if (activeTab === "generative-ai") {
        resultDoc = `
{\n  "inferenceStatus": "SUCCESS_200",\n  "targetIndex": "Eunimart-Cognitive-32B",\n  "selectedSchema": "${schemaType}",\n  "validatedConformance": true,\n  "promptTokens": 140,\n  "completionTokens": 380,\n  "outputJson": {\n    "catalogId": "SKU-992-BOM",\n    "taxonomyGroup": "Enterprise Infrastructure",\n    "marketVetting": "MCA-MH-Authorized",\n    "strictSLA": "99.95%_Guaranteed"\n  }\n}`;
      } else if (activeTab === "video-editor") {
        resultDoc = `
{\n  "editorJobStatus": "TIMELINE_CUT_FINISHED",\n  "totalRawTracks": 2,\n  "autoCutGapApplied": ${editorGapCut},\n  "ambientNoiseRemoved": ${editorNoiseRemoval},\n  "cutsExecuted": 14,\n  "originalSeconds": 3600,\n  "finalTrimmedSeconds": 2420,\n  "equalizerSetting": "VocalMaxGain"\n}`;
      } else if (activeTab === "language-dubbing") {
        resultDoc = `
{\n  "dubbingJobStatus": "SYNC_DUB_FINISHED",\n  "sourceAudioExtractRatio": 1.0,\n  "clonedTimbreReference": ${dubbingVoiceClone},\n  "targetLanguageCode": "${dubbingTargetLang}",\n  "visualLipMeshWarpRatio": 0.994,\n  "syncStretchFactor": 1.02,\n  "translatedSubtitlesUrl": "https://secure-cdn.eunimart.in/dubbing/subs_de_921.vtt"\n}`;
      } else if (activeTab === "content-generator") {
        resultDoc = `
{\n  "copyEngineStatus": "BULK_GENERATED_200",\n  "analyzedKeywords": ["Sovereign", "Enterprise", "Compute"],\n  "styleGuideComplianceScore": "100%",\n  "generatedCopies": [\n    {\n      "placement": "Meta Ad Copy",\n      "headline": "Maximize Your Cognitive Scaling with Eunimart",\n      "text": "Discover our sovereign models operating within secure local clusters. Secure 128k context windows now."\n    },\n    {\n      "placement": "Shopify Description",\n      "body": "Eunimart coordinates high-throughput model executions. Engineered for compliance-guided operations on optimized GPU nodes."\n    }\n  ],\n  "seoMetaTags": {\n    "title": "Sovereign Enterprise Computing | Eunimart",\n    "description": "Secure, deterministic, and highly optimized cognitive frameworks for banks, retailers, and logistics conglomerates."\n  }\n}`;
      }

      setConsoleOutput(
        (prev) =>
          prev +
          `\n[COMPILER] Finished temporal analysis.\n\n[SUCCESS 200 OK] Output Record Generated:${resultDoc}`
      );
      setIsRunningAgent(false);
      setExecutionProgress(100);
    }, 2200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="platform-master-viewer">
      
      {/* Upper Navigation/Banner */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 border-b border-slate-900 pb-6">
        <div className="space-y-1">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-350 transition-colors font-mono cursor-pointer"
            id="btn-back-to-home-platform"
          >
            <Icons.ArrowLeft className="w-3.5 h-3.5" />
            Back to Enterprise Portal
          </button>
          <div className="flex items-center gap-2 mt-2">
            <h1 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">Eunimart Platform Hub</h1>
            <span className="text-[9px] bg-blue-500/20 text-blue-400 font-mono font-bold px-2 py-0.5 rounded border border-blue-500/20">
              ACTIVE API MODULES
            </span>
          </div>
          <p className="text-xs text-slate-400">Deploy high-performance media synthesis, neural speech modeling, and cognitive generative cores.</p>
        </div>

        {/* Action Controls */}
        <div className="flex gap-2">
          <button
            onClick={() => alert("Sovereign SDK documentation configuration initialized. Access keys sent to enterprise account.")}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-705 text-slate-200 hover:text-white rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5"
            id="btn-download-docs-platform"
          >
            <Icons.FileCode2 className="w-3.5 h-3.5 text-blue-400" />
            Download SDK Docs
          </button>
          <button
            onClick={() => {
              alert("Routing you to sales consultation scheduler.");
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-95 text-white rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5"
            id="btn-contact-custom-platform"
          >
            <Icons.PhoneCall className="w-3.5 h-3.5 text-white" />
            Contact Architect
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Category Sidebar tabs */}
        <div className="lg:col-span-4 space-y-4">
          
          <div className="bg-[#090d16] border border-slate-850 rounded-2xl p-2.5 space-y-1">
            <p className="text-[10px] font-mono font-black text-slate-500 px-3 py-2 uppercase border-b border-slate-900 mb-2">Platform Capabilities</p>
            {platformTabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setConsoleOutput("");
                    setExecutionProgress(0);
                  }}
                  id={`platform-sidebar-tab-${tab.id}`}
                  className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-blue-950/40 via-purple-950/40 to-slate-950 border border-blue-500/30 text-white font-bold"
                      : "bg-transparent text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${isSelected ? "bg-blue-500/20 text-blue-400" : "bg-slate-950 text-slate-500"}`}>
                      {getIcon(tab.icon, "w-4 h-4")}
                    </div>
                    <div>
                      <h4 className="text-xs tracking-tight">{tab.label}</h4>
                      <p className="text-[9px] text-slate-500 font-mono">{tab.category}</p>
                    </div>
                  </div>
                  <Icons.ChevronRight className={`w-3.5 h-3.5 text-slate-500 transition-transform ${isSelected ? "rotate-90 text-blue-400" : ""}`} />
                </button>
              );
            })}
          </div>

          {/* Quick Technical Specs box */}
          <div className="bg-[#090d16] border border-slate-850 p-5 rounded-2xl space-y-4">
            <div className="flex items-center gap-2">
              <Icons.ShieldAlert className="w-5 h-5 text-purple-400" />
              <h4 className="text-xs font-mono font-black text-white uppercase">Sovereign Encryption Isolation</h4>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
              All listed platforms utilize on-premises hardware arrays locally in Mumbai (BOM-1). Audio recordings, video renders, and cognitive vectors are processed within completely sandboxed networks.
            </p>
            <div className="pt-2 border-t border-slate-900 grid grid-cols-2 gap-2 text-center text-xs font-mono">
              <div className="p-2 bg-slate-950 rounded-lg">
                <span className="text-[8px] text-slate-500 block uppercase">Encryption</span>
                <span className="text-white font-bold">AES-256 GCM</span>
              </div>
              <div className="p-2 bg-slate-950 rounded-lg">
                <span className="text-[8px] text-slate-500 block uppercase">Compliancy</span>
                <span className="text-white font-bold">SOC-2 Type II</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Display Product Specs, API and Test Simulation Console */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Main specifications sheet card */}
          <div className="bg-[#090d16] border border-slate-850 rounded-3xl p-6 sm:p-8 space-y-6">
            
            <div className="space-y-2 border-b border-slate-900 pb-5">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="uppercase tracking-wider">Platform Specifications</span>
                <span>Active Region: AP-SOUTH-1</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">{activeDoc.title}</h2>
              <p className="text-xs text-slate-400 font-sans italic">{activeDoc.tagline}</p>
            </div>

            {/* Elegant Tech Representative Section Visual */}
            <div className="border border-slate-850 rounded-2xl overflow-hidden relative h-48 bg-slate-950 group">
              <img 
                src={
                  activeTab === "video-engine"
                    ? "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80"
                    : activeTab === "voice-engine"
                    ? "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80"
                    : activeTab === "generative-ai"
                    ? "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
                    : activeTab === "video-editor"
                    ? "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
                    : activeTab === "language-dubbing"
                    ? "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                    : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                }
                alt={activeDoc.title}
                className="w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-4">
                <span className="text-[9px] font-mono text-cyan-400 bg-slate-950/90 border border-slate-850 px-3 py-1 rounded font-bold uppercase tracking-wider">
                  {activeDoc.title} Active Preview
                </span>
              </div>
            </div>

            {/* Quick Metrics display */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {activeDoc.techMetrics.map((met, i) => (
                <div key={i} className="p-3 bg-slate-950/65 border border-slate-850/80 rounded-xl space-y-1" id={`tech-metric-${i}`}>
                  <span className="text-[8px] sm:text-[9px] font-mono text-slate-500 uppercase block">{met.label}</span>
                  <p className="text-xs md:text-sm font-bold font-mono text-white tracking-tight">{met.value}</p>
                </div>
              ))}
            </div>

            {/* Paragraph Description */}
            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans space-y-4">
              <p>{activeDoc.description}</p>
            </div>

            {/* Capabilities and Business Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-slate-900">
              
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase text-slate-350 flex items-center gap-1.5">
                  <Icons.Workflow className="w-3.5 h-3.5 text-blue-400" />
                  Technical Capabilities
                </h4>
                <ul className="space-y-2 text-xs">
                  {activeDoc.capabilities.map((cap, i) => (
                    <li key={i} className="flex gap-2 items-start" id={`cap-li-${i}`}>
                      <Icons.CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300 font-sans leading-relaxed">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase text-slate-350 flex items-center gap-1.5">
                  <Icons.TrendingUp className="w-3.5 h-3.5 text-purple-400" />
                  Business Lift & ROI
                </h4>
                <ul className="space-y-2 text-xs">
                  {activeDoc.benefits.map((ben, i) => (
                    <li key={i} className="flex gap-2 items-start" id={`ben-li-${i}`}>
                      <Icons.Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300 font-sans leading-relaxed">{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          {/* Interactive Live API Test Terminal Panel */}
          <div className="bg-[#090d16] border border-slate-850 rounded-3xl overflow-hidden p-6 sm:p-8 space-y-6">
            
            <div className="space-y-2 border-b border-slate-900 pb-5">
              <h3 className="text-sm font-mono font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
                <Icons.Terminal className="w-4.5 h-4.5 text-blue-400" />
                Live Command Execution Sandbox
              </h3>
              <p className="text-xs text-slate-400">Configure query variables below to test real-time compilation performance.</p>
            </div>

            {/* Custom Interactive Settings based on current Tab */}
            <div className="bg-slate-950/70 border border-slate-900 p-4 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {activeTab === "video-engine" && (
                <>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-500 uppercase block">Scene Prompt Description</label>
                    <input
                      type="text"
                      value={videoPrompt}
                      onChange={(e) => setVideoPrompt(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-blue-500 text-xs text-white rounded-xl px-3 py-2 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-500 uppercase block">Generation Resolution Format</label>
                    <select
                      value={videoResolution}
                      onChange={(e) => setVideoResolution(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-blue-500 text-xs text-slate-300 rounded-xl px-3 py-2 focus:outline-none cursor-pointer"
                    >
                      <option value="4K UHD (3840x2160)">4K UHD (3840x2160)</option>
                      <option value="1080p FHD (1920x1080)">1080p FHD (1920x1080)</option>
                      <option value="Square Format (1:1 Cinematic)">Square Format (1:1 Cinematic)</option>
                    </select>
                  </div>
                </>
              )}

              {activeTab === "voice-engine" && (
                <>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-500 uppercase block">Neural Accent Style</label>
                    <select
                      value={voiceAccent}
                      onChange={(e) => setVoiceAccent(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-blue-500 text-xs text-slate-300 rounded-xl px-3 py-2 focus:outline-none cursor-pointer"
                    >
                      <option value="Indian English (Mumbai)">Indian English (Mumbai)</option>
                      <option value="British Received Pronunciation (UK)">British Received Pronunciation (UK)</option>
                      <option value="Sovereign Mid-Atlantic (US)">Sovereign Mid-Atlantic (US)</option>
                      <option value="German Accent Adaptation (DE)">German Accent Adaptation (DE)</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-500 uppercase block">Vocal Resonance Warmth</label>
                    <select
                      value={voiceTone}
                      onChange={(e) => setVoiceTone(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-blue-500 text-xs text-slate-300 rounded-xl px-3 py-2 focus:outline-none cursor-pointer"
                    >
                      <option value="Professional & Warm">Professional & Warm</option>
                      <option value="Authoritative Enterprise Specialist">Authoritative Enterprise Specialist</option>
                      <option value="Helpful & Animated Assistant">Helpful & Animated Assistant</option>
                    </select>
                  </div>
                </>
              )}

              {activeTab === "generative-ai" && (
                <>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-500 uppercase block">Structured Validation Schema</label>
                    <select
                      value={schemaType}
                      onChange={(e) => setSchemaType(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-blue-500 text-xs text-slate-300 rounded-xl px-3 py-2 focus:outline-none cursor-pointer"
                    >
                      <option value="E-Commerce Listing Schema">E-Commerce Listing Schema</option>
                      <option value="Banking Transaction Ledger Schema">Banking Transaction Ledger Schema</option>
                      <option value="Healthcare Patient Diagnostic Encrypted Record">Healthcare Patient Diagnostic Encrypted Record</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-500 uppercase block">Schema Enforcement Level</label>
                    <div className="flex items-center gap-2 h-9 text-xs text-slate-300">
                      <Icons.ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Strict Compliance Guardrails (100% Guaranteed)</span>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "video-editor" && (
                <>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={editorGapCut}
                        onChange={(e) => setEditorGapCut(e.target.checked)}
                        className="rounded border-slate-800 bg-slate-950 text-blue-600 focus:ring-blue-500"
                      />
                      <span>Auto-Cut Silent Gaps</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={editorNoiseRemoval}
                        onChange={(e) => setEditorNoiseRemoval(e.target.checked)}
                        className="rounded border-slate-800 bg-slate-950 text-blue-600 focus:ring-blue-500"
                      />
                      <span>Advanced Spectral Scrubbing</span>
                    </label>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-normal md:col-span-1 self-center">
                    Cuts are dynamically mapped to silent pauses detected in acoustic audio records.
                  </p>
                </>
              )}

              {activeTab === "language-dubbing" && (
                <>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-500 uppercase block">Target Language Output</label>
                    <select
                      value={dubbingTargetLang}
                      onChange={(e) => setDubbingTargetLang(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-blue-500 text-xs text-slate-300 rounded-xl px-3 py-2 focus:outline-none cursor-pointer"
                    >
                      <option value="German (DE-Sovereign)">German (DE-Sovereign)</option>
                      <option value="Japanese (JP-HighTimbre)">Japanese (JP-HighTimbre)</option>
                      <option value="Hindi (IN-Standard)">Hindi (IN-Standard)</option>
                      <option value="French (FR-Parisian)">French (FR-Parisian)</option>
                    </select>
                  </div>
                  <div className="space-y-1.5 flex items-center gap-2 h-14">
                    <input
                      type="checkbox"
                      checked={dubbingVoiceClone}
                      onChange={(e) => setDubbingVoiceClone(e.target.checked)}
                      className="rounded border-slate-800 bg-slate-950 text-blue-600 focus:ring-blue-500"
                      id="dubbing-voice-clone-checkbox"
                    />
                    <label htmlFor="dubbing-voice-clone-checkbox" className="text-xs text-slate-300 cursor-pointer select-none">
                      Maintain True Timbre Cloned Signature
                    </label>
                  </div>
                </>
              )}

              {activeTab === "content-generator" && (
                <>
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-[10px] font-mono text-slate-500 uppercase block">Keywords / Core Features</label>
                    <input
                      type="text"
                      value={genProductKeywords}
                      onChange={(e) => setGenProductKeywords(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-850 focus:border-blue-500 text-xs text-white rounded-xl px-3 py-2 focus:outline-none"
                    />
                  </div>
                </>
              )}

            </div>

            {/* Simulated Live Console and SDK Block */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
              
              {/* Left Code/API Block */}
              <div className="bg-slate-950 border border-slate-900 rounded-2xl p-4 space-y-3 flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                  <span className="text-[9px] font-mono text-slate-500 uppercase">Eunimart SDK Segment</span>
                  <span className="text-[9px] font-mono text-blue-400">NodeJS / ESM</span>
                </div>
                <div className="flex-1 min-h-[140px] overflow-y-auto">
                  <pre className="font-mono text-[10px] text-slate-300 whitespace-pre-wrap">
                    {activeDoc.apiSample}
                  </pre>
                </div>
                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(activeDoc.apiSample).catch(() => {});
                      alert("API Sample code copied!");
                    }}
                    className="px-3 py-1.5 bg-slate-900 border border-slate-800 hover:text-white transition-colors text-[10px] font-mono text-slate-400 rounded-lg cursor-pointer"
                  >
                    Copy SDK Sample
                  </button>
                </div>
              </div>

              {/* Right Compiler Monitor */}
              <div className="bg-slate-950 border border-slate-910 rounded-2xl p-4 flex flex-col justify-between min-h-[220px]">
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                    <span className="text-[9px] font-mono text-slate-500 uppercase">Interactive Terminal Output</span>
                    <button
                      onClick={runSimulation}
                      disabled={isRunningAgent}
                      className={`px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-mono text-[10px] font-bold rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                        isRunningAgent ? "opacity-45 cursor-wait" : "hover:opacity-95"
                      }`}
                      id="btn-run-platform-test"
                    >
                      <Icons.Play className="w-2.5 h-2.5" />
                      {isRunningAgent ? "Compiling..." : "Run Test API Sync"}
                    </button>
                  </div>

                  {/* Progress Indicator */}
                  {isRunningAgent && (
                    <div className="space-y-1 animate-pulse">
                      <div className="flex justify-between items-center text-[9px] font-mono text-slate-400">
                        <span>Resource Allocation Processing</span>
                        <span>{executionProgress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
                          style={{ width: `${executionProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Terminal Text box */}
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 min-h-[140px] font-mono text-[10px] text-slate-300">
                    {consoleOutput ? (
                      <div className="whitespace-pre-line animate-fadeIn">
                        {consoleOutput}
                      </div>
                    ) : (
                      <span className="text-slate-600 italic block text-center pt-10">
                        Configure values and click "Run Test API Sync" above to compile real sandbox returns.
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-900 flex justify-between items-center text-[9px] font-mono text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Terminal: Idle
                  </span>
                  <span>Port: Direct GRPC Node 3000</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
