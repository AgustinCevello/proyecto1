import { useState, useEffect, useRef } from 'react'
import { FiAward, FiBriefcase, FiUsers, FiClock } from 'react-icons/fi'

const stats = [
    { icon: FiBriefcase, value: 150, suffix: '+', label: 'Projects Delivered', color: '#6C3CE1' },
    { icon: FiUsers, value: 80, suffix: '+', label: 'Happy Clients', color: '#F43F5E' },
    { icon: FiClock, value: 7, suffix: '', label: 'Years of Experience', color: '#8B5CF6' },
    { icon: FiAward, value: 12, suffix: '', label: 'Awards Won', color: '#F59E0B' },
]

function AnimatedCounter({ target, suffix, inView }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!inView) return
        let start = 0
        const duration = 2000
        const increment = target / (duration / 16)
        const timer = setInterval(() => {
            start += increment
            if (start >= target) {
                setCount(target)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, 16)
        return () => clearInterval(timer)
    }, [inView, target])

    return (
        <span className="tabular-nums">
            {count}{suffix}
        </span>
    )
}

export default function Stats({ darkMode }) {
    const [inView, setInView] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.3 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className={`relative py-24 overflow-hidden ${darkMode ? 'bg-[#0A0A0F]' : 'bg-white'
                }`}
        >
            {/* Background accent */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none opacity-[0.04]"
                style={{ background: 'radial-gradient(circle, #6C3CE1, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                    {stats.map((stat, i) => {
                        const Icon = stat.icon
                        return (
                            <div
                                key={stat.label}
                                className="text-center group"
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                {/* Icon container */}
                                <div
                                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${darkMode ? 'bg-white/5' : 'bg-gray-50'
                                        }`}
                                    style={{
                                        boxShadow: `0 0 0 0 ${stat.color}00`,
                                    }}
                                >
                                    <Icon className="w-6 h-6" style={{ color: stat.color }} />
                                </div>

                                {/* Counter */}
                                <p
                                    className="text-4xl md:text-5xl font-bold font-[Space_Grotesk] tracking-tight mb-2"
                                    style={{ color: stat.color }}
                                >
                                    <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
                                </p>

                                {/* Label */}
                                <p
                                    className={`text-sm font-medium ${darkMode ? 'text-gray-500' : 'text-gray-500'
                                        }`}
                                >
                                    {stat.label}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
