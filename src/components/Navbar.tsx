"use client";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import React from "react";

import { GoPerson } from "react-icons/go";
import Link from "next/link";
import CartIcon from "./CartIcon";
import WishlistIcon from "./WishlistIcon";

import { ClerkLoaded } from "@clerk/nextjs";
import { SignInButton, UserButton } from "@clerk/clerk-react";

import { useUser } from "@clerk/nextjs";

const Navbar = () => {
  const { user } = useUser();

  return (
  
      <div className="bg-[#7E33E0] sticky top-0 z-50">
        <div className="overflow-hidden px-4 mx-auto max-w-[1177px]   h-auto lg:h-[44px] bg-[#7E33E0] flex flex-col lg:flex-row items-center">
          <div className="flex  flex-col lg:flex-row justify-between items-center   font-josefin text-[14px] md:text-[16px] text-white pt-2 lg:gap-10 ">
            <div className="flex gap-6 lg:gap-10 md:gap-40 items-center">
              <div className="flex items-center gap-2">
                <MdOutlineEmail />
                <span className="text-[12px] md:text-[16px]">
                  hektofurniture@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <span className="text-[12px] md:text-[16px]">
                  (+92365738536)
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-end items-center w-full   font-josefin text-[14px] md:text-[16px] text-white gap-4 lg:gap-6 md:gap-20  mt-2 md:mt-0">
            <div>
              <select className="bg-transparent border-none outline-none text-white cursor-pointer">
                <option value="English">English</option>
              </select>
              <select className="bg-transparent border-none md:pr-2 outline-none text-white cursor-pointer">
                <option value="USD">USD</option>
              </select>
            </div>
            <div className="flex items-center gap-3 lg:gap-7 cursor-pointer">
              <ClerkLoaded>
                {/* <span>Login</span> */}

                {user ? (
                  <div className="flex  gap-2 ">
                    <UserButton />
                    <div>
                      <p className="text-[8px]">Welcome Back</p>
                      <p className="font-semibold text-[10px] ">
                        {user?.firstName}
                      </p>
                    </div>
                  </div>
                ) : (
                  <SignInButton>
                    <div className="flex gap-1">
                      <Link href="/sign-in">Login</Link>
                      <GoPerson />
                    </div>
                  </SignInButton>
                )}

                <div>
                  <WishlistIcon />
                </div>

                <div>
                  <CartIcon />
                </div>
              </ClerkLoaded>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Navbar;
