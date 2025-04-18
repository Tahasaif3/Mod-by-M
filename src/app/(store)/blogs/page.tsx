import { LuCalendarDays } from "react-icons/lu"
import { FaPenNib } from "react-icons/fa"
import { GoDotFill } from "react-icons/go"
import Link from "next/link"
import { FaFacebookF, FaTwitter } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import Image from "next/image"
import Logos from "@/components/Logos"
import PageHeader from "@/components/PageHeader"

const recentPosts = [
  {
    id: 1,
    title: "It is a long established fact",
    date: "Aug 08 2020",
    image: "/recentpost1.svg",
  },
  {
    id: 2,
    title: "It is a long established fact",
    date: "Aug 07 2020",
    image: "/recentpost2.svg",
  },
  {
    id: 3,
    title: "It is a long established fact",
    date: "Aug 06 2020",
    image: "/recentpost3.svg",
  },
  {
    id: 4,
    title: "It is a long established fact",
    date: "Aug 06 2020",
    image: "/recentpost4.svg",
  },
]

const saleProducts = [
  {
    id: 1,
    title: "Elit ornare in enim mauris",
    date: "Aug 09 2020",
    image: "/saleproduct.svg",
  },
  {
    id: 2,
    title: "Elit ornare in enim mauris",
    date: "Aug 09 2020",
    image: "/saleproduct2.svg",
  },
  {
    id: 3,
    title: "Elit ornare in enim mauris",
    date: "Aug 09 2020",
    image: "/saleproduct3.svg",
  },
]

const offerProducts = [
  {
    id: 1,
    title: "Duis lectus est.",
    price: "$12.00 - $15.00",
    image: "/offerproduct.svg",
  },
  {
    id: 2,
    title: "Sed placerat.",
    price: "$12.00 - $15.00",
    image: "/offerproduct3.svg",
  },
  {
    id: 3,
    title: "Netus proin.",
    price: "$12.00 - $15.00",
    image: "/offerproduct2.svg",
  },
  {
    id: 4,
    title: "Platea in.",
    price: "$12.00 - $15.00",
    image: "/offerproduct4.svg",
  },
]

const tags = ["General", "Atsanil", "Insas.", "Bibsaas", "Nulla."]
const blogs = [
  {
    id: 1,
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    date: "Aug 09 2020",
    author: "Sarah Alison",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    image: "/blogimg2.svg",
  },
  {
    id: 2,
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    date: "Aug 09 2020",
    author: "Sarah Alison",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    image: "/blogimg3.svg",
  },
  {
    id: 3,
    title: "Sit nam congue feugiat nisl, mauris amet nisi.",
    date: "Aug 09 2020",
    author: "Sarah Alison",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    image: "/blogimg1.svg",
  },
]

const Blogs = () => {
  return (
    <section className="luxury-bg-pattern">
      <PageHeader heading="Blog Page" />
      <div className="w-full overflow-hidden py-12">
        <div className="max-w-[1170px] mx-auto px-4 lg:px-0">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-3/4 px-4">
              {blogs.map((blog, index) => (
                <div key={blog.id} className="mb-16 group relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="bg-white rounded-lg shadow-gold-lg hover:shadow-gold-xl transition-all duration-500 transform group-hover:translate-y-[-5px] overflow-hidden">
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Image
                        src={blog.image || "/placeholder.svg"}
                        alt={blog.title}
                        width={870}
                        height={453}
                        className="w-full h-auto object-cover rounded-t-lg lg:h-[453px] transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium text-yellow-800 shadow-gold-sm">
                        <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mr-2 animate-pulse"></span>
                        Featured Article
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex flex-wrap items-center gap-4 mb-6 font-josefin">
                        <div className="flex items-center">
                          <div className="gold-icon-circle-shine w-10 h-10 flex items-center justify-center mr-3">
                            <FaPenNib className="text-yellow-700" />
                          </div>
                          <span className="text-yellow-800 bg-yellow-50 border border-yellow-200 rounded-md px-4 py-1 text-sm lg:px-6 shadow-gold-sm">
                            {blog.author}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <div className="gold-icon-circle-shine w-10 h-10 flex items-center justify-center mr-3">
                            <LuCalendarDays className="text-yellow-700" />
                          </div>
                          <span className="text-yellow-800 bg-yellow-50 border border-yellow-200 rounded-md px-4 py-1 text-sm lg:px-6 shadow-gold-sm">
                            {blog.date}
                          </span>
                        </div>
                      </div>

                      <h2 className="text-xl lg:text-2xl font-bold text-gray-800 font-josefin mb-4 group-hover:text-yellow-700 transition-colors">
                        {blog.title}
                      </h2>

                      <p className="text-gray-600 mb-6 leading-relaxed">{blog.content}</p>

                      <Link
                        href={`/blog/${blog.id}`}
                        className="luxury-gold-button inline-flex items-center px-6 py-2 rounded-md text-sm uppercase tracking-wider font-medium group"
                      >
                        <span>Read More</span>
                        <GoDotFill className="ml-2 w-[10px] h-[10px] group-hover:ml-3 transition-all duration-300" />
                      </Link>
                    </div>
                  </div>

                  {/* Article number */}
                  <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 hidden lg:block">
                    <div className="text-8xl font-serif font-bold text-yellow-100 opacity-60">{index + 1}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-1/4 px-4">
              {/* Search */}
              <div className="mb-10 luxury-card">
                <h3 className="luxury-sidebar-heading">Search</h3>
                <div className="relative mt-4">
                  <input
                    type="text"
                    placeholder="Search for post"
                    className="w-full p-3 border border-yellow-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 transition-all duration-300 gold-input-bg"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-600 hover:text-yellow-800 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-10 luxury-card">
                <h3 className="luxury-sidebar-heading">Categories</h3>
                <ul className="text-gray-700 font-josefin grid grid-cols-2 gap-2 mt-4">
                  {["Hobbies (14)", "Women (21)", "Women (21)", "Women (21)", "Women (21)", "Women (21)"].map(
                    (category, i) => (
                      <li key={i} className="transition-all duration-200">
                        <a href="#" className="flex items-center py-2 px-3 rounded-md hover:bg-yellow-50 group">
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                          <span className="text-gray-700 group-hover:text-yellow-700 transition-colors">
                            {category}
                          </span>
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="mb-10 luxury-card">
                <h3 className="luxury-sidebar-heading">Recent Posts</h3>
                <div className="space-y-6 mt-6">
                  {recentPosts.map((post) => (
                    <Link href={`/blog/${post.id}`} key={post.id} className="flex group">
                      <div className="w-[70px] h-[70px] rounded-md overflow-hidden border border-yellow-100 flex-shrink-0 shadow-gold-sm group-hover:shadow-gold-md transition-shadow">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={70}
                          height={70}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-gray-800 group-hover:text-yellow-700 transition-colors line-clamp-2 font-josefin">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1 font-lato">{post.date}</p>
                        <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 transition-all duration-300 mt-1"></div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sale Products */}
              <div className="mb-10 luxury-card">
                <h3 className="luxury-sidebar-heading">Sale Products</h3>
                <div className="space-y-6 mt-6">
                  {saleProducts.map((product) => (
                    <Link href={`/collections/${product.id}`} key={product.id} className="flex group">
                      <div className="w-[70px] h-[70px] rounded-md overflow-hidden border border-yellow-100 flex-shrink-0 bg-yellow-50 shadow-gold-sm group-hover:shadow-gold-md transition-shadow">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.title}
                          width={70}
                          height={70}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          <h4 className="text-sm font-medium text-gray-800 group-hover:text-yellow-700 transition-colors font-josefin">
                            {product.title}
                          </h4>
                          <div className="ml-2 w-2 h-2 rounded-full bg-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <p className="text-xs text-yellow-700 mt-1 font-lato">{product.date}</p>
                        <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 transition-all duration-300 mt-1"></div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Offer Products */}
              <div className="mb-10 luxury-card">
                <h3 className="luxury-sidebar-heading">Offer Product</h3>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {offerProducts.map((offer) => (
                    <Link href={`/product/${offer.id}`} key={offer.id} className="group">
                      <div className="rounded-md overflow-hidden border border-yellow-100 bg-yellow-50 mb-3 shadow-gold-sm group-hover:shadow-gold-md transition-shadow">
                        <div className="relative">
                          <Image
                            src={offer.image || "/placeholder.svg"}
                            alt={offer.title}
                            width={126}
                            height={80}
                            className="w-full h-[80px] object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                      <h4 className="text-sm font-medium text-gray-800 group-hover:text-yellow-700 transition-colors font-josefin">
                        {offer.title}
                      </h4>
                      <span className="text-xs text-yellow-700 font-lato">{offer.price}</span>
                      <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-100 transition-all duration-300 mt-1"></div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Follow */}
              <div className="mb-10 luxury-card">
                <h3 className="luxury-sidebar-heading">Follow</h3>
                <div className="flex justify-center mt-6">
                  <div className="flex space-x-4 p-4 border border-yellow-100 rounded-md shadow-gold-sm">
                    {[
                      { icon: <FaFacebookF className="h-4 w-4" />, href: "/" },
                      { icon: <RiInstagramFill className="h-5 w-5" />, href: "/" },
                      { icon: <FaTwitter className="h-4 w-4" />, href: "/" },
                    ].map((social, i) => (
                      <Link
                        key={i}
                        href={social.href}
                        className="w-10 h-10 flex items-center justify-center rounded-full luxury-social-button"
                      >
                        {social.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-10 luxury-card">
                <h3 className="luxury-sidebar-heading">Tags</h3>
                <div className="flex flex-wrap mt-6">
                  {tags.map((tag, index) => (
                    <Link
                      href={`/tag/${tag.toLowerCase()}`}
                      key={index}
                      className="px-4 py-2 text-yellow-700 rounded-md text-sm mr-2 mb-2 hover:text-yellow-800 transition-colors relative group"
                    >
                      {tag}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Logos />
    </section>
  )
}

export default Blogs
