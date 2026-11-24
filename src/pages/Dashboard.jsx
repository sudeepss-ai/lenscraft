import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Analytics from '../components/Analytics'
import Packages from '../components/Packages'
import Payments from '../components/Payments'
import Invoice from '../components/Invoice'
import CreatePrivateGallery from '../components/CreatePrivateGallery'

const Dashboard = () => {
  return (
    <div>
      <Navbar />

      <main className="section">

        <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-neutral-800 pb-6">
          <div>
            <p className="text-neutral-400 text-sm tracking-widest mb-2">
              STUDIO OVERVIEW
            </p>
            <h1 className="text-4xl font-bold text-white">
              Studio Dashboard
            </h1>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <a href="#analytics" className="border border-neutral-700 text-neutral-300 hover:text-white hover:border-white px-4 py-2 rounded-lg transition">
              Analytics
            </a>
            <a href="#packages" className="border border-neutral-700 text-neutral-300 hover:text-white hover:border-white px-4 py-2 rounded-lg transition">
              New Package
            </a>
            <a href="#payments" className="border border-neutral-700 text-neutral-300 hover:text-white hover:border-white px-4 py-2 rounded-lg transition">
              Payments
            </a>
            <a href="#invoices" className="border border-neutral-700 text-neutral-300 hover:text-white hover:border-white px-4 py-2 rounded-lg transition">
              Invoices
            </a>
            <a href="#private-gallery-admin" className="border border-neutral-700 text-neutral-300 hover:text-white hover:border-white px-4 py-2 rounded-lg transition">
              Private Gallery
            </a>
          </div>
        </div>

        <div id="analytics" className="mb-8">
          <Analytics />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div id="packages">
            <Packages />
          </div>

          <div id="private-gallery-admin">
            <CreatePrivateGallery />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div id="payments">
            <Payments />
          </div>

          <div id="invoices">
            <Invoice />
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}

export default Dashboard
