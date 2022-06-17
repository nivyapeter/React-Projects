import React from 'react'
import {HiChevronDown} from "react-icons/hi"
// import {carouselImg1,carouselImg2,carouselImg3} from "./images/index";
import {areaImg1,areaImg2,areaImg3,areaImg4 } from "../src/images/index"
 const headerContents = [
    {
       title: "Forecast",
       contents: [
         {
           text: "Today",
           link: "",
         },
         {
           text: "Hourly",
           link: "",
         },
         {
           text: "10-day",
           link: "",
         },
         {
           text: "Weekend",
           link: "",
         },
         {
          text: "Monthly",
          link: "",
        },
       ],
     },
     {
       title: "Maps",
       contents: [
         {
           text: "Maps",
           link: "",
         },
         
       ],
     },
     {
       title: "Weather News",
       contents: [
         {
           text: "Forecasts and News",
           link: "",
         },
         {
           text: "Monsoon",
           link: "",
         },
         {
           text: "Videos",
           link: "",
         },
       ],
     },
     {
       title: "Health",
       contents: [
         {
           text: "Allergy Tracker",
           link: "",
         },
         {
           text: "COVID-19 Dashboard",
           link: "",
         },
         {
           text: "COVID-19 News",
           link: "",
         },
         {
          text: "Air Quality Forecast",
          link: "",
        },
        {
          text: "Health News",
          link: "",
        },
         
       ],
     },
     {
       title: "Science",
       contents: [
         {
           text: "Science",
           link: "",
         },
         {
           text: "Space",
           link: "",
         },
         
       ],
     },
     {
       title: "Environment",
       contents: [
         {
           text: "Biodiversity",
           link: "",
         },
         {
           text: "Climate Change",
           link: "",
         },
         {
          text: "Pollution",
          link: "",
        },
         
       ],
     },
     {
       title: "Activities",
       contents: [
         {
           text: "Travel and Lifestyle",
           link: "",
         },
         
         
       ],
     },
     {
       title: "Privacy",
       contents: [
        {
           text: "Data Rights",
            link: "",
         },
         {
          text: "Privacy Policy",
           link: "",
        },
         
         
       ],
     },
     
 ]
 const navItems = [{
    text:"About us",
    "icon":<HiChevronDown />,
 },
 {
    text:"What we do",
    "icon":<HiChevronDown  />,
 },
 {
    text:"Where we are",
    "icon":<HiChevronDown />,
 },
 {
    text:"Events",
 },
 {
    text:"Donate",
 },
]
// const imageBrands = [{
//     image:carouselImg1,
//  },
//  {
//     image:carouselImg2,
//  },
//  {
//     image:carouselImg3,
//  },

// ]
const areaItems = [{
    image:areaImg1,
    heading:"Advocacy",
    subHeading:"Summits & Events Policy change Strategic Partnerships"
 },
 {
    image:areaImg2,
    heading:"Education",
    subHeading:"Skilling programs Training Outreach sessions"
 },
 {
    image:areaImg3,
    heading:"Business",
    subHeading:"Entrepreneurship Workforce development Talent Hub"
 },
 {
    image:areaImg4,
    heading:"Social Inclusion",
    subHeading:"Fundraising Equipping rural areas Scholarships"
 },
]


export {headerContents,navItems,areaItems}
 