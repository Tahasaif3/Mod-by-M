"use client";

import React, { useEffect, useState } from "react";
import { searchProductByName } from "@/sanity/helpers";
import Image from "next/image";
import Link from "next/link";
import { GoHeart } from "react-icons/go";
import { FaSearchPlus } from "react-icons/fa";
import { PiShoppingCartSimple } from "react-icons/pi";
import { toast } from "react-hot-toast";
import { urlFor } from "@/sanity/lib/image";
import Loader from "@/components/Loader";
import userCartStore from "../../../../store";
import userWishlistStore from "../../../../storeForWhislist";
import { Product } from "../../../../sanity.types";

interface Props {
  searchParams: {
    query: string; 
  };
}

const SearchPage = ({ searchParams }: Props) => {
  const { query } = searchParams; 
    const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true); 

  const { addItem } = userCartStore();
  const { addToWishlist } = userWishlistStore();

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true); 
      try {
        const result = await searchProductByName(query);
        setProducts(result || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchSearchResults();
  }, [query]);

  const handleAddToCart = (product: Product) => {
    addItem(product);
    toast.success(`${product?.name?.substring(0, 12)}... added to cart!`);
  };

  const handleAddToWishlist = (product: Product) => {
    addToWishlist(product);
    toast.success(`${product?.name?.substring(0, 12)}... added to wishlist!`);
  };

  if (loading) {
    
    return <Loader />;
  }

  return (
    <div className="max-w-[1177px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 overflow-hidden">
      <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-center mb-8 mt-16 font-josefin text-[#151875]">
        Search Results for {query}
      </h2>
      {products.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item: Product, index: number) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-full max-w-[250px] bg-white shadow-lg overflow-hidden relative">
                {/* Image Section */}
                <div className="relative w-full h-[200px] bg-[#F6F7FB] flex items-center justify-center">
                  {item?.image ? (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.name || "Product Image"}
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                  ) : (
                    <div>No Image</div>
                  )}
               
                  {item?.stockLevel !== 0 && (
                    <div className="absolute top-2 left-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div
                        onClick={() => handleAddToCart(item)}
                        className="bg-[#eeeffb] h-[30px] w-[30px] p-2 rounded-full flex items-center justify-center cursor-pointer"
                      >
                        <PiShoppingCartSimple size={19} className="text-[#151875]" />
                      </div>
                      <div
                        onClick={() => handleAddToWishlist(item)}
                        className="p-2 cursor-pointer"
                      >
                        <GoHeart size={17} className="text-[#1DB4E7]" />
                      </div>
                      <div className="p-2">
                        <FaSearchPlus size={15} className="text-[#1DB4E7]" />
                      </div>
                    </div>
                  )}
              
                  {item?.stockLevel !== 0 && (
                    <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link href={`/products/${item.slug?.current}`}>
                        <button className="bg-[#08D15F] text-white py-1 px-4 rounded-md text-sm">
                          View Details
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
           
                <div className="p-4 flex flex-col items-center text-center">
                  <h3 className="text-[16px] font-bold text-[#151875]">
                  {item.name && item.name.length > 20 ? `${item.name.slice(0, 20)}...` : item.name}

                  </h3>
                  <p className="text-sm text-[#FB2E86]">{`Code: ${"N/A"}`}</p>
                  <p className="text-sm text-[#151875]">{`$${item.price}`}</p>
                </div>
                {item?.stockLevel === 0 && (
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <p className="text-lg font-bold text-white">Out of Stock</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-[#FB2E86] font-semibold text-[20px]">
          No products found for {query}.
        </div>
      )}
    </div>
  );
};

export default SearchPage;
