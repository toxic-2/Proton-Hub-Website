"use client";

export function AtomLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Ambient glow behind atom */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(190 85% 52% / 0.25) 0%, transparent 70%)",
          filter: "blur(20px)",
          animation: "glow-pulse-cyan 3s ease-in-out infinite",
        }}
      />
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="atomGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="nucleusGlow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="orbitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(190, 85%, 55%)" stopOpacity="0.9" />
            <stop offset="50%" stopColor="hsl(190, 85%, 65%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(190, 85%, 55%)" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="orbitGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(190, 85%, 60%)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(190, 85%, 70%)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(190, 85%, 60%)" stopOpacity="0.8" />
          </linearGradient>
          <radialGradient id="nucleusGrad" cx="40%" cy="40%">
            <stop offset="0%" stopColor="hsl(190, 100%, 80%)" />
            <stop offset="50%" stopColor="hsl(190, 85%, 55%)" />
            <stop offset="100%" stopColor="hsl(190, 85%, 40%)" />
          </radialGradient>
        </defs>

        {/* Orbit 1 */}
        <g filter="url(#atomGlow)">
          <ellipse
            cx="100" cy="100" rx="82" ry="28"
            fill="none" stroke="url(#orbitGrad1)" strokeWidth="1.2"
            style={{ animation: "atom-spin 7s linear infinite", transformOrigin: "100px 100px" }}
          />
        </g>

        {/* Orbit 2 */}
        <g filter="url(#atomGlow)">
          <ellipse
            cx="100" cy="100" rx="82" ry="28"
            fill="none" stroke="url(#orbitGrad2)" strokeWidth="1.2"
            style={{
              animation: "atom-spin 9s linear infinite",
              transform: "rotate(60deg)",
              transformOrigin: "100px 100px",
            }}
          />
        </g>

        {/* Orbit 3 */}
        <g filter="url(#atomGlow)">
          <ellipse
            cx="100" cy="100" rx="82" ry="28"
            fill="none" stroke="url(#orbitGrad1)" strokeWidth="1.2"
            style={{
              animation: "atom-spin-reverse 8s linear infinite",
              transform: "rotate(120deg)",
              transformOrigin: "100px 100px",
            }}
          />
        </g>

        {/* Nucleus */}
        <circle cx="100" cy="100" r="14" fill="url(#nucleusGrad)" filter="url(#nucleusGlow)" />
        <circle cx="96" cy="96" r="4" fill="hsl(190, 100%, 90%)" opacity="0.7" />

        {/* Electrons */}
        <g style={{ animation: "atom-spin 7s linear infinite", transformOrigin: "100px 100px" }}>
          <circle cx="182" cy="100" r="5" fill="hsl(190, 85%, 65%)" filter="url(#atomGlow)" />
          <circle cx="182" cy="100" r="2.5" fill="hsl(190, 100%, 85%)" />
        </g>
        <g style={{ animation: "atom-spin 9s linear infinite", transformOrigin: "100px 100px", transform: "rotate(60deg)" }}>
          <circle cx="182" cy="100" r="5" fill="hsl(190, 85%, 65%)" filter="url(#atomGlow)" />
          <circle cx="182" cy="100" r="2.5" fill="hsl(190, 100%, 85%)" />
        </g>
        <g style={{ animation: "atom-spin-reverse 8s linear infinite", transformOrigin: "100px 100px", transform: "rotate(120deg)" }}>
          <circle cx="182" cy="100" r="5" fill="hsl(190, 85%, 65%)" filter="url(#atomGlow)" />
          <circle cx="182" cy="100" r="2.5" fill="hsl(190, 100%, 85%)" />
        </g>
      </svg>
    </div>
  );
}
