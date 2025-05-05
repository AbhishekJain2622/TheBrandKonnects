"use client"

import { useState, useEffect, useRef } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Contact() {
  const heroRef = useRef(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus({
      submitted: true,
      error: false,
      message: "Thank you for your message! We'll get back to you soon."
    })
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    })
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-maroon-900 to-maroon-800 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/B02.webp')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 py-16 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Get in Touch with Brand Konnects</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-slate-200">
              Ready to elevate your brand? Reach out to us for marketing, branding, or event management solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                href="/contact"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-all"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
              <Link
                href="/about"
                className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-md font-medium transition-all flex items-center justify-center"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Contact Section */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-sm p-5 md:p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                  <Send size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Send Us a Message</h2>
              </div>

              {formStatus.submitted && (
                <div className={`mb-6 p-4 rounded-lg ${formStatus.error ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'}`}>
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-lg transition flex items-center justify-center gap-2"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-sm p-5 md:p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                  <MapPin size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Contact Information</h2>
              </div>

              <p className="text-gray-600 mb-6">
                Have questions or want to discuss a project? Reach out through any of these channels.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-10 h-10 rounded-md bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Our Location</h3>
                    <p className="text-gray-600 text-sm">Brand Konnects Shop No. 2 Gaurav Residency phase 2 Near RBK school</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-10 h-10 rounded-md bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email Us</h3>
                    <p className="text-gray-600 text-sm">konnect@brandkonnects.com</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-10 h-10 rounded-md bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Call Us</h3>
                    <p className="text-gray-600 text-sm">+91 9769355135</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-10 h-10 rounded-md bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Business Hours</h3>
                    <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 text-sm">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-orange-50 rounded-xl border border-orange-100">
                <h3 className="font-medium text-gray-900 mb-2">Join Our Team</h3>
                <p className="text-gray-600 text-sm mb-4">We're always looking for talented individuals to join our growing team.</p>
                <button className="w-full border-2 border-maroon-800 text-maroon-800 font-medium py-2 px-4 rounded-lg transition hover:bg-maroon-50">
                  View Open Positions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6 md:mb-8">Find Us Here</h2>
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Brand Konnects Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179329!2d-73.98784492423988!3d40.74844097138962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1713457264253!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}