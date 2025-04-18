"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"
import { RiVipCrownFill } from "react-icons/ri"
import { IoIosArrowForward } from "react-icons/io"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("email", email)

    try {
      const response = await fetch("https://formspree.io/f/xanevwne", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setShowSuccess(true)
        setEmail("")
        setTimeout(() => setShowSuccess(false), 3000)
      } else {
        alert("Something went wrong. Please try again later.")
      }
    } catch (error) {
      console.log(error)
      alert("Error submitting form.")
    }
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Top decorative line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 shimmer-gold"></div>

      {/* Main footer content */}
      <div className="bg-gradient-to-b from-yellow-50 to-white py-16 px-6 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-yellow-200 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full border border-yellow-200 opacity-20"></div>

        <div className="max-w-[1177px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {/* Newsletter Section */}
            <div className="flex flex-col items-center text-center sm:text-center md:items-start md:text-left">
              <div className="flex items-center mb-6">
                <RiVipCrownFill className="text-yellow-500 mr-2 text-3xl" />
                <h3 className="text-3xl font-bold gold-text font-josefin">Hekto</h3>
              </div>

              <form
                onSubmit={handleSubmit}
                className="relative w-full mb-6 group"
              >
                <div className="flex items-center mb-4 justify-center sm:mb-6 relative overflow-hidden rounded-md shadow-gold-sm">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="p-3 border border-yellow-200 rounded-l w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 gold-input-bg text-gray-700"
                    required
                  />
                  <button
                    type="submit"
                    className="luxury-gold-button px-5 py-3 rounded-r whitespace-nowrap text-base font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 flex items-center"
                  >
                    Sign Up
                    <IoIosArrowForward className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 group-hover:w-full transition-all duration-500"></div>
                {showSuccess && (
                  <p className="text-green-600 text-sm mt-1 font-medium">
                    Thank you! You`ve successfully subscribed.
                  </p>
                )}
              </form>

              <h4 className="text-sm font-semibold text-gray-700 mb-2 font-josefin">Contact Info</h4>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600 hover:text-yellow-700 transition-colors">
                  <div className="gold-icon-bg p-1.5 rounded-full mr-2">
                    <FaMapMarkerAlt className="text-yellow-600 text-xs" />
                  </div>
                  <p className="text-sm">Sindh, Pakistan</p>
                </div>
                <div className="flex items-center text-gray-600 hover:text-yellow-700 transition-colors">
                  <div className="gold-icon-bg p-1.5 rounded-full mr-2">
                    <FaPhoneAlt className="text-yellow-600 text-xs" />
                  </div>
                  <p className="text-sm">+92 123 456 7890</p>
                </div>
                <div className="flex items-center text-gray-600 hover:text-yellow-700 transition-colors">
                  <div className="gold-icon-bg p-1.5 rounded-full mr-2">
                    <FaEnvelope className="text-yellow-600 text-xs" />
                  </div>
                  <p className="text-sm">support@hekto.com</p>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-col items-center text-center sm:text-center md:items-start md:text-left">
              <h3 className="text-lg font-bold mb-6 text-gray-800 font-josefin relative inline-block">
                Categories
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 gold-gradient"></span>
              </h3>
              <ul className="space-y-3">
                {[
                  "Laptops & Computers",
                  "Cameras & Photography",
                  "Smart Phones & Tablets",
                  "Video Games & Consoles",
                  "Waterproof Headphones",
                ].map((item, index) => (
                  <li key={index} className="group">
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-yellow-700 transition-colors flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-yellow-300 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Care */}
            <div className="flex flex-col items-center text-center sm:text-center md:items-start md:text-left">
              <h3 className="text-lg font-bold mb-6 text-gray-800 font-josefin relative inline-block">
                Customer Care
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 gold-gradient"></span>
              </h3>
              <ul className="space-y-3">
                {["My Account", "Discount", "Returns", "Order History", "Order Tracking"].map((item, index) => (
                  <li key={index} className="group">
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-yellow-700 transition-colors flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-yellow-300 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pages */}
            <div className="flex flex-col items-center text-center sm:text-center md:items-start md:text-left">
              <h3 className="text-lg font-bold mb-6 text-gray-800 font-josefin relative inline-block">
                Pages
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 gold-gradient"></span>
              </h3>
              <ul className="space-y-3">
                {["Blog", "Browse the Shop", "Category", "Pre-Built Pages", "WooCommerce Pages"].map((item, index) => (
                  <li key={index} className="group">
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-yellow-700 transition-colors flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-yellow-300 mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="overflow-hidden w-full py-5 px-6 sm:px-12 md:px-24 lg:px-52 shadow-inner">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#6C6F80] text-[14px] sm:text-[16px]">
            © Modé by M — All Rights Reserved
          </p>
          <div className="flex justify-center mt-5">
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebookF className="h-4 w-4" />, href: "/" },
                { icon: <FaInstagram className="h-4 w-4" />, href: "/" },
                { icon: <FaTwitter className="h-4 w-4" />, href: "/" },
                { icon: <FaLinkedinIn className="h-4 w-4" />, href: "/" },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full luxury-social-button"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
    </footer>
  )
}

export default Footer
