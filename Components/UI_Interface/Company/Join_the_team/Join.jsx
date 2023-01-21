import React from 'react'
import Hire from './Hire'
import ImageFlow from './ImageFlow'
import fours from '../../../Images/fours.webp'
export default function Join({images}) {
  return (
    <>
    <Hire/>
    <div className="OurStory space-y-4 md:py-8 md:px-36 lg:px-48 xl:py-16 xl:px-80 py-4 px-12">
        <h1 className="text-4xl font-bold">Our Story</h1>
        <p className='font-semibold'>In 2023, Unreveal launched as a Tumblr blog with 10 high-resolution photos that could be used for anything. Today, Unreveal powers more people and products than any other visual search engine in the world, with more than 100 million images downloaded every month—more than the rest of the industry combined.</p>
        <p className='font-semibold'>We’re building a community where the principles of sharing and openness have taken the place of copyright and red tape. Instead of photos being hoarded and shut down, photos on Unreveal are given as fuel for creativity.

</p>
    </div>
    <ImageFlow images={images}/>
    {/* <ImageFlow/> */}
<p className='md:px-36 md:py-20 px-12 py-12 lg:px-48 xl:px-80 md:text-lg font-semibold'>Our aim is to build the most useful visual library ever created. Unreveal photography has led to more than 3 billion creative acts enabling people from everywhere to create. You don’t need to know someone, or have an agent, or have a name to be great on Unreveal. We’re a place where creators meet their audience, where individuals become a community, and a source for creativity.

</p>
<img src={fours.src} className="w-full" alt="" />



    </>
  )
}
