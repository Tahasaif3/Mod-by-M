"use client";

import { useState } from "react";
import Image from "next/image";

interface ClientSayProps {
  id: number;
  src: string;
  alt: string;
  name: string;
  profession: string;
  content: string;
}

const ClientSay: React.FC = () => {
  const clients: ClientSayProps[] = [
    {
      id: 1,
      src: "/c2.svg",
      alt: "Client 2",
      name: "John Doe",
      profession: "Manager At TechCorp",
      content:
        "Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu.",
    },
    {
      id: 2,
      src: "/c1.svg",
      alt: "Client 1",
      name: "Selena Gomez",
      profession: "Ceo At Webecy Digital",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique ultrices dolor aliquam lacus volutpat praesent. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. ",
    },
    {
      id: 3,
      src: "/c3.svg",
      alt: "Client 3",
      name: "Jane Smith",
      profession: "Designer At Creative Studio",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.",
    },
  ];

  const centerImageId = Math.ceil(clients.length / 2);
  const [activeImage, setActiveImage] = useState<number>(centerImageId);

  const handleImageClick = (id: number) => {
    setActiveImage(id);
    const clientElement = document.getElementById(`client-${id}`);
    if (clientElement) {
      clientElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  return (
    <div className="w-full overflow-hidden text-center mt-10 mb-28 h-auto md:h-[503px] pt-12 bg-[#FBFBFF] px-4 sm:px-8">
      <h2 className="text-[24px] sm:text-[28px] lg:text-[36px] font-bold mb-8 lg:mb-12 font-josefin">
        Our Clients Say!
      </h2>
      <div className="flex flex-wrap sm:flex-nowrap justify-center gap-4 sm:gap-8">
        {clients.map((client) => (
          <div
            key={client.id}
            id={`client-${client.id}`}
            className={`relative text-center transition-all duration-500 ${
              activeImage === client.id
                ? "transform scale-105 -translate-y-2"
                : ""
            }`}
          >
            <div
              onClick={() => handleImageClick(client.id)}
              className="cursor-pointer overflow-hidden transition-all duration-300"
            >
              <Image
                src={client.src}
                alt={client.alt}
                width={45}
                height={45}
                className="object-contain rounded-[3px] sm:w-[55px] sm:h-[55px]"
              />
            </div>
          </div>
        ))}
      </div>
      {activeImage && (
        <div className="mt-8 px-4 text-center">
          <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] text-[#151875] font-semibold font-lato">
            {clients[activeImage - 1].name}
          </h3>
          <p className="text-[12px] sm:text-[14px] text-[#8A8FB9] font-lato">
            {clients[activeImage - 1].profession}
          </p>
          <p className="text-[12px] sm:text-[14px] lg:text-[16px] text-[#8A8FB9] font-bold font-lato mt-3 max-w-[90%] sm:max-w-[600px] mx-auto">
            {clients[activeImage - 1].content}
          </p>
        </div>
      )}
      <div className="flex justify-center mt-6 gap-2">
        {clients.map((client) => (
          <span
            key={client.id}
            onClick={() => handleImageClick(client.id)}
            className={`w-4 sm:w-6 h-[3px] mb-4 rounded-[3px] cursor-pointer transition-all duration-300 ${
              activeImage === client.id ? "bg-[#FB2E86]" : "bg-[#FF75B0]"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ClientSay;
