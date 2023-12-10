// Services.jsx
import React from "react";
import ServicesCard from "../layouts/SkillsCard";
import { BiCodeAlt } from "react-icons/bi";
import { BsAndroid } from "react-icons/bs";
import { AiOutlineCodepen } from "react-icons/ai";

const Services = () => {
  const icon1 = <BiCodeAlt size={55} className="text-brightColor" />;
  const icon2 = <BsAndroid size={55} className="text-brightColor" />;
  const icon3 = <AiOutlineCodepen size={55} className="text-brightColor" />;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="text-center font-semibold text-4xl mt-24 lg:mt-14 mb-8 lg:mb-4">
        My Skills
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-5 mt-4">
        <ServicesCard icon={icon1} title="Web Development" description="Blog, E-commerce, Responsive Designs" />
        <ServicesCard icon={icon2} title="App Development" description="iOS, Android, Cross-Platform Apps" />
        <ServicesCard icon={icon3} title="Freelancing" description="Custom Projects, Client Satisfaction" />
      </div>
    </div>
  );
};

export default Services;
