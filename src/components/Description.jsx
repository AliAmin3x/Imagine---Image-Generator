import React from "react";
import { assets } from "../assets/assets";

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Create AI Images
      </h1>
      <p className="text-gray-500 mb-8">Turn your imagination into visuals</p>
      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          src={assets.sample_img_1}
          alt=""
          className="w-80 xl:w-96 rounded-lg"
        />
        <div>
          <h2 className="text-3xl font-medium max-w-lg mb-4">
            Inroducing the AI-Powered Text to Image Generator
          </h2>
          <p className="text-gray-600 mb-4">
            Easily bring the ideas to lige with our free AI image generator.
            Whether you need stunning visuals or unique imagery, our tool
            transforms your text into eye-catching images with just a few
            clicks. imagine it, descripbe it, and let the AI create it for you.
          </p>
          <p className="text-gray-600">
            Our AI image generator is designed to be user-friendly and
            accessible to everyone. No design skills are required. Simply enter
            your text prompt, and watch as the AI generates a high-quality image
            that matches your description. Perfect for artists, marketers, and
            anyone looking to enhance their visual content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
