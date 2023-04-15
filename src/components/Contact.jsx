import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div name="contact" className=" w-full bg-black text-white">
      <div className="md:px-20 px-10 mx-auto flex flex-col justify-center w-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 text-gray-500">
            If you find my profile suitable, please feel free reach out to me.
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <p className="text-3xl py-5">Dipali Makadia</p>
          <p className="text-2xl py-5">562-825-8686</p>
          <p className="text-2xl py-5">dipali.makadia@gmail.com</p>
          <p className="text-2xl py-5">Los Angeles, CA</p>
        </div>
        <div className="flex justify-center items-center">
          <a
            className="p-4"
            href="https://www.linkedin.com/in/dipali-makadia/"
            target="_blank"
          >
            <span className="group-hover:rotate-90 duration-300">
              <FaLinkedin size={30} />
            </span>
          </a>
          <a
            className="p-4"
            href="https://github.com/dipalimakadia"
            target="_blank"
          >
            <span className="group-hover:rotate-90 duration-300">
              <FaGithub size={30} />
            </span>
          </a>
          <a
            className="p-4"
            href="/resume.pdf"
            target="_blank"
            download="Dipali's Resume"
            rel="noreferrer"
          >
            <span className="group-hover:rotate-90 duration-300">
              <BsFillPersonLinesFill size={30} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
