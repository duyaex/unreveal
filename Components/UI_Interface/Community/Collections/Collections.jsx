import React,{useState} from "react";
// import Photo from "./Photo";
import InfiniteScroll from "react-infinite-scroll-component";
import Ctngal from "./Ctngal";
import EachCtn from "./EachCtn";

export default function Collections({ctnArr,setCtnArr,page,unsplash,setPage}) {
  

  const fetchMoreCollections=async()=>{
    await setPage(page+1)
    
 let req=await unsplash.collections.list({
  
  page:page,
  perPage:18

 })

 await setCtnArr(ctnArr.concat(req.response.results))


  }

  return (
    <>
    <Ctngal/>
      <div className="Full ">
        <InfiniteScroll
        dataLength={ctnArr.length}
        next={fetchMoreCollections}
        hasMore={true}
        loader={<h4>Loading.........</h4>}
        >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-6 lg:gap-y-12 gap-y-8 px-4">
          {
             ctnArr.map((ctns,index)=>{
              // console.log("inside map function",image)
              return(
<div key={index} className="">
            <EachCtn ctn={ctns}/>
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
