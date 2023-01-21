
import React,{useState,useEffect} from 'react'
import { createApi } from 'unsplash-js';
const unsplash=createApi(
    {
      accessKey:"uOkxQ8pVVP3qNs7M4_EjJYN9LYm0y1JI6E1D4LbP1DE"
    }
  );
import Collections from '../../Components/UI_Interface/Community/Collections/Collections'

export default function CollectionsPage() {
  const [ctnArr, setCtnArr] = useState([])
const [page, setPage] = useState(1)
    useEffect(() => {
      async function fetchCollectionsList(){
        let req=await unsplash.collections.list({
            page,
            perPage:18
        })
        console.log(req)
       await setCtnArr(req.response.results)
      }
      fetchCollectionsList()
    }, [])
  return (
    <>
    <Collections ctnArr={ctnArr} setCtnArr={setCtnArr} page={page} setPage={setPage} unsplash={unsplash}/>
    </>
  )
}
