import { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { BsSun, BsMoonStars } from 'react-icons/bs'

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, toggleDarkMode }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const closeMenu = () => setMenuOpen(false)

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${scrolled
                    ? darkMode
                        ? 'bg-[#0A0A0F]/80 backdrop-blur-xl shadow-lg shadow-black/20 py-3'
                        : 'bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2 group">
                    {/* Logo icon — SVG geométrico, sin archivo externo */}
                    <div className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <img src="/logo.png" alt="Vortex Studio Logo" className="w-full h-full object-cover" />
                    </div>
                    <span className={`text-xl font-bold font-[Space_Grotesk] tracking-tight transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Vortex<span className="text-[#6C3CE1]">.</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group
                ${darkMode
                                    ? 'text-gray-400 hover:text-white'
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            {link.label}
                            <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#6C3CE1] to-[#F43F5E] rounded-full transition-all duration-300 group-hover:w-5" />
                        </a>
                    ))}
                </div>

                {/* Desktop Right Actions */}
                <div className="hidden lg:flex items-center gap-3">
                    <button
                        onClick={toggleDarkMode}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer
              ${darkMode
                                ? 'bg-white/5 hover:bg-white/10 text-yellow-400'
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                            }`}
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? <BsSun className="w-[18px] h-[18px]" /> : <BsMoonStars className="w-[18px] h-[18px]" />}
                    </button>

                    <a
                        href="#contact"
                        className="relative px-6 py-2.5 rounded-xl text-sm font-semibold text-white overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-[#6C3CE1] to-[#F43F5E] transition-opacity duration-300" />
                        <span className="absolute inset-0 bg-gradient-to-r from-[#F43F5E] to-[#6C3CE1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative">Start a Project</span>
                    </a>
                </div>

                {/* Mobile Controls */}
                <div className="flex lg:hidden items-center gap-2">
                    <button
                        onClick={toggleDarkMode}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer
              ${darkMode
                                ? 'bg-white/5 text-yellow-400'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? <BsSun className="w-[18px] h-[18px]" /> : <BsMoonStars className="w-[18px] h-[18px]" />}
                    </button>
                    <button
                        onClick={() => setMenuOpen(prev => !prev)}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer
              ${darkMode ? 'bg-white/5 text-white' : 'bg-gray-100 text-gray-900'}`}
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-5 h-5">
                            <HiMenuAlt3
                                className={`w-5 h-5 absolute inset-0 transition-all duration-300
                  ${menuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
                            />
                            <HiX
                                className={`w-5 h-5 absolute inset-0 transition-all duration-300
                  ${menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Overlay Menu */}
            <div
                className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <div
                    className={`absolute inset-0 transition-colors duration-500 ${darkMode ? 'bg-[#0A0A0F]/95' : 'bg-white/95'} backdrop-blur-2xl`}
                    onClick={closeMenu}
                />

                <div className="relative flex flex-col items-center justify-center h-full gap-2 px-8">
                    {navLinks.map((link, i) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={closeMenu}
                            className={`text-3xl font-bold font-[Space_Grotesk] tracking-tight transition-all duration-500
                ${darkMode ? 'text-white hover:text-[#8B5CF6]' : 'text-gray-900 hover:text-[#6C3CE1]'}
                ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: menuOpen ? `${i * 80 + 150}ms` : '0ms' }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={closeMenu}
                        className={`mt-6 px-8 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#6C3CE1] to-[#F43F5E] transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/30
              ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ transitionDelay: menuOpen ? `${navLinks.length * 80 + 150}ms` : '0ms' }}
                    >
                        Start a Project
                    </a>
                </div>
            </div>
        </nav>
    )
}