import { FiPenTool, FiMonitor, FiFilm, FiLayout } from 'react-icons/fi'

const services = [
    {
        icon: FiPenTool,
        title: 'Branding & Identity',
        description:
            'We build memorable brand identities that resonate with your audience — from logo systems and typography to full brand guidelines that scale across every touchpoint.',
        color: '#6C3CE1',
    },
    {
        icon: FiMonitor,
        title: 'Web Design',
        description:
            'Pixel-perfect, responsive websites engineered for conversion. We combine stunning visuals with bulletproof UX to create digital experiences users love.',
        color: '#F43F5E',
    },
    {
        icon: FiFilm,
        title: 'Motion Graphics',
        description:
            'Dynamic animations and video content that tell your story with impact. From micro-interactions to full campaign videos, motion is our second language.',
        color: '#8B5CF6',
    },
    {
        icon: FiLayout,
        title: 'UX Strategy',
        description:
            'Data-driven UX research and strategy that turns complex user journeys into intuitive, delightful flows. We prototype, test, and iterate until it\'s perfect.',
        color: '#F59E0B',
    },
]

export default function Services({ darkMode }) {
    return (
        <section
            id="services"
            className={`relative py-28 overflow-hidden ${darkMode ? 'bg-[#12121A]' : 'bg-gray-50'
                }`}
        >
            {/* Background decoration */}
            <div
                className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.03]"
                style={{ background: 'radial-gradient(circle, #F43F5E, transparent 70%)' }}
            />
            <div
                className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.03]"
                style={{ background: 'radial-gradient(circle, #6C3CE1, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
                    <span
                        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${darkMode
                            ? 'bg-white/5 text-[#8B5CF6] border border-white/10'
                            : 'bg-purple-50 text-[#6C3CE1] border border-purple-100'
                            }`}
                    >
                        What We Do
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[Space_Grotesk] tracking-tight mb-4">
                        Services that{' '}
                        <span className="bg-gradient-to-r from-[#6C3CE1] to-[#F43F5E] bg-clip-text text-transparent">
                            drive results
                        </span>
                    </h2>
                    <p className={`text-base md:text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        From concept to launch, we deliver end-to-end creative solutions that help ambitious brands stand out in the digital landscape.
                    </p>
                </div>

                {/* Services grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, i) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={service.title}
                                className={`group relative p-7 rounded-2xl border transition-all duration-500 cursor-default ${darkMode
                                    ? 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-[#6C3CE1]/40 hover:shadow-[0_0_20px_rgba(108,60,225,0.15)]'
                                    : 'bg-white border-gray-200 hover:border-[#6C3CE1]/30 hover:shadow-[0_0_20px_rgba(108,60,225,0.1)]'
                                    }`}
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                {/* Hover glow */}
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(circle at 50% 0%, ${service.color}08, transparent 70%)`,
                                    }}
                                />

                                {/* Icon */}
                                <div
                                    className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 transition-all duration-300 group-hover:scale-110 ${darkMode ? 'bg-white/5' : 'bg-gray-50'
                                        }`}
                                >
                                    <Icon className="w-5 h-5" style={{ color: service.color }} />
                                </div>

                                {/* Title */}
                                <h3
                                    className={`relative text-lg font-bold font-[Space_Grotesk] mb-3 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'
                                        }`}
                                >
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className={`relative text-sm leading-relaxed ${darkMode ? 'text-gray-500' : 'text-gray-500'
                                        }`}
                                >
                                    {service.description}
                                </p>

                                {/* Bottom accent line */}
                                <div
                                    className="absolute bottom-0 left-7 right-7 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:left-5 group-hover:right-5"
                                    style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
