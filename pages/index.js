import React,{useState,useEffect} from 'react'
import Head from 'next/head'
// import banner from '../Components/Images/banner.jpg'
import { AiOutlineSearch } from "react-icons/ai";
import {BsFillEyeFill,BsFillBagPlusFill} from 'react-icons/bs'
import Photos from '../Components/UI_Interface/Photo_Section/Photos'
// import NavMenu from '../Components/UI_Interface/Navigation_Bar/NavMenu'
// Company(About, Join the team, Reach to us),Community(Become a contributor{Upload},Company Awards), Advertise,  Account(Collection, Images, Profile), Growth
// Today you can start working with API's :-- APPLICATION NAME IS 'UNREVEAL'
import { createApi } from 'unsplash-js';
import Image from 'next/image';
// Apply the category filter then Download option
const unsplash=createApi(
  {
    accessKey:"nK0EaJIVlAaP23yg9g-2vunzoTY1W0-entaxlUQ8fcU"
  }
);

// Tasks to be started ---
//1. Reach to us(UI) 2. Uploading photo(API) 3. Liking a photo(API) 4. Adding to collection(API)
//5. User Profile Page(API) 6. User Login Authorization(API)


export default function Home({bgUrl,uploader,proimage,respo,downloads,views,hashUrl}) {
  
  const [term, setTerm] = useState('')
  const [imageArr, setImageArr] = useState([])
  // const [sugg, setSugg] = useState(false)
  const [page, setPage] = useState(7)
  // const [bgUdsdsl, setBgUdsdsrl] = useState('')
  useEffect(() => {
    
    async function fetchRandomList(){
      let req=await unsplash.photos.list({
        page:page,
        perPage:18
      })
      // console.log(req.response.results)
     await setImageArr(req.response.results)
    }
    fetchRandomList()
  }, [])
  
  const imagesRequest=async(term)=>{
    if (term !== ''){
      let request=await unsplash.search.getPhotos(
        {
          query:term,
          page:page,
          perPage:18,
  
        }
      )
        
        // await console.log("the request",request)
        await setImageArr(request.response.results)
    }
else{
  console.log("Not having term")
}
      // await setTerm('')
  }

  const makeSearchReq=(e)=>{
    e.preventDefault();
    imagesRequest(term)
    
  }
  // console.log(term)


  return (
    <div className='p-0 m-0'>
      <Head>
        <title>Freely Download Images & Pictures | Unreveal</title>
        <meta name="description" content="Unreveal is the site for all visuals to easily download free high resolution  photos and use them for various purposes like creating your own app or website. It has easy customization, optimized and ultra resolution photos for free. It cost you no money. That's is the power of Unreveal." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="oDvA5gxOAX6dQlG_vl5B2-X2R9dFrGWl1GIH0JK_lZg" />
        <meta name="msvalidate.01" content="57F36F6E09DC46A25EC97A50FD3B3FE7" />
      </Head>

{/* <NavMenu/> */}
{/* <Navbar/> */}
<div  className="w-full  relative ">
      <div  className=" flex justify-center w-full relative  ">

<div styles={{backgroundImage:`url(${hashUrl})`}} className="w-full bg-darkblue relative ">
  
<Image src={bgUrl} width={500} height={400} className='w-full relative lg:h-[36rem] h-96 md:h-[32rem] object-cover object-center' alt={hashUrl} />

</div>
    </div>
   
    </div>

    <div  className="w-full top-28 h-2/3 md:top-40 lg:top-56 md:w-5/6 md:ml-12  px-8 lg:px-24   absolute z-10 ">
 <div className=" ">
      <div className=" text-white space-y-4   ">
     <h1 className=' text-3xl md:text-5xl font-bold py-4'>Unreveal</h1>
     <span className=''>

      <p  className='font-semibold   '>The internet source of visuals,</p>
      <p  className='font-semibold   '>Powered by creators everywhere,</p>
     </span>
    {/* <SearchHeader/> */}
    {/*Image Information Banner */}
    <div className="absolute -z-10 bottom-32 md:-bottom-14 lg:-bottom-0  md:w-full w-5/6 ">
      <div className="flex justify-between items-center w-full text-sm">
      <div className="flex items-center space-x-2"> 
        <span className="">Captured By </span>
<Image width={50} height={40} src={proimage} className="w-8 rounded-full object-cover" alt="" />
      <span className=''>{uploader}</span>
      </div>
      <div className="space-x-4 flex items-center">
      <div className="flex items-center"><span className='pr-2'><BsFillEyeFill/></span>{views}</div>
      <div className="flex items-center"><span className='pr-2'><BsFillBagPlusFill/></span>{downloads}</div>
      </div>
      </div>
    </div>
    {/*Image Information Banner */}
    <div className="w-full ">
        <div className="w-full flex justify-center items-center relative ">
          <form onSubmit={makeSearchReq} className="relative w-full flex justify-center items-center group">
        
            <input
              type="text"
              // onClick={()=>setSugg(!sugg)}
              placeholder="Search free high resolution photos"
              className="sm:w-full-width pl-10 py-1 px-2 text-sm w-full  h-10
    focus:outline-none  text-slate-600 bg-slate-100  rounded-md"
    value={term}
    onChange={(e)=>setTerm
    (e.target.value)}
    
            />

<div className="text-xl absolute left-2 text-slate-400 group-hover:text-slate-700 w-fit ">
            <AiOutlineSearch />
          </div>
          </form>
          
          </div>
          {/* {
sugg?
<h1 className='w-full bg-red-400 h-48'>Suggestion box</h1>:""
          } */}
        </div>
    {/* <SearchHeader/> */}
      
      </div>
      </div>
    </div>
{/* <Header/> First I take the query from input and then send the query to unsplash and then to this Photos and display the images*/}

<Photos imageArr={imageArr} setImageArr={setImageArr} unsplash={unsplash} term={term} page={page} setPage={setPage}/>
    </div>
  )
}
export async function getServerSideProps(context) {
  
  let reque=await unsplash.photos.getRandom({
    
  })
  // console.log("the random",reque)
  // await setBgUrl(reque.response.urls.full)
  let respo=reque.response
  let bgUrl=reque.response.urls.full
  let uploader=reque.response.user.name
  let proimage=reque.response.user.profile_image.large
  let hashUrl=reque.response.blur_hash
   let downloads=reque.response.downloads
   let views=reque.response.views
  console.log(downloads,views)
  return {
    props: {
      bgUrl,
      uploader,
      proimage,
      views,
      downloads,
      respo,
      hashUrl
    }, // will be passed to the page component as props
  }
}