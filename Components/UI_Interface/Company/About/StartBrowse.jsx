import React from 'react'
import str1 from '../../../Images/str1.jpg'
import str2 from '../../../Images/str2.jpg'
import str3 from '../../../Images/str3.jpg'
import img3 from '../../../Images/img3.jpg'
import { BsArrowRightShort } from 'react-icons/bs'
import Link from 'next/link'
export default function StartBrowse() {
  return (
    <>
    
    <div className="md:flex md:py-12">

<div className="stanzas px-4 space-y-4 md:space-y-8 md:py-16 lg:py-36 lg:px-16 py-8">
    <h1 className='font-bold text-2xl py-4 md:text-4xl'>Photos for everyone</h1>
    <p className='font-semibold text-slate-700'>Over 3 million free high-resolution images brought to you by the world’s most generous community of photographers.</p>
    <div className="buttons space-x-4 flex ">
    <Link href="/"><button className='group flex justify-center items-center space-x-2 bg-black rounded-md py-2 px-3 font-semibold border-2 border-black text-white'><span>Start Browsing</span><span className='group-hover:translate-x-2 transition-all duration-200 ease-out'><BsArrowRightShort/></span>  </button></Link>
        {/* <button className='bg-white rounded-md py-2 px-3 border-2 border-slate-700 hover:border-slate-900  text-slate-700 font-semibold'>Become a Contributor</button> */}
    </div>
</div>
<div className="images py-12 grid grid-cols-2 px-4 space-x-4 space-y-4 lg:px-16">

<img src={img3.src} className="w-full rounded-lg shadow-xl lg:h-72  h-56 object-cover" alt="" />
<img src={str1.src} className="w-full  rounded-lg shadow-xl lg:h-72 h-56 object-cover" alt="" />
<img src={str2.src} className="w-full rounded-lg shadow-xl  lg:h-72 h-56 object-cover" alt="" />
<img src={str3.src} className="w-full  rounded-lg shadow-xl lg:h-72 px-4 h-56 object-cover" alt="" />


</div>


    </div>

    </>
  )
}
