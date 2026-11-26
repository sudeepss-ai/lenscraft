import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <header className="bg-black border-b border-neutral-800 px-6 py-5">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">

        <div className="flex items-center gap-3">
          <Link to="/admin" className="text-2xl font-bold text-white">
            Lenscraft
          </Link>
          <span className="border border-neutral-700 text-neutral-300 text-xs uppercase tracking-widest px-3 py-1 rounded-full">
            Admin
          </span>
        </div>

        <nav className="flex flex-wrap gap-5 text-sm text-neutral-300">
          <Link to="/admin" className="hover:text-white transition">Analytics</Link>
          <Link to="/admin/appointments" className="hover:text-white transition">Appointments &amp; Calendar</Link>
          <Link to="/admin/packages" className="hover:text-white transition">Packages</Link>
          <Link to="/admin/galleries" className="hover:text-white transition">Private Galleries</Link>
          <Link to="/admin/payments" className="hover:text-white transition">Payments &amp; Invoices</Link>
          <Link to="/admin/feedback" className="hover:text-white transition">Feedbacks</Link>
        </nav>

      </div>
    </header>
  )
}

export default AdminNavbar
