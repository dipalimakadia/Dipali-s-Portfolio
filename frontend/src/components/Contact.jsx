import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import DipaliResume from '../components/Dipali_Makadia_Resume_SDE.pdf';
import Reveal from "./Reveal";

const Contact = () => {
  const links = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dipali-makadia/", icon: <FaLinkedin size={18} /> },
    { label: "GitHub", href: "https://github.com/dipalimakadia", icon: <FaGithub size={18} /> },
    { label: "Resume", href: DipaliResume, icon: <BsFillPersonLinesFill size={18} />, download: true },
  ];

  return (
    <div name="contact" className="w-full">
      <div className="section">
        <Reveal className="text-center py-10">
          <p className="eyebrow"><b>07</b> / Say hello</p>
          <h3 className="section-title">Contact</h3>
          <p className="muted pt-4">
            If you find my profile suitable, please feel free to reach out me.
          </p>

          <div className="flex flex-col items-center pt-10">
            <p className="font-display text-5xl md:text-7xl font-medium tracking-tight py-2">
              Dipali <span className="accent-em">Makadia</span>
            </p>
            <a href="tel:5628258686" className="font-mono text-xl md:text-2xl py-2 hover:text-[var(--accent)] transition">562-825-8686</a>
            {/* <p className="text-2xl py-5">dipali.makadia@gmail.com</p> */}
            <p className="font-mono text-sm py-2 muted">United States</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-8">
            {links.map(({ label, href, icon, download }) => (
              <a
                key={label}
                className="btn btn-ghost"
                href={href}
                target="_blank"
                rel="noreferrer"
                download={download}
              >
                {icon} {label}
              </a>
            ))}
          </div>
        </Reveal>
        <p className="text-center muted font-mono text-xs pt-16">© {new Date().getFullYear()} Dipali Makadia</p>
      </div>
    </div>
  );
};

export default Contact;
