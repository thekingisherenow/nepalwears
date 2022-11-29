import Head from "next/head";
import Gist from "../components/Gist"
import React from 'react';
import Banner from "../components/Banner";


export default function Home() {
  return (
    <div className="z-10">
      <Head>
        <title>Nepalwears</title>
        <meta
  name="Nepalwears"
  content="description "
/>
       
      </Head>
      <link
  rel="stylesheet"
  href="https://video-react.github.io/assets/video-react.css"
/>
 <Banner />
      <Gist/>
  

    </div>
  )
}
