import { describe, expect, it } from "vitest";
import { getAssistantResponse } from "./assistant";

describe("getAssistantResponse", () => {
  it("answers skill questions from portfolio data", () => {
    expect(getAssistantResponse("What are your strongest skills?")).toContain("JavaScript");
  });

  it("answers contact questions", () => {
    expect(getAssistantResponse("How can I contact you?")).toContain("hello@yourdomain.com");
  });

  it("greets visitors", () => {
    expect(getAssistantResponse("Hello there")).toContain("Javi AI");
  });

  it("offers supported topics for unknown questions", () => {
    expect(getAssistantResponse("What is your favorite movie?")).toContain("skills");
  });
});
