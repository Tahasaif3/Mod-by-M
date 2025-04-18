"use client"

import { useState, useEffect } from "react"

export function useChatbot() {
  const [isChatbotMounted, setIsChatbotMounted] = useState(false)

  useEffect(() => {
    // Wait a few seconds before showing the chatbot to avoid overwhelming users
    const timer = setTimeout(() => {
      setIsChatbotMounted(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return { isChatbotMounted }
}
