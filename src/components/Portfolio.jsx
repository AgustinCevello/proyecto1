import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FiArrowRight, FiExternalLink } from 'react-icons/fi'

const projects = [
    {
        title: 'Zara Reimagined',
        category: 'Branding & Web Design',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
        year: '2024',
    },
    {
        title: 'Spotify Wrapped',
        category: 'Motion Graphics',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
        year: '2024',
    },
    {
        title: 'Tesla Configurator',
        category: 'UX Strategy & Web',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
        year: '2023',
    },
    {
        title: 'Airbnb Experiences',
        category: 'Branding & Identity',
        image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80',
        year: '2023',
    },
    {
        title: 'Nova Fintech App',
        category: 'UX Strategy & Web Design',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        year: '2024',
    },
    {
        title: 'Meridian Hotel',
        category: 'Branding & Motion',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
        year: '2023',
    },
]

export default function Portfolio({ darkMode }) {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section
            id="portfolio"
            className={`relative py-28 overflow-hidden ${darkMode ? 'bg-[#0A0A0F]' : 'bg-white'
                }`}
        >
            {/* Background */}
            <div
                className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.03]"
                style={{ background: 'radial-gradient(circle, #6C3CE1, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6" data-aos="fade-up">
                    <div>
                        <span
                            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${darkMode
                                    ? 'bg-white/5 text-[#8B5CF6] border border-white/10'
                                    : 'bg-purple-50 text-[#6C3CE1] border border-purple-100'
                                }`}
                        >
                            Selected Work
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[Space_Grotesk] tracking-tight">
                            Projects that{' '}
                            <span className="bg-gradient-to-r from-[#6C3CE1] to-[#F43F5E] bg-clip-text text-transparent">
                                speak louder
                            </span>
                        </h2>
                    </div>
                    <a
                        href="#contact"
                        className={`group inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        View all projects
                        <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>

                {/* Swiper Carousel */}
                <div data-aos="fade-up" data-aos-delay="150">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4500, disableOnInteraction: false }}
                        loop={true}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        breakpoints={{
                            640: { slidesPerView: 1.5 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 2.5 },
                            1280: { slidesPerView: 3 },
                        }}
                        style={{
                            '--swiper-navigation-color': '#6C3CE1',
                            '--swiper-pagination-color': '#6C3CE1',
                            '--swiper-navigation-size': '28px',
                            paddingBottom: '50px',
                        }}
                    >
                        {projects.map((project, i) => (
                            <SwiperSlide key={project.title}>
                                <div
                                    className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 cursor-pointer ${darkMode
                                            ? 'bg-white/[0.02] border-white/5 hover:border-white/15'
                                            : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-xl'
                                        }`}
                                >
                                    {/* Image */}
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        {/* Overlay content */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <FiExternalLink className="w-5 h-5 text-white" />
                                            </div>
                                            <span className="text-white text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                                View Project
                                            </span>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="p-5">
                                        <div className="flex items-center justify-between mb-2">
                                            <span
                                                className={`text-xs font-semibold tracking-wider uppercase ${darkMode ? 'text-[#8B5CF6]' : 'text-[#6C3CE1]'
                                                    }`}
                                            >
                                                {project.category}
                                            </span>
                                            <span className={`text-xs ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
                                                {project.year}
                                            </span>
                                        </div>
                                        <h3
                                            className={`text-lg font-bold font-[Space_Grotesk] ${darkMode ? 'text-white' : 'text-gray-900'
                                                }`}
                                        >
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
