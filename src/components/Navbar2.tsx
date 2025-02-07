"use client";



import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React, { useState } from "react";
import SearchButton from "./SearchButton";
import DropDownButton from "./DropDownButton";

const Navbar2 = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="max-w-[1177px] sticky top-14 bg-white z-50 px-4 sm:px-4 mx-auto mt-none   mt-4 mb-4 ">
      <div className="flex items-center justify-between ">
        <div className="flex lg:gap-20 sm:gap-4 md:gap-4">
          <div className=" text-[30px] sm:text-[34px] font-semibold text-[#0D0E43] font-josefin">
            Hekto
          </div>

          <div className="flex lg:gap-8 sm:gap-4 md:gap-4 items-center">
            <Link
              href="/#"
              className="text-[#FB2E86] font-[14px] font-lato  hidden sm:inline-block sm:font-[16px] hover:underline underline-offset-4  "
            >
              Home
            </Link>
            {/* <Link href="/" className="text-[14px] sm:text-[16px] hidden font-lato text-[#0D0E43]  sm:inline-block hover:text-[#FB2E86] hover:underline underline-offset-4">Pages</Link> */}

           <DropDownButton/>
            <Link
              href="/shop"
              className="text-[14px] sm:text-[16px] hidden font-lato text-[#0D0E43]  sm:inline-block hover:text-[#FB2E86] hover:underline underline-offset-4"
            >
              Products
            </Link>
          
            <Link
              href="/blogs"
              className="text-[14px] sm:text-[16px] hidden sm:inline-block hover:text-[#FB2E86] hover:underline underline-offset-4 text-[#0D0E43]"
            >
              Blog
            </Link>

            <Link
              href="/shop"
              className="text-[14px] sm:text-[16px] hidden font-lato sm:inline-block hover:text-[#FB2E86] hover:underline underline-offset-4 text-[#0D0E43]"
            >
              Shop
            </Link>
            <Link
              href="/contact"
              className="text-[14px] sm:text-[16px] hidden  font-lato sm:inline-block hover:text-[#FB2E86] hover:underline underline-offset-4 text-[#0D0E43]"
            >
              Contact
            </Link>
          
          </div>
        </div>

        <div className="flex items-center justify-between">
      {/* Other Navbar Content */}

      <div className="relative hidden sm:block sm:ml-4 max-w-[500px] sm:max-w-[400px] lg:max-w-[500px]">
    
      <SearchButton/>


      </div>

      {/* Other Navbar Content */}
    </div>

        <div className="sm:hidden flex items-center">
        <SearchButton/>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <IoMenu className="text-[#FB2E86] text-3xl sm:hidden" />
            </SheetTrigger>
            <SheetContent className="sm:hidden w-[70vw] max-w-[300px]">
              <SheetHeader>
                <SheetTitle className="font-josefin text-[#0D0E43] ">
                  Hekto
                </SheetTitle>
                <SheetDescription>Choose your desired page</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-4 p-4">
                <Link
                  href="/#"
                  onClick={closeMenu} 
                  className="text-[#0D0E43] font-lato text-[16px] "
                >
                  Home
                </Link>

                

                <Link
                  href="/shop"
                  onClick={closeMenu} 
                  className="text-[#0D0E43] font-lato text-[16px]"
                >
                  Products
                </Link>
                <Link onClick={closeMenu}  href="/about"className="text-[#0D0E43] font-lato text-[16px]">
                        About
                      </Link>
                <Link
                  href="/blogs"
                  onClick={closeMenu} 
                  className="text-[#0D0E43] font-lato text-[16px]"
                >
                  Blog
                </Link>
                <Link
                  href="/shop"
                  onClick={closeMenu} 
                  className="text-[#0D0E43] font-lato text-[16px]"
                >
                  Shop
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMenu} 
                  className="text-[#0D0E43] font-lato text-[16px]"
                >
                  Contact
                </Link>
                <Link  href="/faq" onClick={closeMenu}  className="text-[#0D0E43] font-lato text-[16px]">
                        FAQ&apos;s
                      </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
