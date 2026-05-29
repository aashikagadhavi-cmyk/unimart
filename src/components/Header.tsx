import React, { useState } from "react";
import { Sparkles, Menu, X, LogIn, ArrowRight, LayoutDashboard, Globe, HelpCircle } from "lucide-react";

interface HeaderProps {
  currentView: string;
  setView: (view: string) => void;
  isLightTheme: boolean;
  setLightTheme: (light: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  setView,
  isLightTheme,
  setLightTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", view: "home" },
    { label: "About", view: "about" },
    { label: "Platform", view: "platform" },
    { label: "Solutions", view: "solutions" },
    { label: "Technology", view: "technology" },
    { label: "Developers", view: "developers" },
    { label: "Pricing", view: "pricing" },
    { label: "Contact", view: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/10 dark:border-slate-800/80 bg-slate-900/85 backdrop-blur-md text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo and Brand Positioning */}
        <div 
          onClick={() => { setView("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-3 cursor-pointer group"
          id="brand-logo"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-all">
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
                Eunimart
              </span>
              <span className="text-[10px] bg-blue-500/25 text-blue-400 font-mono font-semibold px-1.5 py-0.5 rounded border border-blue-400/20">
                PRIVATE LIMITED
              </span>
            </div>
            <p className="text-[9px] text-slate-400 tracking-wider font-mono uppercase hidden sm:block">
              Generative AI platforms for Enterprise
            </p>
          </div>
        </div>

        {/* Desktop Main Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item, index) => {
            const isActive = currentView === item.view;
            return (
              <button
                key={index}
                onClick={() => {
                  setView(item.view);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                id={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`text-xs font-bold px-3 py-2 rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? "text-blue-400 bg-blue-500/10 border border-blue-400/20"
                    : "text-slate-300 hover:text-blue-450 hover:bg-slate-800/10"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Authentication triggers */}
        <div className="hidden sm:flex items-center gap-3">
          {currentView !== "dashboard" ? (
            <>
              <button
                onClick={() => setView("login")}
                id="header-btn-login"
                className="text-sm font-semibold text-slate-300 hover:text-white px-4 py-2 hover:bg-slate-800/50 rounded-xl transition-all cursor-pointer flex items-center gap-2"
              >
                <LogIn className="w-4 h-4 text-slate-400" />
                Sign In
              </button>
              <button
                onClick={() => setView("dashboard")}
                id="header-btn-demo"
                className="relative group overflow-hidden px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-95 shadow-md shadow-purple-500/10 hover:shadow-purple-500/20 transition-all cursor-pointer flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  Try Live Sandbox
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </>
          ) : (
            <button
              onClick={() => setView("home")}
              id="header-btn-exit-portal"
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all cursor-pointer"
            >
              Exit Sandbox Portal
            </button>
          )}
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex lg:hidden items-center gap-2">
          {currentView !== "dashboard" && (
            <button
              onClick={() => setView("dashboard")}
              className="text-[11px] font-bold bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1.5 rounded-lg flex items-center gap-1 text-white shadow"
              id="mobile-quick-sandbox"
            >
              Sandbox
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-350 hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle Menu"
            id="mobile-hamburger-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Slide-out */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden bg-slate-950 border-t border-slate-800/80 px-4 pt-4 pb-6 space-y-4 absolute left-0 right-0 shadow-2xl"
          id="mobile-nav-panel"
        >
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item, index) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={index}
                  onClick={() => {
                    setView(item.view);
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`text-left py-2.5 px-3 rounded-lg text-xs transition-all text-ellipsis overflow-hidden whitespace-nowrap ${
                    isActive
                      ? "text-blue-400 bg-blue-500/15 font-bold"
                      : "text-slate-300 hover:text-blue-400 hover:bg-slate-900"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="border-t border-slate-850 pt-4 flex flex-col gap-3">
            {currentView !== "dashboard" ? (
              <>
                <button
                  onClick={() => {
                    setView("login");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 border border-slate-800 text-center rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-900 transition-all"
                >
                  Sign In Platform
                </button>
                <button
                  onClick={() => {
                    setView("dashboard");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-center rounded-xl text-sm font-extrabold text-white shadow-lg"
                >
                  Enter Live Sandbox Demo
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setView("home");
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 bg-slate-800 text-center rounded-xl text-sm font-bold text-slate-200"
              >
                Exit Active Sandbox
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
