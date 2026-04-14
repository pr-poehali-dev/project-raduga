import type React from "react"

const IllustrationCalm: React.FC = () => (
  <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
    <svg width="100%" height="100%" viewBox="0 0 400 288" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {/* Soft glow */}
      <ellipse cx="200" cy="160" rx="150" ry="100" fill="hsl(var(--primary))" fillOpacity="0.06" />

      {/* Brain / mind - abstract wavy circles */}
      <circle cx="200" cy="150" r="70" stroke="hsl(var(--foreground))" strokeOpacity="0.08" strokeWidth="1" fill="none" strokeDasharray="4 6" />
      <circle cx="200" cy="150" r="50" stroke="hsl(var(--primary))" strokeOpacity="0.2" strokeWidth="1" fill="none" strokeDasharray="3 5" />
      <circle cx="200" cy="150" r="30" stroke="hsl(var(--primary))" strokeOpacity="0.4" strokeWidth="1.5" fill="hsl(var(--primary))" fillOpacity="0.08" />

      {/* Checkmarks orbiting */}
      {/* Top */}
      <circle cx="200" cy="72" r="14" fill="hsl(var(--primary))" fillOpacity="0.15" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="1" />
      <path d="M194 72 L198 76 L206 68" stroke="hsl(var(--primary))" strokeOpacity="0.9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

      {/* Right */}
      <circle cx="278" cy="150" r="14" fill="hsl(var(--foreground))" fillOpacity="0.06" stroke="hsl(var(--foreground))" strokeOpacity="0.12" strokeWidth="1" />
      <path d="M272 150 L276 154 L284 146" stroke="hsl(var(--foreground))" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Bottom */}
      <circle cx="200" cy="228" r="14" fill="hsl(var(--foreground))" fillOpacity="0.04" stroke="hsl(var(--foreground))" strokeOpacity="0.08" strokeWidth="1" />
      <path d="M194 228 L198 232 L206 224" stroke="hsl(var(--foreground))" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Left */}
      <circle cx="122" cy="150" r="14" fill="hsl(var(--foreground))" fillOpacity="0.04" stroke="hsl(var(--foreground))" strokeOpacity="0.08" strokeWidth="1" />
      <path d="M116 150 L120 154 L128 146" stroke="hsl(var(--foreground))" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Center dot */}
      <circle cx="200" cy="150" r="6" fill="hsl(var(--primary))" fillOpacity="0.8" />
      <circle cx="200" cy="150" r="3" fill="hsl(var(--primary))" />
    </svg>
  </div>
)

export default IllustrationCalm
