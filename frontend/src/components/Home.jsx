import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import DipaliResume from "../components/Dipali_Makadia_Resume_SDE.pdf";
import TypeWriter from "./TypeWriter";
import Stats from "./Stats";

const focus = [
  "Software Development",
  "Full-Stack Development",
  "AI & LLM Applications",
  "Data Visualization",
];

const Home = () => {
  return (
    <div name="home" className="w-full min-h-screen flex flex-col justify-center">
      <div className="section flex flex-col-reverse items-center justify-between gap-14 md:flex-row pt-32 pb-10">
        <div className="flex flex-col justify-center md:max-w-xl">
          <p className="eyebrow flex items-center gap-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-70" style={{ background: "var(--sage)" }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--sage)" }} />
            </span>
            Open to relocate anywhere in the US
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-medium leading-[1.02] tracking-tight">
            I'm a <span className="accent-em">Software</span> Developer
          </h2>
          <p className="font-mono text-sm md:text-base mt-6 h-6 muted">
            <span style={{ color: "var(--accent)" }}>›</span>{" "}
            <TypeWriter words={focus} className="text-[var(--fg)]" />
          </p>
          <p className="muted py-6 text-lg leading-relaxed">
            More than 5 years of experience as Software Developer and I am passionate about Software Development, Data Science, Artificial Intelligence, and Machine Learning.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href={DipaliResume} download target="_blank" rel="noreferrer" className="btn btn-primary">
              <BsFillPersonLinesFill /> Resume
            </a>
            <a href="https://github.com/dipalimakadia" target="_blank" rel="noreferrer" aria-label="GitHub" className="btn btn-ghost !px-4">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/dipali-makadia/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="btn btn-ghost !px-4">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="arch-frame">
            <img
              src={HeroImage}
              alt="my profile"
              className="relative arch w-64 h-80 md:w-80 md:h-[27rem] object-cover"
            />
          </div>
          {/* rotating badge */}
          <svg
            viewBox="0 0 120 120"
            className="absolute -left-10 -bottom-8 w-28 h-28 spin-slow"
            aria-hidden="true"
          >
            <circle cx="60" cy="60" r="58" style={{ fill: "var(--bg)" }} />
            <defs>
              <path id="circ" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
            </defs>
            <text className="font-mono" style={{ fontSize: 10.5, letterSpacing: 2.4, fill: "var(--fg)" }}>
              <textPath href="#circ">SOFTWARE DEVELOPER • 5+ YEARS • </textPath>
            </text>
            <circle cx="60" cy="60" r="7" style={{ fill: "var(--accent)" }} />
          </svg>
        </div>
      </div>
      <div className="px-6 md:px-16 max-w-6xl mx-auto w-full pb-12">
        <Stats />
      </div>
    </div>
  );
};

export default Home;
