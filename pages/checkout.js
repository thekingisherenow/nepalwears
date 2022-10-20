import React from 'react'

const Checkout = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='font-bold text-3xl text-center p-5 my-8'>Checkout</h1>
      <h2 className='font-bold text-xl'>Delivery Details</h2>
      <div className="relative mb-4 flex space-x-5">
      <div >
        <label htmlFor="name" className="leading-7 text-sm text-gray-600  mr-2">Name:</label>
        <input type="name" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div >
        <label htmlFor="email" className="leading-7 text-sm text-gray-600 mr-2">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      </div>
  )
}

export default Checkout