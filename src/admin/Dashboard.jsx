import { Link } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import Analytics from '../components/Analytics'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 flex flex-col">
      <AdminNavbar />

      <main className="section flex-1 w-full">

        <div className="mb-8 border-b border-neutral-800 pb-6">
          <p className="text-neutral-400 text-sm tracking-widest mb-2">
            ADMINISTRATION &amp; STUDIO OVERVIEW
          </p>
          <h1 className="text-4xl font-bold text-white">
            Admin Dashboard
          </h1>
        </div>

        <Analytics />

        <section className="mt-8">
          <h2 className="heading">
            Admin Controls
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            <Link to="/admin/appointments" className="panel mb-0 hover:border-white transition block">
              <h3 className="text-lg font-semibold text-white">Appointments &amp; Calendar</h3>
              <p className="text-neutral-400 text-sm mt-2">
                Review client bookings and allocate shoots to available photographers.
              </p>
            </Link>

            <Link to="/admin/packages" className="panel mb-0 hover:border-white transition block">
              <h3 className="text-lg font-semibold text-white">Packages</h3>
              <p className="text-neutral-400 text-sm mt-2">
                Create new photography packages and manage pricing tiers.
              </p>
            </Link>

            <Link to="/admin/galleries" className="panel mb-0 hover:border-white transition block">
              <h3 className="text-lg font-semibold text-white">Private Galleries</h3>
              <p className="text-neutral-400 text-sm mt-2">
                Create password-protected client vaults for gallery delivery.
              </p>
            </Link>

            <Link to="/admin/payments" className="panel mb-0 hover:border-white transition block">
              <h3 className="text-lg font-semibold text-white">Payments &amp; Invoices</h3>
              <p className="text-neutral-400 text-sm mt-2">
                Record client payments and generate invoices from recorded payments.
              </p>
            </Link>

            <Link to="/admin/feedback" className="panel mb-0 hover:border-white transition block">
              <h3 className="text-lg font-semibold text-white">Client Feedbacks</h3>
              <p className="text-neutral-400 text-sm mt-2">
                View feedback comments and image approval statuses submitted by clients.
              </p>
            </Link>

          </div>
        </section>

      </main>

      <footer className="bg-black border-t border-neutral-800 text-center py-6 px-6 text-xs text-neutral-500">
        © 2026 Lenscraft Admin. Internal Studio Management.
      </footer>
    </div>
  )
}

export default Dashboard
