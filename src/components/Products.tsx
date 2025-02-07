"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GoHeart } from "react-icons/go";
import { FaSearchPlus } from "react-icons/fa";
import { PiShoppingCartSimple } from "react-icons/pi";
import Link from "next/link";
import { toast } from "react-hot-toast"
import { getFeaturedProducts } from "@/sanity/helpers";
import { Product } from "../../sanity.types";
import { urlFor } from "@/sanity/lib/image";
import userCartStore from "../../store";
import userWishlistStore from "../../storeForWhislist";

const Products = () => {
  const itemsPerPage = 4; // Number of products per page
  const [currentPage, setCurrentPage] = useState(0); // Current page index
  const [products, setProducts] = useState<Product[]>([]); // Fetched products

  const {addItem} = userCartStore()
  const {addToWishlist} = userWishlistStore()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getFeaturedProducts();
        const sortedProducts = (fetchedProducts || [])
         // Sort by ID
        setProducts(sortedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Get products for the current page
  const currentProducts = products.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  // Function to handle dot click
  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const handleAddToCart = (product:Product) => {
    addItem(product)
    toast.success(`${product?.name?.substring(0,12)}...added successfully`)
  }
  const handleAddToWishlist = (product:Product) => {
    addToWishlist(product)
    toast.success(`${product?.name?.substring(0,12)}...added successfully`)
  }
  return (
    <div className="max-w-[1177px] mx-auto px-4">
      <h2 className="text-[42px] font-semibold text-center mb-8 mt-16 font-josefin text-[#151875]">
        Featured Products
      </h2>
      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {currentProducts.map((items, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="w-[270px] h-[361px] bg-white shadow-lg overflow-hidden relative">
              <div className="relative w-[270px] h-[236px] bg-[#F6F7FB] flex items-center justify-center">
                <div className=" w-[178px] h-[178px] flex items-center justify-center">
                  {items?.image ? (
                    <Image
                      src={urlFor(items.image).url()}
                      alt={items.name || "product image"}
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                  ) : (
                    <div>no image</div>
                  )}
                </div>

                <div className={`absolute top-2 left-2 opacity-0 ${items?.stockLevel !==0 && "group-hover:opacity-100 transition-opacity flex gap-1"} `}>
                  <div onClick={() => handleAddToCart(items)} className="bg-[#eeeffb] h-[30px] w-[30px] p-2 rounded-full flex items-center justify-center">
                    <PiShoppingCartSimple
                      size={19}
                      className="text-[#151875] cursor-pointer"
                    />
                  </div>
                  <div onClick={() => handleAddToWishlist(items)} className="p-2 cursor-pointer">
                    <GoHeart size={17} className="text-[#1DB4E7]" />
                  </div>
                  <div className="p-2">
                    <FaSearchPlus size={15} className="text-[#1DB4E7]" />
                  </div>
                </div>
                <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link href={`/products/${items?.slug?.current}`} >
                    <button className={`bg-[#08D15F] text-white py-2 px-4 rounded-[2px] w-[94px] h-[29px] flex items-center gap-2 text-[12px] whitespace-nowrap ${items?.stockLevel === 0 && "hidden"}`}>
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
              <div className={`p-4 flex flex-col items-center gap-2 ${items?.stockLevel !== 0 && "group-hover:bg-[#2F1AC4] group-hover:text-white transition-all"}`} >
                <div className={`font-lato font-semibold text-[18px]  text-[#FB2E86] ${items?.stockLevel !==0 && "group-hover:text-white"}`}>
                {items?.name ? items.name.split(' ').slice(0, 3).join(' ') + (items.name.split(' ').length > 3 ? '...' : '') : 'No Name Available'}
                </div>
                <div className="flex gap-1 items-center justify-center">
                  <div className="h-[4px] rounded-[10px] w-[14px] bg-[#05E6B7]"></div>
                  <div className="h-[4px] rounded-[10px] w-[14px] bg-[#F701A8]"></div>
                  <div className={` h-[4px] rounded-[10px] w-[14px] bg-[#00009D] ${items?.stockLevel !==0 && "group-hover:bg-white "}`}></div>
                </div>
                <div className={`font-josefin text-[14px] text-[#151875] ${items?.stockLevel !==0 && "group-hover:text-white"}`}>
                  {`Code - ${"N/A"}  `}
                </div>
                <div className={` text-[14px] text-[#151875] ${items?.stockLevel !==0 && "group-hover:text-white"}`}>
                  {`$${items.price}`}
                </div>
              </div>
              {items?.stockLevel ===0 && ( <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center" >
                <p className="text-lg font-bold text-white" >Out of Stock</p></div> )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12 gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            onClick={() => handlePageChange(index)}
            className={`w-6 sm:w-6 h-[4px] mb-4 rounded-[10px] cursor-pointer transition-all duration-300 ${
              currentPage === index ? "bg-[#FB2E86]" : "bg-[#FF75B0]"
            }`}
          ></span>
        ))}
      </div>
      
    </div>
  );
};

export default Products;
