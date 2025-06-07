import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProfileDesa from './pages/ProfileDesa'
import Informasi from './pages/Informasi'
import UMKM from './pages/UMKM'
import About from './pages/About'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="w-100 h-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile-desa" element={<ProfileDesa />} />
          <Route path="/informasi" element={<Informasi />} />
          <Route path="/umkm" element={<UMKM />} />
          <Route path="/tentang" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App