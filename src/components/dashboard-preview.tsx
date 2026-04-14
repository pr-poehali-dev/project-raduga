export function DashboardPreview() {
  return (
    <div className="w-[calc(100vw-32px)] md:w-[1160px]">
      <div className="bg-primary-light/50 rounded-2xl p-2 shadow-2xl">
        <img
          src="https://cdn.poehali.dev/projects/4fe32421-8de5-4f10-b1ea-4004e5417599/files/929ad7ad-bb3e-4de2-bc62-93b99d964c6f.jpg"
          alt="DeadlineHub — календарь дедлайнов"
          width={1160}
          height={700}
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  )
}