import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [signupcomplete, setSignupcomplete] = useState(false);
  
  const router = useRouter();

  const nameRef = useRef();
  const emailRef = useRef();
  const pass1Ref = useRef();
  const pass2Ref = useRef();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/")
    }
  }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: pass1Ref.current.value,
    };

    let res = await fetch(`${process.env.HOST}/api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    let userjson = await res.json();

    nameRef.current.value = "";
    emailRef.current.value = "";
    pass1Ref.current.value = "";
    pass2Ref.current.value = "";

    setSignupcomplete(true);

  }

  return (
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <section className="h-screen mb-[500px] md:mb-[400px] lg:mb-10 ">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full mb-3 g-6 text-gray-800">
            <div className="md:w-8/12 md:max-auto lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://iili.io/DoM5w7.jpg"
                className="w-full"
                alt="Phone image"
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">

              <div className="bg-white px-6 py-4  text-black w-full">
                <div className='mb-5   '>
                  <h1 className="text-4xl font-bold  mb-1">Sign Up.</h1>
                  <h2 className="text-sm text-gray-400 ">It&#39;s quick and easy. </h2>
                </div>
                <form onSubmit={handleSubmit}
                  method='POST' >

                  <input ref={nameRef}
                    id="name"
                    required
                    type="text"
                    className="block border border-gray-400 w-full p-3 rounded mb-4"
                    name="name"
                    placeholder="Name" />

                  <input ref={emailRef}
                    id="email"
                    required
                    type="text"
                    className="block border border-gray-400 w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email" />

                  <div className='relative'>
                    <input ref={pass1Ref}
                      id="password"
                      required
                      type={showPassword ? 'text' : 'password'}
                      className=" block border border-gray-400 w-full p-3 rounded mb-4"
                      name="password"
                      placeholder="Password" />
                    <p className='absolute cursor-pointer right-7 bottom-3   leading-3'>{showPassword ?
                      <EyeSlashIcon 
                      onClick={()=>setShowPassword(!showPassword)}
                        className=' text-xl h-6 w-6' /> :
                      <EyeIcon onClick={()=>setShowPassword(!showPassword)}
                        className=' text-xl h-6 w-6' />}
                        </p>
                  </div>

                  <div className='relative'>
                    <input ref={pass2Ref}
                      id="password2"
                      required
                      type={showPassword2 ? 'text' : 'password'}
                      className=" block border border-gray-400 w-full p-3 rounded mb-4"
                      name="password"
                      placeholder="Confirm password" />
                    <p className='absolute cursor-pointer right-7 bottom-3   leading-3'>{showPassword2 ?
                      <EyeSlashIcon onClick={()=>setShowPassword2(!showPassword2)}
                        className=' text-xl h-6 w-6' /> :
                      <EyeIcon onClick={()=>setShowPassword2(!showPassword2)}
                        className=' text-xl h-6 w-6' />}</p>
                  </div>

                  <div className="text-center text-sm text-gray-600 my-4 ">
                    By signing up, you agree to the
                    <a className="no-underline ml-1 border-b border-gray-600 text-blue-600" href="#">
                      Terms of Service
                    </a> and
                    <a className="no-underline  ml-1 border-b border-gray-600 text-blue-600" href="#">
                      Privacy Policy
                    </a>
                  </div>
                  <button
                  disabled={signupcomplete}
                    type="submit"
                    className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
                  >Create Account</button>
                  {signupcomplete && <p className='text-green-700  '>Your account has been created !</p>}
                </form>


                <div className="text-gray-600 mt-2 font-semibold">
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

        </div>
      </section>
    </div>
  )
}

export default Signup