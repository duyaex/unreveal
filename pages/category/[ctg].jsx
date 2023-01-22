import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import { createApi } from 'unsplash-js';
import Photos from '../../Components/UI_Interface/Photo_Section/Photos';
import EachCtPhoto from '../../Components/UI_Interface/Files/EachCtPhoto';
import Head from 'next/head';
// import CtPhotos from '../../Components/UI_Interface/Category/CtPhotos';
const unsplash=createApi(
    {
      accessKey:"-7DuuC_b8A6AHSp7nT9GuJNGh2ohuKW7rG1bvnXOVwg"
    }
  );
//   Images,query
export default function CategoryDynamic({image,uploader,proimage}) {
    const router=useRouter()
    
 
    const [imageArr, setImageArr] = useState([])

    let query=router.query.ctg
    const [page, setPage] = useState(1)

    
    useEffect(() => {
      
console.log("Hello from [ctg].jsx")
async function fetchCtgData(){
  let request=await unsplash.search.getPhotos({
    query:query,
    page:page,
    perPage:18
})

      // console.log(request.response.results)
      // console.log("the imageArr",imageArr,"pageNo",page)
      setImageArr(request.response.results)
      
    }
    fetchCtgData()



    
    },[query])
    
    // console.log("hello",imageArr[8])

  return (
    <>

<Head>
        <title>{query} - {imageArr.length} | Unreveal</title>
        <meta name="description" content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. That's is the power of Unreveal." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {/* <img src={imageArr[0].urls.full} alt="" /> */}
  <EachCtPhoto 
 image={image}
 heading={query}
//  hashUrl={imageArr && imageArr[8].blur_hash} 
 uploader={uploader}
 proimage={proimage}
 />   
<Photos term={query} imageArr={imageArr} setImageArr={setImageArr} unsplash={unsplash} page={page} setPage={setPage}/>



    </>
  )
}
export async function getServerSideProps(ctx){
  let query=ctx.query.ctg
  console.log("the query",query)
  let req=await unsplash.search.getPhotos(
    {
      query,
      page:8,
      perPage:1

    }
  )
  console.log("The request",req.response.results[0].urls.full)
  let res=req.response.results[0]
  let image=res.urls.full
  let uploader=res.user.name
  let proimage=res.user.profile_image.large

  return {
    props: {
image,
uploader,
proimage
    }
  }
}
//Add infinite scroll to all category pages