import React,{useState} from 'react'
// import img1 from '../../Images/img1.jpg'
// import img2 from '../../Images/img2.jpg'
// import img3 from '../../Images/img3.jpg'

import {AiOutlineAppstoreAdd, AiFillHeart} from 'react-icons/ai'
import {IoMdImages} from 'react-icons/io'
import Link from 'next/link'
import Image from 'next/image'
// import {BlurHash} from './BlurHash'
import { Blurhash } from "react-blurhash";

export default function Photo({image}) {
  // console.log("from photo component",image)
  const [loaded, setLoaded] = useState(false)
  // useEffect(() => {
  // image.onload=()=>{
  //   console.log("image has loaded",image.id)
  // }
  
  
  // }, [])
  
  const imageStateHolder=()=>{
setLoaded(true)
  }

  return (
    <>
    <div className="Photo relative group w-full">
 <Link href={`/photo/${image.id}`}>
  
 <div className="eachview  relative w-full h-96">
<div className="image relative w-full h-full  ">
    {/* <img src={view.photo.src} className="w-full h-full  object-cover rounded-md"  alt="" /> */}
    <Image 
//  className="rendering-img relative group-hover:opacity-90 " 
className='relative group-hover:opacity-90 w-full h-96 object-cover'
width={500} height={400}
// placeholder="blur"
// blurDataURL={image.blur_hash}
onLoad={imageStateHolder}
 src={image.urls.regular} alt={image.user.name} />
</div>
<div className="write absolute top-0 text-xl font-bold text-white bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-200 ease-in bg-black w-full h-full flex justify-center items-center ">
 { !loaded &&
  <Blurhash
  hash={image.blur_hash}
  width={500}
  height={400}
  resolutionX={32}
  resolutionY={32}
  className="relative gap-x-6 gap-y-4 h-96 "
  punch={1}
/> 
  }

</div>
</div>
 
 
 

  </Link>

 <div className="tabDown absolute bottom-0 hidden group-hover:flex  justify-between items-center w-full px-2 pb-1 bg-black text-white bg-opacity-20 hover:cursor-pointer pt-1">
   <div styles={{backgroundImage:`url(${image.blur_hash})`}} className="flex items-center space-x-2 ">
   <Image
   width={50}
   height={40} 
    src={image.user.profile_image.medium }
    className="w-8 rounded-full object-cover"
    // placeHolderSrc={image.blur_hash}
    loading='lazy'
    
    alt={image.user.name} />
    <p>{image.user.first_name}</p>
   </div>
    
    <div className="flex space-x-4 items-center ">

    <span className='flex justify-between items-center text-red-700 space-x-2'><AiFillHeart/><p className='text-sm text-white'>{image.likes}</p></span>
    <span className='flex justify-between items-center space-x-2'><IoMdImages/><p className='text-sm'>{image.user.total_photos}</p></span>
    {/* <span><AiOutlineAppstoreAdd/></span> */}
    </div>

    
 </div>

</div>
{/* <h1>{image.user.name}</h1> */}
      </>
  )
}
