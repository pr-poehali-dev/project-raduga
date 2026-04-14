import type React from "react"

const IllustrationSources: React.FC = () => (
  <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
    <svg width="100%" height="100%" viewBox="0 0 400 288" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {/* Center hub */}
      <circle cx="200" cy="150" r="28" fill="hsl(var(--primary))" fillOpacity="0.2" stroke="hsl(var(--primary))" strokeOpacity="0.5" strokeWidth="1.5" />
      <circle cx="200" cy="150" r="16" fill="hsl(var(--primary))" fillOpacity="0.6" />

      {/* Connecting lines */}
      <line x1="200" y1="150" x2="100" y2="80" stroke="hsl(var(--foreground))" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="200" y1="150" x2="300" y2="80" stroke="hsl(var(--foreground))" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="200" y1="150" x2="90" y2="190" stroke="hsl(var(--foreground))" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="200" y1="150" x2="310" y2="190" stroke="hsl(var(--foreground))" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="200" y1="150" x2="200" y2="240" stroke="hsl(var(--foreground))" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 4" />

      {/* Source nodes */}
      {/* Telegram - top left */}
      <circle cx="100" cy="80" r="22" fill="hsl(var(--foreground))" fillOpacity="0.07" stroke="hsl(var(--foreground))" strokeOpacity="0.15" strokeWidth="1" />
      <path d="M91 80 L109 73 L102 87 L91 80Z" fill="hsl(var(--primary))" fillOpacity="0.7" />

      {/* Gmail - top right */}
      <circle cx="300" cy="80" r="22" fill="hsl(var(--foreground))" fillOpacity="0.07" stroke="hsl(var(--foreground))" strokeOpacity="0.15" strokeWidth="1" />
      <rect x="290" y="73" width="20" height="14" rx="2" fill="none" stroke="hsl(var(--foreground))" strokeOpacity="0.4" strokeWidth="1.5" />
      <path d="M290 73 L300 82 L310 73" stroke="hsl(var(--foreground))" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" />

      {/* Notion - left */}
      <circle cx="90" cy="190" r="22" fill="hsl(var(--foreground))" fillOpacity="0.05" stroke="hsl(var(--foreground))" strokeOpacity="0.1" strokeWidth="1" />
      <rect x="81" y="181" width="18" height="18" rx="3" fill="none" stroke="hsl(var(--foreground))" strokeOpacity="0.3" strokeWidth="1.5" />
      <line x1="84" y1="187" x2="96" y2="187" stroke="hsl(var(--foreground))" strokeOpacity="0.3" strokeWidth="1" />
      <line x1="84" y1="191" x2="96" y2="191" strokeOpacity="0.2" stroke="hsl(var(--foreground))" strokeWidth="1" />

      {/* LMS - right */}
      <circle cx="310" cy="190" r="22" fill="hsl(var(--foreground))" fillOpacity="0.05" stroke="hsl(var(--foreground))" strokeOpacity="0.1" strokeWidth="1" />
      <rect x="301" y="181" width="18" height="18" rx="3" fill="none" stroke="hsl(var(--foreground))" strokeOpacity="0.3" strokeWidth="1.5" />
      <line x1="304" y1="188" x2="316" y2="184" stroke="hsl(var(--foreground))" strokeOpacity="0.3" strokeWidth="1" />
      <line x1="304" y1="192" x2="316" y2="192" strokeOpacity="0.2" stroke="hsl(var(--foreground))" strokeWidth="1" />

      {/* Bottom node */}
      <circle cx="200" cy="240" r="22" fill="hsl(var(--foreground))" fillOpacity="0.04" stroke="hsl(var(--foreground))" strokeOpacity="0.08" strokeWidth="1" />
      <path d="M193 233 L207 233 M193 240 L207 240 M193 247 L203 247" stroke="hsl(var(--foreground))" strokeOpacity="0.25" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
)

export default IllustrationSources
