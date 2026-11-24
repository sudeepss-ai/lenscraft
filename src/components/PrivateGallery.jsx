import samplePortrait from '../assets/sample-portrait.jpg'
import sampleWedding from '../assets/sample-wedding.jpg'

const PrivateGallery = () => {
  return (
    <section className="panel">

      <div className="mb-6">
        <h2 className="heading mb-1">
          Private Client Galleries
        </h2>
        <p className="text-neutral-400 text-sm">
          Client-only galleries prepared by the studio. Enter your access code to view and download.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 hover:border-neutral-600 transition">
          <div className="overflow-hidden rounded-lg">
            <img
              src={sampleWedding}
              alt="Rohan & Kavya Wedding Vault"
              className="w-full h-56 object-cover hover:scale-105 transition duration-500"
            />
          </div>
          <h3 className="text-xl mt-4 text-white">anirudh & Andrea — Wedding Vault</h3>
          <p className="text-neutral-400 mt-1">Client: Anirudh R • Private View</p>
          <p className="text-neutral-500 text-sm mb-4">24 High-Res Photographs</p>
          <input
            type="password"
            placeholder="Enter gallery access code"
            className="field"
          />
          <a href={sampleWedding} download="wedding-vault-sample.jpg" className="btn w-full text-center">
            View & Download Gallery
          </a>
        </div>

        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 hover:border-neutral-600 transition">
          <div className="overflow-hidden rounded-lg">
            <img
              src={samplePortrait}
              alt="Ananya Studio Portraits"
              className="w-full h-56 object-cover hover:scale-105 transition duration-500"
            />
          </div>
          <h3 className="text-xl mt-4 text-white">shraddha — Studio Portraits</h3>
          <p className="text-neutral-400 mt-1">Client: shraddha kapoor • Private View</p>
          <p className="text-neutral-500 text-sm mb-4">12 High-Res Photographs</p>
          <input
            type="password"
            placeholder="Enter gallery access code"
            className="field"
          />
          <a href={samplePortrait} download="portrait-vault-sample.jpg" className="btn w-full text-center">
            View & Download Gallery
          </a>
        </div>

      </div>

    </section>
  )
}

export default PrivateGallery