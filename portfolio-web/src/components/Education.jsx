// Education.jsx
import React from "react";
import EducationCard from "../layouts/EducationCard";

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Technology",
      degree: "Computer Science and Engineering(Core)",
      duration: "June 2020 - Ongoing",
      institute: "Vellore Institute of Technology - Bhopal",
      grade: "Grade : 8.19",
      certificate: "Certificate of Web Training",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolor incidunt quo, nulla dolore molestiae esse animi hic, placeat velit omnis quasi officia suscipit. Natus dignissimos reiciendis ut assumenda corrupti?",
    },
    {
      title: "Class XII",
      institute: "Shree G.K. Dholakiya School - Rajkot",
      duration: "May 2019",
      grade: "Grade : 73.84%",
    },
    {
      title: "Class X",
      institute: "Shree P.V. MODI HIGH SCHOOL - Rajkot",
      duration: "May 2017",
      grade: "Grade : 90.50%",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="text-center font-semibold text-4xl mt-24 lg:mt-16 mb-8 lg:mb-7">
        Education
      </h1>

      <div className="bg-white p-5 rounded-md">
        {educationData.map((education, index) => (
          <EducationCard key={index} {...education} />
        ))}
      </div>
    </div>
  );
};

export default Education;
