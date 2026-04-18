import illustrationProductive from '../assets/illustration-stay-productive.png'

const Productive = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-12">
      <div className="grid gap-12 items-center md:grid-cols-[0.9fr_1.1fr]">
        <img
          src={illustrationProductive}
          alt="People working together with speech bubbles"
          className="w-full max-w-[520px] justify-self-center rounded-3xl lg:justify-self-start xl:w-[70rem]"
        />

        <div className="space-y-8 md:space-y-5">
          <h2 className="text-3xl text-center font-semibold tracking-tight text-white md:text-left md:text-4xl md:max-w-[20rem] md:leading-snug lg:text-5xl lg:max-w-[25rem]">
            Stay productive, wherever you are
          </h2>
          <p className="text-lg leading-8 text-white sm:text-base md:max-w-[38rem] lg:text-[1.24rem]">
            Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
            <br/><br/>
            Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
          </p>
          <a
            href="#how-it-works"
            className="group no-underline inline-flex items-center gap-3 text-md text-[var(--color-accent-200)] pb-2 border-b-1 border-[var(--color-accent-200)] transition hover:text-white hover:border-white"
          >
            <span>See how Fylo works</span>
            <span className="inline-flex h-6 w-6 items-center justify-center pb-1 rounded-full bg-[var(--color-accent-200)] text-[var(--color-primary-900)] transition group-hover:bg-white group-hover:text-[var(--color-primary-900)] md:h-5 md:w-5">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Productive