"use client";
import { FaStar } from "react-icons/fa";
import React from "react";
import { useParams } from "next/navigation";

import { LuCalendarDays } from "react-icons/lu";
import { FaPenNib } from "react-icons/fa";

import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BiUser, BiEnvelope, BiMessageSquareDetail } from "react-icons/bi";

import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

import Image from "next/image";

import Logos from "@/components/Logos";
import PageHeader from "@/components/PageHeader";


const recentBlogPosts = [
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


const SingleBlogPost = () => {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const idNumber = id ? parseInt(id) : null;

  interface BlogType {
    title: string;
    content: string;
    image: string;
    id: number;
    date: string;
    author: string;
  }

  const blogsname: BlogType = blogs.find((item) => item.id === idNumber) ?? {
    title: "",
    content: "",
    image: "",
    id: 0,
    author: "",
    date: "",
  };
  

  if (!blogsname) {
    return <p>Product not found!</p>;
  }


  const relatedPosts = [
    {
      id: 1,
      title: "Sapiens orci",
      date: "Aug 09 2020",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.",
      image: "/rel.svg",
    },
    {
      id: 2,
      title: "Auguer como",
      date: "Aug 09 2020",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.",
      image: "/rel2.svg",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Quam sed",
      price: "$32.00",
      oldPrice: "$56.00",
      rating: 4.5,
      image: "/bl1.svg",
    },
    {
      id: 2,
      name: "Tristique sed",
      price: "$32.00",
      oldPrice: "$56.00",
      rating: 4,
      image: "/bl2.svg",
    },
    {
      id: 3,
      name: "A etiam",
      price: "$32.00",
      oldPrice: "$56.00",
      rating: 3.5,
      image: "/bl4.svg",
    },
    {
      id: 4,
      name: "Mi nisi",
      price: "$32.00",
      oldPrice: "$56.00",
      rating: 4,
      image: "/bl5.svg",
    },
  ];

  
  return (
        <section>
                <PageHeader heading="Single Blog" />
    <div className="container mx-auto px-4">

      <div className="max-w-[1170px] mx-auto px-4 lg:px-0">
        <div className="flex flex-wrap">
        

          <div className="w-full lg:w-3/4 px-4">
            <div key={blogsname.id} className="mb-8 bg-white">
              <Image
                src={blogsname.image}
                alt={blogsname.title}
                width={870}
                height={453}
                className="w-full h-auto object-cover rounded-lg mb-4 lg:h-[453px]"
              />
              <div className="flex flex-wrap items-center gap-4 mb-4 font-josefin">
                <div className="flex items-center">
                  <FaPenNib className="text-[#FB2E86]" />
                  <span className="ml-3 text-[#151875] bg-[#FFE7F9] rounded-[2px] px-4 py-1 text-sm lg:px-10">
                    {blogsname.author}
                  </span>
                </div>
                <div className="flex items-center">
                  <LuCalendarDays className="text-[#FFA454]" />
                  <span className="ml-2 text-[#151875] bg-[#FFECE2] rounded-[2px] px-4 py-1 text-sm lg:px-6">
                    {blogsname.date}
                  </span>
                </div>
                  
                <h2 className="text-lg lg:text-xl font-bold text-[#151875] font-josefin mb-2">
                  {blogsname.title}
                </h2>
              </div>
            </div>

          
            <div className="mb-8 " key={blogsname.id}>
              <p className="text-sm lg:text-base text-[#8A8FB9] font-lato mb-4">
                {blogsname.content}
              </p>
              <p className=" leading-relaxed mb-4 text-sm lg:text-base mt-14 text-[#8A8FB9] font-lato">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
                nunc,
              </p>

              <blockquote className="font-lato italic text-[#969CB4] text-sm lg:text-[18px]  pl-6 border-l-4 border-[#FB2E86] mb-6 mt-14 h-[141px] bg-[#FAFAFB] flex justify-center items-center">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Commodo dictum sapien, amet, consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Commodo dictum sapien, amet,
                consequat toamk risusu”
              </blockquote>

              <div className="flex flex-wrap lg:flex-nowrap lg:space-x-4 mb-4">
                <Image
                  src="/singleblog1.svg"
                  alt="Sub"
                  width={417}
                  height={245}
                  className="w-full lg:w-1/2 h-[245px] object-cover"
                />
                <Image
                  src="/singleblog.svg"
                  alt="Sub"
                  width={417}
                  height={245}
                  className="w-full lg:w-1/2 h-[245px] object-cover mt-4 lg:mt-0"
                />
              </div>

              <p className=" leading-relaxed mb-14 text-sm lg:text-base mt-10 text-[#8A8FB9] font-lato">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
                nunc,
              </p>
            </div>

        
            <div className="mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {products.map((product) => (
                  <div key={product.id} className="">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={254.7}
                      height={209.54}
                      className="w-full lg:w-[254.7px] h-[209.54px] object-cover mb-2"
                    />
                    <h3 className="text-md ml-4 font-josefin font-bold ">
                      {product.name}
                    </h3>
                    <div className="flex items-center text-[13.5px] font-josefin font-semibold mt-2">
                      <span className="text-[#151875] mr-2">
                        {product.price}
                      </span>
                      <span className="line-through text-[#FB2E86] mr-2">
                        {product.oldPrice}
                      </span>

                      <div className="flex items-center space-x-[2px]">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <FaStar
                            key={index}
                            className={
                              index < 4 ? "text-yellow-400" : "text-gray-300"
                            }
                            size={10} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className=" leading-relaxed mb-4 text-sm lg:text-base mt-14 text-[#8A8FB9] font-lato">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
                nunc,
              </p>
              <p className=" leading-relaxed mb-12  text-sm lg:text-base mt-14 text-[#8A8FB9] font-lato">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                dapibus est, nunc, montes, lacus consequat integer viverra. Sit
                morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
                posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Velit dapibus est, nunc, montes, lacus
                consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Velit dapibus est,
                nunc,
              </p>

              <div className="mb-8 flex items-center justify-center border-t-2 border-[#F7F8FB]">
                <div className="w-[126px] h-[41px] flex items-center justify-center mt-6">
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
              <div className="h-[45px] bg-[#F7F8FB] p-4 flex justify-between rounded-[2.5px] ">
                <div className="flex items-center gap-1 font-lato text-[#8A8FB9] text-[16px] ">
                  <FaArrowLeftLong />
                  <span>Previous Post</span>
                </div>

                <div className="flex items-center font-lato text-[#8A8FB9] text-[16px] gap-1">
                  <span>Next Post</span>
                  <FaArrowRightLong />
                </div>
              </div>
            </div>

           
            <div className="mb-8 mt-8">
              <div>
                {relatedPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex mb-4 shadow-customShadow p-4  h-[137.16px] max-w-[667.68px] items-center"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={103.16}
                      height={106.56}
                      className="w-[103.16px] h-[106.56px] object-cover rounded-[2.5px] mr-4"
                    />
                    <div>
                      <div className="flex flex-wrap  gap-2 lg:gap-4 font-lato items-center ">
                        <h3 className="text-sm md:text-md font-bold font-josefin text-[#363385] truncate">
                          {post.title}
                        </h3>
                        <p className="text-xs text-[#A3A2B6]">{post.date}</p>
                      </div>
                      <p className="text-xs md:text-sm mt-2 text-[#A3A2B6] leading-relaxed">
                        {post.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            

            <div className="mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
             
                <div className="flex items-center gap-2 border border-gray-300  focus-within:ring-2 focus-within:ring-pink-400 p-1">
                  <BiUser className="text-gray-400 text-lg" />
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="w-full h-[42px] focus:outline-none text-[13.5px]"
                    required
                  />
                </div>

              
                <div className="flex items-center gap-2 border border-gray-300 focus-within:ring-2 focus-within:ring-pink-400 p-1">
                  <BiEnvelope className="text-gray-400 text-lg" />
                  <input
                    type="email"
                    placeholder="Write Your Email*"
                    className="w-full focus:outline-none h-[42px] text-[13.5px]"
                    required
                  />
                </div>
              </div>
            </div>

          
            <div className="flex items-start gap-2 border border-gray-300 focus-within:ring-2 focus-within:ring-pink-400 p-1 mb-4">
              <BiMessageSquareDetail className="text-gray-400 text-lg mt-2" />
              <textarea
                placeholder="Write your comment*"
                className="w-full focus:outline-none text-[13.5px]"
                rows={8}
                required
              ></textarea>
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="saveInfo"
                className="mr-2 focus:ring-pink-400"
              />
              <label
                htmlFor="saveInfo"
                className="lg:text-sm text-xs  text-gray-600"
              >
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>

         
            <button
              type="submit"
              className="w-full bg-[#FB2E86] text-white py-2 px-4 rounded-[2px] hover:bg-[#FF27B7] mb-4 transition-all"
            >
              Continue Shipping
            </button>
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
              {recentBlogPosts.map((post) => (
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

export default SingleBlogPost;
