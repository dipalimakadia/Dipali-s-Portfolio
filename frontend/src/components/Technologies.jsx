import React from "react";
import Reveal from "./Reveal";
import { techGroups } from "../data/techs";

const Technologies = () => {
  return (
    <div name="technologies" className="w-full">
      <div className="section">
        <Reveal>
          <p className="eyebrow"><b>05</b> / Toolbox</p>
          <h3 className="section-title">Technologies</h3>
          <p className="muted pt-4">These are the technologies I've worked in</p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5 items-start">
          {techGroups.map(({ title, items }, g) => (
            <Reveal
              key={title}
              delay={(g % 2) * 100}
              className={`card p-6 ${g === techGroups.length - 1 ? "md:col-span-2" : ""}`}
            >
              <h4 className="eyebrow mb-5">{title}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map(({ name, icon: Icon }, i) => (
                  <span key={name} style={{ "--i": i }} className="pop chip">
                    {Icon && <Icon size={14} aria-hidden="true" />}
                    {name}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
