import React from "react";
import { MdOutlineArrowCircleRight } from "react-icons/md";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Graduate Student Assistant at Graduate Resoruce Center",
      company: "California State University, Los Angeles",
      year: "03/2022 – 12/2023",
      details:
        "Scheduled individual Zoom meetings with students to discuss their thesis formatting, including referencing styles, citations, and bibliographies.",
      otherprojectdetails: "",
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
        "Collaborated on the O2 project, utilizing HTML5, CSS, SCSS, JIRA, NodeJS, ES6, JavaScript, JQuery, GIT, and Adobe Target to develop engaging and responsive front-end components. Worked with cross-functional teams and followed industry standards for effective integration and functional code.",
      otherprojectdetails: "",
      link: "https://www.cognizant.com/in/en",
    },
    {
      id: 3,
      position: "Associate Interface Developer",
      company: "Digitas",
      year: "05/2019 – 05/2021",
      details:
       "Programmed DMI website with team, using HTML5, CSS3, Highcharts, D3, GIT, Handlebars for HTML components, NPM, JavaScript, ES6, jQuery, Bootstrap, NodeJS, and ReactJS to develop visually appealing, interactive graphs and front-end components. Built a single-page app containing a dashboard, graphs, roadmap, and calendars, conducted testing, and involved closely with designers and back-end developers to keep up the best quality of the project. Followed best practices for responsive designs, standardized and optimized code as necessary, and integrated Highcharts for data visualization capabilities.",
      otherprojectdetails:
        "Expanded Formula1 by implementing tracking code and set up data filters using Google Analytics and Jquery. Explored new concepts through research using Google Cloud and Nodejs.",
      link: "https://www.digitas.com/en-us",
    },
    {
      id: 4,
      position: "Senior Software Developer",
      company: "Motes & Bots Technologies",
      year: "07/2018 – 02/2019",
      details:
        "Led the team on the Smart Office Project to develop a secure and user-friendly website for office management, utilizing ReactJS, Firebase, NodeJS, HTML5, CSS, Bootstrap, and AWS. Features like user authentication and authorization was established, CRUD operations for employee data, and created modules for office management.",
      otherprojectdetails: "Participated in the Smart Home application to create a safe and easy-to-use dashboard for home management, using the latest technologies like Angular, Firebase, NodeJS, HTML5, CSS, Bootstrap, and AWS. Gained knowledge of new technologies and implemented software development lifecycle, including the analysis, coding, building, testing, and deployment.",
      link: "",
    },
    {
      id: 5,
      position: "Software Developer Intern",
      company: "Textron",
      year: "07/2017 – 06/2018",
      details:
        "Contributed significantly to the team’s effort on the Request Tracker website using C#, .NET Framework, HTML, CSS, and SQL Server. As a business requirement, designed dashboard for tracking requests, CRUD operations, featuring a user-friendly interface using HTML and CSS, and back-end functionality in C#. Conducted testing, and collaborated with the project team and bug fixes.",
      otherprojectdetails: "",
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
            ({ id, position, company, year, place, details, otherprojectdetails, link }) => (
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
                <div className="rounded-md text-white-600 pt-4">{otherprojectdetails}</div>
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
