import React from 'react'
import cont1 from '../../../Images/cont1.jpg'
import cont2 from '../../../Images/cont2.jpg'
import cont3 from '../../../Images/cont3.jpg'
import cont4 from '../../../Images/cont4.jpg'
import { BsArrowRightShort } from 'react-icons/bs'
export default function Contribute() {
  return (
    <>
    
    <div className="md:flex md:py-12">

<div className="stanzas px-8 space-y-4 md:space-y-8 xl:px-16 py-24">
    <h1 className='font-bold text-2xl py-4 md:text-4xl'>Contribute today</h1>
    <p className='font-semibold lg:w-5/6 xl:w-3/5 text-slate-700'>Share your images with millions of people around the world. Over 20 thousands photographers has already contributed, YOU ARE THE NEXT,</p>
    <div className="buttons space-x-4 flex ">
    <button className='group flex justify-center items-center space-x-2 bg-black rounded-md py-2 px-3 font-semibold border-2 border-black text-white'><span>Upload your images</span><span className='group-hover:translate-x-2 transition-all duration-200 ease-out'><BsArrowRightShort/></span>  </button>
        </div>
</div>
<div className="images py-12 grid grid-cols-2 px-4 space-x-4 space-y-4 md:px-8 lg:px-12">

<img src={cont3.src} className="w-full rounded-lg shadow-xl  lg:h-72   h-56 object-cover" alt="" />
<img src={cont1.src} className="w-full  rounded-lg shadow-xl lg:h-72  opacity-80  h-56 object-cover" alt="" />
<img src={cont2.src} className="w-full rounded-lg shadow-xl  lg:h-72 opacity-70  h-56 object-cover" alt="" />
<img src={cont4.src} className="w-full  rounded-lg shadow-xl  lg:h-72  px-4 h-56 object-cover" alt="" />


</div>


    </div>

    </>
  )
}
