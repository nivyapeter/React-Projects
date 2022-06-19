import React from 'react'
import { partners } from '../constants'

function Partners() {
  return (
    <div className="py-[50px] bg-white ">
    <div className="py-[30px] w-[80%] m-auto max-w-[1080px]">
        <h2 className="text-3xl text-black text-center font-extrabold">
        Global Partners
        </h2>
      </div>
      <div className="py-[30px] w-[80%] m-auto max-w-[1080px]">
        {partners.map((partner)=> {
            return (
                <div className="mb-[30px]">
                <img src={partner.image} alt="" />
    
            </div>
            )
        })}
        
       </div>
    </div>
  )
}

export default Partners