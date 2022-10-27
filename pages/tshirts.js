import Link from 'next/link'
import React from 'react'
import Product from "../models/Product"
import mongoose from "mongoose"

const Tshirts = ({products}) => {
  console.log(products)
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">

    <div className="flex flex-wrap -m-4 justify-center">
      
      {products.map((item)=>{

        return <Link key={item._id} href={`/products/${item.slug}`}>
        <div className="lg:w-1/5  md:w-1/4  sm:w-1/3 w-1/3 p-3 m-4 cursor-pointer   shadow-xl">

        <a className="block relative rounded overflow-hidden">
          <img alt="ecommerce" className=' h-[30vh] mx-auto   md:h-[36vh] block' src="/tshirt1.jpg"/> </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
          <p className="mt-1">रु{item.price}</p>
          <p className="mt-1">S,M,L,XL,XXL</p>
          
        </div>
      </div>
      
      </Link>
      })}
      
      
    </div>
  </div>
</section>
    </div>
  )
}

export default Tshirts

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find();


  return {
    props: {products : JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  }
}