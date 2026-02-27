import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
    {
        content: "Vortex Studio didn't just redesign our website; they completely revitalized our brand identity. The level of detail and strategic thinking they brought to the table was extraordinary.",
        author: "Sarah Jenkins",
        role: "CMO at Nova Fintech",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80"
    },
    {
        content: "Working with the Vortex team was a seamless experience. They understood our complex requirements and translated them into an intuitive, beautiful digital product that our users love.",
        author: "David Chen",
        role: "Product Lead at Meridian",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80"
    },
    {
        content: "Their motion graphics work elevated our campaign far beyond our expectations. Vortex Studio brings a rare combination of pure creativity and rigorous execution.",
        author: "Elena Rodriguez",
        role: "Brand Director at Zara",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80"
    },
    {
        content: "Our conversion rates doubled after launching the new web experience designed by Vortex. They are true masters of their craft.",
        author: "James Wilson",
        role: "CEO at Echo Systems",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&q=80"
    }
]

export default function Testimonials({ darkMode }) {
    return (
        <section
            className={`relative py-28 overflow-hidden ${darkMode ? 'bg-[#12121A]' : 'bg-gray-50'
                }`}
        >
            {/* Background elements */}
            <div
                className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.03]"
                style={{ background: 'radial-gradient(circle, #F43F5E, transparent 70%)' }}
            />
            <div
                className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.03]"
                style={{ background: 'radial-gradient(circle, #6C3CE1, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
                    <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${darkMode ? 'bg-white/5 text-[#8B5CF6] border border-white/10' : 'bg-purple-50 text-[#6C3CE1] border border-purple-100'
                        }`}>
                        Client Stories
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[Space_Grotesk] tracking-tight mb-4">
                        Don't just take <span className="bg-gradient-to-r from-[#6C3CE1] to-[#F43F5E] bg-clip-text text-transparent">our word for it</span>
                    </h2>
                </div>

                {/* Testimonials Carousel */}
                <div data-aos="fade-up" data-aos-delay="100">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop={true}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        style={{
                            '--swiper-navigation-color': '#6C3CE1',
                            '--swiper-pagination-color': '#6C3CE1',
                            '--swiper-navigation-size': '24px',
                            paddingBottom: '60px'
                        }}
                    >
                        {testimonials.map((testimonial, i) => (
                            <SwiperSlide key={i}>
                                <div className={`h-full p-8 rounded-2xl border transition-all duration-300 ${darkMode
                                        ? 'bg-white/[0.02] border-white/5 hover:border-white/10'
                                        : 'bg-white border-gray-200 hover:shadow-xl hover:border-gray-300'
                                    }`}>
                                    <FaQuoteLeft className={`w-8 h-8 mb-6 opacity-20 ${darkMode ? 'text-[#8B5CF6]' : 'text-[#6C3CE1]'
                                        }`} />

                                    <p className={`text-base leading-relaxed mb-8 min-h-[100px] ${darkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        "{testimonial.content}"
                                    </p>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.author}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-[#6C3CE1]/30"
                                        />
                                        <div>
                                            <h4 className={`font-bold font-[Space_Grotesk] text-sm ${darkMode ? 'text-white' : 'text-gray-900'
                                                }`}>
                                                {testimonial.author}
                                            </h4>
                                            <p className={`text-xs mt-0.5 ${darkMode ? 'text-gray-500' : 'text-gray-500'
                                                }`}>
                                                {testimonial.role}
                                            </p>
                                        </div>
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
