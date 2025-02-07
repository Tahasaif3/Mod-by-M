"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import { Product } from "../../sanity.types";
import { getTrendingProducts } from "@/sanity/helpers";
import { urlFor } from "@/sanity/lib/image";



const TrendingProducts = () => {
  const [products, setProducts] = useState<Product[]>([]); // Fetched products

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getTrendingProducts();
        const sortedProducts = (fetchedProducts || [])
      
        setProducts(sortedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="mx-auto bg-white max-w-[1177px] px-4 pb-6 overflow-hidden">
      <h2 className="text-[42px] font-semibold text-[#151875] font-josefin text-center mt-20 mb-6">
        Trending Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="text-center shadow hover:shadow-lg transition p-4 bg-[#FFFFFF]"
          >
            <div className="flex items-center justify-center w-full h-[200px] bg-gray-100">
             <Link  href={`/products/${product?.slug?.current}`}>
             {product?.image ? (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name || "product image"}
                  width={200}
                  height={200}
                  className="max-h-full max-w-full"
                />
              ) : (
                <div>no image</div>
              )}
             </Link>
            </div>
            <h3 className="text-lg text-[16px] mt-4 font-semibold text-[#151875]">
              {product.name}
            </h3>
            <div className="flex justify-center items-center mt-2 space-x-2">
              <p className="text-[14px] font-bold text-[#151875]">
                {product.price}
              </p>
              <p className="text-sm text-[12px] text-gray-500 line-through">
                {product.discountPercentage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
