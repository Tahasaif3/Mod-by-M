import React from "react";
import { LuCalendarDays } from "react-icons/lu";
import { FaPenNib } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Image from "next/image";
import Logos from "@/components/Logos";
import PageHeader from "@/components/PageHeader";



const recentPosts = [
  {
    id: 1,
    title: "It is a long established fact",
    date: "Aug 08 2020",
    image: "/recentpost1.svg",
  },
  {
    id: 2,
    title: "It is a long established fact",
    date: "Aug 07 2020",
    image: "/recentpost2.svg",
  },
  {
    id: 3,
    title: "It is a long established fact",
    date: "Aug 06 2020",
    image: "/recentpost3.svg",
  },
  {
    id: 4,
    title: "It is a long established fact",
    date: "Aug 06 2020",
    image: "/recentpost4.svg",
  },
];


 const saleProducts = [
  {
    id: 1,
    title: "Elit ornare in enim mauris",
    date: "Aug 09 2020",
    image: "/saleproduct.svg",
  },
  {
    id: 2,
    title: "Elit ornare in enim mauris",
    date: "Aug 09 2020",
    image: "/saleproduct2.svg",
  },
  {
    id: 3,
    title: "Elit ornare in enim mauris",
    date: "Aug 09 2020",
    image: "/saleproduct3.svg",
  },
];

const offerProducts = [
  {
    id: 1,
    title: "Duis lectus est.",
    price: "$12.00 - $15.00",
    image: "/offerproduct.svg",
  },
  {
    id: 2,
    title: "Sed placerat.",
    price: "$12.00 - $15.00",
    image: "/offerproduct3.svg",
  },
  {
    id: 3,
    title: "Netus proin.",
    price: "$12.00 - $15.00",
    image: "/offerproduct2.svg",
  },
  {
    id: 4,
    title: "Platea in.",
    price: "$12.00 - $15.00",
    image: "/offerproduct4.svg",
  },
];

 const tags = ["General", "Atsanil", "Insas.", "Bibsaas", "Nulla."];
const blogs = [
  {
    id: 1,
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    date: "Aug 09 2020",
    author: "Sarah Alison",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    image: "/blogimg2.svg",
  },
  {
    id: 2,
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    date: "Aug 09 2020",
    author: "Sarah Alison",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    image: "/blogimg3.svg",
  },
  {
    id: 3,
    title: "Sit nam congue feugiat nisl, mauris amet nisi.",
    date: "Aug 09 2020",
    author: "Sarah Alison",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    image: "/blogimg1.svg",
  },
];

const Blogs = () => {
 

  

  return (
    <section>

      <PageHeader heading="Blog Page" />
    <div className="w-full overflow-hidden">
      <div className="max-w-[1170px] mx-auto px-4 lg:px-0">
        <div className="flex flex-wrap">
       

          <div className="w-full lg:w-3/4 px-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="mb-8  bg-white ">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={870}
                  height={453}
                  className="w-full h-auto object-cover rounded-lg mb-4 lg:h-[453px]"
                />
                <div className="flex flex-wrap items-center gap-4 mb-4 font-josefin">
                  <div className="flex items-center">
                    <FaPenNib className="text-[#FB2E86]" />
                    <span className="ml-3 text-[#151875] bg-[#FFE7F9] rounded-[2px] px-4 py-1 text-sm lg:px-10">
                      {blog.author}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <LuCalendarDays className="text-[#FFA454]" />
                    <span className="ml-2 text-[#151875] bg-[#FFECE2] rounded-[2px] px-4 py-1 text-sm lg:px-6">
                      {blog.date}
                    </span>
                  </div>
                </div>
                <h2 className="text-lg lg:text-xl font-bold text-[#151875] font-josefin mb-2">
                  {blog.title}
                </h2>
                <p className="text-sm lg:text-base text-[#8A8FB9] font-lato mb-4">
                  {blog.content}
                </p>
                <Link
                  href={`/blog/${blog.id}`}
                  className="text-[#151875] font-lato hover:underline font-semibold flex items-center"
                >
                  Read More{" "}
                  <GoDotFill className="text-[#FB2E86] ml-2 w-[10px] h-[10px]" />
                </Link>
              </div>
            ))}
          </div>

         
          <div className="w-full lg:w-1/4 px-4">
   
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2 text-[#151875] font-josefin">
                Search
              </h3>
              <input
                type="text"
                placeholder="Search for post"
                className="w-full p-2 border rounded-[2px]"
              />
            </div>

           
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2 text-[#151875] font-josefin">
                Categories
              </h3>
              <ul className=" text-[#3F509E] font-josefin grid grid-cols-2  ">
                <li className="mb-2 hover:bg-[#FF27B7] hover:rounded-sm hover:p-1 hover:text-white ">
                  Hobbies (14)
                </li>
                <li className="mb-2 hover:bg-[#FF27B7] hover:rounded-sm hover:p-1 hover:text-white">
                  Women (21)
                </li>
                <li className="mb-2 hover:bg-[#FF27B7] hover:rounded-sm hover:p-1 hover:text-white">
                  Women (21)
                </li>
                <li className="mb-2 hover:bg-[#FF27B7] hover:rounded-sm hover:p-1 hover:text-white">
                  Women (21)
                </li>
                <li className="mb-2 hover:bg-[#FF27B7] hover:rounded-sm hover:p-1 hover:text-white">
                  Women (21)
                </li>
                <li className="mb-2 hover:bg-[#FF27B7]hover:rounded-sm hover:p-1 hover:text-white">
                  Women (21)
                </li>
              </ul>
            </div>

          
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2 text-[#151875] font-josefin">
                Recent Posts
              </h3>
              {recentPosts.map((post) => (
                <div key={post.id} className="flex mb-4 mt-8">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={70}
                    height={51}
                    className="w-[70px] h-[51px] object-cover rounded-sm mr-4"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-[#3F509E] whitespace-nowrap font-josefin">
                      {post.title}
                    </h4>
                    <p className="text-xs text-[#8A8FB9] font-lato">
                      {post.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

           
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2 text-[#151875] font-josefin">
                Sale Products
              </h3>
              {saleProducts.map((product) => (
                <div key={product.id} className="flex mb-4 mt-8">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={70}
                    height={51}
                    className="w-[70px] h-[51px] object-contain rounded-sm mr-4"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-[#3F509E] whitespace-nowrap font-josefin">
                      {product.title}
                    </h4>
                    <p className="text-xs text-[#8A8FB9] font-lato">
                      {product.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

    
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2 text-[#151875] font-josefin">
                Offer Product
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 mt-8  ">
                {offerProducts.map((offer) => (
                  <div key={offer.id} className="text-center">
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      width={126}
                      height={80}
                      className="w-full h-[80px] object-cover rounded-sm mb-2"
                    />
                    <h4 className="text-sm font-semibold text-[#151875] text-[14px">
                      {offer.title}
                    </h4>
                    <span className="font-lato text-[#8A8FB9] text-[12px] ">
                      {offer.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

       
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2 text-[#151875] font-josefin">
                Follow
              </h3>
              <div className="w-[126px] h-[41px] flex items-center justify-center shadow-custom">
                <div className="flex space-x-4 ">
                  <Link
                    href="/"
                    className="h-[25px] w-[25px] flex items-center justify-center rounded-full bg-[#5625DF] shadow-custom text-white"
                  >
                    <FaFacebookF className="h-[15px] w-[15px]" />
                  </Link>

                  <Link
                    href="/"
                    className="h-[25px] w-[25px] flex items-center justify-center rounded-full  bg-[#FF27B7] shadow-custom text-white"
                  >
                    <RiInstagramFill className="h-[15px] w-[15px]" />
                  </Link>

                  <Link
                    href="/"
                    className="h-[25px] w-[25px] flex items-center justify-center rounded-full bg-[#37DAF3] shadow-custom text-white"
                  >
                    <FaTwitter className="h-[15px] w-[15px]" />
                  </Link>
                </div>
              </div>
            </div>

      
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2 font-josefin text-[#151875] ">
                Tags
              </h3>
              <div className="flex flex-wrap">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className=" text-[#151875] px-3 py-1  text-md font-lato mr-2 mb-2 underline hover:text-[#FF27B7]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Logos/>
    </section>
  );
};

export default Blogs;
