import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import { createApi } from 'unsplash-js';
// import Photos from '../../Components/UI_Interface/Photo_Section/Photos';
import CtnPhotos from '../../Components/UI_Interface/CollectionPhotos/CtnPhotos';
import CtnView from '../../Components/UI_Interface/CollectionPhotos/CtnView';
// import EachCtPhoto from '../../Components/UI_Interface/Files/EachCtPhoto';
// import CtPhotos from '../../Components/UI_Interface/Category/CtPhotos';
const unsplash=createApi(
    {
      accessKey:"uOkxQ8pVVP3qNs7M4_EjJYN9LYm0y1JI6E1D4LbP1DE"
    }
  );
//   Images,query
export default function CollectionsDynamic({ctn}) {
    const router=useRouter()
    
 
    const [imageArr, setImageArr] = useState([])

    let id=router.query.ctn
    const [page, setPage] = useState(1)

    
    useEffect(() => {
      
// console.log("Hello from [ctg].jsx")
async function fetchCtnData(){
  let request=await unsplash.collections.getPhotos({
    collectionId:id,
    page:page,
    perPage:18
})

      // console.log(request.response.results)
      // console.log("the imageArr",imageArr)
      setImageArr(request.response.results)
      
    }
    fetchCtnData()



    }, [id])
    
    // console.log("hello",imageArr[8])

  return (
    <>

    
{/* <Photos term={id} imageArr={imageArr} setImageArr={setImageArr} unsplash={unsplash} page={page} setPage={setPage}/>
 */}
 <CtnView ctn={ctn}/>
 <CtnPhotos term={id} imageArr={imageArr} setImageArr={setImageArr} unsplash={unsplash} page={page} setPage={setPage}/>



    </>
  )
}
export async function getServerSideProps(ctx){
    let id=ctx.query.ctn
    let req=await unsplash.collections.get({
        collectionId:id
    })
    console.log("The ctn id",req)
    return{
        props:{
          ctn:req.response
        }
    }
}