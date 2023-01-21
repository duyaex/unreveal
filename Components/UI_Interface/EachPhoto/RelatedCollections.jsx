import React from 'react'
import { useRouter } from 'next/router'
export default function RelatedCollections({relctn}) {
    const router=useRouter()
  return (
    <>
    
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-6  md:px-4 py-2 text-slate-700 font-semibold">
        

{
    relctn.map((ctn,index)=>{
        return(
            <div onClick={()=>router.push(
                {
                    pathname:`/collections/${ctn.id}`
                }
            )} key={ctn.id} className="w-full hover:cursor-pointer hover:opacity-90 px-8 py-8 md:px-0 md:py-0">
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
    <img src={ctn.cover_photo.urls.small} className="w-full h-48 lg:h-60 xl:h-80  object-cover rounded-md"alt="" />
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
</div>
        )
    })
}




    </div>
    
    </>
  )
}
