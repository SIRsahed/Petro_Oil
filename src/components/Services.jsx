import React from 'react'

const Services = () => {
  return (
    <section>
        <div className="flex flex-wrap">
            <div className="lg:w-1/2 text-center lg:text-start w-full lg:pt-[106px] lg:pb-[139px] lg:pl-[170px] pt-[20px] pb-[20px] px-2 lg:px-0">
                <h2 className='font-pops font-bold lg:text-[64px]'>Our Services</h2>
                <p className='font-pops font-medium text-[16px] lg:w-[405px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className="lg:w-1/2 text-center lg:text-start w-full lg:py-[140px] lg:pl-[90px] py-[50px] bg-service1 bg-no-repeat bg-center bg-cover relative z-[1] after:absolute after:top-0 after:left-0 after:z-[-1] after:contents-[''] after:h-full after:w-full after:bg-[#00000099]">
                <h2 className='font-pops font-bold lg:text-[28px] text-white pb-5'>Modern natural oil and gas refineries.</h2>
                <a className='font-pops font-semibold lg:text-[16px] text-white lg:py-[14px] lg:px-[30px] py-[8px] px-[25px] bg-[red] rounded-lg' href="#">Learn More</a>
            </div>
            <div className="lg:w-1/2 text-center lg:text-start w-full lg:py-[140px] lg:pl-[90px] py-[50px] bg-service2 bg-no-repeat bg-center bg-cover relative z-[1] after:absolute after:top-0 after:left-0 after:z-[-1] after:contents-[''] after:h-full after:w-full after:bg-[#00000099]">
                <h2 className='font-pops font-bold lg:text-[28px] text-white pb-5'>Supply of national industries.</h2>
            <a className='font-pops font-semibold lg:text-[16px] text-white lg:py-[14px] lg:px-[30px] py-[8px] px-[25px] bg-[red] rounded-lg' href="#">Learn More</a>
            </div>
            <div className="lg:w-1/2 text-center lg:text-start w-full lg:py-[140px] lg:pl-[90px] py-[50px] bg-service3 bg-no-repeat bg-center bg-cover relative z-[1] after:absolute after:top-0 after:left-0 after:z-[-1] after:contents-[''] after:h-full after:w-full after:bg-[#00000099]">
                <h2 className='font-pops font-bold lg:text-[28px] text-white pb-5'>National fuel distribution and supply.</h2>
                <a className='font-pops font-semibold lg:text-[16px] text-white lg:py-[14px] lg:px-[30px] py-[8px] px-[25px] bg-[red] rounded-lg' href="#">Learn More</a>
            </div>
        </div>
    </section>
  )
}

export default Services