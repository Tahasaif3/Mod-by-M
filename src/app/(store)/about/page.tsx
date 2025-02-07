import ClientSay from "@/components/ClientSay";
import PageHeader from "@/components/PageHeader";
import SupportSection from "@/components/SupportSection";
import Image from "next/image";

const About = () => {
  return (
    <section className="overflow-hidden">
      <PageHeader heading="About Us" />
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-6 md:py-10 max-w-[1177px] mx-auto">
       
        <div className="relative w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <div className="relative">
            <div className="absolute -bottom-3 -left-3 w-full h-full border-b-[14px] border-l-[14px] border-[#2B3CAB] rounded-md"></div>
            <Image
              src="/aboutimg.png"
              alt="Business History"
              width={555}
              height={390}
              className="relative z-10 rounded-md shadow-md object-cover w-full md:w-auto"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left lg:ml-10">
          <h2 className="text-[28px] md:text-[36px] font-josefin font-bold whitespace-nowrap text-[#151875] mb-4">
            Know About Our Ecommerce <br/> Business, History
          </h2>
          <p className="text-sm md:text-base text-[#8A8FB9] font-lato mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
            ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
            amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
            quis bibendum quam.
          </p>
          <button className="bg-[#FB2E86] font-lato  text-white px-4 py-2 md:px-6 rounded-[2px] text-sm md:text-base hover:bg-pink-600 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>

      <SupportSection heading="Our Features" />

      <ClientSay />
    </section>
  );
};

export default About;
