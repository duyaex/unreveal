import React from 'react'
import Join from '../../Components/UI_Interface/Company/Join_the_team/Join'
import { createApi, OrderBy } from 'unsplash-js'
import Head from 'next/head';

const unsplash=createApi(
    {
      accessKey:"uOkxQ8pVVP3qNs7M4_EjJYN9LYm0y1JI6E1D4LbP1DE"
    }
  );

export default function join({images}) {
  return (
    <>
    <Head>
        <title>Join the team - Creators Everywhere | Unreveal</title>
        <meta name="description" content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. That's is the power of Unreveal." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Join images={images}/>
    </>
  )
}
export async function getServerSideProps(ctx){
  let req=await unsplash.photos.list({
    page:3,
    perPage:28,
    
  })
  console.log("ImgaeFlow",req)
      return{
          props:{
            images:req.response.results
          }
      }
  }
