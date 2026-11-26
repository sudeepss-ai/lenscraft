
import { FaSearch } from 'react-icons/fa'
import PhotoCard from './PhotoCard'
import samplePortrait from '../assets/sample-portrait.jpg'
import sampleStreet from '../assets/sample-street.jpg'
import sampleWedding from '../assets/sample-wedding.jpg'
import sampleLandscape from '../assets/sample-landscape.jpg'
import sampleWildlife from '../assets/sample-wildlife.jpg'
import sampleFashion from '../assets/sample-fashion.jpg'

const PhotoGallery = () => {
  return (
    <section className="panel" id="photo-gallery">

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <p className="text-neutral-400 text-xs tracking-widest mb-1">CURATED COLLECTION</p>
          <h2 className="heading mb-1">
            Photo Gallery
          </h2>
          <p className="text-neutral-400 text-sm">
            Explore full-colour photography across portrait, street, wedding, landscape, wildlife, and editorial fashion.
          </p>
        </div>

        <a href="#photographer-modal" className="btn shrink-0">
          Add Photographs
        </a>
      </div>

      <form action="#photo-gallery" className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="flex items-center bg-neutral-950 border border-neutral-700 rounded-lg px-4 py-3 flex-1 focus-within:border-white transition">
          <FaSearch className="text-neutral-400 mr-3 shrink-0" />
          <input
            type="search"
            name="q"
            placeholder="Search photographs by title or category..."
            className="bg-transparent text-white placeholder-neutral-500 outline-none w-full text-sm"
          />
        </div>

        <select
          name="category"
          className="bg-neutral-950 border border-neutral-700 rounded-lg px-4 py-3 text-white text-sm md:w-52"
        >
          <option value="">All Categories</option>
          <option>Portrait</option>
          <option>Street</option>
          <option>Wedding</option>
          <option>Landscape</option>
          <option>Wildlife</option>
          <option>Fashion</option>
        </select>

        <button type="submit" className="btn shrink-0">
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <PhotoCard
          image={samplePortrait}
          title="Golden Hour Portrait"
          category="Portrait"
        />

        <PhotoCard
          image={sampleStreet}
          title="Rainy Dusk Walk"
          category="Street"
        />

        <PhotoCard
          image={sampleWedding}
          title="Stone Archway Vows"
          category="Wedding"
        />

        <PhotoCard
          image={sampleLandscape}
          title="Alpine Sunrise Lake"
          category="Landscape"
        />

        <PhotoCard
          image={sampleWildlife}
          title="Bengal Tiger Trail"
          category="Wildlife"
        />

        <PhotoCard
          image={sampleFashion}
          title="Cobalt Steps Editorial"
          category="Fashion"
        />

      </div>

    </section>
  )
}

export default PhotoGallery