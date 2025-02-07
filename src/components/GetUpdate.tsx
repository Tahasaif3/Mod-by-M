import React from "react";
import Image from "next/image";

const GetUpdate = () => {
  return (
    <div className="relative w-full max-w-[1920px] h-auto mx-auto">
     
      <Image
        src="/imageUpdate.png"
        alt="Update Image"
        width={1920}
        height={462}
        className="w-full h-auto object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-12 lg:px-16">
        <p className="text-[12px] sm:text-[16px] md:text-[22px] lg:text-[30px] text-[#151875] font-bold mb-4 leading-snug max-w-[80%] sm:max-w-[60%]">
          Get Latest Update By Subscribing <br /> Our Newsletter
        </p>
        <button className="bg-[#FB2E86] text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] text-white w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] h-[30px] sm:h-[35px] md:h-[40px] lg:h-[45px] mt-2 font-josefin px-4 py-2 rounded-[2px] hover:bg-pink-600">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default GetUpdate;
