import { useState } from 'react'
import { FiPlay } from 'react-icons/fi'

export default function VideoSection({ darkMode }) {
    const [playing, setPlaying] = useState(false)

    return (
        <section
            className={`relative py-28 overflow-hidden ${darkMode ? 'bg-[#12121A]' : 'bg-gray-50'
                }`}
        >
            {/* Background accent */}
            <div
                className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.03]"
                style={{ background: 'radial-gradient(circle, #F43F5E, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Video */}
                    <div className="flex-1 w-full" data-aos="fade-right">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                            {/* Glow */}
                            <div
                                className="absolute -inset-3 rounded-3xl opacity-20 blur-2xl pointer-events-none"
                                style={{ background: 'linear-gradient(135deg, #6C3CE1, #F43F5E)' }}
                            />

                            <div className="relative" style={{ aspectRatio: '16/9' }}>
                                {!playing ? (
                                    <>
                                        {/* Thumbnail */}
                                        <img
                                            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&q=80"
                                            alt="Creative process behind Vortex Studio"
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Dark overlay */}
                                        <div className="absolute inset-0 bg-black/40" />
                                        {/* Play button */}
                                        <button
                                            onClick={() => setPlaying(true)}
                                            className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                                            aria-label="Play video"
                                        >
                                            <div className="relative">
                                                {/* Pulse ring */}
                                                <div className="absolute inset-0 w-20 h-20 rounded-full bg-white/20 animate-ping" style={{ animationDuration: '2s' }} />
                                                <div className="relative w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                                                    <FiPlay className="w-8 h-8 text-white ml-1" />
                                                </div>
                                            </div>
                                        </button>
                                    </>
                                ) : (
                                    <iframe
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                                        title="Vortex Studio Showreel"
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1 max-w-lg" data-aos="fade-left" data-aos-delay="150">
                        <span
                            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 ${darkMode
                                ? 'bg-white/5 text-[#8B5CF6] border border-white/10'
                                : 'bg-purple-50 text-[#6C3CE1] border border-purple-100'
                                }`}
                        >
                            Our Process
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold font-[Space_Grotesk] tracking-tight mb-5">
                            See how we{' '}
                            <span className="bg-gradient-to-r from-[#6C3CE1] to-[#F43F5E] bg-clip-text text-transparent">
                                bring ideas to life
                            </span>
                        </h2>
                        <p className={`text-base leading-relaxed mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Every project starts with a deep understanding of your vision. From research and wireframing to
                            pixel-perfect design and development, our process is built to deliver extraordinary results — on time,
                            every time.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {['Discovery & Strategy', 'Design & Prototyping', 'Development & Launch'].map((step, i) => (
                                <li
                                    key={step}
                                    className={`flex items-center gap-3 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                        }`}
                                >
                                    <span
                                        className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#6C3CE1] to-[#F43F5E] flex items-center justify-center text-white text-xs font-bold shrink-0"
                                    >
                                        {i + 1}
                                    </span>
                                    {step}
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white overflow-hidden relative transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 hover:scale-[1.03] active:scale-[0.98]"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-[#6C3CE1] to-[#F43F5E]" />
                            <span className="absolute inset-0 bg-gradient-to-r from-[#F43F5E] to-[#6C3CE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="relative">Start Your Project</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
