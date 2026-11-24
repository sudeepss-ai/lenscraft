import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Navbar />

      <main className="section">

        <section className="panel text-center">

          <h1 className="text-4xl font-bold mb-6">
            About Lenscraft
          </h1>

          <p className="text-neutral-400 leading-8">
            Lenscraft is a photography platform focused
            on capturing meaningful moments and creating
            timeless visual stories.
          </p>

          <p className="text-neutral-400 mt-4">
            Explore photography, manage appointments and
            organise your creative journey in one place.
          </p>

        </section>

      </main>

      <Footer />
    </div>
  )
}

export default About