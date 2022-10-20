import Image from 'next/image'
import React, { useRef } from 'react'
import { ShoppingCartIcon, XCircleIcon,PlusCircleIcon,MinusCircleIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'

import Link from 'next/link'
import Slug from '../pages/products/[slug]'

const Navbar = ({cart,addToCart,removeFromCart,clearCart,subTotal}) => {

  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.add("translate-x-0");
      ref.current.classList.remove("hidden");

      ref.current.classList.remove("translate-x-full");
    }
    else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
      ref.current.classList.add("hidden");


    }
  }

  const ref = useRef();

  return (
    <div className='flex justify-start mt-2 sticky top-0 bg-white  z-50 shadow-xl '>
      <div>
        <Link href={"/"}>
          <a>
          <Image src='/icon.png' className=' object-cover' width={50} height={50}
          alt='' />
          </a>
          </Link>
      </div>
      <div className='mx-auto flex items-center'>
        <ul className='flex items-center space-x-2 sm:space-x-6 font-bold md:text-xl '>
          <Link href={"/tshirts"}><a><li>T-Shirt</li></a></Link>
          <Link href={"/hoodies"}><a><li>Hoodies</li></a></Link>
          <Link href={"/mugs"}><a><li>Mugs</li></a></Link>
          <Link href={"/stickers"}><a><li>Stickers</li></a></Link>
        </ul>
      </div>
      <div onClick={toggleCart}
        className='cart absolute right-0 top-0 mx-5 flex items-center cursor-pointer'>
        <ShoppingCartIcon className=' w-10  text-4xl  ' />
      </div>

      <div ref={ref}
        className='sideCart absolute top-0 right-0 bg-blue-200 py-10 px-8  transform transition-transform z-50  translate-x-full hidden h-[100vh]
      '>
        <h2 className='font-bold text-xl text-center '>Shopping Cart</h2>
        <span onClick={toggleCart}
          className='absolute top-3 right-2 cursor-pointer text-blue-600'><XCircleIcon className='h-6 w-6' /></span>
        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length===0 && <div className='p-4 font-normal'>No items in the cart</div>}
          {Object.keys(cart).map((k)=>{
            return(
              <li key={k}
               className='item flex '>
            <div className='w-2/3 font-semibold my-5 mr-3'>{cart[k].name} </div>
            <div className='flex items-center font-semibold justify-centerw-1/3'>
              <MinusCircleIcon 
              onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}}
              className='h-5 mr-2 cursor-pointer text-blue-600'/>
              {cart[k].qty} 
              <PlusCircleIcon 
              onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}}
              
              className='h-5 ml-2 cursor-pointer text-blue-600'/>
              </div>
          </li>
              )
          })}
        </ol>
        <div className='flex space-x-5'>
        <Link href={"/checkout"}><a>  
        <button 
        className="flex mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
          <ShoppingBagIcon className='h-6'/>Checkout</button></a></Link>
        <button onClick={clearCart}
         className="flex mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Clear Cart</button>
        </div>


      </div>
    </div>
  )
}

export default Navbar