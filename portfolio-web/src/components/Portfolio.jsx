import React from "react";
import img1 from "../assets/img/project1.jpg";
import img2 from "../assets/img/project2.jpg";
import img3 from "../assets/img/project3.jpg";
import img4 from "../assets/img/project4.jpg";
import img5 from "../assets/img/project5.jpg";
import img6 from "../assets/img/project6.jpg";

const Portfolio = () => {
  const imageLinks = [
    "https://summarily.netlify.app/",
    "https://onlinekbc.netlify.app/",
    "https://visiontube.netlify.app/",
    "https://www.google.com",
    "https://www.google.com",
    "https://www.google.com",
  ];

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="text-center font-semibold text-4xl pt-24 lg:pt-16 pb-8 lg:mb-4">
        Portfolio
      </h1>

      <div className="flex items-center justify-center flex-wrap gap-10 pb-5 lg:pb-0">
        {imageLinks.map((link, index) => (
          <div key={index} className="w-full lg:w-1/4">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img
                className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
                src={index === 0 ? img1 : index === 1 ? img2 : index === 2 ? img3 : index === 3 ? img4 : index === 4 ? img5 : img6}
                alt={`img${index + 1}`}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
