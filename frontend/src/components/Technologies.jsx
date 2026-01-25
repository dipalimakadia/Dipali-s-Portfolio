import React from "react";

const Technologies = () => {
  const techs = [
    {
      id: 1,
      src: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
      title: "HTML",
      style: "shadow-sky-400",
    },
    {
      id: 2,
      src: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
      title: "CSS",
      style: "shadow-sky-400",
    },
    {
      id: 3,
      src: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
      title: "Javascript",
      style: "shadow-sky-400",
    },
    {
      id: 4,
      src: "https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg",
      title: "jQuery",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
      title: "React",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
      title: "Node",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: "https://www.vectorlogo.zone/logos/d3js/d3js-icon.svg",
      title: "D3",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: "https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg",
      title: "Vue",
      style: "shadow-sky-400",
    },
    {
      id: 9,
      src: "https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg",
      title: "SASS",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg",
      title: "Bootstrap",
      style: "shadow-sky-400",
    },
    {
      id: 11,
      src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 12,
      src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      title: "Firebase",
      style: "shadow-sky-400",
    },
    {
      id: 13,
      src: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
      title: "MongoDB",
      style: "shadow-sky-400",
    },
    {
      id: 14,
      src: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
      title: "Java",
      style: "shadow-sky-400",
    },
    {
      id: 15,
      src: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
      title: "python",
      style: "shadow-sky-400",
    },
    {
      id: 16,
      src: "https://www.vectorlogo.zone/logos/angular/angular-icon.svg",
      title: "Angular",
      style: "shadow-sky-400",
    },
    {
      id: 17,
      src: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg",
      title: "JIRA",
      style: "shadow-sky-400",
    },
    {
      id: 18,
      src: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
      title: "Github",
      style: "shadow-sky-400",
    },
  ];

  return (
    <div name="technologies" className="w-full bg-black text-white pt-10">
      <div className="md:px-20 px-10 mx-auto flex flex-col justify-center w-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Technologies
          </p>
          <p className="py-6 text-gray-500">
            These are the technologies I've worked in
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
