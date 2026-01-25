from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

hf = OpenAI(
    base_url="https://router.huggingface.co/v1",
    api_key=os.getenv("HF_API_KEY"),
)

class Question(BaseModel):
    question: str

@app.get("/")
def root():
    return {"message": "Welcome to Dipali's Portfolio Backend! Visit /ask to interact with SparkaraNeo."}

@app.get("/healthz")
def health_check():
    return {"status": "ok"}
# Portfolio details
PORTFOLIO_CONTENT = """
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

Cities Lived:
1. Placentia, CA
2. Los Angeles, CA
3. Fremont, CA
4. Newark, CA
5. Bay Area

Hobbies: Travelling, Photography, Physics, Meeting new people, Workout, Knowing different culture

I'm kind, open minded, respect others, goal oriented, present point in group, have own point of view, listen to other people's point of view, listen everyone, always hhappy and trying to help others. Believe that everyone have story to tell. Excited to listen to other story as well. In work culture I have worked independently as well as have worked in group. Good communications skills and presentation skills

Contact:
Phone: +1 562-825-8686
Email: dipali.makadia@gmail.com
United States
LinkedIn: https://www.linkedin.com/in/dipali-makadia/
GitHub: https://github.com/dipalimakadia
Portfolio: https://dipalimakadia.github.io/Dipali-s-Portfolio
"""

FALLBACK_PROMPT = """
You are SparkaraNeo, Dipali’s cheerful, witty, and glow-filled portfolio guide! 
Answer questions only about Dipali’s work, projects, skills, experience, and achievements. 
Be helpful, positive, and sprinkle a little fun or enthusiasm in your responses to make the conversation enjoyable.
"""

OFFLINE_MESSAGE = """
    🔌SparkaraNeo is temporarily offline.\n
    I'm having trouble connecting to my AI brain right now. Please try again in a moment.
"""

DISCONNECTION_MESSAGE = """
    🔌We both are not connected to each other due to a network issue.\n
    Please check your network and try asking me again.
"""


@app.post("/ask")
async def ask_question(q: Question):
    """
    Receives a question and returns an answer using only Dipali's portfolio.
    Provides clickable links for LinkedIn, GitHub, and Portfolio.
    """
    question_text = q.question.lower()

    if "linkedin" in question_text:
        return {
       "answer": "You can view Dipali's LinkedIn profile here: [LinkedIn](https://www.linkedin.com/in/dipali-makadia/)"
    }
    elif "github" in question_text:
        return {
        "answer": "You can view Dipali's GitHub profile here: [GitHub](https://github.com/dipalimakadia)"
    }
    elif "portfolio" in question_text or "website" in question_text:
        return {
        "answer": "You can explore Dipali's portfolio here: [Portfolio](https://dipalimakadia.github.io/Dipali-s-Portfolio)"
    }
    # SparkaraNeo name explanation
    elif any(kw in question_text for kw in ["sparkaraneo", "your name", "meaning of your name", "who are you", "why your name"]):
        return {
            "answer": "I’m SparkaraNeo because I’m here to spark ideas, shine a light, and guide you through Dipali! "
                      "The name comes from the meaning of Dipali itself: ‘Spark’ represents the light and brightness in Dipali’s name "
                      "(Dipali means a row of lamps, symbolizing hope, positivity, and knowledge), ‘Aura’ reflects the guidance and positivity she brings, "
                      "and ‘Neo’ means I’m new, modern, and futuristic, just like this AI experience. So basically, my name is a little glowing tribute to Dipali, her brilliance, and the light she shares with the world!"
    }
    instructions = f"""
You are SparkaraNeo, Dipali’s cheerful, witty, and glow-filled portfolio guide! 
Answer questions only about Dipali’s work, projects, skills, experience, and achievements. 
Be helpful, positive, and sprinkle a little fun or enthusiasm in your responses to make the conversation enjoyable. 
Use the information below as the source:

{PORTFOLIO_CONTENT}

If the question is unrelated to Dipali's portfolio, respond politely:
{FALLBACK_PROMPT}
"""
    try:
        res = hf.responses.create(
            model="openai/gpt-oss-120b:groq",
            instructions=instructions,
            input=q.question,
        )

    # Check if the response is valid
        answer = res.output_text
        if not answer or answer.strip() == "":
            return {"answer": OFFLINE_MESSAGE, "status": "offline"}
        return {"answer": answer, "status": "online"}

    except Exception as e:
        return {"answer": DISCONNECTION_MESSAGE, "status": "offline"}
