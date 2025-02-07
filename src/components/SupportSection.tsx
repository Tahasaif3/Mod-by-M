import React from "react";
import Image from "next/image";
const supports = [
  {
    id: 1,
    title: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    icon: "/support-icon1.png",
  },
  {
    id: 2,
    title: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    icon: "/support-icon2.png",
  },
  {
    id: 3,
    title: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    icon: "/support-icon3.png",
  },
  {
    id: 4,
    title: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    icon: "/support-icon4.png",
  },
];

type  HeadingProps = {
  heading: string;
}
const SupportSection = ({ heading }:HeadingProps) => {
  return (
    <section className="p-8 mt-16 max-w-[1177px] mx-auto">
      <h2 className="text-[42px] font-semibold text-center mb-8 font-josefin text-[#151875]">
      { heading }
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
        {supports.map((support) => (
          <div
            key={support.id}
            className="bg-white shadow-lg p-6 text-center w-[270px] h-[320px] flex flex-col justify-center items-center mx-auto"
          >
            <Image
              src={support.icon}
              alt={support.title}
              width={200}
              height={100}
              className="mx-auto mb-6 mt-8 w-24 h-16"
            />
            <h3 className="text-lg font-bold text-[#151875] text-[22px]">
              {support.title}
            </h3>
            <p className="text-[#1A0B5B4D] mt-4 text-[16px]">
              {support.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportSection;
