import Link from 'next/link';
import React from 'react'

const Signup = () => {

  return (
    <div>
    <section className="h-screen">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 md:max-auto lg:w-6/12 mb-12 md:mb-0">
            <img
              src ="https://iili.io/DoM5w7.jpg"
              className="w-full"
              alt="Phone image"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            
          {/* <div className="bg-grey-400er  flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"> */}

                <div className="bg-white px-6 py-4  text-black w-full">
                    <h1 className="text-3xl text-center mb-5">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-400 w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        className="block border border-grey-400 w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-400 w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        className="block border border-grey-400 w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-600 mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline ml-1 border-b border-grey-600 text-blue-600" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline  ml-1 border-b border-grey-600 text-blue-600" href="#">
                            Privacy Policy
                        </a>
                    </div>
                    <div className="text-grey-600 mt-6">
                    Already have an account? 
                    <Link href={"/login"} >
                    <a className="no-underline border-b ml-1 border-blue text-red-600 hover:text-red-700 focus:text-red-700 font-semibold" >
                        Log in
                    </a>
                    </Link>
                </div>
                </div>

                
            </div>
        </div>

          {/* </div>
        </div> */}
      </div>
    </section>
    </div>
  )
}

export default Signup