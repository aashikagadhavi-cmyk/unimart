import React, { useEffect, useState, useRef } from "react";

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  alpha: number;
  size: number;
}

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [followerPosition, setFollowerPosition] = useState({ x: -100, y: -100 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  
  // High fidelity trails and click ripples
  const [particles, setParticles] = useState<TrailParticle[]>([]);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number; scale: number; opacity: number }>>([]);
  const particleIdRef = useRef(0);
  const rippleIdRef = useRef(0);

  useEffect(() => {
    // Hide custom cursor on mobile / devices with touch capabilities
    const checkViewportAndTouch = () => {
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsMobile(window.innerWidth < 1024 || hasTouch);
    };

    checkViewportAndTouch();
    window.addEventListener("resize", checkViewportAndTouch);

    return () => {
      window.removeEventListener("resize", checkViewportAndTouch);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setHidden(false);
      const { clientX: x, clientY: y } = e;
      setPosition({ x, y });

      // Spawn trail particle with raw randomized dispersion vectors
      setParticles((prev) => {
        const newParticle: TrailParticle = {
          id: particleIdRef.current++,
          x,
          y,
          alpha: 1.0,
          size: Math.random() * 4 + 2, // size between 2px and 6px
        };
        // Keep only the last 15 particles for performance
        return [...prev.slice(-12), newParticle];
      });
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    const handleMouseDown = (e: MouseEvent) => {
      setClicked(true);
      // Spawn expand ripple on click
      setRipples((prev) => [
        ...prev,
        {
          id: rippleIdRef.current++,
          x: e.clientX,
          y: e.clientY,
          scale: 0.1,
          opacity: 1.0,
        },
      ]);
    };
    const handleMouseUp = () => setClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === "BUTTON" || 
        target.tagName === "A" || 
        target.closest("button") || 
        target.closest("a") || 
        target.closest("[id*='btn']") ||
        target.closest("[id*='cta']") ||
        target.classList.contains("cursor-pointer") ||
        target.getAttribute("role") === "button";

      setHovered(!!isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile]);

  // Smooth inertial follower effect utilizing requestAnimationFrame
  useEffect(() => {
    if (isMobile) return;

    let animId: number;

    const updateDynamics = () => {
      // 1. Update follower with high quality lag dampening
      setFollowerPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        const lerpFactor = 0.12; 
        return {
          x: prev.x + dx * lerpFactor,
          y: prev.y + dy * lerpFactor,
        };
      });

      // 2. Decay trail dust particles alpha
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, alpha: p.alpha - 0.08, size: Math.max(0, p.size - 0.1) }))
          .filter((p) => p.alpha > 0)
      );

      // 3. Expand and decay click ripples
      setRipples((prev) =>
        prev
          .map((r) => ({ ...r, scale: r.scale + 0.12, opacity: r.opacity - 0.06 }))
          .filter((r) => r.opacity > 0)
      );

      animId = requestAnimationFrame(updateDynamics);
    };

    animId = requestAnimationFrame(updateDynamics);
    return () => cancelAnimationFrame(animId);
  }, [position, isMobile]);

  if (isMobile || hidden) return null;

  return (
    <>
      {/* Laser Dust Trail Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
          style={{
            transform: `translate3d(${p.x}px, ${p.y}px, 0)`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.alpha,
            backgroundColor: hovered ? "rgba(168, 85, 247, 0.6)" : "rgba(34, 211, 238, 0.6)",
            boxShadow: `0 0 6px ${hovered ? "rgba(168, 85, 247, 0.8)" : "rgba(34, 211, 238, 0.8)"}`,
          }}
        />
      ))}

      {/* Expanding Click Ripples */}
      {ripples.map((r) => (
        <div
          key={r.id}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-[9996] -translate-x-1/2 -translate-y-1/2 border-2 border-cyan-400/40 mix-blend-screen"
          style={{
            transform: `translate3d(${r.x}px, ${r.y}px, 0) scale(${r.scale})`,
            width: "50px",
            height: "50px",
            opacity: r.opacity,
            boxShadow: "0 0 15px rgba(34, 211, 238, 0.25)",
          }}
        />
      ))}

      {/* 1. Laser Pointer Center Node */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 mix-blend-screen bg-cyan-400"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${clicked ? 0.7 : hovered ? 1.5 : 1})`,
        }}
      />

      {/* 2. Inertial Glowing Tracker Aura Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          hovered
            ? "w-14 h-14 bg-indigo-950/20 border-2 border-indigo-400/60 scale-105 shadow-[0_0_25px_rgba(124,58,237,0.5)]"
            : "w-9 h-9 border border-cyan-400/25 bg-cyan-500/5 shadow-[0_0_12px_rgba(6,182,212,0.15)]"
        }`}
        style={{
          transform: `translate3d(${followerPosition.x}px, ${followerPosition.y}px, 0) scale(${clicked ? 0.85 : 1})`,
        }}
      >
        {/* Futuristic interior crosshair sight ring layout when hovering clickable items */}
        {hovered && (
          <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center animate-spin" style={{ animationDuration: "8s" }}>
            <div className="w-full h-[1px] bg-indigo-400/30 absolute"></div>
            <div className="h-full w-[1px] bg-indigo-400/30 absolute"></div>
            {/* Tiny outer radar dashes */}
            <div className="w-8 h-8 rounded-full border border-dashed border-indigo-400/40"></div>
          </div>
        )}
      </div>
    </>
  );
};
