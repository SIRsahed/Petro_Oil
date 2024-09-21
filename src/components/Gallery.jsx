import React from 'react'
import Gal1 from "../../src/assets/gal1.png"
import Gal2 from "../../src/assets/gal2.png"
import Gal3 from "../../src/assets/gal3.png"
import Gal4 from "../../src/assets/gal4.png"

const Gallery = () => {
  return (
    <section className='pb-[28px]'>
        <div className="flex justify-between flex-wrap">
            <div className="lg:w-[24%] w-[49%] py-1">
                <img className='w-full' src={Gal1} alt="gal1" />
            </div>
            <div className="lg:w-[24%] w-[49%] py-1">
                <img className='w-full' src={Gal2} alt="gal2" />
            </div>
            <div className="lg:w-[24%] w-[49%] py-1">
                <img className='w-full' src={Gal3} alt="gal3" />
            </div>
            <div className="lg:w-[24%] w-[49%] py-1">
                <img className='w-full' src={Gal4} alt="gal4" />
            </div>
        </div>
    </section>
  )
}

export default Gallery