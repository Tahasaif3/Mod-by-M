import Image from "next/image"
import { productData } from "./Data"
import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
import { RiVipCrownFill } from "react-icons/ri"

const TrendingProducts2 = () => {
  return (
    <div className="mx-auto max-w-[1177px] px-4 py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 luxury-bg-pattern opacity-30"></div>

      {/* Section heading */}
      <div className="text-center mb-12 relative z-10">
        <span className="inline-block px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-xs uppercase tracking-wider font-medium border border-yellow-200 mb-4">
          Limited Time Offers
        </span>
        <h2 className="text-3xl md:text-4xl font-josefin font-bold text-gray-800 mb-4">
          Exclusive <span className="gold-text">Promotions</span>
        </h2>
        <div className="h-[3px] w-24 gold-gradient mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_250px] gap-8 relative z-10">
        {/* First promotion card */}
        <div className="relative group overflow-hidden rounded-lg shadow-gold-lg hover:shadow-gold-xl transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100"></div>
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full border-2 border-yellow-200 opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full border-2 border-yellow-200 opacity-30"></div>

          <div className="relative p-8 flex flex-col items-start h-[270px] z-10">
            <div className="flex items-center mb-2">
              <RiVipCrownFill className="text-yellow-500 mr-2" />
              <span className="text-sm uppercase tracking-wider text-yellow-700 font-medium">Premium Offer</span>
            </div>

            <h3 className="font-bold mb-3 text-[26px] font-josefin text-gray-800">
              23% off in all <span className="gold-text">luxury products</span>
            </h3>

            <Link
              href="/shop"
              className="luxury-gold-button px-6 py-2 rounded-md text-sm uppercase tracking-wider font-medium flex items-center group mt-2"
            >
              <span>Shop Now</span>
              <IoIosArrowForward className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Image
              src="/luxurybag.png"
              alt="Promotion"
              width={200}
              height={150}
              className="absolute bottom-0 right-0 object-contain transform group-hover:scale-105 transition-transform duration-700 drop-shadow-xl"
            />
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
            <div className="absolute transform rotate-45 bg-yellow-400 text-white font-bold py-1 text-xs top-6 -left-12 w-48 text-center shadow-md">
              LIMITED
            </div>
          </div>
        </div>

        {/* Second promotion card */}
        <div className="relative group overflow-hidden rounded-lg shadow-gold-lg hover:shadow-gold-xl transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100"></div>
          <div className="absolute top-0 left-0 w-40 h-40 rounded-full border-2 border-yellow-200 opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full border-2 border-yellow-200 opacity-30"></div>

          <div className="relative p-8 flex flex-col items-start h-[270px] z-10">
            <div className="flex items-center mb-2">
              <RiVipCrownFill className="text-yellow-500 mr-2" />
              <span className="text-sm uppercase tracking-wider text-yellow-700 font-medium">Exclusive Collection</span>
            </div>

            <h3 className="font-bold mb-3 text-[26px] font-josefin text-gray-800">
              New Arrivals in <span className="gold-text">our collection</span>
            </h3>

            <Link
              href="/collection"
              className="luxury-gold-button px-6 py-2 rounded-md text-sm uppercase tracking-wider font-medium flex items-center group mt-2"
            >
              <span>View Collection</span>
              <IoIosArrowForward className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Image
              src="/p6.png"
              alt="Promotion"
              width={312}
              height={173}
              className="absolute bottom-0 right-0 object-contain transform group-hover:scale-105 transition-transform duration-700 drop-shadow-xl"
            />
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
            <div className="absolute transform rotate-45 bg-yellow-400 text-white font-bold py-1 text-xs top-6 -right-12 w-48 text-center shadow-md">
              FEATURED
            </div>
          </div>
        </div>

        {/* Product list card */}
        <div className="bg-white rounded-lg shadow-gold-lg hover:shadow-gold-xl transition-all duration-500 p-6 w-full h-[270px] flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300"></div>

          <h3 className="font-bold text-lg font-josefin text-gray-800 mb-4 relative inline-block">
            Trending Products
            <span className="absolute -bottom-1 left-0 w-12 h-0.5 gold-gradient"></span>
          </h3>

          <div className="grid grid-cols-1 gap-4 overflow-hidden">
            {productData.executiveChairs.map((chair, index) => (
              <Link
                href={`/product/${chair.id}`}
                key={index}
                className="flex items-center group/item hover:bg-yellow-50 p-2 rounded-md transition-colors"
              >
                <div className="relative w-16 h-16 overflow-hidden rounded-md border border-yellow-100 shadow-gold-sm group-hover/item:shadow-gold-md transition-shadow">
                  <Image
                    src={chair.image || "/p4.png"}
                    alt={chair.name}
                    width={64}
                    height={64}
                    className="h-16 w-16 object-cover bg-gradient-to-br from-yellow-50 to-white group-hover/item:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="text-left ml-4 flex-1">
                  <h4 className="text-sm font-medium truncate font-josefin text-gray-800 group-hover/item:text-yellow-700 transition-colors">
                    {chair.name}
                  </h4>
                  <p className="text-sm font-bold font-josefin text-yellow-700">{chair.price}</p>
                  <div className="w-0 group-hover/item:w-full h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 transition-all duration-300"></div>
                </div>

                <IoIosArrowForward className="text-yellow-500 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>

          <Link
            href="/trending"
            className="text-sm text-yellow-700 hover:text-yellow-800 transition-colors flex items-center justify-end mt-2 font-medium"
          >
            View All
            <IoIosArrowForward className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TrendingProducts2
