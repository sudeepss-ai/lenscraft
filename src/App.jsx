import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Booking from './pages/Booking'
import Dashboard from './admin/Dashboard'
import AdminAppointments from './admin/AdminAppointments'
import AdminPackages from './admin/AdminPackages'
import AdminGalleries from './admin/AdminGalleries'
import AdminPayments from './admin/AdminPayments'
import AdminFeedback from './admin/AdminFeedback'
import Register from './pages/Register'
import CreatePortfolio from './pages/CreatePortfolio'
import About from './pages/About'

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/register" element={<Register />} />
        <Route path="/portfolio" element={<CreatePortfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/appointments" element={<AdminAppointments />} />
        <Route path="/admin/packages" element={<AdminPackages />} />
        <Route path="/admin/galleries" element={<AdminGalleries />} />
        <Route path="/admin/payments" element={<AdminPayments />} />
        <Route path="/admin/feedback" element={<AdminFeedback />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App