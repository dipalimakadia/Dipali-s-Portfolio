import React from "react";
import Reveal from "./Reveal";

const About = () => {
  return (
    <div name="about" className="w-full">
      <div className="section">
        <Reveal>
          <p className="eyebrow"><b>01</b> / Who I am</p>
          <h3 className="section-title">About</h3>
        </Reveal>
        <Reveal delay={100} className="mt-10 pl-6 md:pl-10" >
          <div style={{ borderLeft: "2px solid var(--accent)" }} className="pl-6 md:pl-10">
            <p className="font-display text-xl md:text-2xl leading-relaxed font-light">
              I have a strong foundation in computer science and a proven track
              record of success. I graduated from California State
              University Los Angeles (CSULA) with a Master's in Computer Science,
              focusing on Advanced Web Programming, Artificial Intelligence and Data
              Science. I have more than 5 years of experience as a Software
              Developer in Startup company as well as global tech. As a developer I worked on frontend, backend, and
              full-stack tasks, navigating layouts across various
              platforms and devices, responsive web development, W3C standards,
              cross-browser compatibility, web accessibility, Agile and Scrum
              methodologies, problem-solving, troubleshooting, testing, debugging,
              and version control. Good experience working in a team, leading a
              team, effective verbal communication, and providing a quality product
              to the client. I am eager to learn and grow.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default About;
