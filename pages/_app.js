import { Router, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css';
import LoadingBar from 'react-top-loading-bar'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const router = useRouter()
  const [user, setUser] = useState({value:null})
  const [key, setKey] = useState(0)

  const [progress, setProgress] = useState(0)

  
  useEffect(() => {
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100) 
    })
    router.events.on('routeChangeStart', ()=>{
      setProgress(40) 
    })

    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));   
        saveCart(JSON.parse(localStorage.getItem("cart"))); 
      }

    } 
    catch (error) {
      // console.error(error);
      localStorage.clear;
    }

    let token = localStorage.getItem("token")
    // console.log("token ko value",token)
    if (token) {
      setUser({value : token});
      // console.log("if (token) bhitra ")
      setKey(Math.random())
    }
    else {
      setUser({value:null})
      // console.log("else bhita chu")
    }
  }, [router.query])

  const logout = () => {
    localStorage.removeItem("token")
    setUser({value:null})
    setKey(Math.random())
    router.push("/")
  }

  const saveCart = (myCart) => {
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      localStorage.setItem("cart",JSON.stringify(myCart))    }
   
    let subt = 0;
    
    let keys = Object.keys(myCart)

    for (let index = 0; index < keys.length; index++) {
      subt += myCart[keys[index]].qty * myCart[keys[index]].price
    }
    setSubTotal(subt);
  }
  const buyNow = (itemCode, qty, price, name, size, variant) => {
    saveCart({});
    let newCart = {itemCode:{qty:1,price,name,size,variant}}

    setCart(newCart);
    saveCart(newCart);
    // console.log(newCart);
    router.push("/checkout")

  }
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;

    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty

    }
    else {
      newCart[itemCode] = { qty: 1, price, name, size, variant }
    }


    setCart(newCart);
    saveCart(newCart);
  }
  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty

    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode];
    }

    setCart(newCart);
    saveCart(newCart);
  }
  const clearCart = () => {
    setCart({});
    saveCart("cart", {});
  }
  return <>

   <LoadingBar
        color='	#FFA500'
        progress={progress}
        waitingTime={500}
        onLoaderFinished={() => setProgress(0)}
      /> 
      

    <Navbar logout = {logout} key = {key} user = {user} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}
      clearCart={clearCart} subTotal={subTotal} />
    <Component buyNow = {buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}
      clearCart={clearCart} subTotal={subTotal}   {...pageProps} />
    <Footer />
  </>
}

export default MyApp
