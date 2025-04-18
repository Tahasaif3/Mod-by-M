"use client"

import Link from "next/link"
import { IoMenu } from "react-icons/io5"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import SearchButton from "./SearchButton"
import { RiVipCrownFill } from "react-icons/ri"

const Navbar2 = () => {
  const [open, setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("Home")

  const closeMenu = () => {
    setOpen(false)
  }

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName)
    closeMenu()
  }

  return (
    <div className="max-w-[1177px] sticky top-[50px] z-40 px-4 sm:px-6 mx-auto golden-bg rounded-b-lg shadow-gold">
      {/* Luxury gold accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-300 shimmer-gold"></div>

      <div className="flex items-center justify-between py-4">
        <div className="flex lg:gap-16 sm:gap-4 md:gap-8 items-center">
          <div className="text-[30px] sm:text-[34px] font-bold font-josefin relative group flex items-center">
            <RiVipCrownFill className="text-yellow-500 mr-1 transform -translate-y-1" />
            <span className="gold-text">Modé by M</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[3px] gold-gradient transition-all duration-300 group-hover:w-full"></span>
          </div>

          <div className="flex lg:gap-8 sm:gap-4 md:gap-6 items-center">
            <Link
              href="/#"
              className={`text-[14px] sm:text-[16px] hidden sm:inline-block font-medium font-josefin relative group ${
                activeLink === "Home" ? "text-yellow-600" : "text-gray-700 hover:text-yellow-600"
              }`}
              onClick={() => handleLinkClick("Home")}
            >
              <span>Home</span>
              <span
                className={`absolute -bottom-1 left-0 h-[2px] gold-gradient transition-all duration-300 ${
                  activeLink === "Home" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>

            <Link
              href="/about"
              className={`text-[14px] sm:text-[16px] hidden sm:inline-block font-medium font-josefin relative group ${
                activeLink === "Shop" ? "text-yellow-600" : "text-gray-700 hover:text-yellow-600"
              }`}
              onClick={() => handleLinkClick("Shop")}
            >
              <span>About</span>
              <span
                className={`absolute -bottom-1 left-0 h-[2px] gold-gradient transition-all duration-300 ${
                  activeLink === "Shop" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>

            <Link
              href="/shop"
              className={`text-[14px] sm:text-[16px] hidden sm:inline-block font-medium font-josefin relative group ${
                activeLink === "Shop" ? "text-yellow-600" : "text-gray-700 hover:text-yellow-600"
              }`}
              onClick={() => handleLinkClick("Shop")}
            >
              <span>Shop</span>
              <span
                className={`absolute -bottom-1 left-0 h-[2px] gold-gradient transition-all duration-300 ${
                  activeLink === "Shop" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>

            <Link
              href="/blogs"
              className={`text-[14px] sm:text-[16px] hidden sm:inline-block font-medium font-josefin relative group ${
                activeLink === "Blog" ? "text-yellow-600" : "text-gray-700 hover:text-yellow-600"
              }`}
              onClick={() => handleLinkClick("Blog")}
            >
              <span>Blog</span>
              <span
                className={`absolute -bottom-1 left-0 h-[2px] gold-gradient transition-all duration-300 ${
                  activeLink === "Blog" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>

            <Link
              href="/contact"
              className={`text-[14px] sm:text-[16px] hidden sm:inline-block font-medium font-josefin relative group ${
                activeLink === "Contact" ? "text-yellow-600" : "text-gray-700 hover:text-yellow-600"
              }`}
              onClick={() => handleLinkClick("Contact")}
            >
              <span>Contact</span>
              <span
                className={`absolute -bottom-1 left-0 h-[2px] gold-gradient transition-all duration-300 ${
                  activeLink === "Contact" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="relative hidden sm:block sm:ml-4 max-w-[500px] sm:max-w-[400px] lg:max-w-[500px]">
            <SearchButton />
          </div>
        </div>

        <div className="sm:hidden flex items-center gap-2">
          <SearchButton />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="focus:outline-none">
              <div className="p-2 rounded-full gold-button-bg hover:bg-yellow-100 transition-colors">
                <IoMenu className="text-yellow-700 text-2xl" />
              </div>
            </SheetTrigger>
            <SheetContent className="sm:hidden w-[70vw] max-w-[300px] border-l border-yellow-300 golden-menu-bg">
              <SheetHeader>
                <SheetTitle className="font-josefin text-yellow-800 text-2xl flex items-center justify-center">
                  <RiVipCrownFill className="text-yellow-500 mr-2" />
                  <span className="gold-text">Hekto</span>
                </SheetTitle>
                <SheetDescription className="text-yellow-700">Premium Shopping Experience</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-4 p-4 mt-4">
                <Link
                  href="/#"
                  onClick={() => handleLinkClick("Home")}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    activeLink === "Home"
                      ? "gold-active-item text-yellow-800 font-medium"
                      : "text-gray-700 hover:bg-yellow-50"
                  }`}
                >
                  Home
                </Link>

                <Link
                  href="/shop"
                  onClick={() => handleLinkClick("Products")}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    activeLink === "Products"
                      ? "gold-active-item text-yellow-800 font-medium"
                      : "text-gray-700 hover:bg-yellow-50"
                  }`}
                >
                  Products
                </Link>

                <Link
                  href="/about"
                  onClick={() => handleLinkClick("About")}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    activeLink === "About"
                      ? "gold-active-item text-yellow-800 font-medium"
                      : "text-gray-700 hover:bg-yellow-50"
                  }`}
                >
                  About
                </Link>

                <Link
                  href="/blogs"
                  onClick={() => handleLinkClick("Blog")}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    activeLink === "Blog"
                      ? "gold-active-item text-yellow-800 font-medium"
                      : "text-gray-700 hover:bg-yellow-50"
                  }`}
                >
                  Blog
                </Link>

                <Link
                  href="/shop"
                  onClick={() => handleLinkClick("Shop")}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    activeLink === "Shop"
                      ? "gold-active-item text-yellow-800 font-medium"
                      : "text-gray-700 hover:bg-yellow-50"
                  }`}
                >
                  Shop
                </Link>

                <Link
                  href="/contact"
                  onClick={() => handleLinkClick("Contact")}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    activeLink === "Contact"
                      ? "gold-active-item text-yellow-800 font-medium"
                      : "text-gray-700 hover:bg-yellow-50"
                  }`}
                >
                  Contact
                </Link>

                <Link
                  href="/faq"
                  onClick={() => handleLinkClick("FAQ")}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    activeLink === "FAQ"
                      ? "gold-active-item text-yellow-800 font-medium"
                      : "text-gray-700 hover:bg-yellow-50"
                  }`}
                >
                  FAQ&apos;s
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      {/* Bottom gold accent */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
    </div>
  )
}

export default Navbar2

