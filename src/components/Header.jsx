import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center my-20">
      <div className="text-stone-500 inline-flex text-center gap-2 bg-white px-4 py-2 rounded-full border border-neutral-500  ">
        <p>Best text to image Generator</p>
        <img src={assets.star_icon} alt="" />
      </div>

      <h1 className="text-4xl max-w-[400px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center text-gray-800">
        Turn Text to <span className="text-blue-600">image</span>, in seconds.
      </h1>

      <p className="mt-5 max-w-xl mx-auto text-gray-600 text-sm sm:text-base">
        Unleash your creativity with AI. Turn your imagination into visual art
        in seconds – just type, and watch the magic happen.
      </p>

      <Link to={"/result"}>
        <button className="cursor-pointer mt-4 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition duration-300">
          Generate Images
          <img className="h-6" src={assets.star_group} alt="" />
        </button>
      </Link>

      <div className="flex flex-wrap justify-center mt-16 gap-3">
        {Array(6)
          .fill("")
          .map((item, index) => (
            <img
              className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
              src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
              key={index}
              width={70}
            />
          ))}
      </div>
      <p className="mt-2 text-neutral-600">Generated Images from Imagify</p>
    </div>
  );
};

export default Header;
