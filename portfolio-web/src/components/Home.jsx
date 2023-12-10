import React from "react";

import Button from "../layouts/Button";

const Home = () => {

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1CVLink', '_blank');  
  }

  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-backgroundColor">

      <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4">

        <h1 className="text-5xl font-semibold leading-tight mt-24">
          I'm Smit  
          <span className="text-brightColor"> Front-end</span> Developer  
        </h1>

        <p>My Fascination With Technology Was Sparked When, As A Child I Thought It Would Be A Great Idea To Take Apart My Playstation Console. Aware Of The Danger, I Was Still Eager To See How It All Worked Inside. I Find It Intriguing How Fast Society Has Been Shaped And Continues To Be, By The Influence Of Computer Science.</p>

        <a href="https://drive.google.com/file/d/1hvHG1fq8_Zz_nJv8AcSZ9etzyarcNiFp/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <Button title="Download CV" onClick={handleDownloadCV} />
        </a>
      </div>

      

    </div>
  );
};

export default Home;
