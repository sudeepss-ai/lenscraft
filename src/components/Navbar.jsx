import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="bg-black border-b border-neutral-800 px-6 py-5">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-5">

        <Link to="/" className="text-2xl font-bold text-white">
          Lenscraft
        </Link>

        <div className="flex flex-wrap gap-5 text-sm text-neutral-300">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/gallery" className="hover:text-white transition">Gallery</Link>
          <Link to="/booking" className="hover:text-white transition">Booking</Link>
          <Link to="/dashboard" className="hover:text-white transition">Dashboard</Link>
          <Link to="/register" className="hover:text-white transition">Register</Link>
          <Link to="/about" className="hover:text-white transition">About</Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar