import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useRouter } from 'next/router';

const Login = () => {
  const checkboxRef = useRef(true);
  const [isChecked, setIsChecked] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/")
    }
  }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response = await res.json();

    if (response.success) {
      emailRef.current.value = ""
      passwordRef.current.value = ""

      localStorage.setItem("token",response.token)

      toast.success('Succesfully logged in !', {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

        setTimeout(() => {
          router.push("/");
        }, 1500)
      
    }
    else {
      toast.error('Invalid Credentials!', {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

  }

  return (
    <div>
      <section className="h-screen">
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          limit={8}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 md:max-auto lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form method='post' onSubmit={handleSubmit}  >
                {/* <!-- Email input --> */}
                <div className="mb-6">
                  <input ref={emailRef}
                    type="text" id='email'
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="mb-6 relative ">
                  <input ref={passwordRef}
                    type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                  <p className='absolute cursor-pointer right-7 bottom-3   leading-3'>{showPassword ?
                    <EyeSlashIcon
                      onClick={() => setShowPassword(!showPassword)}
                      className=' text-xl h-6 w-6' /> :
                    <EyeIcon onClick={() => setShowPassword(!showPassword)}
                      className=' text-xl h-6 w-6' />}
                  </p>
                </div>

                <div
                  className="flex justify-between items-center mb-6">
                  <div
                  >
                    <input
                      ref={checkboxRef}
                      type="checkbox"
                      id='checkbox'
                      checked={isChecked}
                      onChange={() => setIsChecked((prev) => !prev)}

                      className="checkbox h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"

                    />
                    <label className="form-check-label inline-block text-gray-800"
                      htmlFor="checkbox"
                    >Remember me</label >
                  </div>
                  <Link href={"/forgot"}
                    

                      className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                    >Forgot password?
                  </Link>
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>
                <p className="text-sm font-semibold mt-2 pt-1 mb-0 ">
                  Don&#39;t have an account?
                  <Link href={"/signup"}
                   
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out ml-2"
                    >Register
                  </Link>
                </p>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login