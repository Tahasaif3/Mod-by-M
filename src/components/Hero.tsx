"use client"

import Image from "next/image"
import { ArrowRight, ShoppingBag, Heart, Check, Award, Sparkles } from "lucide-react"
import { RiVipCrownFill, RiShieldStarLine } from "react-icons/ri"
import { FaGem } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"


const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentBagIndex, setCurrentBagIndex] = useState(0)

  const luxuryBags = [
    {
      id: 1,
      name: "Elegance Tote",
      price: "$299",
      image: "/home.png",
      badge: "LIMITED EDITION",
      discount: "30%",
    },
    {
      id: 2,
      name: "Royal Clutch",
      price: "$249",
      image: "/bag1.webp",
      badge: "NEW ARRIVAL",
      discount: "20%",
    },
    {
      id: 3,
      name: "Prestige Shoulder",
      price: "$329",
      image: "/p5.png?height=500&width=500&text=Luxury+Bag",
      badge: "EXCLUSIVE",
      discount: "25%",
    },
  ]

  useEffect(() => {
    setIsLoaded(true)

    // Auto-rotate featured bags
    const interval = setInterval(() => {
      setCurrentBagIndex((prev) => (prev + 1) % luxuryBags.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [luxuryBags.length])

  const currentBag = luxuryBags[currentBagIndex]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  }

  return (
    <div className="relative overflow-hidden">
      {/* Luxury gold background with enhanced gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-yellow-100/30 to-white"></div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23d4af37' fillOpacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent shimmer-gold"></div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-yellow-100 opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-yellow-200 opacity-20 blur-3xl"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full bg-yellow-300 opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-yellow-300 opacity-20 rounded-tl-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-yellow-300 opacity-20 rounded-br-3xl"></div>

      <div className="max-w-[1400px] mx-auto relative p-8 md:p-12 lg:p-16">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-16 relative z-10"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Enhanced text content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2 bg-white bg-opacity-70 backdrop-blur-sm text-yellow-700 rounded-full text-sm font-medium border border-yellow-200 shadow-gold-sm"
              variants={itemVariants}
            >
              <RiVipCrownFill className="text-yellow-500" />
              <span>EXCLUSIVE COLLECTION</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800 leading-tight tracking-tight"
              variants={itemVariants}
            >
              Elevate Your Style With{" "}
              <span className="gold-text font-playfair relative">
                Luxury Bags
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 shimmer-gold"></span>
              </span>
            </motion.h1>

            <motion.p className="text-gray-600 text-lg max-w-xl leading-relaxed" variants={itemVariants}>
              Discover our handcrafted collection of premium designer bags, where timeless elegance meets contemporary
              fashion. Each piece tells a story of craftsmanship and sophistication.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-5 pt-4" variants={itemVariants}>
              <button className="group relative overflow-hidden luxury-gold-button px-8 py-4 rounded-lg shadow-gold-lg flex items-center justify-center gap-2 font-medium">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Shop Collection
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
              </button>

              <button className="relative overflow-hidden border-2 border-yellow-500 px-8 py-4 text-yellow-700 rounded-lg hover:shadow-gold-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium group">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Bestsellers
                  <Sparkles size={18} className="text-yellow-500 group-hover:scale-110 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </motion.div>

            <motion.div className="flex items-center gap-8 pt-8" variants={itemVariants}>
              <div className="flex -space-x-4">
                {[1, 2, 3].map((item, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gray-200 shadow-gold-sm relative"
                    style={{ zIndex: 3 - index }}
                  >
                    <Image
                      src={`/rev3.jpg?height=48&width=48&text=User${index + 1}`}
                      alt={`Customer ${index + 1}`}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                ))}
                <div
                  className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-600 shadow-gold-sm flex items-center justify-center text-white text-xs font-bold relative"
                  style={{ zIndex: 0 }}
                >
                  +18
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-bold gold-text">2,500+</span> happy customers
                </p>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <span className="ml-1 text-xs text-gray-500">(4.9)</span>
                </div>
              </div>
            </motion.div>

            {/* Added luxury badges */}
            <motion.div className="flex flex-wrap gap-3 pt-4" variants={itemVariants}>
              {[
                { icon: <FaGem className="text-yellow-500 mr-1" />, text: "Premium Quality" },
                { icon: <RiShieldStarLine className="text-yellow-500 mr-1" />, text: "Authenticity Guaranteed" },
                { icon: <ShoppingBag className="text-yellow-500 w-4 h-4 mr-1" />, text: "Free Shipping" },
              ].map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white bg-opacity-70 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium border border-yellow-200 shadow-gold-sm text-yellow-700 hover:shadow-gold-md hover:bg-white transition-all duration-300"
                >
                  {badge.icon}
                  {badge.text}
                </div>
              ))}
            </motion.div>

            {/* Added features list */}
            <motion.div className="pt-6 space-y-3" variants={itemVariants}>
              <h3 className="text-sm font-medium text-gray-700">Why Choose Our Luxury Bags:</h3>
              <ul className="space-y-2">
                {[
                  "Handcrafted by master artisans",
                  "Premium Italian leather",
                  "Lifetime warranty",
                  "Complimentary monogramming",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center mr-2 shadow-gold-sm">
                      <Check size={12} className="text-yellow-600" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Enhanced product display */}
          <motion.div className="lg:w-1/2 relative" variants={fadeInVariants}>
            {/* Decorative circles with animation */}
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full border-2 border-yellow-200 opacity-60 animate-spin-slow"></div>
            <div className="absolute -bottom-5 -right-5 w-60 h-60 rounded-full border-2 border-yellow-200 opacity-60 animate-spin-slow-reverse"></div>

            {/* Bag selector dots */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
              {luxuryBags.map((bag, index) => (
                <button
                  key={bag.id}
                  onClick={() => setCurrentBagIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentBagIndex === index ? "bg-yellow-500 scale-125" : "bg-yellow-200 hover:bg-yellow-300"
                  }`}
                  aria-label={`View ${bag.name}`}
                />
              ))}
            </div>

            {/* Main product display with enhanced styling */}
            <AnimatePresence mode="wait">
              <motion.div
                className="relative z-10 bg-white p-8 rounded-2xl shadow-gold-xl rotate-3 hover:rotate-0 transition-all duration-500 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                key={currentBag.id}
              >
                {/* Quick action buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-yellow-50 hover:bg-yellow-100 p-2 rounded-full transition-colors shadow-gold-sm hover:shadow-gold-md">
                    <Heart size={20} className="text-yellow-600 hover:text-yellow-700" />
                  </button>
                  <button className="bg-yellow-50 hover:bg-yellow-100 p-2 rounded-full transition-colors shadow-gold-sm hover:shadow-gold-md">
                    <ShoppingBag size={20} className="text-yellow-600 hover:text-yellow-700" />
                  </button>
                </div>

                {/* Enhanced product image with gradient background */}
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100/50 p-6">
                  <div className="absolute inset-0 bg-yellow-50/30 opacity-30"></div>

                  {/* Product name overlay */}
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-md text-sm font-medium text-yellow-700 shadow-gold-sm z-20">
                    {currentBag.name}
                  </div>

                  <Image
                    src={currentBag.image || "/placeholder.svg"}
                    alt={currentBag.name}
                    width={500}
                    height={500}
                    className="rounded-lg object-contain transform group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl relative z-10"
                    priority
                  />

                  {/* Subtle light effect */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  {/* Animated sparkles */}
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-300 opacity-0 group-hover:opacity-70 rounded-full"
                      style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`,
                        animation: `sparkle ${1 + Math.random() * 2}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 1}s`,
                      }}
                    ></div>
                  ))}
                </div>

                {/* Enhanced price tag */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-5 py-3 rounded-lg shadow-gold-lg transform rotate-3 group-hover:rotate-0 transition-all duration-500">
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white animate-pulse flex items-center justify-center text-[10px] font-bold text-yellow-600">
                    !
                  </div>
                  <p className="text-sm font-medium">{currentBag.badge}</p>
                  <p className="text-xl font-bold">{currentBag.price}</p>
                </div>

                {/* Added authenticity seal */}
                <div className="absolute -bottom-3 -left-3 w-16 h-16">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white shadow-gold-lg flex items-center justify-center">
                      <RiVipCrownFill className="text-yellow-600 text-xl" />
                    </div>
                  </div>
                </div>

                {/* Added 3D effect elements */}
                <div className="absolute inset-0 rounded-2xl border border-yellow-200 transform -rotate-3 opacity-30 group-hover:opacity-0 transition-all duration-500"></div>
                <div className="absolute inset-0 rounded-2xl border border-yellow-200 transform -rotate-6 opacity-20 group-hover:opacity-0 transition-all duration-500"></div>
              </motion.div>
            </AnimatePresence>

            {/* Enhanced floating mini product cards */}
            <motion.div
              className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-gold-lg flex items-center gap-4 w-56 animate-float z-30 hover:shadow-gold-xl transition-shadow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-yellow-50 rounded-lg overflow-hidden flex items-center justify-center border border-yellow-100">
                <Image
                  src="/bag1.webp"
                  alt="Mini bag"
                  width={64}
                  height={64}
                  className="object-contain hover:scale-110 transition-transform"
                />
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <span className="px-1.5 py-0.5 bg-yellow-100 text-yellow-700 rounded text-[10px] font-medium">
                    BESTSELLER
                  </span>
                </div>
                <p className="text-xs text-gray-600">Crossbody Bag</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-yellow-700">$189</p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-10 -right-5 bg-white p-4 rounded-xl shadow-gold-lg flex items-center gap-4 w-56 z-30 hover:shadow-gold-xl transition-shadow"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="w-16 h-16 bg-yellow-50 rounded-lg overflow-hidden flex items-center justify-center border border-yellow-100">
                <Image
                  src="/bag1.webp"
                  alt="Mini bag"
                  width={64}
                  height={64}
                  className="object-contain hover:scale-110 transition-transform"
                />
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <span className="px-1.5 py-0.5 bg-yellow-100 text-yellow-700 rounded text-[10px] font-medium">
                    NEW
                  </span>
                </div>
                <p className="text-xs text-gray-600">Tote Bag</p>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-yellow-700">$249</p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Added floating discount badge */}
            <motion.div
              className="absolute top-1/2 -right-8 transform -translate-y-1/2 rotate-12 z-30 animate-pulse-slow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-gold-lg flex flex-col items-center justify-center text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/50 to-transparent"></div>
                <span className="text-xs font-medium relative z-10">SAVE</span>
                <span className="text-2xl font-bold relative z-10">{currentBag.discount}</span>
                <span className="text-xs relative z-10">TODAY</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
              </div>
            </motion.div>

            {/* Added award badge */}
            <motion.div
              className="absolute -top-5 left-1/4 z-30"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="bg-white px-4 py-2 rounded-full shadow-gold-md flex items-center gap-2 border border-yellow-200">
                <Award className="text-yellow-500 w-4 h-4" />
                <span className="text-xs font-medium text-yellow-700">Award Winning Design</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Added luxury brands section */}
        <motion.div
          className="mt-20 pt-10 border-t border-yellow-100 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <div className="flex items-center justify-center mb-8">
            <div className="h-[1px] w-16 bg-yellow-300 mr-4"></div>
            <p className="text-center text-gray-500 text-sm font-medium tracking-widest">TRUSTED BY PREMIUM BRANDS</p>
            <div className="h-[1px] w-16 bg-yellow-300 ml-4"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {[
              { name: "GUCCI", logo: "/gucci.png?height=30&width=100&text=GUCCI" },
              { name: "PRADA", logo: "/prada-logo-1.png?height=30&width=100&text=PRADA" },
              { name: "CHANEL", logo: "/chanel.png?height=30&width=100&text=CHANEL" },
              { name: "DIOR", logo: "/dior.png?height=30&width=100&text=DIOR" },
              { name: "HERMÈS", logo: "/hermes.png?height=30&width=100&text=HERMÈS" },
            ].map((brand, index) => (
              <div
                key={index}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110"
              >
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  width={100}
                  height={30}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>      
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent shimmer-gold"></div>
    </div>
  )
}

export default Hero
