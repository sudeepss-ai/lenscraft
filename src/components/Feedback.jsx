const Feedback = () => {
  return (
    <section className="panel">

      <h2 className="heading">
        Client Feedback & Approval
      </h2>

      <form>

        <input
          type="text"
          placeholder="Client name"
          className="field"
          required
        />

        <input
          type="text"
          placeholder="Photo or gallery name"
          className="field"
          required
        />

        <textarea
          placeholder="Write your feedback"
          className="field"
          required
        />

        <select className="field" required>
          <option value="">Approval Status</option>
          <option>Approved</option>
          <option>Changes Required</option>
          <option>Rejected</option>
        </select>

        <button type="submit" className="btn">
          Submit Feedback
        </button>

      </form>

    </section>
  )
}

export default Feedback