"use client";

import React, { useEffect, useState } from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import { GoHeart } from "react-icons/go";
import { FaSearchPlus, FaList, FaTh } from "react-icons/fa";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Logos from "@/components/Logos";
import { getShopProducts } from "@/sanity/helpers";
import { Product } from "../../../../sanity.types";
import { urlFor } from "@/sanity/lib/image";
import userCartStore from "../../../../store";
import userWishlistStore from "../../../../storeForWhislist";
import toast from "react-hot-toast";
import Link from "next/link"

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]); 
  const { addItem } = userCartStore();
  const { addToWishlist } = userWishlistStore();

  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("Price: Low to High");
  const [view, setView] = useState("Grid");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getShopProducts();
        const sortedProducts = fetchedProducts || [];
        setProducts(sortedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const handleViewChange = (viewType: string) => {
    setView(viewType);
  };

  const handleAddToCart = (product: Product) => {
    addItem(product);
    toast.success(`${product?.name?.substring(0, 12)}...added successfully`);
  };

  const handleAddToWishlist = (product: Product) => {
    addToWishlist(product);
    toast.success(`${product?.name?.substring(0, 12)}...added successfully`);
  };

  const sortedData = [...products].sort((a, b) => {
    if (sortBy === "Price: Low to High") {
      return (
        parseFloat(a.price?.toString().replace("$", "") || "0") -
        parseFloat(b.price?.toString().replace("$", "") || "0")
      );
    } else if (sortBy === "Price: High to Low") {
      return (
        parseFloat(b.price?.toString().replace("$", "") || "0") -
        parseFloat(a.price?.toString().replace("$", "") || "0")
      );
    }
    return 0;
  });

  const displayedProducts = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <section>
      <PageHeader heading="Shop Grid Default" />

      <div className="p-4 sm:p-6 md:p-8 max-w-[1177px] mx-auto">
        {/* Header with Filters */}
        <div className="flex flex-wrap justify-between items-center mb-28">
          <div className="mb-2 md:mb-0">
            <h2 className="text-[18px] sm:text-[22px] font-josefin text-[#151875] font-semibold">
              Ecommerce Accessories & Fashion Items
            </h2>
            <p className="text-[12px] sm:text-[14px] text-[#8A8FB9]">
              About {products.length} results
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-between md:justify-end">
            {/* Items Per Page */}
            <div className="flex gap-2 items-center">
              <label
                htmlFor="itemsPerPage"
                className="text-[14px] sm:text-[16px] text-[#3F509E]"
              >
                Per Page:
              </label>
              <select
                id="itemsPerPage"
                className="p-1 border text-[12px] sm:text-[14px] text-[#8A8FB9]"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
              >
                <option value={12}>12 items</option>
                <option value={16}>16 items</option>
                <option value={20}>20 items</option>
              </select>
            </div>

            {/* Sort By */}
            <div className="flex gap-2 items-center">
              <label
                htmlFor="sortBy"
                className="text-[14px] sm:text-[16px] text-[#3F509E]"
              >
                Sort By:
              </label>
              <select
                id="sortBy"
                className="p-1 border text-[12px] sm:text-[14px] text-[#8A8FB9]"
                value={sortBy}
                onChange={handleSortChange}
              >
                <option value="Price: Low to High">Low to High</option>
                <option value="Price: High to Low">High to Low</option>
              </select>
            </div>

            {/* View */}
            <div className="flex gap-2 items-center">
              <label
                htmlFor="view"
                className="text-[14px] sm:text-[16px] text-[#3F509E]"
              >
                View:
              </label>
              <div className="flex gap-2">
                <FaTh
                  onClick={() => handleViewChange("Grid")}
                  size={16}
                  className={`cursor-pointer ${
                    view === "Grid" ? "text-[#151875]" : "text-[#8A8FB9]"
                  }`}
                />
                <FaList
                  onClick={() => handleViewChange("List")}
                  size={16}
                  className={`cursor-pointer ${
                    view === "List" ? "text-[#151875]" : "text-[#8A8FB9]"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Products Display */}
        <div
          className={
            view === "Grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 gap-y-8 md:gap-y-[70px]"
              : "flex flex-col gap-6"
          }
        >
          {displayedProducts.map((product) => (
            <div key={product._id} className="flex flex-col items-center group">
              <div className="w-full max-w-[360px] h-auto bg-white pb-2 relative">
                <div className="w-full h-[250px] sm:h-[280px] bg-[#F6F7FB] hover:bg-[#EBF4F3] relative overflow-hidden flex items-center justify-center">
                  <div className="w-[178px] h-[178px] flex items-center justify-center">
                   <Link   href={`/products/${product?.slug?.current || "#"}`}>
                   {product?.image ? (
                      <Image
                        src={urlFor(product.image).url()}
                        alt={product.name || "product image"}
                        width={250}
                        height={250}
                        className="w-full h-full"
                      />
                    ) : (
                      <div>No image</div>
                    )}
                   
                   </Link>
                  </div>
                  {/* Hover Actions */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
                    <div
                      onClick={() => handleAddToCart(product)}
                      className="bg-[#eeeffb] h-[30px] w-[30px] p-2 rounded-full flex items-center justify-center cursor-pointer"
                    >
                      <PiShoppingCartSimple size={19} className="text-[#2F1AC4]" />
                    </div>
                    <div
                      onClick={() => handleAddToWishlist(product)}
                      className="h-[30px] w-[30px] p-2 flex items-center justify-center cursor-pointer"
                    >
                      <GoHeart size={17} className="text-[#2F1AC4]" />
                    </div>
                    <div className="h-[30px] w-[30px] p-2 flex items-center justify-center">
                      <FaSearchPlus size={15} className="text-[#2F1AC4]" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mt-2 px-4 items-center">
                  <h3 className="text-sm sm:text-base text-[18px] text-center font-semibold text-[#151875]">
                  
                    {product?.name ? product.name.split(' ').slice(0, 8).join(' ') + (product.name.split(' ').length > 3 ? '...' : '') : 'No Name Available'}
                  </h3>
                  <div className="flex gap-4 mt-2 items-center justify-center">
                    <p className="text-[#151875] text-[14px] sm:text-base font-josefin">
                      {product.price}
                    </p>
                    {product.discountPercentage && (
                      <p className="line-through text-[#FB2E86] text-sm sm:text-base font-josefin">
                        {product.discountPercentage}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-[#781641] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <Logos />
      </div>
    </section>
  );
};

export default Shop;
