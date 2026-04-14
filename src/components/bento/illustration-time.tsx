import type React from "react"

const IllustrationTime: React.FC = () => (
  <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
    <svg width="100%" height="100%" viewBox="0 0 400 288" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {/* Glow */}
      <ellipse cx="200" cy="170" rx="100" ry="60" fill="hsl(var(--primary))" fillOpacity="0.07" />

      {/* Chaotic messages — before (left side) */}
      <rect x="30" y="70" width="120" height="20" rx="5" fill="hsl(var(--foreground))" fillOpacity="0.1" transform="rotate(-8 30 70)" />
      <rect x="20" y="100" width="90" height="14" rx="5" fill="hsl(var(--foreground))" fillOpacity="0.07" transform="rotate(5 20 100)" />
      <rect x="40" y="125" width="100" height="16" rx="5" fill="hsl(var(--foreground))" fillOpacity="0.06" transform="rotate(-3 40 125)" />
      <rect x="15" y="148" width="75" height="14" rx="5" fill="hsl(var(--foreground))" fillOpacity="0.05" transform="rotate(7 15 148)" />
      <rect x="35" y="170" width="110" height="16" rx="5" fill="hsl(var(--foreground))" fillOpacity="0.04" transform="rotate(-5 35 170)" />
      <text x="85" y="96" textAnchor="middle" fill="hsl(var(--foreground))" fillOpacity="0.25" fontSize="9" fontFamily="sans-serif" transform="rotate(-8 85 96)">Telegram...</text>
      <text x="75" y="122" textAnchor="middle" fill="hsl(var(--foreground))" fillOpacity="0.18" fontSize="9" fontFamily="sans-serif" transform="rotate(5 75 122)">Mail...</text>
      <text x="90" y="145" textAnchor="middle" fill="hsl(var(--foreground))" fillOpacity="0.15" fontSize="9" fontFamily="sans-serif" transform="rotate(-3 90 145)">LMS...</text>

      {/* Arrow */}
      <path d="M165 144 L235 144" stroke="hsl(var(--primary))" strokeOpacity="0.6" strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M229 138 L237 144 L229 150" stroke="hsl(var(--primary))" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="200" y="136" textAnchor="middle" fill="hsl(var(--primary))" fillOpacity="0.6" fontSize="9" fontFamily="sans-serif">авто</text>

      {/* Clean calendar — after (right side) */}
      <rect x="245" y="70" width="125" height="160" rx="12" fill="hsl(var(--foreground))" fillOpacity="0.06" stroke="hsl(var(--foreground))" strokeOpacity="0.12" strokeWidth="1" />
      {/* Header */}
      <rect x="245" y="70" width="125" height="28" rx="12" fill="hsl(var(--primary))" fillOpacity="0.2" />
      <rect x="245" y="84" width="125" height="14" fill="hsl(var(--primary))" fillOpacity="0.2" />
      <text x="307" y="88" textAnchor="middle" fill="hsl(var(--primary))" fillOpacity="0.9" fontSize="11" fontFamily="sans-serif" fontWeight="600">Апрель</text>
      {/* Rows */}
      <rect x="258" y="108" width="99" height="12" rx="4" fill="hsl(var(--primary))" fillOpacity="0.5" />
      <rect x="258" y="126" width="80" height="12" rx="4" fill="hsl(var(--foreground))" fillOpacity="0.1" />
      <rect x="258" y="144" width="90" height="12" rx="4" fill="hsl(var(--foreground))" fillOpacity="0.07" />
      <rect x="258" y="162" width="70" height="12" rx="4" fill="hsl(var(--foreground))" fillOpacity="0.05" />
      <rect x="258" y="180" width="85" height="12" rx="4" fill="hsl(var(--foreground))" fillOpacity="0.04" />
      <text x="307" y="118" textAnchor="middle" fill="hsl(var(--primary))" fillOpacity="0.8" fontSize="9" fontFamily="sans-serif">15 апр · Deadline 1</text>
      <text x="307" y="136" textAnchor="middle" fill="hsl(var(--foreground))" fillOpacity="0.35" fontSize="9" fontFamily="sans-serif">18 апр · Deadline 2</text>
      <text x="307" y="154" textAnchor="middle" fill="hsl(var(--foreground))" fillOpacity="0.25" fontSize="9" fontFamily="sans-serif">20 апр · Deadline 3</text>
    </svg>
  </div>
)

export default IllustrationTime
