import Image from "next/image"
import { FaStar } from "react-icons/fa"

const ClientSay = () => {
  const testimonials = [
    {
      name: "Sophia Anderson",
      role: "Fashion Influencer",
      image: "/c1.svg",
      quote:
        "Mode by M bags are the epitome of luxury. The craftsmanship is impeccable, and the designs are timeless yet contemporary. My collection has become the envy of my followers.",
      rating: 5,
    },
    {
      name: "Elizabeth Chen",
      role: "Executive Director",
      image: "/c2.svg",
      quote:
        "As someone who demands perfection in both style and functionality, Mode by M exceeds all my expectations. These bags are not just accessories; they`re investments in elegance.",
      rating: 5,
    },
    {
      name: "Victoria James",
      role: "Art Curator",
      image: "/c3.svg",
      quote:
        "The attention to detail in every Mode by M creation is truly remarkable. Each bag tells a story of artistry and passion that resonates with my appreciation for fine craftsmanship.",
      rating: 5,
    },
  ]

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-[1177px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-xs uppercase tracking-wider font-medium border border-yellow-200 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-josefin font-bold text-gray-800 mb-4">
            What Our <span className="gold-text">Clients Say</span>
          </h2>
          <div className="h-[3px] w-24 gold-gradient mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-gold-sm hover:shadow-gold-lg transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-200 mr-4 shadow-gold-sm">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-josefin font-bold text-gray-800">{testimonial.name}</h3>
                  <p className="text-yellow-700 text-sm">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-2 -top-2 text-yellow-200 opacity-20 text-4xl font-serif">`</div>
                <p className="text-gray-600 italic relative z-10 pl-4">{testimonial.quote}</p>
                <div className="absolute -right-2 bottom-0 text-yellow-200 opacity-20 text-4xl font-serif">`</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClientSay


// "use client";

// import { useState } from "react";
// import Image from "next/image";

// interface ClientSayProps {
//   id: number;
//   src: string;
//   alt: string;
//   name: string;
//   profession: string;
//   content: string;
// }

// const ClientSay: React.FC = () => {
//   const clients: ClientSayProps[] = [
//     {
//       id: 1,
//       src: "/c2.svg",
//       alt: "Client 2",
//       name: "John Doe",
//       profession: "Manager At TechCorp",
//       content:
//         "Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu.",
//     },
//     {
//       id: 2,
//       src: "/c1.svg",
//       alt: "Client 1",
//       name: "Selena Gomez",
//       profession: "Ceo At Webecy Digital",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique ultrices dolor aliquam lacus volutpat praesent. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. ",
//     },
//     {
//       id: 3,
//       src: "/c3.svg",
//       alt: "Client 3",
//       name: "Jane Smith",
//       profession: "Designer At Creative Studio",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.",
//     },
//   ];

//   const centerImageId = Math.ceil(clients.length / 2);
//   const [activeImage, setActiveImage] = useState<number>(centerImageId);

//   const handleImageClick = (id: number) => {
//     setActiveImage(id);
//     const clientElement = document.getElementById(`client-${id}`);
//     if (clientElement) {
//       clientElement.scrollIntoView({
//         behavior: "smooth",
//         block: "center",
//         inline: "center",
//       });
//     }
//   };

//   return (
//     <div className="w-full overflow-hidden text-center mt-10 mb-28 h-auto md:h-[503px] pt-12 bg-[#FBFBFF] px-4 sm:px-8">
//       <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold mb-8 lg:mb-12 font-josefin">
//         Our Clients Say!
//       </h2>
//       <div className="flex flex-wrap sm:flex-nowrap justify-center gap-4 sm:gap-8">
//         {clients.map((client) => (
//           <div
//             key={client.id}
//             id={`client-${client.id}`}
//             className={`relative text-center transition-all duration-500 ${
//               activeImage === client.id
//                 ? "transform scale-105 -translate-y-2"
//                 : ""
//             }`}
//           >
//             <div
//               onClick={() => handleImageClick(client.id)}
//               className="cursor-pointer overflow-hidden transition-all duration-300"
//             >
//               <Image
//                 src={client.src}
//                 alt={client.alt}
//                 width={45}
//                 height={45}
//                 className="object-contain rounded-[3px] sm:w-[55px] sm:h-[55px]"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//       {activeImage && (
//         <div className="mt-8 px-4 text-center">
//           <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] text-[#151875] font-semibold font-lato">
//             {clients[activeImage - 1].name}
//           </h3>
//           <p className="text-[12px] sm:text-[14px] text-[#8A8FB9] font-lato">
//             {clients[activeImage - 1].profession}
//           </p>
//           <p className="text-[12px] sm:text-[14px] lg:text-[16px] text-[#8A8FB9] font-bold font-lato mt-3 max-w-[90%] sm:max-w-[600px] mx-auto">
//             {clients[activeImage - 1].content}
//           </p>
//         </div>
//       )}
//       <div className="flex justify-center mt-6 gap-2">
//         {clients.map((client) => (
//           <span
//             key={client.id}
//             onClick={() => handleImageClick(client.id)}
//             className={`w-4 sm:w-6 h-[3px] mb-4 rounded-[3px] cursor-pointer transition-all duration-300 ${
//               activeImage === client.id ? "bg-[#FB2E86]" : "bg-[#FF75B0]"
//             }`}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ClientSay;
