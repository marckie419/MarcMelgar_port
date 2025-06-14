"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, MapPin, Phone, Download } from "lucide-react"
import { jsPDF } from "jspdf"
import { useState } from "react"

export default function Component() {
  const skills = {
    "Programming Languages": [
      { name: "Python", color: "bg-blue-600" },
      { name: "SQL", color: "bg-blue-600" },
      { name: "JavaScript", color: "bg-blue-600" },
      { name: "HTML/CSS", color: "bg-blue-600" },
    ],
    "Creative Software": [
      { name: "Adobe Photoshop", color: "bg-green-600" },
      { name: "Adobe Illustrator", color: "bg-green-600" },
      { name: "Adobe Premiere Pro", color: "bg-green-600" },
      { name: "Adobe After Effects", color: "bg-green-600" },
      { name: "Figma", color: "bg-green-600" },
    ],
    "Office & Productivity": [
      { name: "Microsoft Word", color: "bg-purple-600" },
      { name: "Microsoft Excel", color: "bg-purple-600" },
      { name: "Microsoft PowerPoint", color: "bg-purple-600" },
      { name: "Google Workspace", color: "bg-purple-600" },
      { name: "Notion", color: "bg-purple-600" },
    ],
    "Hardware & Engineering": [
      { name: "Circuit Design", color: "bg-indigo-600" },
      { name: "Sensor Integration", color: "bg-indigo-600" },
      { name: "Arduino/Raspberry Pi", color: "bg-indigo-600" },
      { name: "3D Modeling", color: "bg-indigo-600" },
      { name: "PCB Design", color: "bg-indigo-600" },
    ],
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const downloadPDFResume = () => {
    const doc = new jsPDF()

    // Set up colors
    const primaryColor = [41, 128, 185] // Blue
    const secondaryColor = [52, 73, 94] // Dark gray
    const textColor = [44, 62, 80] // Darker gray

    // Header Section
    doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2])
    doc.rect(0, 0, 210, 45, "F")

    // Name
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(24)
    doc.setFont(undefined, "bold")
    doc.text("MARC MELGAR", 105, 20, { align: "center" })

    // Title
    doc.setFontSize(14)
    doc.setFont(undefined, "normal")
    doc.text("COMPUTER ENGINEER", 105, 30, { align: "center" })

    // Contact Info
    doc.setFontSize(10)
    doc.text(
      "📞 09382502648  |  ✉ marcmelgar419@gmail.com  |  🌐 marc-melgar.framer.website  |  📍 Nueva Ecija",
      105,
      38,
      { align: "center" },
    )

    let yPos = 55
    doc.setTextColor(textColor[0], textColor[1], textColor[2])

    // Professional Summary Section
    doc.setFontSize(14)
    doc.setFont(undefined, "bold")
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2])
    doc.text("PROFESSIONAL SUMMARY", 20, yPos)

    // Add underline
    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2])
    doc.setLineWidth(0.5)
    doc.line(20, yPos + 2, 190, yPos + 2)

    yPos += 10
    doc.setTextColor(textColor[0], textColor[1], textColor[2])
    doc.setFontSize(10)
    doc.setFont(undefined, "normal")

    const summary =
      "A data-driven Computer Engineer with a strong foundation in software development and systems integration, I specialize in crafting scalable, real-world solutions across embedded systems, data pipelines, and intelligent automation. My experience spans device-level integration to high-level application logic, combining hardware insight with a passion for building software that delivers measurable impact."
    const summaryLines = doc.splitTextToSize(summary, 170)
    doc.text(summaryLines, 20, yPos)
    yPos += summaryLines.length * 4 + 10

    // Area of Expertise Section
    doc.setFontSize(14)
    doc.setFont(undefined, "bold")
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2])
    doc.text("AREA OF EXPERTISE", 20, yPos)
    doc.line(20, yPos + 2, 190, yPos + 2)
    yPos += 10

    doc.setTextColor(textColor[0], textColor[1], textColor[2])
    doc.setFontSize(10)
    doc.setFont(undefined, "normal")

    const expertise = [
      "• Database Design & Querying",
      "• Automation & Scripting",
      "• Data-Centric System Design",
      "• Version Control (Git)",
      "• Software Development & Debugging",
      "• API Development & Integration",
    ]

    // Split into two columns
    const leftColumn = expertise.slice(0, 3)
    const rightColumn = expertise.slice(3)

    leftColumn.forEach((item, index) => {
      doc.text(item, 20, yPos + index * 5)
    })

    rightColumn.forEach((item, index) => {
      doc.text(item, 110, yPos + index * 5)
    })

    yPos += 20

    // Key Achievements Section
    doc.setFontSize(14)
    doc.setFont(undefined, "bold")
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2])
    doc.text("KEY ACHIEVEMENTS", 20, yPos)
    doc.line(20, yPos + 2, 190, yPos + 2)
    yPos += 10

    doc.setTextColor(textColor[0], textColor[1], textColor[2])
    doc.setFontSize(10)
    doc.setFont(undefined, "normal")

    const achievements = [
      {
        title: "Software-Driven System Design:",
        description:
          "Developed a full-stack hardware monitoring solution by integrating sensor-based embedded systems with real-time dashboards, utilizing C and Python for efficient data handling and control logic.",
      },
      {
        title: "Academic Excellence:",
        description:
          "Earned multiple recognitions for hardware-focused capstone projects, demonstrating proficiency in modular architecture, maintainability, and practical application of engineering principles.",
      },
      {
        title: "Industry-Level Certification:",
        description:
          "Successfully qualified and currently participating in the Level 3 Training Program with VITRO/ePLDT, reflecting advanced competency in hardware systems, data center operations, and infrastructure readiness.",
      },
      {
        title: "BOTE Project:",
        description:
          "Developed a prototype Reverse Vending Machine (RVM) that accepts plastic bottles and metal cans, dispensing monetary rewards to promote recycling and encourage responsible waste disposal behavior.",
      },
    ]

    achievements.forEach((achievement) => {
      doc.setFont(undefined, "bold")
      doc.text(achievement.title, 20, yPos)
      doc.setFont(undefined, "normal")
      const descLines = doc.splitTextToSize(achievement.description, 170)
      doc.text(descLines, 20, yPos + 4)
      yPos += descLines.length * 4 + 8
    })

    // Check if we need a new page
    if (yPos > 250) {
      doc.addPage()
      yPos = 20
    }

    // Professional Experience Section
    doc.setFontSize(14)
    doc.setFont(undefined, "bold")
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2])
    doc.text("PROFESSIONAL EXPERIENCE", 20, yPos)
    doc.line(20, yPos + 2, 190, yPos + 2)
    yPos += 10

    doc.setTextColor(textColor[0], textColor[1], textColor[2])
    doc.setFontSize(12)
    doc.setFont(undefined, "bold")
    doc.text("Internship | VERYFY GLOBAL Inc", 20, yPos)

    doc.setFontSize(10)
    doc.setFont(undefined, "italic")
    doc.text("May 2024 - August 2024", 150, yPos)
    yPos += 8

    doc.setFont(undefined, "normal")
    const experience =
      "Led full-stack development, managing front-end, back-end, and database tasks. Supervised API integration and team workflow. Acquired hands-on skills in full-stack web development and API-driven architecture, contributing to the successful launch of multiple projects."
    const expLines = doc.splitTextToSize(experience, 170)
    doc.text(expLines, 20, yPos)
    yPos += expLines.length * 4 + 15

    // Education Section
    doc.setFontSize(14)
    doc.setFont(undefined, "bold")
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2])
    doc.text("EDUCATION", 20, yPos)
    doc.line(20, yPos + 2, 190, yPos + 2)
    yPos += 10

    doc.setTextColor(textColor[0], textColor[1], textColor[2])
    doc.setFontSize(12)
    doc.setFont(undefined, "bold")
    doc.text("Bachelor of Science in Computer Engineering", 20, yPos)

    doc.setFontSize(10)
    doc.setFont(undefined, "italic")
    doc.text("Aug 2021 - July 2025", 150, yPos)
    yPos += 6

    doc.setFont(undefined, "normal")
    doc.text("Wesleyan University - Philippines", 20, yPos)
    yPos += 6

    const education =
      "Graduated with Academic Commendation, demonstrating excellence in embedded systems, circuit design, and software development."
    const eduLines = doc.splitTextToSize(education, 170)
    doc.text(eduLines, 20, yPos)
    yPos += eduLines.length * 4 + 15

    // Additional Information Section
    doc.setFontSize(14)
    doc.setFont(undefined, "bold")
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2])
    doc.text("ADDITIONAL INFORMATION", 20, yPos)
    doc.line(20, yPos + 2, 190, yPos + 2)
    yPos += 10

    doc.setTextColor(textColor[0], textColor[1], textColor[2])
    doc.setFontSize(10)
    doc.setFont(undefined, "normal")

    const additionalInfo = [
      {
        category: "Programming Languages:",
        content: "Python, C/C++, JavaScript, HTML/CSS, SQL, React",
      },
      {
        category: "Certifications:",
        content: "Certified Data Center Technician (CDCT), Data Analytics Essentials, AI Fundamentals",
      },
      {
        category: "Technical Skills:",
        content:
          "Full-Stack Web Development, Linux System Administration, Bash Scripting, API Integration, Embedded Systems Development, Microcontroller Programming (Arduino), Circuit Design & Simulation, Hardware-Software Integration, Version Control (Git)",
      },
      {
        category: "Soft Skills:",
        content: "Team Leadership, Project Coordination, Analytical Thinking, Effective Communication",
      },
      {
        category: "Awards/Activities:",
        content:
          "CECT Local Council Vice-Governor (2023–2024), ICpEP.se Vice-Governor (2023–2024), The Stocks Senior Editor (2023–2024), ICpEP.se Member (2021–2025)",
      },
    ]

    additionalInfo.forEach((info) => {
      doc.setFont(undefined, "bold")
      doc.text(info.category, 20, yPos)
      doc.setFont(undefined, "normal")
      const contentLines = doc.splitTextToSize(info.content, 160)
      doc.text(contentLines, 20, yPos + 4)
      yPos += contentLines.length * 4 + 8
    })

    // Save the PDF
    doc.save("Marc_Melgar_Resume.pdf")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          to: "marcmelgar419@gmail.com",
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Profile Section */}
          <div className="lg:col-span-2 space-y-6 lg:sticky lg:top-8 lg:h-screen lg:overflow-y-auto">
            <div className="space-y-6">
              <div className="text-left space-y-4">
                <div className="relative mr-auto h-52 w-52">
                  <Image src="/profile1.jpg" alt="Marc Melgar" fill className="rounded-full object-cover" />
                </div>

                <div className="space-y-2">
                  <h1 className="font-bold text-5xl">Marc Melgar</h1>
                  <p className="text-gray-400">Computer Engineer</p>

                  <div className="flex items-center gap-2 text-sm text-gray-400 justify-start">
                    <MapPin className="w-4 h-4" />
                    <span>Philippines</span>
                    <span className="text-lg">🇵🇭</span>
                  </div>
                </div>

                <div className="inline-block px-3 py-1 bg-green-600 text-white text-sm rounded-full">Available</div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  Computer Engineering with a focus on development, web design, and leadership.
                </p>

                <div className="flex justify-start gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-gray-600 text-white hover:bg-gray-700 hover:border-blue-500 transition-colors"
                    onClick={() => {
                      window.open("/api/download-pdf", "_blank")
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-gray-700"
                    onClick={() => window.open("https://www.facebook.com/marc.melgar.92", "_blank")}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-gray-700"
                    onClick={() => window.open("https://www.linkedin.com/in/marc-melgar-88653b310", "_blank")}
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Want to Work Together?</h3>
                <Button
                  className="w-full bg-gray-700 hover:bg-gray-600"
                  onClick={() => {
                    const connectSection = document.getElementById("connect-section")
                    if (connectSection) {
                      connectSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="lg:col-span-3 space-y-8">
            {/* About Me */}
            <section>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hi, I'm a Computer Engineer passionate about building smart, connected systems. I've developed
                  sensor-based hardware, automated tasks with Python, and built API-powered dashboards. Backed by
                  certifications in AI, data analytics, and data center technologies, I create scalable, data-driven
                  solutions that bridge hardware and software.
                </p>
                <p>
                  My expertise spans from low-level hardware integration to high-level software development, allowing me
                  to create comprehensive solutions that optimize both performance and user experience. I'm particularly
                  interested in IoT systems, data analytics, and automation technologies that can make a real-world
                  impact.
                </p>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="text-xl font-semibold mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill.name} className={`${skill.color} text-white hover:opacity-80 px-3 py-1`}>
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Professional Experience */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Professional Experience</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-gray-700 pl-6 space-y-6">
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-xl font-semibold">Intern (OJT)</h3>
                      <span className="text-sm text-gray-400">May 2024 - August 2024</span>
                    </div>
                    <p className="text-gray-400">VERYFY</p>
                    <p className="text-gray-300 leading-relaxed">
                      This internship allowed me to merge creativity with functionality—transforming design concepts
                      into responsive web applications—and provided valuable experience in managing real-world
                      development workflows.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-600 text-white">Web Development</Badge>
                      <Badge className="bg-green-600 text-white">Responsive Design</Badge>
                      <Badge className="bg-purple-600 text-white">UI/UX Implementation</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Projects */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
              <div className="grid gap-6">
                <div className="bg-gray-800 rounded-lg p-6 space-y-4">
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image src="/bote-project.png" alt="BOTE Project Team" fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold">BOTE: Bin Optimizer for Trash and Ecology</h3>
                  <p className="text-gray-300">
                    Developed "BOTE" (Bin Optimizer for Trash and Ecology), a prototype Reverse Vending Machine that
                    encourages recycling by accepting plastic bottles and metal cans in exchange for coins. Using Rapid
                    Application Development, the system integrates sensors, a crushing mechanism, and a coin dispenser
                    to automate sorting and volume reduction. Designed to boost recycling participation and
                    environmental awareness, the project received high marks for functionality and reliability from both
                    users and experts.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-600 text-white">Hardware Integration</Badge>
                    <Badge className="bg-green-600 text-white">Sensor Technology</Badge>
                    <Badge className="bg-red-600 text-white">Automation</Badge>
                    <Badge className="bg-purple-600 text-white">Environmental Tech</Badge>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent border-gray-600 text-white hover:bg-gray-700"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Certifications</h2>
              <div className="grid md:grid-cols-1 gap-6">
                <div className="bg-gray-800 rounded-lg p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 relative">
                      <Image
                        src="/ai-fundamentals-badge.png"
                        alt="AI Fundamentals Badge"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm text-gray-400">June 2025</span>
                  </div>
                  <h3 className="text-xl font-semibold">AI Fundamentals with IBM SkillsBuild</h3>
                  <p className="text-gray-400">Cisco</p>
                  <p className="text-gray-300">
                    Successfully completed the AI Fundamentals course and achieved student level credentials.
                    Demonstrates knowledge of basic artificial intelligence concepts, natural language processing,
                    computer vision, deep learning, and AI ethics.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-600 text-white">Artificial Intelligence</Badge>
                    <Badge className="bg-green-600 text-white">Machine Learning</Badge>
                    <Badge className="bg-purple-600 text-white">AI Ethics</Badge>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-gray-600 text-white hover:bg-gray-700"
                    onClick={() =>
                      window.open(
                        "https://www.credly.com/badges/c2bb9ed3-50ed-4576-9f6a-a96f8348182f/linked_in_profile",
                        "_blank",
                      )
                    }
                  >
                    View Certificate
                  </Button>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 relative">
                      <Image
                        src="/data-center-badge.png"
                        alt="Data Center Technician Badge"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm text-gray-400">November 2024</span>
                  </div>
                  <h3 className="text-xl font-semibold">Certified Data Center Technician (CDCT)</h3>
                  <p className="text-gray-400">East West International Educational Specialists, Inc</p>
                  <p className="text-gray-300">
                    Foundational course covering datacenter operations, architecture, basic networking, power and
                    cooling systems, and introduction to cloud computing. Provides groundwork for data center management
                    career.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-600 text-white">Data Center Operations</Badge>
                    <Badge className="bg-green-600 text-white">Networking</Badge>
                    <Badge className="bg-red-600 text-white">Infrastructure</Badge>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-gray-600 text-white hover:bg-gray-700"
                    onClick={() =>
                      window.open(
                        "https://www.credly.com/badges/4f588a1b-8c7f-4c7a-9aaf-5e7d7543fab9/linked_in_profile",
                        "_blank",
                      )
                    }
                  >
                    View Certificate
                  </Button>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 relative">
                      <Image
                        src="/data-analytics-badge.png"
                        alt="Data Analytics Essentials Badge"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm text-gray-400">September 2024</span>
                  </div>
                  <h3 className="text-xl font-semibold">Data Analytics Essentials</h3>
                  <p className="text-gray-400">Cisco</p>
                  <p className="text-gray-300">
                    Comprehensive understanding of data analytics process, data characteristics, transformation
                    techniques, and analysis using statistical methods. Completed hands-on activities using Excel, SQL,
                    Tableau and other tools.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-600 text-white">Data Analytics</Badge>
                    <Badge className="bg-green-600 text-white">SQL</Badge>
                    <Badge className="bg-yellow-600 text-white">Tableau</Badge>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-gray-600 text-white hover:bg-gray-700"
                    onClick={() =>
                      window.open(
                        "https://www.credly.com/badges/4f2190d3-1574-4c62-9c9e-98979f697bb0/linked_in_profile",
                        "_blank",
                      )
                    }
                  >
                    View Certificate
                  </Button>
                </div>
              </div>

              <div className="text-center mt-6">
                <a
                  href="https://www.linkedin.com/in/marc-melgar-88653b310/details/certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  View More Certifications →
                </a>
              </div>
            </section>

            {/* Contact */}
            <section id="connect-section">
              <h2 className="text-3xl font-bold mb-6">Connect With Me</h2>
              <div className="bg-gray-800 rounded-lg p-6 space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Feel free to reach out to me via email or phone. You can also connect with me on LinkedIn. I'm always
                  interested in discussing new opportunities and exciting projects.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-300">marcmelgar419@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-300">+63 938 250 2648</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Linkedin className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-300">linkedin.com/in/marc-melgar-88653b310</span>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-transparent border-gray-600 text-white hover:bg-gray-700"
                        onClick={() => window.open("https://www.facebook.com/marc.melgar.92", "_blank")}
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        Facebook
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-transparent border-gray-600 text-white hover:bg-gray-700"
                        onClick={() => window.open("https://www.linkedin.com/in/marc-melgar-88653b310", "_blank")}
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Quick Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        required
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
                      />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your Message"
                        rows={4}
                        required
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 resize-none"
                      />
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                      {submitStatus === "success" && (
                        <p className="text-green-400 text-sm">Message sent successfully!</p>
                      )}
                      {submitStatus === "error" && (
                        <p className="text-red-400 text-sm">Failed to send message. Please try again.</p>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
