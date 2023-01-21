import React from 'react'
import nocamera from '../../../Images/nocamera.jpg'
import measure from '../../../Images/measure.jpg'
import group from '../../../Images/group.jpg'
export default function CardCon() {
  return (
    <>
    
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-6 md:px-4 py-12 lg:px-16">

    <div className="w-full px-8 py-8 md:px-0 md:py-0">
  <img src={group.src} className="w-full" alt="" />
  <h2 className=' text-lg font-semibold pt-2'>Everyone is welcome
</h2>
  <p className='text-sm  mt-1'>Our growing community of over 20,000 contributors range from hobbyists to total pros, all working to make Unreveal everything that it is today.


</p>
</div>
    <div className="w-full px-8 py-8 md:px-0 md:py-0">
  <img src={nocamera.src} className="w-full" alt="" />
  <h2 className=' text-lg font-semibold pt-2'>No camera? No problem!
</h2>
  <p className='text-sm  mt-1'>You don’t need fancy equipment to start contributing to Unreveal—submitting a photo can be as simple as picking up your phone and taking a few photos.


</p>
</div>
    <div className="w-full px-8 py-8 md:px-0 md:py-0">
  <img src={measure.src} className="w-full" alt="" />
  <h2 className=' text-lg font-semibold pt-2'>Measure your impact
</h2>
  <p className='text-sm  mt-1'>Like numbers? Us too. We provide stats on every photo you upload so you can understand how your photos are helping others around the world.



</p>
</div>

    </div>
    
    </>
  )
}
