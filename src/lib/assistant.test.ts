import { describe, expect, it } from "vitest";
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

  it("offers supported topics for unknown questions", () => {
    expect(getAssistantResponse("What is your favorite movie?")).toContain("skills");
  });

  it("answers project questions with confirmed work", () => {
    const response = getAssistantResponse("Tell me about your projects");
    expect(response).toContain("Tech Revive");
    expect(response).toContain("ELFRESCO PH");
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
});
