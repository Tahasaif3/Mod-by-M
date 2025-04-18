import type React from "react"
import { FaShippingFast, FaHeadset, FaShieldAlt, FaRegCreditCard } from "react-icons/fa"

interface SupportSectionProps {
  heading: string
}

const SupportSection: React.FC<SupportSectionProps> = ({ heading }) => {
  const features = [
    {
      icon: <FaShippingFast className="text-3xl text-yellow-600" />,
      title: "Free Shipping",
      description: "Free worldwide shipping on all orders over $250",
    },
    {
      icon: <FaHeadset className="text-3xl text-yellow-600" />,
      title: "24/7 Support",
      description: "Dedicated support team available around the clock",
    },
    {
      icon: <FaRegCreditCard className="text-3xl text-yellow-600" />,
      title: "Secure Payment",
      description: "Multiple secure payment methods accepted",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-yellow-600" />,
      title: "Quality Guarantee",
      description: "Each product comes with a 2-year quality guarantee",
    },
  ]

  return (
    <div className="py-16 md:py-24 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-[1177px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-xs uppercase tracking-wider font-medium border border-yellow-200 mb-4">
            Excellence in Every Detail
          </span>
          <h2 className="text-3xl md:text-4xl font-josefin font-bold text-gray-800 mb-4">
            {heading.split(" ")[0]} <span className="gold-text">{heading.split(" ").slice(1).join(" ")}</span>
          </h2>
          <div className="h-[3px] w-24 gold-gradient mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-gold-sm hover:shadow-gold-lg transition-all duration-300 text-center group hover:-translate-y-2"
            >
              <div className="gold-icon-circle mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-josefin font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SupportSection
