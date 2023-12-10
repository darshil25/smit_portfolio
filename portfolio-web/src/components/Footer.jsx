import React from "react";
import { BsInstagram } from "react-icons/bs"; 
import { FaFacebook, FaLinkedin} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {

  const handleClick = (url) => {
    window.open(url, '_blank');
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between lg:px-32 px-5 bg-white p-5">

      <div className="flex gap-10">
        <BsInstagram size={32} className="hover:text-brightColor transition-all cursor-pointer" onClick={() => handleClick('https://www.instagram.com')}/>

        <FaFacebook size={32} className="hover:text-brightColor transition-all cursor-pointer" onClick={() => handleClick('https://www.facebook.com')} />

        <FaLinkedin size={32} className="hover:text-brightColor transition-all cursor-pointer" onClick={() => handleClick('https://www.linkedin.com')} />
        
        <FaXTwitter size={32} className="hover:text-brightColor transition-all cursor-pointer" onClick={() => handleClick('https://discord.com')} />
      </div>

      <div className="flex flex-row items-center cursor-pointer mt-5 lg:mt-0">
        <h1 className="text-3xl font-semibold hover:text-brightColor transition-all cursor-pointer" onClick={() => handleClick('https://github.com/darshil25')}>Smit Patel</h1>
      </div>

    </div>
  );
};

export default Footer;