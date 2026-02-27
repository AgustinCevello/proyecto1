import { FiArrowRight } from 'react-icons/fi'

export default function CTABanner({ darkMode }) {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Gradient Animation */}
            <div
                className="absolute inset-0 animate-gradient opacity-90"
                style={{
                    background: 'linear-gradient(-45deg, #5521C6, #6C3CE1, #F43F5E, #8B5CF6)',
                    backgroundSize: '400% 400%'
                }}
            />

            {/* Texture Overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center" data-aos="zoom-in">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Space_Grotesk] tracking-tight text-white mb-6">
                    Ready to make your mark?
                </h2>
                <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                    Let's collaborate to build something extraordinary. Whether it's a new brand identity,
                    a digital product, or a full-scale campaign, we're here to help you succeed.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-[#6C3CE1] bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 active:scale-95 w-full sm:w-auto justify-center"
                    >
                        Let's Talk
                        <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                    <a
                        href="mailto:hello@vortexstudio.io"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-bold text-white border-2 border-white/20 transition-all duration-300 hover:bg-white/10 w-full sm:w-auto"
                    >
                        hello@vortexstudio.io
                    </a>
                </div>
            </div>
        </section>
    )
}
