import React from 'react'

function HamburgerMobile() {
  return (
    <div className="fixed top-[60px] bottom-0 left-0 overflow-hidden w-full bg-white z-10">
        <div>
            <ul className="pt-5 "></ul>
            <li className="py-2">
                <a className="block px-5 w-full text-[#0e141e] text-base "href="">
                    <span>Prepare</span>
                    <span className="p-1 ml-[10px] inline-block px-[5px] rounded bg-[#097bbf] text-white font-bold text-xs leading-3">NEW</span>
                </a>
            </li>
            <li className="py-2">
                <a className="block px-5 w-full text-[#0e141e] text-base "href="">
                    <span>Certify</span>
                </a>
            </li>
            <li className="py-2">
                <a className="block px-5 w-full text-[#0e141e] text-base "href="">
                    <span>Compete</span>
                </a>
            </li>
        </div>
        <div>
            <hr className="my-[10px]"></hr>
            <li>
                <a className="block px-5 w-full text-[#0e141e] text-base "href="">
                    <span>Sign Up / Log In</span>
                </a>
            </li>
        </div>
    </div>
  )
}

export default HamburgerMobile