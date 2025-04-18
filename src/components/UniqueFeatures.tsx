import Image from "next/image"
import { RiVipCrownFill } from "react-icons/ri"
import { FaShoppingBag } from "react-icons/fa"

export default function UniqueFeatures() {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white py-20 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-50"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full border border-yellow-200 opacity-30"></div>
      <div className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full border border-yellow-200 opacity-30"></div>

      <div className="max-w-[1177px] mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0 relative">
          {/* Decorative circles with animation */}
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full border-2 border-yellow-200 opacity-60 animate-spin-slow"></div>
          <div className="absolute -bottom-5 -right-5 w-60 h-60 rounded-full border-2 border-yellow-200 opacity-60 animate-spin-slow-reverse"></div>

          {/* Main product display with enhanced styling */}
          <div className="relative z-10 bg-white p-8 rounded-2xl shadow-gold-xl rotate-3 hover:rotate-0 transition-all duration-500 group">
            {/* Enhanced product image with gradient background */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-yellow-50 to-white p-6">
              <Image
                src="/luxurybag.png"
                alt="Luxury Women's Bag"
                height={550}
                width={558}
                className="rounded-lg object-contain transform group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
              />
            </div>

            {/* Enhanced price tag */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-5 py-3 rounded-lg shadow-xl transform rotate-3 group-hover:rotate-0 transition-all duration-500">
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white animate-pulse flex items-center justify-center text-[10px] font-bold text-yellow-600">
                !
              </div>
              <p className="text-sm font-medium">Premium Quality</p>
              <p className="text-xl font-bold">$129.00</p>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2">
          <div className="flex items-center mb-4">
            <RiVipCrownFill className="text-yellow-500 mr-2" />
            <span className="text-sm uppercase tracking-wider text-yellow-700 font-medium">Exclusive Collection</span>
          </div>

          <h2 className="text-2xl md:text-3xl text-gray-800 font-bold font-josefin mb-6 leading-tight">
            Unique Features Of Latest & <br /> Trending <span className="gold-text">Luxury Bags</span>
          </h2>

          <ul className="space-y-6 mb-8">
            {[
              {
                color: "from-yellow-400 to-yellow-600",
                text: "Made from premium Italian leather and handcrafted to perfection",
              },
              {
                color: "from-yellow-500 to-amber-600",
                text: "Features gold-tone hardware with a magnetic clasp closure",
              },
              {
                color: "from-amber-400 to-yellow-500",
                text: "Spacious interior with zipper and slip pockets for essentials",
              },
            ].map((feature, index) => (
              <li key={index} className="flex items-start group">
                <div className="relative mt-1">
                  <div
                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${feature.color} mr-4 flex-shrink-0 shadow-gold-sm group-hover:shadow-gold-md transition-shadow`}
                  ></div>
                  <div className="absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 blur-sm opacity-0 group-hover:opacity-70 transition-opacity"></div>
                </div>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed group-hover:text-yellow-700 transition-colors">
                  {feature.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <button className="luxury-gold-button px-8 py-3 rounded-md text-sm uppercase tracking-wider font-medium flex items-center group">
              <FaShoppingBag className="mr-2" />
              <span>Add To Cart</span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span>
            </button>

            <div className="text-center md:text-left">
              <span className="font-bold font-josefin text-gray-800 text-lg block mb-1">Elegant Luxury Handbag</span>
              <div className="flex items-center">
                <span className="text-yellow-700 font-bold text-xl">$129.00</span>
                <span className="ml-2 text-gray-400 line-through text-sm">$159.00</span>
                <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                  Save 19%
                </span>
              </div>
            </div>
          </div>

          {/* Additional premium details */}
          <div className="mt-8 flex flex-wrap gap-4">
            {["Premium Quality", "Free Shipping", "30-Day Returns"].map((badge, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full text-sm text-yellow-700 flex items-center shadow-gold-sm"
              >
                <span className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-50"></div>
    </div>
  )
}
