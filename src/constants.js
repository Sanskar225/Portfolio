// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
// import webverseLogo from './assets/company_logo/webverse_logo.png';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';
import odooLogo from './assets/company_logo/ODOO_LOGO.png';
import CPBYTE_LOGO from './assets/company_logo/CPBYTE_LOGO.png';
// Education Section Logo's
import glaLogo from './assets/education_logo/kiet_logo.png';
import bsaLogo from './assets/education_logo/mps.png';
import vpsLogo from './assets/education_logo/sma_logo.png';

// Project Section Logo's
// import githubdetLogo from './assets/work_logo/github_det.png';
// import csprepLogo from './assets/work_logo/cs_prep.png';
// import movierecLogo from './assets/work_logo/movie_rec.png';
// import taskremLogo from './assets/work_logo/task_rem.png';
// import npmLogo from './assets/work_logo/npm.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: odooLogo,
      role: "FULL STACK DEVELOPER",
      company: "ODOO'2K25",
      date: "10 AUG 2025",
      desc: "A hackathon conducted by ODOO in GANDHINAGAR,GUJARAT in which I participated and developed a project based on MERN stack + ML MODELS + AI RECONGNISATION .",
      skills: [
        "postgreSQL",
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "Machine Learning",
        "AI Recongnisation", 
        "Figma",
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Vercel",
        "Netlify",
      ],
    },
    {
      id: 1,
       img: CPBYTE_LOGO,
      role: "Team Lead - CPByte Portal Development",
      company: "CPBYTES CLUB",
      date: "JUNE 2025 - JULY 2025",
      desc: "Led a team of 5 members to be part of develop and deploy the official website for CPBytes Club using the react,ui/ux. The website features user authentication, attendance section , and a blog section to keep members updated on club activities.",
      skills: [
        "reactJS",
        "NodeJS",
      "FIGMA",
      "vsCode",
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "Netlify",
      ],
    },
    // {
    //   id: 2,
    //   // img: newtonschoolLogo,
    //   role: "",
    //   company: "",
    //   date: "",
    //   desc: "",
    //   skills: [
        
    //   ],
    // },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "KIET group of institution, Ghaziabad",
      date: "Sept 2024 - July 2028",
      grade: "8.33 CGPA",
      desc: "I have completed my Bachelor's degree (B.tech) in Computer Applications from KIET group of institution, Ghaziabad. During my time at KIET, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as .... .",
      degree: "Bachelor of Technology of CSIT - B.tech",
    },
    
    {
      id: 2,
      img: bsaLogo,
      school: "Mascot Public School,Bijnor",
      date: "Apr 2023 - March 2024",
      grade: "85.6%",
      desc: "I completed my class 12 education from Mascot Public School,Bijnor , under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Physical Education.",
      degree: "CBSE(XII) - PCM with Physical Education",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Saint Mera Academy,Moradabad,",
      date: "Apr 2021 - March 2022",
      grade: "90.2%",
      desc: "I completed my class 10 education from Saint Mera Academy,Moradabad, under the CBSE board.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "",
      description:
        "",
      // image: githubdetLogo,
      tags: [],
      github: "",
      webapp: "",
    },
    {
      id: 1,
      title: "",
      description:
        "",
      // image: csprepLogo,
        tags: [],
      github: "",
      webapp: "",
    },
    {
      id: 2,
      title: "",
      description:
        "",
      // image: movierecLogo,
      tags: [],
      github: "",
      webapp: "",
    },
    {
      id: 3,
      title: "",
      description:
        "",
      // image: npmLogo,
      tags: [],
      github: "",
      webapp: "",
    },
    {
      id: 4,
      title: "",
      description:
        "",
      // image: taskremLogo,
      tags: [],
      github: "",
      webapp: "",
    },
    {
      id: 5,
      title: "",
      description:
        "",
      // image: webverLogo,
      tags: [],
      github: "",
      webapp: "",
    },
    {
      id: 6,
      title: "",
      description:
        "",
      // image: cmLogo,
      tags: [],
      github: "",
      webapp: "",
    },
    {
      id: 7,
      title: "",
      description:
        "",
      // image: imagesearchLogo,
      tags: [],
      github: "",
      webapp: "",
    },
    {
      id: 8,
      title: "",
      description:
        "",
      // image: removebgLogo,
      tags: [],
      github: "",
      webapp: "",
    },
  ];  