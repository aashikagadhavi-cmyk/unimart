import React, { useState } from "react";
import { Sparkles, Terminal, Key, Play, ChevronRight, Copy, Check, RefreshCw } from "lucide-react";
import { PRODUCTS } from "../data";

export const DevelopersPage: React.FC = () => {
  const [generatedKey, setGeneratedKey] = useState<string>("em_live_92f3acbc8a10408d85fbf80072b");
  const [activeLang, setActiveLang] = useState<string>("nodejs");
  const [activeEndpoint, setActiveEndpoint] = useState<string>("diffusion");
  const [copiedKey, setCopiedKey] = useState<boolean>(false);
  const [apiLogs, setApiLogs] = useState<string[]>([]);
  const [fetchingResult, setFetchingResult] = useState<boolean>(false);
  const [responseOutput, setResponseOutput] = useState<string>("");

  const generateNewKey = () => {
    const chars = "abcdef0123456789";
    let key = "em_live_";
    for (let i = 0; i < 24; i++) {
      key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedKey(key);
    setApiLogs((prev) => [`[KEY_ROTATION] Generated new active API token: ${key}`, ...prev]);
  };

  const copyKeyToClipboard = () => {
    navigator.clipboard.writeText(generatedKey).catch(() => {});
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 1200);
  };

  const codeSnippets: Record<string, Record<string, string>> = {
    nodejs: {
      diffusion: `// npm install @eunimart/sdk
import { EunimartVideo } from "@eunimart/sdk";

const eunimart = new EunimartVideo({
  apiKey: "${generatedKey}"
});

const response = await eunimart.diffusion.generate({
  paragraphPrompt: "Cyberpunk cycle race in rains of Mumbai...",
  cameraPath: "OrbitalRotationSlow",
  resolution: "4K_UHD"
});

console.log("Stitched Video Container Stream:", response.streamUrl);`,
      vocal: `// vocal synthese
import { EunimartVideo } from "@eunimart/sdk";

const eunimart = new EunimartVideo({ apiKey: "${generatedKey}" });

const speech = await eunimart.vocal.synthesize({
  text: "Welcome to Eunimart Private Limited core node.",
  vocalTimberSeed: "voice_priya_warm_in",
  emotionType: "thrilling"
});`
    },
    python: {
      diffusion: `# pip install eunimart-sdk
from eunimart import EunimartVideo

eunimart = EunimartVideo(api_key="${generatedKey}")

response = eunimart.diffusion.generate(
    paragraph_prompt="Cyberpunk cycle race in rains of Mumbai...",
    camera_path="OrbitalRotationSlow",
    resolution="4K_UHD"
)

print(response.stream_url)`,
      vocal: `# python vocal synthesis
from eunimart import EunimartVideo

eunimart = EunimartVideo(api_key="${generatedKey}")

speech = eunimart.vocal.synthesize(
    text="Welcome to Eunimart Private Limited core node.",
    vocal_timber_seed="voice_priya_warm_in",
    emotion_type="thrilling"
)`
    },
    curl: {
      diffusion: `curl -X POST "https://api.eunimart.in/v1/diffusion/generate" \\
  -H "Authorization: Bearer ${generatedKey}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "paragraphPrompt": "Cyberpunk cycle race in rains of Mumbai...",
    "cameraPath": "OrbitalRotationSlow",
    "resolution": "4K_UHD"
  }'`,
      vocal: `curl -X POST "https://api.eunimart.in/v1/vocal/synthesize" \\
  -H "Authorization: Bearer ${generatedKey}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Welcome to Eunimart Private Limited core node.",
    "vocalTimberSeed": "voice_priya_warm_in"
  }'`
    }
  };

  const triggerSandboxFetch = () => {
    if (fetchingResult) return;
    setFetchingResult(true);
    setResponseOutput("");
    setApiLogs((prev) => [`[HTTP_POST] Query dispatched to /v1/${activeEndpoint}/generate -- Auth Verified!`, ...prev]);

    setTimeout(() => {
      setApiLogs((prev) => [`[MODEL_DISPATCH] Assigning execution queue matching Mumbai Node #BOM-CORE-02`, ...prev]);
    }, 400);

    setTimeout(() => {
      if (activeEndpoint === "diffusion") {
        setResponseOutput(`{
  "status": "success",
  "requestId": "req_vidgen_f839ab910d",
  "data": {
    "streamUrl": "https://cdn.eunimart.in/renders/mumbai_cyberpunk_res.mp4",
    "metadata": {
      "dimensions": "3840x2160",
      "codec": "h264_uhd",
      "coherenceFidelityScore": 0.985,
      "durationSec": 8.0,
      "vramOverheadGB": 4.12
    }
  }
}`);
      } else {
        setResponseOutput(`{
  "status": "success",
  "requestId": "req_vocal_b92837ff21",
  "data": {
    "audioUrl": "https://cdn.eunimart.in/audio/synthesized_welcome_voice.wav",
    "metadata": {
      "timbre": "voice_priya_warm_in",
      "characterCount": 42,
      "phonemeAlignmentScore": 0.992
    }
  }
}`);
      }
      setApiLogs((prev) => [`[SUCCESS 200 OK] Received valid JSON payload from regional sandbox cloud in 1.1s`, ...prev]);
      setFetchingResult(false);
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="developers-page-container">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 text-xs font-mono font-bold text-blue-400 rounded-full border border-blue-500/20 uppercase tracking-widest">
          Developer Command Deck
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none uppercase">
          Build With Eunimart SDKs
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed font-sans">
          Integrate high-fidelity video diffusion and phonetic dubbing nodes straight into your production app in lines of code.
        </p>
      </div>

      {/* Dev IDE Mockup Imagery */}
      <div className="border border-slate-850 bg-[#090d16] rounded-3xl overflow-hidden relative h-56 sm:h-72 shadow-2xl flex items-end group select-none" id="dev-workspace-illustration">
        <img 
          src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1200&h=400&q=80" 
          alt="Eunimart IDE and Development environment" 
          className="w-full h-full object-cover opacity-50 transition-all duration-700 group-hover:scale-[1.02] group-hover:opacity-65"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent flex flex-col justify-end p-6 space-y-1">
          <span className="text-[9px] font-mono text-indigo-400 bg-slate-950/90 border border-slate-800 p-0.5 px-3 rounded font-bold w-max uppercase tracking-wider">
            Active SDK Toolchain
          </span>
          <h3 className="text-lg font-bold text-white uppercase font-display tracking-wide">Multi-Platform Terminal Hub</h3>
          <p className="text-xs text-slate-400 font-sans max-w-xl">
            Stream high-fidelity video buffers directly to frontend client states using standard Node / Python pip protocols. Integrated WebSocket listeners automatically trigger post-production callback logs.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* API Credentials Card & Active Testing panel */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#090d16] border border-slate-800 p-6 rounded-3xl space-y-6">
            <h3 className="text-base font-bold font-mono text-white uppercase flex items-center gap-1.5 border-b border-slate-850 pb-3">
              <Key className="w-5 h-5 text-indigo-400" />
              Your Sandbox token
            </h3>

            {/* API key display zone */}
            <div className="space-y-2">
              <label className="text-[10px] text-slate-500 font-mono uppercase tracking-wider block">Private API Secret Key</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  readOnly
                  value={generatedKey}
                  className="flex-1 bg-slate-950 border border-slate-850 font-mono text-[10px] p-2.5 rounded-xl text-slate-300 tracking-tight"
                />
                <button
                  type="button"
                  onClick={copyKeyToClipboard}
                  className="px-3 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl border border-slate-850 transition-colors"
                  id="dev-copy-key-btn"
                  title="Copy Key"
                >
                  {copiedKey ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={generateNewKey}
                className="flex-1 py-2.5 bg-slate-950 hover:bg-slate-900 border border-slate-850 text-slate-300 font-mono text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                id="dev-rotate-btn"
              >
                <RefreshCw className="w-3.5 h-3.5 animate-pulse" />
                Rotate Token
              </button>
            </div>
          </div>

          {/* Core endpoints simulation toggles */}
          <div className="bg-slate-900/10 border border-slate-850 p-6 rounded-3xl space-y-4">
            <h4 className="text-xs font-mono font-extrabold text-slate-400 uppercase tracking-widest block">ACTIVE SANDBOX HANDSHAKES</h4>
            <div className="space-y-2">
              <button
                onClick={() => {
                  setActiveEndpoint("diffusion");
                  setResponseOutput("");
                }}
                className={`w-full p-3 rounded-2xl text-left border flex items-center justify-between text-xs transition-all ${
                  activeEndpoint === "diffusion"
                    ? "bg-indigo-500/15 border-indigo-500/50 text-indigo-300 font-bold"
                    : "bg-slate-950 border-slate-900 text-slate-400 hover:border-slate-800 hover:text-slate-200"
                }`}
                id="endpoint-toggle-diff"
              >
                <span className="font-mono">POST /v1/diffusion/generate</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  setActiveEndpoint("vocal");
                  setResponseOutput("");
                }}
                className={`w-full p-3 rounded-2xl text-left border flex items-center justify-between text-xs transition-all ${
                  activeEndpoint === "vocal"
                    ? "bg-indigo-500/15 border-indigo-500/50 text-indigo-300 font-bold"
                    : "bg-slate-950 border-slate-900 text-slate-400 hover:border-slate-800 hover:text-slate-200"
                }`}
                id="endpoint-toggle-vocal"
              >
                <span className="font-mono">POST /v1/vocal/synthesize</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={triggerSandboxFetch}
              disabled={fetchingResult}
              className={`w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-mono text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 cursor-pointer hover:opacity-95 ${
                fetchingResult ? "opacity-30 cursor-wait" : ""
              }`}
              id="dev-fetch-sandbox-endpoint"
            >
              <Play className="w-3.5 h-3.5" />
              {fetchingResult ? "Compiling Server Returns..." : "Dispatch API curl"}
            </button>
          </div>
        </div>

        {/* Right Column: Code viewer & Live JSON compilation board */}
        <div className="lg:col-span-8 space-y-6">
          {/* Main SDK tab selector console */}
          <div className="bg-[#090d16] border border-slate-800 rounded-3xl overflow-hidden flex flex-col justify-between min-h-[460px]">
            <div className="bg-slate-950/80 border-b border-slate-850 px-4 h-11 flex items-center justify-between">
              <div className="flex gap-1">
                {["nodejs", "python", "curl"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    id={`tab-lang-${lang}`}
                    className={`px-3 py-1 text-[10px] uppercase font-mono tracking-wider rounded transition-colors cursor-pointer ${
                      activeLang === lang
                        ? "bg-slate-900 border border-slate-800 text-indigo-400 font-bold"
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    {lang === "nodejs" ? "NodeJS SDK" : lang === "python" ? "Python SDK" : "curl"}
                  </button>
                ))}
              </div>
              <span className="text-[10px] text-slate-550 font-mono">BOM-CORE-02 SECURE CONTAINER</span>
            </div>

            {/* Code Highlight Zone */}
            <div className="p-5 flex-1 bg-slate-950/40">
              <pre className="font-mono text-[10.5px] text-slate-350 leading-relaxed overflow-x-auto whitespace-pre">
                {codeSnippets[activeLang][activeEndpoint]}
              </pre>
            </div>

            {/* Sandbox Live JSON output logs */}
            <div className="border-t border-slate-850/80 bg-slate-950/45 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-[9px] font-mono text-slate-500 uppercase">Live Shell Activity logs</p>
                <div className="bg-slate-950 border border-slate-900 p-3 h-32 rounded-xl overflow-y-auto font-mono text-[9px] text-indigo-400 scrollbar-none flex flex-col space-y-1">
                  {apiLogs.length > 0 ? (
                    apiLogs.map((log, idx) => (
                      <p key={idx} className="leading-snug text-ellipsis overflow-hidden whitespace-nowrap animate-fadeIn">
                        &gt; {log}
                      </p>
                    ))
                  ) : (
                    <span className="text-slate-650 italic block text-center pt-10">Waiting for api curl dispatch action...</span>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-[9px] font-mono text-slate-500 uppercase">JSON Server Response payload</p>
                <div className="bg-slate-950 border border-slate-900 p-3 h-32 rounded-xl overflow-y-auto font-mono text-[9px] text-emerald-400 scrollbar-thin">
                  {responseOutput ? (
                    <pre className="leading-tight whitespace-pre-wrap select-all">{responseOutput}</pre>
                  ) : (
                    <span className="text-slate-650 italic block text-center pt-10">200 OK payloads compiled here.</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration & Infrastructure Services Developer Showcase (3 supplementary images) */}
      <div className="border border-slate-850 bg-[#090d16] rounded-3xl p-6 sm:p-8 space-y-6" id="dev-additional-showcase">
        <div>
          <span className="text-[9px] font-mono text-purple-400 tracking-wider uppercase font-bold block">
            Eunimart Global Devops Coordinates
          </span>
          <h3 className="text-base sm:text-lg font-bold font-display text-white uppercase tracking-tight">
            Integrated Host Node & Telemetry telemetry
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-2xl mt-1">
            Build server requests using the latest gRPC, Python pip, or Javascript packages directly. Our microservice layers guarantee 99.98% operational SLA availability thresholds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-slate-800 rounded-2xl overflow-hidden relative group h-44 bg-slate-950">
            <img 
              src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=400&h=300&q=80" 
              alt="Cluster Load Balancing" 
              className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
              <span className="text-[8px] font-mono text-indigo-400 font-bold uppercase tracking-wider block">MODULE I: BALANCER</span>
              <strong className="text-xs text-white uppercase font-display block mt-0.5">Dual-Channel Stream Routers</strong>
              <p className="text-[10px] text-slate-405 leading-tight mt-1 font-sans">Streams real-time coordinates cleanly into client socket buffers.</p>
            </div>
          </div>

          <div className="border border-slate-800 rounded-2xl overflow-hidden relative group h-44 bg-slate-950">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&h=300&q=80" 
              alt="Silicon Microprocessing Cores" 
              className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
              <span className="text-[8px] font-mono text-[#22d3ee] font-bold uppercase tracking-wider block">MODULE II: CHIPSETS</span>
              <strong className="text-xs text-white uppercase font-display block mt-0.5">High-Performance H100 Enclave</strong>
              <p className="text-[10px] text-slate-405 leading-tight mt-1 font-sans">Physical tensor calculation layers processing spatial facial coordinates.</p>
            </div>
          </div>

          <div className="border border-slate-800 rounded-2xl overflow-hidden relative group h-44 bg-slate-950">
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&h=300&q=80" 
              alt="Live Client Telemetry logs" 
              className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
              <span className="text-[8px] font-mono text-purple-400 font-bold uppercase tracking-wider block">MODULE III: DEBUGGER</span>
              <strong className="text-xs text-white uppercase font-display block mt-0.5">Active Client Sandbox Terminal</strong>
              <p className="text-[10px] text-slate-405 leading-tight mt-1 font-sans">Secure webhook logs tracing remote rendering pipeline status checks.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
