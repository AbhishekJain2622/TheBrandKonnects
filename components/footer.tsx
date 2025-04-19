import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/Logo.png"
                alt="Brand Konnects Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-slate-400 mb-6">
              Innovative marketing solutions and unforgettable events that drive results for your brand.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/people/Brand-Konnects/61575534807267/" className="text-slate-400 hover:text-orange-600 transition-colors">
                <FacebookIcon fontSize="medium" />
                <span className="sr-only">Facebook</span>
              </a>
              {/* <a href="#" className="text-slate-400 hover:text-orange-600 transition-colors">
                <TwitterIcon fontSize="medium" />
                <span className="sr-only">Twitter</span>
              </a> */}
              <a href="https://www.instagram.com/brand.konnects" className="text-slate-400 hover:text-orange-600 transition-colors">
                <InstagramIcon fontSize="medium" />
                <span className="sr-only">Instagram</span>
              </a>
              {/* <a href="#" className="text-slate-400 hover:text-orange-600 transition-colors">
                <LinkedInIcon fontSize="medium" />
                <span className="sr-only">LinkedIn</span>
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-400 hover:text-orange-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-orange-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-orange-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-orange-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/garlley" className="text-slate-400 hover:text-orange-600 transition-colors">
                Garllery
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-orange-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-orange-600 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-slate-400 hover:text-orange-600 transition-colors">
                  Brand Strategy
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-orange-600 transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-orange-600 transition-colors">
                  Event Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-orange-600 transition-colors">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-orange-600 transition-colors">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-orange-600 transition-colors">
                  Corporate Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-orange-600 flex-shrink-0 mt-1" />
                <span className="text-slate-400">
                Brand Konnects Shop No. 2 Gaurav Residency phase 2 Near RBK school
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-orange-600 flex-shrink-0" />
                <span className="text-slate-400">+91 99203 55135</span>
              </li>
              <li className="flex items-center gap-3">
  <Mail size={20} className="text-orange-600 flex-shrink-0" />
  <a
    href="mailto:konnect@brandkonnects.com"
    className="text-slate-400 hover:text-orange-600 transition-colors"
  >
    konnect@brandkonnects.com
  </a>
</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-6 text-center">
          <p className="text-slate-500 text-sm">
            &copy; 2025 Brand Konnects. All rights reserved. | Powered by{" "}
            <a
              href="https://codestudios.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-500 transition-colors"
            >
              CodeStudios
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
