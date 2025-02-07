import Image from "next/image";

const TopCategories = () => {
  const categories = [
    { name: "Mini LCW Chair", price: "$56.00", image: "/new.png" },
    { name: "Mini LCW Chair", price: "$56.00", image: "/image4.png" },
    { name: "Mini LCW Chair", price: "$56.00", image: "/chair1.png" },
    { name: "Mini LCW Chair", price: "$56.00", image: "/new.png" },
  ];

  return (
    <div className="p-6 bg-white max-w-[1177px] mx-auto font-josefin">
      <h2 className="text-[42px] font-semibold  text-[#151875] text-center mt-10 mb-10">Top Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <div className="relative group w-[269px] h-[269px] mx-auto bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src={category.image}
                alt={category.name}
                width={178}
                height={178}
                className="h-[178px] w-[178px] transition-transform group-hover:scale-110 flex items-center"
              />
              <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden group-hover:flex bg-green-500 text-white text-sm px-4 py-2 rounded-[2px] w-[94px] h-[29px] text-[12px] transition hover:bg-[#08D15F] whitespace-nowrap items-center">
                View Shop
              </button>
            </div>
            <h3 className="text-[20px] font-medium mt-4 text-[#151875]">{category.name}</h3>
            <p className="text-[16px]  text-[#151875]">{category.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
