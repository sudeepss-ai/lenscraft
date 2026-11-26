import { Link } from 'react-router-dom'
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-neutral-800 pt-14 pb-8 px-6 mt-12">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-neutral-800">

          <div>
            <Link to="/" className="text-2xl font-bold tracking-tight text-white">
              Lenscraft
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mt-3 max-w-xs">
              Capturing moments. Creating timeless visual stories through portrait, wedding, street, and editorial photography.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
              Explore
            </h3>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-6 text-sm text-neutral-300">
              <Link to="/" className="hover:text-white transition">Home</Link>
              <Link to="/gallery" className="hover:text-white transition">Gallery</Link>
              <Link to="/booking" className="hover:text-white transition">Booking</Link>
              <Link to="/register" className="hover:text-white transition">Register</Link>
              <Link to="/about" className="hover:text-white transition">About</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
              Connect
            </h3>

            <div className="space-y-3 text-sm text-neutral-300 mb-5">
              <a
                href="mailto:sudxxp.2004@gmail.com"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <FaEnvelope className="text-neutral-400 shrink-0" />
                <span>sudxxp.2004@gmail.com</span>
              </a>

              <a
                href="tel:9778474087"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <FaPhoneAlt className="text-neutral-400 shrink-0" />
                <span>9778474087</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/lenscraft/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-950 flex items-center justify-center text-neutral-300 hover:text-white hover:border-white transition"
              >
                <FaInstagram className="text-lg" />
              </a>

              <a
                href="https://www.linkedin.com/in/sudeep-s-s-b882bb315"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-950 flex items-center justify-center text-neutral-300 hover:text-white hover:border-white transition"
              >
                <FaLinkedin className="text-lg" />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-950 flex items-center justify-center text-neutral-300 hover:text-white hover:border-white transition"
              >
                <FaGithub className="text-lg" />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <p>© 2026 Lenscraft. All rights reserved.</p>
          <p>Photography &amp; Studio Management</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer