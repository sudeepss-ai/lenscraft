const Packages = () => {
  return (
    <section className="panel">

      <h2 className="heading">
        Create New Package
      </h2>

      <form>

        <input
          type="text"
          placeholder="Package name"
          className="field"
          required
        />

        <input
          type="number"
          placeholder="Package price (₹)"
          min="0"
          className="field"
          required
        />

        <input
          type="number"
          placeholder="Duration in hours"
          min="1"
          className="field"
          required
        />

        <input
          type="number"
          placeholder="Number of edited photographs"
          min="1"
          className="field"
          required
        />

        <textarea
          placeholder="Package description"
          className="field"
        />

        <button type="submit" className="btn">
          Create Package
        </button>

      </form>

    </section>
  )
}

export default Packages