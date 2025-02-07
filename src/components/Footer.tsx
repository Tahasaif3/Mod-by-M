"use client"

const Footer = () => {
  return (
    <footer className="overflow-hidden bg-[#EEEFFB] py-10 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-6">
      
        <div className="flex flex-col items-center text-center sm:text-center md:items-start md:text-left">
          <h3 className="text-[38px] font-bold mb-4 sm:text-left md:text-left">Hekto</h3>
          <div className="flex items-center mb-4 justify-center sm:mb-6">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="p-2 border border-gray-300 rounded-l w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button className="bg-[#FB2E86] text-white px-5 py-2 rounded-r whitespace-nowrap hover:bg-pink-600 transition-all duration-300 text-base font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400">
              Sign Up
            </button>
          </div>
          <p className="text-sm text-[#8A8FB9] mb-2">Contact Info</p>
          <p className="text-sm text-[#8A8FB9]">
            Link Road Hala, Mattiari, Sindh, Pakistan
          </p>
        </div>

       
        <div className="flex flex-col items-center text-center sm:text-center md:items-start md:text-left">
          <h3 className="text-lg font-bold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li className="text-sm text-[#8A8FB9]">Laptops & Computers</li>
            <li className="text-sm text-[#8A8FB9]">Cameras & Photography</li>
            <li className="text-sm text-[#8A8FB9]">Smart Phones & Tablets</li>
            <li className="text-sm text-[#8A8FB9]">Video Games & Consoles</li>
            <li className="text-sm text-[#8A8FB9]">Waterproof Headphones</li>
          </ul>
        </div>

       
        <div className="flex flex-col items-center text-center sm:text-center md:items-start md:text-left">
          <h3 className="text-lg font-bold mb-4">Customer Care</h3>
          <ul className="space-y-2">
            <li className="text-sm text-[#8A8FB9]">My Account</li>
            <li className="text-sm text-[#8A8FB9]">Discount</li>
            <li className="text-sm text-[#8A8FB9]">Returns</li>
            <li className="text-sm text-[#8A8FB9]">Order History</li>
            <li className="text-sm text-[#8A8FB9]">Order Tracking</li>
          </ul>
        </div>

       
        <div className="flex flex-col items-center text-center sm:text-center md:items-start md:text-left">
          <h3 className="text-lg font-bold mb-4">Pages</h3>
          <ul className="space-y-2">
            <li className="text-sm text-[#8A8FB9]">Blog</li>
            <li className="text-sm text-[#8A8FB9]">Browse the Shop</li>
            <li className="text-sm text-[#8A8FB9]">Category</li>
            <li className="text-sm text-[#8A8FB9]">Pre-Built Pages</li>
            <li className="text-sm text-[#8A8FB9]">WooCommerce Pages</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
