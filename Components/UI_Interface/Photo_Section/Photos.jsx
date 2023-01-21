import React,{useState} from "react";
import Photo from "./Photo";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Photos({imageArr,term,setImageArr,unsplash,page,setPage}) {
  // const [images, setImages] = useState([])
  // console.log("from photo each",imageArr)
// console.log("the 2nd query",term,page)
  const fetchMoreImages=async()=>{
    await setPage(page+1)
    // imagesRequest()
 let req=await unsplash.search.getPhotos({
  query:term || 'interactions' ,
  page:page,
  perPage:18

 })
//  console.log("The 2nd request",req)
//  await setImages(req.response.results)
//  console.log("the images",images)
 await setImageArr(imageArr.concat(req.response.results))
//  console.log("the new imageArr",imageArr)

  }

  return (
    <>
    
      <div className="Full ">
        <InfiniteScroll
        dataLength={imageArr.length}
        next={fetchMoreImages}
        hasMore={true}
        loader={<h4>Loading.........</h4>}
        >
        <div
        //  className="render-div my-3 px-4 space-y-4"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 px-4 py-8"
         >
          {
             imageArr.map((image,index)=>{
              // console.log("inside map function",image)
              return(
<div key={index} className="">
            <Photo image={image}/>
          </div>
              )
            })
          }
          
        </div>
        </InfiniteScroll>
        {/* <div className="">img1</div>
        <div className="">img1</div>
        <div className="">img1</div> */}
      </div>
    </>
  );
}
