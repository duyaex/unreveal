import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import { createApi } from 'unsplash-js';
import Photos from '../../Components/UI_Interface/Photo_Section/Photos';
// import CtPhotos from '../../Components/UI_Interface/Category/CtPhotos';
const unsplash=createApi(
    {
      accessKey:"uOkxQ8pVVP3qNs7M4_EjJYN9LYm0y1JI6E1D4LbP1DE"
    }
  );
//   Images,query
export default function SearchImagesPage({}) {
    const router=useRouter()
    const [imageArr, setImageArr] = useState([])

    let query=router.query.query
    const [page, setPage] = useState(1)

    
    useEffect(() => {
      
console.log("Hello from [query].jsx")
async function fetchCtgData(){
  let request=await unsplash.search.getPhotos({
    query:query,
    page:page,
    per_page:28
})

      // console.log(request.response.results)
      // console.log("the imageArr",imageArr)
      setImageArr(request.response.results)
    }
    fetchCtgData()



    }, [query])
    
    // console.log("hello",imageArr)

  return (
    <>
    <div className="text-lg px-8">
      Searched for <span className='font-semibold'>{query}</span>
    </div>
<Photos term={query} imageArr={imageArr} setImageArr={setImageArr} unsplash={unsplash} page={page} setPage={setPage}/>



    </>
  )
}

//Add infinite scroll to all category pages