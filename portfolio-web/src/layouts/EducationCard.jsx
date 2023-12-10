// EducationCard.jsx
import React from "react";

const EducationCard = (props) => {
  return (
    <div className="flex flex-col lg:flex-row py-4">
      <div className="w-full lg:w-2/4">
        <h2 className="font-semibold">{props.title}</h2>
        <div className="mt-2">
          {props.degree && <p>{props.degree}</p>}
          <p>{props.duration}</p>
        </div>
      </div>
      <div>
        <h2 className="font-semibold mt-2 lg:mt-0">{props.institute}</h2>
        {props.grade && (
          <p className="mt-2">{props.grade}</p>
        )}
        <div className="bg-slate-500 w-full h-0.5 mt-2"></div>
      </div>
    </div>
  );
};

export default EducationCard;
