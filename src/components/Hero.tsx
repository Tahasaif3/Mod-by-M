import Image from "next/image";

const Hero = () => {
  return (
    <div className=" bg-[#F2F0FF]">
   
      <div className="max-w-[1400px] mx-auto  relative p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center lg:items-start gap-6">

      <div className="mb-6 lg:mt-[-63px] xl:lg:mt-[-63px] mt-[-30px] flex justify-center">
        <Image
          src="/lamp.png" 
          alt="Lamp"
          height={300} 
          width={300} 
          className="h-[250px] w-[400px]" 
        />
      </div>

     
      <div className="lg:w-1/2 lg:pt-16 space-y-4 text-center lg:text-left">
        <p className="text-[#FB2E86] text-[16px]">
          Best Furniture For Your Castle....
        </p>
        <h2 className="text-3xl lg:text-4xl font-josefin whitespace-nowrap font-bold text-gray-800 leading-tight">
          New Furniture Collection <br /> Trends in 2020
        </h2>
        <p className="text-[#8A8FB9] text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in
          phasellus non in justo.
        </p>
        <button className="bg-[#FB2E86] w-[163px] h-[50px] font-josefin text-white px-6 py-3 rounded-[2px] hover:bg-pink-600 transition">
          Shop Now
        </button>
      </div>

  
      <div className="relative lg:w-1/2 flex items-center justify-center">
        <Image
          src="/sofachair.png" 
          alt="Furniture"
          width={629}
          height={629}
          className="w-[400px] h-[400px]"
        />
      </div>

      
      <div className="absolute border-2 border-pink-500 rounded-lg w-full h-full top-0 left-0 z-[-1]"></div>


      </div>
    </div>
  );
};

export default Hero;
