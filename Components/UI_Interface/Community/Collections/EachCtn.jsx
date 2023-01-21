import Link from 'next/link'
import React from 'react'

// import curate from '../../../Images/curate.jpg'
// import community from '../../../Images/community.jpg'
// import fuel from '../../../Images/fuel.jpg'
export default function EachCtn({ctn}) {
  // console.log("The ctns",ctn[0])
  return (
    <>
    
            <Link href={`/collections/${ctn.id}`}><div className="w-full  md:px-0 md:py-0 transition-all duration-200 ease-linear hover:-translate-y-1 hover:cursor-pointer">
                {/* {
                    ctn.preview_photos.map((previmg,index)=>{
                        return(

                            // <div key={previmg.id} className="">
                            //     <Collected previmg={previmg}/>
                            // </div>
                            <div key={previmg.id} className="flex w-fit">
                                <img src={previmg.urls.small}  className="w-3/12 rounded-md" alt="" />

                            </div>
                        )
                    })
                } */}
    <img src={ctn.cover_photo.urls.small} className="w-full   h-64 lg:h-80 xl:h-96  object-cover rounded-md"alt="" />
  <h2 className=' text-lg font-bold text-black pt-2 pl-2'>{ctn.title}</h2>
  <p className='pl-2 font-normal'>{ctn.total_photos} Photos Curated By <span className='hover:underline hover:text-black'>{ctn.user.name}</span></p>
  <div className="tags grid gap-x-3 gap-y-2 pl-2 py-1 w-fit grid-cols-3 items-center">
{
    ctn.tags.map((tag,index)=>{
        return(
            <div key={index} className=" list-none font-normal text-sm">

<li className='bg-slate-200 px-1'>{tag.title}</li>
            </div>
        )
    })
}
  </div>





    </div></Link>
    
    </>
  )
}
