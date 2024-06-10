import { useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import logo from './assets/sl_logo.png'
import ScrollToTop from './components/ScrollToTop'
import { Home } from './pages/Home/Home'
import { Services } from './pages/Services/Services'
import { About } from './pages/About/About'
import { Contact } from './pages/Contact/Contact'

import './App.css'

function App() {
  const home = useRef<HTMLDivElement>(null)
  const services = useRef<HTMLDivElement>(null)
  const about = useRef<HTMLDivElement>(null)
  const contact = useRef<HTMLDivElement>(null)

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const scrollToSection = (elementRef: HTMLDivElement) => {
    window.scrollTo({
      // @ts-ignore
      top: elementRef.current.offsetTop - 20,
      behavior: 'smooth',
    })
  }

  return (
    <div className="App">
      <ScrollToTop />
      <header className="header">
        <nav className="nav__container">
          <div ref={home} className="home">
            <ul>
              {/* @ts-ignore */}
              <li onClick={() => scrollToSection(home)} className="nav__item">
                <img src={logo} alt="Serene Lily" height={300} />
              </li>
            </ul>
          </div>
          <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`}>
            <ul className="nav__list">
              {/* @ts-ignore */}
              <li onClick={() => scrollToSection(home)} className="nav__link">
                Home
              </li>
              <li
                // @ts-ignore
                onClick={() => scrollToSection(services)}
                className="nav__link"
              >
                Services
              </li>
              {/* @ts-ignore */}
              <li onClick={() => scrollToSection(about)} className="nav__link">
                About Us
              </li>
              {/* @ts-ignore */}
              <li onClick={() => scrollToSection(contact)} className="nav__cta">
                Contact Us
              </li>
            </ul>
            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <FaBars />
          </div>
        </nav>
      </header>

      <div className="home">
        <Home />
      </div>
      <div ref={services} className="services">
        <Services />
      </div>
      <div ref={about} className="about">
        <About />
      </div>
      <div ref={contact} className="contact">
        <Contact />
      </div>

      <footer>
        <p className="copyright">Serene Lily © 2024</p>
      </footer>
    </div>
  )
}

export default App
