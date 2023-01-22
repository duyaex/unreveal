import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import { createApi } from 'unsplash-js';
import Photos from '../../Components/UI_Interface/Photo_Section/Photos';
import Head from 'next/head';
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
    const [page, setPage] = useState(9)

    
    useEffect(() => {
      
console.log("Hello from [query].jsx")
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
    
    // console.log("hello",imageArr)

  return (
    <>
    <Head>
        <title>Searched For - {query} | Unreveal</title>
        <meta name="description" content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. That's is the power of Unreveal." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="text-lg px-8">
      Searched for <span className='font-semibold'>{query}</span>
    </div>
<Photos term={query} imageArr={imageArr} setImageArr={setImageArr} unsplash={unsplash} page={page} setPage={setPage}/>



    </>
  )
}

//Add infinite scroll to all category pages