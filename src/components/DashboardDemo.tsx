import React, { useState, useEffect } from "react";
import { 
  BarChart3, Cpu, Network, Key, Mail, MessageSquareCode, Shield, Users, 
  Plus, Check, Play, Settings, RefreshCw, Layers, Sparkles, Send, HardDrive, 
  Clock, LogOut, CheckCircle2, ChevronRight, HelpCircle, FileText, AlertCircle, Trash2
} from "lucide-react";

interface DashboardProps {
  userEmail?: string;
  onLogout: () => void;
}

interface WorkflowNode {
  id: string;
  name: string;
  type: "trigger" | "action" | "output";
  status: "idle" | "running" | "success" | "error";
  description: string;
}

export const DashboardDemo: React.FC<DashboardProps> = ({ userEmail = "enterprise.partner@eunimart.in", onLogout }) => {
  const [activeTab, setActiveTab] = useState<"overview" | "workflow" | "api" | "support" | "billing">("overview");
  
  // Real-time counter simulation states
  const [tokenBurn, setTokenBurn] = useState(2470530);
  const [apiRequests, setApiRequests] = useState(14890);
  const [conversionBoost, setConversionBoost] = useState(34.2);
  const [savingCost, setSavingCost] = useState(12840);
  
  // Workflow nodes state
  const [nodes, setNodes] = useState<WorkflowNode[]>([
    { id: "1", name: "Stripe Purchase Success", type: "trigger", status: "success", description: "Fires when customer buys any global items" },
    { id: "2", name: "AI Invoice Parser & OCR", type: "action", status: "idle", description: "Converts PDF invoices into structured JSON" },
    { id: "3", name: "CRM Contact Sync Platform", type: "action", status: "idle", description: "Updates profile scoring logic" },
    { id: "4", name: "Slack Deal Notification Bot", type: "output", status: "idle", description: "Informs administrative coordinators" }
  ]);
  const [isSimulatingWorkflow, setIsSimulatingWorkflow] = useState(false);

  // API keys configuration
  const [apiKeys, setApiKeys] = useState([
    { name: "Production Gateway Edge", key: "em_live_883a91b297fc9ce1", status: "active", rateLimit: 5000, created: "2026-03-01" },
    { name: "Staging Sandbox Portal", key: "em_test_bc92a83f12a02dd", status: "active", rateLimit: 1000, created: "2026-04-12" }
  ]);
  const [newKeyName, setNewKeyName] = useState("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Support Ticketing state
  const [tickets, setTickets] = useState([
    { id: "TK-902", title: "SAP Gateway latency issue", status: "In Progress", priority: "High", date: "2026-05-26" },
    { id: "TK-881", title: "Extend monthly API token allowance", status: "Resolved", priority: "Medium", date: "2026-05-15" }
  ]);
  const [newTicketTitle, setNewTicketTitle] = useState("");
  const [newTicketPriority, setNewTicketPriority] = useState("Medium");
  const [ticketMessage, setTicketMessage] = useState("");
  
  // Prediction forecasting models
  const [forecastHorizon, setForecastHorizon] = useState(60); // days
  const [modelType, setModelType] = useState<"temporal" | "ensemble" | "agent">("temporal");

  // Interaction logs (simulated stream)
  const [systemLogs, setSystemLogs] = useState<string[]>([
    "System Ready. Secure SOC-2 Cloud Container active.",
    "Initial connection established with Mumbai Gateway Mumbai-1.",
    "Secure validation tunnel: initialized CJS microservices."
  ]);

  // AI assistant interactions (Interactive chat specific to user commands)
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<Array<{ sender: "user" | "ai"; text: string; time: string }>>([
    { sender: "ai", text: "Welcome to the Eunimart AI Operations Hub. I am your specialized onboarding agent. Ask me about custom workflows, API tokens, security rules, or forecasting reports.", time: "19:27" }
  ]);

  // Periodic metric increment
  useEffect(() => {
    const timer = setInterval(() => {
      setTokenBurn(prev => prev + Math.floor(Math.random() * 85) + 5);
      if (Math.random() > 0.7) {
        setApiRequests(prev => prev + 1);
        setSavingCost(prev => prev + Math.floor(Math.random() * 2) + 1);
        
        // Add random system log
        const endpoints = ["/api/v1/commerce/price", "/api/v1/automation/reconcile", "/api/v1/documents/parse"];
        const chosenEndpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
        const latency = Math.floor(Math.random() * 45) + 5;
        const newLog = `[${new Date().toLocaleTimeString()}] 200 OK - ${chosenEndpoint} (${latency}ms)`;
        
        setSystemLogs(prev => {
          const next = [newLog, ...prev];
          return next.slice(0, 10);
        });
      }
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  // Simulate workflow automation sequence
  const startWorkflowSimulation = async () => {
    if (isSimulatingWorkflow) return;
    setIsSimulatingWorkflow(true);

    // Reset status to idle except for first node
    setNodes(prev => prev.map((n, i) => i === 0 ? { ...n, status: "success" } : { ...n, status: "idle" }));
    
    // Staggered status updates
    for (let index = 1; index < nodes.length; index++) {
      await new Promise(resolve => setTimeout(resolve, 1400));
      setNodes(prev => prev.map((n, i) => i === index ? { ...n, status: "running" } : n));
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      const coinFlip = Math.random() > 0.05;
      setNodes(prev => prev.map((n, i) => i === index ? { ...n, status: coinFlip ? "success" : "error" } : n));
    }
    
    setIsSimulatingWorkflow(false);
  };

  // Add customized workflow action node
  const addWorkflowNode = () => {
    const names = [
      "Custom SMS Alert", 
      "AI Summarizer Module", 
      "PostgreSQL Data Store", 
      "HubSpot CRM Sync Agent"
    ];
    const desc = [
      "Triggers rapid warnings to administrative lines",
      "Transforms logs into high-level C-Suite briefs",
      "Persists state variables securely",
      "Matches profile parameters automatically"
    ];
    const index = Math.min(nodes.length, names.length - 1);
    
    // insert inside node list
    const newNode: WorkflowNode = {
      id: String(nodes.length + 1),
      name: names[index] || `Agent Flow node #${nodes.length + 1}`,
      type: "action",
      status: "idle",
      description: desc[index] || "Additional server-side AI parsing operation layer"
    };

    setNodes([...nodes, newNode]);
    
    // System Log update
    setSystemLogs(prev => [`[${new Date().toLocaleTimeString()}] Pipeline node "${newNode.name}" dynamically compiled.`, ...prev]);
  };

  // Reset workflow sequence
  const resetWorkflow = () => {
    setNodes([
      { id: "1", name: "Stripe Purchase Success", type: "trigger", status: "success", description: "Fires when customer buys any global items" },
      { id: "2", name: "AI Invoice Parser & OCR", type: "action", status: "idle", description: "Converts PDF invoices into structured JSON" },
      { id: "3", name: "CRM Contact Sync Platform", type: "action", status: "idle", description: "Updates profile scoring logic" },
      { id: "4", name: "Slack Deal Notification Bot", type: "output", status: "idle", description: "Informs administrative coordinators" }
    ]);
  };

  const removeNode = (id: string) => {
    setNodes(nodes.filter(n => n.id !== id));
  };

  // Create API Key
  const handleCreateApiKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKeyName.trim()) return;
    const randomHex = Array.from({ length: 16 }, () => Math.floor(Math.random() * 16).toString(16)).join("");
    const newKey = {
      name: newKeyName,
      key: `em_live_${randomHex}`,
      status: "active",
      rateLimit: 1000,
      created: new Date().toISOString().split("T")[0]
    };
    setApiKeys([...apiKeys, newKey]);
    setNewKeyName("");
    
    setSystemLogs(prev => [`[${new Date().toLocaleTimeString()}] Created API key token: ${newKey.name}`, ...prev]);
  };

  // Copy Key mock
  const triggerCopy = (val: string) => {
    setCopiedKey(val);
    navigator.clipboard.writeText(val).catch(() => {});
    setTimeout(() => setCopiedKey(null), 1500);
  };

  // Revoke Key mock
  const revokeKey = (keyString: string) => {
    setApiKeys(apiKeys.filter(k => k.key !== keyString));
  };

  // Create Support Ticket
  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTicketTitle.trim()) return;
    const tkId = `TK-${Math.floor(Math.random() * 900) + 100}`;
    const newTk = {
      id: tkId,
      title: newTicketTitle,
      status: "In Progress",
      priority: newTicketPriority,
      date: new Date().toISOString().split("T")[0]
    };
    setTickets([newTk, ...tickets]);
    setNewTicketTitle("");
    setTicketMessage("");

    setSystemLogs(prev => [`[${new Date().toLocaleTimeString()}] Ticket logged: ${tkId} with ${newTicketPriority} urgency.`, ...prev]);

    // Async artificial response after 7 seconds
    setTimeout(() => {
      setSystemLogs(prev => [`[System Alert] Ticket ${tkId} assigned to Technical Coordinator: R. Kumar.`, ...prev]);
    }, 4000);
  };

  // Handles AI chatbot query
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setChatMessages(prev => [...prev, { sender: "user", text: userMsg, time: timeStr }]);
    setChatInput("");

    // Calculate smart intelligence answers
    let aiResponse = "";
    const lowerInput = userMsg.toLowerCase();
    
    if (lowerInput.includes("pricing") || lowerInput.includes("plan") || lowerInput.includes("cost")) {
      aiResponse = "Eunimart offers Starter ($299/mo), Professional ($1,200/mo), and fully managed Sovereign Enterprise Cloud levels mapping to custom corporate sizes with dedicated clusters.";
    } else if (lowerInput.includes("commerce") || lowerInput.includes("checkout") || lowerInput.includes("price")) {
      aiResponse = "Our AI Commerce platform applies real-time competitor time-series models to dynamic SKU price adjustments, yielding on average an 18% lift in checkout conversion levels safely.";
    } else if (lowerInput.includes("security") || lowerInput.includes("leak") || lowerInput.includes("privacy") || lowerInput.includes("soc2")) {
      aiResponse = "We implement air-gapped corporate servers ensuring complete compliance under SOC2 Type II, ISO-27001, and GDPR guidelines. No corporate records are sent online to train generic LLMs.";
    } else if (lowerInput.includes("api") || lowerInput.includes("key") || lowerInput.includes("sdk")) {
      aiResponse = "Navigate directly to our 'API Token Gateway' tab to create, rotate, and manage rate boundaries for edge integration tokens. Read our code snippets and connect using the '@eunimart/sdk' framework.";
    } else if (lowerInput.includes("workflow") || lowerInput.includes("agent") || lowerInput.includes("trigger")) {
      aiResponse = "With our No-Code pipeline visualizer, you can chain automated events—such as listening to incoming Stripe payloads, running natural Language document OCR analysis, and syncing database endpoints instantly.";
    } else {
      aiResponse = "Understood. The Eunimart Unified Platform stands ready to orchestrate these capabilities. Would you like to consult Founder & CEO Ratan Kumar at ratankumar@eunimart.in to schedule customized cloud setups?";
    }

    setTimeout(() => {
      setChatMessages(prev => [...prev, { sender: "ai", text: aiResponse, time: timeStr }]);
    }, 850);
  };

  // Dynamic values based on forecast simulator triggers
  const estimatedSavings = Math.round(savingCost * (forecastHorizon / 30) * (modelType === "ensemble" ? 1.4 : modelType === "agent" ? 1.8 : 1.1));
  const estimatedImpactPercent = Math.round(conversionBoost * (modelType === "agent" ? 1.6 : 1.1) * 10) / 10;

  return (
    <div className="w-full bg-[#070b13] text-slate-100 min-h-screen py-6 px-4 md:px-8 border-t border-slate-800" id="sandbox-demo-portal">
      {/* Dashboard Executive Header */}
      <div className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5Packed">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-xs font-mono font-semibold text-emerald-400 tracking-wider">LIVE SANDBOX DEMO ENVIRONMENT</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Eunimart Transformation Cloud
          </h1>
          <p className="text-xs text-slate-450 font-mono mt-1">
            Logged Client ID: <span className="text-slate-200">{userEmail}</span> | Authority Level: <span className="text-blue-400">Enterprise Admin</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="bg-slate-850 border border-slate-800 text-[11px] font-mono px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            UTC Time: 19:27
          </span>
          <button 
            onClick={onLogout}
            id="btn-logout-portal"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/30 border border-red-900/45 text-red-400 text-xs font-bold transition-all cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            Exit Portal
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Navigation panel */}
        <div className="lg:col-span-1 space-y-3">
          <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl p-4 space-y-1">
            <p className="text-[10px] uppercase tracking-wider font-mono text-slate-400 font-bold px-3 mb-3">Core Modules</p>
            
            <button
              onClick={() => setActiveTab("overview")}
              id="tab-overview"
              className={`w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "overview" 
                  ? "bg-gradient-to-r from-blue-600/30 to-purple-600/10 border-l-4 border-blue-500 text-white" 
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-850/50"
              }`}
            >
              <BarChart3 className="w-4 h-4 text-blue-400" />
              Intelligence Dashboard
            </button>

            <button
              onClick={() => setActiveTab("workflow")}
              id="tab-workflows"
              className={`w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "workflow" 
                  ? "bg-gradient-to-r from-blue-600/30 to-purple-600/10 border-l-4 border-blue-500 text-white" 
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-850/50"
              }`}
            >
              <Network className="w-4 h-4 text-purple-400" />
              Workflow Agent Builder
              <span className="text-[10px] bg-purple-500/10 text-purple-300 font-mono scale-90 px-1.5 py-0.5 rounded ml-auto">Sim</span>
            </button>

            <button
              onClick={() => setActiveTab("api")}
              id="tab-api-keys"
              className={`w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "api" 
                  ? "bg-gradient-to-r from-blue-600/30 to-purple-600/10 border-l-4 border-blue-500 text-white" 
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-850/50"
              }`}
            >
              <Key className="w-4 h-4 text-cyan-400" />
              API Token Gateway
            </button>

            <button
              onClick={() => setActiveTab("support")}
              id="tab-tickets"
              className={`w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "support" 
                  ? "bg-gradient-to-r from-blue-600/30 to-purple-600/10 border-l-4 border-blue-500 text-white" 
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-850/50"
              }`}
            >
              <Mail className="w-4 h-4 text-amber-400" />
              Support Ticketing
              <span className="w-2 h-2 rounded-full bg-amber-400 ml-auto animate-pulse"></span>
            </button>

            <button
              onClick={() => setActiveTab("billing")}
              id="tab-subscriptions"
              className={`w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === "billing" 
                  ? "bg-gradient-to-r from-blue-600/30 to-purple-600/10 border-l-4 border-blue-500 text-white" 
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-850/50"
              }`}
            >
              <Layers className="w-4 h-4 text-teal-400" />
              Sovereign Subscription
            </button>
          </div>

          {/* Quick Real-Time System Log Monitor console */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold">System Telemetry Log</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>
            <div className="space-y-2 h-36 overflow-y-auto font-mono text-[9px] text-slate-450 scrollbar-thin">
              {systemLogs.map((log, index) => (
                <div key={index} className="text-slate-400 border-l border-slate-850 pl-1">
                  <span className="text-blue-400 select-none">&gt;</span> {log}
                </div>
              ))}
            </div>
            <p className="text-[8px] font-mono text-slate-500 mt-2 text-right">Air-Gapped Node #BOM-CORE-26</p>
          </div>
        </div>

        {/* Tab display panel */}
        <div className="lg:col-span-3 space-y-6">

          {activeTab === "overview" && (
            <div className="space-y-6" id="dashboard-tab-overview">
              {/* Dynamic Counters Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-2xl relative overflow-hidden group">
                  <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">MONTHLY TOKEN BURNING</p>
                  <p className="text-xl md:text-2xl font-extrabold text-white mt-1 font-mono tracking-tight text-ellipsis overflow-hidden">
                    {tokenBurn.toLocaleString()}
                  </p>
                  <div className="absolute top-2 right-2 p-1 bg-blue-500/10 rounded-lg">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <div className="mt-2 text-[9px] text-emerald-400 font-mono flex items-center gap-1">
                    <span>↑ 14.8% delta</span>
                    <span className="text-slate-500">vs priority</span>
                  </div>
                </div>

                <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-2xl relative overflow-hidden">
                  <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Active API Requests</p>
                  <p className="text-xl md:text-2xl font-extrabold text-white mt-1 font-mono tracking-tight">
                    {apiRequests.toLocaleString()}
                  </p>
                  <div className="absolute top-2 right-2 p-1 bg-purple-500/10 rounded-lg">
                    <Cpu className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  <div className="mt-2 text-[9px] text-slate-400 font-mono">
                    SLA Status: <span className="text-emerald-400">99.98%</span>
                  </div>
                </div>

                <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-2xl relative overflow-hidden">
                  <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Dynamic conversion lift</p>
                  <p className="text-xl md:text-2xl font-extrabold text-emerald-400 mt-1 font-mono tracking-tight">
                    +{conversionBoost}%
                  </p>
                  <div className="absolute top-2 right-2 p-1 bg-emerald-500/10 rounded-lg">
                    <Network className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="mt-2 text-[9px] text-slate-400 font-mono">
                    Across 12 Global Channels
                  </div>
                </div>

                <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-2xl relative overflow-hidden">
                  <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">EST. Net Cost Saved</p>
                  <p className="text-xl md:text-2xl font-extrabold text-blue-400 mt-1 font-mono tracking-tight">
                    ${savingCost.toLocaleString()}
                  </p>
                  <div className="absolute top-2 right-2 p-1 bg-blue-500/10 rounded-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <div className="mt-2 text-[9px] text-slate-400 font-mono">
                    Based on manual flow cuts
                  </div>
                </div>
              </div>

              {/* Graphical representation / forecast model */}
              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 md:p-6 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-850 pb-4">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-purple-400" />
                      Cognitive Forecasting Canvas
                    </h3>
                    <p className="text-xs text-slate-400">Simulate business optimizations with time-series machine learning models.</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-slate-400 font-semibold mr-1">Forecast Range:</span>
                    <button 
                      onClick={() => setForecastHorizon(30)}
                      className={`px-2.5 py-1 text-[10px] font-bold rounded-lg transition-all ${forecastHorizon === 30 ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-300"}`}
                    >
                      30d
                    </button>
                    <button 
                      onClick={() => setForecastHorizon(60)}
                      className={`px-2.5 py-1 text-[10px] font-bold rounded-lg transition-all ${forecastHorizon === 60 ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-300"}`}
                    >
                      60d
                    </button>
                    <button 
                      onClick={() => setForecastHorizon(90)}
                      className={`px-2.5 py-1 text-[10px] font-bold rounded-lg transition-all ${forecastHorizon === 90 ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-300"}`}
                    >
                      90d
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Parameter sliders */}
                  <div className="col-span-1 space-y-4 bg-slate-950/40 p-4 border border-slate-850 rounded-xl">
                    <p className="text-xs font-mono font-bold uppercase text-slate-400">Time-Series Inputs</p>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-300">Model Selection:</span>
                      </div>
                      <select 
                        value={modelType}
                        onChange={(e) => setModelType(e.target.value as any)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-xs text-slate-200 mt-1 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        id="forecast-model-select"
                      >
                        <option value="temporal">Temporal Recurrent Model</option>
                        <option value="ensemble">Multi-Variable Ensemble</option>
                        <option value="agent">Autonomous AI agent loop</option>
                      </select>
                    </div>

                    <div className="space-y-1 pt-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-300">Target Segment Optimization:</span>
                      </div>
                      <label className="flex items-center gap-1.5 text-xs text-slate-300 mt-1 cursor-pointer">
                        <input type="checkbox" className="accent-blue-500" defaultChecked />
                        Include Dynamic Price Triggers
                      </label>
                      <label className="flex items-center gap-1.5 text-xs text-slate-300 cursor-pointer">
                        <input type="checkbox" className="accent-blue-500" defaultChecked />
                        Include Stock Replenishment Rules
                      </label>
                    </div>

                    <div className="border-t border-slate-850 pt-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Est. Added Commerce:</span>
                        <span className="font-mono text-emerald-400 font-bold">+{estimatedImpactPercent}% Close</span>
                      </div>
                      <div className="flex items-center justify-between text-xs mt-1">
                        <span className="text-slate-400">Est. Retained Savings:</span>
                        <span className="font-mono text-blue-400 font-bold">${estimatedSavings.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Graphic SVG Line Chart */}
                  <div className="col-span-1 md:col-span-2 bg-[#090e18] rounded-xl border border-slate-850 p-4 flex flex-col justify-between min-h-[220px]">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-slate-400 font-mono">Projection Trendline (Confidence: 95%)</span>
                      <span className="text-[10px] text-blue-400 font-mono">Baseline (Red) vs AI Enabled (Green)</span>
                    </div>

                    <div className="h-32 w-full mt-4 flex items-end relative">
                      {/* Grid background representation */}
                      <div className="absolute inset-x-0 bottom-0 top-0 grid grid-rows-4 pointer-events-none opacity-20">
                        <div className="border-b border-slate-700 w-full"></div>
                        <div className="border-b border-slate-700 w-full"></div>
                        <div className="border-b border-slate-700 w-full"></div>
                        <div className="border-b border-slate-700 w-full"></div>
                      </div>

                      {/* Line Chart drawing */}
                      <svg className="w-full h-full text-blue-500 overflow-visible" viewBox="0 0 400 120" id="svg-forecasting-chart">
                        {/* Red Baseline path */}
                        <path
                          d="M  0,95 Q  80,105 160,85 T 320,95 T 400,90"
                          fill="none"
                          stroke="#EF4444"
                          strokeWidth="2.5"
                          strokeDasharray="4 4"
                          className="opacity-55"
                        />
                        {/* Green AI line */}
                        <path
                          d={`M 0,95 Q 85,75 160,50 T 280,${forecastHorizon === 90 ? 20 : forecastHorizon === 60 ? 35 : 55} T 400,${forecastHorizon === 90 ? 10 : forecastHorizon === 60 ? 25 : 45}`}
                          fill="none"
                          stroke="#10B981"
                          strokeWidth="3.5"
                          className="transition-all duration-700"
                        />
                        {/* Active tooltip marker */}
                        <circle cx="280" cy={forecastHorizon === 90 ? "20" : forecastHorizon === 60 ? "35" : "55"} r="5" fill="#10B981" />
                        <g transform={`translate(240, ${forecastHorizon === 90 ? -12 : forecastHorizon === 60 ? 10 : 30})`}>
                          <rect width="90" height="22" rx="4" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
                          <text x="45" y="14" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle">
                            {forecastHorizon}d: +{estimatedImpactPercent}%
                          </text>
                        </g>
                      </svg>
                    </div>

                    <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono mt-2 pt-2 border-t border-slate-850">
                      <span>Now</span>
                      <span>Day 30</span>
                      <span>Day 60</span>
                      <span>Day 90 (Horizon Peak)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950/40 p-4 border border-slate-850 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-350 leading-relaxed">
                    <strong>Predictive Insight:</strong> Enabling the <span className="text-slate-200">Autonomous AI agent loop</span> model tracks competitor catalog parameters, yielding high volume multi-variant product distribution. Expected peak savings of up to <span className="text-emerald-400 font-bold">${(estimatedSavings * 1.5).toLocaleString()}</span> can be secured securely by routing data directly using the edge SDK.
                  </p>
                </div>
              </div>

              {/* Direct Sandbox Support Agent Chat Panel */}
              <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 md:p-6 space-y-4">
                <div className="border-b border-slate-850 pb-3">
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <MessageSquareCode className="w-4 h-4 text-cyan-400" />
                    AI Platform Assistant Onboarding
                  </h3>
                  <p className="text-xs text-slate-400">Have general model configuration questions? Converse with our trained operator node below.</p>
                </div>

                {/* Chat Message Lists */}
                <div className="space-y-3 h-52 overflow-y-auto p-3 bg-slate-950/50 rounded-xl border border-slate-850" id="chat-scroller">
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                      <div className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                        msg.sender === "user" 
                          ? "bg-blue-600/90 text-white rounded-tr-none" 
                          : "bg-slate-850/80 border border-slate-800 text-slate-200 rounded-tl-none"
                      }`}>
                        {msg.text}
                      </div>
                      <span className="text-[9px] font-mono text-slate-500 mt-1 px-1">{msg.time}</span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask about dynamic price formulas, API keys rate limits..."
                    className="flex-1 bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl p-2.5 text-xs text-slate-200"
                    id="assistant-chat-input"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-blue-600 hover:bg-blue-550 active:scale-95 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                    id="assistant-chat-submit"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Send
                  </button>
                </form>
              </div>
            </div>
          )}

          {activeTab === "workflow" && (
            <div className="space-y-6" id="dashboard-tab-workflows">
              <div className="bg-slate-900/40 border border-slate-800 p-4 md:p-6 rounded-2xl">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-850 pb-4 mb-6">
                  <div>
                    <h2 className="text-base font-bold text-white flex items-center gap-2">
                      <Network className="w-5 h-5 text-purple-400" />
                      Visual Agent Execution Simulator
                    </h2>
                    <p className="text-xs text-slate-400">Click to compile steps, and trigger active event sequences to trace failures or latency blocks.</p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={addWorkflowNode}
                      className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
                      id="btn-add-node"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add Node Step
                    </button>
                    <button
                      onClick={resetWorkflow}
                      className="px-3 py-1.5 bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-400 text-xs font-semibold rounded-lg hover:text-slate-200 transition-all"
                      id="btn-reset-nodes"
                    >
                      Reset System
                    </button>
                    <button
                      onClick={startWorkflowSimulation}
                      disabled={isSimulatingWorkflow}
                      className={`px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shadow shadow-purple-500/10 cursor-pointer ${
                        isSimulatingWorkflow ? "opacity-50 cursor-not-allowed" : "hover:opacity-95"
                      }`}
                      id="btn-trigger-simulation"
                    >
                      <Play className="w-3.5 h-3.5" />
                      {isSimulatingWorkflow ? "Executing..." : "Start Simulation"}
                    </button>
                  </div>
                </div>

                {/* Workflow pipeline map visual node list */}
                <div className="space-y-4 relative">
                  {nodes.map((node, i) => (
                    <div key={node.id} className="relative">
                      {/* Connection Line */}
                      {i < nodes.length - 1 && (
                        <div className="absolute left-8 top-16 bottom-0 w-0.5 border-l-2 border-dashed border-slate-800 z-0"></div>
                      )}

                      <div className={`relative z-10 bg-slate-950/80 border rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300 ${
                        node.status === "running" ? "border-purple-500 ring-2 ring-purple-500/20" :
                        node.status === "success" ? "border-emerald-500/50 bg-emerald-950/5" :
                        node.status === "error" ? "border-red-500/50 bg-red-950/5" : "border-slate-850"
                      }`} id={`node-${node.id}`}>
                        <div className="flex items-center gap-4">
                          <div className={`w-8 h-8 rounded-xl font-mono text-xs font-bold flex items-center justify-center ${
                            node.type === "trigger" ? "bg-blue-500/15 text-blue-400 border border-blue-500/20" :
                            node.type === "action" ? "bg-purple-500/15 text-purple-400 border border-purple-500/20" :
                            "bg-teal-500/15 text-teal-400 border border-teal-500/20"
                          }`}>
                            {node.id}
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-xs font-extrabold text-white">{node.name}</h4>
                              <span className={`text-[9px] px-1.5 py-0.5 rounded uppercase font-mono font-bold ${
                                node.type === "trigger" ? "bg-blue-500/10 text-blue-400" :
                                node.type === "action" ? "bg-purple-500/10 text-purple-400" :
                                "bg-teal-500/10 text-teal-340"
                              }`}>
                                {node.type}
                              </span>
                            </div>
                            <p className="text-xs text-slate-400 mt-1">{node.description}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                          {node.status === "idle" && (
                            <span className="text-[10px] text-slate-500 font-mono">Idle Sequence</span>
                          )}
                          {node.status === "running" && (
                            <span className="text-[10px] text-purple-400 font-mono flex items-center gap-1.5">
                              <RefreshCw className="w-3 h-3 animate-spin" />
                              Active Execution...
                            </span>
                          )}
                          {node.status === "success" && (
                            <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                              <Check className="w-3.5 h-3.5" />
                              Validated (200 OK)
                            </span>
                          )}
                          {node.status === "error" && (
                            <span className="text-[10px] text-red-400 font-mono flex items-center gap-1">
                              Exception Alerted
                            </span>
                          )}

                          {nodes.length > 3 && (
                            <button
                              onClick={() => removeNode(node.id)}
                              className="text-slate-500 hover:text-red-400 p-1 rounded-lg transition-colors"
                              title="Delete Step Node"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-4 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-405">
                  <p>Current Total Latency Limit: <strong>3.2s Max</strong></p>
                  <p>Autonomous Safeguard: <strong className="text-emerald-400">Armed & Compliant</strong></p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "api" && (
            <div className="space-y-6" id="dashboard-tab-api">
              <div className="bg-slate-900/40 border border-slate-800 p-4 md:p-6 rounded-2xl">
                <h3 className="text-base font-bold text-white mb-2">Platform Access credentials</h3>
                <p className="text-xs text-slate-450 mb-6 font-mono">Generate and secure public rate metrics for direct server-side connection integrations.</p>

                {/* Create Key Form */}
                <form onSubmit={handleCreateApiKey} className="mb-8 p-4 bg-slate-950/40 border border-slate-850 rounded-xl flex flex-col sm:flex-row gap-3 items-end">
                  <div className="flex-1 space-y-1 w-full">
                    <label className="text-xs text-slate-300 font-medium h-fit block">Key Purpose Designation Name</label>
                    <input
                      type="text"
                      value={newKeyName}
                      onChange={(e) => setNewKeyName(e.target.value)}
                      placeholder="e.g. ERP Gateway Link"
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-xs focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      id="api-key-name-input"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-550 text-white font-bold rounded-lg text-xs transition-all cursor-pointer whitespace-nowrap h-9"
                    id="btn-create-api-key"
                  >
                    Generate Token
                  </button>
                </form>

                {/* Display list of active keys */}
                <div className="space-y-3">
                  {apiKeys.map((k) => (
                    <div key={k.key} className="bg-slate-950/60 p-4 border border-slate-850 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-extrabold text-white">{k.name}</h4>
                          <span className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono font-semibold px-2 py-0.5 rounded">
                            Active
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 mt-2 font-mono text-[10px] text-slate-400">
                          {copiedKey === k.key ? (
                            <span className="text-emerald-400">Token Copied successfully!</span>
                          ) : (
                            <span>{k.key}</span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end">
                        <button
                          onClick={() => triggerCopy(k.key)}
                          className="px-2.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded text-[10px] font-mono transition-all"
                        >
                          {copiedKey === k.key ? "Copied" : "Copy Token"}
                        </button>
                        <button
                          onClick={() => revokeKey(k.key)}
                          className="px-2.5 py-1.5 bg-red-950/30 hover:bg-red-900/35 text-red-400 border border-red-900/40 rounded text-[10px] font-bold transition-all"
                        >
                          Revoke Key
                        </button>
                      </div>
                    </div>
                  ))}
                  {apiKeys.length === 0 && (
                    <div className="p-8 text-center text-slate-450 text-xs">No active tokens generated. Ready key purpose inputs above.</div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === "support" && (
            <div className="space-y-6" id="dashboard-tab-support">
              <div className="bg-slate-900/40 border border-slate-800 p-4 md:p-6 rounded-2xl">
                <div className="border-b border-slate-850 pb-4 mb-6">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Mail className="w-5 h-5 text-amber-400" />
                    Dedicated Priority Support Ticketing
                  </h3>
                  <p className="text-xs text-slate-400">Log support parameters directly with technical associates and track resolve timers.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {/* Create Ticket Form */}
                  <form onSubmit={handleCreateTicket} className="md:col-span-2 space-y-4 bg-slate-950/40 p-4 border border-slate-850 rounded-xl">
                    <h4 className="text-xs font-mono font-bold uppercase text-slate-300">File Service Request</h4>
                    
                    <div className="space-y-1">
                      <label className="text-xs text-slate-400">Short Request Summary</label>
                      <input
                        type="text"
                        value={newTicketTitle}
                        onChange={(e) => setNewTicketTitle(e.target.value)}
                        placeholder="SAP integration failure logs"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-xs focus:ring-1 focus:ring-blue-500"
                        id="ticket-title-input"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-slate-400">Severity Urgency Level</label>
                      <select
                        value={newTicketPriority}
                        onChange={(e) => setNewTicketPriority(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-xs focus:ring-1 focus:ring-blue-500"
                        id="ticket-priority-select"
                      >
                        <option value="Critical">Critical (production block)</option>
                        <option value="High">High (recurrent errors)</option>
                        <option value="Medium">Medium (feature query)</option>
                        <option value="Low">Low (documentation notes)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-slate-400">Detailed Message Text</label>
                      <textarea
                        value={ticketMessage}
                        onChange={(e) => setTicketMessage(e.target.value)}
                        placeholder="Detail system errors..."
                        rows={3}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-xs focus:ring-1 focus:ring-blue-500"
                        id="ticket-message-textarea"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2 bg-amber-600 hover:bg-amber-550 text-slate-950 font-extrabold rounded-lg text-xs transition-all cursor-pointer"
                      id="btn-submit-support-ticket"
                    >
                      File Case
                    </button>
                  </form>

                  {/* Active Queue lists */}
                  <div className="md:col-span-3 space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase text-slate-400 pl-1">Active Ticket Queue</h4>
                    {tickets.map((t) => (
                      <div key={t.id} className="bg-slate-950/60 p-4 border border-slate-850 rounded-xl space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-slate-500">{t.id}</span>
                          <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                            t.priority === "Critical" ? "bg-red-500/10 text-red-400" :
                            t.priority === "High" ? "bg-amber-500/10 text-amber-400" :
                            "bg-blue-500/10 text-blue-400"
                          }`}>
                            {t.priority}
                          </span>
                        </div>

                        <h5 className="text-xs font-extrabold text-white">{t.title}</h5>
                        
                        <div className="flex justify-between items-center text-[10px] text-slate-400 border-t border-slate-850/80 pt-2 font-mono">
                          <span>Opened: {t.date}</span>
                          <span className={`font-semibold ${t.status === "Resolved" ? "text-emerald-400" : "text-blue-400"}`}>
                            Status: {t.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "billing" && (
            <div className="space-y-6" id="dashboard-tab-billing">
              <div className="bg-slate-900/40 border border-slate-800 p-4 md:p-6 rounded-2xl">
                <h3 className="text-base font-bold text-white mb-2">Subscription & Cost Configurations</h3>
                <p className="text-xs text-slate-450 mb-6 font-mono">Check usage margins and sovereign cloud quotas.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-950/50 border border-slate-850 rounded-2xl relative overflow-hidden">
                    <span className="absolute top-2 right-2 text-xs bg-purple-500/10 text-purple-300 font-mono font-semibold px-2 py-0.5 rounded">
                      Enterprise Suite Active
                    </span>
                    <h4 className="text-xs font-mono text-slate-450 uppercase mb-1">Contract Tier</h4>
                    <p className="text-lg font-bold text-white">Multi-Region Pro SaaS</p>
                    <p className="text-[11px] text-slate-400 mt-2 font-mono">Billing Cycle: Monthly Renewal on June 1, 2026</p>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-4">
                      <div className="bg-purple-600 h-full w-[44%]" title="Token usage bar"></div>
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                      <span>Usage: 2.4M / 5M monthly limit</span>
                      <span>44% Used</span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950/50 border border-slate-850 rounded-2xl flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-mono text-slate-350 uppercase mb-1">Assigned Support Plan</h4>
                      <p className="text-base font-bold text-white">Full-contract enterprise SLA wrapper</p>
                      <p className="text-[11px] text-slate-400 mt-1 font-mono">Direct access to Mumbai Tech Hub for fast, reliable setups.</p>
                    </div>
                    <p className="text-[10px] text-blue-400 font-mono leading-tight mt-4">
                      Need custom quotas or on-premise deployments? Contact CEO Ratan Kumar at ratankumar@eunimart.in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
