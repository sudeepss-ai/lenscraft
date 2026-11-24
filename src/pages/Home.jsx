import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import samplePortrait from '../assets/sample-portrait.jpg'
import sampleStreet from '../assets/sample-street.jpg'
import sampleWedding from '../assets/sample-wedding.jpg'
import sampleLandscape from '../assets/sample-landscape.jpg'
import sampleWildlife from '../assets/sample-wildlife.jpg'
import sampleFashion from '../assets/sample-fashion.jpg'

const Home = () => {
  return (
    <div>
      <Navbar />

      <section className="min-h-[65vh] flex flex-col items-center justify-center text-center px-5 bg-gradient-to-b from-black to-neutral-900 border-b border-neutral-800">

        <p className="text-neutral-400 tracking-widest mb-4 text-sm">
          PHOTOGRAPHY & VISUAL STORIES
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Beyond the Frame.
        </h1>

        <p className="text-neutral-400 max-w-xl mb-8">
          Capturing emotions, preserving memories and turning
          ordinary moments into extraordinary stories.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/gallery" className="btn">
            Explore Gallery
          </Link>

          <Link to="/booking" className="border border-neutral-500 text-white hover:border-white px-6 py-3 rounded-lg transition">
            Book a Shoot
          </Link>
        </div>

      </section>

      <section className="section">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <p className="text-neutral-400 text-xs tracking-widest mb-2">FEATURED WORK</p>
            <h2 className="heading mb-0">
              Sample Photographs
            </h2>
          </div>

          <Link to="/gallery" className="text-sm text-neutral-300 hover:text-white underline transition">
            View Full Gallery →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-500 transition">
            <div className="relative overflow-hidden">
              <img
                src={samplePortrait}
                alt="Golden Hour Portrait"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Golden Hour Portrait</h3>
                <span className="bg-black/70 border border-neutral-700 text-neutral-200 text-xs px-3 py-1 rounded-full">Portrait</span>
              </div>
            </div>
          </div>

          <div className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-500 transition">
            <div className="relative overflow-hidden">
              <img
                src={sampleStreet}
                alt="Rainy Dusk Walk"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Rainy Dusk Walk</h3>
                <span className="bg-black/70 border border-neutral-700 text-neutral-200 text-xs px-3 py-1 rounded-full">Street</span>
              </div>
            </div>
          </div>

          <div className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-500 transition">
            <div className="relative overflow-hidden">
              <img
                src={sampleWedding}
                alt="Stone Archway Vows"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Stone Archway Vows</h3>
                <span className="bg-black/70 border border-neutral-700 text-neutral-200 text-xs px-3 py-1 rounded-full">Wedding</span>
              </div>
            </div>
          </div>

          <div className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-500 transition">
            <div className="relative overflow-hidden">
              <img
                src={sampleLandscape}
                alt="Alpine Sunrise Lake"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Alpine Sunrise Lake</h3>
                <span className="bg-black/70 border border-neutral-700 text-neutral-200 text-xs px-3 py-1 rounded-full">Landscape</span>
              </div>
            </div>
          </div>

          <div className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-500 transition">
            <div className="relative overflow-hidden">
              <img
                src={sampleWildlife}
                alt="Bengal Tiger Trail"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Bengal Tiger Trail</h3>
                <span className="bg-black/70 border border-neutral-700 text-neutral-200 text-xs px-3 py-1 rounded-full">Wildlife</span>
              </div>
            </div>
          </div>

          <div className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-500 transition">
            <div className="relative overflow-hidden">
              <img
                src={sampleFashion}
                alt="Cobalt Steps Editorial"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Cobalt Steps Editorial</h3>
                <span className="bg-black/70 border border-neutral-700 text-neutral-200 text-xs px-3 py-1 rounded-full">Fashion</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home