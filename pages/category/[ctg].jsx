import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import { createApi } from 'unsplash-js';
import Photos from '../../Components/UI_Interface/Photo_Section/Photos';
import EachCtPhoto from '../../Components/UI_Interface/Files/EachCtPhoto';
// import CtPhotos from '../../Components/UI_Interface/Category/CtPhotos';
const unsplash=createApi(
    {
      accessKey:"uOkxQ8pVVP3qNs7M4_EjJYN9LYm0y1JI6E1D4LbP1DE"
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
      // console.log("the imageArr",imageArr)
      setImageArr(request.response.results)
      
    }
    fetchCtgData()



    }, [query])
    
    console.log("hello",imageArr[8])

  return (
    <>

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