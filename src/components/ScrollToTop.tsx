import { useState, useEffect } from 'react'
import { FaAngleUp } from 'react-icons/fa'

import './ScrollToTop.css'

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true)
      } else {
        setShowScrollTopButton(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div>
      {showScrollTopButton && (
        <FaAngleUp className="icon" onClick={scrollToTop} />
      )}
    </div>
  )
}

export default ScrollToTop
