import React from "react";

const Project = () => {
  const project = [
    {
      id: 1,
      projectname: "Restuarant Customer Chat, AI Chatbot",
      description: "Built a robust query-based restaurant information retrieval app, using React, Python and FastAPI, ensuring seamless user interactions. Established a backend system that interfaces with the OpenAI API, extracting details from the restaurant's menu. Integrated Langchain which enhanced the app's ability to understand and respond to user queries effectively. Employed a version-controlled development workflow using Git and GitHub. Set up deployment on AWS services which optimized app performance and scalability.",
    },
    {
      id: 2,
      projectname: "Personal Portfolio Website",
      description: "Designed and developed a personal website showcasing information which includes education, work experience, projects, skills, and contact details. Used ReactJS to implement dynamic elements, coupled with TailwindCSS for seamless styling and visual enhancements, resulting in an intuitive and user-friendly interface with interactive buttons and animations. Implemented version control and collaboration using Git and GitHub.",
    },
    {
      id: 3,
      projectname: "Task Management",
      description: "Engineered a dynamic web application utilizing cutting-edge technologies including VueJS, NodeJS, MongoDB, Express, HTML, and CSS. Implemented a robust task distribution system employing specialized user assignment logic. Tasks within a project were intelligently allocated to dedicated users, ensuring optimal resource utilization and streamlined project progress. Employed Postman for API testing and validation. Leveraged JSON for data interchange, facilitating smooth communication between frontend and backend components.",
    },
    {
      id: 4,
      projectname: "Security Algorithms",
      description: "Designed and implemented security algorithms, such as AES and DES, in C/C++ and Java as part of a college project, showcasing proficiency in cryptography and programming skills.",
    },
  ];

  return (
    <div
      name="project"
      className="bg-black w-full text-white pt-10"
    >
      <div className="md:px-20 px-10 mx-auto flex flex-col justify-center w-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Recent Projects
          </p>
          <p className="py-6 text-gray-500">Projects that I worked on</p>
        </div>

        <div className="">
          {project.map(({ id, projectname, description }) => (
            <div key={id} className="shadow-md  shadow-gray-500 py-5 px-5 mb-3 rounded-lg">
              <div className="flex">
                <div className='rounded-md font-bold  text-xl text-white-600 duration-200 hover:scale-90'>
                  {projectname}
                </div>
              </div>
              <div className="flex py-2">
                <div className=" text-white-600">
                  {description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
