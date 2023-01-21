import React from 'react'

import Eachview from './Eachview'

import events from '../../../Images/events.jpg'
import fashion from '../../../Images/fashion.jpg'
import nature from '../../../Images/nature.jpg'
import texture from '../../../Images/textures.jpg'
import business from '../../../Images/bussiness.jpg'
import travel from '../../../Images/travel.jpg'
import animals from '../../../Images/animals.jpg'
import architect from '../../../Images/architect.jpg'



export default function Trendview() {
    // console.log(trendsViewImages)
    let trendsViewImages = [{
        text: "Textures & Patterns",
        photo: texture,
        path:"patterns"
    },
    {
        text: "Nature",
        photo: nature,
        path:"nature"
    },
    {
        text: "Current events",
        photo: events,
        path:"events"
    },
    {
        text: "Architecture",
        photo: architect,
        path:"interior"
    },
    {
        text: "Business & Work",
        photo: business,
        path:"business"
    },
    {
        text: "Animals",
        photo: animals,
        path:"animals"
    },
    {
        text: "Tour & travels",
        photo: travel,
        path:"travel"
    },
    {
        text: "Fashion",
        photo: fashion,
        path:"fashion"
    },
]


  return (
    <>
    <div className="relative w-full px-8 py-12">

<div className="full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 relative w-full">
    {
       trendsViewImages && trendsViewImages.map((view,index)=>{
            return(

    <Eachview key={index} view={view}/>
            )
        })
    }
{/* <div className="eachview  relative w-fit h-96 group">
<div className="image relative w-full h-full ">
    <img src={img1.src} className="w-full h-full"  alt="" />
</div>
<div className="write absolute top-0 text-xl font-bold text-white bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-200 ease-in bg-black w-full h-full flex justify-center items-center "><p>Tours & Travels</p></div>
</div> */}

</div>
</div>
    </>
  )
}
