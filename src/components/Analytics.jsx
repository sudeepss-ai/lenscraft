
const Analytics = () => {
  return (
    <section>

      <h2 className="heading">
        Business Analytics
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        <div className="panel">
          <p className="text-neutral-400">Total Bookings</p>
          <h3 className="text-4xl font-bold mt-3 text-white">12</h3>
        </div>

        <div className="panel">
          <p className="text-neutral-400">Total Clients</p>
          <h3 className="text-4xl font-bold mt-3 text-white">9</h3>
        </div>

        <div className="panel">
          <p className="text-neutral-400">Total Revenue</p>
          <h3 className="text-4xl font-bold mt-3 text-white">₹1,45,000</h3>
        </div>

        <div className="panel">
          <p className="text-neutral-400">Total Photographs</p>
          <h3 className="text-4xl font-bold mt-3 text-white">48</h3>
        </div>

        <div className="panel">
          <p className="text-neutral-400">Upcoming Shoots</p>
          <h3 className="text-4xl font-bold mt-3 text-white">3</h3>
        </div>

        <div className="panel">
          <p className="text-neutral-400">Pending Payments</p>
          <h3 className="text-4xl font-bold mt-3 text-white">₹18,000</h3>
        </div>

        <div className="panel">
          <p className="text-neutral-400">Client Galleries</p>
          <h3 className="text-4xl font-bold mt-3 text-white">4</h3>
        </div>

        <div className="panel">
          <p className="text-neutral-400">Approved Photos</p>
          <h3 className="text-4xl font-bold mt-3 text-white">36</h3>
        </div>

      </div>

    </section>
  )
}

export default Analytics