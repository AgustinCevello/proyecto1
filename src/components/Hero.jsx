import { FiArrowRight, FiArrowDown } from 'react-icons/fi'

export default function Hero({ darkMode }) {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 lg:pt-0 lg:pb-0"
        >
            {/* ── Animated Background Shapes ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Large gradient orb — top left */}
                <div
                    className="animate-pulse-glow absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(108,60,225,0.35) 0%, transparent 70%)' }}
                />
                {/* Accent orb — bottom right */}
                <div
                    className="animate-pulse-glow absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(244,63,94,0.25) 0%, transparent 70%)', animationDelay: '2.5s' }}
                />

                {/* Floating geometric shapes */}
                <div
                    className="animate-float-slow absolute top-[15%] left-[8%] w-16 h-16 rounded-2xl border-2 opacity-20"
                    style={{ borderColor: '#6C3CE1', animationDelay: '0s' }}
                />
                <div
                    className="animate-float-medium absolute top-[25%] right-[12%] w-12 h-12 rounded-full border-2 opacity-15"
                    style={{ borderColor: '#F43F5E', animationDelay: '1s' }}
                />
                <div
                    className="animate-float-fast absolute bottom-[20%] left-[15%] w-8 h-8 opacity-20"
                    style={{
                        borderLeft: '8px solid transparent',
                        borderRight: '8px solid transparent',
                        borderBottom: '14px solid #8B5CF6',
                        animationDelay: '0.5s',
                    }}
                />
                <div
                    className="animate-spin-slow absolute top-[60%] right-[20%] w-20 h-20 rounded-3xl border-2 opacity-10"
                    style={{ borderColor: '#6C3CE1' }}
                />
                <div
                    className="animate-float-medium absolute top-[45%] left-[45%] w-6 h-6 rounded-full opacity-25"
                    style={{ background: '#F43F5E', animationDelay: '2s' }}
                />
                <div
                    className="animate-float-slow absolute bottom-[35%] right-[35%] w-10 h-10 rounded-xl border-2 opacity-15"
                    style={{ borderColor: '#8B5CF6', animationDelay: '3s' }}
                />

                {/* Subtle grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(108,60,225,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(108,60,225,0.5) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px',
                    }}
                />
            </div>

            {/* ── Content ── */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left — Text */}
                    <div className="flex-1 text-center lg:text-left max-w-2xl" data-aos="fade-right">
                        {/* Badge */}
                        <div
                            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6
                ${darkMode ? 'bg-white/5 text-[#8B5CF6] border border-white/10' : 'bg-purple-50 text-[#6C3CE1] border border-purple-100'}`}
                            data-aos="fade-down"
                            data-aos-delay="100"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6C3CE1] animate-pulse" />
                            Award-Winning Creative Agency
                        </div>

                        {/* Headline */}
                        <h1
                            className="font-[Space_Grotesk] text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-7xl font-bold leading-[1.08] tracking-tight mb-6"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            We Craft Digital{' '}
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-[#6C3CE1] via-[#8B5CF6] to-[#F43F5E] bg-clip-text text-transparent">
                                    Experiences
                                </span>
                                <span
                                    className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-[#6C3CE1] to-[#F43F5E] opacity-60"
                                />
                            </span>{' '}
                            That Move the World
                        </h1>

                        {/* Subtitle */}
                        <p
                            className={`text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0
                ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            We're a Buenos Aires-based studio of 12 creatives obsessed with branding, web design, and motion graphics.
                            Since 2018, we've delivered 150+ projects for brands that dare to stand out.
                        </p>

                        {/* CTA Buttons */}
                        <div
                            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <a
                                href="#portfolio"
                                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 hover:scale-[1.03] active:scale-[0.98]"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-[#6C3CE1] to-[#F43F5E]" />
                                <span className="absolute inset-0 bg-gradient-to-r from-[#F43F5E] to-[#6C3CE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <span className="relative">View Our Work</span>
                                <FiArrowRight className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                            <a
                                href="#contact"
                                className={`group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border-2 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]
                  ${darkMode
                                        ? 'border-white/15 text-white hover:border-[#6C3CE1] hover:bg-[#6C3CE1]/10'
                                        : 'border-gray-300 text-gray-900 hover:border-[#6C3CE1] hover:bg-purple-50'
                                    }`}
                            >
                                Get in Touch
                                <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>

                    {/* Right — Featured Image */}
                    <div className="flex-1 w-full max-w-lg lg:max-w-none" data-aos="fade-left" data-aos-delay="300">
                        <div className="relative">
                            {/* Glow behind image */}
                            <div
                                className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl"
                                style={{ background: 'linear-gradient(135deg, #6C3CE1, #F43F5E)' }}
                            />
                            {/* Image container */}
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
                                    alt="Creative design workspace with team brainstorming"
                                    className="w-full h-auto object-cover aspect-[4/3]"
                                    loading="eager"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/60 via-transparent to-transparent" />
                                {/* Floating stats card */}
                                <div
                                    className={`absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-xl border
                    ${darkMode ? 'bg-white/5 border-white/10' : 'bg-white/70 border-white/50'}`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects delivered</p>
                                            <p className="text-2xl font-bold font-[Space_Grotesk] text-[#6C3CE1]">150+</p>
                                        </div>
                                        <div className="w-px h-10 bg-white/10" />
                                        <div>
                                            <p className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Happy clients</p>
                                            <p className="text-2xl font-bold font-[Space_Grotesk] text-[#F43F5E]">80+</p>
                                        </div>
                                        <div className="w-px h-10 bg-white/10" />
                                        <div>
                                            <p className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Awards won</p>
                                            <p className="text-2xl font-bold font-[Space_Grotesk] text-[#8B5CF6]">12</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2">
                <span className={`text-xs font-medium tracking-wider uppercase ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    Scroll
                </span>
                <FiArrowDown className={`w-4 h-4 animate-bounce ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
            </div>
        </section>
    )
}
