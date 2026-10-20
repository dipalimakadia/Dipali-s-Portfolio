import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";
import AccentPicker from "./AccentPicker";

const links = [
  { id: 1, link: "home" },
  { id: 2, link: "about" },
  { id: 3, link: "education" },
  { id: 4, link: "experience" },
  { id: 5, link: "project" },
  { id: 6, link: "technologies" },
  { id: 7, link: "contact" },
];

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", dark ? "#151310" : "#f4efe6");
  }, [dark]);

  useEffect(() => {
    const toggle = () => setDark((d) => !d);
    window.addEventListener("toggle-theme", toggle);
    return () => window.removeEventListener("toggle-theme", toggle);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "color-mix(in srgb, var(--bg) 82%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
      }}
    >
      <nav className="flex justify-between items-center w-full max-w-6xl mx-auto px-6 md:px-16 py-4">
        <h1 className="font-display text-xl font-medium tracking-tight whitespace-nowrap">
          Dipali <span className="accent-em">Makadia</span>
        </h1>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map(({ id, link }) => (
            <li key={id}>
              <Link
                to={link}
                smooth
                spy
                offset={-90}
                duration={500}
                activeClass="!text-[var(--accent)]"
                className="block px-3 py-2 cursor-pointer lowercase font-mono text-xs muted hover:text-[var(--fg)] transition"
              >
                {link === "project" ? "projects" : link}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <AccentPicker className="hidden lg:flex" />
          <button
            onClick={() => window.dispatchEvent(new Event("open-palette"))}
            aria-label="Open command palette"
            className="hidden xl:flex items-center whitespace-nowrap text-xs font-mono muted px-3 h-9 rounded-full hover:text-[var(--fg)]"
            style={{ border: "1px solid var(--border)" }}
          >
            Ctrl K
          </button>
          <button
            onClick={() => setDark(!dark)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 rounded-full grid place-items-center hover:text-[var(--accent)]"
            style={{ border: "1px solid var(--border)" }}
          >
            {dark ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>
          <button
            onClick={() => setNav(!nav)}
            aria-label="Toggle menu"
            className="lg:hidden w-9 h-9 grid place-items-center z-[70]"
          >
            {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {nav && (
        <ul
          className="lg:hidden fixed inset-0 z-[65] flex flex-col justify-center items-center"
          style={{ background: "var(--bg)" }}
        >
          <li className="pb-6">
            <AccentPicker />
          </li>
          {links.map(({ id, link }) => (
            <li key={id} className="py-3">
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                offset={-90}
                duration={500}
                className="font-display text-4xl capitalize cursor-pointer hover:text-[var(--accent)]"
              >
                {link === "project" ? "projects" : link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default NavBar;
