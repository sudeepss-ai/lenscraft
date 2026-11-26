import AdminNavbar from './AdminNavbar'
import CreatePrivateGallery from '../components/CreatePrivateGallery'
import PrivateGallery from '../components/PrivateGallery'

const AdminGalleries = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 flex flex-col">
      <AdminNavbar />

      <main className="section flex-1 w-full">

        <div className="mb-8 border-b border-neutral-800 pb-6">
          <p className="text-neutral-400 text-sm tracking-widest mb-2">
            ADMIN CLIENT DELIVERY
          </p>
          <h1 className="text-4xl font-bold text-white">
            Private Client Galleries
          </h1>
        </div>

        <CreatePrivateGallery />
        <PrivateGallery />

      </main>

      <footer className="bg-black border-t border-neutral-800 text-center py-6 px-6 text-xs text-neutral-500">
        © 2026 Lenscraft Admin. Internal Studio Management.
      </footer>
    </div>
  )
}

export default AdminGalleries
