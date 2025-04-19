"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Users, Award, Target, Zap } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function About() {
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  const teamRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Hero animation
    gsap.fromTo(".about-hero-text", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })

    // Story section animation
    gsap.fromTo(
      ".story-content",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 70%",
        },
      },
    )

    gsap.fromTo(
      ".story-image",
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 70%",
        },
      },
    )

    // Values animation
    gsap.fromTo(
      ".value-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 75%",
        },
      },
    )

    // Team animation
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
      },
    )
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-maroon-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-20 bg-[url('/B03.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center about-hero-text">
            <h1 className="text-4xl md:text-5xl font-bold mb-6"> Our Gallery</h1>
            <p className="text-xl mb-8 text-slate-300">
            A vibrant showcase of moments, brands, and experiences—captured and curated to inspire.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>





      <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    {/* <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4  text-black">Gallery</h2>
      <p className="text-slate-600 max-w-2xl mx-auto">
        Explore our recent projects and events through our visual showcase.
      </p>
    </div> */}

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[
        "/images/garlley/1.jpg",
        "/images/garlley/2.jpg",
        "/images/garlley/3.jpg",
        "/images/garlley/4.jpg",
        "/images/garlley/5.jpg",
        "/images/garlley/6.jpg",
        "/images/garlley/7.jpg",
        "/images/garlley/8.jpg",
        "/images/garlley/9.jpg",
        "/images/garlley/10.jpg",
        "/images/garlley/11.jpg",
        "/images/garlley/12.jpg",
        "/images/garlley/13.jpg",
        "/images/garlley/14.jpg"
        // "/images/garlley16.jpg",
        // "/images/gallery5.jpg",
        // "/images/gallery6.jpg",
      ].map((src, index) => (
        <div key={index} className="overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow">
          <Image
            src={src}
            alt={`Gallery image ${index + 1}`}
            width={600}
            height={400}
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  </div>
</section>


     
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
