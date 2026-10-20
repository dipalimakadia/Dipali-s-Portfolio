import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiJquery, SiReact, SiRedux, SiReactrouter,
  SiD3, SiVuedotjs, SiAngular, SiSass, SiBootstrap, SiTailwindcss, SiMui, SiHandlebarsdotjs,
  SiAxios, SiNodedotjs, SiExpress, SiNodemon, SiPython, SiFastapi, SiDotnet, SiCplusplus,
  SiMongodb, SiFirebase, SiJsonwebtokens, SiJson, SiGooglecloud, SiDocker, SiJenkins,
  SiLinux, SiGit, SiGithub, SiNpm, SiGulp, SiGooglegemini, SiLangchain, SiGithubcopilot,
  SiCursor, SiClaude, SiGraphql, SiApollographql, SiRedis, SiJest, SiTestinglibrary, SiPostman, SiJira, SiConfluence, SiFigma,
  SiJupyter, SiGooglecolab, SiEclipseide, SiWordpress, SiGoogleanalytics, SiGoogletagmanager,
} from "react-icons/si";
import { FaJava, FaAws, FaDatabase } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { RiOpenaiFill } from "react-icons/ri";
import { TbChartLine, TbBrandAdobePhotoshop } from "react-icons/tb";

// Everything mentioned in the experience, projects and skills content.
// Icons are optional; items without one show their name only.
export const techGroups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: SiHtml5 }, { name: "CSS3", icon: SiCss },
      { name: "JavaScript (ES6)", icon: SiJavascript }, { name: "TypeScript", icon: SiTypescript },
      { name: "jQuery", icon: SiJquery }, { name: "React", icon: SiReact },
      { name: "React Hooks", icon: SiReact }, { name: "Redux", icon: SiRedux },
      { name: "React Router", icon: SiReactrouter }, { name: "Vue", icon: SiVuedotjs },
      { name: "Angular", icon: SiAngular }, { name: "SASS / SCSS", icon: SiSass },
      { name: "Bootstrap", icon: SiBootstrap }, { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Material UI", icon: SiMui }, { name: "Handlebars", icon: SiHandlebarsdotjs },
      { name: "Axios", icon: SiAxios }, { name: "AOS" },
      { name: "D3.js", icon: SiD3 }, { name: "Highcharts", icon: TbChartLine },
      { name: "Visx", icon: TbChartLine },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      { name: "Node.js", icon: SiNodedotjs }, { name: "Express.js", icon: SiExpress },
      { name: "Nodemon", icon: SiNodemon }, { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi }, { name: "Java", icon: FaJava },
      { name: "C#", icon: SiDotnet }, { name: ".NET Framework", icon: SiDotnet },
      { name: "C / C++", icon: SiCplusplus }, { name: "SQL Server", icon: FaDatabase },
      { name: "MongoDB", icon: SiMongodb }, { name: "Firebase", icon: SiFirebase },
      { name: "GraphQL", icon: SiGraphql }, { name: "Apollo Client / Server", icon: SiApollographql },
      { name: "Redis", icon: SiRedis }, { name: "REST APIs", icon: SiJson }, { name: "JWT", icon: SiJsonwebtokens },
      { name: "ADFS OAuth", icon: SiJsonwebtokens },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: FaAws }, { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Docker", icon: SiDocker }, { name: "Jenkins", icon: SiJenkins },
      { name: "Linux", icon: SiLinux }, { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub }, { name: "NPM", icon: SiNpm },
      { name: "Gulp", icon: SiGulp },
    ],
  },
  {
    title: "AI & LLM",
    items: [
      { name: "Cursor AI", icon: SiCursor }, { name: "GitHub Copilot", icon: SiGithubcopilot },
      { name: "ChatGPT", icon: RiOpenaiFill }, { name: "Claude AI", icon: SiClaude },
      { name: "OpenAI API", icon: RiOpenaiFill }, { name: "Gemini", icon: SiGooglegemini },
      { name: "Vertex AI", icon: SiGooglecloud }, { name: "LangChain", icon: SiLangchain },
      { name: "Prompt Engineering" },
    ],
  },
  {
    title: "Testing, Tools & Analytics",
    items: [
      { name: "Jest", icon: SiJest }, { name: "React Testing Library", icon: SiTestinglibrary },
      { name: "Postman", icon: SiPostman }, { name: "JIRA", icon: SiJira },
      { name: "Confluence", icon: SiConfluence }, { name: "Figma", icon: SiFigma },
      { name: "VS Code", icon: VscVscode }, { name: "Jupyter", icon: SiJupyter },
      { name: "Google Colab", icon: SiGooglecolab }, { name: "Eclipse", icon: SiEclipseide },
      { name: "Photoshop", icon: TbBrandAdobePhotoshop }, { name: "WordPress", icon: SiWordpress },
      { name: "Google Analytics", icon: SiGoogleanalytics }, { name: "Google Tag Manager", icon: SiGoogletagmanager },
      { name: "Adobe Target" },
    ],
  },
];

export const techs = techGroups.flatMap((g) => g.items);
