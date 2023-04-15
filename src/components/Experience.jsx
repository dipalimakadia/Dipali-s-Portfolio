import React from "react";
import { MdOutlineArrowCircleRight } from "react-icons/md";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Graduate Student Assistant at Office of Graduate Studies",
      company: "California State University, Los Angeles",
      year: "03/2022 – present",
      place: "Los Angeles, US",
      details:
        "I am working as a Thesis Reviewer at the Office of Graduate Studies at California State University, Angeles. My work is to review the thesis of the students. Mainly I check the format of the thesis which is in Microsoft word and pdf and email them the correction which they need to do. Meet students over zoom and review their thesis.",
      link: "https://www.calstatela.edu/",
    },
    {
      id: 2,
      position: "Student Assistant at Office of Graduate Studies",
      company: "California State University, Los Angeles",
      year: "06/2022 – 08/2022",
      place: "Los Angeles, US",
      details:
        "I worked as a Student Assistant with the Office of Graduate Studies for the summer. As a student assistant, various tasks are assigned to me like answering phone calls, and emails and also making flyers, spreadsheets, etc.",
      link: "https://www.calstatela.edu/",
    },
    {
      id: 3,
      position: "Programmer Analyst",
      company: "Cognizant",
      year: "05/2021 – 01/2022",
      place: "Pune, India",
      details:
        "O2 Project -- O2 is a cognizant client and the project involves the development of the front end using HTML, CSS, Javascript, JQuery, GIT, and Adobe Target.",
      link: "https://www.cognizant.com/in/en",
    },
    {
      id: 4,
      position: "Associate Interface Developer",
      company: "Digitas",
      year: "05/2019 – 05/2021",
      place: "Mumbai, India",
      details:
        "DMI Project -- The project involves the development of graphs and frontend using HTML5, CSS3, Jquery, Highcharts, GIT, and Handlebars.",
      link: "https://www.digitas.com/en-us",
    },
    {
      id: 5,
      position: "Software Developer",
      company: "Motes & Bots Technologies",
      year: "06/2018 – 02/2019",
      place: "Mumbai, India",
      details:
        "Smart Office Project -- The project involves a dashboard for Office. In which admin can log in and allow to register only those who have rights. It contains various modules like Add Employee, Manage Group, Manage Logs, and Access Rights. It also includes CRUD operations of employees. Technologies Used -ReactJs, Firebase, NodeJS, HTML, CSS, Bootstrap.",
      link: "",
    },
    {
      id: 6,
      position: "Intern",
      company: "Textron",
      year: "06/2022 – 08/2022",
      place: "Bangalore, India",
      details:
        "Request Tracker Project -- The project involves tracking requests so that the current status of a particular request will be known. Technologies used - C#, HTML, CSS, SQL Server. This was my final year MTECH project & I had been part of this project during my internship.",
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
