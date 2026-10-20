import React from "react";
import Reveal from "./Reveal";

const certifications = [
  { name: "A Hands-On Introduction to Hugging Face for Developers", date: "Jan 2026" },
  { name: "Generative AI: Introduction to Large Language Models", date: "Apr 2024" },
  { name: "Prompt Engineering: How to Talk to the AIs", date: "Apr 2024" },
  { name: "Introduction to Prompt Engineering for Generative AI", date: "Dec 2023" },
  { name: "Programming Foundations: Data Structures", date: "Sep 2023" },
  { name: "Machine Learning with Python: Foundations", date: "Jul 2023" },
  { name: "Python Essential Training", date: "Jun 2023" },
  { name: "JavaScript Essential Training", date: "Nov 2020" },
];

const Education = () => {
  const education = [
    {
      id: 1,
      uniname: "California State University, Los Angeles",
      degree: "M.Sc in Computer Science",
      GPA: "3.84/4",
    },
    {
      id: 2,
      uniname: "Manipal Institute of Technology",
      degree: "M.Tech in Computer Science & Information Security",
      GPA: "7.03/10",
    },
    {
      id: 3,
      uniname: "Gujarat Technological University",
      degree: "B.E. in Information Technology",
      GPA: "7.18/10",
    },
  ];

  return (
    <div name="education" className="w-full">
      <div className="section">
        <Reveal>
          <p className="eyebrow"><b>02</b> / Learning</p>
          <h3 className="section-title">Education</h3>
          <p className="muted pt-4">Universities from where I gain knowledge</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
          {education.map(({ id, uniname, degree, GPA }, i) => (
            <Reveal key={id} delay={i * 120} className="card lift p-7 flex flex-col">
              <span className="font-display text-5xl accent-em">{String(id).padStart(2, "0")}</span>
              <h4 className="font-display text-xl font-medium leading-snug mt-5">{degree}</h4>
              <p className="mt-4 text-sm">
                <span className="muted">University: </span>
                {uniname}
              </p>
              <p className="mt-auto pt-6 font-mono text-sm">
                <span className="muted">GPA: </span>
                <span style={{ color: "var(--accent)" }}>{GPA}</span>
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <h4 className="font-display text-2xl md:text-3xl font-medium">Certifications</h4>
          <p className="muted pt-2 text-sm">Certificates of completion from LinkedIn Learning</p>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {certifications.map(({ name, date }) => (
              <a
                key={name}
                href="https://www.linkedin.com/in/dipali-makadia/details/certifications/"
                target="_blank"
                rel="noreferrer"
                className="card lift p-5 flex items-start justify-between gap-4"
              >
                <span className="leading-snug">{name}</span>
                <span className="font-mono text-xs muted whitespace-nowrap pt-1">{date}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Education;
