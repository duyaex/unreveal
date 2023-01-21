import React from 'react'
import curate from '../../../Images/curate.jpg'
import community from '../../../Images/community.jpg'
import fuel from '../../../Images/fuel.jpg'
export default function Cards() {
  return (
    <>
    
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-6 lg:px-16 md:px-4 py-12">

    <div className="w-full px-8 py-8 md:px-0 md:py-0">
  <img src={curate.src} className="w-full" alt="" />
  <h2 className=' text-lg font-semibold pt-2'>Over more than 3 million curated photos</h2>
  <p className='text-sm  mt-1'>We hand-select every photo and accept only the best, so that no matter what you need—you’ll find exactly what you’re looking for on Unreveal.

</p>
</div>
    <div className="w-full px-8 py-8 md:px-0 md:py-0">
  <img src={community.src} className="w-full" alt="" />
  <h2 className=' text-lg font-semibold pt-2'>A community of 2,36,945 photographers</h2>
  <p className='text-sm  mt-1'>Unreveal is home to a growing community of photographers—from hobbyists, professionals, emerging brands and everyone in between.

</p>
</div>
    <div className="w-full px-8 py-8 md:px-0 md:py-0">
  <img src={fuel.src} className="w-full" alt="" />
  <h2 className=' text-lg font-semibold pt-2'>Fuelling your favourite platforms</h2>
  <p className='text-sm  mt-1'>With partners like BuzzFeed, Squarespace and Trello being powered by our API, the Unreveal library is more widely accessible than ever.

</p>
</div>

    </div>
    
    </>
  )
}
