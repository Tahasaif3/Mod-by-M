import Logos from "@/components/Logos";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";


export default function Contact() {
  return (
    <section >
            <PageHeader heading="Contact Us" />

        <div className="bg-white max-w-[1177px] mx-auto py-16 px-4 sm:px-8">


      <div className="container mx-auto max-w-[1170px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-josefin font-bold text-[#151875] text-[28px] sm:text-[36px] mb-6">
            Information About Us
          </h2>
          <p className="text-[#8A8FB9] font-josefin text-[14px] sm:text-[16px] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor lobortis.
          </p>
          <div className="flex space-x-4 justify-center sm:justify-start">
            <div className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] bg-[#5625DF] rounded-full"></div>
            <div className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] bg-[#FF27B7] rounded-full"></div>
            <div className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] bg-[#37DAF3] rounded-full"></div>
          </div>
        </div>
        <div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#151875] font-josefin mb-6">
            Contact Way
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 text-[#8A8FB9] text-[14px] sm:text-[16px]">
            <div className="flex flex-col space-y-4 w-full">
              <div className="flex items-center space-x-4">
                <div className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] bg-[#5726DF] rounded-full flex-shrink-0"></div>
                <div className="font-josefin">
                  <p>Tel: +923156520735</p>
                  <p>E-Mail: jawaidali0735@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] bg-[#FFB265] rounded-full flex-shrink-0"></div>
                <div className="font-josefin">
                  <p>Link Road Hala, Mattiari, Sindh, Pakistan</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4 w-full">
              <div className="flex items-center space-x-4">
                <div className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] bg-[#FB2E86] rounded-full flex-shrink-0"></div>
                <div className="font-josefin">
                  <p>Support Forum For over 24hr</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] bg-[#1BE982] rounded-full flex-shrink-0"></div>
                <div className="font-josefin">
                  <p>Free standard shipping on all orders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1170px] mx-auto">
        <div className="relative w-full h-auto order-1 lg:order-2">
          <Image
            src="/contactimf.png"
            alt="Contact Illustration"
            width={500}
            height={500}
            className="mx-auto"
          />
        </div>
        <div className="order-2 lg:order-1">
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#151875] font-josefin mb-6">
            Get In Touch
          </h2>
          <p className="text-[#8A8FB9] font-josefin text-[14px] sm:text-[16px] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor lobortis.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border rounded text-[#8A8FB9] text-[14px] sm:text-[16px] font-josefin border-gray-300 p-3 w-full"
              />
              <input
                type="email"
                placeholder="Your E-mail"
                className="border text-[#8A8FB9] text-[14px] sm:text-[16px] font-josefin border-gray-300 p-3 w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="border text-[#8A8FB9] text-[14px] sm:text-[16px] font-josefin border-gray-300 p-3 w-full"
            />
            <textarea
              placeholder="Type Your Message"
              rows={4}
              className="border text-[#8A8FB9] text-[14px] sm:text-[16px] font-josefin border-gray-300 p-3 w-full"
            ></textarea>
           <div className="flex sm:justify-start justify-center">
  <button className="bg-[#FB2E86] w-[120px] h-[40px] text-[12px] sm:w-[150px] sm:h-[44px] sm:text-[14px] font-josefin text-white px-6 py-2">
    Send Mail
  </button>
</div>

          </form>
        </div>
      </div>


      </div>
      <Logos/>
    </section>
  );
}
