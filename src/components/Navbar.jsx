import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar navbar-expand-lg py-3 fixed-top ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'} navbar-light`}>
      <div className="container-fluid px-5">
        <Link className="navbar-brand mb-0 h1" to="/">
          <img src="/images/logo.png" alt="logo" width="30" height="24" className="d-inline-block align-text-top" />
          Kelor Lor
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto nav-underline">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Beranda</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/profile-desa' ? 'active' : ''}`} to="/profile-desa">Profile Desa</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/informasi' ? 'active' : ''}`} to="/informasi">Informasi</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/umkm' ? 'active' : ''}`} to="/umkm">UMKM</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}