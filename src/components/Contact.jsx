import { useState } from 'react'

export default function Contact({ darkMode }) {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitStatus('success')
            setFormState({ name: '', email: '', message: '' })

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000)
        }, 1500)
    }

    return (
        <section
            id="contact"
            className={`relative py-28 overflow-hidden ${darkMode ? 'bg-[#0A0A0F]' : 'bg-white'
                }`}
        >
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left Side: Text & Map */}
                    <div className="flex-1" data-aos="fade-right">
                        <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 ${darkMode ? 'bg-white/5 text-[#8B5CF6] border border-white/10' : 'bg-purple-50 text-[#6C3CE1] border border-purple-100'
                            }`}>
                            Get in Touch
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold font-[Space_Grotesk] tracking-tight mb-6">
                            Let's create something <span className="bg-gradient-to-r from-[#6C3CE1] to-[#F43F5E] bg-clip-text text-transparent">amazing together.</span>
                        </h2>
                        <p className={`text-base leading-relaxed mb-8 max-w-md ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Whether you have a specific project in mind or just want to explore possibilities,
                            we'd love to hear from you. Drop us a line or visit our studio in Buenos Aires.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8 mb-10">
                            <div>
                                <h4 className={`text-sm font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Contact</h4>
                                <a href="mailto:hello@vortexstudio.io" className={`block text-base mb-1 hover:text-[#6C3CE1] transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>hello@vortexstudio.io</a>
                                <a href="tel:+34911234567" className={`block text-base hover:text-[#6C3CE1] transition-colors ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>+34 911 234 567</a>
                            </div>
                            <div>
                                <h4 className={`text-sm font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Studio</h4>
                                <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Av. 9 de Julio 1000,<br />
                                    C1043 CABA, Argentina
                                </p>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div className={`w-full h-48 md:h-64 rounded-2xl overflow-hidden border ${darkMode ? 'border-white/10' : 'border-gray-200'} shadow-lg`}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.23949906466!2d-58.43329845000001!3d-34.615823750000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA%2C%20Argentina!5e0!3m2!1sen!2sus!4v1655104863959!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Vortex Studio Location"
                                className="w-full h-full object-cover"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="flex-1" data-aos="fade-left" data-aos-delay="150">
                        <div className={`p-8 md:p-10 rounded-3xl border ${darkMode
                            ? 'bg-white/[0.02] border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]'
                            : 'bg-white border-gray-200 shadow-xl'
                            }`}>
                            <h3 className={`text-2xl font-bold font-[Space_Grotesk] mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                Send us a message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-5 py-3.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#6C3CE1]/50 transition-all ${darkMode
                                            ? 'bg-[#0A0A0F] border-white/10 text-white focus:border-[#6C3CE1]'
                                            : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-[#6C3CE1] focus:bg-white'
                                            }`}
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-5 py-3.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#6C3CE1]/50 transition-all ${darkMode
                                            ? 'bg-[#0A0A0F] border-white/10 text-white focus:border-[#6C3CE1]'
                                            : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-[#6C3CE1] focus:bg-white'
                                            }`}
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className={`w-full px-5 py-3.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#6C3CE1]/50 transition-all resize-none ${darkMode
                                            ? 'bg-[#0A0A0F] border-white/10 text-white focus:border-[#6C3CE1]'
                                            : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-[#6C3CE1] focus:bg-white'
                                            }`}
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full relative px-6 py-4 rounded-xl text-sm font-bold text-white overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_rgba(108,60,225,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-[#6C3CE1] to-[#F43F5E]" />
                                    <span className="absolute inset-0 bg-gradient-to-r from-[#F43F5E] to-[#6C3CE1] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <span className="relative flex items-center justify-center gap-2">
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : 'Send Message'}
                                    </span>
                                </button>

                                {/* Form feedback */}
                                {submitStatus === 'success' && (
                                    <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium text-center">
                                        Thanks! Your message has been sent successfully. We'll be in touch soon.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
