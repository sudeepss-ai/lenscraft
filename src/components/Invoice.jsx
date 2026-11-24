const Invoice = () => {
  return (
    <section className="panel">

      <h2 className="heading">
        Invoice Management
      </h2>

      <form className="mb-8">

        <label className="block text-sm text-neutral-400 mb-1">
          Invoice Number
        </label>

        <input
          type="text"
          defaultValue="LC-INV-2026-104"
          readOnly
          className="field text-neutral-300 cursor-not-allowed"
          required
        />

        <input
          type="text"
          placeholder="Client name"
          className="field"
          required
        />

        <input
          type="text"
          placeholder="Photography service"
          className="field"
          required
        />

        <input
          type="number"
          placeholder="Invoice amount (₹)"
          min="0"
          className="field"
          required
        />

        <label>Invoice Date</label>

        <input
          type="date"
          className="field"
          required
        />

        <button type="submit" className="btn">
          Create Invoice
        </button>

      </form>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-neutral-800">
            <tr>
              <th className="p-3">Invoice #</th>
              <th className="p-3">Client</th>
              <th className="p-3">Service</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-800">
              <td className="p-3 text-white font-mono text-sm">LC-INV-2026-101</td>
              <td className="p-3 text-neutral-300">Ananya Sharma</td>
              <td className="p-3 text-neutral-300">Portrait Essential</td>
              <td className="p-3 text-white">₹8,000</td>
              <td className="p-3 text-neutral-400">2026-11-18</td>
            </tr>
            <tr className="border-b border-neutral-800">
              <td className="p-3 text-white font-mono text-sm">LC-INV-2026-102</td>
              <td className="p-3 text-neutral-300">Rohan Verma</td>
              <td className="p-3 text-neutral-300">Signature Wedding</td>
              <td className="p-3 text-white">₹65,000</td>
              <td className="p-3 text-neutral-400">2026-11-22</td>
            </tr>
            <tr>
              <td className="p-3 text-white font-mono text-sm">LC-INV-2026-103</td>
              <td className="p-3 text-neutral-300">Meera Nair</td>
              <td className="p-3 text-neutral-300">Editorial & Street</td>
              <td className="p-3 text-white">₹18,000</td>
              <td className="p-3 text-neutral-400">2026-11-20</td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  )
}

export default Invoice