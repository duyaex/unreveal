import React from 'react'
import Cards from './Cards'
import Signup from './Signup'
import StartBrowse from './StartBrowse'
import fours from '../../../Images/fours.webp'

export default function AboutUI() {
  return (
    <>
    
    <StartBrowse/>
    <h1 className='text-center text-2xl md:text-4xl md:px-28 px-8 font-bold'>Unreveal is the internet source of freely usable images</h1>
    <Cards/>
    <Signup/>
    <div className="text-center py-8">
    <h1 className='text-center font-bold text-3xl '>Unreveal - Creators Everywhere</h1>
    <p className='font-semibold py-2 text-lg'>Explore the world with your one CLICK on camera.</p>
    </div>
    <img src={fours.src} className="py-4" alt="" />
    </>
  )
}
