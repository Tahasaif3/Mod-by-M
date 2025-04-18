"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div className="overflow-hidden w-full bg-[#E7E4F8] py-5 px-6 sm:px-12 md:px-24 lg:px-52 shadow-inner">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#6C6F80] text-[14px] sm:text-[16px]">
          © Modé by M — All Rights Reserved
        </p>

        <div className="flex items-center gap-4">
          {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, index) => (
            <Link href="#" key={index} passHref>
              <div className="bg-gradient-to-tr from-[#151875] to-[#4e4eaa] text-white rounded-full w-9 h-9 flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer">
                <Icon size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
