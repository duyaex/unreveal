import React from 'react'
import { useRouter } from 'next/router'
import { createApi } from 'unsplash-js'
import Nav from '../../Components/UI_Interface/EachPhoto/Nav';
import ImageData from '../../Components/UI_Interface/EachPhoto/ImageData';
import RelatedCollections from '../../Components/UI_Interface/EachPhoto/RelatedCollections';
import Head from 'next/head';

const unsplash=createApi(
    {
      accessKey:"nK0EaJIVlAaP23yg9g-2vunzoTY1W0-entaxlUQ8fcU"
    }
  );

export default function PhotoId({photo}) {
    // const router = useRouter()
    // console.log("the image",photo)
    // const id=router.query.id
    // console.log("hello from [id]",photo)
  return (
    <>
    <Head>
        <title>{photo.alt_description || photo.description} | Unreveal</title>
        <meta name="description" content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. That's is the power of Unreveal." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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