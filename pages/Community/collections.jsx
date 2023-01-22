
import Head from 'next/head';
import React,{useState,useEffect} from 'react'
import Collections from '../../Components/UI_Interface/Community/Collections/Collections'
import { createApi } from 'unsplash-js';
const unsplash=createApi(
    {
      accessKey:"uOkxQ8pVVP3qNs7M4_EjJYN9LYm0y1JI6E1D4LbP1DE"
    }
  );

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
    <Head>
        <title>Collections - Creators Everywhere | Unreveal</title>
        <meta name="description" content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. That's is the power of Unreveal." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Collections ctnArr={ctnArr} setCtnArr={setCtnArr} page={page} setPage={setPage} unsplash={unsplash}/>
    </>
  )
}
