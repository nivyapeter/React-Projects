import React from 'react'
import Button from './Button'

function WhiteCard({text,title,subTitle, btnText,className}) {
  return (
    <div>
        <div className="cursor-pointer shadow-lg p-7 bg-white w-[40vw] h-[40vh]">
           <h2 className="opacity-75 mb-5 uppercase font-normal leading-snug text-xs">{text}</h2>
           <div>
            <h3 className="font-bold text-2xl leading-snug mb-4 text-[#39424E]">{title}</h3>
            <div className="text-xs leading-normal font-normal">
                <p>{subTitle} </p>
            </div>
            <a className="mt-6 text-lg" href="">
                <Button text={btnText} className={className}/>
            </a>
           </div>
        </div>
    </div>
  )
}

export default WhiteCard