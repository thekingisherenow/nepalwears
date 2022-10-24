import React from 'react'

function Forgot() {
  return (
    <div>
      <section className="h-screen mb-2">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full  g-6 text-gray-800">
            <div className="md:w-8/12 md:max-auto lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://iili.io/DoM5w7.jpg"
                className="w-full"
                alt="Phone image"
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
                  className="block border border-gray-400 w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email" />
                <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
                >Create Account</button>

              </div>


            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Forgot