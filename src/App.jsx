import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Stats from './components/Stats'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import VideoSection from './components/VideoSection'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import CTABanner from './components/CTABanner'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0
      setScrollProgress(progress)
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => setDarkMode(prev => !prev)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-[#0A0A0F] text-white' : 'bg-white text-gray-900'}`}>
        {/* Scroll Progress Bar */}
        <div
          className="fixed top-0 left-0 h-[3px] z-[100] transition-all duration-150"
          style={{
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #6C3CE1, #F43F5E)',
          }}
        />

        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero darkMode={darkMode} />
        <TrustedBy darkMode={darkMode} />
        <Stats darkMode={darkMode} />
        <Services darkMode={darkMode} />
        <Portfolio darkMode={darkMode} />
        <VideoSection darkMode={darkMode} />
        <Team darkMode={darkMode} />
        <Testimonials darkMode={darkMode} />
        <CTABanner darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} />

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer
            ${darkMode ? 'bg-[#6C3CE1] hover:bg-[#8B5CF6] text-white shadow-lg shadow-purple-500/25' : 'bg-[#6C3CE1] hover:bg-[#5521C6] text-white shadow-lg shadow-purple-500/30'}
            ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default App
