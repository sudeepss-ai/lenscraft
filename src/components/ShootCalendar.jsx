const ShootCalendar = () => {
  return (
    <section className="panel">

      <h2 className="heading">
        Shoot Calendar & Scheduled Dates
      </h2>

      <form className="mb-8">

        <input
          type="text"
          placeholder="Shoot title"
          className="field"
          required
        />

        <label>Select Shoot Date</label>

        <input
          type="date"
          className="field"
          required
        />

        <label>Select Shoot Time</label>

        <input
          type="time"
          className="field"
          required
        />

        <button type="submit" className="btn">
          Schedule Shoot
        </button>

      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5">
          <p className="text-neutral-400 text-sm">Dec 02, 2026 • 10:00 AM</p>
          <h3 className="text-lg font-semibold text-white mt-2">Ananya Studio Portrait</h3>
          <p className="text-neutral-500 text-sm mt-1">Indiranagar Daylight Studio</p>
        </div>

        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5">
          <p className="text-neutral-400 text-sm">Dec 08, 2026 • 04:30 PM</p>
          <h3 className="text-lg font-semibold text-white mt-2">Rohan & Kavya Pre-Wedding</h3>
          <p className="text-neutral-500 text-sm mt-1">Cubbon Park & Heritage Archway</p>
        </div>

        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5">
          <p className="text-neutral-400 text-sm">Dec 14, 2026 • 07:00 PM</p>
          <h3 className="text-lg font-semibold text-white mt-2">Evening Street Walk</h3>
          <p className="text-neutral-500 text-sm mt-1">MG Road & Church Street</p>
        </div>

      </div>

    </section>
  )
}

export default ShootCalendar