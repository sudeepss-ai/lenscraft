import React from "react"

const Portfolio = () => {
  return (
    <section className="panel" id="portfolio">

      <h2 className="heading">
        Create Portfolio
      </h2>

      <form>

        <input
          type="text"
          placeholder="Photo title"
          className="field"
          required
        />

        <select className="field" required>
          <option value="">Select Category</option>
          <option>Portrait</option>
          <option>Wedding</option>
          <option>Landscape</option>
          <option>Street</option>
          <option>Wildlife</option>
          <option>Fashion</option>
        </select>

        <textarea
          placeholder="Photo description"
          className="field"
        />

        <label className="block mb-2">
          Select Photographs
        </label>

        <input
          type="file"
          accept="image/*"
          multiple
          className="field"
          required
        />

        <button type="submit" className="btn">
          Submit Portfolio
        </button>

        <button type="reset" className="ml-4 text-neutral-400">
          Clear
        </button>

      </form>

    </section>
  )
}

export default Portfolio