import AdminNavbar from './AdminNavbar'
import Payments from '../components/Payments'

const AdminPayments = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 flex flex-col">
      <AdminNavbar />

      <main className="section flex-1 w-full">

        <div className="mb-8 border-b border-neutral-800 pb-6">
          <p className="text-neutral-400 text-sm tracking-widest mb-2">
            ADMIN BILLING
          </p>
          <h1 className="text-4xl font-bold text-white">
            Payments &amp; Invoices
          </h1>
        </div>

        <Payments />

      </main>

      <footer className="bg-black border-t border-neutral-800 text-center py-6 px-6 text-xs text-neutral-500">
        © 2026 Lenscraft Admin. Internal Studio Management.
      </footer>
    </div>
  )
}

export default AdminPayments
