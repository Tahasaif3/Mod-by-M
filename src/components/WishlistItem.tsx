"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaShoppingBag, FaTimes } from "react-icons/fa"
import type { Product } from "../../sanity.types"
import { urlFor } from "@/sanity/lib/image"

interface WishlistItemProps {
  product: Product
  onAddToCart: (product: Product) => void
  onRemove: (id: string) => void
}

const WishlistItem: React.FC<WishlistItemProps> = ({ product, onAddToCart, onRemove }) => {
  return (
    <motion.tr
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="border-b border-yellow-100 hover:bg-yellow-50/50 transition-colors"
    >
      <td className="px-4 py-4">
        <div className="flex items-center gap-4">
          {product?.image && (
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-lg opacity-0 group-hover:opacity-70 transition duration-300 blur"></div>
              <div className="relative bg-white p-1 rounded-lg border border-yellow-100 shadow-gold-sm group-hover:shadow-gold-md transition-all duration-300">
                <Link href={`/products/${product.slug?.current}`} className="block">
                  <Image
                    src={urlFor(product?.image).url() || "/placeholder.svg"}
                    alt={product.name || "Product Image"}
                    width={80}
                    height={80}
                    className="w-16 h-16 object-contain rounded-md"
                  />
                </Link>
              </div>
              <button
                onClick={() => onRemove(product?._id)}
                className="absolute -top-2 -right-2 bg-white text-yellow-700 hover:text-red-500 rounded-full w-6 h-6 flex items-center justify-center shadow-gold-sm hover:shadow-gold-md transition-all duration-300 z-10"
                aria-label="Remove from wishlist"
              >
                <FaTimes className="text-xs" />
              </button>
            </div>
          )}
          <div>
            <Link href={`/products/${product.slug?.current}`} className="group">
              <h3 className="font-josefin font-semibold text-gray-800 group-hover:text-yellow-700 transition-colors">
                {product?.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{product?.category || "Luxury Bag"}</p>
            </Link>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 text-center">
        <div className="font-bold text-yellow-700 text-lg">
          {product?.price ? `$${Number(product?.price).toFixed(2)}` : "$0.00"}
        </div>
      </td>
      <td className="px-4 py-4 text-center">
        {product?.discountPercentage ? (
          <div className="relative inline-block">
            <span className="text-gray-400 line-through">${product?.discountPercentage.toFixed(2)}</span>
            <span className="absolute -top-3 -right-12 bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">
              Save {Math.round((((product?.discountPercentage ?? 0) - (product?.price ?? 0)) / (product?.discountPercentage ?? 1)) * 100)}%
            </span>
          </div>
        ) : (
          <span className="text-gray-400">-</span>
        )}
      </td>
      <td className="px-4 py-4 text-center">
        <button
          onClick={() => onAddToCart(product)}
          className="luxury-gold-button px-4 py-2 rounded-md text-sm flex items-center justify-center mx-auto group hover:scale-105 transition-transform"
        >
          <FaShoppingBag className="mr-2 text-xs" />
          <span>Add to Cart</span>
        </button>
      </td>
    </motion.tr>
  )
}

export default WishlistItem
