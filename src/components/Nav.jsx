import React from 'react'
import logo from '../assets/logo.svg'

const Nav = () => {
  return (
    <nav className="flex items-center justify-between gap-8 font-medium text-slate-200">
      <a href="/" className="flex items-center gap-3 text-white">
        <img src={logo} alt="Fylo logo" className="h-8 w-26" />
      </a>
      <div className="flex items-center gap-8">
        <a href="#features" className="pb-1 hover:text-white hover:decoration-1 hover:underline transition">Features</a>
        <a href="#team" className="pb-1 hover:text-white hover:decoration-1 hover:underline transition">Team</a>
        <a href="#signin" className="pb-1 hover:text-white hover:decoration-1 hover:underline transition">Sign In</a>
      </div>
    </nav>
  )
}

export default Nav