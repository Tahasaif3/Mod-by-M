"use client"
import { MdOutlineEmail } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"
import { GoPerson } from "react-icons/go"
import Link from "next/link"
import CartIcon from "./CartIcon"
import WishlistIcon from "./WishlistIcon"
import { ClerkLoaded } from "@clerk/nextjs"
import { SignInButton, UserButton } from "@clerk/clerk-react"
import { useUser } from "@clerk/nextjs"

const Navbar = () => {
  const { user } = useUser()

  return (
    <div className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 sticky top-0 z-50 shadow-md">
      {/* Top decorative line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>

      <div className="overflow-hidden px-4 mx-auto max-w-[1177px] h-auto lg:h-[50px] flex flex-col lg:flex-row items-center">
        <div className="flex flex-col lg:flex-row justify-between items-center font-josefin text-[14px] md:text-[16px] text-white pt-2 lg:gap-10">
          <div className="flex gap-6 lg:gap-10 md:gap-40 items-center">
            <div className="flex items-center gap-2 hover:text-yellow-200 transition-colors group">
              <div className="bg-yellow-300/20 p-1.5 rounded-full group-hover:bg-yellow-300/30 transition-colors">
                <MdOutlineEmail className="text-yellow-100" />
              </div>
              <span className="text-[12px] md:text-[16px]">muskanakhter2627@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-yellow-200 transition-colors group">
              <div className="bg-yellow-300/20 p-1.5 rounded-full group-hover:bg-yellow-300/30 transition-colors">
                <FaPhoneAlt className="text-yellow-100" />
              </div>
              <span className="text-[12px] md:text-[16px]">(+923226207819)</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-end items-center w-full font-josefin text-[14px] md:text-[16px] text-white gap-4 lg:gap-6 md:gap-20 mt-2 md:mt-0">
          <div className="flex items-center">
            <select className="bg-transparent border-none outline-none text-white cursor-pointer hover:text-yellow-200 transition-colors appearance-none pr-6 relative">
              <option value="English" className="bg-amber-700 text-white">
                English
              </option>
              <option value="Spanish" className="bg-amber-700 text-white">
                Urdu
              </option>
            </select>
            <div className="pointer-events-none absolute">
              <svg
                className="fill-current h-4 w-4 text-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>

            <div className="w-px h-4 bg-yellow-500/30 mx-2"></div>

            <select className="bg-transparent border-none outline-none text-white cursor-pointer hover:text-yellow-200 transition-colors appearance-none pr-6 relative">
              <option value="USD" className="bg-amber-700 text-white">
                USD
              </option>
              <option value="EUR" className="bg-amber-700 text-white">
                PKR
              </option>
            </select>
            <div className="pointer-events-none absolute">
              <svg
                className="fill-current h-4 w-4 text-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-3 lg:gap-7 cursor-pointer">
            <ClerkLoaded>
              {user ? (
                <div className="flex gap-2 items-center bg-amber-800/40 px-3 py-1 rounded-full hover:bg-amber-800/60 transition-colors">
                  <div className="ring-1 ring-yellow-300/50 rounded-full">
                    <UserButton />
                  </div>
                  <div>
                    <p className="text-[8px] text-yellow-200">Welcome Back</p>
                    <p className="font-semibold text-[10px]">{user?.firstName}</p>
                  </div>
                </div>
              ) : (
                <SignInButton>
                  <div className="flex gap-1 items-center bg-amber-800/40 px-3 py-1.5 rounded-full hover:bg-amber-800/60 transition-colors">
                    <Link href="/sign-in" className="text-yellow-100 hover:text-yellow-200 transition-colors">
                      Login
                    </Link>
                    <GoPerson className="text-yellow-300" />
                  </div>
                </SignInButton>
              )}

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                <div className="relative bg-amber-800/40 p-2 rounded-full hover:bg-amber-800/60 transition-colors">
                  <WishlistIcon />
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                <div className="relative bg-amber-800/40 p-2 rounded-full hover:bg-amber-800/60 transition-colors">
                  <CartIcon />
                </div>
              </div>
            </ClerkLoaded>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
    </div>
  )
}

export default Navbar


