import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { ShoppingCartIcon, XCircleIcon, PlusCircleIcon, MinusCircleIcon, ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/solid'

import Link from 'next/link'
import Slug from '../pages/products/[slug]'

const Navbar = ({ logout, user, cart, addToCart, removeFromCart, clearCart, subTotal }) => {

  const ref = useRef();
  const [dropdown, setDropdown] = useState(false)

  const toggleDropdown = () => {
    setDropdown(!dropdown)
  }
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



  return (
    <div className='flex flex-col md:flex-row justify-center items-center md:justify-start  sticky top-0 bg-white z-50 p-3 shadow-xl '>
        <Link href={"/"}>
          <a>
            <Image src='https://iili.io/mR3I6B.png' className='object-cover'  
            height={50} width={230}

              alt='' />
          </a>
        </Link>
      <div className='mx-auto flex   '>
        <ul className='flex items-center justify-center  space-x-6 font-bold  '>
          <Link href={"/tshirts"}><a><li className='hover:text-blue-800 text-xl'>T-Shirt</li></a></Link>
          <Link href={"/hoodies"}><a><li className='hover:text-blue-800 text-xl'>Hoodies</li></a></Link>
          <Link href={"/mugs"}><a><li className='hover:text-blue-800 text-xl'>Mugs</li></a></Link>
          <Link href={"/stickers"}><a><li className='hover:text-blue-800 text-xl'>Stickers</li></a></Link>
        </ul>
      </div>

      <div className='absolute flex top-7 right-5'>

        <div>

          <a onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>

            {user.value && <>
              <UserCircleIcon onMouseOver={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}
                // onClick ={toggleDropdown}
                className='  px-1  w-12 cursor-pointer  text-4xl  ' />
              {dropdown && <div className='absolute shadow-xl bg-white top-6 px-1 right-14 rounded-md   '>
                <ul>
                  <Link href={"/myaccount"}><li className=' px-7  text-sm hover:text-blue-500 cursor-pointer font-semibold py-2  border-b-2 border-solid border-gray-400 '>My Account</li></Link>
                  <Link href={"/orders"}><li className='px-7 text-sm hover:text-blue-500 cursor-pointer font-semibold  py-2  border-b-2 border-solid border-gray-400'>Orders</li></Link>
                  <li onClick={logout}
                    className='px-7  text-sm hover:text-blue-500 cursor-pointer font-semibold py-2  '>Log Out</li>
                </ul>
              </div>}

            </>

            }
          </a>

          {!user.value && <Link href={"/login"}><a>
            <button className='font-bold bg-blue-500 text-white w-15
             sm:w-20 rounded-md border-gray-400 ml-1 text-sm p-2 '>Login</button></a></Link>}

        </div>
        <div onClick={toggleCart}
          className='cart cursor-pointer   ml-2 '>
          <ShoppingCartIcon
            className=' w-10 text-4xl' />
            <div className='relative'>
              
          <span className=' bg-orange-400 absolute -top-12 -right-3 rounded-full p-1 h-7 w-7 text-center'>{Object.keys(cart).length}</span>
            </div>

        </div>
      </div>


       

        <div ref={ref}
          className='sideCart absolute top-0 right-0 bg-blue-200 py-10 px-8  transform transition-transform z-50 overflow-y-auto translate-x-full hidden h-[100vh] w-96
      '>
          <h2 className='font-bold text-xl text-center '> Shopping Cart</h2>
          <span
            onClick={toggleCart}
            className='absolute top-3 right-2 cursor-pointer text-blue-600'>
            <XCircleIcon className='h-6 w-6' /></span>
          <ol className='list-decimal font-semibold'>

            {(Object.keys(cart).length === 0) ? (
              <div className='p-4 font-normal'>No items in the cart</div>
            ) : (
              <>

                {Object.keys(cart).map((k) => {
                  return (
                    <li key={k}
                      className='item flex '>
                      <div className='w-4/5 font-semibold my-5 p-1 '>{cart[k].name}({cart[k].size}/{cart[k].variant}) </div>
                      <div className='mx-2 my-3 flex justify-center items-center'>रू{cart[k].price} </div>
                      <div className='flex items-center font-semibold justify-center w-1/5 -mr-5'>
                        <MinusCircleIcon
                          onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }}
                          className='h-5 mr-2 cursor-pointer text-blue-600' />
                        {cart[k].qty}
                        <PlusCircleIcon
                          onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }}

                          className='h-5 ml-2 cursor-pointer text-blue-600' />
                      </div>
                    </li>
                  )
                })}

              </>
            )
            }

          </ol>
          <span>Subtotal: {subTotal}</span>
          <div className='flex  mt-16 space-x-5'>
            <Link href={"/checkout"}><a>
              <button
                onClick={toggleCart}
                className="flex text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded text-lg">
                <ShoppingBagIcon

                  className='h-6 mt-' />Checkout</button></a></Link>
            <button onClick={clearCart}
              className="flex text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Clear Cart</button>
          </div>


        </div>
      
    </div>
  )
}

export default Navbar