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
      arrows:false,
    //   nextArrow: <BsChevronRight color="#0064bf" size="3em" />,
    //   prevArrow: <BsChevronLeft color="#0064bf " size="3em" />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            dots: false,
          },
        },
      ],
    };
    return (
      <div>

          <Slider {...settings}>
            {bannerItems.map((bannerItem) => (
              <div key={bannerItem} className="z-20">
                <img src={bannerItem.image} alt="" className="mx-auto items-center justify-center " />
                <div className="hidden md:block absolute text-left text-white max-w-[500px] p-4 rounded-md bg-[#019fde]  text-xl bottom-[5%] w-[90%] float-right ">
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