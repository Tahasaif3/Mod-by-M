"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaTimes } from "react-icons/fa"
import { urlFor } from "@/sanity/lib/image"
import QuantityButton from "@/components/QuantityButton"

interface CartItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  product: any 
  itemCount: number
  onDelete: (id: string) => void
  onQuantityChange: (id: string, quantity: number) => void
}

const CartItem: React.FC<CartItemProps> = ({ product, itemCount, onDelete, onQuantityChange }) => {
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
                onClick={() => onDelete(product?._id)}
                className="absolute -top-2 -right-2 bg-white text-yellow-700 hover:text-red-500 rounded-full w-6 h-6 flex items-center justify-center shadow-gold-sm hover:shadow-gold-md transition-all duration-300 z-10"
                aria-label="Remove from cart"
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
          ${product?.price ? Number(product?.price).toFixed(2) : "0.00"}
        </div>
      </td>
      <td className="px-4 py-4 text-center">
        <div className="flex justify-center">
          <QuantityButton product={product} onQuantityChange={onQuantityChange} />
        </div>
      </td>
      <td className="px-4 py-4 text-center">
        <div className="font-bold text-gray-800 text-lg">
          ${product?.price ? Number(product.price * itemCount).toFixed(2) : "0.00"}
        </div>
      </td>
    </motion.tr>
  )
}

export default CartItem
