"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Loader from "@/components/Loader"
import PageHeader from "@/components/PageHeader"
import userCartStore from "../../../../store"
import toast from "react-hot-toast"
import EmptyCart from "@/components/EmptyCart"
import { useAuth } from "@clerk/nextjs"
import NoAccessCart from "@/components/NoAccessCart"
import CartItem from "@/components/CartItem"
import { RiVipCrownFill } from "react-icons/ri"
import { FaShoppingCart, FaTrash, FaSync, FaArrowRight, FaShippingFast, FaLock } from "react-icons/fa"

export default function Cart() {
  const { deleteCartProduct, getTotalPrice, getItemCount, getSubTotalPrice, resetCart, updateCartQuantity } =
    userCartStore()
  const [isClient, setIsClient] = useState(false)
  const { isSignedIn } = useAuth()

  const groupedItems = userCartStore((state) => state.getGroupedItems())

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <Loader />
  }

  const handleDeleteProduct = (id: string) => {
    deleteCartProduct(id)
    toast.success("Product deleted successfully!")
  }

  const handleResetCart = () => {
    const confirmed = window.confirm("Are you sure you want to clear your cart?")
    if (confirmed) {
      resetCart()
      toast.success("Your cart has been reset successfully!")
    }
  }

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity > 0) {
      updateCartQuantity(id, quantity)
      toast.success("Quantity updated!")
    } else {
      toast.error("Quantity must be greater than zero.")
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  return (
    <section className="luxury-bg-pattern">
      <PageHeader heading="Shopping Cart" />
      {isSignedIn ? (
        groupedItems.length > 0 ? (
          <motion.div
            className="max-w-[1170px] mx-auto px-4 py-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-8 flex items-center justify-between">
              <div className="flex items-center">
                <div className="gold-icon-circle-shine w-10 h-10 flex items-center justify-center mr-4">
                  <FaShoppingCart className="text-yellow-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 font-josefin flex items-center">
                    Your Shopping Cart
                    <span className="ml-3 bg-yellow-100 text-yellow-800 text-sm px-2 py-0.5 rounded-full">
                      {groupedItems.length} {groupedItems.length === 1 ? "item" : "items"}
                    </span>
                  </h2>
                  <p className="text-gray-600 text-sm">Review your items before checkout</p>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8">
              <motion.div variants={itemVariants} className="w-full lg:w-2/3">
                <div className="bg-white rounded-lg shadow-gold-lg border border-yellow-100 overflow-hidden relative">
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-yellow-300 opacity-20 rounded-tl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-yellow-300 opacity-20 rounded-br-lg"></div>

                  <div className="overflow-x-auto relative z-10">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-yellow-50 to-white border-b border-yellow-100">
                          <th className="px-4 py-3 text-left font-josefin text-gray-800">Product</th>
                          <th className="px-4 py-3 text-center font-josefin text-gray-800">Price</th>
                          <th className="px-4 py-3 text-center font-josefin text-gray-800">Quantity</th>
                          <th className="px-4 py-3 text-center font-josefin text-gray-800">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <AnimatePresence>
                          {groupedItems?.map(({ product }) => {
                            const itemCount = getItemCount(product?._id)
                            return (
                              <CartItem
                                key={product?._id}
                                product={product}
                                itemCount={itemCount}
                                onDelete={handleDeleteProduct}
                                onQuantityChange={handleUpdateQuantity}
                              />
                            )
                          })}
                        </AnimatePresence>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <button className="flex items-center gap-2 border-2 border-yellow-500 px-4 py-2 text-yellow-700 rounded-md hover:bg-yellow-50 transition-colors">
                    <FaSync className="text-xs" />
                    <span className="font-medium">Update Cart</span>
                  </button>

                  <button
                    onClick={handleResetCart}
                    className="flex items-center gap-2 border-2 border-yellow-500 px-4 py-2 text-yellow-700 rounded-md hover:bg-yellow-50 transition-colors"
                  >
                    <FaTrash className="text-xs" />
                    <span className="font-medium">Clear Cart</span>
                  </button>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="w-full lg:w-1/3">
                <div className="bg-white rounded-lg shadow-gold-lg border border-yellow-100 overflow-hidden relative">
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-yellow-300 opacity-20 rounded-tl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-yellow-300 opacity-20 rounded-br-lg"></div>

                  <div className="relative z-10">
                    <div className="bg-gradient-to-r from-yellow-50 to-white py-4 px-6 border-b border-yellow-100">
                      <h2 className="text-xl font-bold text-gray-800 font-josefin text-center flex items-center justify-center">
                        <RiVipCrownFill className="text-yellow-500 mr-2" />
                        Order Summary
                      </h2>
                    </div>

                    <div className="p-6">
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between items-center pb-3 border-b border-yellow-100">
                          <span className="text-gray-600 font-medium">Subtotal</span>
                          <span className="font-bold text-gray-800">${getSubTotalPrice().toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between items-center pb-3 border-b border-yellow-100">
                          <span className="text-gray-600 font-medium">Shipping</span>
                          <span className="text-gray-600 text-sm">Calculated at checkout</span>
                        </div>

                        <div className="flex justify-between items-center pt-2">
                          <span className="text-lg font-bold text-gray-800">Total</span>
                          <div className="text-right">
                            <div className="text-xs text-gray-500">USD</div>
                            <div className="text-xl font-bold text-yellow-700">${getTotalPrice().toFixed(2)}</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center mb-6 bg-yellow-50 p-3 rounded-md border border-yellow-100">
                        <input type="checkbox" id="saveInfo" className="mr-2 h-4 w-4 accent-yellow-500 rounded-sm" />
                        <label htmlFor="saveInfo" className="text-sm text-gray-600">
                          Shipping & taxes calculated at checkout
                        </label>
                      </div>

                      <Link href="/shipping">
                        <button className="luxury-gold-button w-full py-3 rounded-md text-sm uppercase tracking-wider font-medium flex items-center justify-center group">
                          <span>Proceed to Checkout</span>
                          <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>

                      <div className="mt-6 space-y-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <FaShippingFast className="text-yellow-600 mr-2" />
                          <span>Free shipping on orders over $250</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <FaLock className="text-yellow-600 mr-2" />
                          <span>Secure checkout powered by Stripe</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Link
                    href="/shop"
                    className="inline-flex items-center text-yellow-700 hover:text-yellow-800 transition-colors font-medium"
                  >
                    <svg
                      className="mr-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      ></path>
                    </svg>
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <EmptyCart />
        )
      ) : (
        <NoAccessCart name={"cart"} />
      )}
    </section>
  )
}


// "use client";

// import PageHeader from "@/components/PageHeader";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Loader from "@/components/Loader";

// import userCartStore from "../../../../store";
// import { urlFor } from "@/sanity/lib/image";
// import QuantityButton from "@/components/QuantityButton";
// import toast from "react-hot-toast";
// import EmptyCart from "@/components/EmptyCart";
// import { useAuth } from "@clerk/nextjs";
// import NoAccessCart from "@/components/NoAccessCart";

// export default function Cart() {
//   const {
//     deleteCartProduct,
//     getTotalPrice,
//     getItemCount,
//     getSubTotalPrice,
//     resetCart,
//     updateCartQuantity,
//   } = userCartStore();
//   const [isClient, setIsClient] = useState(false);
//   const { isSignedIn } = useAuth();

//   const groupedItems = userCartStore((state) => state.getGroupedItems());

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) {
//     return <Loader />;
//   }

//   const handleDeleteProduct = (id: string) => {
//     deleteCartProduct(id);
//     toast.success("Product deleted successfully!");
//   };

//   const handleResetCart = () => {
//     const confirmed = window.confirm("Are you sure to reset your cart?");
//     if (confirmed) {
//       resetCart();
//       toast.success("Your cart has been reset successfully!");
//     }
//   };

//   const handleUpdateQuantity = (id: string, quantity: number) => {
//     if (quantity > 0) {
//       updateCartQuantity(id, quantity);
//       toast.success("Quantity updated!");
//     } else {
//       toast.error("Quantity must be greater than zero.");
//     }
//   };

//   return (
//     <section>
//       <PageHeader heading="Shopping Cart"  />
//       {isSignedIn ? (groupedItems.length > 0 ? (
//         <div className="max-w-[1170px] mx-auto px-4 py-6 overflow-hidden">
//           <div className="flex flex-col lg:flex-row gap-6">
//             <div className="w-full lg:w-2/3 font-josefin">
//             <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="text-[#1D3178] text-base sm:text-xl text-left">
//                     <th className="px-2 sm:px-4 py-2">Product</th>
//                     <th className="px-2 sm:px-4 py-2 text-center">Price</th>
//                     <th className="px-2 sm:px-4 py-2 text-center">Quantity</th>
//                     <th className="px-2 sm:px-4 py-2 text-center">Total</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {groupedItems?.map(({ product }) => {
//                     const itemCount = getItemCount(product?._id);
//                     return (
//                       <tr key={product?._id} className="border-b">
//                         <td className="px-2 sm:px-4 py-2 flex items-center gap-2 sm:gap-3">
//                           {product?.image && (
//                             <Link
//                               href={`/products/${product.slug?.current}`}
//                               className="relative"
//                             >
//                               <Image
//                                 src={urlFor(product?.image).url()}
//                                 alt={product.name || "productImage"}
//                                 width={100}
//                                 height={100}
//                                 className="w-12 sm:w-16 h-12 sm:h-16 object-cover rounded"
//                               />
//                               <span
//                                 onClick={() =>
//                                   handleDeleteProduct(product?._id)
//                                 }
//                                 className="absolute -top-1 -right-1 bg-black text-white text-xs sm:text-sm rounded-full w-4 h-4 flex items-center justify-center text-center font-bold cursor-pointer"
//                               >
//                                 x
//                               </span>
//                             </Link>
//                           )}
//                           <div>
//                             <p className="font-semibold text-xs sm:text-sm">
//                               {product?.name}
//                             </p>
//                           </div>
//                         </td>
//                         <td className="px-2 sm:px-4 py-2 text-center">
//                           <p className="font-semibold text-xs sm:text-sm text-[#1D3178]">
//                             {product?.price
//                               ? `$${Number(product?.price).toFixed(2)}`
//                               : "$0.00"}
//                           </p>
//                         </td>
//                         <td className="px-2 lg:pl-10 md:pl-10 pl-5 sm:px-4 py-2 text-center">
//                           <QuantityButton
//                             product={product}
//                             onQuantityChange={handleUpdateQuantity}
//                           />
//                         </td>
//                         <td className="px-2 sm:px-4 py-2 text-center text-[#1D3178] text-sm sm:text-base">
//                           {product?.price
//                             ? `£${Number(product.price * itemCount).toFixed(2)}`
//                             : "$0.00"}
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>

//               <div className="flex justify-between items-center mt-4">
//                 <button className="bg-[#FB2E86] font-josefin w-[120px] sm:w-[134px] h-[36px] sm:h-[39px] text-white px-4 py-2 rounded-[2px] sm:mr-auto">
//                   Update Cart
//                 </button>
//                 <button
//                   onClick={handleResetCart}
//                   className="bg-[#FB2E86] font-josefin w-[120px] sm:w-[134px] h-[36px] sm:h-[39px] text-white px-4 py-2 rounded-[2px]  sm:mt-0 sm:ml-auto"
//                 >
//                   Clear Cart
//                 </button>
//               </div>
//             </div>

//             <div className="w-full lg:w-1/3 mt-6 sm:mt-0">
//               <h2 className="text-lg lg:text-xl font-josefin text-[#1D3178] font-bold mb-4 text-center pb-2">
//                 Cart Totals
//               </h2>
//               <div className="bg-[#F4F4FC] p-6">
//                 <div className="flex justify-between py-2 text-[#1D3178] text-lg lg:text-xl font-josefin border-b-2 border-solid border-[#E8E6F1] mb-2">
//                   <span className="font-semibold">Subtotal:</span>
//                   <span> £{getSubTotalPrice().toFixed(2)} </span>
//                 </div>
//                 <div className="flex text-[#1D3178] text-lg lg:text-xl font-josefin justify-between py-2 border-b-2 border-solid border-[#E8E6F1] mb-2">
//                   <span className="font-semibold">Total:</span>
//                   <span>£{getTotalPrice().toFixed(2)}</span>
//                 </div>
//                 <div className="flex items-center mb-6 mt-10">
//                   <input
//                     type="checkbox"
//                     id="saveInfo"
//                     className="mr-2 focus:ring-[#19D16F] rounded-[2px]"
//                   />
//                   <label
//                     htmlFor="saveInfo"
//                     className="lg:text-sm text-xs font-lato text-[#8A91AB]"
//                   >
//                     Shipping & taxes calculated at checkout.
//                   </label>
//                 </div>
//                 <Link href="/shipping">
//                   <button className="bg-[#19D16F] text-white w-full py-2 rounded mt-4">
//                     Proceed to Checkout
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <EmptyCart />
//       )) : (
//         <NoAccessCart name={"cart"} />
//       )}
//     </section>
//   );
// }
