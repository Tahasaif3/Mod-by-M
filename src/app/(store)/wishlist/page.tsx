"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Loader from "@/components/Loader"
import Link from "next/link"
import toast from "react-hot-toast"
import userWishlistStore from "../../../../storeForWhislist"
import type { Product } from "../../../../sanity.types"
import userCartStore from "../../../../store"
import PageHeader from "@/components/PageHeader"
import EmptyWishlist from "@/components/EmptyWishlist"
import { useAuth } from "@clerk/nextjs"
import NoAccessCart from "@/components/NoAccessCart"
import WishlistItem from "@/components/WishlistItem"
import { RiVipCrownFill } from "react-icons/ri"
import { FaHeart, FaTrash } from "react-icons/fa"

const Wishlist = () => {
  const { removeFromWishlist, clearWishlist } = userWishlistStore()
  const { addItem } = userCartStore()
  const { isSignedIn } = useAuth()
  const [isClient, setIsClient] = useState(false)
  const groupedItems = userWishlistStore((state) => state.getGroupedItems()) as Product[]

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <Loader />
  }

  const handleResetWishlist = () => {
    const confirmed = window.confirm("Are you sure you want to clear your wishlist?")
    if (confirmed) {
      clearWishlist()
      toast.success("Wishlist cleared successfully!")
    }
  }

  const handleAddToCart = (product: Product) => {
    addItem(product)
    removeFromWishlist(product._id)
    toast.success("Product added to cart and removed from wishlist!")
  }

  const handleDeleteProduct = (id: string) => {
    removeFromWishlist(id)
    toast.success("Product removed from wishlist successfully!")
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
      <PageHeader heading="Wishlist" />
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
                  <FaHeart className="text-yellow-700" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 font-josefin flex items-center">
                    Your Wishlist
                    <span className="ml-3 bg-yellow-100 text-yellow-800 text-sm px-2 py-0.5 rounded-full">
                      {groupedItems.length} {groupedItems.length === 1 ? "item" : "items"}
                    </span>
                  </h2>
                  <p className="text-gray-600 text-sm">Save your favorite luxury items for later</p>
                </div>
              </div>

              <button
                onClick={handleResetWishlist}
                className="flex items-center gap-2 border-2 border-yellow-500 px-4 py-2 text-yellow-700 rounded-md hover:bg-yellow-50 transition-colors"
              >
                <FaTrash className="text-xs" />
                <span className="font-medium">Clear Wishlist</span>
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg shadow-gold-lg border border-yellow-100 overflow-hidden relative"
            >
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-yellow-300 opacity-20 rounded-tl-lg"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-yellow-300 opacity-20 rounded-br-lg"></div>

              <div className="overflow-x-auto relative z-10">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-yellow-50 to-white border-b border-yellow-100">
                      <th className="px-4 py-3 text-left font-josefin text-gray-800">Product</th>
                      <th className="px-4 py-3 text-center font-josefin text-gray-800">Price</th>
                      <th className="px-4 py-3 text-center font-josefin text-gray-800 whitespace-nowrap">
                        Original Price
                      </th>
                      <th className="px-4 py-3 text-center font-josefin text-gray-800">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <AnimatePresence>
                      {groupedItems?.map((product) => (
                        <WishlistItem
                          key={product._id}
                          product={product}
                          onAddToCart={handleAddToCart}
                          onRemove={handleDeleteProduct}
                        />
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 text-center">
              <Link
                href="/shop"
                className="inline-flex items-center text-yellow-700 hover:text-yellow-800 transition-colors font-medium"
              >
                <RiVipCrownFill className="mr-2" />
                <span>Continue shopping our luxury collection</span>
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        ) : (
          <div>
            <EmptyWishlist />
          </div>
        )
      ) : (
        <div>
          <NoAccessCart name={"wishlist"} />
        </div>
      )}
    </section>
  )
}

export default Wishlist


// "use client";

// import React, { useEffect, useState } from "react";

// import Loader from "@/components/Loader";
// import Link from "next/link";
// import Image from "next/image";
// import toast from "react-hot-toast";
// import userWishlistStore from "../../../../storeForWhislist";
// import { Product } from "../../../../sanity.types";
// import { urlFor } from "@/sanity/lib/image";
// import userCartStore from "../../../../store";
// import PageHeader from "@/components/PageHeader";
// import EmptyWishlist from "@/components/EmptyWishlist";
// import { useAuth } from "@clerk/nextjs";
// import NoAccessCart from "@/components/NoAccessCart";

// const Wishlist = () => {
//   const { removeFromWishlist, clearWishlist} =
//     userWishlistStore();
//   const { addItem } = userCartStore();
//     const {isSignedIn} = useAuth()
//   const [isClient, setIsClient] = useState(false);
//   const groupedItems = userWishlistStore((state) => state.getGroupedItems()) as Product[];

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) {
//     return <Loader />;
//   }

//   const handleResetWishlist = () => {
//     const confirmed = window.confirm(
//       "Are you sure you want to clear your wishlist?"
//     );
//     if (confirmed) {
//       clearWishlist();
//       toast.success("Wishlist cleared successfully!");
//     }
//   };

//   const handleAddToCart = (product: Product) => {
//     addItem(product);
//     removeFromWishlist(product._id);
//     toast.success("Product added to cart and removed from wishlist!");
//   };

//   const handleDeleteProduct = (id: string) => {
//     removeFromWishlist(id);
//     toast.success("Product removed from wishlist successfully!");
//   };

//   return (
//     <section>
//       <PageHeader heading="Wishlist" />
//       { isSignedIn ? groupedItems.length > 0 ? (
//         <div className="max-w-[1170px] mx-auto px-4 py-6">
//           <div className="w-full font-josefin">
//             {/* Add scroll for table */}
//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="text-[#1D3178] text-base sm:text-xl text-left">
//                     <th className="px-2 sm:px-4 py-2">Product</th>
//                     <th className="px-2 sm:px-4 py-2 text-center">Price</th>
//                     <th className="px-2 sm:px-4 py-2 text-center whitespace-nowrap ">Old Price</th>
//                     <th className="px-2 sm:px-4 py-2 text-center">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {groupedItems?.map((product) => (
//                     <tr key={product._id} className="border-b">
//                       <td className="px-2 sm:px-4 py-2 flex items-center gap-2 sm:gap-3">
//                         {product?.image && (
//                           <Link
//                             href={`/products/${product.slug?.current}`}
//                             className="relative"
//                           >
//                             <Image
//                               src={urlFor(product?.image).url()}
//                               alt={product.name || "Product Image"}
//                               width={100}
//                               height={100}
//                               className="w-12 sm:w-16 h-12 sm:h-16 object-cover rounded"
//                             />
//                             <span
//                               onClick={() => {
//                                 handleDeleteProduct(product?._id);
//                               }}
//                               className="absolute -top-1 -right-1 bg-black text-white text-xs sm:text-sm rounded-full w-4 h-4 flex items-center justify-center text-center font-bold cursor-pointer"
//                             >
//                               x
//                             </span>
//                           </Link>
//                         )}
//                         <div>
//                           <p className="font-semibold text-xs sm:text-sm">
//                             {product?.name}
//                           </p>
//                         </div>
//                       </td>
//                       <td className="px-2 sm:px-4 py-2 text-center">
//                         <p className="font-semibold text-sm sm:text-base text-[#1D3178]">
//                           {product?.price
//                             ? `$${Number(product?.price).toFixed(2)}`
//                             : "$0.00"}
//                         </p>
//                       </td>
//                       <td className="px-2 sm:px-4 py-2 text-center">
//                         <p className="text-sm sm:text-base line-through text-[#1D3178]">
//                           {product?.discountPercentage
//                             ? `$${product?.discountPercentage.toFixed(2)}`
//                             : "$0.00"}
//                         </p>
//                       </td>
//                       <td className="px-2 sm:px-4 py-2 text-center">
//                         <button
//                           onClick={() => handleAddToCart(product)}
//                           className="bg-[#FB2E86] text-white px-2 sm:px-4 py-1 sm:py-2 text-[9px] sm:text-sm rounded-[2px] mt-2"
//                         >
//                           Add to Cart
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={handleResetWishlist}
//                 className="bg-[#FB2E86] font-josefin text-xs sm:text-sm w-[120px] sm:w-[134px] h-[34px] sm:h-[39px] text-white rounded-[2px]"
//               >
//                 Clear Wishlist
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <EmptyWishlist />
//         </div>
//       ) : <div><NoAccessCart name={"wishlist"}/> </div>}
//     </section>
//   );
// };

// export default Wishlist;
