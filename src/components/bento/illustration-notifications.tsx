import type React from "react"

const IllustrationNotifications: React.FC = () => (
  <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
    <svg width="100%" height="100%" viewBox="0 0 400 288" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {/* Glow */}
      <ellipse cx="200" cy="180" rx="120" ry="80" fill="hsl(var(--primary))" fillOpacity="0.08" />

      {/* Floating notification cards */}
      {/* Card 1 - active */}
      <rect x="80" y="60" width="240" height="52" rx="12" fill="hsl(var(--foreground))" fillOpacity="0.07" stroke="hsl(var(--foreground))" strokeOpacity="0.12" strokeWidth="1" />
      <circle cx="108" cy="86" r="12" fill="hsl(var(--primary))" fillOpacity="0.9" />
      <rect x="128" y="78" width="90" height="8" rx="4" fill="hsl(var(--foreground))" fillOpacity="0.7" />
      <rect x="128" y="92" width="140" height="6" rx="3" fill="hsl(var(--foreground))" fillOpacity="0.3" />
      {/* dot indicator */}
      <circle cx="296" cy="80" r="5" fill="#22c55e" />

      {/* Card 2 */}
      <rect x="80" y="126" width="240" height="52" rx="12" fill="hsl(var(--foreground))" fillOpacity="0.05" stroke="hsl(var(--foreground))" strokeOpacity="0.08" strokeWidth="1" />
      <circle cx="108" cy="152" r="12" fill="hsl(var(--foreground))" fillOpacity="0.1" />
      <rect x="128" y="144" width="70" height="8" rx="4" fill="hsl(var(--foreground))" fillOpacity="0.4" />
      <rect x="128" y="158" width="110" height="6" rx="3" fill="hsl(var(--foreground))" fillOpacity="0.2" />

      {/* Card 3 */}
      <rect x="80" y="192" width="240" height="52" rx="12" fill="hsl(var(--foreground))" fillOpacity="0.03" stroke="hsl(var(--foreground))" strokeOpacity="0.06" strokeWidth="1" />
      <circle cx="108" cy="218" r="12" fill="hsl(var(--foreground))" fillOpacity="0.06" />
      <rect x="128" y="210" width="80" height="8" rx="4" fill="hsl(var(--foreground))" fillOpacity="0.25" />
      <rect x="128" y="224" width="120" height="6" rx="3" fill="hsl(var(--foreground))" fillOpacity="0.12" />

      {/* Bell icon top right */}
      <circle cx="320" cy="48" r="20" fill="hsl(var(--primary))" fillOpacity="0.15" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="1" />
      <path d="M320 40 C316 40 313 43 313 47 L313 52 L311 54 L311 55 L329 55 L329 54 L327 52 L327 47 C327 43 324 40 320 40Z" fill="hsl(var(--primary))" fillOpacity="0.8" />
      <path d="M318 55 C318 56.1 318.9 57 320 57 C321.1 57 322 56.1 322 55" stroke="hsl(var(--primary))" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
)

export default IllustrationNotifications
