import React from "react";
import img from "../assets/img/hero.png";
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
          <span className="text-brightColor">Front-end</span> Developer  
        </h1>

        <p>My Fascination With Technology...</p>

        <a href="/posts">
        <Button title="Download CV" onClick={handleDownloadCV} />
        </a>
        

      </div>

      <div className="mt-20">
        <img width={570} src={img} alt="img" />
      </div>

    </div>
  );
};

export default Home;
