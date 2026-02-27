import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const team = [
    {
        name: 'Alejandro Ruiz',
        role: 'Founder & Creative Director',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
        socials: {
            instagram: 'https://instagram.com',
            linkedin: 'https://linkedin.com',
            x: 'https://x.com',
        },
    },
    {
        name: 'Sofía Martinez',
        role: 'Lead UX Designer',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
        socials: {
            instagram: 'https://instagram.com',
            linkedin: 'https://linkedin.com',
            x: 'https://x.com',
        },
    },
    {
        name: 'Lucas Chen',
        role: 'Senior Motion Designer',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
        socials: {
            instagram: 'https://instagram.com',
            linkedin: 'https://linkedin.com',
            x: 'https://x.com',
        },
    },
    {
        name: 'Elena Voss',
        role: 'Brand Strategist',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
        socials: {
            instagram: 'https://instagram.com',
            linkedin: 'https://linkedin.com',
            x: 'https://x.com',
        },
    },
]

export default function Team({ darkMode }) {
    return (
        <section
            id="team"
            className={`relative py-28 overflow-hidden ${darkMode ? 'bg-[#0A0A0F]' : 'bg-white'
                }`}
        >
            {/* Background */}
            <div
                className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none opacity-[0.03]"
                style={{ background: 'radial-gradient(circle, #8B5CF6, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
                    <span
                        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${darkMode
                            ? 'bg-white/5 text-[#8B5CF6] border border-white/10'
                            : 'bg-purple-50 text-[#6C3CE1] border border-purple-100'
                            }`}
                    >
                        Meet the Team
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[Space_Grotesk] tracking-tight mb-4">
                        The minds behind{' '}
                        <span className="bg-gradient-to-r from-[#6C3CE1] to-[#F43F5E] bg-clip-text text-transparent">
                            the magic
                        </span>
                    </h2>
                    <p className={`text-base md:text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        A tight-knit crew of 12 creatives, strategists, and technologists based in Buenos Aires, united by a passion for design that makes a difference.
                    </p>
                </div>

                {/* Team grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, i) => (
                        <div
                            key={member.name}
                            className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 ${darkMode
                                ? 'bg-white/[0.02] border-white/5 hover:border-[#8B5CF6]/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]'
                                : 'bg-white border-gray-200 hover:border-[#6C3CE1]/30 hover:shadow-[0_0_20px_rgba(108,60,225,0.1)]'
                                }`}
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            {/* Photo */}
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                {/* Social icons — appear on hover */}
                                <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    <a
                                        href={member.socials.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-colors duration-300"
                                    >
                                        <FaInstagram className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={member.socials.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-colors duration-300"
                                    >
                                        <FaLinkedinIn className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={member.socials.x}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-colors duration-300"
                                    >
                                        <FaXTwitter className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-5">
                                <h3 className={`text-base font-bold font-[Space_Grotesk] mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {member.name}
                                </h3>
                                <p className={`text-sm ${darkMode ? 'text-[#8B5CF6]' : 'text-[#6C3CE1]'}`}>
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
