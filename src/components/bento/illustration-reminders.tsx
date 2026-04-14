import type React from "react"

const IllustrationReminders: React.FC = () => (
  <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
    <svg width="100%" height="100%" viewBox="0 0 400 288" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {/* Timeline vertical line */}
      <line x1="160" y1="50" x2="160" y2="250" stroke="hsl(var(--foreground))" strokeOpacity="0.1" strokeWidth="1.5" strokeDasharray="3 4" />

      {/* Event: 2 days before - active */}
      <circle cx="160" cy="90" r="7" fill="hsl(var(--primary))" fillOpacity="0.9" />
      <circle cx="160" cy="90" r="14" fill="hsl(var(--primary))" fillOpacity="0.15" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="1" />
      <rect x="185" y="78" width="130" height="28" rx="8" fill="hsl(var(--foreground))" fillOpacity="0.07" stroke="hsl(var(--primary))" strokeOpacity="0.3" strokeWidth="1" />
      <text x="200" y="90" fill="hsl(var(--primary))" fillOpacity="0.9" fontSize="10" fontFamily="sans-serif">За 2 дня</text>
      <text x="200" y="102" fill="hsl(var(--foreground))" fillOpacity="0.4" fontSize="9" fontFamily="sans-serif">Напоминание</text>

      {/* Event: 1 day before */}
      <circle cx="160" cy="155" r="7" fill="hsl(var(--foreground))" fillOpacity="0.3" />
      <circle cx="160" cy="155" r="14" fill="hsl(var(--foreground))" fillOpacity="0.05" stroke="hsl(var(--foreground))" strokeOpacity="0.1" strokeWidth="1" />
      <rect x="185" y="143" width="130" height="28" rx="8" fill="hsl(var(--foreground))" fillOpacity="0.04" stroke="hsl(var(--foreground))" strokeOpacity="0.1" strokeWidth="1" />
      <text x="200" y="155" fill="hsl(var(--foreground))" fillOpacity="0.4" fontSize="10" fontFamily="sans-serif">За 1 день</text>
      <text x="200" y="167" fill="hsl(var(--foreground))" fillOpacity="0.2" fontSize="9" fontFamily="sans-serif">Напоминание</text>

      {/* Event: deadline day */}
      <circle cx="160" cy="220" r="7" fill="hsl(var(--foreground))" fillOpacity="0.15" />
      <circle cx="160" cy="220" r="14" fill="hsl(var(--foreground))" fillOpacity="0.03" stroke="hsl(var(--foreground))" strokeOpacity="0.07" strokeWidth="1" />
      <rect x="185" y="208" width="130" height="28" rx="8" fill="hsl(var(--foreground))" fillOpacity="0.03" stroke="hsl(var(--foreground))" strokeOpacity="0.07" strokeWidth="1" />
      <text x="200" y="220" fill="hsl(var(--foreground))" fillOpacity="0.25" fontSize="10" fontFamily="sans-serif">День дедлайна</text>
      <text x="200" y="232" fill="hsl(var(--foreground))" fillOpacity="0.15" fontSize="9" fontFamily="sans-serif">🎯 Сдать работу</text>

      {/* Decorative clock top-left */}
      <circle cx="80" cy="90" r="28" fill="hsl(var(--foreground))" fillOpacity="0.04" stroke="hsl(var(--foreground))" strokeOpacity="0.1" strokeWidth="1" />
      <circle cx="80" cy="90" r="2" fill="hsl(var(--foreground))" fillOpacity="0.3" />
      <line x1="80" y1="90" x2="80" y2="72" stroke="hsl(var(--primary))" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="80" y1="90" x2="93" y2="96" stroke="hsl(var(--foreground))" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
)

export default IllustrationReminders
