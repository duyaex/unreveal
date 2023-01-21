import React,{useState} from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/router";
export default function SearchBox() {
  const router = useRouter();
  const [term, setTerm] = useState('')
{
  /*
  1. Take query from searchbox and redirect user to "/search/[query]"--- on submit
  2. Through(useRouter.query) useeffect hook take the query and display photos
  3. useeffect will run on query changes
  */
}
const handleSubmit=(e)=>{
  e.preventDefault();
  router.push({
    pathname: `/search/${term}`
  })
}

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full ">
        <div className="w-full flex justify-center items-center relative ">
          <div className="relative w-5/6 flex justify-center items-center group border-2 rounded-md border-slate-400">
        
            <input
              type="text"
              placeholder="Search free high resolution photos"
              className="sm:w-full-width pl-10 py-1 px-2 text-sm w-full  h-8
    focus:outline-none  text-black bg-white  hover:bg-slate-200"
    value={term}
    onChange={(e)=>setTerm(e.target.value)}
            />

<div className="text-xl absolute left-2 text-slate-400 group-hover:text-slate-700 w-fit ">
            <AiOutlineSearch />
          </div>
          </div>
          
          </div>
        </form>
      
    </>
  );
}
