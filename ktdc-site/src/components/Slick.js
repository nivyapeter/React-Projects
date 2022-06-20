import React from 'react'
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick"; 
import { bannerItems } from '../constants';
import styles from "../styles/style.css"

function Slick() {
    console.log(bannerItems);
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    //   nextArrow: <BsChevronRight color="#0064bf" size="3em" />,
    //   prevArrow: <BsChevronLeft color="#0064bf " size="3em" />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className=" bg-[#fff4d9]">

          <Slider {...settings}>
            {bannerItems.map((bannerItem) => (
              <div key={bannerItem} className="">
                <img src={bannerItem.image} alt="" className="mx-auto items-center justify-center " />
                <div className="absolute text-left text-white max-w-[500px] p-4 rounded-md bg-[#019fde]  text-xl bottom-[5%] w-[90%]  ">
                    <h2>{bannerItem.text1}</h2>
                    <h3>{bannerItem.text2}</h3>
                </div>
              </div>
            ))}
          </Slider>
      </div>
    );
  }

export default Slick