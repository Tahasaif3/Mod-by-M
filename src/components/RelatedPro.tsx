"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../../sanity.types"; // Adjust the path as per your file structure
import { urlFor } from "@/sanity/lib/image";

interface Props {
  products: Product[];
}

const RelatedPro: React.FC<Props> = ({ products }) => {
  return (
    <div className="mx-auto max-w-[1170px] font-josefin mt-20">
      <h2 className="text-3xl font-bold text-[#151875]">Related Products</h2>
      <div className="flex space-x-6 mt-6 overflow-x-auto">
        {products.length > 0 ? (
          products.map((relatedProduct) => (
            <div
              key={relatedProduct._id}
              className="flex-shrink-0 w-[270px] p-4"
            >
              {/* Product Image */}
              <div className="w-full flex items-center justify-center h-[340px] bg-gray-200 relative">
                <Link
                  href={`/products/${relatedProduct?.slug?.current || "#"}`}
                  className="block"
                >
                  {relatedProduct?.image ? (
                    <Image
                      src={urlFor(relatedProduct.image).url()}
                      alt={relatedProduct?.name || "Product Image"}
                      width={270}
                      height={340}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      No Image Available
                    </div>
                  )}
                </Link>
              </div>

              {/* Product Name and Rating */}
              <div className="flex justify-between mt-4">
                {/* Product Name */}
                <h3 className="text-[14px] font-semibold text-[#151875] truncate max-w-[200px]">
                  {relatedProduct?.name
                    ? relatedProduct.name.split(" ").slice(0, 3).join(" ") +
                      (relatedProduct.name.split(" ").length > 3 ? "..." : "")
                    : "No Name Available"}
                </h3>

                {/* Product Rating */}
                <div className="flex items-baseline gap-3">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-yellow-400 w-[6px] h-[6px]">
                      <FaStar />
                    </span>
                  ))}
                  <span className="text-gray-300 w-[6px] h-[6px]">
                    <FaStar />
                  </span>
                </div>
              </div>

              {/* Product Price */}
              <p className="text-[13px] text-[#151875] mt-2 font-medium">
                ${relatedProduct.price || "N/A"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-[#A9ACC6] text-lg">
            No related products available.
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedPro;
