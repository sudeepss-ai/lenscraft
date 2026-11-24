
const AppointmentList = () => {
  return (
    <section className="panel">

      <h2 className="heading">
        Appointment Management
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead className="bg-neutral-800">
            <tr>
              <th className="p-3">Client</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-neutral-800">
              <td className="p-3 text-white">Ananya Sharma</td>
              <td className="p-3 text-neutral-300">2026-12-02</td>
              <td className="p-3 text-neutral-300">10:00 AM</td>
              <td className="p-3 text-white">Confirmed</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <td className="p-3 text-white">Rohan Verma</td>
              <td className="p-3 text-neutral-300">2026-12-08</td>
              <td className="p-3 text-neutral-300">04:30 PM</td>
              <td className="p-3 text-neutral-300">Pending</td>
            </tr>
            <tr>
              <td className="p-3 text-white">Meera Nair</td>
              <td className="p-3 text-neutral-300">2026-11-20</td>
              <td className="p-3 text-neutral-300">06:00 PM</td>
              <td className="p-3 text-neutral-400">Completed</td>
            </tr>
          </tbody>

        </table>

      </div>

    </section>
  )
}

export default AppointmentList