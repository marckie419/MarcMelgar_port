"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, MapPin, Phone, Download } from "lucide-react"
import { jsPDF } from "jspdf"
import { useState, useEffect } from "react"

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
    <div className="min-h-screen bg-[#111111] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-5 gap-8 overflow-visible">
          {/* Left Profile Section */}
          <div
            className={`lg:col-span-2 space-y-6 lg:sticky lg:top-8 lg:h-screen lg:overflow-y-auto lg:overflow-x-visible transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="flex flex-col items-start w-full space-y-1 p-3">
              <div className="relative h-52 w-52 mb-2">
                <Image
                  src="/profile1.jpg"
                  alt="Marc Melgar"
                  fill
                  className="rounded-full object-cover shadow-2xl"
                />
              </div>
              <h1 className="font-bold text-5xl text-white mb-0.5 text-left ">Marc Melgar</h1>
              <p className="text-base text-gray-400 mb-0.5 text-left">Computer Engineer</p>
              <div className="flex items-center gap-1 text-gray-400 text-sm mb-0.5">
                <span className="text-gray-400"><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 24 24'><path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0' /></svg></span>
                <span>Philippines</span>
                <span className="text-xs ml-1">PH</span>
              </div>
              <span className="inline-block px-2 py-0.5 bg-green-600 text-white text-xs rounded mb-0.5">Available</span>
              <p className="text-sm text-gray-300 mb-1 text-left">Computer Engineering with a focus on development, web design, and leadership.</p>
              <div className="flex items-center gap-1 mb-1 mt-0.5">
                <Button
                  variant="outline"
                  className="border border-white text-white bg-transparent rounded px-2 py-0.5 text-base h-8 min-w-[90px]"
                  onClick={() => {
                    window.open("/api/download-pdf", "_blank")
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
                <button className="bg-transparent text-gray-300 rounded p-1 flex items-center justify-center" onClick={() => window.open('https://www.facebook.com/marc.melgar.92', '_blank')}><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg></button>
                <button className="bg-transparent text-gray-300 rounded p-1 flex items-center justify-center" onClick={() => window.open('https://www.linkedin.com/in/marc-melgar-88653b310', '_blank')}><Linkedin className="w-5 h-5" /></button>
              </div>
              <h3 className="text-xl font-semibold text-white mb-0.5 mt-1 text-left">Want to Work Together?</h3>
              <Button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-md px-4 py-2 shadow-md transition-all duration-300 hover:from-blue-500 hover:to-indigo-500 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                onClick={() => {
                  const connectSection = document.getElementById("connect-section")
                  if (connectSection) {
                    connectSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right Content Section */}
          <div
            className={`lg:col-span-3 space-y-8 transition-all duration-1000 delay-200 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {/* About Me */}
            <section className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6 text-white">
                About Me
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="hover:text-white transition-colors duration-300">
                  Hi, I'm a Computer Engineer passionate about building smart, connected systems. I've developed
                  sensor-based hardware, automated tasks with Python, and built API-powered dashboards. Backed by
                  certifications in AI, data analytics, and data center technologies, I create scalable, data-driven
                  solutions that bridge hardware and software.
                </p>
                <p className="hover:text-white transition-colors duration-300">
                  My expertise spans from low-level hardware integration to high-level software development, allowing me
                  to create comprehensive solutions that optimize both performance and user experience. I'm particularly
                  interested in IoT systems, data analytics, and automation technologies that can make a real-world
                  impact.
                </p>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Technical Skills
              </h2>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                  <div
                    key={category}
                    className={`transition-all duration-700 delay-${categoryIndex * 200} ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                  >
                    <h3 className="text-xl font-semibold mb-3 text-white">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <Badge
                          key={skill.name}
                          className={`${skill.color} text-white hover:opacity-80 px-3 py-1 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}
                          style={{ animationDelay: `${skillIndex * 100}ms` }}
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Professional Experience */}
            <section className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Professional Experience
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-gray-700 pl-6 space-y-6 hover:border-blue-500 transition-colors duration-300">
                  <div className="space-y-3 hover:transform hover:translate-x-2 transition-transform duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-xl font-semibold text-white">Intern (OJT)</h3>
                      <span className="text-sm text-gray-400">May 2024 - August 2024</span>
                    </div>
                    <p className="text-gray-400">VERYFY</p>
                    <p className="text-gray-300 leading-relaxed hover:text-white transition-colors duration-300">
                      This internship allowed me to merge creativity with functionality—transforming design concepts
                      into responsive web applications—and provided valuable experience in managing real-world
                      development workflows.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-600 text-white hover:scale-110 transition-transform duration-300">
                        Web Development
                      </Badge>
                      <Badge className="bg-green-600 text-white hover:scale-110 transition-transform duration-300">
                        Responsive Design
                      </Badge>
                      <Badge className="bg-purple-600 text-white hover:scale-110 transition-transform duration-300">
                        UI/UX Implementation
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Projects */}
            <section className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Featured Projects
              </h2>
              <div className="grid gap-6">
                <div className="bg-[#18191b] rounded-lg p-6 space-y-4 hover:bg-[#23262b] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="aspect-video relative rounded-lg overflow-hidden group">
                    <Image
                      src="/bote-project.png"
                      alt="BOTE Project Team"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-300">
                    BOTE: Bin Optimizer for Trash and Ecology
                  </h3>
                  <p className="text-gray-300 hover:text-white transition-colors duration-300">
                    Developed "BOTE" (Bin Optimizer for Trash and Ecology), a prototype Reverse Vending Machine that
                    encourages recycling by accepting plastic bottles and metal cans in exchange for coins. Using Rapid
                    Application Development, the system integrates sensors, a crushing mechanism, and a coin dispenser
                    to automate sorting and volume reduction. Designed to boost recycling participation and
                    environmental awareness, the project received high marks for functionality and reliability from both
                    users and experts.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-600 text-white hover:scale-110 transition-transform duration-300">
                      Hardware Integration
                    </Badge>
                    <Badge className="bg-green-600 text-white hover:scale-110 transition-transform duration-300">
                      Sensor Technology
                    </Badge>
                    <Badge className="bg-red-600 text-white hover:scale-110 transition-transform duration-300">
                      Automation
                    </Badge>
                    <Badge className="bg-purple-600 text-white hover:scale-110 transition-transform duration-300">
                      Environmental Tech
                    </Badge>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent border-gray-600 text-white hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                {/* AniLink Project Card */}
                <div
                  className="bg-[#18191b] rounded-lg p-6 space-y-4 hover:bg-[#23262b] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div
                    className="aspect-video relative rounded-lg overflow-hidden group cursor-pointer"
                    onClick={() => window.open("https://anilink-ph.netlify.app/", "_blank")}
                  >
                    <Image
                      src="/anilink.png"
                      alt="AniLink Platform"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white hover:text-yellow-400 transition-colors duration-300">
                    AniLink: Empowering Filipino Farmers
                  </h3>
                  <p className="text-gray-300 hover:text-white transition-colors duration-300">
                    AniLink is a web-based platform that connects Filipino farmers directly with buyers to sell their harvested palay (unmilled rice). The platform aims to promote fair pricing, reduce middlemen, and empower local agriculture through digital innovation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-yellow-500 text-white hover:scale-110 transition-transform duration-300">
                      Web Platform
                    </Badge>
                    <Badge className="bg-green-600 text-white hover:scale-110 transition-transform duration-300">
                      Agriculture
                    </Badge>
                    <Badge className="bg-orange-500 text-white hover:scale-110 transition-transform duration-300">
                      Fair Trade
                    </Badge>
                    <Badge className="bg-blue-500 text-white hover:scale-110 transition-transform duration-300">
                      Digital Innovation
                    </Badge>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent border-gray-600 text-white hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                      onClick={() => window.open("https://anilink-ph.netlify.app/", "_blank")}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Certifications
              </h2>
              <div className="grid md:grid-cols-1 gap-6">
                {[
                  {
                    image: "/ai-fundamentals-badge.png",
                    date: "June 2025",
                    title: "AI Fundamentals with IBM SkillsBuild",
                    issuer: "Cisco",
                    description:
                      "Successfully completed the AI Fundamentals course and achieved student level credentials. Demonstrates knowledge of basic artificial intelligence concepts, natural language processing, computer vision, deep learning, and AI ethics.",
                    badges: ["Artificial Intelligence", "Machine Learning", "AI Ethics"],
                    colors: ["bg-blue-600", "bg-green-600", "bg-purple-600"],
                    link: "https://www.credly.com/badges/c2bb9ed3-50ed-4576-9f6a-a96f8348182f/linked_in_profile",
                  },
                  {
                    image: "/data-center-badge.png",
                    date: "November 2024",
                    title: "Certified Data Center Technician (CDCT)",
                    issuer: "East West International Educational Specialists, Inc",
                    description:
                      "Foundational course covering datacenter operations, architecture, basic networking, power and cooling systems, and introduction to cloud computing. Provides groundwork for data center management career.",
                    badges: ["Data Center Operations", "Networking", "Infrastructure"],
                    colors: ["bg-blue-600", "bg-green-600", "bg-red-600"],
                    link: "https://www.credly.com/badges/4f588a1b-8c7f-4c7a-9aaf-5e7d7543fab9/linked_in_profile",
                  },
                  {
                    image: "/data-analytics-badge.png",
                    date: "September 2024",
                    title: "Data Analytics Essentials",
                    issuer: "Cisco",
                    description:
                      "Comprehensive understanding of data analytics process, data characteristics, transformation techniques, and analysis using statistical methods. Completed hands-on activities using Excel, SQL, Tableau and other tools.",
                    badges: ["Data Analytics", "SQL", "Tableau"],
                    colors: ["bg-blue-600", "bg-green-600", "bg-yellow-600"],
                    link: "https://www.credly.com/badges/4f2190d3-1574-4c62-9c9e-98979f697bb0/linked_in_profile",
                  },
                ].map((cert, index) => (
                  <div
                    key={cert.title}
                    className={`bg-[#18191b] rounded-lg p-6 space-y-4 hover:bg-[#23262b] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-16 h-16 relative group">
                        <Image
                          src={cert.image || "/placeholder.svg"}
                          alt={`${cert.title} Badge`}
                          fill
                          className="object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <span className="text-sm text-gray-400">{cert.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400">{cert.issuer}</p>
                    <p className="text-gray-300 hover:text-white transition-colors duration-300">{cert.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.badges.map((badge, badgeIndex) => (
                        <Badge
                          key={badge}
                          className={`${cert.colors[badgeIndex]} text-white hover:scale-110 transition-transform duration-300`}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent border-gray-600 text-white hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                      onClick={() => window.open(cert.link, "_blank")}
                    >
                      View Certificate
                    </Button>
                  </div>
                ))}
              </div>

              <div className="text-center mt-6">
                <a
                  href="https://www.linkedin.com/in/marc-melgar-88653b310/details/certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-105 inline-block"
                >
                  View More Certifications →
                </a>
              </div>
            </section>

            {/* Contact */}
            <section id="connect-section" className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Connect With Me
              </h2>
              <div className="bg-[#18191b] rounded-lg p-6 space-y-6 hover:bg-[#23262b] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                <p className="text-gray-300 leading-relaxed hover:text-white transition-colors duration-300">
                  Feel free to reach out to me via email or phone. You can also connect with me on LinkedIn. I'm always
                  interested in discussing new opportunities and exciting projects.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-300">marcmelgar419@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-3 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                        <Phone className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-300">+63 938 250 2648</span>
                      </div>
                      <div className="flex items-center gap-3 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                        <Linkedin className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-300">linkedin.com/in/marc-melgar-88653b310</span>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-transparent border-gray-600 text-white hover:bg-gray-700 transition-all duration-300 hover:scale-105"
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
                        className="bg-transparent border-gray-600 text-white hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                        onClick={() => window.open("https://www.linkedin.com/in/marc-melgar-88653b310", "_blank")}
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Quick Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                        className="w-full px-3 py-2 bg-[#23262b] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        required
                        className="w-full px-3 py-2 bg-[#23262b] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                      />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your Message"
                        rows={4}
                        required
                        className="w-full px-3 py-2 bg-[#23262b] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none transition-all duration-300"
                      />
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#23262b] hover:bg-[#23262b] disabled:opacity-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                      {submitStatus === "success" && (
                        <p className="text-green-400 text-sm animate-fade-in">Message sent successfully!</p>
                      )}
                      {submitStatus === "error" && (
                        <p className="text-red-400 text-sm animate-fade-in">
                          Failed to send message. Please try again.
                        </p>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div >
        </div >
      </div >
    </div >
  )
}
