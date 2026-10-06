import { describe, expect, it } from "vitest";
import { getEventsNewestFirst } from "../data/portfolio";
import { getAssistantResponse } from "./assistant";

describe("getAssistantResponse", () => {
  it("answers skill questions from portfolio data", () => {
    expect(getAssistantResponse("What are your strongest skills?")).toContain("JavaScript");
  });

  it("answers contact questions", () => {
    expect(getAssistantResponse("How can I contact you?")).toContain("johnbenedictjavier15@gmail.com");
  });

  it("greets visitors", () => {
    expect(getAssistantResponse("Hello there")).toContain("Javi AI");
  });

  it.each([
    "Who do u like?",
    "Sino nagugustuhan mo?",
    "Sino crush mo?",
    "Kanino ka lang?",
    "Sino nasa heart mo?",
  ])("answers romantic questions with a rose for %s", (question) => {
    expect(getAssistantResponse(question)).toBe("🌹");
  });

  it("offers supported topics for unknown questions", () => {
    expect(getAssistantResponse("What is your favorite movie?")).toContain("skills");
  });

  it("answers project questions with confirmed work", () => {
    const response = getAssistantResponse("Tell me about your projects");
    expect(response).toContain("Tech Revive");
    expect(response).toContain("ELFRESCO PH");
    expect(response).toContain("Laurel & Ladle");
    expect(response).toContain("Barangay Information System");
    expect(response).toContain("Payroll Management System");
  });

  it("answers award questions without placeholder achievements", () => {
    const response = getAssistantResponse("What awards have you received?");
    expect(response).toContain("Senior High School Rank 1");
    expect(response).not.toContain("Add an Award");
  });

  it("answers questions about the DOST-SEI scholarship", () => {
    const response = getAssistantResponse("Are you a DOST scholar?");
    expect(response).toContain("DOST-SEI Merit Scholar");
    expect(response).toContain("2024");
  });

  it("answers event and conference questions", () => {
    const response = getAssistantResponse("Which conferences have you attended?");
    expect(response).toContain("WOCEE");
    expect(response).toContain("PCTA");
  });

  it("orders events from newest to oldest", () => {
    const events = getEventsNewestFirst();
    expect(events.map((event) => event.shortTitle)).toEqual([
      "AWS Builder Day Talk",
      "AIDLC Workshop with Kiro",
      "WOCEE",
      "PCTA Philippine Tech Show",
      "IoT Conference Philippines",
    ]);
  });

  it("includes AI assistants in skill answers", () => {
    const response = getAssistantResponse("Which tools and AI assistants do you use?");
    expect(response).toContain("VS Code");
    expect(response).toContain("ChatGPT");
    expect(response).toContain("OpenCode");
  });
});
