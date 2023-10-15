import React from 'react'
import { ShoppingCartIcon } from "@heroicons/react/24/outline"

interface CartIconProps{
  addToCart: () => void;
}

const CartIcon = ({ addToCart }: CartIconProps) => {
  return (
    <button className='p-2 bg-green-600 hover:bg-green-800 rounded-full relative' onClick={addToCart}>
        <ShoppingCartIcon className='w-6 h-6'/>
    </button>
  )
};

export default CartIcon