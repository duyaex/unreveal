import React from 'react'

export default function EachCtPhoto({image,heading,uploader,proimage}) {
  // console.log("The image",image)
  return (
    <>
  
   <div  className="w-full  relative ">
      <div  className=" flex justify-center w-full relative  ">

<div
//  styles={{backgroundImage:`url(${image.blur_hash})`}}
  className="w-full relative ">
  
<img src={image}   className='w-full relative lg:h-[36rem] h-96 md:h-[32rem] object-cover object-center' alt="" />

</div>
    </div>
   
    </div>

    <div  className="w-full top-24 h-2/3 md:top-40 lg:top-56 md:w-5/6 md:ml-12  px-8 lg:px-24   absolute z-10 ">
 <div className=" ">
      <div className=" text-white space-y-16 ">
     <h1 className=' text-2xl md:text-5xl font-bold py-4 capitalize'>{heading}</h1>
     <span className=''>

      <p  className='font-semibold   '>Let the world know about your undending creativity,</p>
      <p  className='font-semibold   '>Powered by creators everywhere,</p>
      <div className="pt-16">

      {/* <button className='px-2 py-2 rounded-md text-center bg-white text-slate-700'>
        Submit to <span className='capitalize text-black font-semibold'>{heading}    </span>
      </button> */}
      </div>
     </span>
    {/* <SearchHeader/> */}
    {/*Image Information Banner */}
    <div className="absolute -z-10 bottom-0 md:-bottom-14 lg:-bottom-0  md:w-full w-5/6 ">
      <div className="flex justify-between items-center w-full text-sm">
      <div className="flex items-center space-x-2"> 
        <span className="">Captured By </span>
<img src={proimage} className="w-12 rounded-full object-cover" alt="" />
      <span className=''>{uploader}</span>
      </div>
      </div>
    </div>
    {/*Image Information Banner */}
    <div className="w-full ">
        <div className="w-full flex justify-center items-center relative ">
          
          
          </div>
          {/* {
sugg?
<h1 className='w-full bg-red-400 h-48'>Suggestion box</h1>:""
          } */}
        </div>
    {/* <SearchHeader/> */}
      
      </div>
      </div>
    </div>
    
    </>
  )
}
