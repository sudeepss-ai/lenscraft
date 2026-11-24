import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PhotoGallery from '../components/PhotoGallery'
import PrivateGallery from '../components/PrivateGallery'
import Favourites from '../components/Favourites'
import Feedback from '../components/Feedback'
import PhotographerForm from '../components/PhotographerForm'

const Gallery = () => {
  return (
    <div>
      <Navbar />

      <main className="section">

        <h1 className="text-4xl font-bold mb-8">
          Photography Gallery
        </h1>

        <PhotoGallery />
        <PrivateGallery />
        <Favourites />
        <Feedback />

      </main>

      <div
        id="photographer-modal"
        className="hidden target:flex fixed inset-0 z-50 items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
      >
        <div className="relative max-w-2xl w-full my-auto max-h-[90vh] overflow-y-auto">
          <a
            href="#photo-gallery"
            aria-label="Close modal"
            className="absolute top-5 right-6 text-neutral-400 hover:text-white text-2xl leading-none z-10 transition"
          >
            ×
          </a>
          <PhotographerForm />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Gallery