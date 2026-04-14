export function DashboardPreview() {
  return (
    <div className="w-[calc(100vw-32px)] md:w-[820px]">
      <div className="bg-primary-light/50 rounded-2xl p-2 shadow-2xl">
        <img
          src="https://cdn.poehali.dev/projects/4fe32421-8de5-4f10-b1ea-4004e5417599/files/ab6d2645-15df-4fdd-9981-b3776d86bae0.jpg"
          alt="DeadlineHub — календарь дедлайнов"
          width={820}
          height={500}
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  )
}