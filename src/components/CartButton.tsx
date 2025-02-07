"use client"


import React, { useEffect, useState } from 'react'
import userCartStore from "../../store";
import { Product } from "../../sanity.types";
import { toast } from "react-hot-toast";


interface Props {
    product:Product;
   
}

const CartButton = ({product}:Props) => {
   
    const [isClient, setIsClient] = useState(false);
    const {addItem} = userCartStore()
    
    
    useEffect(()=>{
        setIsClient(true);
    },[]);
 if (!isClient){
    return null;
 }
 const handleAddToCart = (product:Product) => {
    addItem(product)
    toast.success(`${product?.name?.substring(0,12)}...added successfully`)
  }

  return (
    <div >
  <button onClick={() => handleAddToCart(product)}   className="text-[#151875] font-josefin py-2 px-4 text-sm lg:text-[16px]">
                Add to Cart
              </button>

  </div>

  )
}

export default CartButton