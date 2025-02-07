import React from "react";
import Image from "next/image";
import { productData } from "./Data";



const TrendingProducts2 = () => {
  return (
    <div className="mx-auto bg-white max-w-[1177px] px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_250px] gap-6">
        <div className="relative bg-pink-100 p-4 flex flex-col items-start h-[270px]">
          <h3 className="font-bold mb-2 text-[26px] font-josefin text-[#151875]">23% off in all products</h3>
          <button className="text-[#FB2E86] text-[16px] rounded transition underline underline-offset-4">
            Shop Now
          </button>
          <Image
            src="/clock.png"
            alt="Promotion"
            width={200}
            height={150}
            className="absolute bottom-0 right-0 object-contain"
          />
        </div>

        <div className="relative bg-blue-100 p-4 flex items-start flex-col h-[270px]">
          <h3 className="text-[26px] font-josefin text-[#151875] font-bold mb-2">23% off in all products</h3>
          <button className="text-[#FB2E86] text-[16px] rounded transition underline underline-offset-4">
            View Collection
          </button>
          <Image
            src="/table.png"
            alt="Promotion"
            width={312}
            height={173}
            className="absolute bottom-0 right-0 object-contain"
          />
        </div>

        <div className="p-4 shadow-lg w-full h-[270px] flex flex-col justify-between">
          <div className="grid grid-cols-1 gap-4 overflow-hidden">
            {productData.executiveChairs.map((chair, index) => (
              <div
                key={index}
                className="flex items-center justify-between overflow-hidden"
              >
                <Image
                  src={chair.image}
                  alt={chair.name}
                  width={64}
                  height={64}

                  className="h-16 w-16 object-cover bg-[#F5F6F8]"
                />
                <div className="text-left ml-4 flex-1">
                  <h4 className="text-sm font-medium truncate font-josefin text-[16px] text-[#151875]">
                    {chair.name}
                  </h4>
                  <p className="text-sm font-bold font-josefin text-[12px] text-[#151875]">
                    {chair.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts2;
