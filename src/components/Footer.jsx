import { FaInstagram, FaBehance, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer({ darkMode }) {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={`relative border-t py-16 overflow-hidden ${darkMode ? 'bg-[#0A0A0F] border-white/5' : 'bg-white border-gray-100'
            }`}>
            {/* Background visual detail */}
            <div
                className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.02]"
                style={{ background: 'radial-gradient(circle, #8B5CF6, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-5">
                        <a href="#home" className="inline-flex items-center gap-2 mb-6 group">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C3CE1] to-[#F43F5E] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                <span className="text-white font-bold text-xs font-[Space_Grotesk]">V</span>
                            </div>
                            <span className={`text-xl font-bold font-[Space_Grotesk] tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                Vortex<span className="text-[#6C3CE1]">.</span>
                            </span>
                        </a>
                        <p className={`text-sm leading-relaxed max-w-sm mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            We design what moves the world. A creative agency specialized in branding, web design, and motion graphics based in Buenos Aires, Argentina.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${darkMode ? 'bg-white/5 text-gray-400 hover:bg-[#6C3CE1] hover:text-white hover:scale-110' : 'bg-gray-100 text-gray-600 hover:bg-[#6C3CE1] hover:text-white hover:scale-110'
                                    }`}>
                                <FaInstagram className="w-4 h-4" />
                            </a>
                            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" aria-label="Behance"
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${darkMode ? 'bg-white/5 text-gray-400 hover:bg-[#6C3CE1] hover:text-white hover:scale-110' : 'bg-gray-100 text-gray-600 hover:bg-[#6C3CE1] hover:text-white hover:scale-110'
                                    }`}>
                                <FaBehance className="w-4 h-4" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${darkMode ? 'bg-white/5 text-gray-400 hover:bg-[#6C3CE1] hover:text-white hover:scale-110' : 'bg-gray-100 text-gray-600 hover:bg-[#6C3CE1] hover:text-white hover:scale-110'
                                    }`}>
                                <FaLinkedinIn className="w-4 h-4" />
                            </a>
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
                                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${darkMode ? 'bg-white/5 text-gray-400 hover:bg-[#6C3CE1] hover:text-white hover:scale-110' : 'bg-gray-100 text-gray-600 hover:bg-[#6C3CE1] hover:text-white hover:scale-110'
                                    }`}>
                                <FaXTwitter className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-2 lg:col-start-7">
                        <h4 className={`text-sm font-bold uppercase tracking-wider mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Navigation</h4>
                        <ul className="space-y-4">
                            {['Home', 'Services', 'Portfolio', 'Team', 'Contact'].map(link => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase()}`} className={`text-sm hover:text-[#6C3CE1] transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className={`text-sm font-bold uppercase tracking-wider mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Services</h4>
                        <ul className="space-y-4">
                            {['Branding & Identity', 'Web Design', 'Motion Graphics', 'UX Strategy'].map(service => (
                                <li key={service}>
                                    <a href="#services" className={`text-sm hover:text-[#6C3CE1] transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className={`text-sm font-bold uppercase tracking-wider mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Legal</h4>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(legal => (
                                <li key={legal}>
                                    <a href="#" className={`text-sm hover:text-[#6C3CE1] transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {legal}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${darkMode ? 'border-white/5' : 'border-gray-100'}`}>
                    <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                        © {currentYear} Vortex Studio. All rights reserved.
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                        Designed with <span className="text-[#F43F5E]">♥</span> in Buenos Aires
                    </p>
                </div>
            </div>
        </footer>
    )
}
