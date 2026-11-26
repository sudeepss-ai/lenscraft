const Payments = () => {
  return (
    <section className="panel" id="payment-invoice">

      <p className="text-neutral-400 text-xs tracking-widest mb-1">BILLING &amp; RECEIPTS</p>
      <h2 className="heading">
        Payment &amp; Invoice Creation
      </h2>

      <form className="mb-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">

          <div>
            <label className="block text-sm text-neutral-400 mb-1">
              Unique Invoice Number
            </label>
            <input
              type="text"
              defaultValue="LC-INV-2026-104"
              readOnly
              className="field text-neutral-300 cursor-not-allowed"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-400 mb-1">
              Payment Reference ID
            </label>
            <input
              type="text"
              defaultValue="PAY-104"
              readOnly
              className="field text-neutral-300 cursor-not-allowed"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Client name"
            className="field"
            required
          />

          <select className="field" required>
            <option value="">Photography Service / Package</option>
            <option>Portrait Essential (₹8,000)</option>
            <option>Editorial &amp; Street (₹18,000)</option>
            <option>Signature Wedding (₹65,000)</option>
          </select>

          <input
            type="number"
            placeholder="Total invoice amount (₹)"
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
            <option>Partially Paid</option>
            <option>Pending</option>
          </select>

        </div>

        <label className="block text-sm text-neutral-400 mb-1">
          Payment &amp; Invoice Date
        </label>

        <input
          type="date"
          className="field"
          required
        />

        <button type="submit" className="btn">
          Record Payment &amp; Create Invoice
        </button>

        <button type="reset" className="ml-4 text-neutral-400 hover:text-white transition">
          Clear
        </button>

      </form>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-neutral-800">
            <tr>
              <th className="p-3">Invoice #</th>
              <th className="p-3">Payment ID</th>
              <th className="p-3">Client</th>
              <th className="p-3">Service</th>
              <th className="p-3">Total</th>
              <th className="p-3">Received</th>
              <th className="p-3">Method</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-800">
              <td className="p-3 text-white font-mono text-sm">LC-INV-2026-101</td>
              <td className="p-3 text-neutral-300 font-mono text-sm">PAY-101</td>
              <td className="p-3 text-white">Ananya Sharma</td>
              <td className="p-3 text-neutral-300">Portrait Essential</td>
              <td className="p-3 text-neutral-300">₹8,000</td>
              <td className="p-3 text-white">₹8,000</td>
              <td className="p-3 text-neutral-300">UPI</td>
              <td className="p-3 text-white">Paid</td>
              <td className="p-3 text-neutral-400">2026-11-18</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <td className="p-3 text-white font-mono text-sm">LC-INV-2026-102</td>
              <td className="p-3 text-neutral-300 font-mono text-sm">PAY-102</td>
              <td className="p-3 text-white">Rohan Verma</td>
              <td className="p-3 text-neutral-300">Signature Wedding</td>
              <td className="p-3 text-neutral-300">₹65,000</td>
              <td className="p-3 text-white">₹47,000</td>
              <td className="p-3 text-neutral-300">Bank Transfer</td>
              <td className="p-3 text-neutral-300">Partially Paid</td>
              <td className="p-3 text-neutral-400">2026-11-22</td>
            </tr>
            <tr>
              <td className="p-3 text-white font-mono text-sm">LC-INV-2026-103</td>
              <td className="p-3 text-neutral-300 font-mono text-sm">PAY-103</td>
              <td className="p-3 text-white">Meera Nair</td>
              <td className="p-3 text-neutral-300">Editorial &amp; Street</td>
              <td className="p-3 text-neutral-300">₹18,000</td>
              <td className="p-3 text-white">₹18,000</td>
              <td className="p-3 text-neutral-300">Cash</td>
              <td className="p-3 text-white">Paid</td>
              <td className="p-3 text-neutral-400">2026-11-20</td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  )
}

export default Payments