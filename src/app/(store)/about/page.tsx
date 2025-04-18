import ClientSay from "@/components/ClientSay"
import PageHeader from "@/components/PageHeader"
import SupportSection from "@/components/SupportSection"
import Image from "next/image"
import { RiVipCrownFill } from "react-icons/ri"
import { FaQuoteLeft } from "react-icons/fa"

const About = () => {
  return (
    <section className="overflow-hidden">
      <PageHeader heading="Our Story" />

      {/* Brand Introduction */}
      <div className="max-w-[1177px] mx-auto px-4 md:px-8 pt-16 pb-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="h-[1px] w-16 bg-yellow-400 mr-4"></div>
          <span className="text-sm uppercase tracking-widest text-yellow-700 font-medium">Established 2010</span>
          <div className="h-[1px] w-16 bg-yellow-400 ml-4"></div>
        </div>

        <div className="flex items-center justify-center mb-6">
          <RiVipCrownFill className="text-yellow-500 mr-2 text-xl" />
          <h1 className="gold-text text-4xl md:text-5xl font-bold font-josefin">Mode by M</h1>
        </div>

        <p className="text-gray-600 max-w-2xl mx-auto font-light text-lg leading-relaxed">
          Crafting timeless elegance through exceptional craftsmanship and luxurious materials. Each Mode by M creation
          is a statement of sophistication and refined taste.
        </p>
      </div>

      {/* Main About Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-20 py-10 md:py-16 max-w-[1177px] mx-auto">
        <div className="relative w-full md:w-1/2 flex justify-center mb-12 md:mb-0">
          <div className="relative">
            {/* Gold decorative elements */}
            <div className="absolute -top-6 -right-6 w-full h-full border-t-[3px] border-r-[3px] border-yellow-400 rounded-tr-md"></div>
            <div className="absolute -bottom-6 -left-6 w-full h-full border-b-[3px] border-l-[3px] border-yellow-400 rounded-bl-md"></div>

            {/* Main image with premium styling */}
            <div className="relative z-10 p-1 bg-white shadow-gold-lg rounded-md overflow-hidden">
              <Image
                src="/logo.png?height=500&width=600&text=Luxury+Bags"
                alt="Mode by M Luxury Collection"
                width={600}
                height={500}
                className="rounded-md object-cover w-full transition-transform duration-700 hover:scale-105"
              />

              {/* Premium badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-4 py-1 rounded-full text-xs uppercase tracking-wider font-medium shadow-gold-sm">
                Premium Collection
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left lg:ml-16">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-xs uppercase tracking-wider font-medium border border-yellow-200">
              Our Heritage
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-josefin font-bold text-gray-800 mb-6 leading-tight">
            Crafting Luxury <span className="gold-text">Women`s Bags</span> With Unparalleled Elegance
          </h2>

          <div className="relative mb-8">
            <FaQuoteLeft className="absolute -left-2 -top-2 text-yellow-200 text-4xl opacity-50" />
            <p className="text-gray-600 font-light leading-relaxed pl-6 border-l-2 border-yellow-300">
              At Mode by M, we believe that a luxury bag is more than an accessory—it`s an expression of personal style
              and a testament to exceptional craftsmanship. Each piece in our collection is meticulously designed and
              handcrafted by master artisans using only the finest materials sourced from around the world.
            </p>
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Our commitment to quality and attention to detail has established Mode by M as a distinguished name in
            luxury fashion. From our signature totes to our elegant clutches, each Mode by M creation embodies timeless
            sophistication with contemporary flair.
          </p>

          <button className="gold-button px-8 py-3 rounded-md text-sm uppercase tracking-wider font-medium flex items-center group">
            <span>Discover Our Craftsmanship</span>
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Brand Values Section */}
      <div className="bg-gradient-to-b from-yellow-50 to-white py-16 my-16">
        <div className="max-w-[1177px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-xs uppercase tracking-wider font-medium border border-yellow-200 mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-josefin font-bold text-gray-800 mb-4">
              The <span className="gold-text">Mode by M</span> Difference
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">What sets us apart in the world of luxury fashion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Exceptional Craftsmanship",
                description:
                  "Each bag is meticulously handcrafted by skilled artisans with decades of experience in luxury leatherwork.",
                icon: "✦",
              },
              {
                title: "Sustainable Luxury",
                description:
                  "We source only the finest ethically-produced materials, ensuring our luxury doesn't come at the expense of our planet.",
                icon: "✦",
              },
              {
                title: "Timeless Design",
                description:
                  "Our designs transcend seasonal trends, creating heirloom pieces that will be cherished for generations.",
                icon: "✦",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-md shadow-gold-sm hover:shadow-gold-lg transition-shadow duration-300 group"
              >
                <div className="gold-icon-circle mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-yellow-600 text-xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-josefin font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SupportSection heading="Our Services" />

      <ClientSay />
    </section>
  )
}

export default About


// import ClientSay from "@/components/ClientSay";
// import PageHeader from "@/components/PageHeader";
// import SupportSection from "@/components/SupportSection";
// import Image from "next/image";

// const About = () => {
//   return (
//     <section className="overflow-hidden">
//       <PageHeader heading="About Us" />
//       <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-6 md:py-10 max-w-[1177px] mx-auto">
       
//         <div className="relative w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
//           <div className="relative">
//             <div className="absolute -bottom-3 -left-3 w-full h-full border-b-[14px] border-l-[14px] border-[#2B3CAB] rounded-md"></div>
//             <Image
//               src="/aboutimg.png"
//               alt="Business History"
//               width={555}
//               height={390}
//               className="relative z-10 rounded-md shadow-md object-cover w-full md:w-auto"
//             />
//           </div>
//         </div>

//         <div className="w-full md:w-1/2 text-center md:text-left lg:ml-10">
//           <h2 className="text-[28px] md:text-[36px] font-josefin font-bold whitespace-nowrap text-[#151875] mb-4">
//             Know About Our Ecommerce <br/> Business, History
//           </h2>
//           <p className="text-sm md:text-base text-[#8A8FB9] font-lato mb-6">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
//             ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
//             amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
//             quis bibendum quam.
//           </p>
//           <button className="bg-[#FB2E86] font-lato  text-white px-4 py-2 md:px-6 rounded-[2px] text-sm md:text-base hover:bg-pink-600 transition duration-300">
//             Contact Us
//           </button>
//         </div>
//       </div>

//       <SupportSection heading="Our Features" />

//       <ClientSay />
//     </section>
//   );
// };

// export default About;
