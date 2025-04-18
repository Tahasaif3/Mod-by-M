"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RiVipCrownFill } from "react-icons/ri"
import Image from "next/image"

interface WelcomeAnimationProps {
  onAnimationComplete: () => void
  brandName?: string
  logoSrc?: string
}

export default function WelcomeAnimation({
  onAnimationComplete,
  brandName = "Modé by M",
  logoSrc = "/placeholder.svg?height=100&width=100&text=M",
}: WelcomeAnimationProps) {
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    // Prevent scrolling during animation
    document.body.style.overflow = "hidden"

    // Allow scrolling after animation completes
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  const handleAnimationComplete = () => {
    setAnimationComplete(true)
    setTimeout(() => {
      onAnimationComplete()
    }, 500)
  }

  return (
    <AnimatePresence mode="wait">
      {!animationComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Door */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#8b6d2b] to-[#d4af37] z-20"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 1.5, delay: 2, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={handleAnimationComplete}
          >
            <div className="absolute top-0 right-0 h-full w-[1px] bg-white/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-white/30"></div>
              </div>
            </div>

            {/* Door handle */}
            <div className="absolute top-1/2 right-6 transform -translate-y-1/2">
              <div className="w-3 h-20 bg-[#fbd38d] rounded-full shadow-[0_0_15px_rgba(251,211,141,0.7)]"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
              <div className="absolute top-10 left-10 w-40 h-40 rounded-full border border-white/20"></div>
              <div className="absolute bottom-20 left-20 w-60 h-60 rounded-full border border-white/10"></div>
              <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full border border-white/15"></div>
            </div>
          </motion.div>

          {/* Right Door */}
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#8b6d2b] to-[#d4af37] z-20"
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, delay: 2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute top-0 left-0 h-full w-[1px] bg-white/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-white/30"></div>
              </div>
            </div>

            {/* Door handle */}
            <div className="absolute top-1/2 left-6 transform -translate-y-1/2">
              <div className="w-3 h-20 bg-[#fbd38d] rounded-full shadow-[0_0_15px_rgba(251,211,141,0.7)]"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
              <div className="absolute top-20 right-10 w-40 h-40 rounded-full border border-white/20"></div>
              <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full border border-white/10"></div>
              <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full border border-white/15"></div>
            </div>
          </motion.div>

          {/* Center content that appears before doors open */}
          <motion.div
            className="relative z-30 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative mb-6">
              <div className="w-32 h-32 mx-auto relative">
                <Image
                  src={logoSrc || "/placeholder.svg"}
                  alt={brandName}
                  width={100}
                  height={100}
                  className="object-contain w-full h-full"
                />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  initial={{ boxShadow: "0 0 0 rgba(251,211,141,0)" }}
                  animate={{ boxShadow: "0 0 40px rgba(251,211,141,0.7)" }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                ></motion.div>
              </div>

              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 text-yellow-300"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <RiVipCrownFill className="w-full h-full" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-josefin">
                Welcome to <span className="text-[#fbd38d]">{brandName}</span>
              </h1>
              <p className="text-white/80 max-w-md mx-auto">Discover the world of luxury and elegance</p>
            </motion.div>

            {/* Animated loading indicator */}
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 rounded-full bg-[#fbd38d]"
                    initial={{ scale: 0.8, opacity: 0.5 }}
                    animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Background pattern */}
          <div className="absolute inset-0 z-10 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "60px 60px",
              }}
            ></div>
          </div>

          {/* Light beam effect */}
          <motion.div
            className="absolute inset-0 z-15 opacity-0 pointer-events-none"
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-40 bg-gradient-to-r from-transparent via-white to-transparent rotate-45 blur-xl"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
