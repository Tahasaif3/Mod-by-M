"use client"

import { useState, useEffect } from "react"
import GetUpdate from "@/components/GetUpdate";
import LatestBlog from "@/components/LatestBlogs";
import Logos from "@/components/Logos";
import ProductList from "@/components/ProductList";
import Products from "@/components/Products";
import SupportSection from "@/components/SupportSection";
import TopCategories from "@/components/TopCategories";
import TrendingProducts2 from "@/components/TrendingProducts2";
import WelcomeAnimation from "@/components/WelcomeAnimation"
import UniqueFeatures from "@/components/UniqueFeatures";
import Hero from "@/components/Hero";

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Check if the user has seen the animation before
    const hasSeenAnimation = localStorage.getItem("hasSeenAnimation")

    if (hasSeenAnimation) {
      // Skip animation if already seen
      setShowAnimation(false)
      setShowContent(true)
    } else {
      // Show animation for first-time visitors
      setShowAnimation(true)
      setShowContent(false)
    }
  }, [])

  const handleAnimationComplete = () => {
    // Store that the user has seen the animation
    localStorage.setItem("hasSeenAnimation", "true")
    setShowAnimation(false)
    setShowContent(true)
  }

  return (
    <main>
    {showAnimation && <WelcomeAnimation onAnimationComplete={handleAnimationComplete} brandName="Modé by M" />}
    <div className={`transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`}>
    <div className="overflow-hidden">
      <Hero />
      <Products />
      <ProductList />
      <SupportSection heading=" What Modé by M Offers!"/>
      <UniqueFeatures />
      <TrendingProducts2 />
      <TopCategories />

      <GetUpdate />
      <Logos />
      <LatestBlog />
    </div>
    </div>
    </main>
  );
}
