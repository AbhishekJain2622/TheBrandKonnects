"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Lightbulb,
  PenTool,
  BarChart,
  Calendar,
  Megaphone,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Services() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const processRef = useRef(null)
  const testimonialsRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Hero animation
    gsap.fromTo(".services-hero-text", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })

    // Services animation
    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 75%",
        },
      },
    )

    // Process animation
    gsap.fromTo(
      ".process-step",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 75%",
        },
      },
    )

    // Process line animation
    gsap.fromTo(
      ".process-line",
      { height: 0 },
      {
        height: "100%",
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 60%",
        },
      },
    )

    // Testimonials animation
    gsap.fromTo(
      ".testimonial-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 80%",
        },
      },
    )

    // CTA animation
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
      },
    )
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-r from-maroon-900 to-maroon-800 text-white py-24 md:py-32"
      >
        <div className="absolute inset-0 opacity-20 bg-[url('/B05.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center services-hero-text">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl mb-8 text-slate-200">
              Comprehensive marketing and event solutions tailored to your brand's unique needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#services"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-medium flex items-center gap-2 transition-all"
              >
                Explore Services <ChevronRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-medium transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Overview Section */}
      <section id="services" ref={servicesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-maroon-100 text-maroon-900 px-4 py-1 rounded-full text-sm font-medium mb-4">
              What We Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Comprehensive Marketing Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We provide end-to-end services to help your brand stand out, connect with your audience, and achieve your
              business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="service-card bg-white p-8 rounded-xl shadow-md hover:shadow-xl border border-slate-100 transition-all">
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/B4.jpg"
                  alt="Brand Strategy & Identity"
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mb-6">
                <PenTool className="h-8 w-8 text-maroon-900" />
              </div>
              <h3 className="text-xl font-bold mb-3">Brand Strategy & Identity</h3>
              <p className="text-slate-600 mb-4">
                Create a compelling brand identity that resonates with your target audience and sets you apart from
                competitors.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Brand Positioning & Messaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Visual Identity Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Brand Guidelines & Strategy</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="text-orange-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn More <ChevronRight size={16} />
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="service-card bg-white p-8 rounded-xl shadow-md hover:shadow-xl border border-slate-100 transition-all">
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/B5.jpg"
                  alt="Digital Marketing"
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mb-6">
                <Megaphone className="h-8 w-8 text-maroon-900" />
              </div>
              <h3 className="text-xl font-bold mb-3">Digital Marketing</h3>
              <p className="text-slate-600 mb-4">
                Boost your online presence and reach your target audience through strategic digital marketing campaigns.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Social Media Marketing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Search Engine Optimization (SEO)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Email Marketing Campaigns</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="text-orange-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn More <ChevronRight size={16} />
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="service-card bg-white p-8 rounded-xl shadow-md hover:shadow-xl border border-slate-100 transition-all">
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/B7.jpg"
                  alt="Event Management"
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-maroon-900" />
              </div>
              <h3 className="text-xl font-bold mb-3">Event Management</h3>
              <p className="text-slate-600 mb-4">
                Create memorable experiences with our end-to-end event planning and execution services.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Corporate Events & Conferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Product Launches & Exhibitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Virtual & Hybrid Events</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="text-orange-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn More <ChevronRight size={16} />
              </Link>
            </div>

            {/* Service Card 4 */}
            <div className="service-card bg-white p-8 rounded-xl shadow-md hover:shadow-xl border border-slate-100 transition-all">
              <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-maroon-900" />
              </div>
              <h3 className="text-xl font-bold mb-3">Content Creation</h3>
              <p className="text-slate-600 mb-4">
                Develop engaging content that tells your brand story and drives audience engagement.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Copywriting & Storytelling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Video Production & Editing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Graphic Design & Visual Content</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="text-orange-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn More <ChevronRight size={16} />
              </Link>
            </div>

            {/* Service Card 5 */}
            <div className="service-card bg-white p-8 rounded-xl shadow-md hover:shadow-xl border border-slate-100 transition-all">
              <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mb-6">
                <BarChart className="h-8 w-8 text-maroon-900" />
              </div>
              <h3 className="text-xl font-bold mb-3">Market Research & Analysis</h3>
              <p className="text-slate-600 mb-4">
                Gain valuable insights into your industry, competitors, and target audience to inform your strategy.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Competitive Analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Consumer Behavior Research</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Market Trend Analysis</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="text-orange-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn More <ChevronRight size={16} />
              </Link>
            </div>

            {/* Service Card 6 */}
            <div className="service-card bg-white p-8 rounded-xl shadow-md hover:shadow-xl border border-slate-100 transition-all">
              <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-maroon-900" />
              </div>
              <h3 className="text-xl font-bold mb-3">Growth Strategy</h3>
              <p className="text-slate-600 mb-4">
                Develop data-driven strategies to accelerate your business growth and maximize ROI.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Business Development Planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Customer Acquisition Strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Performance Measurement</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="text-orange-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn More <ChevronRight size={16} />
              </Link>
            </div>

            {/* Service Card 7 - Gifting */}
            <div className="service-card bg-white p-8 rounded-xl shadow-md hover:shadow-xl border border-slate-100 transition-all">
              <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mb-6">
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
              </div>
              <h3 className="text-xl font-bold mb-3">Corporate Gifting</h3>
              <p className="text-slate-600 mb-4">
                Create memorable impressions with thoughtful, branded gifts for clients, employees, and partners.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Custom Gift Curation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Branded Merchandise</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Gift Packaging & Delivery</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="text-orange-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn More <ChevronRight size={16} />
              </Link>
            </div>

            {/* Service Card 8 - Fabrication */}
            <div className="service-card bg-white p-8 rounded-xl shadow-md hover:shadow-xl border border-slate-100 transition-all">
              <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mb-6">
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
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Fabrication</h3>
              <p className="text-slate-600 mb-4">
                Bring your brand to life with custom-built displays, signage, and experiential installations.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Exhibition Booths & Displays</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Custom Signage & Installations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Retail & Event Environments</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="text-orange-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn More <ChevronRight size={16} />
              </Link>
            </div>

            {/* Service Card 9 - Printing */}
            <div className="service-card bg-white p-8 rounded-xl shadow-md hover:shadow-xl border border-slate-100 transition-all">
              <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center mb-6">
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
              </div>
              <h3 className="text-xl font-bold mb-3">Print Solutions</h3>
              <p className="text-slate-600 mb-4">
                High-quality printing services for all your marketing materials and brand collateral.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Marketing Collateral & Brochures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Large Format Printing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Promotional Materials</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="text-orange-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn More <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Redesigned */}
      <section ref={processRef} className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-maroon-100 text-maroon-900 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Our Proven Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure successful outcomes for every project.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line connecting the steps */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:translate-x-[-0.5px]">
              <div className="process-line absolute left-0 top-0 bottom-0 w-full bg-maroon-900 origin-top"></div>
            </div>

            {/* Process Steps */}
            <div className="space-y-12 md:space-y-24 relative">
              {/* Step 1 */}
              <div className="process-step relative">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="md:w-1/2 md:text-right order-2 md:order-1 pt-2 md:pt-0">
                    <h3 className="text-2xl font-bold mb-3 text-maroon-900">Discovery & Analysis</h3>
                    <p className="text-slate-600 mb-4">
                      We begin by understanding your business, goals, target audience, and competitive landscape. This
                      forms the foundation for a tailored strategy that aligns with your objectives.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-slate-200 md:ml-auto md:mr-0">
                      <p className="text-sm text-slate-600 italic">
                        "The discovery phase helped us clarify our goals and develop a strategy that truly aligned with
                        our brand vision."
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] z-10">
                    <div className="w-14 h-14 rounded-full bg-maroon-900 text-white flex items-center justify-center font-bold text-xl border-4 border-white">
                      1
                    </div>
                  </div>
                  <div className="md:w-1/2 order-1 md:order-2 md:pl-16 pl-16">
                    <div className="bg-white p-5 rounded-xl shadow-md border border-slate-100">
                      <div className="flex items-center gap-3 mb-3">
                        <Target className="text-orange-600" size={24} />
                        <h4 className="font-bold text-lg">Key Activities</h4>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-orange-600 mt-1 flex-shrink-0" />
                          <span className="text-slate-700">Stakeholder interviews</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-orange-600 mt-1 flex-shrink-0" />
                          <span className="text-slate-700">Market research & analysis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-orange-600 mt-1 flex-shrink-0" />
                          <span className="text-slate-700">Goal setting & KPI definition</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="process-step relative">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="md:w-1/2 order-2 md:pl-16 pl-16">
                    <h3 className="text-2xl font-bold mb-3 text-maroon-900">Strategy Development</h3>
                    <p className="text-slate-600 mb-4">
                      Based on our findings, we develop a comprehensive strategy that outlines the approach, tactics,
                      timeline, and expected outcomes to achieve your business objectives.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <p className="text-sm text-slate-600 italic">
                        "The strategic roadmap provided clear direction and helped us prioritize our marketing
                        initiatives for maximum impact."
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] z-10">
                    <div className="w-14 h-14 rounded-full bg-maroon-900 text-white flex items-center justify-center font-bold text-xl border-4 border-white">
                      2
                    </div>
                  </div>
                  <div className="md:w-1/2 md:text-right order-1 md:order-1 pt-2 md:pt-0">
                    <div className="bg-white p-5 rounded-xl shadow-md border border-slate-100 md:ml-auto">
                      <div className="flex items-center gap-3 mb-3 md:justify-end">
                        <h4 className="font-bold text-lg">Key Activities</h4>
                        <Lightbulb className="text-orange-600" size={24} />
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 md:justify-end">
                          <span className="text-slate-700">Strategic planning & roadmapping</span>
                          <CheckCircle size={16} className="text-orange-600 mt-1 flex-shrink-0" />
                        </li>
                        <li className="flex items-start gap-2 md:justify-end">
                          <span className="text-slate-700">Budget allocation & resource planning</span>
                          <CheckCircle size={16} className="text-orange-600 mt-1 flex-shrink-0" />
                        </li>
                        <li className="flex items-start gap-2 md:justify-end">
                          <span className="text-slate-700">Channel & tactic selection</span>
                          <CheckCircle size={16} className="text-orange-600 mt-1 flex-shrink-0" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="process-step relative">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="md:w-1/2 md:text-right order-2 md:order-1 pt-2 md:pt-0">
                    <h3 className="text-2xl font-bold mb-3 text-maroon-900">Creative Execution</h3>
                    <p className="text-slate-600 mb-4">
                      Our creative team brings your strategy to life through compelling design, content, and experiences
                      that resonate with your target audience and strengthen your brand.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-slate-200 md:ml-auto md:mr-0">
                      <p className="text-sm text-slate-600 italic">
                        "The creative concepts Brand Konnects developed exceeded our expectations and perfectly captured
                        our brand essence."
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] z-10">
                    <div className="w-14 h-14 rounded-full bg-maroon-900 text-white flex items-center justify-center font-bold text-xl border-4 border-white">
                      3
                    </div>
                  </div>
                  <div className="md:w-1/2 order-1 md:order-2 md:pl-16 pl-16">
                    <div className="bg-white p-5 rounded-xl shadow-md border border-slate-100">
                      <div className="flex items-center gap-3 mb-3">
                        <PenTool className="text-orange-600" size={24} />
                        <h4 className="font-bold text-lg">Key Activities</h4>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-orange-600 mt-1 flex-shrink-0" />
                          <span className="text-slate-700">Content creation & design</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-orange-600 mt-1 flex-shrink-0" />
                          <span className="text-slate-700">Campaign development</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-orange-600 mt-1 flex-shrink-0" />
                          <span className="text-slate-700">Event planning & coordination</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="process-step relative">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="md:w-1/2 order-2 md:pl-16 pl-16">
                    <h3 className="text-2xl font-bold mb-3 text-maroon-900">Implementation & Launch</h3>
                    <p className="text-slate-600 mb-4">
                      We meticulously execute the approved strategy and creative concepts, managing all aspects of
                      implementation to ensure flawless delivery across all channels.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                      <p className="text-sm text-slate-600 italic">
                        "The execution was seamless. Every detail was handled professionally, allowing us to focus on
                        our core business."
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] z-10">
                    <div className="w-14 h-14 rounded-full bg-maroon-900 text-white flex items-center justify-center font-bold text-xl border-4 border-white">
                      4
                    </div>
                  </div>
                  <div className="md:w-1/2 md:text-right order-1 md:order-1 pt-2 md:pt-0">
                    <div className="bg-white p-5 rounded-xl shadow-md border border-slate-100 md:ml-auto">
                      <div className="flex items-center gap-3 mb-3 md:justify-end">
                        <h4 className="font-bold text-lg">Key Activities</h4>
                        <Zap className="text-orange-600" size={24} />
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 md:justify-end">
                          <span className="text-slate-700">Campaign deployment</span>
                          <CheckCircle size={16} className="text-orange-600 mt-1 flex-shrink-0" />
                        </li>
                        <li className="flex items-start gap-2 md:justify-end">
                          <span className="text-slate-700">Event execution & management</span>
                          <CheckCircle size={16} className="text-orange-600 mt-1 flex-shrink-0" />
                        </li>
                        <li className="flex items-start gap-2 md:justify-end">
                          <span className="text-slate-700">Quality control & monitoring</span>
                          <CheckCircle size={16} className="text-orange-600 mt-1 flex-shrink-0" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="process-step relative">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="md:w-1/2 md:text-right order-2 md:order-1 pt-2 md:pt-0">
                    <h3 className="text-2xl font-bold mb-3 text-maroon-900">Measurement & Optimization</h3>
                    <p className="text-slate-600 mb-4">
                      We track performance against key metrics, analyze results, and make data-driven adjustments to
                      optimize outcomes and maximize ROI.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-slate-200 md:ml-auto md:mr-0">
                      <p className="text-sm text-slate-600 italic">
                        "The detailed analytics and insights provided helped us understand our campaign's impact and
                        informed future strategies."
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] z-10">
                    <div className="w-14 h-14 rounded-full bg-maroon-900 text-white flex items-center justify-center font-bold text-xl border-4 border-white">
                      5
                    </div>
                  </div>
                  <div className="md:w-1/2 order-1 md:order-2 md:pl-16 pl-16">
                    <div className="bg-white p-5 rounded-xl shadow-md border border-slate-100">
                      <div className="flex items-center gap-3 mb-3">
                        <BarChart className="text-orange-600" size={24} />
                        <h4 className="font-bold text-lg">Key Activities</h4>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-orange-600 mt-1 flex-shrink-0" />
                          <span className="text-slate-700">Performance tracking & analysis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-orange-600 mt-1 flex-shrink-0" />
                          <span className="text-slate-700">Reporting & insights generation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-orange-600 mt-1 flex-shrink-0" />
                          <span className="text-slate-700">Strategy refinement & optimization</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-maroon-100 text-maroon-900 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Client Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">What Our Clients Say</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with Brand Konnects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="testimonial-card bg-slate-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center mb-6">
                <Image
                  src="/images/p15.jpg"
                  alt="Client"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Sarah Thompson</h4>
                  <p className="text-slate-600 text-sm">Marketing Director, TechCorp</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                "Brand Konnects transformed our marketing strategy and helped us connect with our audience in ways we
                never thought possible. Their team's creativity and strategic thinking are unmatched."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>

            <div className="testimonial-card bg-slate-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center mb-6">
                <Image  
                  src="/images/p16.jpg"
                  alt="Client"
                  width={60}
                  height={60}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Michael Rodriguez</h4>
                  <p className="text-slate-600 text-sm">CEO, Innovate Solutions</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                "The product launch event organized by Brand Konnects exceeded all expectations. Their attention to
                detail and ability to create a memorable experience for our guests was impressive."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>

            <div className="testimonial-card bg-slate-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center mb-6">
                <Image
                  src="/images/p17.jpg"
                  alt="Client"
                  width={60}
                  height={60}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Jennifer Lee</h4>
                  <p className="text-slate-600 text-sm">Brand Manager, Lifestyle Brands</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                "Working with Brand Konnects on our rebranding was a game-changer. Their strategic approach and creative
                execution helped us establish a stronger market position."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-maroon-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Brand?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-maroon-100">
            Let's discuss how our services can help you achieve your marketing and event goals.
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
