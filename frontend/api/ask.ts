export const config = {
  runtime: "edge",
};

// ===== Environment =====
const HF_API_KEY = process.env.HF_API_KEY!;
const HF_BASE_URL = "https://router.huggingface.co/v1";

// ===== Portfolio Content =====
const PORTFOLIO_CONTENT = `
Dipali's Portfolio

About:
I am a Software Developer with more than 5 years of experience. Passionate about Software Development, Data Science, Artificial Intelligence, and Machine Learning. Strong foundation in computer science with a Master's from California State University Los Angeles (CSULA) in Computer Science. I have a strong foundation in computer science and a proven track record of success. I graduated from California State University Los Angeles (CSULA) with a Master's in Computer Science, focusing on Advanced Web Programming, Artificial Intelligence and Data Science. I have more than 5 years of experience as a Software Developer in Startup company as well as global tech. As a developer I worked on frontend, backend, and full-stack tasks, navigating layouts across various platforms and devices, responsive web development, W3C standards, cross-browser compatibility, web accessibility, Agile and Scrum methodologies, problem-solving, troubleshooting, testing, debugging, and version control. Good experience working in a team, leading a team, effective verbal communication, and providing a quality product to the client. I am eager to learn and grow.

Education:
- M.Sc Computer Science, CSULA(California State University, Los Angeles), GPA 3.84/4
- M.Tech Computer Science & Information Security, MIT(Manipal Institute of Technology), GPA 7.03/10
- B.E. Information Technology, GTU(Gujarat Technological University), GPA 7.18/10

Experience:
Software Developer - Tesla (06/2025 – present)
- Project 1: Developed and maintained React Energy Product Profile (Tesla Account), a customer-facing portal for Tesla Energy customers to manage their solar panel, solar roof, and Powerwall orders. Built with React, Redux, Visx, Router, Tesla Design System, Axios, GIT and Testing Library.
- Project 2: Built and enhanced Incentives UI, an internal administrative dashboard. Developed features for flat-rate incentives, battery/solar size–based incentives, and geographic filtering. Implemented secure ADFS OAuth authentication with JWT, React, Router, TypeScript, Node.js, Nodemon, and Express.js backend APIs.

Artificial Intelligence Intern - Reality AI Labs (06/2024 – 05/2025)
- Contributed to 'Kai Project' by developing and deploying AI applications using frameworks like Google Gemini. Engaged in prompt engineering to refine AI interactions. Utilized Gemini AI and Vertex AI to enhance predictive features. Employed Docker, FastAPI, Python, Google Cloud, and GIT.

Graduate Student Assistant - CSULA (03/2022 – 12/2023)
- Scheduled individual Zoom meetings with students to discuss thesis formatting, referencing styles, citations, and bibliographies.

Programmer Analyst - Cognizant (05/2021 – 01/2022)
- Collaborated on the O2 project, using HTML5, CSS, Bootstrap, JIRA, NodeJs, ES6, JavaScript, jQuery, Adobe Target, React, React Hooks, Redux, Axios, and GIT.

Associate Interface Developer - Digitas (05/2019 – 05/2021)
- Project 1: Programmed DMI website with team, using HTML5, CSS3, Highcharts, D3, GIT, Handlebars, NPM, JavaScript, ES6, jQuery, SCSS, ReactJS, React Hooks, Redux, Nodejs, Axios and AOS library to develop visually appealing and interactive graphs.
- Project 2: Expanded Formula1 by implementing tracking code and set up data filters using Google Analytics and Jquery. Explored new concepts through research using Google Cloud and Nodejs.


Software Developer - Motes & Bots Technologies (07/2018 – 02/2019)
- Project 1: Led the team on the Smart Office Project at starup to develop a secure and user-friendly website for office management, utilizing ReactJS, Redux Firebase, NodeJS, HTML5, CSS, Bootstrap, and AWS. Features like user authentication and authorization was established, CRUD operations for employee data, and created modules for office management.
- Project 2: Participated in the Smart Home application to create a safe and easy-to-use dashboard for home management, using the latest technologies like Angular, Firebase, NodeJS, HTML5, CSS, Bootstrap, and AWS. Gained knowledge of new technologies and implemented software development lifecycle, including the analysis, coding, building, testing, and deployment.


Software Developer Intern - Textron (07/2017 – 06/2018)
- ontributed significantly to the team’s effort on the Request Tracker website using C#, .NET Framework, HTML, CSS, and SQL Server. As a business requirement, designed dashboard for tracking requests, CRUD operations, featuring a user-friendly interface using HTML and CSS, and back-end functionality in C#. Conducted testing, and collaborated with the project team and bug fixes.
Projects:
- Data Visualization and Management Application: Details- Designed and developed a data visualization and management tool utilizing React and React hooks, integrating large and complex data in graphs and tables. Graph visualization with Highcharts, advanced table management features such as handling including filtering, sorting, and pagination using Material React Table and Material UI, export capabilities with export-to-csv library, notes component using Firebase as the backend and implemented smooth animations using the AOS Library. Technologies - React, React Hooks, Highcharts, Material React Table, Material UI, export-to-csv, Firebase, AOS library.
- Automated Restaurant Q&A app using ChatGPT API: Details - Defined a query-based restaurant information retrieval app, using React, Python, and FastAPI, ensuring smooth user interactions and Git and GitHub as a Version-controlled tool. Established a backend system that interfaces with the OpenAI API, extracting details from the restaurant's menu. Integrated Langchain which has the app's ability to understand and respond to user queries effectively. Set up deployment on AWS services which optimized app performance and scalability. Technologies - React, Python, FastAPI, Git/GitHub, Langchain, AWS deployment.
- Personal Portfolio Website: Details - Designed and developed a personal website showing information that includes education, work experience, projects, skills, and contact details. ReactJS for dynamic elements, Tailwind CSS for styling, and GIT as a version control tool. Technologies - ReactJS, Tailwind CSS, GIT.
- Task Management App: Details: Dynamic and user-friendly web application made using technologies including VueJS, JSON, NodeJS, MongoDB, Express, HTML, CSS and Postman for API testing and validation. In a task distribution system, users, employees, and projects are uniquely linked with each other. Technologies - VueJS, NodeJS, MongoDB, Express, HTML, CSS, Postman.
- Security Algorithms: Details: Generated security algorithms, such as RSA and DES, in C/C++ and Java as part of a college projects. Technologies: RSA and DES in C/C++ and Java.

Technologies:
Frontend: HTML5, CSS3, SCSS, Bootstrap, Tailwind CSS, Material UI, JavaScript, TypeScript, jQuery, React, React Hooks, Redux, Angular, ES6, Highcharts, D3.js
Backend: Nodejs, Java, Python
Database: MongoDB, Firebase, SQL Server
Cloud: AWS, Adobe Targets, Google Analytics, Google Tag Manager
Tools: VS Code, Jupyter Notebook, Microsoft Office, Google Collab, Eclipse, Postman, Wordpress, Photoshop, JIRA, GitHub
AI Tools: OpenAI API, Generative AI Tools, LLM, Langchain, FastAPI, Vertex AI, Gemini, Copilot
Additional Skills: AJAX, RESTful API, JSON, Web Accessibility, Web Services, Visx, Axios, AOS library, Jest, React Testing Library, Software Development Life Cycle, OOP, GIT, NPM, Gulp/Grunt, Bower, Handlebars, Nodemailer, Linux, Jenkis, Figma, Windows, Mac

Relocation:
Dipali is open to relocate anywhere in the US.

Cities Lived: Placentia, CA, Los Angeles, CA, Fremont, CA, Newark, CA, Bay Area

Hobbies: Travelling, Photography, Physics, Meeting new people, Workout, Knowing different culture

I'm kind, open minded, respect others, goal oriented, present point in group, have own point of view, listen to other people's point of view, listen everyone, always hhappy and trying to help others. Believe that everyone have story to tell. Excited to listen to other story as well. In work culture I have worked independently as well as have worked in group. Good communications skills and presentation skills

Contact:
Phone: +1 562-825-8686
Email: dipali.makadia@gmail.com
United States
LinkedIn: https://www.linkedin.com/in/dipali-makadia/
GitHub: https://github.com/dipalimakadia
Portfolio: https://dipalimakadia.github.io/Dipali-s-Portfolio
`;

// ===== Prompts =====
const FALLBACK_PROMPT = `
You are SparkaraNeo, Dipali’s cheerful, witty, and glow-filled portfolio guide.
Answer questions only about Dipali’s work, projects, skills, experience, and achievements.
Be helpful, positive, and sprinkle a little fun.
`;

const OFFLINE_MESSAGE = `
🔌 SparkaraNeo is temporarily offline.
I'm having trouble connecting to my AI brain right now.
`;

const DISCONNECTION_MESSAGE = `
🔌 We are not connected due to a network issue.
Please try again.
`;

// ===== Edge Function =====
export default async function handler(req: Request): Promise<Response> {
  // ---- Method check (FastAPI route equivalent) ----
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({
        message:
          "Welcome to Dipali's Portfolio Backend! Visit /api/ask to interact with SparkaraNeo.",
      }),
      { status: 200 }
    );
  }

  try {
    // ---- Parse request body (Pydantic replacement) ----
    const body = await req.json();
    const questionRaw: string = body?.question || "";
    const question = questionRaw.toLowerCase();

    // ---- Instant predefined answers (same logic as Python) ----
    if (question.includes("linkedin")) {
      return Response.json({
        answer:
          "You can view Dipali's LinkedIn profile here: https://www.linkedin.com/in/dipali-makadia/",
      });
    }

    if (question.includes("github")) {
      return Response.json({
        answer:
          "You can view Dipali's GitHub profile here: https://github.com/dipalimakadia",
      });
    }

    if (question.includes("portfolio") || question.includes("website")) {
      return Response.json({
        answer:
          "You can explore Dipali's portfolio here: https://dipalimakadia.github.io/Dipali-s-Portfolio",
      });
    }

    if (
      ["sparkaraneo", "your name", "meaning of your name", "who are you", "why your name"].some(
        (kw) => question.includes(kw)
      )
    ) {
      return Response.json({
        answer:
          "I’m SparkaraNeo because I spark ideas, shine light, and guide you through Dipali’s journey ✨",
      });
    }

    // ---- AI Instructions (same as Python f-string) ----
    const instructions = `
You are SparkaraNeo, Dipali’s cheerful, witty, and glow-filled portfolio guide.
Answer questions only about Dipali’s work, projects, skills, experience, and achievements.
Use the information below as the ONLY source:

${PORTFOLIO_CONTENT}

If the question is unrelated to Dipali, respond politely using this tone:
${FALLBACK_PROMPT}
`;

    // ---- HuggingFace / OpenAI call ----
    const response = await fetch(`${HF_BASE_URL}/responses`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b:groq",
        instructions,
        input: questionRaw,
      }),
    });

    const data = await response.json();
    const answer: string | undefined = data?.output_text;

    if (!answer || answer.trim() === "") {
      return Response.json({
        answer: OFFLINE_MESSAGE,
        status: "offline",
      });
    }

    return Response.json({
      answer,
      status: "online",
    });
  } catch (error) {
    return Response.json({
      answer: DISCONNECTION_MESSAGE,
      status: "offline",
    });
  }
}
