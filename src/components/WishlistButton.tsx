"use client"

import React, { useEffect, useState } from 'react'

import { Product } from "../../sanity.types";
import { toast } from "react-hot-toast";

import { Heart } from "lucide-react";
import userWishlistStore from "../../storeForWhislist";

interface Props {
    product:Product;
    className?: string;
}

const WishlistButton = ({product}:Props) => {
   
    const [isClient, setIsClient] = useState(false);
 
    const {addToWishlist}= userWishlistStore()
    
    useEffect(()=>{
        setIsClient(true);
    },[]);
 if (!isClient){
    return null;
 }
 const handleAddToWishlist = (product:Product) => {
    addToWishlist(product)
    toast.success(`${product?.name?.substring(0,12)}...added successfully`)
  }

  return (
    <div >
 <button onClick={() => handleAddToWishlist(product)} className="text-[#535399] h-[18px] w-[18px] flex items-center justify-center">
                <Heart/>
              </button>

  </div>

  )
}

export default WishlistButton