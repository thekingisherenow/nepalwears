import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Forgot() {
  return (
    <div>
      <section className="h-screen mb-[500px] md:mb-[400px] lg:mb-10">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full  g-6 text-gray-800">
            <div className="md:w-8/12 md:max-auto lg:w-6/12 mb-12 md:mb-0">
              <Image
                src="https://iili.io/DIJJg2.jpg"
                className="w-full"
                alt="confused people"
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20 ">

              <div className="bg-white px-6 py-4  text-black w-full">
                <div className='mb-5   '>
                  <h1 className="text-4xl font-bold  mb-1">Find Your Account
                  </h1>
                  <h2 className="text-xl text-gray-400 ">Please enter your email or mobile number to search for your account. </h2>
                </div>
                <input
                  type="text"
                  className="block border border-gray-200 w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email" />

                  <div className='flex font-bold justify-end'>

                <Link href={"/login"}><button
                  className="w-1/4 rounded-xl text-center py-3  bg-gray-200  focus:outline-none 
                  my-1 border-2 border-solid mr-4 cursor-pointer"
                  >Cancel</button></Link>

                  <button
                  type="submit"
                  className="w-1/4 rounded-xl text-center py-3  bg-blue-500 text-white hover:bg-blue-600 focus:outline-none my-1"
                  >Search</button>
                  </div>

              </div>


            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Forgot