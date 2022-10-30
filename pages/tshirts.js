import Link from 'next/link'
import React from 'react'
import Product from "../models/Product"
import mongoose from "mongoose"
import Image from 'next/image'

const Tshirts = ({products}) => {

  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">

    <div className="flex flex-wrap -m-4 justify-center">
      
     {Object.keys(products).map((item)=>{

        return <Link key={products[item]._id} href={`/products/${products[item].slug}`}>
        <div className="xl:w-1/5  lg:w-1/4  sm:w-1/3 w-1/3 p-3 m-4 cursor-pointer   shadow-xl">

        <a className="block relative rounded overflow-hidden">
          <img alt="ecommerce" className=' h-[30vh] mx-auto   md:h-[36vh] block'
           src={products[item].img}/> </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[item].category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
          <p className="mt-1">रु{products[item].price}</p>
          <div className="mt-1 size ">
          {products[item].size.includes('S') && <span className='border p-1 mr-1 md:mr-2 '>S</span>}
          {products[item].size.includes('M') && <span className='border p-1 mr-1 md:mr-2 '>M</span>}
          {products[item].size.includes('L') && <span className='border p-1 mr-1 md:mr-2 '>L</span>}
          {products[item].size.includes('XL') && <span className='border p-1 mr-1 md:mr-2 '>XL</span>}
          {products[item].size.includes('XXL') && <span className='border p-1  '>XXL</span>}
          </div>

          <div className='mt-1 color '>
            {products[item].color.includes('white') &&   <button className="border-2 ml-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
}
          {products[item].color.includes('pink') && <button className="border-2 ml-2  border-gray-300 rounded-full w-6 h-6
           bg-pink-400 focus:outline-none"></button>}
          {products[item].color.includes('black') && <button className="border-2 ml-2 border-gray-300 rounded-full w-6 bg-black h-6 focus:outline-none"></button>}
          {products[item].color.includes('green') && <button className="border-2 ml-2 border-gray-300 bg-green-600 rounded-full w-6 h-6 focus:outline-none"></button>}
          
          {products[item].color.includes('blue') && <button className="border-2 ml-2 border-gray-300 rounded-full w-6 bg-blue-600 h-6 focus:outline-none"></button>}
          {products[item].color.includes('red') && <button className="border-2 ml-2 border-gray-300 rounded-full w-6 bg-red-600 h-6 focus:outline-none"></button>}
          {products[item].color.includes('purple') && <button className="border-2 ml-2 border-gray-300 rounded-full w-6 bg-purple-600 h-6 focus:outline-none"></button>}
          
          </div>
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
  let products = await Product.find({category:"T-shirt"});
  let tshirts = {};

    for (let item of products){
        if (item.title in tshirts){
            if (!tshirts[item.title].color.includes("item.color") && item.availableQty>0 ) {
                   tshirts[item.title].color.push(item.color) 
            }
            if (!tshirts[item.title].size.includes("item.size") && item.availableQty>0 ) {
                tshirts[item.title].size.push(item.size) 
         }


        } else {
            tshirts[item.title] = JSON.parse(JSON.stringify(item))
            if (item.availableQty>0){
                tshirts[item.title].color = [item.color];
                tshirts[item.title].size = [item.size];
                
            }

        }
    }


  return {
    props: {products : JSON.parse(JSON.stringify(tshirts)) }, // will be passed to the page component as props
  }
}