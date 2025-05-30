"use client"

import Image from "next/image"
import { FaFacebookF, FaTwitter, FaArrowRight } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import { Product } from "../../sanity.types";
import { urlFor } from "@/sanity/lib/image"
import CartButton from "@/components/CartButton"
import WishlistButton from "@/components/WishlistButton"
import StarReview from "@/components/StarReview"
import Logos from "@/components/Logos"
import PageHeader from "@/components/PageHeader"
import type React from "react"

interface ProductDetailProps {
  product: Product
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <section>
      <PageHeader heading="Product Details" />
      <div className="max-w-[1177px] mx-auto p-6 mt-10">
        <div className="flex flex-col lg:flex-row lg:h-[509px] shadow-custom space-y-6 lg:space-y-0">
          <div className="w-full lg:w-1/2 flex justify-center">
            {product?.image ? (
              <Image
                src={urlFor(product.image).url() || "/placeholder.svg"}
                alt={product.name || "product image"}
                width={400}
                height={400}
                className="w-full max-w-lg object-contain"
              />
            ) : (
              <div>no image</div>
            )}
          </div>

          <div className="w-full lg:w-1/2 px-4 lg:pt-12 lg:pl-6 space-y-4">
            <h1 className="text-xl lg:text-3xl font-semibold text-[#0D134E] font-josefin">{product?.name}</h1>

            <StarReview product={product} />
            <p className="text-md lg:text-lg text-[#151875] font-josefin">
              ${product?.price}{" "}
              <span className="line-through text-[#FB2E86] ml-4">
                ${product?.discountPercentage || "not available"}
              </span>
            </p>

            <div>
              <span className="font-semibold text-[#0D134E] font-josefin lg:text-[16px]">Color: </span>
            </div>
            <p className="text-[#A9ACC6] font-josefin text-[16px]">
              {product.description || "Description not available."}
            </p>

            <div className="mt-6 flex items-center space-x-1 lg:px-10">
              <CartButton product={product} />
              <WishlistButton product={product} />
            </div>

            <div className="mt-1">
              <span className="text-[#151875] font-josefin text-[16px] font-semibold">
                Category: {product.category}
              </span>
            </div>

            <div className="mt-4 flex items-center space-x-4 pb-10">
              <span className="text-sm lg:text-md text-[#151875] font-semibold">Share:</span>
              <a
                href="#"
                className="bg-[#151875] w-[20px] h-[20px] flex items-center justify-center rounded-full text-white"
              >
                <FaFacebookF size={10} />
              </a>
              <a
                href="#"
                className="bg-[#151875] w-[20px] h-[20px] flex items-center justify-center rounded-full text-white"
              >
                <RiInstagramFill size={10} />
              </a>
              <a
                href="#"
                className="bg-[#151875] w-[20px] h-[20px] flex items-center justify-center rounded-full text-white"
              >
                <FaTwitter size={10} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-auto max-w-[1920px] mx-auto mb-2 bg-[#F9F8FE] mt-16 px-4 pb-20 lg:px-16">
        <h3 className="text-[#151875] text-lg lg:text-2xl font-josefin">Product Description</h3>
        <p className="text-[#A9ACC6] mt-2 text-sm lg:text-md font-josefin">
          {product?.description || "Description not available."}
        </p>

        <h3 className="text-[#151875] text-[22px] font-josefin mt-8">More details</h3>

        <div className="flex items-start gap-2 mt-4 text-[#A9ACC6] font-josefin text-sm lg:text-md">
          <FaArrowRight className="text-[#000000] hover:text-[#2F1AC4]" />
          <p>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu
            in fringilla vulputate nunc nec. Dui, massa viverr.
          </p>
        </div>
      </div>


      <Logos />
    </section>
  )
}

export default ProductDetail

