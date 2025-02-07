import React from 'react'
import { ShoppingCart} from "lucide-react"
import {motion} from "framer-motion"
import Link from 'next/link'
const EmptyCart = () => {
  return (
    <div className='bg-white flex items-center justify-center text-center py-20'>
        <div>
           <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{repeat:Infinity, duration:2}} className='inline-block'>
           <ShoppingCart size={64} className="text-gray-400 mx-auto " />
           </motion.div>

          
           <div className="flex justify-center text-2xl font-semibold text-zinc-700 py-10">No product found in the Cart!
       
       </div>
       <div className='flex items-center justify-center'>
       <Link href='/'>
       <button  className="bg-[#FB2E86] font-josefin w-[200px] h-[39px] text-white px-4 py-2 rounded-[2px]">
               Continue Shopping
             </button>
       </Link>
       </div>
    
        </div>
       
    </div>
  )
}

export default EmptyCart