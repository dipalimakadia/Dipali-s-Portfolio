import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className="pt-20 w-full bg-black">
      <div className="md:px-20 px-10 mx-auto flex flex-col items-center justify-center p-4 h-full md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-6xl max-w-xl sm:text-6xl font-bold text-white">
            I'm a FullStack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          With over more than 4.5 years of experience as Software Developer and I am passionate about Software Development, Data Science, Artificial Intelligence, and Machine Learning, and I'm looking for entry-level or mid-level software engineering roles.
            {/* I have more than 6 years of experience as a Developer. Pursuing MS
            in Computer Science at CSULA. */}
          </p>
          {/* <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-300 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div> */}
        </div>

        <div className="flex flex-col justify-center ">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl my-10 shadow-lg shadow-slate-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
