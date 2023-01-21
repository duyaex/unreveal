import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "../../Images/logo.png";
import fulllogo from '../../Images/fulllogo.png';
import logowhite from '../../Images/logo_white .png'
import fulllogowhite from '../../Images/fulllogowhite.png';
import { BiMenuAltLeft, BiChevronDown } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { AiFillBuild, AiOutlineInstagram } from "react-icons/ai";
import { FaImages, FaUsers, FaFacebook } from "react-icons/fa";
import {
  BsFillPeopleFill,
  BsCursorFill,
  BsFillCollectionFill,
  BsArrowUpShort,
  BsTwitter,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import {
  MdNotificationsActive,
  MdLogin,
  MdTipsAndUpdates,
} from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchBox from "../Navigation_Bar/SearchBox";
import Category from "../Navigation_Bar/Category";

// import { parseCookies } from 'nookies'
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY >= 48) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
    return () => window.removeEventListener("scroll", changeBackgroundColor);
  });

  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const [click, setClick] = useState(true);
  const [clickes, setClickes] = useState(true);
  //  const [clicks, setClicks] = useState(false)
  // const {token}=parseCookies()
  //     const handleLogout=()=>{
  //     setMenu(false)
  //     Cookies.remove('token')
  //   router.push("/userend/login")
  // }
  return (
    <>
      <div className="sticky top-0 z-20">
        <div className=" w-full  ">
          <div className="  ">
            <nav
              className={
                !navbar
                  ? "  flex justify-between items-center text-slate-800 w-full p-3  bg-white"
                  : "  flex justify-between items-center  w-full  p-3 text-white bg-darkblue"
              }
            >
              <div className=" w-12 md:w-36 lg:w-40">
                <Link href={"/"}>
                  {
                    !navbar?
                    <>
                    <Image className="md:hidden" src={logo} alt="" />
                    <Image className="hidden md:block" src={fulllogo} alt="" />
                    </>
                    :
                    <>
                    <Image className="md:hidden" src={logowhite} alt="" />
                    <Image className="hidden md:block" src={fulllogowhite} alt="" />
                    </>
                  }
                </Link>
              </div>
              <SearchBox />
              {/*Profile Icon */}
              {/* <div className="hidden md:flex md:space-x-4 md:pr-4 md:text-xl">
                <span className="">
                  <MdNotificationsActive />
                </span>
                <span className="">
                  <CgProfile />
                </span>
              </div> */}

              {/* Hamburger Menu and its options */}
              <div className="hamburger">
                <div
                  onClick={() => setMenu(!menu)}
                  className="text-xl hover:cursor-pointer "
                >
                  <FiMenu />
                </div>
              </div>
              {/* Hamburger Menu and its options */}
            </nav>
          </div>

          <div
            className={
              menu
                ? "bg-white px-4 absolute right-0 z-20 transition-all duration-200 ease-in-out"
                : "hidden transition-all px-4 duration-200 ease-in-out"
            }
          >
            <ul className="  space-y-3 py-4 static">
              {/*Account entity */}

              <>
                <li className=" transition-all duration-200 hover:cursor-pointer ">
                  <a
                    onClick={() => setClick(!click)}
                    className="flex px-4 py-1 font-semibold  justify-start items-center"
                  >
                    <span className="">
                      <AiFillBuild className="mr-2 " />
                    </span>{" "}
                    Company{" "}
                    <span className="ml-16 text-slate-400">
                      <BiChevronDown />
                    </span>
                  </a>

                  <ul
                    className={
                      click
                        ? "transition-all duration-200 text-slate-600 space-y-1 px-8 "
                        : "hidden transition-all duration-200"
                    }
                  >
                    <Link href={"/Company/about"}>
                      <li
                        onClick={() => setMenu(false)}
                        className="hover:text-black"
                      >
                        About
                      </li>
                    </Link>
                    {/* <Link href={"/Company/join"}>
                      <li
                        onClick={() => setMenu(false)}
                        className="hover:text-black"
                      >
                        Join the team
                      </li>
                    </Link> */}
                    <Link href={"/Company/reach"}>
                      <li
                        onClick={() => setMenu(false)}
                        className="hover:text-black"
                      >
                        Reach to us
                      </li>
                    </Link>
                    {/* <li className="flex items-center space-x-4 py-2 text-lg">
                      <span className="hover:text-black">
                        <FaFacebook />
                      </span>
                      <span className="hover:text-black">
                        <BsTwitter />
                      </span>
                      <span className="hover:text-black">
                        <AiOutlineInstagram />
                      </span>
                    </li> */}
                  </ul>
                </li>
                <li className=" transition-all duration-200 hover:cursor-pointer ">
                  <a
                    onClick={() => setClickes(!clickes)}
                    className="flex px-4 py-1 font-semibold  justify-start items-center"
                  >
                    <span className="">
                      <FaUsers className="mr-2 " />
                    </span>{" "}
                    Community{" "}
                    <span className="ml-12 text-slate-400">
                      <BiChevronDown />
                    </span>
                  </a>

                  <ul
                    className={
                      clickes
                        ? "transition-all duration-200 text-slate-600 space-y-1 px-8 "
                        : "hidden transition-all duration-200"
                    }
                  >
                    {/* <Link href={"/Community/contributor"}>
                      <li
                        onClick={() => setMenu(false)}
                        className="hover:text-black"
                      >
                        Become a Contributor
                      </li>
                    </Link> */}
                    <Link href={"/Community/trends"}>
                      <li
                        onClick={() => setMenu(false)}
                        className="hover:text-black"
                      >
                        Trends
                      </li>
                    </Link>
                    <Link href={"/Community/collections"}>
                    <li
                      onClick={() => setMenu(false)}
                      className="hover:text-black"
                    >
                      Collections
                    </li>
                    </Link>
                    {/* <li
                      onClick={() => setMenu(false)}
                      className="hover:text-black"
                    >
                      Unreveal Awards
                    </li> */}
                    <li className="flex items-center space-x-4 py-2 text-lg">
                      <span className="hover:text-black">
                        <FaFacebook />
                      </span>
                      <span className="hover:text-black">
                        <BsTwitter />
                      </span>
                      <span className="hover:text-black">
                        <AiOutlineInstagram />
                      </span>
                    </li>
                  </ul>
                </li>

                {/*Account entity */}
                {/* <li  className='flex transition-all duration-200 hover:cursor-pointer  justify-start px-4 py-1 items-center '><span className=''><BsCursorFill className='mr-2'/></span>Logout</li> */}
              </>
            </ul>
          </div>
        </div>
      </div>
        <Category />
    </>
  );
}
