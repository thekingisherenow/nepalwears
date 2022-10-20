import Head from "next/head";
import Gist from "../components/Gist"



export default function Home() {
  return (
    <div className="z-10">
      <Head>
        <title>Nepalwears</title>
        <meta
  name="Nepalwears"
  content="Bank pani.Sathi pani. "
/>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      </Head>
    <div>
      <img  className="w-full object-cover  h-48 sm:h-[320px] md:h-[500px] xl:h-[630px]"
      src = "/landscape.jpeg" alt="" />
    </div>
      <Gist/>
  

    </div>
  )
}
