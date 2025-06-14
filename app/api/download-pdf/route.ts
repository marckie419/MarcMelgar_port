import { NextResponse } from "next/server"
import { jsPDF } from "jspdf"

export async function GET() {
  try {
    const doc = new jsPDF()

    // Set up colors
    const primaryColor = [41, 128, 185] // Blue
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
        title: "Industry-Level Certification Milestone:",
        description:
          "Successfully qualified and currently participating in the Level 3 Training Program with VITRO/ePLDT, reflecting advanced competency in hardware systems, data center operations, and infrastructure readiness.",
      },
      {
        title: "Key Project - Bin Optimizer for Trash and Ecology (BOTE):",
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
      "Graduated with a Bachelor of Science in Computer Engineering with Academic Commendation, demonstrating excellence in embedded systems, circuit design, and software development."
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
        content: "Certified Data Center Technician (CDCT), Data Analytics Essentials",
      },
      {
        category: "Technical Skills:",
        content:
          "Full-Stack Web Development, Linux System Administration, Bash Scripting, API Integration, Embedded Systems Development, Microcontroller Programming (Arduino), Circuit Design & Simulation (Multisim), Hardware-Software Integration, Version Control (Git)",
      },
      {
        category: "Soft Skills:",
        content: "Team Leadership, Project Coordination, Analytical Thinking, Effective Communication",
      },
      {
        category: "Major Awards/Activities:",
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

    // Generate PDF buffer
    const pdfBuffer = doc.output("arraybuffer")

    // Return PDF as response
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Marc_Melgar_Resume.pdf"',
      },
    })
  } catch (error) {
    console.error("Error generating PDF:", error)
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 })
  }
}
