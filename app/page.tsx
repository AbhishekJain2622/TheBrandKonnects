"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, CheckCircle, ChevronRight, Users, Award, Target } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import ClientCarousel from "@/components/client-carousel"

export default function Home() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const statsRef = useRef(null)
  const clientsRef = useRef(null)
  const aboutRef = useRef(null)

  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const galleryImages = [
    "/images/garlley/1.webp",
    "/images/garlley/2.webp",
    "/images/garlley/3.webp",
    "/images/garlley/4.webp",
    "/images/garlley/5.webp",
    "/images/garlley/6.webp",
  ];

  const openLightbox = (src) => {
    setSelectedImage(src);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };
  const clients = [
    { src: "/images/1.webp", alt: "Client 1" },
    { src: "/images/2.webp", alt: "Client 2" },
    { src: "/images/3.webp", alt: "Client 3" },
    { src: "/images/4.webp", alt: "Client 4" },
    { src: "/images/5.webp", alt: "Client 5" },
  ];
  
  // Service cards data
  const serviceCards = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-maroon-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
      title: "Brand Strategy",
      description: "Develop a compelling brand identity and strategy that resonates with your target audience.",
      features: ["Brand Positioning", "Market Research", "Competitive Analysis"],
      image: "/images/b7.webp",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-maroon-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      title: "Event Management",
      description: "Create memorable experiences with our end-to-end event planning and execution services.",
      features: ["Corporate Events", "Product Launches", "Trade Shows"],
      image: "/images/b1.webp",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-maroon-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Digital Marketing",
      description: "Boost your online presence with our comprehensive digital marketing strategies.",
      features: ["Social Media Marketing", "SEO Optimization", "Content Strategy"],
      image: "/images/b6.webp",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-maroon-900"
        >
          <path d="M20 12v10H4V12"></path>
          <path d="M2 7h20v5H2z"></path>
          <path d="M12 22V7"></path>
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
        </svg>
      ),
      title: "Corporate Gifting",
      description: "Create memorable impressions with thoughtful, branded gifts for clients and partners.",
      features: ["Custom Gift Curation", "Branded Merchandise", "Gift Packaging"],
      image: "/images/b2.webp",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-maroon-900"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      title: "Custom Fabrication",
      description: "Bring your brand to life with custom-built displays, signage, and installations.",
      features: ["Exhibition Booths", "Custom Signage", "Retail Environments"],
      image: "/images/b3.webp",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-maroon-900"
        >
          <path d="M6 9V2h12v7"></path>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
          <path d="M6 14h12v8H6z"></path>
        </svg>
      ),
      title: "Print Solutions",
      description: "High-quality printing services for all your marketing materials and brand collateral.",
      features: ["Marketing Collateral", "Large Format Printing", "Promotional Materials"],
      image: "/images/b4.webp",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Hero animation
    gsap.fromTo(".hero-text", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })

    // About animation
    gsap.fromTo(
      ".about-content",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
        },
      },
    )

    gsap.fromTo(
      ".about-image",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
        },
      },
    )

    // Stats counter animation using vanilla JS
    const statsElements = document.querySelectorAll(".stat-number")
    statsElements.forEach((el) => {
      const target = Number.parseInt(el.getAttribute("data-target") || "0", 10)

      ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 80%",
        onEnter: () => {
          const start = 0
          const duration = 2000
          const startTime = Date.now()

          const updateCounter = () => {
            const currentTime = Date.now()
            const elapsed = currentTime - startTime

            if (elapsed < duration) {
              const progress = elapsed / duration
              const currentCount = Math.round(progress * target)
              el.textContent = currentCount.toString()
              requestAnimationFrame(updateCounter)
            } else {
              el.textContent = target.toString()
            }
          }

          requestAnimationFrame(updateCounter)
        },
        once: true,
      })
    })

    // Clients logo animation
    gsap.fromTo(
      ".client-logo",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: clientsRef.current,
          start: "top 85%",
        },
      },
    )
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-r from-maroon-900 to-maroon-800 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/B02.webp')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl mt-13 hero-text">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Elevate Your Brand With Strategic Marketing</h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300">
              Brand Konnects delivers innovative marketing solutions and unforgettable events that drive results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-medium flex items-center gap-2 transition-all"
              >
                Get Started <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-md font-medium transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Us Section */}
      <section ref={aboutRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="about-content">
              <div className="inline-block bg-maroon-100 text-maroon-900 px-4 py-1 rounded-full text-sm font-medium mb-4">
                About Us
              </div>
              <h2 className="text-3xl font-bold mb-6 text-black">We Connect Brands With Their Audience</h2>
              <p className="text-slate-600 mb-4">
                Brand Konnects was founded with a simple mission: to help businesses create meaningful connections with
                their audience through strategic marketing and unforgettable events.
              </p>
              <p className="text-slate-600 mb-6">
                What started as a small team of passionate marketers has grown into a full-service agency with expertise
                across digital marketing, brand strategy, and event management. Throughout our journey, we've remained
                committed to our core values of creativity, excellence, and results-driven strategies.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-2">
                  <Award className="text-orange-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold">Excellence</h4>
                    <p className="text-sm text-slate-600">Delivering exceptional quality in everything we do</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Target className="text-orange-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold">Results-Driven</h4>
                    <p className="text-sm text-slate-600">Focused on strategies that deliver measurable outcomes</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="text-orange-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold">Collaboration</h4>
                    <p className="text-sm text-slate-600">Working closely with clients to bring their vision to life</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-orange-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold">Innovation</h4>
                    <p className="text-sm text-slate-600">Pushing boundaries with fresh, creative solutions</p>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="text-orange-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn More About Us <ChevronRight size={16} />
              </Link>
            </div>
            <div className="about-image">
              <Image
                src="/B1.webp"
                alt="Brand Konnects Team"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block text-black bg-maroon-100 text-maroon-900 px-4 py-1 rounded-full text-sm font-medium mb-4">
              What We Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Our Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We offer comprehensive marketing and event solutions tailored to your brand's unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((service, index) => (
              <div
                key={index}
                className="service-card group bg-white p-6 rounded-xl shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 hover:border-orange-200 hover:translate-y-[-5px]"
              >
                {service.image && (
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={200}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-maroon-100 rounded-lg flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mt-3">{service.title}</h3>
                </div>

                <p className="text-slate-600 mb-5">{service.description}</p>

                <div className="bg-slate-50 p-4 rounded-lg mb-5">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-orange-600 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/services"
                  className="text-orange-600 font-medium flex items-center gap-1 hover:gap-2 transition-all group-hover:text-maroon-900"
                >
                  Learn More <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-maroon-900 hover:bg-maroon-800 text-white px-8 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-all hover:gap-3"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Our Gallery</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore our recent projects and events through our visual showcase.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                onClick={() => openLightbox(src)}
                className="group relative block overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  {/* <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-4.553a1.5 1.5 0 00-2.121-2.121L12.879 7.879M9 14l-4.553 4.553a1.5 1.5 0 002.121 2.121L11.121 16.12" />
                  </svg> */}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="bg-maroon-900 hover:bg-maroon-800 text-white px-8 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-all hover:gap-3"
            >
              View More <ArrowRight size={18} />
            </Link>
          </div>

          {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
              >
                &times;
              </button>
              <div className="relative max-w-4xl w-full max-h-[90vh]">
                <Image
                  src={selectedImage}
                  alt="Enlarged gallery image"
                  width={1200}
                  height={800}
                  className="w-full h-full object-contain max-h-[90vh]"
                />
              </div>
            </div>
          )}
        </div>
      </section>
      {/* Event Section with Fullscreen Video */}
{/* Heading Section (on top) */}
<section className="py-10 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center ">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Upcoming Events</h2>
      <p className="text-slate-600 max-w-2xl mx-auto">
      Relive the moments from our recent events through this immersive visual experience
      </p>
    </div>
  </div>
</section>

{/* Fullscreen Video Section */}
<section className="relative w-full h-screen overflow-hidden bg-black">
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="/video.mp4" // Replace with actual path
    autoPlay
    muted
    loop
    playsInline
  />
</section>


      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                <span className="stat-number" data-target="150">
                  0
                </span>
                +
              </div>
              <p className="text-slate-600">Clients Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                <span className="stat-number" data-target="200">
                  0
                </span>
                +
              </div>
              <p className="text-slate-600">Events Managed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                <span className="stat-number" data-target="10">
                  0
                </span>
                +
              </div>
              <p className="text-slate-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                <span className="stat-number" data-target="95">
                  0
                </span>
                %
              </div>
              <p className="text-slate-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-black md:text-[35px]">
            Our Clients
          </h2>
          <p className="mx-auto max-w-4xl font-teko text-[15px] leading-relaxed text-black">
            We're proud to work with businesses across various industries.
          </p>
        </div>

        <ClientCarousel clients={clients} />
      </div>
    </section>
      {/* CTA Section */}
      <section className="py-20 bg-maroon-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-maroon-100">
            Let's discuss how Brand Konnects can help you achieve your marketing and event goals.
          </p>
          <Link
            href="/contact"
            className="bg-white text-maroon-900 hover:bg-orange-100 px-8 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-all"
          >
            Contact Us Today <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}