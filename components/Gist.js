import Link from 'next/link'
import React from 'react'
import { TruckIcon } from '@heroicons/react/24/solid'

const Gist = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
        Express yourself with Nepal wears. </h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
     Varities of designs in hoodies,t-shirts,mugs.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className=" md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Peace of mind</h2>
          <p className="leading-relaxed text-base">
Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.</p>
        </div>
      </div>
      <div className=" md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4">
            {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg> */}
            <TruckIcon  className='w-5 h-5'/>


          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Easy Shipping</h2>
          <p className="leading-relaxed text-base">We now deliver to 10 major cities in Nepal. The delivery charges vary.</p>
        </div>
      </div>
      <div className=" md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Personalized Designs
           </h2>
          <p className="leading-relaxed text-base">You can contact us for making designs you wish.                                                         .
            </p>
        </div>
      </div>
      <div className=" md:w-1/2 p-4">
        <div className="border border-gray-200 p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
            </svg>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2"> Unique Items</h2>
          <p className="leading-relaxed text-base">We have items with unique designs of your favourite band,superheros,anime characters,which you will find no where else.
            </p>
        </div>
      </div>
     
    </div>
    <h1 className='text-center font-bold pt-4 mt-12 '>Check out T-shirt Designs.</h1>
    <Link href={"/tshirts"}><button className="flex mx-auto mt-2 text-white bg-orange-500 border-0
     py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">Let's go </button></Link>
  </div>
</section>
      </div>
  )
}

export default Gist