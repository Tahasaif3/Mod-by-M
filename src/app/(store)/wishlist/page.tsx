"use client";

import React, { useEffect, useState } from "react";

import Loader from "@/components/Loader";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import userWishlistStore from "../../../../storeForWhislist";
import { Product } from "../../../../sanity.types";
import { urlFor } from "@/sanity/lib/image";
import userCartStore from "../../../../store";
import PageHeader from "@/components/PageHeader";
import EmptyWishlist from "@/components/EmptyWishlist";
import { useAuth } from "@clerk/nextjs";
import NoAccessCart from "@/components/NoAccessCart";

const Wishlist = () => {
  const { removeFromWishlist, clearWishlist} =
    userWishlistStore();
  const { addItem } = userCartStore();
    const {isSignedIn} = useAuth()
  const [isClient, setIsClient] = useState(false);
  const groupedItems = userWishlistStore((state) => state.getGroupedItems()) as Product[];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loader />;
  }

  const handleResetWishlist = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear your wishlist?"
    );
    if (confirmed) {
      clearWishlist();
      toast.success("Wishlist cleared successfully!");
    }
  };

  const handleAddToCart = (product: Product) => {
    addItem(product);
    removeFromWishlist(product._id);
    toast.success("Product added to cart and removed from wishlist!");
  };

  const handleDeleteProduct = (id: string) => {
    removeFromWishlist(id);
    toast.success("Product removed from wishlist successfully!");
  };

  return (
    <section>
      <PageHeader heading="Wishlist" />
      { isSignedIn ? groupedItems.length > 0 ? (
        <div className="max-w-[1170px] mx-auto px-4 py-6">
          <div className="w-full font-josefin">
            {/* Add scroll for table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-[#1D3178] text-base sm:text-xl text-left">
                    <th className="px-2 sm:px-4 py-2">Product</th>
                    <th className="px-2 sm:px-4 py-2 text-center">Price</th>
                    <th className="px-2 sm:px-4 py-2 text-center whitespace-nowrap ">Old Price</th>
                    <th className="px-2 sm:px-4 py-2 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {groupedItems?.map((product) => (
                    <tr key={product._id} className="border-b">
                      <td className="px-2 sm:px-4 py-2 flex items-center gap-2 sm:gap-3">
                        {product?.image && (
                          <Link
                            href={`/products/${product.slug?.current}`}
                            className="relative"
                          >
                            <Image
                              src={urlFor(product?.image).url()}
                              alt={product.name || "Product Image"}
                              width={100}
                              height={100}
                              className="w-12 sm:w-16 h-12 sm:h-16 object-cover rounded"
                            />
                            <span
                              onClick={() => {
                                handleDeleteProduct(product?._id);
                              }}
                              className="absolute -top-1 -right-1 bg-black text-white text-xs sm:text-sm rounded-full w-4 h-4 flex items-center justify-center text-center font-bold cursor-pointer"
                            >
                              x
                            </span>
                          </Link>
                        )}
                        <div>
                          <p className="font-semibold text-xs sm:text-sm">
                            {product?.name}
                          </p>
                        </div>
                      </td>
                      <td className="px-2 sm:px-4 py-2 text-center">
                        <p className="font-semibold text-sm sm:text-base text-[#1D3178]">
                          {product?.price
                            ? `$${Number(product?.price).toFixed(2)}`
                            : "$0.00"}
                        </p>
                      </td>
                      <td className="px-2 sm:px-4 py-2 text-center">
                        <p className="text-sm sm:text-base line-through text-[#1D3178]">
                          {product?.discountPercentage
                            ? `$${product?.discountPercentage.toFixed(2)}`
                            : "$0.00"}
                        </p>
                      </td>
                      <td className="px-2 sm:px-4 py-2 text-center">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="bg-[#FB2E86] text-white px-2 sm:px-4 py-1 sm:py-2 text-[9px] sm:text-sm rounded-[2px] mt-2"
                        >
                          Add to Cart
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleResetWishlist}
                className="bg-[#FB2E86] font-josefin text-xs sm:text-sm w-[120px] sm:w-[134px] h-[34px] sm:h-[39px] text-white rounded-[2px]"
              >
                Clear Wishlist
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <EmptyWishlist />
        </div>
      ) : <div><NoAccessCart name={"wishlist"}/> </div>}
    </section>
  );
};

export default Wishlist;
