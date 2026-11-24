const ExistingPackages = () => {
  return (
    <section className="panel">

      <h2 className="heading">
        Available Photography Packages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 hover:border-neutral-600 transition">
          <p className="text-xs tracking-widest text-neutral-400 uppercase">Essential</p>
          <h3 className="text-xl font-semibold text-white mt-1">Portrait Essential</h3>
          <p className="text-3xl font-bold text-white mt-3">₹8,000</p>
          <p className="text-neutral-400 text-sm mt-2">2 Hours • 20 Edited Photos</p>
          <p className="text-neutral-500 text-sm mt-3">
            Studio or outdoor portrait session with high-resolution gallery delivery.
          </p>
        </div>

        <div className="bg-neutral-950 border border-neutral-700 rounded-xl p-5 hover:border-white transition">
          <p className="text-xs tracking-widest text-neutral-300 uppercase">Popular</p>
          <h3 className="text-xl font-semibold text-white mt-1">Editorial & Street</h3>
          <p className="text-3xl font-bold text-white mt-3">₹18,000</p>
          <p className="text-neutral-400 text-sm mt-2">4 Hours • 50 Edited Photos</p>
          <p className="text-neutral-500 text-sm mt-3">
            Half-day documentary and fashion shoot across multiple urban locations.
          </p>
        </div>

        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 hover:border-neutral-600 transition">
          <p className="text-xs tracking-widest text-neutral-400 uppercase">Complete</p>
          <h3 className="text-xl font-semibold text-white mt-1">Signature Wedding</h3>
          <p className="text-3xl font-bold text-white mt-3">₹65,000</p>
          <p className="text-neutral-400 text-sm mt-2">10 Hours • 200 Edited Photos</p>
          <p className="text-neutral-500 text-sm mt-3">
            Full-day wedding coverage, private client vault, and downloadable archive.
          </p>
        </div>

      </div>

    </section>
  )
}

export default ExistingPackages
