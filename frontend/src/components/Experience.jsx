import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
import CompanyLogo from "./CompanyLogo";
import { experiences } from "../data/experiences";

const Experience = () => {
  return (
    <div name="experience" className="w-full">
      <div className="section">
        <Reveal>
          <p className="eyebrow"><b>03</b> / Career</p>
          <h3 className="section-title">Experience</h3>
          <p className="muted pt-4">
            Places where I implemented my knowledge and learned new Technologies.
          </p>
        </Reveal>

        <div className="mt-14 space-y-14">
          {experiences.map(
            (exp) => {
              const { id, position, company, year, details, link, logo } = exp;
              // details is project 1; projectdetail1, projectdetail2, ... follow in order
              const extra = Object.keys(exp)
                .filter((k) => /^projectdetail\d+$/.test(k))
                .sort((a, b) => parseInt(a.slice(13), 10) - parseInt(b.slice(13), 10))
                .map((k) => exp[k]);
              const projects = [details, exp.otherprojectdetails, ...extra].filter(Boolean);
              return (
                <Reveal key={id} className="rail pl-9">
                  <span className="rail-dot" />
                  <div className="flex items-start gap-4">
                    <CompanyLogo name={company} url={link} logo={logo} size={52} />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                        <h4 className="font-display text-2xl md:text-3xl font-medium">{position}</h4>
                        <span className="font-mono text-xs muted">{year}</span>
                      </div>
                      <p className="accent-em text-lg md:text-xl font-display mt-1">{company}</p>
                    </div>
                  </div>

                  <div className={`mt-5 grid gap-4 ${projects.length === 2 ? "lg:grid-cols-2" : ""}`}>
                    {projects.map((text, i) => (
                      <div key={i} className="card lift p-6">
                        {projects.length > 1 && (
                          <p className="eyebrow mb-3"><b>Project {i + 1}</b></p>
                        )}
                        <p className="leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>

                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${company}`}
                      className="inline-flex items-center gap-1 mt-4 text-sm font-medium hover:text-[var(--accent)] transition"
                    >
                      Visit {company} <FiArrowUpRight />
                    </a>
                  )}
                </Reveal>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
