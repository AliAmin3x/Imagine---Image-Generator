import React from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [user, setUser] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img src={assets.logo} alt="" className="w-28 sm:w-32 lg:w-40" />
      </Link>

      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full text-blue-600 hover:bg-blue-200 hover:scale-105 transition-all duration-500 ">
              <img className="w-5" src={assets.credit_star} alt="" />
              <p className="text-xs sm:text-sm font-medium">Credits left: 50</p>
            </button>
            <p className="max-sm:hidden text-gray-600 pl-4">Hi, User</p>
            <div className="relative group">
              <img
                src={assets.profile_icon}
                className="w-10 drop-shadow "
                alt=""
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 rounded-lg bg-white border text-sm">
                  <li className="py-1 px-2 cursor-pointer">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p
              onClick={() => navigate("/buy-credit")}
              className="cursor-pointer"
            >
              Pricing
            </p>
            <button className="bg-zinc-800 cursor-pointer text-white px-7 py-2 sm:px-10 rounded-full hover:bg-zinc-700 transition-all duration-300">
              login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
