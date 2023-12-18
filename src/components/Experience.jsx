import React from "react";
import { MdOutlineArrowCircleRight } from "react-icons/md";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Graduate Student Assistant at Office of Graduate Studies",
      company: "California State University, Los Angeles",
      year: "03/2022 – present",
      details:
        "Conduct virtual meetings on Zoom to communicate with individual students and provide them with feedback. Review the students' theses, which are submitted in both MS Word and PDF formats, and give feedback via email. Offer guidance on referencing styles, citations, and bibliography, and assist in rectifying any formatting errors.",
      link: "https://www.calstatela.edu/",
    },
    // {
    //   id: 2,
    //   position: "Student Assistant at Office of Graduate Studies",
    //   company: "California State University, Los Angeles",
    //   year: "06/2022 – 08/2022",
    //   place: "Los Angeles, US",
    //   details:
    //     "Managed incoming calls and emails, promptly addressing inquirie﻿s and effectively redirecting messages as required. Provided administrative support, research assistance, and updating departmental websites, social media platforms, designing promotional materials and maintaining databases for organizing and tracking departmental data.",
    //   link: "https://www.calstatela.edu/",
    // },
    {
      id: 2,
      position: "Programmer Analyst",
      company: "Cognizant",
      year: "05/2021 – 01/2022",
      details:
        "Collaborated with a team on the O2 project, utilizing HTML5, CSS, SCSS, JIRA, JavaScript, JQuery, and Adobe Target to develop engaging and responsive front-end components. Implemented version control using GIT and integrated visual elements seamlessly in collaboration with the design team to optimize the user experience. Conducted thorough testing, collaborated with cross-functional teams, and followed industry best practices to ensure effective integration and functional code.",
      link: "https://www.cognizant.com/in/en",
    },
    {
      id: 3,
      position: "Associate Interface Developer",
      company: "Digitas",
      year: "05/2019 – 05/2021",
      details:
        "Worked on DMI project, utilizing HTML5, CSS3, Highcharts, D3, GIT, Handlebars, ES6, Bootstrap, NPM, Jquery and ReactJS to develop visually appealing and interactive graphs and front-end components. Followed best practices in HTML and CSS for responsive designs and integrated Highcharts for data visualization capabilities. Implemented version control with GIT, utilized Handlebars for HTML components, build single page app containing dashboard, graphs, roadmap and calendars, conducted testing, and collaborated closely with designers and back-end developers to keep up the best quality of the project.",
      link: "https://www.digitas.com/en-us",
    },
    {
      id: 4,
      position: "Software Developer",
      company: "Motes & Bots Technologies",
      year: "06/2018 – 02/2019",
      details:
        "Lead the team on the Smart Office project to develop a secure and user-friendly dashboard for office management, utilizing ReactJS, Firebase, NodeJS, HTML5, CSS, and Bootstrap.Implemented user authentication and authorization features, created comprehensive modules for office management, and ensured efficient CRUD operations for employee data. Collaborated with the team on the Smart Home project to develop a secure and user-friendly dashboard for home management, utilizing AngularJS, Firebase, NodeJS, HTML5, and SCSS.",
      link: "",
    },
    {
      id: 5,
      position: "Software Developer Intern",
      company: "Textron",
      year: "06/2022 – 08/2022",
      details:
        "Developed a Request Tracker project for my final year MTECH project and internship, utilizing C#, HTML, CSS, and SQL Server. Designed and implemented a system for tracking requests, featuring a user-friendly interface using HTML and CSS, and developed the back-end functionality in C#. Utilized SQL Server for efficient database management, conducted testing and collaborated with the project team and internship supervisor to refine specifications and implement necessary enhancements and bug fixes.",
      link: "https://www.textron.com/",
    },
  ];

  return (
    <div name="experience" className=" w-full bg-black text-white pt-10">
      <div className="md:px-20 px-10 mx-auto flex flex-col justify-center w-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6 text-gray-500">
            Places where I implemented my knowledge and learned new
            Technologies.
          </p>
        </div>

        <div className="sm:px-0">
          {experiences.map(
            ({ id, position, company, year, place, details, link }) => (
              <div
                key={id}
                className="shadow-lg shadow-slate-400 my-5 p-3 rounded-lg"
              >
                <div className="rounded-md text-2xl text-white-600 font-bold">
                  {position}
                </div>
                <div className="rounded-md text-xl text-white-500 pb-2">
                  {company}
                </div>
                <div className="rounded-md text-sm text-white-400">{year}</div>
                <div className="rounded-md text-sm text-white-400">{place}</div>
                <div className="rounded-md text-white-600 pt-4">{details}</div>
                <div>
                  <a href={link} target="_blank">
                    <span className="group-hover:rotate-90 duration-300">
                      <MdOutlineArrowCircleRight
                        size={50}
                        className="ml-1 mt-5"
                      />
                    </span>
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
