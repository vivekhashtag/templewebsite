// components/ChatWidget.jsx
"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Linkify from "react-linkify";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Sample greeting message with temple theme
  useEffect(() => {
    setMessages([
      {
        text: "Thaye Saranam! Devi Saranam! Thiruvadiye Saranam! 🙏 Namaskaram! Am your Divine Assistant. I can help with: \n\n• Temple Timings\n• Temple history\n• Regular Poojas\n• Devi Puranam\n• Festivals\n• Location \n• Contact\n• Donation ",
        isUser: false,
      },
    ]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      // Get bot response
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input }),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      const { response } = await res.json();

      // Add bot response after delay for natural feel
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: response, isUser: false }]);
        setIsTyping(false);
      }, 800);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I'm having trouble connecting. Please try again later.",
          isUser: false,
        },
      ]);
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat bubble button with temple-themed icon */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-700 text-yellow-100 rounded-full p-4 shadow-lg"
        aria-label="Chat with temple assistant"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25 }}
            className="absolute bottom-20 right-0 w-80 bg-yellow-50 rounded-lg shadow-xl overflow-hidden border border-green-200"
          >
            {/* Header with temple colors */}
            <div className="bg-green-600 text-yellow-500 p-3 flex items-center">
              <div className="w-8 h-8 rounded-full bg-yellow-300 text-white-900 flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-lg text-amber-50">
                Divine Assistant
              </h3>
            </div>

            {/* Messages area */}
            <div className="h-64 p-3 overflow-y-auto bg-yellow-50">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.isUser ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`mb-3 flex ${
                    msg.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      msg.isUser
                        ? "bg-green-700 text-yellow-100"
                        : "bg-white text-green-800 shadow"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">
                      {" "}
                      <Linkify>{msg.text}</Linkify>
                    </p>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start mb-3"
                >
                  <div className="bg-white text-green-800 p-3 rounded-lg shadow">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-green-200 p-3 bg-white"
            >
              <div className="flex">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about temple..."
                  className="flex-1 border border-green-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-500 text-sm text-green-800 placeholder-green-500"
                />
                <button
                  type="submit"
                  className="bg-green-700 text-yellow-100 px-4 rounded-r-lg hover:bg-green-800 transition flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
