import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ExistingPackages from '../components/ExistingPackages'
import BookingForm from '../components/BookingForm'
import AppointmentList from '../components/AppointmentList'
import ShootCalendar from '../components/ShootCalendar'

const Booking = () => {
  return (
    <div>
      <Navbar />

      <main className="section">

        <h1 className="text-4xl font-bold mb-8">
          Booking Management
        </h1>

        <ExistingPackages />
        <BookingForm />
        <AppointmentList />
        <ShootCalendar />

      </main>

      <Footer />
    </div>
  )
}

export default Booking