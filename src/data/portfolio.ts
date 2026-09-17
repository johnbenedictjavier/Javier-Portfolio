// Edit this file to replace all portfolio text, links, and personal details.
export const portfolio = {
  name: "John Benedict Javier",
  initials: "JBJ",
  eyebrow: "Hello, I'm",
  roles: [
    "BS Computer Science Student",
    "Aspiring Software Engineer",
    "Technology Project Leader",
  ],
  course: "BS Computer Science, 3rd Year",
  summary:
    "I'm a third-year Computer Science student building educational games and practical web platforms through thoughtful engineering and people-first leadership.",
  availability: "Open to opportunities",
  location: "Lipa City, Batangas",
  email: "johnbenedictjavier15@gmail.com",
  profileImage: "images/profile/john-benedict-javier.jpg",
  profileFallbackImage: "https://avatars.githubusercontent.com/u/326827759?v=4",
  profileAlt: "Portrait of John Benedict Javier",
  resumeUrl: "",
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
    { value: "02", label: "Featured projects" },
    { value: "18", label: "Skills and tools" },
    { value: "04", label: "Leadership roles" },
    { value: "03", label: "Academic distinctions" },
  ],
  awardGroups: [
    {
      id: "recognition",
      label: "Awards & Recognitions",
      fallbackImage: "images/awards/recognition-placeholder.svg",
      cards: [
        {
          date: "Add date",
          title: "Add an Award or Recognition",
          organization: "Issuing organization",
          description:
            "Add the story behind this recognition, what it celebrated, and why it was meaningful.",
          image: "images/awards/recognition-01.jpg",
          imageAlt: "Add a photo of this award or recognition",
          isPlaceholder: true,
        },
      ],
    },
    {
      id: "competition",
      label: "Hackathons & Competitions",
      fallbackImage: "images/awards/competition-placeholder.svg",
      cards: [
        {
          date: "Add date",
          title: "Add a Hackathon or Competition",
          organization: "Event or institution",
          description:
            "Add the challenge, your contribution, the solution your team created, and the result.",
          image: "images/awards/competition-01.jpg",
          imageAlt: "Add a photo from this hackathon or competition",
          isPlaceholder: true,
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
          imageAlt: "Senior High School Rank 1 recognition",
          isPlaceholder: false,
        },
        {
          date: "2022",
          title: "Junior High School Salutatorian",
          organization: "Pinagkawitan Integrated National High School",
          description:
            "Graduated Salutatorian in recognition of consistent academic achievement throughout junior high school.",
          image: "images/awards/academic-salutatorian-jhs-2022.jpg",
          imageAlt: "Junior High School Salutatorian recognition",
          isPlaceholder: false,
        },
        {
          date: "2017",
          title: "Elementary Salutatorian",
          organization: "Jose K. Obando Memorial Elementary School",
          description:
            "Graduated Salutatorian after demonstrating strong academic performance throughout elementary school.",
          image: "images/awards/academic-salutatorian-elementary-2017.jpg",
          imageAlt: "Elementary Salutatorian recognition",
          isPlaceholder: false,
        },
      ],
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
  skillGroups: [
    {
      label: "Languages",
      description: "Core languages I use to turn ideas into working software.",
      items: [
        { name: "JavaScript", icon: "javascript", color: "#f7df1e" },
        { name: "TypeScript", icon: "typescript", color: "#3178c6" },
        { name: "Python", icon: "python", color: "#3776ab" },
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
        { name: "Figma", icon: "figma", color: "#f24e1e" },
        { name: "Canva", icon: "canva", color: "#7d5cff" },
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
      sourceUrl: "https://github.com/johnbenedictjavier",
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
      sourceUrl: "https://github.com/johnbenedictjavier",
      liveUrl: "",
      accent: "blue",
    },
  ],
  socials: [
    {
      id: "linkedin",
      label: "LinkedIn",
      handle: "your-handle",
      url: "https://www.linkedin.com/in/your-handle/",
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
      handle: "your-handle",
      url: "https://www.facebook.com/your-handle",
    },
    {
      id: "instagram",
      label: "Instagram",
      handle: "@your-handle",
      url: "https://www.instagram.com/your-handle/",
    },
    {
      id: "tiktok",
      label: "TikTok",
      handle: "@your-handle",
      url: "https://www.tiktok.com/@your-handle",
    },
    {
      id: "website",
      label: "Other",
      handle: "your-link.com",
      url: "https://your-link.com",
    },
  ],
  assistant: {
    name: "Javi AI",
    welcome:
      "Hi! I'm Javier's portfolio assistant. Ask me about his skills, education, projects, awards, leadership, or how to get in touch.",
    suggestions: [
      "What are your strongest skills?",
      "Tell me about your projects",
      "What leadership experience do you have?",
      "How can I contact you?",
    ],
  },
} as const;

export type Portfolio = typeof portfolio;
