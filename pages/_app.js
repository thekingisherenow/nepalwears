import { Router, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const router = useRouter()
 
  useEffect(() => {

    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));   
        saveCart(JSON.parse(localStorage.getItem("cart"))); 
      }

    } 
    catch (error) {
      console.error(error);
      localStorage.clear;
    }
  }, [])

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
    console.log(newCart);
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
    <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}
      clearCart={clearCart} subTotal={subTotal} />
    <Component buyNow = {buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}
      clearCart={clearCart} subTotal={subTotal}   {...pageProps} />
    <Footer />
  </>
}

export default MyApp
