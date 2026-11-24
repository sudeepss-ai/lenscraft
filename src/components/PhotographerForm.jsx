
import studioProfile from '../assets/DSC02391.JPG'

const PhotographerForm = () => {
  return (
    <section className="panel border-neutral-700">

      <p className="text-neutral-400 text-xs tracking-widest mb-1">PHOTOGRAPHER ACCESS</p>
      <h2 className="heading">
        Photographer Registration
      </h2>

      <form action="/portfolio" className="mb-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">

          <input
            type="text"
            placeholder="Photographer name"
            className="field"
            required
          />

          <input
            type="email"
            placeholder="Email address"
            className="field"
            required
          />

          <input
            type="tel"
            placeholder="Phone number"
            className="field"
            required
          />

          <input
            type="text"
            placeholder="Studio name"
            className="field"
          />

          <input
            type="text"
            placeholder="Location"
            className="field"
            required
          />

          <input
            type="number"
            placeholder="Years of experience"
            min="0"
            className="field"
          />

        </div>

        <select className="field" required>
          <option value="">Photography Specialisation</option>
          <option>Wedding Photography</option>
          <option>Portrait Photography</option>
          <option>Fashion Photography</option>
          <option>Event Photography</option>
          <option>Wildlife Photography</option>
        </select>

        <textarea
          placeholder="About yourself"
          className="field"
        />

        <label className="block mb-2">
          Profile Photograph
        </label>

        <input
          type="file"
          accept="image/*"
          className="field"
        />

        <button type="submit" className="btn">
          Register Photographer
        </button>

      </form>

      <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-5">
        <img
          src={studioProfile}
          alt="Sudeep Studio Profile"
          className="w-20 h-20 object-cover rounded-full border border-neutral-700"
        />
        <div>

          <h3 className="text-lg font-semibold text-white">Sudeep — Lenscraft</h3>
          <p className="text-neutral-400 text-sm">Portrait & Wedding Photography • Bengaluru • 6 Years Experience</p>
          <p className="text-neutral-500 text-sm mt-1">
            Visual storytelling focused on natural light, candid emotion, and timeless composition.
          </p>
        </div>
      </div>

    </section>
  )
}

export default PhotographerForm