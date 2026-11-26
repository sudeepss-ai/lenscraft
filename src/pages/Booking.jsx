import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ExistingPackages from '../components/ExistingPackages'
import BookingForm from '../components/BookingForm'

const Booking = () => {
  return (
    <div>
      <Navbar />

      <main className="section">

        <h1 className="text-4xl font-bold mb-8">
          Book a Photography Session
        </h1>

        <ExistingPackages />
        <BookingForm />

      </main>

      <Footer />
    </div>
  )
}

export default Booking