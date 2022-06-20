import React from "react";
import { HiChevronDown } from "react-icons/hi";
// import {carouselImg1,carouselImg2,carouselImg3} from "./images/index";
import { areaImg1, areaImg2, areaImg3, areaImg4 } from "../src/images/index";
import { woman1, woman2, woman3, woman4 } from "../src/images/index";
import {News1,News2,News3,News4,News5,News6,News7,News8,News9} from "../src/images/index";
import {partner1,partner2,partner3,partner4,partner5,partner6,partner7,partner8,partner9,partner10,partner11,partner12,partner13,partner14,partner15} from "../src/images/index"
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
];
const navItems = [
  {
    text: "About us",
    icon: <HiChevronDown />,
  },
  {
    text: "What we do",
    icon: <HiChevronDown />,
  },
  {
    text: "Where we are",
    icon: <HiChevronDown />,
  },
  {
    text: "Events",
  },
  {
    text: "Donate",
  },
];
// const image= [{
//     image:carouselImg1,
//  },
//  {
//     image:carouselImg2,
//  },
//  {
//     image:carouselImg3,
//  },

// ]
const areaItems = [
  {
    image: areaImg1,
    heading: "Advocacy",
    subHeading: "Summits & Events Policy change Strategic Partnerships",
  },
  {
    image: areaImg2,
    heading: "Education",
    subHeading: "Skilling programs Training Outreach sessions",
  },
  {
    image: areaImg3,
    heading: "Business",
    subHeading: "Entrepreneurship Workforce development Talent Hub",
  },
  {
    image: areaImg4,
    heading: "Social Inclusion",
    subHeading: "Fundraising Equipping rural areas Scholarships",
  },
];

const womanCommunity = [
  {
    image: woman1,
    title: "Skilling with Education",
    content:
      "“ I was the owner of a hostel with a 18 month baby when I applied for the Women in Tech Coding Camp in 2018. It gave me the courage to skill myself and become a front-end developer. Today I am a managing director of an IT firm in Skopje.”",
      rightText1: "Dina Damjanovikj",
      rightText2:"North Macedonia"
  },
  {
    image: woman2,
    title: "Skilling with Education",
    content:
      "“ I was the owner of a hostel with a 18 month baby when I applied for the Women in Tech Coding Camp in 2018. It gave me the courage to skill myself and become a front-end developer. Today I am a managing director of an IT firm in Skopje.”",
      rightText1: "Dina Damjanovikj",
      rightText2:"North Macedonia"
  },
  {
    image: woman3,
    title: "Skilling with Education",
    content:
      "“ I was the owner of a hostel with a 18 month baby when I applied for the Women in Tech Coding Camp in 2018. It gave me the courage to skill myself and become a front-end developer. Today I am a managing director of an IT firm in Skopje.”",
    rightText1: "Dina Damjanovikj",
    rightText2:"North Macedonia"
  },
  {
    image: woman4,
    title: "Skilling with Education",
    content:
      "“ I was the owner of a hostel with a 18 month baby when I applied for the Women in Tech Coding Camp in 2018. It gave me the courage to skill myself and become a front-end developer. Today I am a managing director of an IT firm in Skopje.”",
      rightText1: "Dina Damjanovikj",
      rightText2:"North Macedonia"
  },
];
const newsItems =[{
  image:News1,
  title:"A Success to the Women in Tech Global Movement Round Table!",
  subText:"Jun 10, 2022  | Global ",
  paragraph:"Our Founder and CEO of Women in Tech®, Ayumi Moore Aoki lead the WOMEN IN TECH - Global Movement Round Table at the US Ambassador to France, H.E. Denise Bauer's Residency in Paris. She lead a delegation that was made up of; Jameka Pankey, Tolulope Oke, Natascia..."
},
{
  image:News2,
  title:"A Success to the Women in Tech Global Movement Round Table!",
  subText:"Jun 10, 2022  | Global ",
  paragraph:"Our Founder and CEO of Women in Tech®, Ayumi Moore Aoki lead the WOMEN IN TECH - Global Movement Round Table at the US Ambassador to France, H.E. Denise Bauer's Residency in Paris. She lead a delegation that was made up of; Jameka Pankey, Tolulope Oke, Natascia..."
},
{
  image:News3,
  title:"A Success to the Women in Tech Global Movement Round Table!",
  subText:"Jun 10, 2022  | Global ",
  paragraph:"Our Founder and CEO of Women in Tech®, Ayumi Moore Aoki lead the WOMEN IN TECH - Global Movement Round Table at the US Ambassador to France, H.E. Denise Bauer's Residency in Paris. She lead a delegation that was made up of; Jameka Pankey, Tolulope Oke, Natascia..."
},
{
  image:News4,
  title:"A Success to the Women in Tech Global Movement Round Table!",
  subText:"Jun 10, 2022  | Global ",
  paragraph:"Our Founder and CEO of Women in Tech®, Ayumi Moore Aoki lead the WOMEN IN TECH - Global Movement Round Table at the US Ambassador to France, H.E. Denise Bauer's Residency in Paris. She lead a delegation that was made up of; Jameka Pankey, Tolulope Oke, Natascia..."
},
{
  image:News5,
  title:"A Success to the Women in Tech Global Movement Round Table!",
  subText:"Jun 10, 2022  | Global ",
  paragraph:"Our Founder and CEO of Women in Tech®, Ayumi Moore Aoki lead the WOMEN IN TECH - Global Movement Round Table at the US Ambassador to France, H.E. Denise Bauer's Residency in Paris. She lead a delegation that was made up of; Jameka Pankey, Tolulope Oke, Natascia..."
},
{
  image:News6,
  title:"A Success to the Women in Tech Global Movement Round Table!",
  subText:"Jun 10, 2022  | Global ",
  paragraph:"Our Founder and CEO of Women in Tech®, Ayumi Moore Aoki lead the WOMEN IN TECH - Global Movement Round Table at the US Ambassador to France, H.E. Denise Bauer's Residency in Paris. She lead a delegation that was made up of; Jameka Pankey, Tolulope Oke, Natascia..."
},
{
  image:News7,
  title:"A Success to the Women in Tech Global Movement Round Table!",
  subText:"Jun 10, 2022  | Global ",
  paragraph:"Our Founder and CEO of Women in Tech®, Ayumi Moore Aoki lead the WOMEN IN TECH - Global Movement Round Table at the US Ambassador to France, H.E. Denise Bauer's Residency in Paris. She lead a delegation that was made up of; Jameka Pankey, Tolulope Oke, Natascia..."
},
{
  image:News8,
  title:"A Success to the Women in Tech Global Movement Round Table!",
  subText:"Jun 10, 2022  | Global ",
  paragraph:"Our Founder and CEO of Women in Tech®, Ayumi Moore Aoki lead the WOMEN IN TECH - Global Movement Round Table at the US Ambassador to France, H.E. Denise Bauer's Residency in Paris. She lead a delegation that was made up of; Jameka Pankey, Tolulope Oke, Natascia..."
},
{
  image:News9,
  title:"A Success to the Women in Tech Global Movement Round Table!",
  subText:"Jun 10, 2022  | Global ",
  paragraph:"Our Founder and CEO of Women in Tech®, Ayumi Moore Aoki lead the WOMEN IN TECH - Global Movement Round Table at the US Ambassador to France, H.E. Denise Bauer's Residency in Paris. She lead a delegation that was made up of; Jameka Pankey, Tolulope Oke, Natascia..."
}
]
const partners = [
  {
    image: partner1,
    
  },
  {
    image: partner2,
    
  },
  {
    image: partner3,
    
  },
  {
    image: partner4,
    
  },
  {
    image: partner5,
    
  },
  {
    image: partner6,
    
  },
  {
    image: partner7,
    
  },
  {
    image: partner8,
    
  },
  {
    image: partner9,
    
  },
  {
    image: partner10,
    
  },
  {
    image: partner11,
    
  },
  {
    image: partner12,
    
  },
  {
    image: partner13,
    
  },
  {
    image: partner14,
    
  },
  {
    image: partner15,
    
  },
 
];

const footerContents = [{
  title: "About us",
      contents: [
        {
          text: "Who are we?",
          link: "",
        },
        {
          text: "Context",
          link: "",
        },
        {
          text: "Focus areas",
          link: "",
        },
        {
          text: "A global movement",
          link: "",
        },
      ]
},
{
  title: "Get involved",
      contents: [
        {
          text: "Contact us",
          link: "",
        },
        {
          text: "Join us on Slack",
          link: "",
        },
        {
          text: "Become a Member",
          link: "",
        },
        {
          text: "Donate",
          link: "",
        },
        
      ]
},
{
  title: "What we do",
      contents: [
        {
          text: "Global Mentoring Program",
          link: "",
        },
        {
          text: "Talent Hub",
          link: "",
        },
        {
          text: "Advocacy and Support",
          link: "",
        },
        
      ]
},

]
const mobileContents = [{
  title: "About us",
      contents: [
        {
          text: "Why we exist",
          link: "",
        },
        {
          text: "Who are we?",
          link: "",
        },
        {
          text: "Our Team",
          link: "",
        },
        {
          text: "Milestones",
          link: "",
        },
      ]
},
{
  title: "What we do",
      contents: [
        {
          text: "Mentoring program",
          link: "",
        },
        {
          text: "Advocacy & Support",
          link: "",
        },
        {
          text: "Talent Hub",
          link: "",
        },
        
      ]
},
{
  title: "Where we are",
      contents: [
        {
          text: "Our Chapters",
          link: "",
        },
        {
          text: "Open a Chapter",
          link: "",
        },
        
      ]
},
{
  title: "Events"
},
{
  title: "Donate"
},
{
  title: "JOB BOARD"
},
{
  title: "News"
},
{
  title: "Contact"
},

]


export { headerContents, navItems, areaItems,womanCommunity,newsItems ,partners,footerContents,mobileContents};

