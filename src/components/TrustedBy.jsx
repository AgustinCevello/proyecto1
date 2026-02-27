export default function TrustedBy({ darkMode }) {
    const brands = ['Zara', 'Spotify', 'Tesla', 'Airbnb']

    // Duplicate the list for seamless infinite marquee
    const marqueeItems = [...brands, ...brands, ...brands, ...brands]

    return (
        <section
            className={`relative py-12 overflow-hidden border-y ${darkMode ? 'border-white/5 bg-[#0A0A0F]' : 'border-gray-100 bg-gray-50/50'
                }`}
        >
            {/* Subtle gradient overlays on edges */}
            <div
                className={`absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${darkMode
                        ? 'bg-gradient-to-r from-[#0A0A0F] to-transparent'
                        : 'bg-gradient-to-r from-gray-50/50 to-transparent'
                    }`}
            />
            <div
                className={`absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${darkMode
                        ? 'bg-gradient-to-l from-[#0A0A0F] to-transparent'
                        : 'bg-gradient-to-l from-gray-50/50 to-transparent'
                    }`}
            />

            {/* Label */}
            <p
                className={`text-center text-xs font-semibold tracking-[0.2em] uppercase mb-8 ${darkMode ? 'text-gray-500' : 'text-gray-400'
                    }`}
                data-aos="fade-up"
            >
                Trusted by industry leaders
            </p>

            {/* Marquee track */}
            <div className="animate-marquee flex items-center gap-16 w-max">
                {marqueeItems.map((brand, i) => (
                    <span
                        key={`${brand}-${i}`}
                        className={`text-3xl md:text-4xl font-bold font-[Space_Grotesk] tracking-tight whitespace-nowrap select-none transition-colors duration-300 ${darkMode
                                ? 'text-white/10 hover:text-white/30'
                                : 'text-gray-900/10 hover:text-gray-900/25'
                            }`}
                    >
                        {brand}
                    </span>
                ))}
            </div>
        </section>
    )
}
