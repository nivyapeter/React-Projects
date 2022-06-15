import React from 'react'

function TopicsCard({Topics}) {
  console.log(Topics);
  return (
    <div>
        <div className="cursor-pointer   w-[93vw] h-[max-content]  md:shadow-xl  bg-white 2xl:w-[74vw]  xl:w-[91vw] m-auto list-none flex-row items-center">
        <ul className=" border-black md:grid md:grid-cols-3 h-[max-content] 2xl:h-[39vh] xl:h-[40vh]">
            {Topics?.map((Topic)=> {
                return ( 
                  // <div>
                    
                    <li className="md:border-r-2 md:hover:border-b-2 md:hover:shadow-lg text-lg py-3 md:py-0 flex items-center">
                      <a href="">
                          <div className="flex  px-7 border-1 border-[slate-300]">
                              <img src={Topic.image} alt="image" />
                              <div className="pl-3 text-[#39424E] font-bold">{Topic.text}</div>
                          </div>
                      </a>
      
                    </li>
                
                  // </div>
                )
            })}
             </ul>

        </div>
    </div>
  )
}

export default TopicsCard