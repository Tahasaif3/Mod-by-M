"use client"

import Link from "next/link";
import React, { useEffect, useState } from 'react'

import { Heart} from "lucide-react"
import userWishlistStore from "../../storeForWhislist";
const WishlistIcon = () => {

    const [isClient, setIsClient] = useState(false);
    const groupedItems = userWishlistStore((state)=>state.getGroupedItems())
    
    useEffect(()=>{
        setIsClient(true);
    },[]);
 if (!isClient){
    return null;
 }


  return (
    <div className="flex items-center gap-1 cursor-pointer">
    <Link href="/wishlist">Wishlist</Link>

    <Link href="/wishlist" className="relative group">
      <Heart size={16} />
      <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-sm rounded-full w-4 h-4 flex items-center justify-center text-center">{groupedItems?.length ? groupedItems?.length : 0}</span>
    </Link>
  </div>

  )
}

export default WishlistIcon