import React from 'react'
import { ShoppingCartIcon } from "@heroicons/react/24/outline"

const CartIcon = () => {
  return (
    <button className='p-2 bg-green-600 hover:bg-green-800 rounded-full'>
        <ShoppingCartIcon className='w-6 h-6'/>
    </button>
  )
}

export default CartIcon