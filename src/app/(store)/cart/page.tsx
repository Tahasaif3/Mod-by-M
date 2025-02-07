"use client";

import PageHeader from "@/components/PageHeader";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "@/components/Loader";

import userCartStore from "../../../../store";
import { urlFor } from "@/sanity/lib/image";
import QuantityButton from "@/components/QuantityButton";
import toast from "react-hot-toast";
import EmptyCart from "@/components/EmptyCart";
import { useAuth } from "@clerk/nextjs";
import NoAccessCart from "@/components/NoAccessCart";

export default function Cart() {
  const {
    deleteCartProduct,
    getTotalPrice,
    getItemCount,
    getSubTotalPrice,
    resetCart,
    updateCartQuantity,
  } = userCartStore();
  const [isClient, setIsClient] = useState(false);
  const { isSignedIn } = useAuth();

  const groupedItems = userCartStore((state) => state.getGroupedItems());

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <Loader />;
  }

  const handleDeleteProduct = (id: string) => {
    deleteCartProduct(id);
    toast.success("Product deleted successfully!");
  };

  const handleResetCart = () => {
    const confirmed = window.confirm("Are you sure to reset your cart?");
    if (confirmed) {
      resetCart();
      toast.success("Your cart has been reset successfully!");
    }
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity > 0) {
      updateCartQuantity(id, quantity);
      toast.success("Quantity updated!");
    } else {
      toast.error("Quantity must be greater than zero.");
    }
  };

  return (
    <section>
      <PageHeader heading="Shopping Cart"  />
      {isSignedIn ? (groupedItems.length > 0 ? (
        <div className="max-w-[1170px] mx-auto px-4 py-6 overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-2/3 font-josefin">
            <table className="w-full border-collapse">
                <thead>
                  <tr className="text-[#1D3178] text-base sm:text-xl text-left">
                    <th className="px-2 sm:px-4 py-2">Product</th>
                    <th className="px-2 sm:px-4 py-2 text-center">Price</th>
                    <th className="px-2 sm:px-4 py-2 text-center">Quantity</th>
                    <th className="px-2 sm:px-4 py-2 text-center">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {groupedItems?.map(({ product }) => {
                    const itemCount = getItemCount(product?._id);
                    return (
                      <tr key={product?._id} className="border-b">
                        <td className="px-2 sm:px-4 py-2 flex items-center gap-2 sm:gap-3">
                          {product?.image && (
                            <Link
                              href={`/products/${product.slug?.current}`}
                              className="relative"
                            >
                              <Image
                                src={urlFor(product?.image).url()}
                                alt={product.name || "productImage"}
                                width={100}
                                height={100}
                                className="w-12 sm:w-16 h-12 sm:h-16 object-cover rounded"
                              />
                              <span
                                onClick={() =>
                                  handleDeleteProduct(product?._id)
                                }
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
                          <p className="font-semibold text-xs sm:text-sm text-[#1D3178]">
                            {product?.price
                              ? `$${Number(product?.price).toFixed(2)}`
                              : "$0.00"}
                          </p>
                        </td>
                        <td className="px-2 lg:pl-10 md:pl-10 pl-5 sm:px-4 py-2 text-center">
                          <QuantityButton
                            product={product}
                            onQuantityChange={handleUpdateQuantity}
                          />
                        </td>
                        <td className="px-2 sm:px-4 py-2 text-center text-[#1D3178] text-sm sm:text-base">
                          {product?.price
                            ? `£${Number(product.price * itemCount).toFixed(2)}`
                            : "$0.00"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="flex justify-between items-center mt-4">
                <button className="bg-[#FB2E86] font-josefin w-[120px] sm:w-[134px] h-[36px] sm:h-[39px] text-white px-4 py-2 rounded-[2px] sm:mr-auto">
                  Update Cart
                </button>
                <button
                  onClick={handleResetCart}
                  className="bg-[#FB2E86] font-josefin w-[120px] sm:w-[134px] h-[36px] sm:h-[39px] text-white px-4 py-2 rounded-[2px]  sm:mt-0 sm:ml-auto"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/3 mt-6 sm:mt-0">
              <h2 className="text-lg lg:text-xl font-josefin text-[#1D3178] font-bold mb-4 text-center pb-2">
                Cart Totals
              </h2>
              <div className="bg-[#F4F4FC] p-6">
                <div className="flex justify-between py-2 text-[#1D3178] text-lg lg:text-xl font-josefin border-b-2 border-solid border-[#E8E6F1] mb-2">
                  <span className="font-semibold">Subtotal:</span>
                  <span> £{getSubTotalPrice().toFixed(2)} </span>
                </div>
                <div className="flex text-[#1D3178] text-lg lg:text-xl font-josefin justify-between py-2 border-b-2 border-solid border-[#E8E6F1] mb-2">
                  <span className="font-semibold">Total:</span>
                  <span>£{getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex items-center mb-6 mt-10">
                  <input
                    type="checkbox"
                    id="saveInfo"
                    className="mr-2 focus:ring-[#19D16F] rounded-[2px]"
                  />
                  <label
                    htmlFor="saveInfo"
                    className="lg:text-sm text-xs font-lato text-[#8A91AB]"
                  >
                    Shipping & taxes calculated at checkout.
                  </label>
                </div>
                <Link href="/shipping">
                  <button className="bg-[#19D16F] text-white w-full py-2 rounded mt-4">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )) : (
        <NoAccessCart name={"cart"} />
      )}
    </section>
  );
}
