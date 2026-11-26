import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-black border-b border-neutral-800 px-6 py-5">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-5">

        <Link to="/" className="text-2xl font-bold text-white">
          Lenscraft
        </Link>

        <form
          action="/gallery"
          className="flex items-center bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 w-full sm:w-64 focus-within:border-neutral-500 transition"
        >
          <FaSearch className="text-neutral-400 text-xs mr-2 shrink-0" />
          <input
            type="search"
            name="q"
            placeholder="Search photos, categories..."
            className="bg-transparent text-sm text-white placeholder-neutral-500 outline-none w-full"
          />
        </form>

        <div className="flex flex-wrap gap-5 text-sm text-neutral-300">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/gallery" className="hover:text-white transition">Gallery</Link>
          <Link to="/booking" className="hover:text-white transition">Booking</Link>
          <Link to="/register" className="hover:text-white transition">Register</Link>
          <Link to="/about" className="hover:text-white transition">About</Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar