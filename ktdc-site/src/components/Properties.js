import React from "react";
import property1 from "../images/property1.jpg";
import img1 from "../images/img1.png";


function Properties({text,cardItems}) {
  return (
    <div className="bg-[#faf7f2] pb-12 pt-6">
      <div className="px-[15px]">
        <div className="max-w-[1360px] mx-auto my-[10px] px-[15px] w-full">
          <h2 className="uppercase mb-6 text-3xl font-normal text-[#212529]">
            {text}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-4">
      {cardItems.map((cardItem)=>{
        return (
            <div className="px-[15px]">
            <div className="px-[15px]">
              <div className="bg-white p-4 w-full shadow-lg mb-6 ">
                <div>
                  <a href="">
                    <img src={cardItem.bgImg} alt="image" />
                  </a>
                 
                </div>
                <div className="px-[15px] pb-[15px] text-center pt-[15px] ">
                  <a href="">
                    <img className="h-[11vh] w-[12vw] m-auto pt-3" src={cardItem.image} alt="" />
                  </a>
                  <p className="text-[#fff] bg-[#db831e] mb-2 w-[6vw] m-auto">{cardItem.place}</p>
                  <h6 className="uppercase text-center my-2 text-[#db831e]">
                    {cardItem.title}
                  </h6>
                  <p>
                   {cardItem.description}
                    <a className="text-[#db831e]" href="">
                      {cardItem.linkText}
                    </a>
                  </p>
                </div>
                <div>
                  <h6 className="text-xl text-[#db831e] text-center underline">{cardItem.text}<br /></h6>
                </div>
              </div>
            </div>
          </div>
        )

      })}
     </div>
    </div>
  );
}

export default Properties;
