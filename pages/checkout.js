import { MinusCircleIcon, PlusCircleIcon, ShoppingBagIcon, XCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';
import React, { useRef } from 'react'

const Checkout = ({ cart, toggleCart, clearCart, removeFromCart, subTotal, addToCart }) => {
  const ref = useRef();
  return (
    <div className='container lg:max-w-6xl p-1 m-1 mx-auto'>
      <h1 className='font-bold text-3xl text-center p-5 my-8'>Checkout</h1>
      <h2 className='font-semibold text-xl'>1. Delivery Details</h2>
      <div className="mx-auto flex my-4 ">
        <div className='px-2 w-1/2'>
          <div className='relative mb-4'>
            <label htmlFor="name" className="leading-7 text-sm text-gray-600 ">Name:</label>
            <input type="name" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className=' relative mb-4'>

            <label htmlFor="email" className="leading-7 text-sm text-gray-600 mr-2">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

          </div>

        </div>
      </div>
      <div className='w-full px-1'>

        <label htmlFor="address" className="leading-7 text-sm text-gray-600 mr-2">Address</label>

        <textarea className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          name='address' id='address' cols="30" rows="2" ></textarea>
      </div>
      <div className="mx-auto flex my-4 ">
        <div className='px-2 w-1/2'>
          <div className='relative mb-4'>
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600 ">Phone</label>
            <input type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className=' relative mb-4'>

            <label htmlFor="city" className="leading-7 text-sm text-gray-600 mr-2">City</label>
            <input type="city" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

          </div>

        </div>
      </div>
      <div className="mx-auto flex my-4 ">
        <div className='px-2 w-1/2'>
          <div className='relative mb-4'>
            <label htmlFor="state" className="leading-7 text-sm text-gray-600 ">State</label>
            <input type="state" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className=' relative mb-4'>

            <label htmlFor="pincode" className="leading-7 text-sm text-gray-600 mr-2">Pincode</label>
            <input type="pincode" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

          </div>

        </div>
      </div>
      <h2 className='font-semibold text-xl'>2. Review Cart Items</h2>
      <div ref={ref}
        className=' py-8 '>
        <span onClick={toggleCart}
          className='absolute top-3 right-2 cursor-pointer text-blue-600'><XCircleIcon className='h-6 w-6' /></span>
        <ol className='list-decimal font-semibold'>

          {(Object.keys(cart).length===0)? (
               <div className='p-4 font-normal'>No items in the cart</div>
          ):(
            <>
            
            {Object.keys(cart).map((k)=>{
            return(
              <>
              <li key={k}
               className='item flex bg-blue-200 '>
            <div className=' font-semibold my-5 '>{cart[k].name} </div>
            <div className='mx-5 my-5'>{cart[k].price} </div>

            
            <div className='flex items-center font-semibold justify-center '>
              <MinusCircleIcon 
              onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}}
              className='h-5 mr-2 cursor-pointer text-blue-600'/>
              {cart[k].qty} 
              <PlusCircleIcon 
              onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}}
              
              className='h-5 ml-2 cursor-pointer text-blue-600'/>
              </div>
              
          </li>
         
              </>
              

              )
          })}
           <span className='font-bold '>Subtotal: रू {subTotal}</span>
          <div className='my-4'>

          <Link href={"/checkout"}><a>  
        <button 
          className="flex text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
          <ShoppingBagIcon 
        
        className='h-6 mt-'/>Pay रू {subTotal}</button></a></Link>
        </div>
            
            </>
          )
           }
         
        </ol>

      </div>
    </div>
  )
}

export default Checkout