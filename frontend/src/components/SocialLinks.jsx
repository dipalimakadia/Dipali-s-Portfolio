import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import DipaliResume from "../components/Dipali_Makadia_Resume_SDE.pdf";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/dipali-makadia/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/dipalimakadia",
    },
    {
      id: 3,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: DipaliResume,
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-40">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 -translate-x-[100px] hover:-translate-x-[10px] hover:rounded-md transition-[transform,border-radius] duration-300 ease-out will-change-transform" +
              " " +
              style
            }
            style={{ background: "var(--accent)", color: "var(--on-accent)" }}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
