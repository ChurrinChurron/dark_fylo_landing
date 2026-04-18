import Nav from './Nav'
import heroIllustration from '../assets/illustration-intro.png'


const Header = () => {
  return (
    <header className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-12 md:py-12 text-sm sm:text-base">

        <Nav />

          <figure className="flex justify-center mt-14 lg:justify-end">
            <img
              src={heroIllustration}
              alt="People organizing files into a secure folder"
              className="w-full max-w-[500px] mx-auto"
            />
          </figure>

        <section className="mt-12 flex flex-col lg:items-center">
          <div className="space-y-8 lg:max-w-3xl">
            <h1 className="text-center text-3xl font-semibold tracking-tight leading-11 text-white sm:text-5xl sm:leading-18">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="max-w-2xl mx-auto text-center text-sm leading-7 text-slate-300 sm:text-base sm:leading-7">
              Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.
            </p>
            <a
              href="#get-started"
              className="block w-72 max-w-xs mx-auto text-center rounded-full bg-cyan-400 px-6 py-5 text-lg font-semibold text-white transition hover:bg-cyan-300 sm:text-xl"
            >
              Get Started
            </a>
          </div>
        </section>
      </div>
    </header>
  )
}

export default Header