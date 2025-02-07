import { IoMdCheckmark } from "react-icons/io";
import Image from "next/image";
const DiscountItem = () => {
  return (
    <div className="max-w-[1177px] mx-auto p-6 bg-white">
   
      <div className="text-center mb-6 mt-16">
        <h2 className="text-[32px] sm:text-[42px] font-josefin font-semibold mb-4 text-[#151875]">
          Discount Item
        </h2>
        <div className="flex flex-wrap justify-center space-x-4 text-[#151875]">
          <a
            href="#"
            className="hover:underline underline-offset-4 hover:text-[#FB4997] text-[16px] sm:text-[18px]"
          >
            Wood Chair
          </a>
          <a
            href="#"
            className="hover:underline underline-offset-4 hover:text-[#FB4997] text-[16px] sm:text-[18px]"
          >
            Plastic Chair
          </a>
          <a
            href="#"
            className="hover:underline underline-offset-4 hover:text-[#FB4997] text-[16px] sm:text-[18px]"
          >
            Sofa Collection
          </a>
        </div>
      </div>

      
      <div className="flex flex-col-reverse lg:flex-row  items-center lg:items-start gap-8">
       
        <div className="text-center lg:text-left lg:mt-10">
          <h3 className="text-[28px] sm:text-[35px] font-bold whitespace-nowrap text-[#151875] mb-4">
            20% Discount On All Products
          </h3>
          <p className="text-[18px] sm:text-[21px] mb-4 text-[#FB2E86]">
            Eams Sofa Compact
          </p>
          <p className="text-[#B7BACB] text-[16px] sm:text-[17px] mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-[#B7BACB]">
            <div className="flex gap-2 items-center text-[16px]">
              <IoMdCheckmark className="text-[#7569B2] font-bold" />
              Material expose like metals
            </div>
            <div className="flex gap-2 items-center">
              <IoMdCheckmark className="text-[#7569B2] font-bold" />
              Clear lines and geometric figures
            </div>
            <div className="flex gap-2 items-center">
              <IoMdCheckmark className="text-[#7569B2] font-bold" />
              Material expose like metals
            </div>
            <div className="flex gap-2 items-center">
              <IoMdCheckmark className="text-[#7569B2] font-bold" />
              Clear lines and geometric figures
            </div>
          </div>

          <button className="px-6 py-2 bg-[#FB2E86] h-[50px] w-[180px] sm:w-[200px] text-[16px] sm:text-[17px] font-josefin mt-8 text-white rounded hover:bg-pink-600 transition">
            Shop Now
          </button>
        </div>

      
        <div className="lg:mt-[-50px]">
          <Image
            src="/sofa.png"
            alt="Discount Item"
            width={1000}
            height={500}
            className="mx-auto w-full sm:w-3/4  lg:h-[500px] lg:w-[1214px]"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountItem;
