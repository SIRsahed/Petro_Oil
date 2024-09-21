import React from 'react'

const Learnmore = () => {
  return (
    <section className='lg:py-[136px] py-[50px] bg-[#F0F0F0]'>
        <div className="max-w-container mx-auto">
            <div className="lg:flex justify-center">
                <div className="lg:w-2/6 w-full bg-[red] lg:py-[100px] py-[15px] text-center px-[75px]">
                    <h3 className='font-pops font-bold lg:text-[36px] text-[16px] text-white w-[262px] text-start'>Learn more about our company</h3>
                </div>
                <div className="lg:w-4/6 w-full bg-learnmore bg-no-repeat bg-center bg-cover text-center flex justify-center items-center lg:py-0 py-[100px]">
                    <a className='font-pops font-semibold text-[16px] text-[#F40404] py-[14px] px-[30px] bg-[#fff]' href="#">Learn More</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Learnmore