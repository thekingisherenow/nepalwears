import Head from "next/head";
import Gist from "../components/Gist"
// import '~video-react/dist/video-react.css'; // import css
import { Player } from 'video-react';
import React from 'react';


export default function Home() {
  return (
    <div className="z-10">
      <Head>
        <title>Nepalwears</title>
        <meta
  name="Nepalwears"
  content="description "
/>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      </Head>
    <div>
      <img  className="w-full object-cover  h-48 sm:h-[320px] md:h-[500px] xl:h-[630px]"
      src = "/landscape.jpeg" alt="" />
    </div>
    {/* <Player>
      <source src="https://www.pexels.com/video/a-young-man-breaking-into-a-laugh-4832216/" />
    </Player> */}
      {/* <Gist/> */}
  

    </div>
  )
}
