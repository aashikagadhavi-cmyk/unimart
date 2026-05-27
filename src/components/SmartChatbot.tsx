import React, { useState } from "react";
import { Send, Bot, Sparkles, CheckCircle2, User, HelpCircle, Mail, PhoneCall } from "lucide-react";

interface SmartChatbotProps {
  onLeadCaptured: (lead: { name: string; email: string; product: string }) => void;
}

export const SmartChatbot: React.FC<SmartChatbotProps> = ({ onLeadCaptured }) => {
  const [messages, setMessages] = useState<Array<{ sender: "bot" | "user"; text: string; actionRequested?: boolean }>>([
    {
      sender: "bot",
      text: "Hello! I am the Eunimart Onboarding Agent. We build state-of-the-art Generative AI Platforms for commerce catalog optimizations, predictive dashboards, task automation processes, and digital enterprise scaling."
    },
    {
      sender: "bot",
      text: "To help configure your complimentary initial consultation with CEO Ratan Kumar, what industry or automation task represents your highest organizational priority?"
    }
  ]);
  
  const [inputText, setInputText] = useState("");
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [selectedInterestProduct, setSelectedInterestProduct] = useState("AI Commerce Platform");
  const [leadStep, setLeadStep] = useState<"chat" | "collect_name" | "collect_email" | "completed">("chat");

  const simulatedBotResponses = (userQuery: string) => {
    const q = userQuery.toLowerCase();
    
    if (q.includes("commerce") || q.includes("shopify") || q.includes("catalog") || q.includes("price")) {
      return "Excellent. Our AI Commerce solution automates taxonomy mapping and performs real-time margin adjustments to lift cart yield. Let me help log your details so we can demonstrate this with your own SKU catalogs.";
    }
    if (q.includes("document") || q.includes("ocr") || q.includes("pdf") || q.includes("invoice")) {
      return "Our Document Processing engine parses visual files with spatial networks to extract database rows perfectly. I can arrange a staging setup where you upload custom templates.";
    }
    if (q.includes("security") || q.includes("soc2") || q.includes("private") || q.includes("privacy")) {
      return "Eunimart targets supreme enterprise trust. We offer dedicated sovereign clusters ensuring compliance with SOC-2, ISO-27001, and GDPR guidelines. Let's register you for a custom security audit.";
    }
    if (q.includes("ceo") || q.includes("ratan") || q.includes("kumar") || q.includes("founder")) {
      return "Founder and CEO Ratan Kumar leads our Mumbai innovation center. He collaborates directly with enterprise digital officers to tailor corporate SaaS models. I can log your reservation slots for his desk.";
    }
    // general fallback
    return "Understood. Our Generative AI Platforms are custom-designed to streamline that exact process. Let's arrange a customized consultation with our architecture specialists to review your workflow KPIs.";
  };

  const handleSendMatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText;
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInputText("");

    // Calculate simulated bot answers
    setTimeout(() => {
      const resp = simulatedBotResponses(userText);
      setMessages((prev) => [...prev, { sender: "bot", text: resp }]);
      
      // prompt lead capture form triggering if they chat at least once
      setTimeout(() => {
        if (leadStep === "chat") {
          setLeadStep("collect_name");
          setMessages((prev) => [
            ...prev,
            { sender: "bot", text: "To reserve your consultation slot, could you please tell me your full name, so we can log it with our coordination office?" }
          ]);
        }
      }, 1000);
    }, 800);
  };

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: leadName }]);
    setLeadStep("collect_email");
    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: `Pleasure meeting you, ${leadName}! What is your preferred business email so we can send the access details?` }
    ]);
  };

  const handleSaveEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail.trim() || !leadEmail.includes("@")) return;

    setMessages((prev) => [...prev, { sender: "user", text: leadEmail }]);
    setLeadStep("completed");
    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: "Perfect! Your request has been logged successfully. Ratan Kumar and the Eunimart customer success division will dispatch the secure API access invitation keys shortly." }
    ]);

    // trigger success callback
    onLeadCaptured({
      name: leadName,
      email: leadEmail,
      product: selectedInterestProduct
    });
  };

  // Preset quick reply queries
  const quickFaqSuggestions = [
    "How does the AI Commerce dynamic pricing lift checkout sales?",
    "Does Eunimart support private on-premise cloud installations?",
    "Can we schedule a live custom model engineering session?"
  ];

  const triggerQuickSuggest = (text: string) => {
    setInputText(text);
  };

  return (
    <div className="bg-[#0b1220] rounded-3xl border border-slate-200/10 dark:border-slate-800/80 overflow-hidden shadow-2xl flex flex-col h-[520px]" id="lead-bot-widget">
      
      {/* Bot Header bar */}
      <div className="bg-gradient-to-r from-blue-900/60 via-purple-950/40 to-slate-900 px-4 py-3.5 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
            <Bot className="w-5 h-5 text-white" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-900"></span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="text-xs font-extrabold text-white">Eunimart Onboarding Agent</h4>
              <span className="text-[8px] bg-emerald-500/10 text-emerald-400 font-mono scale-90 px-1 rounded">Interactive</span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono">CEO Office Virtual Specialist</p>
          </div>
        </div>

        <div className="text-[10px] text-slate-400 font-mono hidden sm:block">
          HQ: Goregaon, Mumbai
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin" id="bot-chats-container">
        {messages.map((m, idx) => (
          <div 
            key={idx} 
            className={`flex gap-2.5 max-w-[85%] ${m.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"}`}
            id={`bot-msg-${idx}`}
          >
            <div className={`w-6 h-6 rounded-lg font-mono text-[9px] flex items-center justify-center shrink-0 ${
              m.sender === "user" ? "bg-blue-600/25 text-blue-300" : "bg-purple-600/25 text-purple-300"
            }`}>
              {m.sender === "user" ? "U" : "AI"}
            </div>

            <div>
              <div className={`rounded-2xl p-3.5 text-xs inline-block leading-relaxed ${
                m.sender === "user"
                  ? "bg-blue-600 text-white rounded-tr-none"
                  : "bg-slate-900/80 border border-slate-800 text-slate-205 rounded-tl-none"
              }`}>
                {m.text}
              </div>
            </div>
          </div>
        ))}

        {/* Lead Capture form triggers inside the messaging logs */}
        {leadStep === "collect_name" && (
          <div className="p-3.5 bg-slate-900/60 rounded-2xl border border-slate-800/80 max-w-[85%] mr-auto space-y-3 animate-fadeIn" id="bot-capture-form-name">
            <span className="text-[9px] font-mono uppercase text-slate-500 block">Registration Portal Step 1</span>
            <form onSubmit={handleSaveName} className="space-y-2">
              <input
                type="text"
                value={leadName}
                onChange={(e) => setLeadName(e.target.value)}
                placeholder="Enter your full name..."
                className="w-full bg-slate-950 border border-slate-805 rounded-lg p-2 text-xs focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                required
                autoFocus
                id="bot-form-name-input"
              />
              <button
                type="submit"
                className="w-full py-1.5 bg-blue-650 hover:bg-blue-600 text-white rounded-lg text-[11px] font-bold cursor-pointer transition-all"
              >
                Submit Name
              </button>
            </form>
          </div>
        )}

        {leadStep === "collect_email" && (
          <div className="p-3.5 bg-slate-900/60 rounded-2xl border border-slate-800/80 max-w-[85%] mr-auto space-y-3 animate-fadeIn" id="bot-capture-form-email">
            <span className="text-[9px] font-mono uppercase text-slate-500 block">Registration Portal Step 2</span>
            
            <div className="space-y-1">
              <span className="text-[10px] text-slate-400 font-mono">Product of Interest:</span>
              <select
                value={selectedInterestProduct}
                onChange={(e) => setSelectedInterestProduct(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-1.5 text-xs text-slate-300"
                id="bot-form-product-select"
              >
                <option value="AI Commerce Platform">AI Commerce Platform</option>
                <option value="AI Business Automation Suite">AI Business Automation Suite</option>
                <option value="AI Analytics Engine">AI Analytics Engine</option>
                <option value="AI Document Processing">AI Document Processing</option>
                <option value="AI Transformation Cloud">AI Transformation Cloud</option>
              </select>
            </div>

            <form onSubmit={handleSaveEmail} className="space-y-2 pt-1">
              <input
                type="email"
                value={leadEmail}
                onChange={(e) => setLeadEmail(e.target.value)}
                placeholder="business.email@com.in"
                className="w-full bg-slate-950 border border-slate-805 rounded-lg p-2 text-xs focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                required
                autoFocus
                id="bot-form-email-input"
              />
              <button
                type="submit"
                className="w-full py-1.5 bg-purple-650 hover:bg-purple-600 text-white rounded-lg text-[11px] font-bold cursor-pointer transition-all"
              >
                Reserve Consultation Slot
              </button>
            </form>
          </div>
        )}

        {leadStep === "completed" && (
          <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-2xl text-xs text-slate-200 space-y-2 animate-fadeIn" id="bot-capture-success-screen">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
              <strong className="font-bold">Consultation Slot Pending!</strong>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              We registered <strong>{leadName}</strong> ({leadEmail}) for a specialized walkthrough of the <strong>{selectedInterestProduct}</strong>. An email check was dispatched safely!
            </p>
          </div>
        )}
      </div>

      {/* Suggestion tags if they are in general chat */}
      {leadStep === "chat" && (
        <div className="p-3 bg-slate-950/60 border-t border-slate-850 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-none" id="bot-suggestions-strip">
          {quickFaqSuggestions.map((faq, i) => (
            <button
              key={i}
              onClick={() => triggerQuickSuggest(faq)}
              className="px-3 py-1 bg-slate-900 border border-slate-800 text-[10px] text-slate-400 hover:text-slate-200 rounded-full cursor-pointer transition-colors"
              id={`quick-faq-${i}`}
            >
              {faq}
            </button>
          ))}
        </div>
      )}

      {/* Chat Form submission */}
      {leadStep === "chat" && (
        <form onSubmit={handleSendMatch} className="p-3 bg-slate-950 border-t border-slate-850 flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your automation priority task..."
            className="flex-1 bg-slate-900 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl p-2.5 text-xs text-white"
            id="bot-main-input-field"
          />
          <button
            type="submit"
            className="p-2.5 bg-blue-600 hover:bg-blue-550 rounded-xl text-white transition-all cursor-pointer"
            id="bot-msg-send-btn"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      )}

      {/* Small terms note */}
      <div className="bg-slate-950 py-1.5 px-3 border-t border-slate-900 text-center text-[9px] text-slate-650 font-mono">
        Admin Gate: Secured with TLS encryption protocols.
      </div>
    </div>
  );
};
