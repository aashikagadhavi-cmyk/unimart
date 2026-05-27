import React, { useState, useEffect } from "react";
import { Lock, Mail, Shield, User, Sparkles, AlertCircle, RefreshCw, CheckCircle2, ChevronRight, Landmark } from "lucide-react";

interface AuthProps {
  onLoginSuccess: (email: string) => void;
  onExit: () => void;
  requestedDemoProduct?: string;
}

export const AuthSystem: React.FC<AuthProps> = ({ onLoginSuccess, onExit, requestedDemoProduct }) => {
  const [authMode, setAuthMode] = useState<"login" | "signup" | "otp" | "forgot">("login");
  
  // Fields state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [otpTimer, setOtpTimer] = useState(60);
  const [isOtpActive, setIsOtpActive] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginSuccessMessage, setLoginSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // OTP counter loop
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOtpActive && otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    } else if (otpTimer === 0) {
      setIsOtpActive(false);
    }
    return () => clearInterval(interval);
  }, [isOtpActive, otpTimer]);

  // Handle standard password sign in
  const handlePasswordSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setLoginError("Please enter your registered enterprise credentials.");
      return;
    }

    setIsLoading(true);
    setLoginError("");

    setTimeout(() => {
      // Direct pass for easy developer/visitor evaluation, default to input email
      setIsLoading(false);
      setLoginSuccessMessage("Security handshake validated. Syncing Workspace...");
      setTimeout(() => {
        onLoginSuccess(email);
      }, 1000);
    }, 1200);
  };

  // Handle SignUp trigger with mock validation
  const handleSignUpDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !fullName.trim() || !companyName.trim()) {
      setLoginError("Please fill out all registration fields.");
      return;
    }

    setIsLoading(true);
    setLoginError("");

    setTimeout(() => {
      setIsLoading(false);
      setAuthMode("otp");
      setIsOtpActive(true);
      setOtpTimer(60);
      setLoginSuccessMessage(`Onboarding code verification generated for ${email}`);
      // Default auto-fills code preview trigger
    }, 1500);
  };

  // OTP Validation code
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpCode.trim()) {
      setLoginError("Please key-in the validation code.");
      return;
    }

    setIsLoading(true);
    setLoginError("");

    setTimeout(() => {
      setIsLoading(false);
      setLoginSuccessMessage("OTP Code successfully validated! Welcome to Eunimart.");
      setTimeout(() => {
        onLoginSuccess(email || "sandbox.partner@eunimart.in");
      }, 1000);
    }, 1200);
  };

  // Forgot password
  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setLoginError("Please enter your business email first.");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLoginSuccessMessage(`Instructions dispatched to ${email}. Check inbox.`);
      setTimeout(() => {
        setAuthMode("login");
        setLoginSuccessMessage("");
      }, 3000);
    }, 1200);
  };

  // Standard provider SSO sign in routers
  const handleProviderSso = (provider: "google" | "microsoft" | "saml") => {
    setIsLoading(true);
    setLoginError("");
    setLoginSuccessMessage(`Handshaking with ${provider} SSO gateway protocols...`);

    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess(`sso.partner-${provider}@eunimart.in`);
    }, 1400);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4" id="identity-auth-container">
      <div className="w-full max-w-md bg-[#090d16]/90 border border-slate-200/10 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
        
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-purple-600/10 blur-3xl z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-blue-600/10 blur-3xl z-0 pointer-events-none"></div>

        <div className="relative z-10 space-y-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-400 flex items-center justify-center mb-3 shadow-lg shadow-purple-500/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {authMode === "login" && "Sign In Platform"}
              {authMode === "signup" && "Request Cloud Sandbox"}
              {authMode === "otp" && "OTP Verification"}
              {authMode === "forgot" && "Reset Password Code"}
            </h2>
            
            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
              {requestedDemoProduct ? (
                <span>Requesting setup for: <strong className="text-blue-400">{requestedDemoProduct}</strong></span>
              ) : (
                "Eunimart Global Secure Cloud Control Portal"
              )}
            </p>
          </div>

          {/* Feedback messages */}
          {loginError && (
            <div className="p-3 bg-red-950/40 border border-red-900/40 rounded-xl flex items-start gap-2.5 text-xs text-red-400" id="login-error-alert">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{loginError}</span>
            </div>
          )}

          {loginSuccessMessage && (
            <div className="p-3 bg-emerald-950/40 border border-emerald-900/45 rounded-xl flex items-start gap-2.5 text-xs text-emerald-400" id="login-success-alert">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 animate-pulse" />
              <span>{loginSuccessMessage}</span>
            </div>
          )}

          {/* Toggle Tabs */}
          {authMode !== "otp" && authMode !== "forgot" && (
            <div className="grid grid-cols-2 bg-slate-950 p-1 rounded-xl border border-slate-850" id="login-tabs-controller">
              <button
                onClick={() => {
                  setAuthMode("login");
                  setLoginError("");
                }}
                className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  authMode === "login" ? "bg-slate-900 text-white shadow" : "text-slate-450 hover:text-slate-200"
                }`}
                id="btn-tab-signin"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setAuthMode("signup");
                  setLoginError("");
                }}
                className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  authMode === "signup" ? "bg-slate-900 text-white shadow" : "text-slate-450 hover:text-slate-200"
                }`}
                id="btn-tab-create"
              >
                Create Account
              </button>
            </div>
          )}

          {/* Mode Form Dispatchers */}
          {authMode === "login" && (
            <form onSubmit={handlePasswordSignIn} className="space-y-4" id="form-signin">
              <div className="space-y-1">
                <label className="text-xs text-slate-350 font-medium">Business Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="partner.contact@eunimart.in"
                    className="w-full bg-slate-950/70 border border-slate-800 focus:border-blue-500 rounded-xl p-2.5 pl-11 text-xs text-white"
                    required
                    id="input-login-email"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-xs text-slate-355 font-medium">Platform Password</label>
                  <button
                    type="button"
                    onClick={() => setAuthMode("forgot")}
                    className="text-[11px] text-blue-400 hover:underline cursor-pointer"
                  >
                    Forgot?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-slate-950/70 border border-slate-800 focus:border-blue-500 rounded-xl p-2.5 pl-11 text-xs text-white"
                    required
                    id="input-login-pass"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                id="btn-login-submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl text-xs transition-all tracking-wide shadow-lg shadow-purple-500/5 cursor-pointer flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <span>Access Secure Dashboard</span>
                )}
              </button>
            </form>
          )}

          {authMode === "signup" && (
            <form onSubmit={handleSignUpDispatch} className="space-y-4" id="form-signup">
              <div className="space-y-1">
                <label className="text-xs text-slate-350 font-medium font-mono">Full Registrar Name</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Kumar Sharma"
                    className="w-full bg-slate-950/70 border border-slate-800 focus:border-blue-500 rounded-xl p-2.5 pl-11 text-xs text-white"
                    required
                    id="input-reg-name"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-350 font-medium font-mono">Company Designation Corporate</label>
                <div className="relative">
                  <Landmark className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="M/S Tech Logistics Int."
                    className="w-full bg-slate-950/70 border border-slate-800 focus:border-blue-500 rounded-xl p-2.5 pl-11 text-xs text-white"
                    required
                    id="input-reg-company"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-350 font-medium">Corporate Email Domain</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="yourname@domain.in"
                    className="w-full bg-slate-950/70 border border-slate-800 focus:border-blue-500 rounded-xl p-2.5 pl-11 text-xs text-white"
                    required
                    id="input-reg-email"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                id="btn-register-submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 via-purple-650 to-purple-650 text-white font-bold rounded-xl text-xs transition-all tracking-wide cursor-pointer"
              >
                {isLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : "Initiate Verification Node"}
              </button>
            </form>
          )}

          {authMode === "otp" && (
            <form onSubmit={handleVerifyOtp} className="space-y-4" id="form-otp-validation">
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-850 text-center space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Security Gate Simulator</span>
                <p className="text-xs text-slate-300">A demonstration code was dispatched! Use standard trigger code below:</p>
                <p className="text-sm font-extrabold text-blue-400 font-mono tracking-widest pt-1">1 2 3 4</p>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-350 font-medium font-mono text-center block">Key-in Validation OTP Code</label>
                <input
                  type="text"
                  maxLength={4}
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                  placeholder="1234"
                  className="w-full text-center tracking-[1.5em] bg-slate-950 border border-slate-800 focus:border-purple-500 rounded-xl p-3 text-lg text-white font-mono font-bold"
                  required
                  id="input-otp-field"
                />
              </div>

              <div className="flex justify-between items-center text-[11px] text-slate-450 px-1">
                <span>Verification loop: 256-bit TLS</span>
                {isOtpActive ? (
                  <span>Resend code in {otpTimer}s</span>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setOtpTimer(60);
                      setIsOtpActive(true);
                    }}
                    className="text-blue-400 hover:underline"
                  >
                    Resend Code
                  </button>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                id="btn-otp-submit"
                className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl text-xs transition-all tracking-wide cursor-pointer flex items-center justify-center gap-2"
              >
                {isLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : "Verify Identity & Login"}
              </button>
            </form>
          )}

          {authMode === "forgot" && (
            <form onSubmit={handleResetPassword} className="space-y-4" id="form-forgot-pass">
              <div className="space-y-1">
                <label className="text-xs text-slate-350 font-medium">Your account email domain</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.in"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl p-2.5 text-xs text-white"
                  required
                  id="input-forgot-email"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                id="btn-forgot-submit"
                className="w-full py-3 bg-slate-800 hover:bg-slate-750 text-white font-bold rounded-xl text-xs transition-all cursor-pointer"
              >
                Dispatch Instructions
              </button>

              <button
                type="button"
                onClick={() => setAuthMode("login")}
                className="w-full text-center text-xs text-slate-400 hover:text-white pt-2 block"
              >
                Return to Login
              </button>
            </form>
          )}

          {/* Social SSO Connect triggers */}
          {authMode !== "otp" && (
            <div className="space-y-3 pt-4 border-t border-slate-850" id="sso-integrations-panel">
              <span className="text-[10px] tracking-wider font-mono text-slate-500 block uppercase text-center font-bold">Deploy Identity SSO Handshakes</span>
              
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleProviderSso("google")}
                  className="flex items-center justify-center gap-2 py-2 px-3 bg-slate-950 hover:bg-slate-900 border border-slate-800 text-xs font-semibold rounded-xl text-slate-300 hover:text-white transition-all cursor-pointer"
                  id="btn-sso-google"
                >
                  {/* Mock Google letter icon */}
                  <span className="font-bold text-red-400 font-mono">G</span>
                  Google SSO
                </button>
                <button
                  type="button"
                  onClick={() => handleProviderSso("microsoft")}
                  className="flex items-center justify-center gap-2 py-2 px-3 bg-slate-950 hover:bg-slate-900 border border-slate-800 text-xs font-semibold rounded-xl text-slate-300 hover:text-white transition-all cursor-pointer"
                  id="btn-sso-ms"
                >
                  <span className="font-bold text-blue-400 font-mono">M</span>
                  Microsoft SSO
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleProviderSso("saml")}
                className="w-full py-1.5 bg-slate-950 hover:bg-slate-900 border border-slate-850 rounded-xl text-[10px] font-mono text-slate-450 hover:text-slate-300 flex items-center justify-center gap-1.5 transition-all"
                id="btn-sso-enterprise"
              >
                <Shield className="w-3.5 h-3.5 text-blue-500" />
                Active Corporate SAML SSO Tunnel
              </button>
            </div>
          )}

          {/* Exit prompt */}
          <button
            onClick={onExit}
            className="w-full text-center text-xs text-slate-500 hover:text-slate-350 pt-2 block cursor-pointer"
            id="btn-exit-auth"
          >
            Cancel and Return Home
          </button>

        </div>
      </div>
    </div>
  );
};
