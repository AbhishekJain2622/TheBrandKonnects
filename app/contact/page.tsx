"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react"
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
} from "@mui/material"
import SendIcon from "@mui/icons-material/Send"

// Create a custom theme with brand colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#510A1C", // maroon-900
    },
    secondary: {
      main: "#FC6F1F", // orange-600
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0.375rem", // rounded-md
          textTransform: "none",
          padding: "0.75rem 1.5rem",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "0.375rem",
          },
        },
      },
    },
  },
})

export default function Contact() {
  const formRef = useRef(null)
  const infoRef = useRef(null)
  const recaptchaRef = useRef(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // Get reCAPTCHA token
      // @ts-ignore
      const token = await window.grecaptcha.execute("YOUR_RECAPTCHA_SITE_KEY", { action: "submit" })

      // Here you would normally send the form data along with the token to your backend
      // for verification before processing the form submission

      // For demo purposes, we'll just simulate a successful submission
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
    // Form animation
    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
      },
    )

    // Info animation
    gsap.fromTo(
      infoRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5,
      },
    )

    // Contact info items animation
    gsap.fromTo(
      ".contact-info-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.7,
      },
    )
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <main className="min-h-screen">
        <Navbar />

        {/* Contact Form Section */}
        <Container maxWidth="lg" sx={{ py: 10, mt: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: "bold",
              mb: 6,
              textAlign: "center",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            Contact Us
          </Typography>
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={6}>
              <Paper ref={formRef} elevation={2} sx={{ p: 4, borderRadius: 2 }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: "bold", mb: 3 }}>
                  Send Us a Message
                </Typography>

                {formStatus.submitted && (
                  <Alert severity={formStatus.error ? "error" : "success"} sx={{ mb: 3 }}>
                    {formStatus.message}
                  </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="name"
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="email"
                        name="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        type="email"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="phone"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                        type="tel"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="subject"
                        name="subject"
                        placeholder="Subject *"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="message"
                        name="message"
                        placeholder="Your Message *"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        multiline
                        rows={6}
                      />
                    </Grid>
                  </Grid>

                  <Typography variant="caption" sx={{ display: "block", mt: 2, mb: 3, color: "text.secondary" }}>
                    This site is protected by reCAPTCHA and the Google
                    <Link href="https://policies.google.com/privacy" className="text-orange-600 hover:underline">
                      {" "}
                      Privacy Policy
                    </Link>{" "}
                    and
                    <Link href="https://policies.google.com/terms" className="text-orange-600 hover:underline">
                      {" "}
                      Terms of Service
                    </Link>{" "}
                    apply.
                  </Typography>

                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{ mt: 2 }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Paper>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} md={6}>
              <Box ref={infoRef} sx={{ height: "100%" }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: "bold", mb: 2 }}>
                  Get in Touch
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
                  We'd love to hear from you. Contact us using the information below or fill out the form to send us a
                  message.
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 4 }}>
                  <Box className="contact-info-item" sx={{ display: "flex", gap: 2 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        bgcolor: "rgba(252, 111, 31, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <MapPin size={24} color="#FC6F1F" />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
                        Our Location
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        123 Business Avenue, Suite 500
                        <br />
                        New York, NY 10001
                      </Typography>
                    </Box>
                  </Box>

                  <Box className="contact-info-item" sx={{ display: "flex", gap: 2 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        bgcolor: "rgba(252, 111, 31, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Mail size={24} color="#FC6F1F" />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
                        Email Us
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        info@brandkonnects.com
                        <br />
                        support@brandkonnects.com
                      </Typography>
                    </Box>
                  </Box>

                  <Box className="contact-info-item" sx={{ display: "flex", gap: 2 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        bgcolor: "rgba(252, 111, 31, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Phone size={24} color="#FC6F1F" />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
                        Call Us
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        +1 (555) 123-4567
                        <br />
                        +1 (555) 987-6543
                      </Typography>
                    </Box>
                  </Box>

                  <Box className="contact-info-item" sx={{ display: "flex", gap: 2 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        bgcolor: "rgba(252, 111, 31, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Clock size={24} color="#FC6F1F" />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
                        Business Hours
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Paper sx={{ p: 3, mt: 6, bgcolor: "rgba(0, 0, 0, 0.02)", borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    Looking for a career?
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                    We're always looking for talented individuals to join our team. Send your resume to
                    careers@brandkonnects.com
                  </Typography>
                  <Link
                    href="/about"
                    style={{
                      color: "#FC6F1F",
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      textDecoration: "none",
                    }}
                  >
                    Learn More About Our Company <ArrowRight size={16} />
                  </Link>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Map Section - Full Width */}
        <Box sx={{ py: 6, bgcolor: "rgba(0, 0, 0, 0.02)", width: "100%" }}>
          <Box
            sx={{
              height: 500,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "rgba(0, 0, 0, 0.05)",
            }}
          >
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Interactive Map Would Be Embedded Here
            </Typography>
          </Box>
        </Box>

        {/* CTA Section */}
        <Box sx={{ py: 10, bgcolor: "#510A1C", color: "white" }}>
          <Container maxWidth="lg" sx={{ textAlign: "center" }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: "bold", mb: 2 }}>
              Ready to Get Started?
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: 700, mx: "auto", mb: 4, color: "rgba(255, 255, 255, 0.7)" }}>
              Let's discuss how Brand Konnects can help you achieve your marketing and event goals.
            </Typography>
            <Button
              component={Link}
              href="/services"
              variant="contained"
              color="inherit"
              size="large"
              endIcon={<ArrowRight size={18} />}
              sx={{
                bgcolor: "white",
                color: "#510A1C",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.9)",
                },
              }}
            >
              Explore Our Services
            </Button>
          </Container>
        </Box>

        <Footer />
      </main>
    </ThemeProvider>
  )
}
