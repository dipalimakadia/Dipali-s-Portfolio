import React from "react";
import Reveal from "./Reveal";
import { projects } from "../data/projects";

const Project = () => {
  return (
    <div name="project" className="w-full">
      <div className="section">
        <Reveal>
          <p className="eyebrow"><b>04</b> / Work</p>
          <h3 className="section-title">Projects</h3>
          <p className="muted pt-4">Projects that I worked on</p>
        </Reveal>

        <div className="mt-12" style={{ borderTop: "1px solid var(--border)" }}>
          {projects.map(({ id, projectname, description }) => (
            <Reveal
              key={id}
              className="group grid md:grid-cols-[4rem_1fr_2fr] gap-x-8 gap-y-3 py-9 border-b [border-color:var(--border)]"
            >
              <span className="font-mono text-sm muted group-hover:text-[var(--accent)] transition-colors">
                {String(id).padStart(2, "0")}
              </span>
              <h4 className="font-display text-2xl font-medium leading-snug">{projectname}</h4>
              <p className="muted leading-relaxed">{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
