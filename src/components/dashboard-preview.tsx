import Icon from "@/components/ui/icon"

const deadlines = [
  { name: "Deadline 1", date: "15 апр", color: "from-emerald-400 to-teal-500", urgent: true },
  { name: "Deadline 2", date: "18 апр", color: "", urgent: false },
  { name: "Deadline 3", date: "20 апр", color: "", urgent: false },
  { name: "Deadline 4", date: "24 апр", color: "", urgent: false },
]

const sources = [
  { icon: "Send", label: "Telegram" },
  { icon: "Mail", label: "Gmail" },
  { icon: "FileText", label: "Notion" },
  { icon: "Calendar", label: "LMS" },
]

const days = ["Пн", "Вт", "Ср", "Чт", "Пт"]

export function DashboardPreview() {
  return (
    <div className="w-[calc(100vw-48px)] md:w-[420px]">
      {/* Phone frame */}
      <div
        className="relative mx-auto rounded-[44px] p-[3px] shadow-2xl"
        style={{
          background: "linear-gradient(145deg, rgba(255,255,255,0.15), rgba(255,255,255,0.04))",
          boxShadow: "0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        <div
          className="rounded-[42px] overflow-hidden"
          style={{ background: "hsl(222, 47%, 8%)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {/* Notch */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-28 h-7 rounded-full bg-black flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-zinc-800" />
              <div className="w-3 h-3 rounded-full bg-zinc-900 border border-zinc-700" />
            </div>
          </div>

          {/* App content */}
          <div className="px-5 pb-8">
            {/* Header */}
            <div className="flex items-center justify-between py-3">
              <Icon name="Menu" size={20} className="text-white" />
              <span className="text-white font-semibold text-lg">Deadlines</span>
              <div className="flex gap-3">
                <Icon name="Search" size={18} className="text-white/60" />
                <Icon name="Plus" size={18} className="text-white/60" />
              </div>
            </div>

            {/* Days */}
            <div className="flex justify-between px-1 mb-4">
              {days.map((d, i) => (
                <div key={d} className="flex flex-col items-center gap-1">
                  <span className={`text-xs font-medium ${i === 0 ? "text-emerald-400" : "text-white/40"}`}>{d}</span>
                  {i === 0 && <div className="w-1 h-1 rounded-full bg-emerald-400" />}
                </div>
              ))}
            </div>

            {/* Deadline cards + sidebar */}
            <div className="flex gap-3">
              {/* Source icons */}
              <div className="flex flex-col gap-3 pt-1">
                {sources.map((s) => (
                  <div
                    key={s.label}
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <Icon name={s.icon as "Send"} size={14} className="text-white/50" />
                  </div>
                ))}
              </div>

              {/* Cards */}
              <div className="flex-1 flex flex-col gap-2">
                {deadlines.map((d) => (
                  <div
                    key={d.name}
                    className={`rounded-2xl px-4 py-3 ${d.urgent ? `bg-gradient-to-br ${d.color}` : ""}`}
                    style={!d.urgent ? { background: "rgba(255,255,255,0.07)" } : {}}
                  >
                    <div className={`text-sm font-medium ${d.urgent ? "text-emerald-900" : "text-white/60"}`}>
                      {d.name}
                    </div>
                    <div className={`text-xl font-bold mt-0.5 ${d.urgent ? "text-emerald-900" : "text-emerald-400"}`}>
                      {d.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Home indicator */}
          <div className="flex justify-center pb-3">
            <div className="w-28 h-1 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </div>
  )
}
