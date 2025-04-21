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
        <div className="absolute inset-0 opacity-20 bg-[url('/B03.webp')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center about-hero-text">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Brand Konnects</h1>
            <p className="text-xl mb-8 text-slate-300">
              We're a team of passionate marketers and event specialists dedicated to helping brands connect with their
              audience in meaningful ways.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="story-content">
              <h2 className="text-3xl font-bold mb-6 text-black">Our Story</h2>
              <p className="text-slate-600 mb-4">
                Brand Konnects was founded in 2013 with a simple mission: to help businesses create meaningful
                connections with their audience through strategic marketing and unforgettable events.
              </p>
              <p className="text-slate-600 mb-4">
                What started as a small team of passionate marketers has grown into a full-service agency with expertise
                across digital marketing, brand strategy, and event management. Throughout our journey, we've remained
                committed to our core values of creativity, excellence, and results-driven strategies.
              </p>
              <p className="text-slate-600 mb-6">
                Today, we're proud to have worked with over 150 clients across various industries, helping them achieve
                their marketing goals and create lasting impressions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-medium flex items-center gap-2 transition-all"
                >
                  Work With Us <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="story-image">
              <Image
                src="/B3.webp"
                alt="Brand Konnects Team"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section ref={valuesRef} className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Our Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These core principles guide everything we do at Brand Konnects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="value-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap size={28} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-slate-600">
                We constantly push boundaries to deliver fresh, creative solutions that help our clients stand out.
              </p>
            </div>

            <div className="value-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={28} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-slate-600">
                We're committed to delivering exceptional quality in everything we do, from strategy to execution.
              </p>
            </div>

            <div className="value-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={28} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Results-Driven</h3>
              <p className="text-slate-600">
                We focus on strategies that deliver measurable outcomes and tangible business results.
              </p>
            </div>

            <div className="value-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={28} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-slate-600">
                We believe in working closely with our clients to understand their vision and bring it to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section ref={teamRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">The talented individuals behind Brand Konnects' success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                           { name: "Sarah Johnson", role: "Founder & CEO", image: "/images/p15.jpg?height=400&width=400" },
                           { name: "Michael Chen", role: "Creative Director", image: "/images/p16.jpg?height=400&width=400"},
                           { name: "Priya Sharma", role: "Event Manager", image: "/images/p17.jpg?height=400&width=400" },
                           { name: "David Wilson", role: "Digital Marketing Lead", image: "/images/p18.jpg?height=400&width=400" },
                           { name: "Olivia Martinez", role: "Brand Strategist", image: "/images/p19.jpg?height=400&width=400" },
                           { name: "James Taylor", role: "Client Relations", image: "/images/p20.jpg?height=400&width=400"},
              
            ].map((member, index) => (
              <div
                key={index}
                className="team-member bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-orange-600 mb-4">{member.role}</p>
                  <p className="text-slate-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                    mattis.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

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
