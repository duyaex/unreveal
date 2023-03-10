import React from 'react'
import rch1 from '../../../Images/rch1.jpg'
import rch2 from '../../../Images/rch2.jpg'
import rch3 from '../../../Images/rch3.jpg'
import team1 from '../../../Images/team1.jpg'
import parrot from '../../../Images/parrot.jpg'
import Animals from '../../../Images/Animals.jpg'
import Nature from '../../../Images/Nature.jpg'
import fulllogo from '../../../Images/fulllogo.png'
import Image from 'next/image'

export default function ImagesViewDesign() {
  return (
    <>
    
    <div className="md:flex px-2 py-8 flex md:py-12 lg:px-16">
<Image width={300} height={200} src={rch2.src} className="md:w-36 w-12 rounded-sm bg-slate-700 bg-opacity-10 shadow-xl opacity-100 h-20  md:h-56  object-cover" alt="image" />

<div className="stanzas md:px-4 md:space-y-8 px-2  lg:px-6 ">
    <h1 className='font-bold text-xl py-4 uppercase md:text-3xl lg:text-5xl'>creators everywhere</h1>
    
    <div className="py-2 ">
       <Image width={300} height={200} src={fulllogo.src} className="w-32" alt="Unreveal" />

    </div>
    <div className=" space-x-4 flex">
<Image width={300} height={200} src={Nature.src} className="w-24  rounded-sm md:w-32  bg-slate-700 bg-opacity-10 md:h-48 shadow-xl lg:w-36 lg:h-56 h-36 object-cover" alt="image" />
<Image width={300} height={200} src={Animals.src} className="w-24  rounded-sm md:w-32 bg-slate-700 bg-opacity-10  md:h-48 shadow-xl lg:w-36 lg:h-56 h-36 object-cover" alt="image" />
</div>
</div>
<div className="images md:py-12 grid grid-cols-2 space-x-2 md:px-4 md:space-x-4 md:space-y-4">


<Image width={300} height={200} src={parrot.src} className="w-full rounded-sm shadow-xl  bg-slate-700 bg-opacity-10 opacity-100 md:h-32  lg:h-56 h-24 object-cover" alt="image" />
<Image width={300} height={200} src={rch3.src} className="w-full  rounded-sm shadow-xl bg-slate-700 bg-opacity-10  md:h-32  lg:h-56 h-24 object-cover" alt="image" />
<Image width={300} height={200} src={rch1.src} className="w-full  rounded-sm shadow-xl bg-slate-700 bg-opacity-10  md:h-32  hidden md:block lg:h-56 h-24 object-cover" alt="image" />


</div>


    </div>

    </>
  )
}
