// Edit this file to replace all portfolio text, links, and personal details.
export const portfolio = {
  name: "John Benedict Javier",
  initials: "JBJ",
  eyebrow: "Hello, I'm",
  roles: [
    "Software Developer",
    "Technology Enthusiast",
    "Emerging Leader",
  ],
  summary:
    "I turn ideas into thoughtful digital experiences, blending practical engineering, creative problem-solving, and people-first leadership.",
  availability: "Open to opportunities",
  location: "Your City, Country",
  email: "hello@yourdomain.com",
  profileImage: "https://avatars.githubusercontent.com/u/326827759?v=4",
  profileAlt: "Portrait of John Benedict Javier",
  resumeUrl: "",
  about: {
    kicker: "Beyond the code",
    title: "Building useful technology with curiosity and intent.",
    paragraphs: [
      "I'm a developer and lifelong learner who enjoys translating complex problems into clear, human-centered solutions. Replace this paragraph with the story behind your work and the problems you care about.",
      "Outside development, I invest in leadership, collaboration, and continuous growth. Add the values, communities, or interests that make your journey uniquely yours.",
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
    { value: "03+", label: "Featured projects" },
    { value: "10+", label: "Tools explored" },
    { value: "03", label: "Leadership roles" },
    { value: "100%", label: "Growth mindset" },
  ],
  awards: [
    {
      year: "20XX",
      title: "Award or Recognition",
      organization: "Issuing Organization",
      description:
        "Describe what the award recognized, what you accomplished, and why it mattered.",
    },
    {
      year: "20XX",
      title: "Hackathon or Competition",
      organization: "Event or Institution",
      description:
        "Summarize your contribution, the challenge, and the outcome achieved by your team.",
    },
    {
      year: "20XX",
      title: "Academic Distinction",
      organization: "Your School or University",
      description:
        "Add a concise explanation of this distinction, scholarship, or academic milestone.",
    },
  ],
  education: [
    {
      period: "20XX — Present",
      degree: "Bachelor of Science in Your Program",
      school: "Your University",
      detail:
        "Add your specialization, relevant coursework, academic organizations, or current standing.",
    },
    {
      period: "20XX — 20XX",
      degree: "Senior High School Track",
      school: "Your School",
      detail:
        "Add your strand, notable projects, honors, or activities from this part of your education.",
    },
  ],
  leadership: [
    {
      period: "20XX — Present",
      role: "Leadership Position",
      organization: "Organization or Community",
      detail:
        "Explain the team you supported, initiatives you led, and measurable impact you created.",
    },
    {
      period: "20XX — 20XX",
      role: "Committee or Team Lead",
      organization: "Student Organization",
      detail:
        "Describe your responsibilities, collaboration style, and a meaningful result from the role.",
    },
    {
      period: "20XX",
      role: "Volunteer or Community Role",
      organization: "Community Name",
      detail:
        "Share how you contributed your time or technical skills to help a community move forward.",
    },
  ],
  skillGroups: [
    {
      label: "Languages",
      description: "Core languages I use to turn ideas into working software.",
      items: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS"],
    },
    {
      label: "Frontend",
      description: "Tools for creating responsive and accessible interfaces.",
      items: ["React", "Vite", "Responsive UI", "REST APIs", "Accessibility"],
    },
    {
      label: "Backend & Data",
      description: "Technologies for application logic, data, and integrations.",
      items: ["Node.js", "Express", "SQL", "Firebase", "API Design"],
    },
    {
      label: "Tools & Practice",
      description: "The workflow behind dependable and collaborative delivery.",
      items: ["Git", "GitHub", "Figma", "Agile", "Problem Solving", "Teamwork"],
    },
  ],
  spokenLanguages: [
    { language: "Filipino", level: "Native" },
    { language: "English", level: "Professional" },
    { language: "Add a language", level: "Your level" },
  ],
  projects: [
    {
      number: "01",
      title: "Your Flagship Project",
      type: "Full-stack application",
      description:
        "Describe the problem, your solution, and the most meaningful result. Keep it focused on value rather than only listing features.",
      tags: ["React", "TypeScript", "Node.js"],
      sourceUrl: "https://github.com/johnbenedictjavier",
      liveUrl: "",
      accent: "cyan",
    },
    {
      number: "02",
      title: "Your Mobile or Web Product",
      type: "Product design & development",
      description:
        "Explain the users you designed for, your role in the project, and one technical or design challenge you solved.",
      tags: ["UI/UX", "API", "Responsive"],
      sourceUrl: "https://github.com/johnbenedictjavier",
      liveUrl: "",
      accent: "blue",
    },
    {
      number: "03",
      title: "Your Community Project",
      type: "Technology for impact",
      description:
        "Show how you used technology, collaboration, or leadership to create a positive outcome for a group or community.",
      tags: ["JavaScript", "Collaboration", "Open Source"],
      sourceUrl: "https://github.com/johnbenedictjavier",
      liveUrl: "",
      accent: "violet",
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
