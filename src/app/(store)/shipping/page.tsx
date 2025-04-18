"use client"

import type React from "react"

import { useState } from "react"
import PageHeader from "@/components/PageHeader"
import Image from "next/image"
import userCartStore, { type CartItem } from "../../../../store"
import { urlFor } from "@/sanity/lib/image"
import { useUser } from "@clerk/nextjs"
import { createCheckoutSession, type Metadata } from "../../../../actions/createCheckoutSession"
import { FaShippingFast, FaLock, FaCreditCard } from "react-icons/fa"
import { RiVipCrownFill } from "react-icons/ri"
import { motion } from "framer-motion"

export default function Shipping() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    country: "",
    postal: "",
  })

  const groupedItems: CartItem[] = userCartStore((state) => state.getGroupedItems()) || []
  const { user } = useUser()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const getTotalPrice = () => {
    return groupedItems.reduce((total, { product, quantity }) => total + (product?.price || 0) * quantity, 0)
  }

  const getSubTotalPrice = () => {
    return groupedItems.reduce((total, { product, quantity }) => {
      const price = product?.price ?? 0
      const discountPercentage = product?.discountPercentage ?? 0
      const discount = (price * discountPercentage) / 100
      const discountedPrice = price - discount
      return total + discountedPrice * quantity
    }, 0)
  }

  // Direct checkout without shipping API
  const handleCheckout = async () => {
    setLoading(true)
    setError(null)

    try {
      // First validate the form
      if (
        !formData.email ||
        !formData.firstName ||
        !formData.lastName ||
        !formData.address ||
        !formData.city ||
        !formData.country ||
        !formData.postal
      ) {
        setError("Please fill in all required fields")
        setLoading(false)
        return
      }

      // Check if cart is empty
      if (!groupedItems || groupedItems.length === 0) {
        setError("Your cart is empty")
        setLoading(false)
        return
      }

      // Create a simplified metadata object with shipping info
      const metadata: Metadata = {
        orderNumber: Math.random().toString(36).substring(2, 10).toUpperCase(),
        customerName: user?.fullName ?? `${formData.firstName} ${formData.lastName}`,
        customerEmail: user?.emailAddresses?.[0]?.emailAddress ?? formData.email,
        clerkUserId: user?.id ?? "guest",
        // Include shipping info as a stringified object to avoid Stripe metadata limitations
        shippingAddress: JSON.stringify({
          address: formData.address,
          apartment: formData.apartment,
          city: formData.city,
          country: formData.country,
          postal: formData.postal,
        }),
      }

      console.log("Creating checkout session with metadata:", metadata)
      console.log("Cart items:", groupedItems)

      // Create checkout session with minimal data
      const response = await createCheckoutSession(groupedItems, metadata)

      if (response && response.url) {
        console.log("Redirecting to checkout URL:", response.url)
        window.location.href = response.url
      } else {
        throw new Error("Invalid response from checkout session")
      }
    } catch (error) {
      console.error("Error creating checkout session:", error)
      setError("Failed to create checkout session. Please try again later.")
    } finally {
      setLoading(false)
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
      <PageHeader heading="Checkout" />

      <motion.div
        className="min-h-screen flex justify-center py-16 px-4 overflow-x-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-full w-full lg:max-w-[1177px] grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div className="col-span-3" variants={itemVariants}>
            <div className="flex items-center mb-6">
              <RiVipCrownFill className="text-yellow-500 mr-2 text-2xl" />
              <h1 className="text-3xl font-bold text-gray-800 font-josefin">Modé by M Checkout</h1>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
                <p>{error}</p>
              </div>
            )}

            <div className="flex items-center mb-10">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
              <div className="flex space-x-4 px-6 text-sm font-medium">
                <span className="text-yellow-700">Cart</span>
                <span className="text-gray-400">/</span>
                <span className="text-yellow-700">Information</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-400">Shipping</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-400">Payment</span>
              </div>
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div className="col-span-3 md:col-span-2" variants={itemVariants}>
            <div className="bg-white rounded-lg shadow-gold-lg p-8 border border-yellow-100 relative overflow-hidden">
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-yellow-300 opacity-20 rounded-tl-lg"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-yellow-300 opacity-20 rounded-br-lg"></div>

              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="gold-icon-circle-shine w-10 h-10 flex items-center justify-center mr-4">
                    <FaLock className="text-yellow-700" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 font-josefin">Contact Information</h2>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email or mobile phone number"
                    className="w-full p-4 outline-none border border-yellow-200 rounded-md mb-4 focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300 gold-input-bg"
                    required
                  />
                  <label className="flex items-center text-sm mt-2 text-gray-600">
                    <input type="checkbox" className="mr-2 accent-yellow-500" />
                    Keep me up to date on news and exclusive offers
                  </label>
                </div>
              </div>

              <div className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="gold-icon-circle-shine w-10 h-10 flex items-center justify-center mr-4">
                    <FaShippingFast className="text-yellow-700" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 font-josefin">Shipping Address</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      className="w-full p-4 outline-none border border-yellow-200 rounded-md focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300 gold-input-bg"
                      required
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 group-focus-within:w-full transition-all duration-300"></div>
                  </div>

                  <div className="relative group">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      className="w-full p-4 outline-none border border-yellow-200 rounded-md focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300 gold-input-bg"
                      required
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 group-focus-within:w-full transition-all duration-300"></div>
                  </div>
                </div>

                <div className="relative group mt-6">
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    className="w-full p-4 outline-none border border-yellow-200 rounded-md focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300 gold-input-bg"
                    required
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 group-focus-within:w-full transition-all duration-300"></div>
                </div>

                <div className="relative group mt-6">
                  <input
                    type="text"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
                    placeholder="Apartment, suite, etc. (optional)"
                    className="w-full p-4 outline-none border border-yellow-200 rounded-md focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300 gold-input-bg"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 group-focus-within:w-full transition-all duration-300"></div>
                </div>

                <div className="relative group mt-6">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="w-full p-4 outline-none border border-yellow-200 rounded-md focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300 gold-input-bg"
                    required
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 group-focus-within:w-full transition-all duration-300"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  <div className="relative group">
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="Country"
                      className="w-full p-4 outline-none border border-yellow-200 rounded-md focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300 gold-input-bg"
                      required
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 group-focus-within:w-full transition-all duration-300"></div>
                  </div>

                  <div className="relative group">
                    <input
                      type="text"
                      name="postal"
                      value={formData.postal}
                      onChange={handleChange}
                      placeholder="Postal Code"
                      className="w-full p-4 outline-none border border-yellow-200 rounded-md focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300 gold-input-bg"
                      required
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 group-focus-within:w-full transition-all duration-300"></div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-10">
                <a href="/cart" className="text-yellow-700 hover:text-yellow-800 transition-colors flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
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
                  Return to cart
                </a>

                <button
                  onClick={handleCheckout}
                  className="luxury-gold-button px-8 py-3 rounded-md text-sm uppercase tracking-wider font-medium flex items-center group"
                >
                  <span>Continue to Shipping</span>
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div className="col-span-3 md:col-span-1" variants={itemVariants}>
            <div className="bg-white rounded-lg shadow-gold-lg border border-yellow-100 overflow-hidden">
              <div className="p-6 border-b border-yellow-100">
                <h2 className="text-xl font-bold text-gray-800 font-josefin mb-4 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2"></span>
                  Order Summary
                </h2>

                <ul className="divide-y divide-yellow-100">
                  {groupedItems?.map(({ product, quantity }) => (
                    <li key={product?._id} className="py-4">
                      <div className="flex items-start gap-4">
                        <div className="relative">
                          {product?.image && (
                            <div className="relative w-20 h-20 bg-yellow-50 rounded-md overflow-hidden border border-yellow-100 p-1">
                              <Image
                                src={urlFor(product?.image).url() || "/placeholder.svg"}
                                alt={product?.name || "product image"}
                                width={80}
                                height={80}
                                className="object-contain w-full h-full"
                              />
                            </div>
                          )}
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            {quantity}
                          </div>
                        </div>

                        <div className="flex-1">
                          <p className="font-medium text-gray-800 font-josefin">{product?.name}</p>
                          <p className="text-sm text-gray-500 mt-1">${Number(product?.price).toFixed(2)}</p>
                          {(product?.discountPercentage ?? 0) > 0 && (
                            <div className="flex items-center mt-1">
                              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                                Save {product.discountPercentage}%
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-b from-yellow-50 to-white">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${getSubTotalPrice().toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>Calculated at next step</span>
                  </div>

                  <div className="border-t border-yellow-100 pt-3 mt-3"></div>

                  <div className="flex justify-between font-bold text-gray-800 text-lg">
                    <span>Total</span>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">USD</div>
                      <div>${getTotalPrice().toFixed(2)}</div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={loading}
                  className="w-full luxury-gold-button py-4 rounded-md text-sm uppercase tracking-wider font-medium flex items-center justify-center group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <FaCreditCard className="mr-2" />
                        Proceed to Checkout
                      </>
                    )}
                  </span>
                </button>

                <div className="mt-4 flex items-center justify-center text-xs text-gray-500">
                  <FaLock className="mr-1 text-yellow-600" />
                  <span>Secure checkout powered by Stripe</span>
                </div>

                <div className="mt-6 flex justify-center">
                  <div className="flex space-x-2">
                    {["visa", "mastercard", "amex", "paypal"].map((card) => (
                      <div key={card} className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center">
                        <Image
                          src={`/placeholder.svg?height=24&width=32&text=${card}`}
                          alt={card}
                          width={32}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-lg shadow-gold-sm p-4 border border-yellow-100">
              <div className="flex items-center text-sm text-gray-600">
                <div className="gold-icon-circle w-8 h-8 flex items-center justify-center mr-3">
                  <FaShippingFast className="text-yellow-700 text-xs" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Free shipping on orders over $250</p>
                  <p className="text-xs mt-1">Estimated delivery: 3-5 business days</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}



// "use client"

// import type React from "react"

// import { useState } from "react"
// import PageHeader from "@/components/PageHeader"
// import Image from "next/image"
// import userCartStore, { type CartItem } from "../../../../store"
// import { urlFor } from "@/sanity/lib/image"
// import { useUser } from "@clerk/nextjs"
// import { createCheckoutSession, type Metadata } from "../../../../actions/createCheckoutSession"
// import { FaShippingFast, FaLock, FaCreditCard } from "react-icons/fa"
// import { RiVipCrownFill } from "react-icons/ri"
// import { motion } from "framer-motion"

// export default function Shipping() {
//   const [loading, setLoading] = useState(false)
//   const [formData, setFormData] = useState({
//     email: "",
//     firstName: "",
//     lastName: "",
//     address: "",
//     apartment: "",
//     city: "",
//     country: "",
//     postal: "",
//   })

//   const groupedItems: CartItem[] = userCartStore((state) => state.getGroupedItems()) || []
//   const { user } = useUser()

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setFormData({ ...formData, [name]: value })
//   }

//   const getTotalPrice = () => {
//     return groupedItems.reduce((total, { product, quantity }) => total + (product?.price || 0) * quantity, 0)
//   }

//   const getSubTotalPrice = () => {
//     return groupedItems.reduce((total, { product, quantity }) => {
//       const price = product?.price ?? 0
//       const discountPercentage = product?.discountPercentage ?? 0
//       const discount = (price * discountPercentage) / 100
//       const discountedPrice = price - discount
//       return total + discountedPrice * quantity
//     }, 0)
//   }

//   const handleCheckout = async () => {
//     setLoading(true)

//     try {
//       // First validate the form
//       if (
//         !formData.email ||
//         !formData.firstName ||
//         !formData.lastName ||
//         !formData.address ||
//         !formData.city ||
//         !formData.country ||
//         !formData.postal
//       ) {
//         alert("Please fill in all required fields")
//         setLoading(false)
//         return
//       }

//       // Process shipping information
//       await handleSubmit()

//       // Create metadata for checkout
//       const metadata: Metadata = {
//         orderNumber: crypto.randomUUID(),
//         customerName: user?.fullName ?? formData.firstName + " " + formData.lastName,
//         customerEmail: user?.emailAddresses[0]?.emailAddress ?? formData.email,
//         clerkUserId: user?.id ?? "guest",
//       }

//       // Create checkout session
//       const checkoutUrl = await createCheckoutSession(groupedItems, metadata)

//       if (checkoutUrl) {
//         window.location.href = checkoutUrl
//       } else {
//         alert("Failed to create checkout session.")
//       }
//     } catch (error) {
//       console.error("Checkout process failed:", error)
//       alert("An error occurred during checkout. Please try again.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleSubmit = async () => {
//     // Make sure the base URL is defined
//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || window.location.origin

//     const payload = {
//       shipToAddress: {
//         email: formData.email,
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         address: formData.address,
//         apartment: formData.apartment,
//         city: formData.city,
//         country: formData.country,
//         postal: formData.postal,
//       },
//       packages: [
//         {
//           weight: { value: 5, unit: "ounce" },
//           dimensions: { height: 3, width: 15, length: 10, unit: "inch" },
//         },
//       ],
//     }

//     try {
//       const res = await fetch(`${baseUrl}/api/shipengine`, {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       })

//       if (!res.ok) {
//         throw new Error(`API request failed with status ${res.status}`)
//       }

//       const data = await res.json()
//       console.log("Response from API", data)
//       return data
//     } catch (error) {
//       console.error("Error during form submission:", error)
//       throw error
//     }
//   }

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 100 },
//     },
//   }

//   return (
//     <section className="luxury-bg-pattern">
//       <PageHeader heading="Checkout" />

//       <motion.div
//         className="min-h-screen flex justify-center py-16 px-4 overflow-x-hidden"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         <div className="max-w-full w-full lg:max-w-[1177px] grid grid-cols-1 md:grid-cols-3 gap-10">
//           <motion.div className="col-span-3" variants={itemVariants}>
//             <div className="flex items-center mb-6">
//               <RiVipCrownFill className="text-yellow-500 mr-2 text-2xl" />
//               <h1 className="text-3xl font-bold text-gray-800 font-josefin">Modé by M Checkout</h1>
//             </div>

//             <div className="flex items-center mb-10">
//               <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
//               <div className="flex space-x-4 px-6 text-sm font-medium">
//                 <span className="text-yellow-700">Cart</span>
//                 <span className="text-gray-400">/</span>
//                 <span className="text-yellow-700">Information</span>
//                 <span className="text-gray-400">/</span>
//                 <span className="text-gray-400">Shipping</span>
//                 <span className="text-gray-400">/</span>
//                 <span className="text-gray-400">Payment</span>
//               </div>
//               <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
//             </div>
//           </motion.div>

//           <motion.div className="col-span-3 md:col-span-2" variants={itemVariants}>
//             <div className="bg-white rounded-lg shadow-gold-lg p-8 border border-yellow-100 relative overflow-hidden">
//               {/* Decorative corner elements */}
//               <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-yellow-300 opacity-20 rounded-tl-lg"></div>
//               <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-yellow-300 opacity-20 rounded-br-lg"></div>

//               <div className="mb-10">
//                 <div className="flex items-center mb-6">
//                   <div className="gold-icon-circle-shine w-10 h-10 flex items-center justify-center mr-4">
//                     <FaLock className="text-yellow-700" />
//                   </div>
//                   <h2 className="text-xl font-bold text-gray-800 font-josefin">Contact Information</h2>
//                 </div>

//                 <div className="relative">
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Email or mobile phone number"
//                     className="w-full p-4 outline-none border border-yellow-200 rounded-md mb-4 focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300 gold-input-bg"
//                     required
//                   />
//                   <label className="flex items-center text-sm mt-2 text-gray-600">
//                     <input type="checkbox" className="mr-2 accent-yellow-500" />
//                     Keep me up to date on news and exclusive offers
//                   </label>
//                 </div>
//               </div>

//               <div className="mb-10">
//                 <div className="flex items-center mb-6">
//                   <div className="gold-icon-circle-shine w-10 h-10 flex items-center justify-center mr-4">
//                     <FaShippingFast className="text-yellow-700" />
//                   </div>
//                   <h2 className="text-xl font-bold text-gray-800 font-josefin">Shipping Address</h2>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   <div className="relative group">
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       placeholder="First name"
//                       className="w-full p-4 outline-none border border-yellow-200 rounded-md focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300 gold-input-bg"
//                       required
//                     />
//                     <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 group-focus-within:w-full transition-all duration-300"></div>
//                   </div>

//                   <div className="relative group">
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       placeholder="Last name"
//                       className="w-full p-4 outline-none border border-yellow-200 rounded-md focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300 gold-input-bg"
//                       required
//                     />
//                     <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 group-focus-within:w-full transition-all duration-300"></div>
//                   </div>
//                 </div>

//                 <div className="relative group mt-6">
//                   <input
//                     type="text"
//                     name="address"
//                     value={formData.address}
//                     onChange={handleChange}
//                     placeholder="Address"
//                     className="w-full p-4 outline-none border border-yellow-200 rounded-md focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300 gold-input-bg"
//                     required
//                   />
//                   <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 group-focus-within:w-full transition-all duration-300"></div>
//                 </div>

//                 <div className="relative group mt-6">
//                   <input
//                     type="text"
//                     name="apartment"
//                     value={formData.apartment}
//                     onChange={handleChange}
//                     placeholder="Apartment, suite, etc. (optional)"
//                     className="w-full p-4 outline-none border border-yellow-200 rounded-md focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300 gold-input-bg"
//                   />
//                   <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 group-focus-within:w-full transition-all duration-300"></div>
//                 </div>

//                 <div className="relative group mt-6">
//                   <input
//                     type="text"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                     placeholder="City"
//                     className="w-full p-4 outline-none border border-yellow-200 rounded-md focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300 gold-input-bg"
//                     required
//                   />
//                   <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 group-focus-within:w-full transition-all duration-300"></div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
//                   <div className="relative group">
//                     <input
//                       type="text"
//                       name="country"
//                       value={formData.country}
//                       onChange={handleChange}
//                       placeholder="Country"
//                       className="w-full p-4 outline-none border border-yellow-200 rounded-md focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300 gold-input-bg"
//                       required
//                     />
//                     <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 group-focus-within:w-full transition-all duration-300"></div>
//                   </div>

//                   <div className="relative group">
//                     <input
//                       type="text"
//                       name="postal"
//                       value={formData.postal}
//                       onChange={handleChange}
//                       placeholder="Postal Code"
//                       className="w-full p-4 outline-none border border-yellow-200 rounded-md focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300 gold-input-bg"
//                       required
//                     />
//                     <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 group-focus-within:w-full transition-all duration-300"></div>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-between items-center mt-10">
//                 <a href="/cart" className="text-yellow-700 hover:text-yellow-800 transition-colors flex items-center">
//                   <svg
//                     className="w-4 h-4 mr-2"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M10 19l-7-7m0 0l7-7m-7 7h18"
//                     ></path>
//                   </svg>
//                   Return to cart
//                 </a>

//                 <button
//                   onClick={handleSubmit}
//                   className="luxury-gold-button px-8 py-3 rounded-md text-sm uppercase tracking-wider font-medium flex items-center group"
//                 >
//                   <span>Continue to Shipping</span>
//                   <svg
//                     className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M14 5l7 7m0 0l-7 7m7-7H3"
//                     ></path>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div className="col-span-3 md:col-span-1" variants={itemVariants}>
//             <div className="bg-white rounded-lg shadow-gold-lg border border-yellow-100 overflow-hidden">
//               <div className="p-6 border-b border-yellow-100">
//                 <h2 className="text-xl font-bold text-gray-800 font-josefin mb-4 flex items-center">
//                   <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2"></span>
//                   Order Summary
//                 </h2>

//                 <ul className="divide-y divide-yellow-100">
//                   {groupedItems?.map(({ product, quantity }) => (
//                     <li key={product?._id} className="py-4">
//                       <div className="flex items-start gap-4">
//                         <div className="relative">
//                           {product?.image && (
//                             <div className="relative w-20 h-20 bg-yellow-50 rounded-md overflow-hidden border border-yellow-100 p-1">
//                               <Image
//                                 src={urlFor(product?.image).url() || "/placeholder.svg"}
//                                 alt={product?.name || "product image"}
//                                 width={80}
//                                 height={80}
//                                 className="object-contain w-full h-full"
//                               />
//                             </div>
//                           )}
//                           <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
//                             {quantity}
//                           </div>
//                         </div>

//                         <div className="flex-1">
//                           <p className="font-medium text-gray-800 font-josefin">{product?.name}</p>
//                           <p className="text-sm text-gray-500 mt-1">${Number(product?.price).toFixed(2)}</p>
//                           {(product?.discountPercentage ?? 0) > 0 && (
//                             <div className="flex items-center mt-1">
//                               <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
//                                 Save {product.discountPercentage}%
//                               </span>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="p-6 bg-gradient-to-b from-yellow-50 to-white">
//                 <div className="space-y-3 mb-6">
//                   <div className="flex justify-between text-gray-600">
//                     <span>Subtotal</span>
//                     <span>${getSubTotalPrice().toFixed(2)}</span>
//                   </div>

//                   <div className="flex justify-between text-gray-600">
//                     <span>Shipping</span>
//                     <span>Calculated at next step</span>
//                   </div>

//                   <div className="border-t border-yellow-100 pt-3 mt-3"></div>

//                   <div className="flex justify-between font-bold text-gray-800 text-lg">
//                     <span>Total</span>
//                     <div className="text-right">
//                       <div className="text-sm text-gray-500">USD</div>
//                       <div>${getTotalPrice().toFixed(2)}</div>
//                     </div>
//                   </div>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={handleCheckout}
//                   disabled={loading}
//                   className="w-full luxury-gold-button py-4 rounded-md text-sm uppercase tracking-wider font-medium flex items-center justify-center group relative overflow-hidden"
//                 >
//                   <span className="relative z-10 flex items-center">
//                     {loading ? (
//                       <>
//                         <svg
//                           className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                           ></circle>
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                           ></path>
//                         </svg>
//                         Processing...
//                       </>
//                     ) : (
//                       <>
//                         <FaCreditCard className="mr-2" />
//                         Proceed to Checkout
//                       </>
//                     )}
//                   </span>
//                 </button>

//                 <div className="mt-4 flex items-center justify-center text-xs text-gray-500">
//                   <FaLock className="mr-1 text-yellow-600" />
//                   <span>Secure checkout powered by Stripe</span>
//                 </div>

//                 <div className="mt-6 flex justify-center">
//                   <div className="flex space-x-2">
//                     {["visa", "mastercard", "amex", "paypal"].map((card) => (
//                       <div key={card} className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center">
//                         <Image
//                           src={`/cards.png?height=24&width=32&text=${card}`}
//                           alt={card}
//                           width={32}
//                           height={24}
//                           className="object-contain"
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6 bg-white rounded-lg shadow-gold-sm p-4 border border-yellow-100">
//               <div className="flex items-center text-sm text-gray-600">
//                 <div className="gold-icon-circle w-8 h-8 flex items-center justify-center mr-3">
//                   <FaShippingFast className="text-yellow-700 text-xs" />
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-800">Free shipping on orders over $250</p>
//                   <p className="text-xs mt-1">Estimated delivery: 3-5 business days</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   )
// }
