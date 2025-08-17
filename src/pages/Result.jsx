import React, { useState } from "react";
import { assets } from "../assets/assets";
const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <form className="flex flex-col min-h-[90vh] justify-center items-center">
      <div>
        <div className="relative">
          <img src={image} alt="" className="max-w-md rounded" />
          <span className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-blue-600 to-purple-700 w-full transition-all duration-[10s]" />
        </div>
        <p>Loading...</p>

        {!isImageLoaded && (
          <div className="border-3 border-purple-600 flex w-full max-w-xl bg-gradient-to-r from-blue-300 to-purple-300 text-black text-sm p-0.5 mt-10 rounded-full">
            <input
              type="text"
              placeholder="Describe what you want to generate"
              className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20"
            />
            <button
              type="submit"
              className="text-white cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-5 sm:px-10 py-3 rounded-full transition duration-300"
            >
              Generate
            </button>
          </div>
        )}
        {isImageLoaded && (
          <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
            <p className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer">
              Generate Another
            </p>
            <a
              href={image}
              download
              className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
            >
              Download
            </a>
          </div>
        )}
      </div>
    </form>
  );
};

export default Result;
