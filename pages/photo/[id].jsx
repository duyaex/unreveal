import React from 'react'
import { useRouter } from 'next/router'
import { createApi } from 'unsplash-js'
import Nav from '../../Components/UI_Interface/EachPhoto/Nav';
import ImageData from '../../Components/UI_Interface/EachPhoto/ImageData';
import RelatedCollections from '../../Components/UI_Interface/EachPhoto/RelatedCollections';

const unsplash=createApi(
    {
      accessKey:"uOkxQ8pVVP3qNs7M4_EjJYN9LYm0y1JI6E1D4LbP1DE"
    }
  );

export default function PhotoId({photo}) {
    // const router = useRouter()
    // console.log(router)
    // const id=router.query.id
    // console.log("hello from [id]",photo)
  return (
    <>
    <div className="py-6 xl:px-24">
<Nav photo={photo}/>

<div className="flex justify-center w-full py-4">
<div className="w-5/6">
    <img src={photo.urls.full} className="w-full hover:cursor-zoom-in" alt="" />
</div>
</div>

<ImageData photo={photo}/>
<h2 className='font-bold py-2 xl:text-2xl text-slate-700 px-6 text-lg'>Related Collections</h2>
<RelatedCollections relctn={photo.related_collections.results}/>

</div>
    </>
  )
}
export async function getServerSideProps(ctx){
    // console.log(ctx)
const id=ctx.query.id
// console.log(id)
let reqPhoto=await unsplash.photos.get({
    photoId:id
})
console.log(reqPhoto)
    return {
        props: {
            photo:reqPhoto.response
        }
    }
}