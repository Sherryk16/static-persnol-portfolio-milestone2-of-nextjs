import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="flex justify-center text-3xl sm:text-4xl md:text-5xl text-yellow-200 font-bold mt-10">
        My Projects
      </div>

      {/* Image Section: Stacking images and titles on small screens */}
      <div className="flex flex-col md:flex-row justify-between mt-10 mx-4 md:mx-16">
        {/* First Image with Title */}
        <div className="flex flex-col items-center mb-5 md:mb-0">
          <Image
            src={'/projectimg1.PNG'}
            height={500}
            width={500}
            alt='project1'
          />
         <a href="https://github.com/Sherryk16/website-clone-of-governor-initiative-assignment-of-giaic-class"> <h2 className="text-xl sm:text-2xl text-yellow-200 mt-4 text-center">Governor Initiative Website Clone</h2></a>
        </div>

        {/* Second Image with Title */}
        <div className="flex flex-col items-center mb-5 md:mb-0">
          <Image
            src={'/resumeimg2.PNG'}
            height={500}
            width={500}
            alt='project2'
          />
         <a href="https://milestone5-shareable-resume-omega.vercel.app/"> <h2 className="text-xl sm:text-2xl text-yellow-200 mt-4 text-center">Resume Builder</h2></a>
        </div>
      </div>

    
      

      {/* Links to Vercel and Github: Stack vertically on small screens */}
      <div className="flex flex-col md:flex-row justify-around mt-10 text-xl sm:text-2xl text-yellow-200 font-serif">
        <a
          href="https://vercel.com/sheharyar-khans-projects-2c5d59d4"
          className="mb-5 md:mb-0 hover:text-yellow-400"
        >
          <h2>Visit My Vercel Account</h2>
        </a>
        <a
          href="https://github.com/Sherryk16"
          className="mb-5 md:mb-0 hover:text-yellow-400"
        >
          <h2>Visit My Github For More Projects</h2>
        </a>
      </div>

      <div className="mb-5"></div>
    </div>
  )
}

export default page
