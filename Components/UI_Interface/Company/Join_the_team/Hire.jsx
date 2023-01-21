import React from 'react'

import team1 from '../../../Images/team1.jpg'
import team2 from '../../../Images/team2.jpg'
import team3 from '../../../Images/team3.jpg'
import team4 from '../../../Images/team4.jpg'
import {BsArrowRightShort} from 'react-icons/bs'

export default function Hire() {
  return (
    <>
    
    <div className="md:flex md:py-12 lg:px-16">

<div className="stanzas px-4 space-y-4 md:space-y-8 py-8 lg:px-8 lg:py-24">
    <h1 className='font-bold text-2xl py-4 md:text-4xl'>Join the Unreveal’s team, 
    <br /> from anywhere</h1>
    <p className='font-semibold text-slate-700'>Help us shape the future of freely usable imagery—powered by a community of millions of creators.

</p>
    <div className="buttons space-x-4 group">
        <button className='flex justify-center items-center space-x-2 bg-black rounded-md py-2 px-3 font-semibold border-2 border-black text-white'><span>See Opportunities</span><span className='group-hover:translate-x-2 transition-all duration-200 ease-out'><BsArrowRightShort/></span>  </button>

    </div>
</div>
<div className="images py-12 grid grid-cols-2 px-4 space-x-4 space-y-4">


<img src={team3.src} className="w-full rounded-lg shadow-xl   h-56 object-cover" alt="" />
<img src={team1.src} className="w-full  rounded-lg shadow-xl opacity-70 h-56 object-cover" alt="" />
<img src={team2.src} className="w-full rounded-lg shadow-xl opacity-80  h-56 object-cover" alt="" />
<img src={team4.src} className="w-full  rounded-lg shadow-xl  px-4 h-56 object-cover" alt="" />


</div>


    </div>

    </>
  )
}
