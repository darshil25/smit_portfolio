// Experience.jsx
import React from "react";
import ExperienceCard from "../layouts/ExperienceCard";

const Experience = () => {
  const experienceData = [
    {
      title: "Industry Oriented Training – Bengaluru, India",
      subtitle: "[12/09/2022 – 16/09/2022]",
      details: [
        "Explored new technologies and approaches to streamline processes.",
        "Provided project progress updates and proposed solutions to issues.",
        "Collected, arranged, and input information into database system.",
      ],
    },
    // Add more experiences as needed
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="text-center font-semibold text-4xl mt-24 lg:mt-16 mb-8 lg:mb-7">
        Work History
      </h1>

      <div className="bg-white p-5 rounded-md">
        {experienceData.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
