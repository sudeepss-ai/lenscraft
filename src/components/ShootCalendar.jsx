const ShootCalendar = () => {
  return (
    <section className="panel">

      <p className="text-neutral-400 text-xs tracking-widest mb-1">ADMIN SCHEDULING</p>
      <h2 className="heading">
        Shoot Calendar & Photographer Allocation
      </h2>

      <form className="mb-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">

          <input
            type="text"
            placeholder="Shoot title"
            className="field"
            required
          />

          <input
            type="text"
            placeholder="Client name"
            className="field"
            required
          />

          <select className="field" required>
            <option value=""> Available Photographers</option>
            <option>Sudeep — Portrait & Wedding (Available)</option>
            <option>Aarav Mehta — Editorial & Street (Available)</option>
            <option>Diya Kapoor — Wildlife & Landscape (Available)</option>
            <option>Kabir Sen — Fashion & Event (Available)</option>
          </select>

          <input
            type="text"
            placeholder="Shoot location"
            className="field"
            required
          />

          <div>
            <label className="block text-sm text-neutral-400 mb-1">Select Shoot Date</label>
            <input
              type="date"
              className="field"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-400 mb-1">Select Shoot Time</label>
            <input
              type="time"
              className="field"
              required
            />
          </div>

        </div>

        <button type="submit" className="btn">
            Schedule Shoot
        </button>

      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5">
          <p className="text-neutral-400 text-sm">Dec 02, 2026 • 10:00 AM</p>
          <h3 className="text-lg font-semibold text-white mt-2">Ananya Studio Portrait</h3>
          <p className="text-neutral-500 text-sm mt-1">Indiranagar Daylight Studio</p>
          <p className="text-neutral-300 text-xs mt-3 border-t border-neutral-800 pt-3">
            Allocated Photographer: <span className="text-white font-medium">Sudeep</span>
          </p>
        </div>

        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5">
          <p className="text-neutral-400 text-sm">Dec 08, 2026 • 04:30 PM</p>
          <h3 className="text-lg font-semibold text-white mt-2">Rohan & Kavya Pre-Wedding</h3>
          <p className="text-neutral-500 text-sm mt-1">Cubbon Park & Heritage Archway</p>
          <p className="text-neutral-300 text-xs mt-3 border-t border-neutral-800 pt-3">
            Allocated Photographer: <span className="text-white font-medium">Aarav Mehta</span>
          </p>
        </div>

        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5">
          <p className="text-neutral-400 text-sm">Dec 14, 2026 • 07:00 PM</p>
          <h3 className="text-lg font-semibold text-white mt-2">Evening Street Walk</h3>
          <p className="text-neutral-500 text-sm mt-1">MG Road & Church Street</p>
          <p className="text-neutral-300 text-xs mt-3 border-t border-neutral-800 pt-3">
            Allocated Photographer: <span className="text-white font-medium">Diya Kapoor</span>
          </p>
        </div>

      </div>

    </section>
  )
}

export default ShootCalendar