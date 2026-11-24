import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Booking from './pages/Booking'
import Dashboard from './pages/Dashboard'
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/portfolio" element={<CreatePortfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App