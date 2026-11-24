import React from "react"


const Payments = () => {
  return (
    <section className="panel">

      <h2 className="heading">
        Payment Tracking
      </h2>

      <form className="mb-8">

        <input
          type="text"
          placeholder="Client name"
          className="field"
          required
        />

        <input
          type="number"
          placeholder="Total amount (₹)"
          min="0"
          className="field"
          required
        />

        <input
          type="number"
          placeholder="Amount received (₹)"
          min="0"
          className="field"
          required
        />

        <select className="field" required>
          <option value="">Payment Method</option>
          <option>Cash</option>
          <option>UPI</option>
          <option>Bank Transfer</option>
        </select>

        <select className="field" required>
          <option value="">Payment Status</option>
          <option>Paid</option>
          <option>Pending</option>
          <option>Partially Paid</option>
        </select>

        <button type="submit" className="btn">
          Record Payment
        </button>

      </form>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-neutral-800">
            <tr>
              <th className="p-3">Client</th>
              <th className="p-3">Total</th>
              <th className="p-3">Received</th>
              <th className="p-3">Method</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-800">
              <td className="p-3 text-white">Ananya Sharma</td>
              <td className="p-3 text-neutral-300">₹8,000</td>
              <td className="p-3 text-neutral-300">₹8,000</td>
              <td className="p-3 text-neutral-300">UPI</td>
              <td className="p-3 text-white">Paid</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <td className="p-3 text-white">Rohan Verma</td>
              <td className="p-3 text-neutral-300">₹65,000</td>
              <td className="p-3 text-neutral-300">₹47,000</td>
              <td className="p-3 text-neutral-300">Bank Transfer</td>
              <td className="p-3 text-neutral-300">Partially Paid</td>
            </tr>
            <tr>
              <td className="p-3 text-white">Meera Nair</td>
              <td className="p-3 text-neutral-300">₹18,000</td>
              <td className="p-3 text-neutral-300">₹18,000</td>
              <td className="p-3 text-neutral-300">Cash</td>
              <td className="p-3 text-white">Paid</td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  )
}

export default Payments