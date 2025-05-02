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
        <section className="relative bg-gradient-to-r from-maroon-900 to-maroon-800 text-white">
  {/* Background image overlay */}
  <div className="absolute inset-0 opacity-20 bg-[url('/B02.webp')] bg-cover bg-center"></div>

  <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
    <div className="max-w-3xl mt-13 hero-text">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch with Brand Konnects</h2>
      <p className="text-xl md:text-2xl mb-8 text-slate-300">
        Ready to elevate your brand? Reach out to us for marketing, branding, or event management solutions.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/contact"
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-medium flex items-center gap-2 transition-all"
        >
          Contact Us <ArrowRight size={18} />
        </Link>
        <Link
          href="/about"
          className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-md font-medium transition-all"
        >
          Learn About Us
        </Link>
      </div>
    </div>
  </div>

  {/* White bottom gradient for soft separation */}
  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
</section>

        <section className="contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-container">
            <div className="form-header">
              <div className="icon-box">
                <Send size={24} />
              </div>
              <h2>Send Us a Message</h2>
            </div>

            {formStatus.submitted && (
              <div className={`alert ${formStatus.error ? 'error' : 'success'}`}>
                {formStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-container">
            <div className="info-header">
              <div className="icon-box">
                <MapPin size={24} />
              </div>
              <h2>Contact Information</h2>
            </div>

            <p className="info-description">
              Have questions or want to discuss a project? Reach out through any of these channels.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="item-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3>Our Location</h3>
                  <p>Brand Konnects Shop No. 2 Gaurav Residency phase 2 Near RBK school</p>
                </div>
              </div>

              <div className="info-item">
                <div className="item-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h3>Email Us</h3>
                  <p>konnect@brandkonnects.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="item-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 9769355135</p>
                </div>
              </div>

              <div className="info-item">
                <div className="item-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h3>Join Our Team</h3>
              <p>We're always looking for talented individuals to join our growing team.</p>
              <button className="cta-btn">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 4rem 0;
          background-color: #f9fafb;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        .contact-form-container,
        .contact-info-container {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid #e5e7eb;
        }
        
        .form-header,
        .info-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .icon-box {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background-color: rgba(252, 111, 31, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FC6F1F;
        }
        
        h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #510A1C;
          margin: 0;
        }
        
        .alert {
          padding: 1rem;
          margin-bottom: 1.5rem;
          border-radius: 8px;
        }
        
        .alert.success {
          background-color: #f0fdf4;
          color: #166534;
          border: 1px solid #bbf7d0;
        }
        
        .alert.error {
          background-color: #fef2f2;
          color: #b91c1c;
          border: 1px solid #fecaca;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .form-row {
          display: grid;
          gap: 1rem;
          grid-template-columns: 1fr;
        }
        
        @media (min-width: 576px) {
          .form-row {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        label {
          font-weight: 500;
          color: #374151;
        }
        
        input,
        textarea {
          padding: 0.75rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.2s;
        }
        
        input:focus,
        textarea:focus {
          outline: none;
          border-color: #FC6F1F;
          box-shadow: 0 0 0 3px rgba(252, 111, 31, 0.2);
        }
        
        textarea {
          min-height: 120px;
          resize: vertical;
        }
        
        .submit-btn {
          background-color: #FC6F1F;
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        
        .submit-btn:hover {
          background-color: #e05d15;
          transform: translateY(-2px);
        }
        
        .info-description {
          color: #6b7280;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .info-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .info-item {
          display: flex;
          gap: 1rem;
          padding: 1.5rem;
          border-radius: 12px;
          background-color: rgba(249, 250, 251, 0.7);
          border: 1px solid #e5e7eb;
        }
        
        .item-icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background-color: rgba(252, 111, 31, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FC6F1F;
          flex-shrink: 0;
        }
        
        h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #510A1C;
          margin: 0 0 0.5rem 0;
        }
        
        .info-item p {
          color: #6b7280;
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.5;
        }
        
        .cta-box {
          padding: 1.5rem;
          border-radius: 16px;
          background-color: rgba(252, 111, 31, 0.05);
          border: 1px solid rgba(252, 111, 31, 0.1);
        }
        
        .cta-box h3 {
          margin-bottom: 0.5rem;
        }
        
        .cta-box p {
          color: #6b7280;
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }
        
        .cta-btn {
          background-color: transparent;
          color: #510A1C;
          padding: 0.75rem 1.5rem;
          border: 2px solid #510A1C;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          width: 100%;
        }
        
        .cta-btn:hover {
          background-color: rgba(81, 10, 28, 0.05);
        }
      `}</style>
    </section>
    <section className="map-section">
  <div className="map-container">
    <h2 className="map-heading">Find Us Here</h2>
    <div className="map-embed">
      <iframe
        title="Brand Konnects Location"
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179329!2d-73.98784492423988!3d40.74844097138962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1713457264253!5m2!1sen!2sus"

        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>

  <style jsx>{`
    .map-section {
      background-color: #fff;
      padding: 4rem 0;
    }

    .map-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .map-heading {
      font-size: 1.75rem;
      font-weight: 700;
      color: #510A1C;
      margin-bottom: 2rem;
      text-align: center;
    }

    .map-embed iframe {
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
  `}</style>
</section>


        <Footer />
      </main>

  )
}