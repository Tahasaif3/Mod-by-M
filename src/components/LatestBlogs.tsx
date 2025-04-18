import { FaCalendarAlt, FaPen } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const LuxuryBagsBlog = () => {
  const blogs = [
    {
      title: "Must-Have Luxury Bags for 2025",
      author: "Sophia Loren",
      date: "10 April, 2025",
      description: "Discover the statement bags that are defining luxury fashion this year, from classic totes to bold mini bags.",
      image: "/luxurybag1.jpg",
    },
    {
      title: "How to Style Your Designer Bag",
      author: "Giovanna Rossi",
      date: "02 April, 2025",
      description: "A guide to effortlessly pairing your luxury handbag with everyday and formal outfits for maximum impact.",
      image: "/luxurybag2.jpg",
    },
    {
      title: "Top Luxury Bag Brands You Should Know",
      author: "Camille Dubois",
      date: "25 March, 2025",
      description: "Explore the most iconic and trending luxury handbag brands taking over the fashion world in 2025.",
      image: "/luxurybag3.jpg",
    },
  ];

  return (
    <div className="p-6 bg-white max-w-[1177px] mx-auto">
      <h2 className="text-[42px] text-[#151875] font-josefin font-bold text-center mb-10">
        Luxury Bags Fashion Blogs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={500}
              className="w-full h-[255px] object-cover rounded-t-[8px]"
            />

            <div className="p-4 pr-6">
              <div className="flex items-center gap-8 text-[#151875] text-sm font-josefin mb-2">
                <div className="flex items-center space-x-2">
                  <FaPen className="text-pink-500" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCalendarAlt className="text-[#ffa454]" />
                  <span>{blog.date}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold hover:text-[#FB2E86] mb-2 text-[#151875]">
                {blog.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">{blog.description}</p>

              <Link
                href="/blogs"
                className="hover:text-[#FB2E86] font-medium hover:underline text-[#151875]"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LuxuryBagsBlog;
