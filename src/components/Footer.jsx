import React from 'react'
import Logo from "../../src/assets/logo.png"
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagramSquare} from "react-icons/fa";
import Cart1 from "../../src/assets/Cert1.png"
import Cart2 from "../../src/assets/Cert2.png"

const Footer = () => {
    return (
        <>
            <section className=' bg-[#1F1F1F] pt-[50px] pb-[200px] lg:pt-[150px] lg:pb-[150px]'>
                <div className="max-w-container mx-auto px-2 lg:px-0">
                    <div className="text-white lg:flex justify-between">
                        <div className="lg:w-[40%] w-full mb-[50px] lg:mb-0">
                            <div className="mb-[25px]">
                                <img src={Logo} alt="logo" />
                            </div>
                            <div className="">
                                <ul className='flex flex-col gap-y-4'>
                                    <li>
                                        <a href="#">
                                            <div className="flex items-center gap-x-2">
                                                <div className=""><MdOutlineMarkEmailUnread/></div>
                                                <div className="">
                                                    <p className='font-pops font-medium text-[16px]'>mail@yourcompany.com</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="flex items-center gap-x-2">
                                                <div className=""><BiPhoneCall/></div>
                                                <div className="">
                                                    <p className='font-pops font-medium text-[16px]'>+896 120 5889 (Toll free)</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div className="flex items-center gap-x-2">
                                                <div className=""><FaMapLocationDot/></div>
                                                <div className="">
                                                    <p className='font-pops font-medium text-[16px]'>101 Baker Street, New York, USA, 12345</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className='flex gap-x-3 pt-[10px]'>
                                        <div className="h-[30px] w-[30px] rounded-[50%] bg-[#F40404] flex justify-center items-center">
                                            <a href="#"><FaFacebookF/></a>
                                        </div>
                                        <div className="h-[30px] w-[30px] rounded-[50%] bg-[#F40404] flex justify-center items-center">
                                            <a href="#"><FaTwitter/></a>
                                        </div>
                                        <div className="h-[30px] w-[30px] rounded-[50%] bg-[#F40404] flex justify-center items-center">
                                            <a href="#"><FaLinkedinIn/></a>
                                        </div>
                                        <div className="h-[30px] w-[30px] rounded-[50%] bg-[#F40404] flex justify-center items-center">
                                            <a href="#"><FaInstagramSquare/></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="lg:w-[15%] w-1/3 float-left">
                            <ul className='flex flex-col lg:gap-y-4 gap-y-1 font-pops'>
                                <li><h4 className='font-bold text-[16px]'>Company</h4></li>
                                <li><a className='lg:text-[14px] text-[11px]' href="#">Home</a></li>
                                <li><a className='lg:text-[14px] text-[11px]' href="#">About</a></li>
                                <li><a className='lg:text-[14px] text-[11px]' href="#">Services</a></li>
                                <li><a className='lg:text-[14px] text-[11px]' href="#">Gallery</a></li>
                            </ul>
                        </div>
                        <div className="lg:w-[15%] w-1/3 float-left">
                            <ul className='flex flex-col lg:gap-y-4 gap-y-1 font-pops'>
                                <li><h4 className='font-bold text-[16px]'>Others</h4></li>
                                <li><a className='lg:text-[14px] text-[11px]' href="#">Blog</a></li>
                                <li><a className='lg:text-[14px] text-[11px]' href="#">Contact</a></li>
                                <li><a className='lg:text-[14px] text-[11px]' href="#">Terms & Conditions</a></li>
                                <li><a className='lg:text-[14px] text-[11px]' href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="lg:w-[20%] w-1/3 float-left">
                            <ul>
                                <li><h4 className='font-bold text-[16px]'>Certificate</h4></li>
                                <li className='lg:flex gap-x-2 pt-2'>
                                    <img className='py-2' src={Cart1} alt="cart1" />
                                    <img src={Cart2} alt="cart2" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer