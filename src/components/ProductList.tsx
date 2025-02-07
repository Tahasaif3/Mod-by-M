"use client"

import React, { useEffect, useState } from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import { GoHeart } from "react-icons/go";
import { FaSearchPlus } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { getLatestProducts } from "@/sanity/helpers";
import { Product } from "../../sanity.types";
import { urlFor } from "@/sanity/lib/image";
import userCartStore from "../../store";
import { toast } from "react-hot-toast";
import userWishlistStore from "../../storeForWhislist";






const ProductList = () => {


    const [products, setProducts] = useState<Product[]>([]); // Fetched products
    
    const {addItem} = userCartStore()
    const {addToWishlist} = userWishlistStore()



      useEffect(() => {
        const fetchProducts = async () => {
          try {
            const fetchedProducts = await getLatestProducts();
            const sortedProducts = (fetchedProducts || [])
            setProducts(sortedProducts);
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        };
        fetchProducts();
      }, []);


console.log(products)
const handleAddToCart = (product:Product) => {
    addItem(product)
    toast.success(`${product?.name?.substring(0,12)}...added successfully`)
  }

  const handleAddToWishlist = (product:Product) => {
    addToWishlist(product)
    toast.success(`${product?.name?.substring(0,12)}...added successfully`)
  }


  return (
    <section className="p-4 sm:p-6 md:p-8 max-w-[1177px] mx-auto">
      <h2 className="text-[28px] sm:text-[34px] md:text-[42px] font-josefin font-semibold text-center mb-4 mt-20 text-[#151875]">
        Latest Products
      </h2>
      <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 md:space-x-12 mb-8 text-[14px] sm:text-[16px] md:text-[18px] text-[#151875]">
        <span className="cursor-pointer text-[#FB2E86] underline underline-offset-4">New Arrival</span>
        <span>Best Seller</span>
        <span>Featured</span>
        <span>Special Offer</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 gap-y-8 md:gap-y-[110px]">
        {products.map((product) => (
          <div key={product._id} className="flex flex-col items-center group">
            <div className="w-full max-w-[360px] h-auto bg-white pb-2 relative ">
       
              <div className="w-full h-[250px] sm:h-[280px]  bg-[#F7F7F7] hover:bg-white relative overflow-hidden flex items-center justify-center">
                <div className="w-[178px] h-[178px] flex items-center justify-center">
                 
                  {
                                      product?.image? (
                                        <Image
                                       src={urlFor(product.image).url()}
                                          alt={product.name || "product image"}
                                          width={250}
                                          height={250}
                                          className="w-full h-full object-cover rounded-md"
                                        />
                      
                                      ) : (
                                        <div>no image</div>
                                      )
                                    }
                </div>
               
                <div className={`absolute bottom-4 left-4 opacity-0  flex flex-col gap-2 ${product?.stockLevel !== 0 && "group-hover:opacity-100 transition-opacity"}`}>
                  
                  <div onClick={() => handleAddToCart(product)}  className="bg-[#eeeffb] h-[30px] w-[30px] p-2 rounded-full flex items-center justify-center">
                    <PiShoppingCartSimple size={19} className="text-[#2F1AC4] cursor-pointer" />
                  </div>

                  
                  <div onClick={() => handleAddToWishlist(product)}  className="h-[30px] w-[30px] p-2 flex items-center justify-center cursor-pointer">
                    <GoHeart size={17} className="text-[#2F1AC4]" />
                  </div>

                
                  <div className="h-[30px] w-[30px] p-2 flex items-center justify-center">
                    <FaSearchPlus size={15} className="text-[#2F1AC4]" />
                  </div>
                </div>
              </div>

              
              <div className="flex flex-col mt-2 px-4">
                <div className="flex justify-between items-center mt-1">
                 
                {product?.stockLevel !== 0 ? (
  // Functional Link when stock is available
  <Link
  href={`/products/${product?.slug?.current}`}
    className="text-sm sm:text-base font-medium underline underline-offset-4 decoration-[#EEEEFB] decoration-2 text-[#151875]"
  >
    {product.name}
  </Link>
) : (
  // Visible but non-functional text when stock is zero
  <span className="text-sm sm:text-base font-medium text-gray-500">
    {product.name}
  </span>
)}

                 
                  <div className="flex gap-2 items-center">
                    <p className="font-bold text-[#151875] text-sm sm:text-base font-josefin">{product.price}</p>
                    <p className="line-through text-xs sm:text-sm text-[#FB2448] font-josefin">{product.discountPercentage}</p>
                  </div>
                </div>
              </div>
              {product?.stockLevel ===0 && ( <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center" >
                <p className="text-lg font-bold text-white" >Out of Stock</p></div> )}
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default ProductList;
