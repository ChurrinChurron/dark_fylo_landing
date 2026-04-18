import logo from '../assets/logo.svg'
import CTA from './CTA'
import FaDirection from '../assets/location.svg'
import FaPhone from '../assets/phone.svg'
import FaEmail from '../assets/gmail.svg'
import Facebook from '../assets/facebook.svg'
import Twitter from '../assets/twitter.svg'
import Instagram from '../assets/instagram.svg'

const Footer = () => {

  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        <div className="mx-auto w-full lg:absolute lg:inset-x-0 lg:-top-36 lg:flex lg:justify-center">
          <div className="w-full px-6 lg:max-w-6xl">
            <CTA overlay={true} />
          </div>
        </div>
      </div>

      <footer className="bg-[var(--color-primary-950)] mx-auto max-w-7xl px-6 pt-32 pb-16 md:px-12 lg:pt-44 lg:mx-0 lg:max-w-full">
        <img src={logo} alt="Fylo logo" className="h-15" />
        <div className="grid gap-10 text-sm lg:grid-cols-[1.1fr_0.24fr_0.2fr_0.35fr] items-start">

          <div className="mt-14 lg:grid lg:grid-cols-[1.6fr_1.3fr] lg:gap-12">
            <div className="flex items-start gap-7 text-white">
              <img src={FaDirection} className="h-6" alt="Location" />
              <span className="text-lg leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </div>
            <div className="mt-6 flex flex-col gap-4 lg:mt-0">
              <div className="flex items-start gap-7 text-white">
                <img src={FaPhone} className="h-6" alt="Phone" />
                <span className="text-lg">+1-543-123-4567</span>
              </div>
              <div className="flex items-start gap-7 text-white">
                <img src={FaEmail} className="h-6" alt="Email" />
                <span className="text-lg">example@fylo.com</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#" className="inline-block text-xl text-white transition hover:text-white">About Us</a>
            <a href="#" className="inline-block text-xl text-white transition hover:text-white">Jobs</a>
            <a href="#" className="inline-block text-xl text-white transition hover:text-white">Press</a>
            <a href="#" className="inline-block text-xl text-white transition hover:text-white">Blog</a>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#" className="inline-block text-xl text-white transition hover:text-white">Contact Us</a>
            <a href="#" className="inline-block text-xl text-white transition hover:text-white">Terms</a>
            <a href="#" className="inline-block text-xl text-white transition hover:text-white">Privacy</a>
          </div>

          <div className="flex justify-center items-center gap-5 mt-6 md:mt-0 md:justify-end">
            <a href={Facebook} className="border rounded-full p-3 transition hover:text-white">
              <img src={Facebook} className="h-6" alt="Facebook" />
            </a>
            <a href={Twitter} className="border rounded-full p-3 transition hover:text-white">
              <img src={Twitter} className="h-6" alt="Twitter" />
            </a>
            <a href={Instagram} className="border rounded-full p-3 transition hover:text-white">
              <img src={Instagram} className="h-7" alt="Instagram" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer