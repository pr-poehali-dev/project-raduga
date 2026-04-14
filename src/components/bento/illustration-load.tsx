import type React from "react"

const IllustrationLoad: React.FC = () => (
  <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
    <svg width="100%" height="100%" viewBox="0 0 400 288" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {/* Grid lines */}
      {[0,1,2,3,4].map(i => (
        <line key={i} x1="70" y1={220 - i * 36} x2="340" y2={220 - i * 36} stroke="hsl(var(--foreground))" strokeOpacity="0.06" strokeWidth="1" />
      ))}

      {/* Bar chart - week load */}
      {/* Mon */}
      <rect x="90" y="160" width="28" height="60" rx="6" fill="hsl(var(--primary))" fillOpacity="0.7" />
      {/* Tue */}
      <rect x="130" y="130" width="28" height="90" rx="6" fill="hsl(var(--primary))" fillOpacity="0.85" />
      {/* Wed - peak / busy */}
      <rect x="170" y="90" width="28" height="130" rx="6" fill="hsl(var(--primary))" fillOpacity="1" />
      {/* Thu */}
      <rect x="210" y="150" width="28" height="70" rx="6" fill="hsl(var(--primary))" fillOpacity="0.6" />
      {/* Fri */}
      <rect x="250" y="180" width="28" height="40" rx="6" fill="hsl(var(--foreground))" fillOpacity="0.12" />
      {/* Sat */}
      <rect x="290" y="200" width="28" height="20" rx="6" fill="hsl(var(--foreground))" fillOpacity="0.07" />

      {/* X axis */}
      <line x1="70" y1="220" x2="340" y2="220" stroke="hsl(var(--foreground))" strokeOpacity="0.1" strokeWidth="1" />

      {/* Day labels */}
      {["Пн","Вт","Ср","Чт","Пт","Сб"].map((d, i) => (
        <text key={d} x={104 + i * 40} y="234" textAnchor="middle" fill="hsl(var(--foreground))" fillOpacity={i === 2 ? 0.7 : 0.25} fontSize="11" fontFamily="sans-serif">{d}</text>
      ))}

      {/* "Завал" label on peak */}
      <rect x="154" y="68" width="60" height="20" rx="6" fill="hsl(var(--primary))" fillOpacity="0.2" stroke="hsl(var(--primary))" strokeOpacity="0.4" strokeWidth="1" />
      <text x="184" y="82" textAnchor="middle" fill="hsl(var(--primary))" fillOpacity="0.9" fontSize="11" fontFamily="sans-serif">завал</text>

      {/* Glow under peak bar */}
      <ellipse cx="184" cy="222" rx="18" ry="5" fill="hsl(var(--primary))" fillOpacity="0.3" />
    </svg>
  </div>
)

export default IllustrationLoad
