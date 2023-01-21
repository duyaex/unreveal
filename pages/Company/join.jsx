import React from 'react'
import Join from '../../Components/UI_Interface/Company/Join_the_team/Join'
import { createApi, OrderBy } from 'unsplash-js'

const unsplash=createApi(
    {
      accessKey:"uOkxQ8pVVP3qNs7M4_EjJYN9LYm0y1JI6E1D4LbP1DE"
    }
  );

export default function join({images}) {
  return (
    <>
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
