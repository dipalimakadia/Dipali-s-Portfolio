import React from "react";

const Project = () => {
  const project = [
    {
      id: 1,
      projectname: "Restuarant Customer Chat, AI Chatbot",
      description: "Defined a query-based restaurant information retrieval app, using React, Python, and FastAPI, ensuring smooth user interactions and Git and GitHub as a Version-controlled tool. Established a backend system that interfaces with the OpenAI API, extracting details from the restaurant's menu. Integrated Langchain which has the app's ability to understand and respond to user queries effectively. Set up deployment on AWS services which optimized app performance and scalability.",
    },
    {
      id: 2,
      projectname: "Personal Portfolio Website",
      description: "Designed and developed a personal website showing information that includes education, work experience, projects, skills, and contact details. ReactJS for dynamic elements, Tailwind CSS for styling, and GIT as a version control tool.",
    },
    {
      id: 3,
      projectname: "Task Management",
      description: "A dynamic and user-friendly web application made using technologies including VueJS, JSON, NodeJS, MongoDB, Express, HTML, CSS and Postman for API testing and validation. In a task distribution system, users, employees, and projects are uniquely linked with each other.",
    },
    {
      id: 4,
      projectname: "Security Algorithms",
      description: "Generated security algorithms, such as RSA and DES, in C/C++ and Java as part of a college projects.",
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
