import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
 
function landing() {
  return (
    <div className='w-full h-screen border-t-2'>
      <div className="textstructure mt-40 px-20">
            <div className="masker ">
                <h1 className='uppercase leading-[7.5vw] font-["FoundersGrotesk"] tracking-tight text-9xl pt-2'>We Create</h1>
            </div>
            <div className="masker ">
                <h1 className='uppercase leading-[7.5vw] font-["FoundersGrotesk"] tracking-tight text-9xl pt-2'>eye-opening</h1>
            </div>
            <div className="masker ">
                <h1 className='uppercase leading-[7.5vw] font-["FoundersGrotesk"] tracking-tight text-9xl pt-2'>presentations</h1>
            </div>
      </div>
      <div className='border-t-2 mt-32 border-zinc-300 flex justify-between items-center py-5 px-20 font-["NeueMontreal"]'>
            {["For public and private companies",
                "From the first pitch to IPO"
                ].map((item, index) =>(
                <p className='text-md Font-light tracking-light leading-none '>{item}</p>
            ))}
            <div className="start flex item-center gap-5">
                <div className='px-4 py-1.5 uppercase border-2 rounded-full border-zinc-500 font-light text-sm'>start the project
            </div>
            <div className='w-7 h-7 rounded-full  border-zinc-500 font-light flex item-center justify-center pt-2.5'>
                <span className='rotate-[45deg]'>
                 <FaArrowUpLong />
                </span>
            </div>
            </div>
      </div>
    </div>
  )
}

export default landing
