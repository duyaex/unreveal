import React from 'react'
import ctn1 from '../../../Images/ctn1.jpg'
import ctn2 from '../../../Images/ctn2.jpg'
import ctn3 from '../../../Images/ctn3.jpg'
import { BsArrowRightShort } from 'react-icons/bs'
export default function Ctngal() {
  return (
    <>
    
    <div className="md:flex md:py-12">

<div className="stanzas px-8  space-y-4 md:space-y-8 xl:px-16 py-24">
    <h1 className='font-bold text-3xl py-4 md:text-4xl'>Collections</h1>
    <p className='font-semibold w-full text-slate-700 '>Explore the world with your immeasurable creativity with Unreveal Collections.</p>

</div>
<div className="images py-12 grid grid-cols-2 px-4 space-x-4 space-y-4 md:px-8 lg:px-12">

<img src={ctn3.src} className="w-full rounded-lg shadow-xl  lg:h-80  h-56 object-cover" alt="" />
<img src={ctn1.src} className="w-full  rounded-lg shadow-xl lg:h-80  opacity-80  h-56 object-cover" alt="" />
<img src={ctn2.src} className="w-full rounded-lg shadow-xl  lg:h-80 opacity-70  h-56 object-cover" alt="" />


</div>


    </div>

    </>
  )
}
