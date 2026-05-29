import React, { useState, useEffect, useRef } from "react";
import * as Icons from "lucide-react";

interface SupportMessage {
  id: string;
  sender: "agent" | "user" | "system";
  text: string;
  timestamp: string;
  avatar?: string;
  agentName?: string;
}

export const FloatingChatSupport: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [activeCategory, setActiveCategory] = useState<"general" | "tech" | "sovereign" | "none">("none");
  const [isTyping, setIsTyping] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [ticketOpened, setTicketOpened] = useState(false);
  const [generatedTicketId, setGeneratedTicketId] = useState("");
  
  const [messages, setMessages] = useState<SupportMessage[]>([
    {
      id: "welcome-1",
      sender: "agent",
      text: "Namaste! Welcome to Eunimart Private Limited Global Support Dispatch. I am Priya Devi, your Customer Engineering guide today.",
      timestamp: "Just Now",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
      agentName: "Priya Devi (Tech Desk)"
    },
    {
      id: "welcome-2",
      sender: "system",
      text: "Mumbai Network Status: B-01 Array running optimally. Operational latency <12ms.",
      timestamp: "Just Now"
    }
  ]);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Flash subtle unread alert if chat is closed and we have unread
  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);

  const generateTicket = () => {
    const tId = "EUNI-" + Math.floor(100000 + Math.random() * 900000);
    setGeneratedTicketId(tId);
    setTicketOpened(true);
    
    setMessages((prev) => [
      ...prev,
      {
        id: "sys-" + Math.random(),
        sender: "system",
        text: `SUCCESS: Support Ticket ${tId} safely generated and dispatched to CEO Ratan Kumar's queue.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const handleSelectTopic = (topic: "general" | "tech" | "sovereign") => {
    setActiveCategory(topic);
    
    let replyText = "";
    let agentName = "Priya Devi (Tech Desk)";
    let avatarUrl = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80";

    if (topic === "general") {
      replyText = "Great choice! I can review our Creator and Peak subscription plans with you, or arrange direct pricing tiers for high-volume API integrations.";
    } else if (topic === "tech") {
      replyText = "I have connected Vikram Sen from our GPU Operations cluster. Our neural pipeline handles 4K temporal frames inside our private Mumbai servers.";
      agentName = "Vikram Sen (GPU Operations)";
      avatarUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80";
    } else {
      replyText = "For elite cinema houses and secure data, we deploy completely air-gapped on-premises GPU grid nodes. I will create an exclusive consultation slot.";
    }

    setMessages((prev) => [
      ...prev,
      {
        id: "usr-opt-" + Math.random(),
        sender: "user",
        text: `Inquiring about ${topic === 'general' ? 'Studio Licensing & Costing' : topic === 'tech' ? 'GPU Neural Pipelines' : 'Air-Gapped Sovereignty'}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: "agt-reply-" + Math.random(),
          sender: "agent",
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          avatar: avatarUrl,
          agentName: agentName
        }
      ]);
    }, 1200);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim()) return;

    const userMsg = messageText;
    setMessageText("");

    setMessages((prev) => [
      ...prev,
      {
        id: "usr-" + Math.random(),
        sender: "user",
        text: userMsg,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      
      let botResponse = "Our coordinators in Mumbai have logged this message context. We usually activate direct voice/video review streams within 15 minutes. Would you like to generate an official Support Ticket?";
      const lower = userMsg.toLowerCase();

      if (lower.includes("price") || lower.includes("cost") || lower.includes("licens") || lower.includes("plan")) {
        botResponse = "Eunimart offers custom licenses starting at $249/mo. We process commercial invoices in INR & USD via physical banking channels. Let me know if you would like me to trigger an automated quote request.";
      } else if (lower.includes("api") || lower.includes("code") || lower.includes("sdk") || lower.includes("python") || lower.includes("node")) {
        botResponse = "Our Developer Toolchain supports gRPC endpoints streaming raw vector frames. I can append our Mumbai sandbox credentials directly to your developer registration.";
      } else if (lower.includes("mumbai") || lower.includes("goregaon") || lower.includes("office") || lower.includes("location")) {
        botResponse = "We are physically situated right beside Aarey Piramal Cross Road, Goregaon West, Mumbai. Our localized servers run natively on state-of-the-art closed network cages.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: "agt-answ-" + Math.random(),
          sender: "agent",
          text: botResponse,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          avatar: activeCategory === "tech" 
            ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
            : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
          agentName: activeCategory === "tech" ? "Vikram Sen (GPU Operations)" : "Priya Devi (Tech Desk)"
        }
      ]);
    }, 1400);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9995] font-sans" id="floating-live-support-hub">
      
      {/* 1. Floating Support Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-650 text-white p-3.5 sm:p-4 rounded-full shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer align-middle overflow-visible border border-cyan-400/30"
          id="live-chat-launcher-btn"
        >
          <Icons.MessageSquareQuote className="w-6 h-6 animate-pulse" />
          
          {unreadCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[9px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#070b13] animate-bounce">
              {unreadCount}
            </span>
          )}

          <span className="absolute right-14 bg-slate-950/95 text-cyan-400 border border-slate-800 rounded-lg px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
            Mumbai Live Desk &bull; Support
          </span>
        </button>
      )}

      {/* 2. Expanded Chat Drawer Console */}
      {isOpen && (
        <div 
          className="bg-[#0b1220] border border-slate-800 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.8)] w-[340px] sm:w-[380px] h-[500px] flex flex-col overflow-hidden animate-fadeIn"
          id="live-chat-console-panel"
        >
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-blue-900/80 via-indigo-950/40 to-slate-900 px-4 py-3.5 border-b border-slate-805/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8.5 h-8.5 rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-600 flex items-center justify-center relative shadow">
                <Icons.Headphones className="w-4.5 h-4.5 text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#0b1220]"></span>
              </div>
              <div>
                <h4 className="text-xs font-black text-white tracking-wide uppercase font-display">Mumbai Support Desk</h4>
                <p className="text-[9px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  Priya Devi & Vikram online
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5">
              <button 
                onClick={generateTicket}
                title="Generate Ticket Token"
                className="p-1.5 hover:bg-slate-900 text-cyan-400 hover:text-cyan-300 rounded-lg transition-colors cursor-pointer"
                id="support-chat-ticket-btn"
              >
                <Icons.Ticket className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-slate-900 text-slate-400 hover:text-slate-200 rounded-lg transition-colors cursor-pointer"
                id="support-chat-close-btn"
              >
                <Icons.X className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

          {/* Messages Stream Wrapper */}
          <div 
            ref={chatContainerRef}
            className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin bg-gradient-to-b from-[#090e18] to-[#0d1525]"
            id="support-chats-stream"
          >
            {messages.map((m) => (
              <div 
                key={m.id}
                className={`flex gap-2.5 max-w-[85%] ${
                  m.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                } ${m.sender === "system" ? "max-w-full w-full justify-center" : ""}`}
                id={`chat-msg-${m.id}`}
              >
                {/* Agent Avatar */}
                {m.sender === "agent" && m.avatar && (
                  <img 
                    src={m.avatar} 
                    alt={m.agentName} 
                    className="w-6.5 h-6.5 rounded-full object-cover border border-slate-700/50 shrink-0" 
                    referrerPolicy="no-referrer"
                  />
                )}

                {m.sender === "system" ? (
                  <div className="bg-slate-950/80 border border-slate-850 px-3 py-1.5 rounded-lg text-center text-[9px] font-mono text-slate-400 w-full tracking-wide">
                    {m.text}
                  </div>
                ) : (
                  <div className="space-y-1">
                    {m.sender === "agent" && m.agentName && (
                      <span className="text-[8px] font-mono text-slate-500 block">
                        {m.agentName}
                      </span>
                    )}
                    <div 
                      className={`text-xs p-3 rounded-2xl ${
                        m.sender === "user"
                          ? "bg-gradient-to-r from-blue-650 to-indigo-600 text-white rounded-tr-none shadow"
                          : "bg-slate-950 border border-slate-805 text-slate-200 rounded-tl-none"
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 mr-auto items-center animate-pulse" id="support-chat-typing">
                <div className="bg-slate-950 border border-slate-805 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Choice Selection helper chips */}
          <div className="p-2.5 bg-[#090d16] border-t border-slate-855/80 flex flex-col gap-1.5 shrink-0">
            <span className="text-[8px] font-mono text-slate-550 uppercase tracking-widest font-extrabold text-center block">
              Choose Quick Action Category
            </span>
            <div className="flex gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none pb-0.5 justify-center">
              <button
                onClick={() => handleSelectTopic("general")}
                className="px-2.5 py-1 bg-slate-950 border border-slate-800 text-[9px] text-slate-400 hover:text-white rounded-full transition-colors font-mono cursor-pointer"
                id="support-chip-general"
              >
                💵 Pricing Plans
              </button>
              <button
                onClick={() => handleSelectTopic("tech")}
                className="px-2.5 py-1 bg-slate-950 border border-slate-800 text-[9px] text-slate-400 hover:text-white rounded-full transition-colors font-mono cursor-pointer"
                id="support-chip-tech"
              >
                ⚙️ H100 Server Specs
              </button>
              <button
                onClick={() => handleSelectTopic("sovereign")}
                className="px-2.5 py-1 bg-slate-950 border border-slate-800 text-[9px] text-slate-400 hover:text-white rounded-full transition-colors font-mono cursor-pointer"
                id="support-chip-sovereign"
              >
                🔒 Air-Gapped Setup
              </button>
            </div>
          </div>

          {/* Interactive Send Message Input Form */}
          <form 
            onSubmit={handleSendMessage}
            className="p-3 bg-[#080c14] border-t border-slate-850 flex gap-2 shrink-0 items-center"
            id="support-chat-input-form"
          >
            <input
              type="text"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="Ask a technical or pricing query..."
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 placeholder-slate-600 focus:ring-1 focus:ring-cyan-500"
              id="support-chat-query-input"
            />
            <button
              type="submit"
              className="p-2 bg-cyan-600 hover:bg-cyan-500 rounded-xl text-white transition-all cursor-pointer shadow-md"
              id="support-chat-submit-btn"
            >
              <Icons.Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Bottom Copyright Status Bar */}
          <div className="bg-[#05080e] border-t border-slate-900 py-1.5 text-center text-[8px] font-mono text-slate-600 flex items-center justify-center gap-1 select-none">
            <Icons.Lock className="w-2.5 h-2.5 text-emerald-500/60" />
            Eunimart Private Limited SLA Active &middot; India Hub
          </div>

        </div>
      )}

    </div>
  );
};
