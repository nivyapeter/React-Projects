import React from 'react'

function Patronage() {
  return (
    <div className="py-[50px] bg-white font-light text-[#000000] leading-7 ">
        <div className="py-[30px] max-w-[1080px] w-[80%] m-auto md:pt-[30px] md:pb-0 md:px-0 lg:flex lg:flex-row lg:gap-8">
            <div className="mb-[30px]">
            <iframe className="w-[80vw] h-[47vh] md:h-[57vh] lg:h-[37vh] lg:w-[40vw]" src="https://player.vimeo.com/video/588343509?h=b7e59c30e6"height="450"></iframe>
            </div>
            <div>
                <h1 className="text-4xl text-black font-extrabold pb-2">Women in Tech® has received the High Patronage of</h1>
                <p>
                    <strong className="font-extrabold">Kolinda Grabar Kitarovic,</strong>
                     Former President of Croatia
                     <br />
                     <strong className="font-extrabold">Elisabeth Moreno,</strong>
                     Minister of Gender Equality, France
                     <br />
                     <strong className="font-extrabold">Muriel Pénicaud,</strong>
                     Ambassador for the OECD and Former French Minister of Labour
                     <br />
                     <strong className="font-extrabold">Rosa Monteiro,</strong>
                      Secretary of State for Gender Equality Portugal
                     <br />


                </p>
            </div>
        </div>

    </div>
  )
}

export default Patronage