"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  Container,
  Paper,
  Alert,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material"
import SendIcon from "@mui/icons-material/Send"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Create a custom theme with brand colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#510A1C", // maroon-900
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FC6F1F", // orange-600
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      lineHeight: 1.2,
      fontSize: "3rem",
      "@media (max-width:600px)": {
        fontSize: "2.2rem",
      },
    },
    h2: {
      fontWeight: 700,
      lineHeight: 1.3,
      fontSize: "2.5rem",
      "@media (max-width:600px)": {
        fontSize: "1.8rem",
      },
    },
    h3: {
      fontWeight: 600,
      lineHeight: 1.4,
      fontSize: "2rem",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h5: {
      fontSize: "1.25rem",
      "@media (max-width:600px)": {
        fontSize: "1.1rem",
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
          padding: "12px 24px",
          fontWeight: 600,
          transition: "all 0.3s ease",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            transform: "translateY(-2px)",
          },
          "@media (max-width:600px)": {
            padding: "10px 16px",
            fontSize: "0.9rem",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            "& fieldset": {
              borderColor: "#E5E7EB",
              borderWidth: "2px",
            },
            "&:hover fieldset": {
              borderColor: "#FC6F1F",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FC6F1F",
              boxShadow: "0 0 0 3px rgba(252, 111, 31, 0.2)",
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
          },
        },
      },
    },
  },
})

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormStatus {
  submitted: boolean
  error: boolean
  message: string
}

export default function Contact() {
  const formRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    error: false,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Simulate form submission
      setFormStatus({
        submitted: true,
        error: false,
        message: "Thank you for your message! We'll get back to you soon.",
      })

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "There was an error submitting the form. Please try again.",
      })
    }
  }

  useEffect(() => {
    // Hero section animation
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    })

    // Form animation
    gsap.from(formRef.current, {
      opacity: 0,
      x: isMobile ? 0 : -50,
      y: isMobile ? 30 : 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })

    // Info animation
    gsap.from(infoRef.current, {
      opacity: 0,
      x: isMobile ? 0 : 50,
      y: isMobile ? 30 : 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: infoRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })

    // Contact info items animation
    gsap.from(".contact-info-item", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      delay: 0.4,
      scrollTrigger: {
        trigger: ".contact-info-item",
        start: "top 90%",
        toggleActions: "play none none none",
      },
    })

    // CTA section animation
    gsap.from(ctaRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })

    // Floating animation for contact icons
    gsap.to(".floating-icon", {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })
  }, [isMobile])

  return (
    <ThemeProvider theme={theme}>
      <main className="min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <Box 
          ref={heroRef}
          sx={{ 
            bgcolor: "#F9FAFB", 
            py: { xs: 6, md: 12 },
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              right: 0,
              width: { xs: "100%", md: "40%" },
              height: "100%",
              background: "radial-gradient(circle, rgba(252,111,31,0.1) 0%, rgba(252,111,31,0) 70%)",
              zIndex: 0,
            }
          }}
        >
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <Box sx={{ 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center",
              textAlign: "center",
            }}>
              <MessageCircle size={isMobile ? 48 : 64} color="#FC6F1F" className="floating-icon" />
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: "2.2rem", sm: "2.5rem", md: "3.75rem" },
                  color: "#510A1C",
                  background: "linear-gradient(to right, #510A1C, #FC6F1F)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  maxWidth: "800px",
                  px: { xs: 2, md: 0 },
                }}
              >
                Let's Connect and Create Something Amazing
              </Typography>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  maxWidth: 700,
                  mx: "auto",
                  color: "text.secondary",
                  mb: 6,
                  px: { xs: 2, md: 0 },
                }}
              >
                Whether you have a question about our services, want to discuss a project, or just say hello—we're here to help!
              </Typography>
              <Button
                component="a"
                href="#contact-form"
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  px: 6,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                }}
              >
                Send Us a Message
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Contact Form Section */}
        <Container 
          id="contact-form"
          maxWidth="lg" 
          sx={{ 
            py: { xs: 6, md: 12 },
            position: "relative",
          }}
        >
          {/* Decorative elements */}
          <Box sx={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 300,
            height: 300,
            borderRadius: "50%",
            bgcolor: "rgba(252, 111, 31, 0.05)",
            zIndex: 0,
            display: { xs: "none", md: "block" },
          }} />
          
          <Grid container spacing={{ xs: 4, md: 6 }} position="relative" zIndex={1}>
            {/* Contact Form */}
            <Grid item xs={12} md={6}>
              <Paper
                ref={formRef}
                elevation={0}
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: "16px",
                  border: "1px solid #E5E7EB",
                  background: "white",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <Box sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: 2,
                  mb: 4,
                }}>
                  <Box sx={{
                    width: { xs: 50, md: 60 },
                    height: { xs: 50, md: 60 },
                    borderRadius: "12px",
                    bgcolor: "rgba(252, 111, 31, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <SendIcon fontSize={isMobile ? "medium" : "large"} color="secondary" />
                  </Box>
                  <Typography
                    variant="h3"
                    component="h2"
                    sx={{ 
                      fontWeight: 700,
                      color: "#510A1C",
                    }}
                  >
                    Send Us a Message
                  </Typography>
                </Box>

                {formStatus.submitted && (
                  <Alert
                    severity={formStatus.error ? "error" : "success"}
                    sx={{ mb: 3 }}
                  >
                    {formStatus.message}
                  </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Your Name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email Address"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        type="email"
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="phone"
                        name="phone"
                        label="Phone Number"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                        type="tel"
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="subject"
                        name="subject"
                        label="Subject"
                        placeholder="Inquiry about services"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="message"
                        name="message"
                        label="Your Message"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        multiline
                        rows={isMobile ? 4 : 6}
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{ 
                      mt: 4,
                      width: "100%",
                      py: 2,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Paper>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} md={6}>
              <Box ref={infoRef}>
                <Box sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: 2,
                  mb: 4,
                }}>
                  <Box sx={{
                    width: { xs: 50, md: 60 },
                    height: { xs: 50, md: 60 },
                    borderRadius: "12px",
                    bgcolor: "rgba(81, 10, 28, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <MapPin size={isMobile ? 24 : 32} color="#510A1C" />
                  </Box>
                  <Typography
                    variant="h3"
                    component="h2"
                    sx={{ 
                      fontWeight: 700,
                      color: "#510A1C",
                    }}
                  >
                    Contact Information
                  </Typography>
                </Box>
                
                <Typography
                  variant="body1"
                  sx={{ 
                    color: "text.secondary", 
                    mb: 5, 
                    lineHeight: 1.7,
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  Have questions or want to discuss a project? Reach out through any of these channels and our team will be happy to assist you.
                </Typography>

                <Box sx={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: 3, 
                  mb: 5,
                }}>
                  <Box 
                    className="contact-info-item"
                    sx={{ 
                      display: "flex", 
                      gap: 3,
                      p: { xs: 2, md: 3 },
                      borderRadius: "12px",
                      bgcolor: "rgba(249, 250, 251, 0.7)",
                      border: "1px solid #E5E7EB",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 50, md: 60 },
                        height: { xs: 50, md: 60 },
                        borderRadius: "12px",
                        bgcolor: "rgba(252, 111, 31, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <MapPin size={isMobile ? 22 : 28} color="#FC6F1F" className="floating-icon" />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: "#510A1C" }}>
                        Our Location
                      </Typography>
                      <Typography variant="body1" sx={{ color: "text.secondary", fontSize: { xs: "0.9rem", md: "1rem" } }}>
                      Brand Konnects Shop No. 2 Gaurav Residency phase 2 Near RBK school
                      </Typography>
                    </Box>
                  </Box>

                  <Box 
                    className="contact-info-item"
                    sx={{ 
                      display: "flex", 
                      gap: 3,
                      p: { xs: 2, md: 3 },
                      borderRadius: "12px",
                      bgcolor: "rgba(249, 250, 251, 0.7)",
                      border: "1px solid #E5E7EB",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 50, md: 60 },
                        height: { xs: 50, md: 60 },
                        borderRadius: "12px",
                        bgcolor: "rgba(252, 111, 31, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Mail size={isMobile ? 22 : 28} color="#FC6F1F" className="floating-icon" />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: "#510A1C" }}>
                        Email Us
                      </Typography>
                      <Typography variant="body1" sx={{ color: "text.secondary", fontSize: { xs: "0.9rem", md: "1rem" } }}>
                      konnect@brandkonnects.com
                        {/* <br />
                        support@brandkonnects.com */}
                      </Typography>
                    </Box>
                  </Box>

                  <Box 
                    className="contact-info-item"
                    sx={{ 
                      display: "flex", 
                      gap: 3,
                      p: { xs: 2, md: 3 },
                      borderRadius: "12px",
                      bgcolor: "rgba(249, 250, 251, 0.7)",
                      border: "1px solid #E5E7EB",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 50, md: 60 },
                        height: { xs: 50, md: 60 },
                        borderRadius: "12px",
                        bgcolor: "rgba(252, 111, 31, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Phone size={isMobile ? 22 : 28} color="#FC6F1F" className="floating-icon" />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: "#510A1C" }}>
                        Call Us
                      </Typography>
                      <Typography variant="body1" sx={{ color: "text.secondary", fontSize: { xs: "0.9rem", md: "1rem" } }}>
                      +91 9769355135
                        {/* <br />
                        Mon-Fri, 9am-6pm EST */}
                      </Typography>
                    </Box>
                  </Box>

                  <Box 
                    className="contact-info-item"
                    sx={{ 
                      display: "flex", 
                      gap: 3,
                      p: { xs: 2, md: 3 },
                      borderRadius: "12px",
                      bgcolor: "rgba(249, 250, 251, 0.7)",
                      border: "1px solid #E5E7EB",
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 50, md: 60 },
                        height: { xs: 50, md: 60 },
                        borderRadius: "12px",
                        bgcolor: "rgba(252, 111, 31, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Clock size={isMobile ? 22 : 28} color="#FC6F1F" className="floating-icon" />
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: "#510A1C" }}>
                        Business Hours
                      </Typography>
                      <Typography variant="body1" sx={{ color: "text.secondary", fontSize: { xs: "0.9rem", md: "1rem" } }}>
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 2:00 PM
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Paper
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: "16px",
                    bgcolor: "rgba(252, 111, 31, 0.05)",
                    border: "1px solid rgba(252, 111, 31, 0.1)",
                    boxShadow: "0 4px 6px -1px rgba(252, 111, 31, 0.1), 0 2px 4px -1px rgba(252, 111, 31, 0.06)",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: "#510A1C" }}>
                    Join Our Team
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, fontSize: { xs: "0.9rem", md: "1rem" } }}>
                    We're always looking for talented individuals to join our growing team. Check out our current openings.
                  </Typography>
                  <Button
                    component={Link}
                    href="/careers"
                    variant="outlined"
                    color="secondary"
                    size="large"
                    endIcon={<ArrowRight size={20} />}
                    sx={{
                      width: "100%",
                      borderWidth: "2px",
                      "&:hover": {
                        borderWidth: "2px",
                      },
                    }}
                  >
                    View Open Positions
                  </Button>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Map Section */}
        <Box sx={{ 
          py: { xs: 4, md: 10 },
          bgcolor: "white", 
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}>
          <Container maxWidth="lg">
            <Box sx={{ 
              display: "flex", 
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              mb: { xs: 3, md: 6 },
            }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{ 
                  fontWeight: 700, 
                  mb: 2, 
                  color: "#510A1C",
                  position: "relative",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "80px",
                    height: "4px",
                    bgcolor: "#FC6F1F",
                    borderRadius: "2px",
                  }
                }}
              >
                Visit Our Office
              </Typography>
              <Typography
                variant="h6"
                sx={{ 
                  maxWidth: 600,
                  color: "text.secondary",
                  px: { xs: 2, md: 0 },
                }}
              >
                Come see us in person at our headquarters in New York City
              </Typography>
            </Box>
            <Box
              sx={{
                height: { xs: 300, sm: 400, md: 500 },
                width: "100%",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #E5E7EB",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                position: "relative",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179329!2d-73.98784492423988!3d40.74844097138962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1713457264253!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <Box sx={{
                position: "absolute",
                bottom: 20,
                left: "50%",
                transform: "translateX(-50%)",
                bgcolor: "white",
                px: { xs: 2, md: 3 },
                py: { xs: 1, md: 2 },
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                gap: 1,
                maxWidth: { xs: "90%", md: "auto" },
              }}>
                <MapPin size={isMobile ? 16 : 20} color="#FC6F1F" />
                <Typography variant="body2" fontWeight={600} sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}>
                  123 Business Avenue, New York, NY 10001
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box 
          ref={ctaRef}
          sx={{ 
            py: { xs: 8, md: 12 },
            bgcolor: "#510A1C",
            color: "white",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "radial-gradient(circle at center, rgba(252,111,31,0.2) 0%, rgba(81,10,28,1) 70%)",
              zIndex: 0,
            }
          }}
        >
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <Box sx={{ 
              display: "flex", 
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{ 
                  fontWeight: 800, 
                  mb: 3,
                  fontSize: { xs: "2rem", sm: "2.25rem", md: "3rem" },
                  color: "white",
                  px: { xs: 2, md: 0 },
                }}
              >
                Ready to Elevate Your Brand?
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  maxWidth: 700,
                  mx: "auto",
                  mb: 6,
                  color: "rgba(255, 255, 255, 0.9)",
                  px: { xs: 2, md: 0 },
                }}
              >
                Let's create something extraordinary together. Schedule a free consultation with our experts today.
              </Typography>
              <Box sx={{ 
                display: "flex", 
                gap: 3,
                flexDirection: { xs: "column", sm: "row" },
                width: { xs: "100%", sm: "auto" },
                px: { xs: 2, sm: 0 },
              }}>
                <Button
                  component={Link}
                  href="/consultation"
                  variant="contained"
                  color="secondary"
                  size="large"
                  endIcon={<ArrowRight size={20} />}
                  sx={{
                    px: 6,
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  Book a Consultation
                </Button>
                <Button
                  component={Link}
                  href="/services"
                  variant="outlined"
                  color="inherit"
                  size="large"
                  sx={{
                    px: 6,
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    borderWidth: "2px",
                    "&:hover": {
                      borderWidth: "2px",
                      bgcolor: "rgba(255, 255, 255, 0.1)",
                    },
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  Explore Services
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>

        <Footer />
      </main>
    </ThemeProvider>
  )
}