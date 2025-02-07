"use client"
import React, { useState } from 'react'
import Link from 'next/link';
const DropDownButton = () => {
    const [showDropdown, setShowDropdown] = useState(false);


    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  
    const closeDropdown = () => {
      setShowDropdown(false);
    };

  return (
    <div>
       <div className="relative z-50">
              <button
                onClick={toggleDropdown}
                className="text-[14px] sm:text-[16px] hidden sm:inline-block font-lato  hover:text-[#FB2E86] hover:underline underline-offset-4 text-[#0D0E43]"
              >
                Pages
              </button>

              {showDropdown && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 z-50 w-[150px] border border-gray-200">
                  <ul>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/about" onClick={closeDropdown}>
                        About
                      </Link>
                    </li>
                   
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link href="/faq" onClick={closeDropdown}>
                        FAQ&apos;s
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

    </div>
  )
}

export default DropDownButton
