import React from "react";

function WomanTech() {
  return (
    <div className="bg-[#ff3e1e] py-[50px] ">
      <div className="py-[30px] max-w-[1080px] w-[80%] m-auto lg:flex lg:flex-row  xl:gap-16">
        <div className="mb-[30px] w-full ">
          <div className="mb-[30px] text-left ">
            <h2 className="text-3xl text-white font-bold">
              Women in Tech Global Summit,
              <br />
              Paris 30 & 31st May, 2022
            </h2>
          </div>
          <div>
            <iframe
              className="w-[80vw] h-[26vh] md:w-[78vw] md:h-[31vh] lg:w-[47vw] lg:h-[24vh] xl:w-[36vw] xl:h-[41vh]"
              src="https://player.vimeo.com/video/531777520?h=8d296c743f&dnt=1&app_id=122963"
              height="450"
            ></iframe>
          </div>
        </div>
        <div className="lg:flex lg:flex-col">
        <div>
          <div className="mb-[30px] color-white text-left ">
            <div className="text-white">
              <strong>
                Women in Tech® Global Summit: HERoes Shaping Tomorrow
              </strong>
              <br />
              <p>
                The Women in Tech Global Summit is a 2-day event happening on
                the 30th & 31st May 2022 under the High Patronage of Ms.
                Elisabeth Moreno, French Minister for Gender Equality, Diversity
                and Equal Opportunities
              </p>
              <p>
                . The theme ‘HERoes Shaping tomorrow’, celebrates women across
                the world who are the Shakers, Makers and Innovators of our new
                society and economy. The Summit will kick off in Paris on Monday
                30th May for 2 days of content. Its aim is to inform, inspire
                and catalyze collective efforts to reduce the gender and digital
                gap in STEAM by 2030.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#120e95] text-white text-lg md:text-base  py-[0.3em] px-[1em] font-medium md:w-64">
          <a href="">TAKE PART IN THE SUMMIT</a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default WomanTech;
