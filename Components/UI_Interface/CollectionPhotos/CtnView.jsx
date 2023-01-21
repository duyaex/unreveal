import React from 'react'

export default function CtnView({ctn}) {
  console.log("The ctn",ctn)
  return (
    <>
  

  
  <div className="relative w-full">
    
<img src={ctn.cover_photo.urls.full}   className='w-full  relative h-60 opacity-20 object-cover object-center' alt="" />
    <div  className="w-full absolute top-8 left-4 z-10 space-y-4 px-4">
    <h2 className='text-4xl font-bold'>{ctn.title}</h2>
    <p className='text-lg font-semibold'>{ctn.description}</p>
    <div className="flex items-center space-x-3">
        <img src={ctn.user.profile_image.large} className="w-12 md:w-16 rounded-full" alt="" />
        <p>{ctn.user.name}</p>
    </div>
    </div>

    </div>
    </>
  )
}
