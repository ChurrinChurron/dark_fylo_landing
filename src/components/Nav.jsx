import logo from '../assets/logo.svg'

const Nav = () => {
  return (
    <nav className="flex items-center justify-between gap-8 font-medium text-slate-200 lg:pt-10">
      <a href="/" className="flex items-center gap-3 text-white">
        <img src={logo} alt="Fylo logo" className="h-8 w-26 lg:w-48 lg:h-14" />
      </a>
      <div className="flex items-center gap-8">
        <a href="#features" className="hover:text-white hover:decoration-1 hover:underline hover:under transition">Features</a>
        <a href="#team" className="hover:text-white hover:decoration-1 hover:underline hover:under transition">Team</a>
        <a href="#signin" className="hover:text-white hover:decoration-1 hover:underline hover:under transition">Sign In</a>
      </div>
    </nav>
  )
}

export default Nav