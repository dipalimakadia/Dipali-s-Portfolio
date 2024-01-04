import React from "react";
import { MdOutlineArrowCircleRight } from "react-icons/md";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Graduate Student Assistant at Graduate Resoruce Center",
      company: "California State University, Los Angeles",
      year: "03/2022 – present",
      details:
        "Conduct virtual meetings on Zoom to communicate with individual students and provide them with feedback. Review the students' theses, which are submitted in both MS Word and PDF formats, and give feedback via email. Offer guidance on referencing styles, citations, and bibliography, and assist in rectifying any formatting errors.",
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
        "Worked on the O2 project, utilizing HTML5, CSS, SCSS, JIRA, NodeJS, ES6, JavaScript, JQuery, GIT, and Adobe Target to develop engaging and responsive front-end components. Worked with cross-functional teams and followed industry best practices to ensure effective integration and functional code. Reviewed and tested code for easily observable logic errors, and bugs, and ensured best practices were adhered to; standardized and optimized code as necessary. Stored code in a designated source control repository to assure the safety and recoverability of production and pre-release code.",
      otherprojectdetails: "",
      link: "https://www.cognizant.com/in/en",
    },
    {
      id: 3,
      position: "Associate Interface Developer",
      company: "Digitas",
      year: "05/2019 – 05/2021",
      details:
        "Worked on DMI project, utilizing HTML5, CSS3, Highcharts, D3, GIT, Handlebars, NPM, JavaScript, ES6, jQuery, Bootstrap, NodeJS, and ReactJS to develop visually appealing and interactive graphs and front-end components. Followed best practices for responsive designs and integrated Highcharts for data visualization capabilities. Implemented version control with GIT, utilized Handlebars for HTML components, built a single-page app containing a dashboard, graphs, roadmap, and calendars, conducted testing, and collaborated closely with designers and back-end developers to keep up the best quality of the project. Worked with cross-functional teams to ensure data integration and system efficiencies in terms of analytics, visualization, and reporting. Remedied serious issues and investigated symptoms of issues to determine causality. Participated in daily Scrum team meetings with developers and product owners to discuss project goals and statuses. Participated in bi-weekly refinement, review, and retro meetings with the functional team to set two-week development goals, discussed development difficulties, and reviewed the completion of previous goals.",
      otherprojectdetails:
        "Worked on Formula1 Project and have used Google Analytics and Jquery implemented tracking code, and set up data filters. Tracked campaigns with the URL Builder and Basic Reports. Used Google Cloud and Nodejs for the research and new concepts.",
      link: "https://www.digitas.com/en-us",
    },
    {
      id: 4,
      position: "Senior Software Developer",
      company: "Motes & Bots Technologies",
      year: "06/2018 – 02/2019",
      details:
        "Lead the team on the Smart Office project to develop a secure and user-friendly dashboard for office management, utilizing ReactJS, Firebase, NodeJS, HTML5, CSS, Bootstrap, and AWS. Implemented user authentication and authorization features, created comprehensive modules for office management, and ensured efficient CRUD operations for employee data. Build and maintain highly scalable and secure web applications, services, and APIs. Lead & mentor by example to increase quality through improved code architecture, implementing maintainability best practices, and proper automated testing. Provided emergency support to technical support staff if problems cannot be resolved without expert expertise. Participated in ongoing estimation, design, development, patching, updating, and sunsetting of products through the use of the Agile process. Performed other related duties and projects as business needs require at the direction of management.",
      otherprojectdetails: "Collaborated with the team on the Smart Home project to create a safe and easy-to-use dashboard for home management, using the latest technologies like Angular, .NET, Web API, EF Core, and SQL Server. Developed functional and aesthetic aspects of websites. Created interfaces to interact with and manage databases. Created a/b testing, unit, regression, and end-to-end integration tests to ensure applications function according to requirements. Collaborated with teams in the deployment process. Designed and implemented platform-level technical solutions for product features on a day-to-day basis. Evaluated and developed a deeper understanding of new technologies, and owned the full lifecycle of implementation from proposal to deployment. Researched new technology and trends.",
      link: "",
    },
    {
      id: 5,
      position: "Software Developer Intern",
      company: "Textron",
      year: "06/2022 – 08/2022",
      details:
        "Developed a Request Tracker project for my final year of MTECH and internship, utilizing C#, .NET Framework, HTML, CSS, and MYSQL. As a business requirement, I have implemented a system for tracking requests, featuring a user-friendly interface using HTML and CSS, and developed the back-end functionality in C#. Used SQL Server for efficient database management, conducted testing and collaborated with the project team and internship supervisor to refine specifications and implement necessary enhancements and bug fixes. Ensured consistency, accuracy, and compliance with required standards by performing quality audits and code reviews. Kept abreast of technology upgrades and advancements, and provided recommendations to improve process efficiencies.",
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
