"use client"

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div className="overflow-hidden  w-full h-[53px] bg-[#E7E4F8] flex items-center justify-between px-6 py-4 sm:px-12 md:px-24 lg:px-52">
      <div className="text-sm text-[#9DA0AE] text-[14px] sm:text-[16px]">
        <p>©Hekto- All Rights Reserved</p>
      </div>

      <div className="flex space-x-4">
        <Link href="#" passHref>
          <div className="bg-[#151875] text-white flex items-center justify-center rounded-full w-5 h-5 hover:bg-[#0f1368] cursor-pointer">
            <FaFacebookF size={10} />
          </div>
        </Link>
        <Link href="#" passHref>
          <div className="bg-[#151875] text-white flex items-center justify-center rounded-full w-5 h-5 hover:bg-[#0f1368] cursor-pointer">
            <FaInstagram size={10} />
          </div>
        </Link>
        <Link href="#" passHref>
          <div className="bg-[#151875] text-white flex items-center justify-center rounded-full w-5 h-5 hover:bg-[#0f1368] cursor-pointer">
            <FaTwitter size={10} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FooterBottom;
