import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PhotographerForm from '../components/PhotographerForm'

const Register = () => {
  return (
    <div>
      <Navbar />

      <main className="section">

        <div className="mb-8">
          <p className="text-neutral-400 text-xs tracking-widest mb-1">PHOTOGRAPHER STUDIO</p>
          <h1 className="text-4xl font-bold text-white">
            Photographer Registration
          </h1>
        </div>

        <PhotographerForm />

      </main>

      <Footer />
    </div>
  )
}

export default Register
