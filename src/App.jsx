import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Sectors from './pages/Sectors.jsx'
import Compliance from './pages/Compliance.jsx'
import SituationRoom from './pages/SituationRoom.jsx'
import Contact from './pages/Contact.jsx'
import Portal from './pages/Portal.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-shell">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/situation-room" element={<SituationRoom />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portal" element={<Portal />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
