import React from 'react'

function Button({text}) {
  return (
    <div className="pb-[35px]">
        <a href="">
        <button className=" rounded-3xl bg-[#00f4cb] text-sm hover:bg-[#ff2f0e] text-[#15009b] font-bold uppercase px-7 py-3">
         {text}
        </button>
        </a>
    </div>
  )
}

export default Button