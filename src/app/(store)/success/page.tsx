"use client";

import React, { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import userCartStore from "../../../../store";
import Logos from "@/components/Logos";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { Loader } from "lucide-react";

const SuccessPageContent = () => {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");
  const resetCart = userCartStore((state) => state.resetCart);

  useEffect(() => {
    if (orderNumber) {
      resetCart();
    }
  }, [orderNumber, resetCart]);

  return (
    <section>
      <PageHeader heading="Order Completed" />
      <div className="relative max-w-[1177px] mx-auto flex items-center justify-center bg-white">
        <div className="flex flex-col items-center z-10 mb-28 mt-4">
          <div className="flex items-center justify-center h-20 w-20 bg-white shadow rounded-full mb-6">
            <Image
              src="/tickmark.svg"
              alt="Check Icon"
              width={46}
              height={46}
              className="h-[46px] w-[46px]"
            />
          </div>
          <h1 className="text-3xl font-bold text-[#101750] font-josefin text-center">
            Your Order Is Completed!
          </h1>
          <p className="text-[#8D92A7] text-center max-w-2xl font-lato mt-8">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          <Link href="/">
            <button className="mt-4 px-6 py-2 text-[16px] bg-[#FF1788] w-[208px] h-[59px] font-lato text-white rounded-[2px] hover:bg-pink-600">
              Continue Shopping
            </button>
          </Link>
        </div>
        <div className="absolute top-10 left-10 ml-32 mt-10 flex-col items-center hidden lg:flex">
          <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
            <Image
              src="/clock.svg"
              alt="Clock Icon"
              width={94}
              height={94}
              className="h-[94] w-[94]"
            />
          </div>
        </div>
        <div className="absolute bottom-10 mt-28 mr-12 right-10 flex-col items-center hidden lg:flex">
          <div className="h-16 w-16 flex items-center justify-center mt-2">
            <Image
              src="/checklist.svg"
              alt="Clipboard Icon"
              width={70}
              height={70}
              className="h-[70] w-[70]"
            />
          </div>
        </div>
      </div>
      <Logos />
    </section>
  );
};

const SuccessPage = () => {
  return (
    <Suspense fallback={<div><Loader/></div>}>
      <SuccessPageContent />
    </Suspense>
  );
};

export default SuccessPage;
