import React from 'react'
import CardCon from './CardCon'
import Contribute from './Contribute'
import { BsArrowRightShort } from 'react-icons/bs'
import fours from '../../../Images/fours.webp'
import Link from 'next/link'
export default function Contributor() {
  return (
    <>
    
    <Contribute/>
    <h1 className='text-3xl font-bold md:px-32 md:py-8 px-8 text-center'>Unreveal is unlike any other plateforms</h1>
    <CardCon/>
    <div className="text-center   space-y-4">
        
        <h1 className="text-3xl font-bold">Don’t know how to contribute?</h1>
        <p className="px-24 font-semibold">We’ve got plenty of ideas to get you started! Find out what kind of photos our community is looking to help your images stand out and get seen fast.

</p>
        <div className="flex justify-center py-4">
            <Link href={"/Community/trends"}><button className='group text-center flex justify-center items-center space-x-2 bg-black rounded-md py-2 px-3 font-semibold border-2 border-black text-white'><span>See what’s trending</span><span className='group-hover:translate-x-2 transition-all duration-200 ease-out'><BsArrowRightShort/></span>  </button></Link>
            </div>
        
    </div>
    <div className="py-12">
        <img src={fours.src} alt="" />
    </div>
    
    </>
  )
}
