import React from "react"
const CreatePrivateGallery = () => {
  return (
    <section className="panel">

      <h2 className="heading">
        Create Private Client Gallery
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
          placeholder="Gallery name"
          className="field"
          required
        />

        <input
          type="password"
          placeholder="Gallery access code"
          className="field"
          required
        />

        <input
          type="file"
          accept="image/*"
          multiple
          className="field"
          required
        />

        <button type="submit" className="btn">
          Create Gallery
        </button>

      </form>

    </section>
  )
}

export default CreatePrivateGallery
