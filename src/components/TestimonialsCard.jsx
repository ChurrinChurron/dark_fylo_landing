
const TestimonialsCard = ({ quote, name, role, avatar }) => {
  return (
    <article className="relative flex min-h-[180px] w-full lg:max-w-[40rem] mx-auto flex-col justify-between overflow-hidden rounded-xl bg-[var(--color-primary-800)]/75 p-8 shadow-2xl shadow-[var(--color-primary-950)]/20">
      <p className="relative text-md leading-7 text-slate-200">{quote}</p>
      <div className="mt-6 flex items-center gap-4">
        <img
          src={avatar}
          alt={`${name} profile`}
          className="h-11 w-11 rounded-full object-cover ring-2 ring-white/5"
        />
        <div>
          <h3 className="mb-1 text-md font-semibold text-white tracking-wider">{name}</h3>
          <p className="text-xs text-white">{role}</p>
        </div>
      </div>
    </article>
  )
}

export default TestimonialsCard