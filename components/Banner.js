import Image from 'next/image'
import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Banner() {
  return (
   
    <Carousel autoPlay infiniteLoop showStatus={false}
    showIndicators={false} showThumbs={false}
    >
    <div>
        <img loading='lazy' className='object-cover'
        src="https://iili.io/Hfd4wnj.png" />
        {/* <p className=" -top-4">Custom Designs also Avaible </p> */}
    </div>
    {/* <div>
        <img loading='lazy'
        src="https://iili.io/pC0PLv.jpg" />
        <p className="legend">Macchapuchrre regning over Pokhara</p>
    </div>
    <div>
        <img loading='lazy'
        src="https://iili.io/pAbMe1.jpg" />
        <p className="legend">Shey Phoksundo lake,one of the untouched lakes in the west part of the country.</p>
    </div> */}
</Carousel>
  )
}

export default Banner