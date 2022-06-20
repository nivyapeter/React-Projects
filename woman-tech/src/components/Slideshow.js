import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {partner1,partner2,partner3} from "../images/index";

const slideImages = [
  partner1,
  partner2,
  partner3
];

const properties = {
  duration: 100,
  transitionDuration: 2000,
  infinite: false,
  indicators: true,
  arrows: true
}

const Slideshow = () => {
    return (
      <div className="h-[40vh]">
      <Slide {...properties}>
        <div className="each-slide bg-no-repeat bg-center">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
      </div>
    )
}
export default Slideshow