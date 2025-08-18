import React, { useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const onSubmitHandler = async (e) => {};

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center"
    >
      <div>
        <div className="relative w-full max-w-md">
          <img
            src={image}
            alt=""
            className="w-full h-auto rounded object-cover"
          />
          <span
            className={`absolute bottom-0 left-0 h-2 bg-gradient-to-r from-blue-600 to-purple-700 $ {loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`}
          />
        </div>

        <p className={!loading ? "hidden" : ""}>Loading...</p>

        {!isImageLoaded && (
          <div className="border-3 border-purple-600 flex w-full max-w-xl bg-gradient-to-r from-blue-300 to-purple-300 text-black text-sm p-0.5 mt-10 rounded-full">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Describe what you want to generate"
              className="flex-1 bg-transparent outline-none ml-3 sm:ml-8 text-xs sm:text-sm max-sm:w-20"
            />
            <button
              type="submit"
              className="text-white cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 
               px-3 py-2 text-xs 
               sm:px-6 sm:py-3 sm:text-sm 
               md:px-10 md:py-3 md:text-base 
               rounded-full transition duration-300"
            >
              Generate
            </button>
          </div>
        )}
        {isImageLoaded && (
          <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
            <p
              onClick={() => {
                setIsImageLoaded(false);
              }}
              className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
            >
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
    </motion.form>
  );
};

export default Result;
