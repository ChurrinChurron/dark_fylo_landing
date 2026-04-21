import logo from '../assets/logo.svg'
import CTA from './CTA'
import FaDirection from '../assets/location.svg'
import FaPhone from '../assets/phone.svg'
import FaEmail from '../assets/gmail.svg'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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

          <div className="mt-14 lg:grid lg:grid-cols-[1.1fr_1.4fr] lg:gap-12">
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
            <a href="#" className="inline-block text-xl text-white transition hover:font-semibold">About Us</a>
            <a href="#" className="inline-block text-xl text-white transition hover:font-semibold">Jobs</a>
            <a href="#" className="inline-block text-xl text-white transition hover:font-semibold">Press</a>
            <a href="#" className="inline-block text-xl text-white transition hover:font-semibold">Blog</a>
          </div>

          <div className="flex flex-col gap-4">
            <a href="#" className="inline-block text-xl text-white transition hover:font-semibold">Contact Us</a>
            <a href="#" className="inline-block text-xl text-white transition hover:font-semibold">Terms</a>
            <a href="#" className="inline-block text-xl text-white transition hover:font-semibold">Privacy</a>
          </div>

          <div className="flex justify-center items-center gap-5 mt-6 md:mt-0 md:justify-end">
            <a href="#facebook" className="group border rounded-full p-3 transition hover:border-[var(--color-accent-200)]">
              <FaFacebookF className="text-2xl transition group-hover:fill-[var(--color-accent-200)]" />
            </a>
            <a href="#twitter" className="group border rounded-full p-3 transition hover:border-[var(--color-accent-200)]">
              <FaXTwitter className="text-2xl transition group-hover:fill-[var(--color-accent-200)]" />
            </a>
            <a href="#instagram" className="group border rounded-full p-3 transition hover:border-[var(--color-accent-200)]">
              <FaInstagram className="text-2xl transition group-hover:fill-[var(--color-accent-200)]" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer