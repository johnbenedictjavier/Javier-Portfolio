import { useEffect, useRef, useState, type FormEvent } from "react";
import { Bot, MessageCircle, RotateCcw, Send, Sparkles, X } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { getAssistantResponse } from "../lib/assistant";

type Message = {
  id: number;
  role: "assistant" | "user";
  text: string;
};

type ChatbotProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function Chatbot({ open, onOpenChange }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: "assistant", text: portfolio.assistant.welcome },
  ]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);
  const responseTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (open) {
      window.setTimeout(() => inputRef.current?.focus(), 180);
    }
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, pending]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        onOpenChange(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (responseTimer.current) window.clearTimeout(responseTimer.current);
    };
  }, [onOpenChange, open]);

  const sendMessage = (value: string) => {
    const question = value.trim();
    if (!question || pending) return;

    setMessages((current) => [
      ...current,
      { id: nextId.current++, role: "user", text: question },
    ]);
    setInput("");
    setPending(true);

    responseTimer.current = window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: nextId.current++,
          role: "assistant",
          text: getAssistantResponse(question),
        },
      ]);
      setPending(false);
    }, 520);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  const resetChat = () => {
    if (responseTimer.current) window.clearTimeout(responseTimer.current);
    setPending(false);
    setMessages([{ id: nextId.current++, role: "assistant", text: portfolio.assistant.welcome }]);
  };

  return (
    <div className={`chatbot ${open ? "is-open" : ""}`}>
      <section
        className="chatbot-panel"
        id="portfolio-assistant"
        aria-label={`${portfolio.assistant.name} portfolio assistant`}
        aria-hidden={!open}
        inert={!open}
      >
        <header className="chatbot-header">
          <div className="chatbot-identity">
            <span className="chatbot-avatar" aria-hidden="true">
              <Bot size={19} />
              <i />
            </span>
            <span>
              <strong>{portfolio.assistant.name}</strong>
              <small><i /> Local portfolio guide</small>
            </span>
          </div>
          <div className="chatbot-actions">
            <button type="button" onClick={resetChat} aria-label="Reset conversation">
              <RotateCcw size={16} />
            </button>
            <button type="button" onClick={() => onOpenChange(false)} aria-label="Close assistant">
              <X size={18} />
            </button>
          </div>
        </header>

        <div className="chatbot-messages" aria-live="polite">
          {messages.map((message) => (
            <div className={`chat-message ${message.role}`} key={message.id}>
              {message.role === "assistant" && <Sparkles size={13} aria-hidden="true" />}
              <p>{message.text}</p>
            </div>
          ))}
          {messages.length === 1 && (
            <div className="chat-suggestions" aria-label="Suggested questions">
              {portfolio.assistant.suggestions.map((suggestion) => (
                <button type="button" onClick={() => sendMessage(suggestion)} key={suggestion}>
                  {suggestion}
                </button>
              ))}
            </div>
          )}
          {pending && (
            <div className="chat-message assistant typing" aria-label="Assistant is typing">
              <span />
              <span />
              <span />
            </div>
          )}
          <div ref={endRef} />
        </div>

        <form className="chatbot-input" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="assistant-question">
            Ask a question about Javier
          </label>
          <input
            ref={inputRef}
            id="assistant-question"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about skills, projects..."
            autoComplete="off"
            tabIndex={open ? 0 : -1}
          />
          <button type="submit" disabled={!input.trim() || pending} aria-label="Send message">
            <Send size={17} />
          </button>
        </form>
      </section>

      <button
        className="chatbot-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="portfolio-assistant"
        onClick={() => onOpenChange(!open)}
      >
        <span className="chatbot-toggle-icon">
          {open ? <X size={22} /> : <MessageCircle size={22} />}
        </span>
        <span className="chatbot-toggle-label">{open ? "Close" : "Ask my AI"}</span>
        {!open && <i className="chatbot-notification" />}
      </button>
    </div>
  );
}
