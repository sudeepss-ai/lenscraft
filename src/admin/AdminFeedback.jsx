import AdminNavbar from './AdminNavbar'

const AdminFeedback = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 flex flex-col">
      <AdminNavbar />

      <main className="section flex-1 w-full">

        <div className="mb-8 border-b border-neutral-800 pb-6">
          <p className="text-neutral-400 text-sm tracking-widest mb-2">
            ADMIN CLIENT REVIEW
          </p>
          <h1 className="text-4xl font-bold text-white">
            Client Feedback &amp; Approvals
          </h1>
        </div>

        <section className="panel">

          <h2 className="heading">
            Submitted Client Feedbacks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5">
              <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="text-lg font-semibold text-white">Ananya Sharma</h3>
                <span className="border border-neutral-600 text-white text-xs px-3 py-1 rounded-full">
                  Approved
                </span>
              </div>
              <p className="text-neutral-500 text-xs mb-3">
                Golden Hour Portrait • Nov 19, 2026
              </p>
              <p className="text-neutral-300 text-sm leading-relaxed">
                The warm window lighting and crisp focus look timeless. Approved for final high-res print and album delivery.
              </p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5">
              <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="text-lg font-semibold text-white">Rohan Verma</h3>
                <span className="border border-neutral-700 text-neutral-300 text-xs px-3 py-1 rounded-full">
                  Changes Required
                </span>
              </div>
              <p className="text-neutral-500 text-xs mb-3">
                Rohan &amp; Kavya — Wedding Vault • Nov 22, 2026
              </p>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Love the framing through the stone archway — please crop slightly tighter on the left edge for the cover shot.
              </p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5">
              <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="text-lg font-semibold text-white">Meera Nair</h3>
                <span className="border border-neutral-600 text-white text-xs px-3 py-1 rounded-full">
                  Approved
                </span>
              </div>
              <p className="text-neutral-500 text-xs mb-3">
                Rainy Dusk Walk • Nov 21, 2026
              </p>
              <p className="text-neutral-300 text-sm leading-relaxed">
                The neon reflections on the wet street came out vibrant and sharp. Ready for editorial publication.
              </p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5">
              <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="text-lg font-semibold text-white">Vikram Desai</h3>
                <span className="border border-neutral-800 text-neutral-400 text-xs px-3 py-1 rounded-full">
                  Rejected
                </span>
              </div>
              <p className="text-neutral-500 text-xs mb-3">
                Alpine Sunrise Lake • Nov 24, 2026
              </p>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Prefer the wider landscape frame from the second morning set instead of this tighter crop.
              </p>
            </div>

          </div>

        </section>

      </main>

      <footer className="bg-black border-t border-neutral-800 text-center py-6 px-6 text-xs text-neutral-500">
        © 2026 Lenscraft Admin. Internal Studio Management.
      </footer>
    </div>
  )
}

export default AdminFeedback
