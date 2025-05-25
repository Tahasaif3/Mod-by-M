"use client"

import { Suspense } from "react"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Logos from "@/components/Logos"
import PageHeader from "@/components/PageHeader"
import Image from "next/image"
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTruck } from "react-icons/fa"

// Extract the success message component
function SuccessMessage() {
  const searchParams = useSearchParams()
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      setSuccess(true)
    }
  }, [searchParams])

  if (!success) return null

  return (
    <div className="bg-green-100 text-green-800 px-6 py-4 rounded-lg max-w-[1170px] mx-auto mb-6 text-center shadow-lg font-josefin">
      ✅ Thank you! Your message has been sent successfully.
    </div>
  )
}

// Loading fallback for the success message
function SuccessMessageFallback() {
  return <div className="h-0 max-w-[1170px] mx-auto mb-6">{/* Empty fallback that doesn't take space */}</div>
}

export default function Contact() {
  return (
    <section className="luxury-bg-pattern">
      <PageHeader heading="Contact Us" />

      {/* Wrap the component using useSearchParams in Suspense */}
      <Suspense fallback={<SuccessMessageFallback />}>
        <SuccessMessage />
      </Suspense>

      <div className="max-w-[1177px] mx-auto py-16 px-4 sm:px-8">
        {/* Information and Contact Way Section */}
        <div className="container mx-auto max-w-[1170px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Information About Us */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-yellow-300 opacity-30"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-yellow-300 opacity-30"></div>

            <div className="bg-white p-8 rounded-lg shadow-gold-lg hover:shadow-gold-xl transition-all duration-500 transform hover:-translate-y-1">
              <h2 className="font-josefin font-bold text-gray-800 text-[28px] sm:text-[36px] mb-6 relative inline-block">
                Information About Us
                <span className="absolute bottom-0 left-0 w-full h-1 gold-gradient"></span>
              </h2>
              <p className="text-gray-600 font-josefin text-[14px] sm:text-[16px] mb-8 leading-relaxed">
                Mode by M is a premium women's luxury bag brand that blends timeless elegance with modern
                sophistication. Each piece is crafted to exude class, confidence, and couture-level quality. Designed
                for women who carry their style with grace.
              </p>
              <div className="flex space-x-6 justify-center sm:justify-start">
                <div className="w-[40px] h-[40px] luxury-social-button flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110">
                  <FaEnvelope className="text-white" />
                </div>
                <div className="w-[40px] h-[40px] luxury-social-button flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110">
                  <FaPhoneAlt className="text-white" />
                </div>
                <div className="w-[40px] h-[40px] luxury-social-button flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110">
                  <FaMapMarkerAlt className="text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Way */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-yellow-300 opacity-30"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-yellow-300 opacity-30"></div>

            <div className="bg-white p-8 rounded-lg shadow-gold-lg hover:shadow-gold-xl transition-all duration-500 transform hover:-translate-y-1">
              <h2 className="text-[28px] sm:text-[36px] font-bold text-gray-800 font-josefin mb-6 relative inline-block">
                Contact Way
                <span className="absolute bottom-0 left-0 w-full h-1 gold-gradient"></span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 text-gray-600 text-[14px] sm:text-[16px]">
                <div className="flex flex-col space-y-6 w-full">
                  <div className="flex items-center space-x-4 group">
                    <div className="gold-icon-circle-shine w-[50px] h-[50px] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <FaPhoneAlt className="text-yellow-700" />
                    </div>
                    <div className="font-josefin group-hover:translate-x-1 transition-transform duration-300">
                      <p className="font-medium text-yellow-800">Tel: +923226207819</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="gold-icon-circle-shine w-[50px] h-[50px] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <FaMapMarkerAlt className="text-yellow-700" />
                    </div>
                    <div className="font-josefin group-hover:translate-x-1 transition-transform duration-300">
                      <p>Karachi Sindh, Pakistan</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-6 w-full">
                  <div className="flex items-center space-x-4 group">
                    <div className="gold-icon-circle-shine w-[50px] h-[50px] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <FaEnvelope className="text-yellow-700" />
                    </div>
                    <div className="font-josefin group-hover:translate-x-1 transition-transform duration-300">
                      <p className="font-medium text-yellow-800">muskanakhter2627@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="gold-icon-circle-shine w-[50px] h-[50px] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <FaTruck className="text-yellow-700" />
                    </div>
                    <div className="font-josefin group-hover:translate-x-1 transition-transform duration-300">
                      <p>Free standard shipping on all orders.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get In Touch Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1170px] mx-auto">
          {/* Contact Image */}
          <div className="relative w-full h-auto order-1 lg:order-2">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border-2 border-yellow-200 opacity-60 animate-spin-slow"></div>
            <div className="absolute -bottom-5 -left-5 w-60 h-60 rounded-full border-2 border-yellow-200 opacity-60 animate-spin-slow-reverse"></div>

            <div className="relative z-10 bg-white p-6 rounded-2xl shadow-gold-xl rotate-2 hover:rotate-0 transition-all duration-500 group">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100 p-6">
                <Image
                  src="/contactimf.png"
                  alt="Contact Illustration"
                  width={500}
                  height={500}
                  className="mx-auto transform group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-yellow-300 opacity-30"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-yellow-300 opacity-30"></div>

            <div className="bg-white p-8 rounded-lg shadow-gold-lg">
              <h2 className="text-[28px] sm:text-[36px] font-bold text-gray-800 font-josefin mb-6 relative inline-block">
                Get In Touch
                <span className="absolute bottom-0 left-0 w-full h-1 gold-gradient"></span>
              </h2>
              <p className="text-gray-600 font-josefin text-[14px] sm:text-[16px] mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae
                eget dolor lobortis.
              </p>
              <form action="https://formspree.io/f/xkgjkdow?success=true" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="border rounded-md text-gray-700 text-[14px] sm:text-[16px] font-josefin border-yellow-200 p-4 w-full bg-yellow-50/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 group-focus-within:w-full transition-all duration-300"></div>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your E-mail"
                      className="border rounded-md text-gray-700 text-[14px] sm:text-[16px] font-josefin border-yellow-200 p-4 w-full bg-yellow-50/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 group-focus-within:w-full transition-all duration-300"></div>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="border rounded-md text-gray-700 text-[14px] sm:text-[16px] font-josefin border-yellow-200 p-4 w-full bg-yellow-50/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 group-focus-within:w-full transition-all duration-300"></div>
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Type Your Message"
                    rows={4}
                    className="border rounded-md text-gray-700 text-[14px] sm:text-[16px] font-josefin border-yellow-200 p-4 w-full bg-yellow-50/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300"
                  ></textarea>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 group-focus-within:w-full transition-all duration-300"></div>
                </div>
                <div className="flex sm:justify-start justify-center">
                  <button className="luxury-gold-button w-[150px] h-[50px] text-[14px] sm:w-[180px] sm:h-[54px] sm:text-[16px] font-josefin text-white px-6 py-3 rounded-md uppercase tracking-wider font-medium flex items-center justify-center group">
                    <span>Send Message</span>
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
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px] relative overflow-hidden mb-16">
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-50"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1586796251734!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="filter grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
        <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-50"></div>
      </div>

      <Logos />
    </section>
  )
}


// "use client"

// import { useEffect, useState } from "react"
// import { useSearchParams } from "next/navigation"
// import Logos from "@/components/Logos"
// import PageHeader from "@/components/PageHeader"
// import Image from "next/image"
// import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTruck } from "react-icons/fa"

// export default function Contact() {
//   const searchParams = useSearchParams()
//   const [success, setSuccess] = useState(false)

//   useEffect(() => {
//     if (searchParams.get("success") === "true") {
//       setSuccess(true)
//     }
//   }, [searchParams])

//   return (
//     <section className="luxury-bg-pattern">
//       <PageHeader heading="Contact Us" />
//       {success && (
//         <div className="bg-green-100 text-green-800 px-6 py-4 rounded-lg max-w-[1170px] mx-auto mb-6 text-center shadow-lg font-josefin">
//           ✅ Thank you! Your message has been sent successfully.
//         </div>
//       )}
//       <div className="max-w-[1177px] mx-auto py-16 px-4 sm:px-8">
//         {/* Information and Contact Way Section */}
//         <div className="container mx-auto max-w-[1170px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Information About Us */}
//           <div className="relative">
//             {/* Decorative elements */}
//             <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-yellow-300 opacity-30"></div>
//             <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-yellow-300 opacity-30"></div>

//             <div className="bg-white p-8 rounded-lg shadow-gold-lg hover:shadow-gold-xl transition-all duration-500 transform hover:-translate-y-1">
//               <h2 className="font-josefin font-bold text-gray-800 text-[28px] sm:text-[36px] mb-6 relative inline-block">
//                 Information About Us
//                 <span className="absolute bottom-0 left-0 w-full h-1 gold-gradient"></span>
//               </h2>
//               <p className="text-gray-600 font-josefin text-[14px] sm:text-[16px] mb-8 leading-relaxed">
//               Mode by M is a premium women’s luxury bag brand that blends timeless elegance with modern sophistication. Each piece is crafted to exude class, confidence, and couture-level quality. Designed for women who carry their style with grace.
//               </p>
//               <div className="flex space-x-6 justify-center sm:justify-start">
//                 <div className="w-[40px] h-[40px] luxury-social-button flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110">
//                   <FaEnvelope className="text-white" />
//                 </div>
//                 <div className="w-[40px] h-[40px] luxury-social-button flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110">
//                   <FaPhoneAlt className="text-white" />
//                 </div>
//                 <div className="w-[40px] h-[40px] luxury-social-button flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110">
//                   <FaMapMarkerAlt className="text-white" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Way */}
//           <div className="relative">
//             {/* Decorative elements */}
//             <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-yellow-300 opacity-30"></div>
//             <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-yellow-300 opacity-30"></div>

//             <div className="bg-white p-8 rounded-lg shadow-gold-lg hover:shadow-gold-xl transition-all duration-500 transform hover:-translate-y-1">
//               <h2 className="text-[28px] sm:text-[36px] font-bold text-gray-800 font-josefin mb-6 relative inline-block">
//                 Contact Way
//                 <span className="absolute bottom-0 left-0 w-full h-1 gold-gradient"></span>
//               </h2>
//               <div className="flex flex-col sm:flex-row gap-6 text-gray-600 text-[14px] sm:text-[16px]">
//                 <div className="flex flex-col space-y-6 w-full">
//                   <div className="flex items-center space-x-4 group">
//                     <div className="gold-icon-circle-shine w-[50px] h-[50px] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                       <FaPhoneAlt className="text-yellow-700" />
//                     </div>
//                     <div className="font-josefin group-hover:translate-x-1 transition-transform duration-300">
//                       <p className="font-medium text-yellow-800">Tel: +923226207819</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4 group">
//                     <div className="gold-icon-circle-shine w-[50px] h-[50px] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                       <FaMapMarkerAlt className="text-yellow-700" />
//                     </div>
//                     <div className="font-josefin group-hover:translate-x-1 transition-transform duration-300">
//                       <p>Karachi Sindh, Pakistan</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col space-y-6 w-full">
//                   <div className="flex items-center space-x-4 group">
//                     <div className="gold-icon-circle-shine w-[50px] h-[50px] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                       <FaEnvelope className="text-yellow-700" />
//                     </div>
//                     <div className="font-josefin group-hover:translate-x-1 transition-transform duration-300">
//                     <p className="font-medium text-yellow-800">muskanakhter2627@gmail.com</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4 group">
//                     <div className="gold-icon-circle-shine w-[50px] h-[50px] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                       <FaTruck className="text-yellow-700" />
//                     </div>
//                     <div className="font-josefin group-hover:translate-x-1 transition-transform duration-300">
//                       <p>Free standard shipping on all orders.</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Get In Touch Section */}
//         <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1170px] mx-auto">
//           {/* Contact Image */}
//           <div className="relative w-full h-auto order-1 lg:order-2">
//             <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border-2 border-yellow-200 opacity-60 animate-spin-slow"></div>
//             <div className="absolute -bottom-5 -left-5 w-60 h-60 rounded-full border-2 border-yellow-200 opacity-60 animate-spin-slow-reverse"></div>

//             <div className="relative z-10 bg-white p-6 rounded-2xl shadow-gold-xl rotate-2 hover:rotate-0 transition-all duration-500 group">
//               <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100 p-6">
//                 <Image
//                   src="/contactimf.png"
//                   alt="Contact Illustration"
//                   width={500}
//                   height={500}
//                   className="mx-auto transform group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="order-2 lg:order-1 relative">
//             <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-yellow-300 opacity-30"></div>
//             <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-yellow-300 opacity-30"></div>

//             <div className="bg-white p-8 rounded-lg shadow-gold-lg">
//               <h2 className="text-[28px] sm:text-[36px] font-bold text-gray-800 font-josefin mb-6 relative inline-block">
//                 Get In Touch
//                 <span className="absolute bottom-0 left-0 w-full h-1 gold-gradient"></span>
//               </h2>
//               <p className="text-gray-600 font-josefin text-[14px] sm:text-[16px] mb-8 leading-relaxed">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae
//                 eget dolor lobortis.
//               </p>
//               <form
//                action="https://formspree.io/f/xkgjkdow?success=true"
//                method="POST"
//                className="space-y-6">
//              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   <div className="relative">
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Your Name"
//                       className="border rounded-md text-gray-700 text-[14px] sm:text-[16px] font-josefin border-yellow-200 p-4 w-full bg-yellow-50/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300"
//                     />
//                     <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 group-focus-within:w-full transition-all duration-300"></div>
//                   </div>
//                   <div className="relative">
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Your E-mail"
//                       className="border rounded-md text-gray-700 text-[14px] sm:text-[16px] font-josefin border-yellow-200 p-4 w-full bg-yellow-50/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300"
//                     />
//                     <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 group-focus-within:w-full transition-all duration-300"></div>
//                   </div>
//                 </div>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     name="subject"
//                     placeholder="Subject"
//                     className="border rounded-md text-gray-700 text-[14px] sm:text-[16px] font-josefin border-yellow-200 p-4 w-full bg-yellow-50/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300"
//                   />
//                   <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 group-focus-within:w-full transition-all duration-300"></div>
//                 </div>
//                 <div className="relative">
//                   <textarea
//                     name="message"
//                     placeholder="Type Your Message"
//                     rows={4}
//                     className="border rounded-md text-gray-700 text-[14px] sm:text-[16px] font-josefin border-yellow-200 p-4 w-full bg-yellow-50/50 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300"
//                   ></textarea>
//                   <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 group-focus-within:w-full transition-all duration-300"></div>
//                 </div>
//                 <div className="flex sm:justify-start justify-center">
//                   <button className="luxury-gold-button w-[150px] h-[50px] text-[14px] sm:w-[180px] sm:h-[54px] sm:text-[16px] font-josefin text-white px-6 py-3 rounded-md uppercase tracking-wider font-medium flex items-center justify-center group">
//                     <span>Send Message</span>
//                     <svg
//                       className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M14 5l7 7m0 0l-7 7m7-7H3"
//                       ></path>
//                     </svg>
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Map Section */}
//       <div className="w-full h-[400px] relative overflow-hidden mb-16">
//         <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-50"></div>
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1586796251734!5m2!1sen!2sus"
//           width="100%"
//           height="400"
//           style={{ border: 0 }}
//           allowFullScreen={true}
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           className="filter grayscale hover:grayscale-0 transition-all duration-700"
//         ></iframe>
//         <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-50"></div>
//       </div>

//       <Logos />
//     </section>
//   )
// }