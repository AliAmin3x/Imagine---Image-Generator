import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";

const GenerateButton = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    // Scroll to top first
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      if (user) {
        navigate("/result");
      } else {
        setShowLogin(true);
      }
    }, 750);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="pb-16 text-center"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16">
        See the Magic. Try Now
      </h1>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0 },
          opacity: { delay: 0.8, duration: 1 },
        }}
        onClick={onClickHandler}
        className="m-auto cursor-pointer inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition duration-300"
      >
        Generate Image
        <img src={assets.star_group} alt="" className="h-6 ml-2" />
      </motion.button>
    </motion.div>
  );
};

export default GenerateButton;
