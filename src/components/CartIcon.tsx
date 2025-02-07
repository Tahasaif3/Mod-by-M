"use client"
import { ShoppingCart} from "lucide-react"
import Link from "next/link";
import React, { useEffect, useState } from 'react'
import userCartStore from "../../store";

const CartIcon = () => {

    const [isClient, setIsClient] = useState(false);
    const groupedItems = userCartStore((state)=>state.getGroupedItems())
    
    useEffect(()=>{
        setIsClient(true);
    },[]);
 if (!isClient){
    return null;
 }


  return (
    <div className="flex items-center gap-1 cursor-pointer">
    <Link href="/cart">Cart</Link>

    <Link href="/cart" className="relative group">
      <ShoppingCart size={17} />
      <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-sm rounded-full w-4 h-4 flex items-center justify-center text-center">{groupedItems?.length ? groupedItems?.length : 0}</span>
    </Link>
  </div>

  )
}

export default CartIcon