"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, ZoomIn } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function About() {
  const heroRef = useRef(null)
  const valuesRef = useRef(null)
  const teamRef = useRef(null)

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      ".about-hero-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )

    gsap.fromTo(
      ".gallery-item",
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 85%",
        },
      }
    )

    gsap.fromTo(
      ".team-member",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 75%",
        },
      }
    )

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null)
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const galleryImages = Array.from({ length: 76 }, (_, i) => `/images/garlley/${i + 1}.webp`)

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-maroon-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-20 bg-[url('/B03.webp')] bg-cover bg-center blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto mt-13 text-center about-hero-text">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl mb-8 text-slate-300">
              A vibrant showcase of moments, brands, and experiences—captured and curated to inspire.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Gallery Section */}
      <section ref={valuesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer gallery-item group"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <ZoomIn className="text-white w-8 h-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 bg-white text-maroon-900 hover:bg-orange-100 p-2 rounded-full z-10 transition-all duration-200 shadow-md"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <Image
              src={selectedImage}
              alt="Selected gallery image"
              width={1200}
              height={800}
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-maroon-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-maroon-100">
            Partner with Brand Konnects and let's create something amazing together.
          </p>
          <Link
            href="/contact"
            className="bg-white text-maroon-900 hover:bg-orange-100 px-8 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-all"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
