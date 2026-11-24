import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio'

const CreatePortfolio = () => {
  return (
    <div>
      <Navbar />

      <main className="section">

        <div className="mb-8">
          <p className="text-neutral-400 text-xs tracking-widest mb-1">REGISTERED PHOTOGRAPHER</p>
          <h1 className="text-4xl font-bold text-white">
            Create Portfolio
          </h1>
        </div>

        <Portfolio />

      </main>

      <Footer />
    </div>
  )
}

export default CreatePortfolio
