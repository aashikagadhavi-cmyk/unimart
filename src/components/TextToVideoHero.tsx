import React, { useState, useEffect, useRef } from "react";
import * as Icons from "lucide-react";

interface PresetParagraph {
  id: string;
  label: string;
  icon: string;
  text: string;
  camera: string;
  narrator: string;
  themeColor: string;
  imageUrl: string;
}

export const TextToVideoHero: React.FC = () => {
  const PRESETS: PresetParagraph[] = [
    {
      id: "mumbai-cyber",
      label: "Mumbai Cyberpunk Chase",
      icon: "Sparkles",
      text: "A sleek robotic cinematic sequence. Cyberpunk hover-cycles racing through neon-lit futuristic street channels of Mumbai under heavy monsoonal downpour, reflecting vibrant purple and pink luminescent street ads on high-tech tarmac.",
      camera: "Dynamic Monsoonal Action Pan",
      narrator: "Priya (Warm Commercial Accent)",
      themeColor: "from-fuchsia-500 to-indigo-500",
      imageUrl: "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "rome-dawn",
      label: "Ancient Rome Dawn",
      icon: "Compass",
      text: "High-fidelity historical reconstruction. A magnificent golden aerial drone sweep over the Roman Colosseum at dawn, with hyper-realistic volumetric dust motes filtering through sunbeams and crowds cheering inside golden mist.",
      camera: "Wide Panoramic Crane Zoom",
      narrator: "Marcus (Authoritative Epic Tone)",
      themeColor: "from-amber-500 to-amber-700",
      imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "martian-port",
      label: "Martian Spaceport Launch",
      icon: "Orbit",
      text: "Cinematic sci-fi masterpiece. A heavy-duty stellar freight starship warming up orange thruster exhausts on a dusty Martian launchpad. Solar plasma storms sweeping red iron rust across solar array networks under dual moons.",
      camera: "Steady Low-Angle Elevation Track",
      narrator: "David (Deep Sovereign Vocal)",
      themeColor: "from-orange-500 to-red-600",
      imageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "ring-biometrics",
      label: "Premium Tech Smart Ring",
      icon: "Smartphone",
      text: "Ultra-premium consumer product commercial. Macro close-up tracking shot rotating around a luxury black titanium smart ring, radiating subtle pulsing laser beams to showcase biometric heatmaps and cardiovascular telemetry.",
      camera: "Slow Macroscopic Orbital Rotation",
      narrator: "Sonia (Sleek Luxury Voice)",
      themeColor: "from-cyan-400 to-blue-500",
      imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const [activePresetId, setActivePresetId] = useState<string>("mumbai-cyber");
  const [customText, setCustomText] = useState<string>(PRESETS[0].text);
  const [selectedCamera, setSelectedCamera] = useState<string>(PRESETS[0].camera);
  const [selectedNarrator, setSelectedNarrator] = useState<string>(PRESETS[0].narrator);
  const [selectedAspect, setSelectedAspect] = useState<string>("16:9");
  
  // Generation state machine
  const [isRendering, setIsRendering] = useState<boolean>(false);
  const [renderStep, setRenderStep] = useState<number>(0);
  const [renderLogs, setRenderLogs] = useState<string[]>([]);
  const [renderFinished, setRenderFinished] = useState<boolean>(false);
  const [progressWidth, setProgressWidth] = useState<number>(0);

  // Video play state triggers
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [videoTime, setVideoTime] = useState<number>(0);

  // Subtitle synchronization state
  const [subtitle, setSubtitle] = useState<string>("");

  // Refs for tracking animation loops
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Synchronize when preset is selected
  const handleSelectPreset = (preset: PresetParagraph) => {
    setActivePresetId(preset.id);
    setCustomText(preset.text);
    setSelectedCamera(preset.camera);
    setSelectedNarrator(preset.narrator);
    
    // Reset pipeline state
    setIsRendering(false);
    setRenderFinished(false);
    setRenderLogs([]);
    setRenderStep(0);
    setProgressWidth(0);
  };

  // Run the Generative AI Model Sandbox Pipeline
  const startGenerationPipeline = () => {
    if (isRendering) return;
    
    setIsRendering(true);
    setRenderFinished(false);
    setRenderStep(1);
    setProgressWidth(5);
    setRenderLogs(["[SYSTEM_PIPELINE] Initializing generative video-sync pipeline on nodes in Mumbai (BOM-1)..."]);

    // Delay steps to simulate heavy AI workloads
    setTimeout(() => {
      setRenderStep(2);
      setProgressWidth(25);
      setRenderLogs((prev) => [
        ...prev,
        `[TEXT_ANALYSIS] Parsed paragraph text: "${customText.substring(0, 52)}..."`,
        `[KEYWORDS] Identified token values: Character Consistency, Camera Path: ${selectedCamera}, Narrator Match: ${selectedNarrator}`,
      ]);
    }, 700);

    setTimeout(() => {
      setRenderStep(3);
      setProgressWidth(48);
      setRenderLogs((prev) => [
        ...prev,
        `[PHYSICS_MODEL] Generating consistent multi-frame temporal vectors with index: Eunimart-VidGen-v4.5`,
        `[3D_MESH] Grounding physics coordinate matrices. Initializing camera trajectory tracker: ${selectedCamera}`,
      ]);
    }, 1500);

    setTimeout(() => {
      setRenderStep(4);
      setProgressWidth(75);
      setRenderLogs((prev) => [
        ...prev,
        `[VOICE_SYNTHESIS] Rendering low-latency speech matching '${selectedNarrator}' voice-timbre model...`,
        `[LIP_SYNC] Adjusting spatial face warp grids for dynamic lip-conformance validation...`,
      ]);
    }, 2200);

    setTimeout(() => {
      setRenderStep(5);
      setProgressWidth(100);
      setIsRendering(false);
      setRenderFinished(true);
      setRenderLogs((prev) => [
        ...prev,
        `[SUCCESS 200 OK] 4K Cinematic MP4 container stitched and cached in securely encrypted air-gapped node storage!`,
      ]);
    }, 3200);
  };

  // Simulated player playback ticker
  useEffect(() => {
    if (isPlaying && renderFinished) {
      timerRef.current = setInterval(() => {
        setVideoTime((prev) => {
          const next = prev + 0.1;
          return next > 8 ? 0 : next;
        });
      }, 100);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, renderFinished]);

  // Synchronize subtitles matching videoTime
  useEffect(() => {
    if (!renderFinished) {
      setSubtitle("Enter written statement and ignite 'Generate Video' to play visual sandbox.");
      return;
    }
    
    const words = customText.split(" ");
    const sectionIndex = Math.floor((videoTime / 8) * 4);
    
    if (sectionIndex === 0) {
      setSubtitle(words.slice(0, Math.floor(words.length * 0.25)).join(" "));
    } else if (sectionIndex === 1) {
      setSubtitle(words.slice(Math.floor(words.length * 0.25), Math.floor(words.length * 0.5)).join(" "));
    } else if (sectionIndex === 2) {
      setSubtitle(words.slice(Math.floor(words.length * 0.5), Math.floor(words.length * 0.75)).join(" "));
    } else {
      setSubtitle(words.slice(Math.floor(words.length * 0.75)).join(" "));
    }
  }, [videoTime, customText, renderFinished]);

  // Resolve icons dynamically
  const getIcon = (iconName: string, className: string = "w-4 h-4") => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.Sparkles className={className} />;
  };

  return (
    <div className="bg-[#090d16] border border-slate-800 rounded-3xl overflow-hidden p-6 shadow-2xl relative space-y-6" id="text-to-video-card-container">
      
      {/* Decorative backdrop glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-44 h-44 bg-purple-500/10 rounded-full blur-[90px] pointer-events-none"></div>

      {/* Widget Header bar */}
      <div className="flex items-center justify-between border-b border-slate-900 pb-4 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></div>
          <p className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">
            Text-to-Video Studio AI Sandbox
          </p>
        </div>
        <span className="text-[9px] font-bold font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-400/25 px-2 py-0.5 rounded">
          VidGen-v4.5 Engine
        </span>
      </div>

      {/* Presets Horizontal Selector */}
      <div className="space-y-2 relative z-10">
        <div className="flex items-center justify-between">
          <label className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">
            Choose Written Paragraph Presets Or Write Custom Text Below
          </label>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {PRESETS.map((p) => {
            const isSel = p.id === activePresetId;
            return (
              <button
                key={p.id}
                onClick={() => handleSelectPreset(p)}
                className={`py-2 px-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                  isSel
                    ? "bg-gradient-to-br from-slate-900 to-[#101726] border-blue-500/50 text-white shadow"
                    : "bg-slate-950/40 border-slate-900 text-slate-400 hover:text-slate-200 hover:border-slate-800"
                }`}
                id={`preset-btn-${p.id}`}
              >
                <div className="flex items-center gap-1.5">
                  <div className={`p-1 rounded-md ${isSel ? "bg-blue-500/25 text-blue-400" : "bg-slate-900 text-slate-500"}`}>
                    {getIcon(p.icon, "w-3 h-3")}
                  </div>
                  <span className="text-[9px] font-bold tracking-tight block truncate md:w-24">
                    {p.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Paragraph Editor Field */}
      <div className="space-y-1.5 relative z-10">
        <label className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">
          Paragraph written statement (Translate directly to Video blocks)
        </label>
        <div className="relative">
          <textarea
            value={customText}
            onChange={(e) => {
              setCustomText(e.target.value);
              setActivePresetId("custom");
            }}
            placeholder="Write a detailed descriptive paragraph story here..."
            className="w-full h-24 bg-slate-950 border border-slate-850 focus:border-blue-500 rounded-2xl p-3.5 text-xs text-white leading-relaxed focus:outline-none focus:ring-1 focus:ring-blue-500 scrollbar-thin resize-none font-sans"
            id="paragraph-text-area"
          />
          <div className="absolute bottom-2.5 right-3 text-[9px] text-slate-500 font-mono">
            {customText.length} characters
          </div>
        </div>
      </div>

      {/* Advanced Directives Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 relative z-10">
        <div className="space-y-1">
          <label className="text-[9px] font-mono text-slate-500 uppercase block">Camera Trajectory</label>
          <select
            value={selectedCamera}
            onChange={(e) => setSelectedCamera(e.target.value)}
            className="w-full bg-slate-950 border border-slate-850 text-slate-200 rounded-xl px-2.5 py-2 text-[11px] focus:outline-none focus:border-blue-500 cursor-pointer text-ellipsis overflow-hidden font-sans"
          >
            <option value="Dynamic Monsoonal Action Pan">Dynamic Pan</option>
            <option value="Wide Panoramic Crane Zoom">Panoramic Crane Wide</option>
            <option value="Steady Low-Angle Elevation Track">Low-Angle Elevator</option>
            <option value="Slow Macroscopic Orbital Rotation">Macro Orbit Spin</option>
            <option value="Hyper-Fast Vertigo Dolly Shock">Vertigo Zoom Pan</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-[9px] font-mono text-slate-500 uppercase block">AI Voice Narrator</label>
          <select
            value={selectedNarrator}
            onChange={(e) => setSelectedNarrator(e.target.value)}
            className="w-full bg-slate-950 border border-slate-850 text-slate-200 rounded-xl px-2.5 py-2 text-[11px] focus:outline-none focus:border-blue-500 cursor-pointer text-ellipsis overflow-hidden font-sans"
          >
            <option value="Priya (Warm Commercial Accent)">Priya (Warm IN)</option>
            <option value="Marcus (Authoritative Epic Tone)">Marcus (Epic UK)</option>
            <option value="David (Deep Sovereign Vocal)">David (Sovereign US)</option>
            <option value="Sonia (Sleek Luxury Voice)">Sonia (Luxury Voice)</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-[9px] font-mono text-slate-500 uppercase block">Render Aspect Ratio</label>
          <div className="grid grid-cols-3 gap-1 h-[34px]">
            {["16:9", "9:16", "1:1"].map((asp) => (
              <button
                key={asp}
                type="button"
                onClick={() => setSelectedAspect(asp)}
                className={`text-[9px] font-mono rounded-lg font-bold border transition-all cursor-pointer flex items-center justify-center gap-1 ${
                  selectedAspect === asp
                    ? "bg-blue-600/20 text-blue-400 border-blue-500/50"
                    : "bg-slate-950 border-slate-850 text-slate-400 hover:text-slate-200"
                }`}
              >
                <Icons.Maximize2 className="w-2.5 h-2.5" />
                {asp}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Trigger button & Progress strip */}
      <div className="space-y-3 relative z-10">
        <button
          onClick={startGenerationPipeline}
          disabled={isRendering}
          className={`w-full py-3.5 bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-400 text-white rounded-xl font-extrabold text-xs transition-all shadow-lg hover:shadow-cyan-500/10 flex items-center justify-center gap-2 cursor-pointer ${
            isRendering ? "opacity-30 cursor-wait animate-pulse" : "hover:scale-[1.01]"
          }`}
          id="btn-trigger-video-render"
        >
          <Icons.Video className="w-4.5 h-4.5" />
          {isRendering ? "Active AI Deep Rendering Frame Seeds..." : "Synthesize Paragraph to Video"}
        </button>

        {/* Loading Progress Slider */}
        {isRendering && (
          <div className="space-y-1">
            <div className="flex justify-between items-center text-[9px] font-mono text-slate-400 px-1">
              <span className="flex items-center gap-1">
                <Icons.Loader2 className="w-2.5 h-2.5 text-blue-400 animate-spin" />
                Synthesizing physical keyframe sequences...
              </span>
              <span>{Math.round(progressWidth)}% Complete</span>
            </div>
            <div className="w-full h-1 bg-slate-950 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 transition-all duration-300 rounded-full"
                style={{ width: `${progressWidth}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Video Player & Terminal Display Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 pt-2 border-t border-slate-900">
        
        {/* Left Side: Real-time Visual Compiler Monitor */}
        <div className="bg-slate-950 border border-slate-900 rounded-2xl p-4 flex flex-col justify-between min-h-[200px] h-full">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-900 pb-2 text-[9px] font-mono text-slate-500">
              <span className="uppercase">Model Compilation Streams</span>
              <span className="text-blue-400">gRPC BOM-1 Region</span>
            </div>

            <div className="font-mono text-[9px] leading-relaxed text-slate-350 space-y-2 h-32 overflow-y-auto scrollbar-none">
              {renderLogs.length > 0 ? (
                renderLogs.map((log, idx) => {
                  let color = "text-slate-300";
                  if (log.includes("[SYSTEM")) color = "text-indigo-400";
                  if (log.includes("[SUCCESS")) color = "text-emerald-400 font-bold";
                  if (log.includes("[TEXT_ANALYSIS")) color = "text-cyan-400";
                  return (
                    <p key={idx} className={`${color} animate-fadeIn`}>
                      &gt; {log}
                    </p>
                  );
                })
              ) : (
                <span className="text-slate-600 block text-center pt-8 italic">
                  Eunimart neural parser compilation pipeline waiting... Write a paragraph above and click Synthesize to inspect deep vector returns.
                </span>
              )}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-900 flex justify-between items-center text-[8px] font-mono text-slate-500">
            <span className="flex items-center gap-1">
              <span className={`w-1.5 h-1.5 rounded-full ${isRendering ? "bg-amber-400 animate-ping" : "bg-emerald-500 animate-pulse"}`}></span>
              Status: {isRendering ? "RENDERING" : "STABLE IDLE"}
            </span>
            <span>Port: Local Node 3000</span>
          </div>
        </div>

        {/* Right Side: Visualizing Player output */}
        <div className="bg-slate-950 border border-slate-900 rounded-2xl relative overflow-hidden flex flex-col justify-between h-[200px]" id="visual-render-player">
          {/* Subtle Aspect Ratio wrapper adjustment representation */}
          <div className="absolute inset-0 z-0 bg-[#0a0e1a]"></div>

          {/* Real-time dynamic visual graphics canvas drawing stylized simulations of the preset selected! */}
          <div className="flex-1 relative z-10 flex items-center justify-center p-3 overflow-hidden select-none">
            {renderFinished ? (
              <div className="w-full h-full relative flex items-center justify-center">
                
                {/* Cyberpunk Mumbai scene */}
                {activePresetId === "mumbai-cyber" && (
                  <div className="absolute inset-0 bg-[#06040d] overflow-hidden flex items-center justify-center">
                    <img src={PRESETS[0].imageUrl} alt="Mumbai Cyberpunk Chase" className="absolute inset-0 w-full h-full object-cover opacity-50 select-none pointer-events-none" referrerPolicy="no-referrer" />
                    {/* Sliding Monsoon light beams */}
                    <div className="absolute inset-0 opacity-40">
                      <div className="absolute w-[1px] h-full bg-indigo-500/70 left-10 transform -rotate-12 animate-pulse" style={{ animationDuration: "1.2s" }}></div>
                      <div className="absolute w-[1px] h-full bg-pink-500/60 left-28 transform -rotate-12 animate-pulse" style={{ animationDuration: "0.8s" }}></div>
                      <div className="absolute w-[1px] h-full bg-cyan-400/80 left-44 transform -rotate-12 animate-pulse" style={{ animationDuration: "1.5s" }}></div>
                      <div className="absolute w-[1.5px] h-full bg-purple-500/75 left-64 transform -rotate-12 animate-pulse" style={{ animationDuration: "2s" }}></div>
                    </div>
                    {/* Animated Neon advertisements */}
                    <div className="absolute top-2 left-2 bg-pink-600/10 border border-pink-500/30 text-pink-500 text-[6px] font-mono px-1 py-0.5 rounded tracking-widest animate-pulse">
                      MUMBAI CORE AI
                    </div>
                    <div className="absolute bottom-16 right-4 bg-cyan-600/10 border border-cyan-400/30 text-cyan-400 text-[6px] font-mono px-1 py-0.5 rounded tracking-widest animate-pulse" style={{ animationDuration: "1.8s" }}></div>

                    {/* Vector outline hover bike racing */}
                    <svg className="w-36 h-20 text-purple-400 overflow-visible mt-2 relative z-10" viewBox="0 0 100 50">
                      <path
                        d="M 10,25 Q 35,10 65,30 T 90,20"
                        fill="none"
                        stroke="#8B5CF6"
                        strokeWidth="1.5"
                        strokeDasharray="200"
                        className="animate-pulse"
                      />
                      {/* Bike visual marker */}
                      <g className="animate-bounce" style={{ animationDuration: "2s" }}>
                        <rect x="35" y="16" width="18" height="6" rx="2" fill="#EC4899" className="opacity-90 shadow-pink" />
                        <circle cx="53" cy="19" r="2.5" fill="#22D3EE" className="animate-ping" />
                        <line x1="30" y1="19" x2="35" y2="19" stroke="#EC4899" strokeWidth="1" />
                      </g>
                    </svg>
                  </div>
                )}

                {/* Ancient Rome Dawn scene */}
                {activePresetId === "rome-dawn" && (
                  <div className="absolute inset-0 bg-[#0c0906] overflow-hidden flex items-center justify-center">
                    <img src={PRESETS[1].imageUrl} alt="Ancient Rome dawn Colosseum" className="absolute inset-0 w-full h-full object-cover opacity-50 select-none pointer-events-none" referrerPolicy="no-referrer" />
                    {/* Volumetric Sunburst rotating */}
                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-amber-500/20 to-transparent"></div>
                    <div className="absolute w-32 h-32 rounded-full bg-amber-400/10 blur-[30px] -top-10 left-12 animate-pulse"></div>

                    {/* Roman Colosseum vector mesh parallax */}
                    <svg className="w-40 h-24 text-amber-600/60 mt-4 overflow-visible relative z-10" viewBox="0 0 120 60">
                      {/* Background arches */}
                      <path d="M 10,38 H 110 M 15,38 L 15,18 Q 30,8 45,18 L 45,38 M 45,38 L 45,14 Q 60,6 75,14 L 75,38 M 75,38 L 75,18 Q 90,8 105,18 L 105,38" fill="none" stroke="currentColor" strokeWidth="0.75" />
                      {/* Foreground mesh line */}
                      <path d="M 0,44 Q 60,18 120,44" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
                      {/* Camera sweeping light lines */}
                      <line x1="40" y1="5" x2="80" y2="55" stroke="#FBBF24" strokeWidth="0.5" strokeDasharray="3 3" className="animate-pulse" />
                    </svg>
                  </div>
                )}

                {/* Martian Spaceport Launch scene */}
                {activePresetId === "martian-port" && (
                  <div className="absolute inset-0 bg-[#0f0402] overflow-hidden flex items-center justify-center">
                    <img src={PRESETS[2].imageUrl} alt="Martian Spaceport Launch" className="absolute inset-0 w-full h-full object-cover opacity-50 select-none pointer-events-none" referrerPolicy="no-referrer" />
                    {/* Atmosphere moons */}
                    <div className="absolute top-3 left-10 w-4 h-4 rounded-full bg-slate-400/20 border border-slate-500/25"></div>
                    <div className="absolute top-5 left-16 w-1.5 h-1.5 rounded-full bg-amber-500/10"></div>
                    <div className="absolute w-44 h-44 rounded-full bg-red-600/5 blur-[40px] bottom-[-20px] left-[-30px]"></div>

                    {/* Floating space dust particle simulation */}
                    <div className="absolute inset-0 opacity-40">
                      <div className="absolute w-1 h-1 bg-orange-400/90 rounded-full top-8 left-16 animate-ping" style={{ animationDuration: "2.5s" }}></div>
                      <div className="absolute w-1 h-3 bg-red-500/70 rounded-full top-24 left-40 animate-pulse"></div>
                    </div>

                    {/* Freight starship thruster vector */}
                    <svg className="w-32 h-20 text-orange-500/80 overflow-visible mt-2 relative z-10" viewBox="0 0 100 50">
                      {/* Starship layout outline */}
                      <polygon points="50,10 62,35 38,35" fill="none" stroke="#EA580C" strokeWidth="1.5" />
                      {/* Dynamic hot gas fire emission waves code */}
                      <path
                        d="M 44,35 Q 50,48 56,35"
                        fill="none"
                        stroke="#EF4444"
                        strokeWidth="2"
                        className="animate-bounce"
                      />
                      <path
                        d="M 40,35 Q 50,55 60,35"
                        fill="none"
                        stroke="#F97316"
                        strokeWidth="1"
                        className="animate-pulse"
                      />
                    </svg>
                  </div>
                )}

                {/* Premium Tech Ring */}
                {activePresetId === "ring-biometrics" && (
                  <div className="absolute inset-0 bg-[#030712] overflow-hidden flex items-center justify-center">
                    <img src={PRESETS[3].imageUrl} alt="Premium Tech Smart Ring" className="absolute inset-0 w-full h-full object-cover opacity-50 select-none pointer-events-none" referrerPolicy="no-referrer" />
                    {/* Heatmap overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-slate-950/60"></div>
                    <div className="absolute w-40 h-40 rounded-full bg-indigo-500/5 border border-indigo-500/10"></div>

                    {/* Rotating luxury ring mockup */}
                    <svg className="w-24 h-24 text-cyan-400 overflow-visible mt-1 relative z-10" viewBox="0 0 100 100">
                      {/* Orbit laser circle */}
                      <circle cx="50" cy="50" r="30" fill="none" stroke="#2563EB" strokeWidth="0.5" strokeDasharray="5 5" className="animate-spin" style={{ animationDuration: "12s" }} />
                      <ellipse cx="50" cy="50" rx="36" ry="12" fill="none" stroke="#06B6D4" strokeWidth="1.25" className="animate-pulse" />
                      {/* Biometric node flashing dots */}
                      <circle cx="50" cy="38" r="4" fill="#10B981" className="animate-ping" style={{ animationDuration: "1.8s" }} />
                      <circle cx="50" cy="38" r="1.5" fill="#059669" />
                      <circle cx="50" cy="62" r="1.5" fill="#3B82F6" />
                    </svg>
                  </div>
                )}

                {/* Generic Custom render view if they type own text */}
                {activePresetId === "custom" && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0c0d16] to-[#04050a] flex flex-col justify-center items-center text-center p-4">
                    <Icons.VideoOff className="w-8 h-8 text-slate-500 mb-2 animate-bounce" />
                    <p className="text-[10px] text-cyan-400 font-mono font-bold uppercase tracking-wider">Custom Prompt Rendering</p>
                    <p className="text-[9px] text-slate-400 leading-normal max-w-[180px] mt-1 italic">
                      "{customText.substring(0, 50)}..."
                    </p>
                  </div>
                )}

                {/* Playback Controls Layer overlay */}
                <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur border border-slate-900 rounded-xl px-2.5 py-1.5 flex items-center justify-between z-20">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Icons.Pause className="w-3.5 h-3.5" /> : <Icons.Play className="w-3.5 h-3.5 text-blue-400" />}
                  </button>

                  {/* Scrubber slider line */}
                  <div className="flex-1 mx-2.5 h-1 bg-slate-800 rounded-full overflow-hidden relative">
                    <div
                      className="absolute left-0 top-0 h-full bg-blue-500"
                      style={{ width: `${(videoTime / 8) * 100}%` }}
                    ></div>
                  </div>

                  <span className="text-[8px] font-mono text-slate-400">
                    0:0{Math.floor(videoTime)} / 0:08
                  </span>
                </div>

                {/* Moving Audio Waveform overlay */}
                {isPlaying && (
                  <div className="absolute top-2 right-2 flex items-end gap-[2px] h-3 z-20 bg-slate-950/60 p-1 rounded border border-slate-800">
                    <div className="w-[1.5px] bg-cyan-400 [animation-delay:0.1s] animate-pulse h-full"></div>
                    <div className="w-[1.5px] bg-cyan-400 [animation-delay:0.4s] animate-pulse h-3/4"></div>
                    <div className="w-[1.5px] bg-cyan-400 [animation-delay:0.2s] animate-pulse h-1/2"></div>
                    <div className="w-[1.5px] bg-cyan-400 [animation-delay:0.7s] animate-pulse h-5/6"></div>
                    <div className="w-[1.5px] bg-cyan-400 [animation-delay:0.5s] animate-pulse h-1/3"></div>
                  </div>
                )}

              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-4">
                <div className="relative mb-3 flex items-center justify-center">
                  <Icons.Film className="w-10 h-10 text-slate-700" />
                  <Icons.Sparkles className="w-5 h-5 text-indigo-500 absolute -top-1 -right-1 animate-pulse" />
                </div>
                <p className="text-[10.5px] text-slate-350 font-bold uppercase tracking-wider">
                  Visual Renderer Ready
                </p>
                <p className="text-[9px] text-slate-500 max-w-[180px] mt-1 font-sans">
                  Choose a preset or write your paragraph script above, then press "Synthesize" to initiate the deep neural rendering stream.
                </p>
              </div>
            )}
          </div>

          {/* Subtitles Overlay bottom section */}
          <div className="bg-slate-950 px-3.5 py-2.5 border-t border-slate-900 text-center relative z-10 min-h-[44px] flex items-center justify-center">
            <p className="text-[10px] text-slate-300 italic font-medium leading-relaxed font-sans max-w-[240px] truncate" title={subtitle}>
              "{subtitle}"
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
