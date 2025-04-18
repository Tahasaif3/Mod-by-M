"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaRobot, FaTimes, FaPaperPlane, FaRegClock } from "react-icons/fa"
import { RiVipCrownFill } from "react-icons/ri"

// Define the types for our messages
type MessageType = {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

// Define the FAQ data
const faqData = [
  {
    keywords: ["shipping", "delivery", "ship", "arrive", "when"],
    response:
      "We offer free shipping on all orders over $250. Standard delivery takes 3-5 business days, while express shipping takes 1-2 business days. International shipping is available to select countries.",
  },
  {
    keywords: ["return", "exchange", "refund", "money back"],
    response:
      "We offer a 30-day return policy for all unused items in their original packaging. Refunds will be processed within 7-10 business days after we receive your return.",
  },
  {
    keywords: ["material", "leather", "fabric", "made", "quality"],
    response:
      "Our luxury bags are crafted from premium Italian leather, ethically sourced and handcrafted by master artisans. Each piece undergoes rigorous quality control to ensure exceptional craftsmanship.",
  },
  {
    keywords: ["price", "cost", "discount", "sale", "offer", "promotion"],
    response:
      "Our prices reflect the premium quality and craftsmanship of our products. We occasionally offer seasonal promotions and exclusive discounts to our newsletter subscribers.",
  },
  {
    keywords: ["size", "dimension", "measurement", "how big", "capacity"],
    response:
      "Detailed dimensions for each bag can be found on the product page. We offer various sizes from compact clutches to spacious totes to suit different needs and occasions.",
  },
  {
    keywords: ["color", "available", "options", "collection"],
    response:
      "Our current collection features a range of classic and seasonal colors. Each product page displays all available color options. Some limited edition colors may sell out quickly.",
  },
  {
    keywords: ["care", "clean", "maintain", "maintenance"],
    response:
      "To maintain the beauty of your luxury bag, store it in the provided dust bag when not in use, avoid exposure to direct sunlight and moisture, and clean with a soft, dry cloth. For leather bags, we recommend occasional conditioning with a leather-specific product.",
  },
  {
    keywords: ["warranty", "guarantee", "lifetime"],
    response:
      "All our products come with a 2-year warranty against manufacturing defects. Our premium collection includes a lifetime warranty for structural elements.",
  },
  {
    keywords: ["authenticity", "authentic", "real", "genuine", "fake"],
    response:
      "Every Modé by M bag comes with a certificate of authenticity and a unique serial number. We guarantee 100% authentic products crafted with the finest materials.",
  },
  {
    keywords: ["custom", "customize", "personalize", "monogram"],
    response:
      "We offer personalization services including monogramming and custom color options on select styles. Please allow an additional 5-7 business days for customized orders.",
  },
]

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: "welcome",
      text: "Hello! Welcome to Modé by M. How can I assist you with our luxury bags today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to the bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Handle sending a message
  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    // Add user message
    const userMessage: MessageType = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot thinking and then respond
    setTimeout(() => {
      const botResponse = generateResponse(inputValue)
      const botMessage: MessageType = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  // Generate a response based on user input
  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    // Check for greetings
    if (/^(hi|hello|hey|greetings)/.test(input)) {
      return "Hello! How can I help you with our luxury bags collection today?"
    }

    // Check for thanks
    if (/thank|thanks|thank you/.test(input)) {
      return "You're welcome! Is there anything else I can help you with?"
    }

    // Check for goodbyes
    if (/bye|goodbye|see you|farewell/.test(input)) {
      return "Thank you for chatting with us! Feel free to return if you have more questions. Have a wonderful day!"
    }

    // Check for FAQ matches
    for (const faq of faqData) {
      if (faq.keywords.some((keyword) => input.includes(keyword))) {
        return faq.response
      }
    }

    // Default response if no match
    return "I'm not sure I understand. Could you please rephrase your question? You can ask about our bags, materials, shipping, returns, or care instructions."
  }

  // Handle pressing Enter to send
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full luxury-gold-button flex items-center justify-center shadow-gold-lg hover:shadow-gold-xl transition-all duration-300 group"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <FaTimes className="text-xl" />
        ) : (
          <div className="relative">
            <FaRobot className="text-xl" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          </div>
        )}
      </button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-full max-w-sm bg-white rounded-lg shadow-gold-xl border border-yellow-100 overflow-hidden"
          >
            {/* Chat header */}
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-4 text-white flex items-center justify-between">
              <div className="flex items-center">
                <RiVipCrownFill className="text-yellow-200 mr-2 text-xl" />
                <div>
                  <h3 className="font-bold font-josefin">Modé by M Assistant</h3>
                  <p className="text-xs text-yellow-100">Ask about our luxury bags</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-yellow-100 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <FaTimes />
              </button>
            </div>

            {/* Chat messages */}
            <div className="h-80 overflow-y-auto p-4 bg-gradient-to-b from-yellow-50 to-white">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-yellow-600 text-white rounded-tr-none"
                        : "bg-white border border-yellow-200 text-gray-700 rounded-tl-none shadow-gold-sm"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs mt-1 opacity-70 text-right">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="bg-white border border-yellow-200 rounded-lg rounded-tl-none p-3 shadow-gold-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce mr-1"></div>
                      <div
                        className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce mr-1"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Chat input */}
            <div className="p-3 border-t border-yellow-100 bg-white">
              <div className="flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your question here..."
                  className="flex-1 p-2 border border-yellow-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-300 gold-input-bg"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={inputValue.trim() === ""}
                  className={`p-2 rounded-r-md ${
                    inputValue.trim() === "" ? "bg-gray-200 text-gray-400" : "luxury-gold-button text-white"
                  }`}
                >
                  <FaPaperPlane />
                </button>
              </div>
              <div className="flex items-center justify-between mt-2 px-1">
                <div className="flex items-center text-xs text-gray-500">
                  <FaRegClock className="mr-1" />
                  <span>Available 24/7</span>
                </div>
                <p className="text-xs text-gray-500">Powered by Modé by M</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
