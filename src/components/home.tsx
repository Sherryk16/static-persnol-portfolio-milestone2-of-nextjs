"use client";
import React from 'react';
import Image from 'next/image';
import AboutMe from "@/components/about";
import Projects from '@/components/project';
import ContactForm from '@/components/contact';

import 'tailwindcss/tailwind.css';

const Hero = () => {
  return (
    <main>
      <div className='pt-10'>
        {/* Container for Name and Image */}
        <div className="flex flex-col md:flex-row items-center justify-between mx-10">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-6xl md:text-8xl text-white font-bold mt-12 inline-block">Hello I&apos;m</h1>
            <h1 className="text-4xl sm:text-6xl md:text-8xl text-yellow-200 font-bold mt-5">Sheharyar</h1>
            <h1 className="text-4xl sm:text-6xl md:text-8xl text-yellow-200 font-bold mt-5">Khan</h1>
          </div>

          {/* Image Section */}
          <div className="pt-12 md:pt-24 mt-5 md:mt-0">
            <Image
              src="/portaitphoto2.png" // Replace with the path to your photo
              alt="Sheharyar Khan"
              width={300} // Adjust width for mobile and tablet
              height={300} // Adjust height for mobile and tablet
              className="rounded-full shadow-lg object-cover bg-yellow-200 border-4 border-white"
            />
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col ml-10 md:flex-row gap-4 mx-4 mt-8 md:mt-12">
          <a
            href="/ContactMe"
            className="relative group px-6 py-3 text-slate-950 bg-white font-bold rounded-lg shadow-lg hover:scale-105 transition mx-4 md:mx-0"
          >
            Hire Me
          </a>
          <a
            href="/Resume1.pdf"
            download="Shearyar_CV.pdf"
            className="px-6 py-3 text-slate-950 bg-yellow-200 font-bold rounded-lg hover:scale-105 transition mx-4 md:mx-0"
          >
            Download CV
          </a>
        </div>

        {/* Section Separators */}
        <div className="h-2 bg-white mt-24 mx-28 rounded"></div>
      </div>

      {/* AboutMe Section */}
      <AboutMe />

      <div className="h-2 bg-white mt-15 mx-28 rounded"></div>

      {/* Projects Section */}
      <Projects />

      <div className="h-2 bg-white mt-15 mx-28 mb-5 rounded"></div>

      {/* Contact Form Section */}
      <ContactForm />
    </main>
  );
};

export default Hero;
