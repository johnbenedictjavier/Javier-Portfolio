// Edit this file to replace all portfolio text, links, and personal details.
const dostSeiScholarship = {
  date: "2024",
  title: "DOST-SEI Merit Scholar",
  organization: "Department of Science and Technology - Science Education Institute",
  description:
    "Selected as a DOST-SEI Merit Scholar in 2024 while pursuing a Bachelor of Science in Computer Science.",
} as const;

export const portfolio = {
  name: "John Benedict Javier",
  initials: "JBJ",
  eyebrow: "Hello, I'm",
  roles: [
    "BS Computer Science Student",
    "Aspiring Software Engineer",
    "Aspiring Game Developer",
    "Technology Project Leader",
    "DOST-SEI Scholar",
  ],
  course: "BS Computer Science, 3rd Year",
  summary:
    "I'm a third-year Computer Science student building educational games and practical web platforms through thoughtful engineering and people-first leadership.",
  availability: "Open to opportunities",
  primaryCredential: dostSeiScholarship,
  location: "Lipa City, Batangas",
  email: "johnbenedictjavier15@gmail.com",
  profileImage: "images/profile/john-benedict-javier.jpg",
  profileFallbackImage: "https://avatars.githubusercontent.com/u/326827759?v=4",
  profileAlt: "Portrait of John Benedict Javier",
  about: {
    kicker: "Beyond the code",
    title: "Learning deeply, building purposefully, leading responsibly.",
    paragraphs: [
      "I'm a third-year Bachelor of Science in Computer Science student at Lipa City Colleges with a growing focus on software engineering. I enjoy translating practical problems into clear, approachable digital experiences.",
      "My work ranges from Tech Revive, an educational device-repair game, to ELFRESCO PH, an e-commerce experience for a container-house business. Alongside development, I lead student initiatives and help teams turn plans into successful activities.",
    ],
    principles: [
      {
        number: "01",
        title: "Build with purpose",
        text: "Technology matters most when it solves a real problem for real people.",
      },
      {
        number: "02",
        title: "Stay curious",
        text: "Every project is an opportunity to ask better questions and learn faster.",
      },
      {
        number: "03",
        title: "Lead together",
        text: "Strong outcomes come from clear communication, trust, and shared ownership.",
      },
    ],
  },
  stats: [
    { value: "05", label: "Featured projects" },
    { value: "27", label: "Skills and tools" },
    { value: "04", label: "Leadership roles" },
    { value: "04", label: "Recognitions & distinctions" },
  ],
  awardGroups: [
    {
      id: "recognition",
      label: "Awards & Recognitions",
      fallbackImage: "images/awards/dost-sei-scholar-placeholder.svg",
      cards: [
        {
          ...dostSeiScholarship,
          image: "images/awards/dost1.jpg",
          images: ["images/awards/dost1.jpg","images/awards/dost2.jpg"],
          imageAlt: "John Benedict Javier's DOST-SEI Merit Scholarship recognition",
          takeaways: [
            "Earned national recognition for academic potential in science and technology.",
            "Strengthened my commitment to responsible, high-impact technology work.",
          ],
          proofUrl: "",
          isPlaceholder: false,
        },
        {
          ...dostSeiScholarship,
          image: "images/awards/deans.jpg",
          images: ["images/awards/deans.jpg"],
          imageAlt: "John Benedict Javier's Deans Lister recognition",
          takeaways: [
            "Got 1.45 as GWA for Dean's Lister",
            "One of two dean's lister of 2nd Year BSCS",
            "1st Semester: Dean's Lister",
          ],
          proofUrl: "",
          isPlaceholder: false,
        },
      ],
    },
    {
      id: "competition",
      label: "Hackathons & Competitions",
      fallbackImage: "images/awards/competition-placeholder.svg",
      cards: [
        {
          date: "September 2026",
          title: "JPCS Mini-Hackathon",
          organization: "Junior Philippine Computer Society - Lipa City Colleges",
          description:
            "Built a website that digitized department practices during a fast-paced team challenge focused on AI-assisted development.",
          image: "images/awards/hackaton2.jpg",
          images: ["images/awards/hackaton2.jpg"],
          imageAlt: "JPCS Mini-Hackathon team experience",
          takeaways: [
            "Turned an operational problem into a working digital concept.",
            "Practiced rapid collaboration and responsible AI-assisted development.",
          ],
          proofUrl: "",
          isPlaceholder: false,
        },
        {
          date: "January 2025",
          title: "BEC Hackathon",
          organization: "Batangas Eastern Colleges - San Juan",
          description:
            "Represented our school in San Juan, Batangas during a 12-hour event with an eight-hour main development challenge.",
          image: "images/awards/hackaton1.jpg",
          images: ["images/awards/hackaton1.jpg"],
          imageAlt: "BEC Hackathon school representatives",
          takeaways: [
            "Built under strict time constraints while representing my school.",
            "Improved team planning, prioritization, and presentation skills.",
          ],
          proofUrl: "",
          isPlaceholder: false,
        },
      ],
    },
    {
      id: "academic",
      label: "Academic Distinctions",
      fallbackImage: "images/awards/academic-placeholder.svg",
      cards: [
        {
          date: "2024",
          title: "Senior High School Rank 1",
          organization: "STI College Lipa",
          description:
            "Graduated Rank 1 from the Science, Technology, Engineering, and Mathematics strand.",
          image: "images/awards/academic-rank-1-2024.jpg",
          images: ["images/awards/academic-rank-1-2024.jpg","images/awards/academic-2.jpg"],
          imageAlt: "Senior High School Rank 1 recognition",
          takeaways: [
            "Sustained strong performance across the STEM curriculum.",
            "Developed the discipline that supports my current computing studies.",
          ],
          proofUrl: "",
          isPlaceholder: false,
        },
        {
          date: "2022",
          title: "Junior High School Salutatorian",
          organization: "Pinagkawitan Integrated National High School",
          description:
            "Graduated Salutatorian in recognition of consistent academic achievement throughout junior high school.",
          image: "images/awards/academic-salutatorian-jhs-2022.jpg",
          images: ["images/awards/academic-salutatorian-jhs-2022.jpg"],
          imageAlt: "Junior High School Salutatorian recognition",
          takeaways: [
            "Built consistent study habits and resilience.",
            "Learned to balance academic goals with school responsibilities.",
          ],
          proofUrl: "",
          isPlaceholder: false,
        },
        {
          date: "2017",
          title: "Elementary Salutatorian",
          organization: "Jose K. Obando Memorial Elementary School",
          description:
            "Graduated Salutatorian after demonstrating strong academic performance throughout elementary school.",
          image: "images/awards/academic-salutatorian-elementary-2017.jpg",
          images: ["images/awards/academic-salutatorian-elementary-2017.jpg"],
          imageAlt: "Elementary Salutatorian recognition",
          takeaways: [
            "Established an early commitment to learning and improvement.",
            "Gained confidence through consistent academic effort.",
          ],
          proofUrl: "",
          isPlaceholder: false,
        },
      ],
    },
  ],
  events: [
    {
      year: "2024",
      shortTitle: "IoT Conference Philippines",
      title: "Internet of Things Conference Philippines 2024",
      role: "Participant / Attendee",
      venue: "SMX Convention Center Manila",
      date: "October 29-30, 2024",
      tags: ["IoT", "Smart Systems", "Emerging Tech", "Networking"],
      description:
        "Explored connected systems, smart-city applications, and practical IoT uses across industries.",
      takeaways: [
        "Saw how sensors, networks, software, and data operate as one system.",
        "Gained a broader view of technology beyond traditional software development.",
        "Learned how IoT concepts translate into real industry solutions.",
      ],
      images: ["images/events/iot1.jpg","images/events/iot2.jpg"] as string[],
      proofUrl: "",
    },
    {
      year: "2025",
      shortTitle: "PCTA Philippine Tech Show",
      title: "PCTA Philippine Tech Show 2025",
      role: "Participant / Attendee",
      venue: "SMX Convention Center Manila",
      date: "March 24-28, 2025",
      tags: ["Telecommunications", "Networking", "Digital Infrastructure", "ICT"],
      description:
        "Gained exposure to telecommunications, connectivity, digital infrastructure, and emerging ICT solutions.",
      takeaways: [
        "Understood how communication infrastructure supports modern applications.",
        "Connected software concepts with industry-scale networking systems.",
        "Observed current approaches to connectivity and digital transformation.",
      ],
      images: [] as string[],
      proofUrl: "",
    },
    {
      year: "2026",
      shortTitle: "WOCEE",
      title: "World of Consumer Electronics Expo (WOCEE) 2026",
      role: "Participant / Attendee",
      venue: "SMX Convention Center Manila",
      date: "August 5-8, 2026",
      tags: ["AI", "Robotics", "IoT", "Consumer Electronics", "Gaming"],
      description:
        "Explored innovations in AI, robotics, IoT, smart devices, gaming, and consumer electronics through live exhibits.",
      takeaways: [
        "Observed how software, hardware, and automation combine in real products.",
        "Expanded my awareness of current AI and robotics applications.",
        "Connected classroom concepts with emerging consumer technologies.",
      ],
      images: ["images/events/wocee.jpg","images/events/wocee1.jpg","images/events/wocee3.jpg","images/events/wocee2.jpg"] as string[],
      proofUrl: "",
    },
    {
      year: "2026",
      shortTitle: "AIDLC Workshop with Kiro",
      title: "AIDLC Workshop with Kiro",
      role: "Workshop Participant",
      venue: "Online Workshop",
      date: "September 26-27, 2026",
      tags: ["AIDLC", "Kiro", "AI-Assisted Development", "Software Development", "Requirements & Planning"],
      description:
        "Focused on the AI-Driven Development Life Cycle and using Kiro in modern software development workflows, from requirements and planning through implementation and refinement.",
      takeaways: [
        "Applied AI assistance across multiple stages of the development life cycle.",
        "Practiced structuring requirements and planning implementation with Kiro.",
        "Explored ways to refine software solutions through AI-assisted workflows.",
      ],
      images: ["images/events/kiro.jpg"] as string[],
      proofUrl: "",
    },
  ],
  education: [
    {
      period: "2024 — Present",
      degree: "Bachelor of Science in Computer Science",
      school: "Lipa City Colleges",
      detail:
        "Third-year student under the College of Computing and Technology Engineering, building toward a career in software engineering.",
    },
    {
      period: "2022 — 2024",
      degree: "Senior High School",
      school: "STI College Lipa",
      detail:
        "Science, Technology, Engineering, and Mathematics strand. Graduated Rank 1.",
    },
    {
      period: "2017 — 2022",
      degree: "Junior High School",
      school: "Pinagkawitan Integrated National High School",
      detail: "Completed junior high school and graduated Salutatorian.",
    },
    {
      period: "2011 — 2017",
      degree: "Elementary Education",
      school: "Jose K. Obando Memorial Elementary School",
      detail: "Completed elementary education and graduated Salutatorian.",
    },
  ],
  leadership: [
    {
      period: "2026 — Present",
      role: "Special Project Lead",
      organization: "Junior Philippine Computer Society",
      detail:
        "I plan and supervise special organizational projects, coordinate team responsibilities, monitor progress, and ensure activities are completed successfully according to their objectives and timelines.",
    },
    {
      period: "2025 — 2026",
      role: "2nd Year Representative",
      organization: "CODES",
      detail:
        "Represented second-year students, communicated their concerns, and coordinated organizational activities and announcements.",
    },
    {
      period: "2024 — 2025",
      role: "Career Guidance Representative",
      organization: "Lipa City Colleges",
      detail:
        "Shared career-related information, represented student concerns, and supported career guidance activities.",
    },
    {
      period: "2023 — 2024",
      role: "President",
      organization: "STI Sigma Math Club",
      detail:
        "Led the club, organized mathematics-related activities, and coordinated officers and members.",
    },
  ],
  professionalExperience: [
    {
      period: "March 19, 2025 – May 23, 2025",
      role: "Freelance Software Developer",
      organization: "Chicken Ordering & Management System — Client Project",
      detail:
        "Developed a kiosk-style chicken ordering and management system for a client using Python, Flask, and HTML. Built the backend application logic with Flask and Python while using HTML to structure the user interface. The system incorporated CRUD (Create, Read, Update, Delete) operations for managing system data and provided a kiosk-inspired ordering experience. Technologies: Python, Flask, HTML, CRUD, Web Development. Project type: Client Project.",
    },
  ],
  skillGroups: [
    {
      label: "Languages",
      description: "Core languages I use to turn ideas into working software.",
      items: [
        { name: "JavaScript", icon: "javascript", color: "#f7df1e" },
        { name: "TypeScript", icon: "typescript", color: "#3178c6" },
        { name: "Python", icon: "python", color: "#3776ab" },
        { name: "PHP", icon: "php", color: "#777bb4" },
        { name: "HTML5", icon: "html", color: "#e34f26" },
        { name: "CSS3", icon: "css", color: "#1572b6" },
        { name: "Luau", icon: "luau", color: "#00a2ff" },
      ],
    },
    {
      label: "Frontend",
      description: "Tools for creating responsive and accessible interfaces.",
      items: [
        { name: "React", icon: "react", color: "#61dafb" },
        { name: "Responsive UI", icon: "responsive", color: "#66e3ff" },
        { name: "REST APIs", icon: "rest", color: "#49a9ff" },
        { name: "Accessibility", icon: "accessibility", color: "#8f7cff" },
      ],
    },
    {
      label: "Backend & Data",
      description: "Technologies for application logic, data, and integrations.",
      items: [
        { name: "Node.js", icon: "node", color: "#5fa04e" },
        { name: "SQL", icon: "sql", color: "#49a9ff" },
        { name: "Supabase", icon: "supabase", color: "#3ecf8e" },
        { name: "API Design", icon: "api", color: "#66e3ff" },
      ],
    },
    {
      label: "Tools & Practice",
      description: "The workflow behind dependable and collaborative delivery.",
      items: [
        { name: "Git", icon: "git", color: "#f05032" },
        { name: "GitHub", icon: "github", color: "var(--text)" },
        { name: "VS Code", icon: "vscode", color: "#23a8f2" },
        { name: "Vercel", icon: "vercel", color: "var(--text)" },
        { name: "Kiro", icon: "kiro", color: "#a98bff" },
        { name: "Figma", icon: "figma", color: "#f24e1e" },
        { name: "Canva", icon: "canva", color: "#7d5cff" },
      ],
    },
    {
      label: "AI Assistants",
      description: "AI tools I use to research, reason, prototype, and improve development workflows.",
      items: [
        { name: "ChatGPT", icon: "chatgpt", color: "#10a37f" },
        { name: "OpenCode", icon: "opencode", color: "#66e3ff" },
        { name: "Claude", icon: "claude", color: "#d97757" },
        { name: "Gemini", icon: "gemini", color: "#6f8df6" },
        { name: "Quick AI", icon: "quickai", color: "#f2b84b" },
      ],
    },
  ],
  spokenLanguages: [
    { language: "Filipino", level: "Native" },
    { language: "English", level: "Professional" },
  ],
  projects: [
    {
      number: "01",
      title: "Tech Revive",
      type: "Educational Pygame",
      description:
        "Tech Revive is a unique educational game where players become skilled technicians fixing electronic devices. It teaches players how to use tools effectively while keeping the experience fun and informative.",
      tags: ["Python", "Pygame", "Game Development"],
      image: "images/projects/tech-revive.jpg",
      fallbackImage: "images/projects/tech-revive-placeholder.svg",
      sourceUrl: "",
      liveUrl: "",
      accent: "cyan",
    },
    {
      number: "02",
      title: "ELFRESCO PH",
      type: "Web E-commerce Platform",
      description:
        "ELFRESCO PH is a web-based e-commerce platform for a modern container-house business. Customers can explore house designs, review product details, select available options, and manage a shopping cart through an organized online interface.",
      tags: ["Web Development", "E-commerce", "Responsive UI"],
      image: "images/projects/elfresco-ph.jpg",
      fallbackImage: "images/projects/elfresco-ph-placeholder.svg",
      sourceUrl: "",
      liveUrl: "",
      accent: "blue",
    },
    {
      number: "03",
      title: "Laurel & Ladle",
      type: "Luxury Food Ordering System",
      description:
        "Laurel & Ladle is an elegant food-ordering system with complete CRUD workflows for menu and order management, automatic price calculations, and a polished receipt-style confirmation for every completed order.",
      tags: ["CRUD", "Food Ordering", "Auto-calculation", "Responsive UI"],
      image: "images/projects/foodorderingsystem.jpg",
      fallbackImage: "images/projects/laurel-and-ladle-placeholder.svg",
      sourceUrl: "",
      liveUrl: "https://johnbenedictjavier.github.io/Food-Ordering-System/",
      accent: "violet",
    },
    {
      number: "04",
      title: "Barangay Information System",
      type: "Community Information Platform",
      description:
        "A community management system that handles CRUD operations for resident records, streamlines official document requests, and organizes public infrastructure concerns for clearer barangay services.",
      tags: ["CRUD", "Resident Records", "Document Requests", "Civic Tech"],
      image: "images/projects/bms.jpg",
      fallbackImage: "images/projects/barangay-information-system-placeholder.svg",
      sourceUrl: "",
      liveUrl: "",
      accent: "cyan",
    },
    {
      number: "05",
      title: "Payroll Management System",
      type: "Business Management System",
      description:
        "A structured payroll platform for managing employee information, departments, positions, salary details, and related payroll records through dependable CRUD workflows.",
      tags: ["CRUD", "Payroll", "Employee Records", "Business Systems"],
      image: "images/projects/payroll.jpg",
      fallbackImage: "images/projects/payroll-management-system-placeholder.svg",
      sourceUrl: "",
      liveUrl: "",
      accent: "blue",
    },
  ],
  socials: [
    {
      id: "linkedin",
      label: "LinkedIn",
      handle: "John Benedict Javier",
      url: "https://linkedin.com/in/john-benedict-javier-011523435",
    },
    {
      id: "github",
      label: "GitHub",
      handle: "johnbenedictjavier",
      url: "https://github.com/johnbenedictjavier",
    },
    {
      id: "facebook",
      label: "Facebook",
      handle: "John Benedict Javier",
      url: "https://www.facebook.com/jbmitra.javier",
    },
    {
      id: "instagram",
      label: "Instagram",
      handle: "@jrx.bxnz",
      url: "https://www.instagram.com/jrx.bxnz/",
    },
    {
      id: "tiktok",
      label: "TikTok",
      handle: "@hndsmjerax",
      url: "https://www.tiktok.com/@hndsmjerax",
    },
  ],
  assistant: {
    name: "Javi AI",
    welcome:
      "Hi! I'm Javier's portfolio assistant. Ask me about his skills, education, projects, awards, events, leadership, or how to get in touch.",
    suggestions: [
      "What are your strongest skills?",
      "Tell me about your projects",
      "What leadership experience do you have?",
      "How can I contact you?",
    ],
  },
} as const;

export type Portfolio = typeof portfolio;
