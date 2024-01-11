import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full bg-black text-white pt-10">
      <div className="md:px-20 px-10 mx-auto flex flex-col justify-center w-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-5">
          With over 6 years of experience in software development, have
          specialization in both client and server-side work, delivering
          high-quality products and maintaining effective written and verbal
          communication with clients. Hands-on experience in implementing
          website navigation layouts across various platforms and devices, with
          expertise in Responsive Web Development, W3C Standards & Cross Browser
          Compatibility. Strong background in Agile and Scrum methodologies,
          problem-solving, troubleshooting, testing, debugging, and version
          control. Experience in Frontend, Backend, and Full Stack development
          tasks. I have understanding of the software development life
          cycle, including the code, build, deploy, and testing phases.
        </p>
      </div>
    </div>
  );
};

export default About;
