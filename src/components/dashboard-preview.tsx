export function DashboardPreview() {
  return (
    <div className="w-[calc(100vw-32px)] md:w-[820px]">
      <div className="bg-primary-light/50 rounded-2xl p-2 shadow-2xl">
        <img
          src="https://cdn.poehali.dev/projects/4fe32421-8de5-4f10-b1ea-4004e5417599/files/023b1a02-f72e-4c69-a342-f69ebccd3e87.jpg"
          alt="DeadlineHub — календарь дедлайнов"
          width={820}
          height={500}
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  )
}