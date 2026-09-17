import { portfolio } from "../data/portfolio";

type Intent = {
  keywords: readonly string[];
  answer: () => string;
};

const joinSkillNames = (items: readonly { readonly name: string }[]) =>
  items.map((item) => item.name).join(", ");

const intents: readonly Intent[] = [
  {
    keywords: ["skill", "skills", "stack", "technology", "technologies", "tools", "strongest", "good at"],
    answer: () =>
      `Javier's toolkit includes ${portfolio.skillGroups
        .map((group) => `${group.label}: ${joinSkillNames(group.items)}`)
        .join("; ")}.`,
  },
  {
    keywords: ["project", "projects", "portfolio", "built", "build", "work", "case study"],
    answer: () =>
      `Featured work includes ${portfolio.projects
        .map((project) => `${project.title} (${project.type})`)
        .join(", ")}. Open the Selected Work section for the project details and technology used.`,
  },
  {
    keywords: ["education", "school", "university", "college", "degree", "study", "studied", "course"],
    answer: () =>
      portfolio.education
        .map((item) => `${item.degree} at ${item.school} (${item.period}).`)
        .join(" "),
  },
  {
    keywords: ["leadership", "leader", "organization", "community", "volunteer", "led", "team lead"],
    answer: () =>
      `Javier's leadership experience includes ${portfolio.leadership
        .map((item) => `${item.role} with ${item.organization}`)
        .join(", ")}. You can find the responsibilities and impact in the Journey section.`,
  },
  {
    keywords: ["award", "awards", "achievement", "achievements", "recognition", "honor", "honours"],
    answer: () => {
      const confirmedAwards: Array<{
        readonly title: string;
        readonly organization: string;
        readonly date: string;
      }> = [];
      for (const group of portfolio.awardGroups) {
        for (const award of group.cards) {
          if (!award.isPlaceholder) confirmedAwards.push(award);
        }
      }
      return `His highlighted academic distinctions are ${confirmedAwards
        .map((award) => `${award.title} from ${award.organization} (${award.date})`)
        .join(", ")}.`;
    },
  },
  {
    keywords: ["language", "languages", "speak", "spoken"],
    answer: () =>
      `Spoken languages: ${portfolio.spokenLanguages
        .map((item) => `${item.language} (${item.level})`)
        .join(", ")}. Programming languages include ${joinSkillNames(portfolio.skillGroups[0].items)}.`,
  },
  {
    keywords: ["contact", "email", "reach", "message", "hire", "connect", "talk"],
    answer: () =>
      `The best way to reach Javier is at ${portfolio.email}. You can also use the message form below or connect through ${portfolio.socials
        .slice(0, 2)
        .map((social) => social.label)
        .join(" and ")}.`,
  },
  {
    keywords: ["social", "socials", "github", "linkedin", "instagram", "facebook", "tiktok", "profile"],
    answer: () =>
      `You can find Javier on ${portfolio.socials
        .map((social) => `${social.label} (${social.handle})`)
        .join(", ")}. All links are available in the Contact section.`,
  },
  {
    keywords: ["available", "availability", "opportunity", "job", "internship", "freelance", "collaborate"],
    answer: () =>
      `${portfolio.availability}. If you have a role, project, or collaboration in mind, send a message through the Contact section.`,
  },
  {
    keywords: ["resume", "cv", "curriculum vitae"],
    answer: () =>
      portfolio.resumeUrl
        ? "A resume is available from the main hero section."
        : "The resume link has not been added yet. You can still ask about skills, education, projects, or contact Javier directly.",
  },
  {
    keywords: ["location", "based", "live", "where are you"],
    answer: () => `Javier is currently based in ${portfolio.location}.`,
  },
  {
    keywords: ["about", "who", "yourself", "javier", "john", "bio", "introduce"],
    answer: () =>
      `${portfolio.name} is a ${portfolio.course} student based in ${portfolio.location}. ${portfolio.summary}`,
  },
];

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export function getAssistantResponse(question: string): string {
  const normalized = normalize(question);

  if (!normalized) {
    return "Type a question and I can help you explore Javier's portfolio.";
  }

  if (/^(hi|hello|hey|good morning|good afternoon|good evening)\b/.test(normalized)) {
    return `Hello! I'm ${portfolio.assistant.name}. Ask me about Javier's projects, skills, education, leadership, awards, or contact details.`;
  }

  const words = new Set(normalized.split(" "));
  let bestIntent: Intent | undefined;
  let bestScore = 0;

  for (const intent of intents) {
    const score = intent.keywords.reduce((total, keyword) => {
      if (keyword.includes(" ")) {
        return total + (normalized.includes(keyword) ? 3 : 0);
      }
      return total + (words.has(keyword) ? 2 : normalized.includes(keyword) ? 1 : 0);
    }, 0);

    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  }

  if (bestIntent && bestScore > 0) {
    return bestIntent.answer();
  }

  return "I don't have that detail yet, but I can tell you about Javier's skills, projects, education, awards, leadership, languages, availability, or contact information.";
}
