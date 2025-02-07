

import DiscountItem from "@/components/DiscountItem";

import GetUpdate from "@/components/GetUpdate";
import LatestBlog from "@/components/LatestBlogs";
import Logos from "@/components/Logos";

import ProductList from "@/components/ProductList";
import Products from "@/components/Products";
import SupportSection from "@/components/SupportSection";
import TopCategories from "@/components/TopCategories";
import TrendingProducts from "@/components/TrendingProducts";
import TrendingProducts2 from "@/components/TrendingProducts2";

import UniqueFeatures from "@/components/UniqueFeatures";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Products />
      <ProductList />
      <SupportSection heading=" What Shopex Offer!"/>
      <UniqueFeatures />
      <TrendingProducts />
      <TrendingProducts2 />
      <DiscountItem />
      <TopCategories />

      <GetUpdate />
      <Logos />
      <LatestBlog />
    </div>
  );
}
