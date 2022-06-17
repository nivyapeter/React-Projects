import React from 'react'
import { useState } from 'react'
import { navItems } from '../constants'
import Button from './Button'
import DropDown from './DropDown'


function Nav() {
    const[state,setState] = useState(false)
    const displayOnHover=()=> {
        setState(true)
    }
  return (
    <div>
    <div className="float-left  text-white md:block hidden" >
        <ul className="flex flex-row items-center">
            {navItems.map((navItem)=> {
                return (
                    <li className="text-sm pr-[22px] leading-4 pb-[35px] flex flex-row items-center">
                    <a className="pr-5 font-bold uppercase text-base" href="" onClick={displayOnHover}>
                        {navItem.text}
                       
                    </a>
                    <span>{navItem.icon}</span>
                    
                    </li> 
                )
            })}
           <Button text="job board"/>
        </ul>

    </div>
    <div>
    {state === true  ? <DropDown /> : null}
    </div>
    </div>
  )
}

export default Nav