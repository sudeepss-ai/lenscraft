
import React from 'react'
import samplePortrait from '../assets/sample-portrait.jpg'
import sampleWedding from '../assets/sample-wedding.jpg'

const Favourites = () => {
  return (
    <section className="panel">

      <h2 className="heading">
        Selected Photos & Favourites
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5">
          <img
            src={samplePortrait}
            alt="Window Light Portrait"
            className="w-full h-56 object-cover rounded-lg"
          />
          <h3 className="text-xl mt-4 text-white"> Portraits</h3>
          <p className="text-neutral-400 mb-3">Portrait • Selected & Favourite</p>
          <label className="flex gap-2 mb-2 text-neutral-300">
            <input type="checkbox" defaultChecked />
            Selected for Print
          </label>
          <label className="flex gap-2 mb-4 text-neutral-300">
            <input type="checkbox" defaultChecked />
            Favourite
          </label>
          <a href={samplePortrait} download="window-light-portrait.jpg" className="btn">
            Download
          </a>
        </div>

        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5">
          <img
            src={sampleWedding}
            alt="Stone Archway Vows"
            className="w-full h-56 object-cover rounded-lg"
          />
          <h3 className="text-xl mt-4 text-white">Stone Archway Vows</h3>
          <p className="text-neutral-400 mb-3">Wedding • Selected & Favourite</p>
          <label className="flex gap-2 mb-2 text-neutral-300">
            <input type="checkbox" defaultChecked />
            Selected for Album
          </label>
          <label className="flex gap-2 mb-4 text-neutral-300">
            <input type="checkbox" defaultChecked />
            Favourite
          </label>
          <a href={sampleWedding} download="stone-archway-vows.jpg" className="btn">
            Download
          </a>
        </div>

      </div>

      <a href="#photo-gallery" className="btn">
        Browse Photos
      </a>

    </section>
  )
}

export default Favourites