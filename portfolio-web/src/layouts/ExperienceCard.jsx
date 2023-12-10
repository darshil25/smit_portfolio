// ExperienceCard.jsx
import React from "react";

const ExperienceCard = (props) => {
  return (
    <div className="flex flex-col lg:flex-row py-4">
      <div className="w-full lg:w-2/4">
        <h2 className="font-semibold">{props.title}</h2>
        <div className="mt-2">
          {props.subtitle && <p>{props.subtitle}</p>}
          {props.details && (
            <ul className="list-disc pl-5">
              {props.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default ExperienceCard;
