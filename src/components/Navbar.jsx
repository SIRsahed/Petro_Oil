import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { GoToTop } from "go-to-top-react";

const Navbar = () => {
    let [show, setShow] = useState(false)
  return (
    <>
        <nav className='bg-[red] py-[24px]'>
            <div className="max-w-container px-3 lg:px-0 mx-auto">
                <div className="flex justify-between items-center">
                    <div className="w-[30%]">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="w-[70%]">
                        <ul className={`lg:flex justify-end items-center gap-x-[70px] text-white font-pops absolute z-[50] top-0 left-0 lg:static duration-700 ease-in-out ${show == true ? "bg-[#282828] top-[210px] left-0 w-full flex flex-col gap-y-4" : "top-[210px] left-[-400px]"}`}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Gallery</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a className='lg:py-[15px] lg:px-[32px] lg:border-2 border-white rounded inline-block' href="#">CONTACT</a></li>
                        </ul>
                    </div>
                    <div className="lg:hidden cursor-pointer" onClick={()=>setShow(!show)}>
                        {show == true ? <RxCross2/> : <FaBars/>}
                    </div>
                    <div className=''>
                        <GoToTop/>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar