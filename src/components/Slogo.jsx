import React from 'react'
import Slogo1 from "../../src/assets/slogo1.png"
import Slogo2 from "../../src/assets/slogo2.png"
import Slogo3 from "../../src/assets/slogo3.png"
import Slogo4 from "../../src/assets/slogo4.png"

const Slogo = () => {
  return (
    <section className='lg:py-[117px] py-[20px]'>
        <div className="max-w-container mx-auto">
            <div className="flex">
                <div className="w-1/4">
                    <img className='w-full' src={Slogo1} alt="slogo1" />
                </div>
                <div className="w-1/4">
                    <img className='w-full' src={Slogo2} alt="slogo2" />
                </div>
                <div className="w-1/4">
                    <img className='w-full' src={Slogo3} alt="slogo3" />
                </div>
                <div className="w-1/4">
                    <img className='w-full' src={Slogo4} alt="slogo4" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Slogo