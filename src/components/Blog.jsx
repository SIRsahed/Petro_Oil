import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const Blog = () => {
  return (
    <section className='lg:py-[110px] py-[50px] bg-[#F0F0F0]'>
        <div className="max-w-container mx-auto">
            <div className="lg:flex justify-between">
                <div className="lg:w-[31%] w-full my-3 pt-[75px] pb-[55px] px-[45px] bg-blog1 bg-no-repeat bg-center bg-cover z-[1] relative after:absolute after:contents-[''] after:top-0 after:left-0 after:h-full after:w-full after:bg-[#00000099] after:z-[-1]">
                    <p className='font-pops font-bold lg:text-[27px] text-[19px] text-white pb-[52px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                    <a className='font-pops font-semibold text-[16px] text-white py-[11px] px-[23px] bg-[#FFFFFF80]' href="#">Read More</a>
                </div>
                <div className="lg:w-[31%] w-full my-3 pt-[75px] pb-[55px] px-[45px] bg-blog2 bg-no-repeat bg-center bg-cover z-[1] relative after:absolute after:contents-[''] after:top-0 after:left-0 after:h-full after:w-full after:bg-[#00000099] after:z-[-1]">
                    <p className='font-pops font-bold lg:text-[27px] text-[19px] text-white pb-[52px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                    <a className='font-pops font-semibold text-[16px] text-white py-[11px] px-[23px] bg-[#FFFFFF80]' href="#">Read More</a>
                </div>
                <div className="lg:w-[31%] w-full my-3 pt-[75px] pb-[55px] px-[45px] bg-blog3 bg-no-repeat bg-center bg-cover z-[1] relative after:absolute after:contents-[''] after:top-0 after:left-0 after:h-full after:w-full after:bg-[#00000099] after:z-[-1]">
                    <p className='font-pops font-bold lg:text-[27px] text-[19px] text-white pb-[52px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                    <a className='font-pops font-semibold text-[16px] text-white py-[11px] px-[23px] bg-[#FFFFFF80]' href="#">Read More</a>
                </div>
            </div>
            <div className="flex justify-end items-center">
                <div className="">
                    <a className='font-pops font-bold text-[16px] text-[#000]]' href='#'>MORE FROM THE BLLOG </a>
                </div>
                <div className="">
                    <MdKeyboardArrowRight/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog