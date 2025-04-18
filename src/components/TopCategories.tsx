import Image from "next/image";

const TopCategories = () => {
  const categories = [
    {
      name: "Elegant Red Tote",
      price: "$1,200.00",
      image: "/elegant-red-tote.avif", // Replace with real Unsplash or public folder image
    },
    {
      name: "Classic Brown Satchel",
      price: "$950.00",
      image: "/classic-brown-satchel.jpg",
    },
    {
      name: "Modern Black Clutch",
      price: "$1,100.00",
      image: "/modern-black-clutch.jpg",
    },
    {
      name: "Vintage Leather Handbag",
      price: "$1,300.00",
      image: "/vintage-leather-handbag.webp",
    },
  ];

  return (
    <div className="p-6 max-w-[1177px] mx-auto font-josefin bg-white">
      <h2 className="text-[42px] font-bold text-[#151875] text-center mt-10 mb-12">
        Explore Our Luxury Bags
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {categories.map((category, index) => (
          <div
            key={index}
            className="text-center shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl bg-[#f9f9fb] p-4"
          >
            <div className="relative group w-full h-[270px] rounded-2xl overflow-hidden flex items-center justify-center bg-white">
              <Image
                src={category.image}
                alt={category.name}
                width={220}
                height={220}
                className="object-contain h-[220px] w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#FB2E86] text-white px-5 py-2 rounded-full text-sm hidden group-hover:block transition-all duration-300">
                View Shop
              </button>
            </div>

            <h3 className="text-[18px] font-semibold mt-5 text-[#151875]">
              {category.name}
            </h3>
            <p className="text-[16px] text-[#FB2E86] font-medium mt-1">
              {category.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
