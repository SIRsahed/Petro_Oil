import React from 'react'

const Banner = () => {
    return (
        <>
            <section className='lg:py-[257px] py-[100px] bg-banner bg-no-repeat bg-center bg-cover z-[1] relative after:absolute after:contents-[""] after:top-0 after:left-0 after:h-full after:w-full after:bg-[#00000099] after:z-[-1]'>
                <div className="max-w-container mx-auto">
                    <div className="text-center lg:text-start">
                        <h2 className='lg:w-[842px] lg:text-[64px] text-[26px] font-bold leading-normal font-pops text-white pb-[31px]'>We exist since 1975 on the oil and gas industry.</h2>
                        <a className='font-pops text-white font-semibold text-[16px] py-[14px] px-[40px] bg-[#F40404] rounded-lg' href="#">LEARN MORE</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner