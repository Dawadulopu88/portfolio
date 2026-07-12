/* =========================================================================
   PORTFOLIO DATA
   -------------------------------------------------------------------------
   Sob information ekhane. Notun project/skill/link add korte চাইলে শুধু
   এই ফাইলটা এডিট করলেই হবে — HTML/CSS টাচ করা লাগবে না।

   [FILL ME] লেখা জায়গাগুলো তুমি নিজের তথ্য দিয়ে পূরণ করবে।
   ========================================================================= */

const PORTFOLIO_DATA = {

  // ---------------------------------------------------------------------
  // BASIC INFO
  // ---------------------------------------------------------------------
  name: "MD Daudul Islam",
  role: "Computer Science & Engineering Student",
  roles: [ // hero-e typing effect e ei roleগুলো ঘুরে ঘুরে দেখাবে
    "Computer Science & Engineering Student",
    "Web Developer",
    "Django Developer",
    "Robotics & IoT Enthusiast",
    "Final Semester @ UAP"
  ],
  location: "Dhaka, Bangladesh",
  phone: "01753049651",
  email: "daudulislam2000@gmail.com",
  tagline: "Building things at the intersection of software, circuits and curiosity — one semester away from graduation.",
  summary: "Final-year Computer Science and Engineering student with a strong interest in Web Development and Software Engineering. Proficient in Python, JavaScript, Django, HTML, CSS, and MySQL, with a solid foundation in Data Structures & Algorithms, Database Management Systems, Robotics & IoT, Networking and Object-Oriented Programming. A motivated learner with strong problem-solving skills, eager to keep learning and grow professionally in development, networking and IoT.",

  // ---------------------------------------------------------------------
  // SOCIAL / PROFILE LINKS  — [FILL ME] আসল লিংক বসাও
  // ---------------------------------------------------------------------
  socials: {
    github:   "https://github.com/Dawadulopu88", // [FILL ME] e.g. https://github.com/yourusername
    linkedin: "https://www.linkedin.com/in/md-daudul-islam-opu",
    facebook: "https://www.facebook.com/share/1BVyxCo6kU/", // [FILL ME]
    portfolio: "#", // [FILL ME] live site link (deploy howar por nijer link boshabe)
    email: "mailto:daudulislam2000@gmail.com",
    phone: "tel:+8801753049651"
  },

  // resume PDF - eikhane resume.pdf file er path (assets/resume/ folder e file rekhe নাম মিলাও)
  resumeFile: "assets/resume/MD_Daudul_Islam_Resume.pdf", // [FILL ME] resume file ei path e রাখো

  // profile photo — nijer chobi assets/img/ folder e rekhe eikhane naam bosao
  // (na dile automatic ekta monogram/initial-based avatar dekhabe)
  profilePhoto: "assets/img/profile.jpg", // [FILL ME] nijer chobi ei path e রাখো

  // ---------------------------------------------------------------------
  // EDUCATION
  // ---------------------------------------------------------------------
  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institute: "University of Asia Pacific, Dhaka",
      period: "2022 — Present",
      detail: "CGPA: 3.62",
      tag: "MCU-01"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institute: "Notre Dame College, Dhaka",
      period: "2019 — 2021",
      detail: "GPA: 5.00",
      tag: "MCU-02"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institute: "Motijheel Govt. Boys High School, Dhaka",
      period: "2018 — 2019",
      detail: "GPA: 5.00",
      tag: "MCU-03"
    }
  ],

  // ---------------------------------------------------------------------
  // SKILLS — grouped like a component stack
  // ---------------------------------------------------------------------
  skillGroups: [
    {
      label: "Languages",
      ref: "LNG",
      skills: ["Python", "C", "JavaScript", "SQL", "HTML", "CSS"]
    },
    {
      label: "Frontend",
      ref: "FE",
      skills: ["HTML5", "CSS3", "Bootstrap"]
    },
    {
      label: "Backend",
      ref: "BE",
      skills: ["Django", "Django REST Framework"]
    },
    {
      label: "Databases",
      ref: "DB",
      skills: ["MySQL", "SQLite"]
    },
    {
      label: "Tools",
      ref: "TL",
      skills: ["Git", "GitHub", "XAMPP", "phpMyAdmin", "VS Code", "Figma", "Arduino"]
    },
    {
      label: "Robotics & IoT",
      ref: "IOT",
      skills: ["ESP32", "Arduino", "Embedded Systems", "Microcontrollers"]
    },
    {
      label: "Core Competencies",
      ref: "CORE",
      skills: ["DSA", "OOP", "DBMS", "REST APIs", "Problem Solving", "Software Engineering"]
    }
  ],

  // ---------------------------------------------------------------------
  // PROJECTS
  // image / video: assets/projects/ folder e nijer file rekhe নাম বসাও।
  // video field ফাঁকা রাখলে শুধু ছবি দেখাবে।
  // ---------------------------------------------------------------------
  projects: [
    {
      title: "Resume Screening & Candidate Matching System",
      ref: "OUT-01",
      stack: ["Python", "PyTorch", "DistilBERT", "SBERT", "Scikit-learn"],
      description: "An AI-powered resume screening tool using NLP that extracts skills and experience from resumes with automated feedback. Benchmarks candidates against job requirements and ranks applicants based on relevance scoring.",
      image: "", // [FILL ME]
      video: "", // [FILL ME] optional, e.g. assets/projects/resume-screening.mp4
      github: "https://github.com/Dawadulopu88/Resume_Ranking", // [FILL ME]
      demo: "" // [FILL ME] optional live demo link
    },
    {
      title: "MatriNest — Pregnancy Care & Wellness Portal",
      ref: "OUT-02",
      stack: ["Python", "Django", "Bootstrap", "SQLite/MySQL"],
      description: "A Django-based web application supporting expecting mothers through pregnancy with personalized guidance. Includes health tracking, informational resources, and progress monitoring features.",
      image: "", // [FILL ME]
      video: "",
      github: "https://github.com/Dawadulopu88/Matri_Nest", // [FILL ME]
      demo: ""
    },
    {
      title: "Lost & Found Item Management System",
      ref: "OUT-03",
      stack: ["PHP", "MySQL", "XAMPP", "phpMyAdmin"],
      description: "A database-driven web app for reporting, searching, and managing lost and found items, with a normalized relational database and ER diagram designed from scratch.",
      image: "", // [FILL ME]
      video: "",
      github: "https://github.com/Dawadulopu88/Lost-Found", // [FILL ME]
      demo: ""
    },
    {
      title: "Autonomous Line-Following Plant Watering Robot",
      ref: "OUT-04",
      stack: ["Arduino", "IR Sensors", "Soil Moisture Sensor", "Embedded C"],
      description: "An autonomous robot that follows a predefined path using IR sensors and automatically waters plants based on real-time soil moisture readings.",
      image: "", // [FILL ME]
      video: "",
      github: "https://github.com/Dawadulopu88/Plant_Watering_Robot", // [FILL ME]
      demo: ""
    },
    {
      title: "Piezoelectric Footstep Power Generation System",
      ref: "OUT-05",
      stack: ["Arduino", "Piezoelectric Sensors", "Embedded Systems"],
      description: "A microcontroller-based system that harvests electrical energy from human footsteps, storing and converting the generated power for low-energy device usage.",
      image: "", // [FILL ME]
      video: "",
      github: "https://github.com/Dawadulopu88/Energy__Generation", // [FILL ME]
      demo: ""
    }
  ],

  // ---------------------------------------------------------------------
  // CERTIFICATIONS
  // ---------------------------------------------------------------------
  certifications: [
    { title: "Complete Cyber Security Course", org: "Ostad", year: "2025" },
    { title: "Complete CTF Course", org: "UAP", year: "2024" }
  ],

  // ---------------------------------------------------------------------
  // ACHIEVEMENTS
  // ---------------------------------------------------------------------
  achievements: [
    {
      title: "Business Idea Competition — ECDC Idea Season 4",
      org: "Entrepreneurship & Career Development Club, University of Asia Pacific",
      year: "2024",
      detail: "Reached the final round as a Finalist in a university-wide entrepreneurship competition. Advanced through online screening, a hands-on workshop, and a final pitch presented to industry CEOs."
    },
    {
      title: "ICPC Regional Round",
      org: "Competitive Programming",
      year: "2023",
      detail: "Competed in various programming contests and olympiads, securing places with achievements."
    }
  ],

  // ---------------------------------------------------------------------
  // EXTRACURRICULAR
  // ---------------------------------------------------------------------
  extracurricular: [
    "Member, University of Asia Pacific Programming Club",
    "Research Executive, University of Asia Pacific Robotics Club"
  ],

  // ---------------------------------------------------------------------
  // SOFT SKILLS
  // ---------------------------------------------------------------------
  softSkills: [
    "Strong Communication Skills",
    "Analytical Thinking",
    "Deadline-driven Time Management",
    "Adaptability"
  ]
};
