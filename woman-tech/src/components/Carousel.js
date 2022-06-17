// import React from "react";
// import Slider from "react-slick/lib/slider";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
// import imageBrands from "../constants"

// function CarouselBrands() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     nextArrow: <BsChevronRight color="#0064bf" size="3em" />,
//     prevArrow: <BsChevronLeft color="#0064bf " size="3em" />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//    <div>

//       <Slider {...settings}>
//         {imageBrands.map((imageBrands) => (
//           <div key={imageBrands} className="w-[278]">
//             <img
//               src={imageBrands}
//               alt=""
//               className="w-[150px] h-[70px] mx-auto items-center justify-center"
//             />
//           </div>
//         ))}
//       </Slider>

//     </div>
//   );
// }
// export default CarouselBrands;
