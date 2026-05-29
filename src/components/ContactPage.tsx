import React, { useState } from "react";
import * as Icons from "lucide-react";

export const ContactPage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [selectedSlot, setSelectedSlot] = useState<string>("");

  const calendarSlots = [
    { time: "10:30 AM IST", status: "Available" },
    { time: "01:00 PM IST", status: "Available" },
    { time: "03:30 PM IST", status: "Available" },
    { time: "05:00 PM IST", status: "Available" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setName("");
      setEmail("");
      setMsg("");
      setSelectedSlot("");
    }, 4500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="contact-page-container">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 text-xs font-mono font-bold text-blue-400 rounded-full border border-blue-500/20 uppercase tracking-widest">
          Mumbai HQ Communications
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none uppercase">
          Inquire Corporate Consultation
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed font-sans">
          Deploy physical GPU secure clusters. Reach CEO Ratan Kumar at our Goregaon West hubs instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Headquarters Coordinates details */}
        <div className="lg:col-span-5 space-y-8 font-sans">
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-mono text-white uppercase tracking-wider">Corporate Hub Coordinates</h3>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Our core directors monitor pipeline requests from mumbai headquarters, ensuring fast response times.
            </p>
          </div>

          <div className="space-y-4 font-mono text-xs">
            <div className="flex gap-4 items-start">
              <Icons.MapPin className="w-5 h-5 text-blue-450 shrink-0 mt-0.5" />
              <div>
                <p className="text-white uppercase font-bold">Registered Office</p>
                <p className="text-slate-400 mt-1 whitespace-pre-line leading-relaxed font-sans font-medium">
                  Eunimart Private Limited
                  2647 Anant Vihar,
                  Aarey Piramal Cross Road,
                  Goregaon West, Mumbai,
                  Maharashtra 400104, India
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <Icons.Mail className="w-5 h-5 text-purple-450 shrink-0" />
              <div>
                <p className="text-white uppercase font-bold">Client Email dispatch</p>
                <a href="mailto:ratankumar@eunimart.in" className="text-blue-450 hover:underline font-sans">
                  ratankumar@eunimart.in
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <Icons.PhoneCall className="w-5 h-5 text-teal-450 shrink-0" />
              <div>
                <p className="text-white uppercase font-bold">Active Chat Support</p>
                <a 
                  href="https://wa.me/919999999999" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-emerald-400 hover:underline font-sans text-xs"
                >
                  +91 99999 99999 (WhatsApp simulation log)
                </a>
              </div>
            </div>
          </div>

          {/* Interactive SVG representation map */}
          <div className="bg-[#090d16] border border-slate-800 rounded-3xl p-4 h-52 flex flex-col justify-between relative overflow-hidden" id="contact-page-gmaps">
            <div className="absolute inset-0 bg-slate-950/20 z-0"></div>
            
            <div className="relative z-10 flex-1 flex flex-col justify-center items-center">
              <svg className="w-full h-full text-slate-800 opacity-40 overflow-visible" viewBox="0 0 100 100">
                <path d="M 0,10 L 100,10 M 0,30 L 100,30 M 0,60 L 100,60 M 0,80 L 100,80" stroke="currentColor font-mono" strokeWidth="0.5" />
                <path d="M 10,0 L 10,100 M 40,0 L 40,100 M 70,0 L 70,100 M 90,0 L 90,100" stroke="currentColor font-mono" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="4" fill="#EF4444" className="animate-ping" />
                <circle cx="50" cy="50" r="2" fill="#EF4444" />
              </svg>
              
              <span className="text-[9px] font-mono text-slate-400 absolute bottom-12 text-center uppercase tracking-widest font-black">
                Eunimart Mumbai Center &middot; Goregaon West
              </span>
            </div>

            <p className="text-[8px] font-mono text-slate-500 text-center relative z-10">
              Sovereign Server Nodes #BOM-CORE-02. Verified Zone.
            </p>
          </div>
        </div>

        {/* Right Column: Inquiry & Seat reservation Form */}
        <div className="lg:col-span-7 bg-[#090d16] border border-slate-800 p-6 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none"></div>

          <form onSubmit={handleSubmit} className="space-y-4" id="contact-page-form">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Leave an inquiry case</h4>
            
            {success && (
              <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs rounded-xl flex items-center gap-1.5 animate-fadeIn" id="contact-page-success">
                <Icons.CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>Thank you, {name}! Your inquiry has been registered. CEO Ratan Kumar will contact you shortly.</span>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] text-slate-400 uppercase font-mono">Your Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl p-2.5 text-xs text-white"
                  required
                  id="contact-page-name"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] text-slate-400 uppercase font-mono">Your Business Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="j.doe@company.in"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl p-2.5 text-xs text-white"
                  required
                  id="contact-page-email"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] text-slate-400 uppercase font-mono">How can we assist your enterprise transformation goals?</label>
              <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="e.g. We require secure air-gapped models for medical tracking documents..."
                rows={3}
                className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl p-2.5 text-xs text-white"
                id="contact-page-msg"
              />
            </div>

            {/* Calendar scheduler integration */}
            <div className="border-t border-slate-850 pt-4 space-y-3">
              <label className="text-[11px] text-slate-400 uppercase font-mono block">
                Instantly Reserve Consultation Time (CEO Desk Slot Scheduler)
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {calendarSlots.map((slot) => (
                  <button
                    key={slot.time}
                    type="button"
                    onClick={() => setSelectedSlot(slot.time)}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      selectedSlot === slot.time
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 outline-none border-blue-500 text-white text-xs font-extrabold"
                        : "bg-slate-950 border-slate-850 text-slate-400 hover:text-slate-100 hover:border-slate-700 text-xs"
                    }`}
                    id={`contact-page-slot-${slot.time.replace(/\s+/g, "-")}`}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>

              {selectedSlot && (
                <p className="text-[11px] font-mono text-emerald-405 bg-emerald-500/10 p-2 rounded border border-emerald-500/20 text-center animate-fadeIn">
                  Selected Consultation Slot: <strong>{selectedSlot}</strong> tomorrow.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-cyan-500 via-blue-650 to-purple-605 text-white font-extrabold rounded-xl text-xs transition-opacity cursor-pointer flex items-center justify-center gap-1.5"
              id="contact-page-submit-btn"
            >
              <Icons.Calendar className="w-4 h-4" />
              Submit Request & Confirm Reservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
