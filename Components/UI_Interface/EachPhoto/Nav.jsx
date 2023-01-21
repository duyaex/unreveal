import React from 'react'
import img from '../../Images/img2.jpg'
import {AiFillHeart,AiOutlineAppstoreAdd} from 'react-icons/ai'
import {HiFolderDownload} from 'react-icons/hi'
import { createApi } from 'unsplash-js'
const unsplash=createApi(
  {
    accessKey:"uOkxQ8pVVP3qNs7M4_EjJYN9LYm0y1JI6E1D4LbP1DE"
  }
);

export default function Nav({photo}) {

  const  handleCondit = async (pictureUrl,name) => {
    // console.log(pictureUrl)
    const response = await fetch(pictureUrl);
    response.blob().then(blob => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = name;
        a.click();
    })
    // await setShowThank(true)
  };

  const downloadPhoto=async()=>{
// console.log("strating to downloaded photo")
let request=await unsplash.photos.get({
  photoId:photo.id,
})

if (request.type==='success'){
  const photo=request.response;
 let downloading= await unsplash.photos.trackDownload({
    downloadLocation:photo.links.download_location
  })
  // console.log(downloading.response.url)

await  handleCondit(downloading.response.url,photo.alt_description)
}


      //  let req=await unsplash.photos.trackDownload({
      //     downloadLocation: photo.links.download_location,
      //   });
      // console.log(req)
    
  }
  return (
    <>
    
    <div className="bg-white w-full px-4 py-2 ">

        <div className="flex justify-between items-center w-full">
<div className="flex items-center w-full space-x-2">
<img src={photo.user.profile_image.medium} className="w-8 xl:w-16 rounded-full  object-cover" alt="" />
<p className='text-slate-700 text-sm md:text-base'>{photo.user.name}</p>
</div>

<div className="flex items-center text-slate-600 space-x-3 text-lg xl:text-2xl md:space-x-6 md:text-xl">
{/* <span className="hover:text-red-700"><AiFillHeart/></span>
<span className='hover:text-slate-700'>
    <AiOutlineAppstoreAdd/>
</span> */}
<button onClick={downloadPhoto}  className='flex bg-slate-200 justify-center items-center space-x-2 md:border-2 hover:text-slate-700 md:border-slate-700 text-slate-700 md:rounded-md md:px-1'>
<span className='hidden md:block text-base'>Download</span>
<span><HiFolderDownload/></span>
</button>
</div>
        </div>

    </div>

    </>
  )
}
