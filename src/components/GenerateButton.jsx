import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const GenerateButton = () => {
  return (
    <div className="pb-16 text-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16">
        See the Magic. Try Now
      </h1>
      <Link to={"/result"}>
        <button className="m-auto cursor-pointer inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition duration-300">
          Generate Image
          <img src={assets.star_group} alt="" className="h-6" />
        </button>
      </Link>
    </div>
  );
};

export default GenerateButton;
