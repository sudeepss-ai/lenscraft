import AdminNavbar from './AdminNavbar'
import AppointmentList from '../components/AppointmentList'
import ShootCalendar from '../components/ShootCalendar'

const AdminAppointments = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 flex flex-col">
      <AdminNavbar />

      <main className="section flex-1 w-full">

        <div className="mb-8 border-b border-neutral-800 pb-6">
          <p className="text-neutral-400 text-sm tracking-widest mb-2">
            ADMIN SCHEDULING
          </p>
          <h1 className="text-4xl font-bold text-white">
            Appointments &amp; Shoot Calendar
          </h1>
        </div>

        <AppointmentList />
        <ShootCalendar />

      </main>

      <footer className="bg-black border-t border-neutral-800 text-center py-6 px-6 text-xs text-neutral-500">
        © 2026 Lenscraft Admin. Internal Studio Management.
      </footer>
    </div>
  )
}

export default AdminAppointments
