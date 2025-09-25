// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Education Section Logo's
import clgLogo from './assets/education_logo/clglogo.jpg';
import schLogo from './assets/education_logo/schlogo.png';
import ecopreLogo from './assets/education_logo/ecopre.jpg';
import sritLogo from './assets/education_logo/srit.jpg';
import iitkgpLogo from './assets/education_logo/iitkgp.jpg';


// Project Section Logo's
import sensaiLogo from './assets/work_logo/sensai.png';
import chatappLogo from './assets/work_logo/chatapp.jpg';
import urlLogo from './assets/work_logo/url.png';
import shecareLogo from './assets/work_logo/shecare.png';
import imageLogo from './assets/work_logo/imageenhancer.png';
import devdetLogo from './assets/work_logo/devdetector.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
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
  
  export const education = [
    {
      id: 0,
      img: clgLogo,
      school: "Baderia Global Institute of Engineering and Management Jabalpur",
      date: "Sept 2022 - July 2026",
      grade: "7.76 CGPA",
      desc: "Pursuing B.Tech in Computer Science and Engineering with specialization in IoT, Cybersecurity, and Blockchain at BGIEM Jabalpur (2022–2026). Gained strong foundations in programming, data structures, algorithms, and emerging technologies while actively participating in workshops, hackathons, and technical events to enhance problem-solving and practical skills.",
      degree: "Bachelor of Technology - Computer Science and Engineering",
    },
    {
      id: 2,
      img: schLogo,
      school: "Kendriya Vidyalaya COD Jabalpur",
      date: "Apr 2021 - March 2022",
      grade: "72%",
      desc: "I completed my class 12 education from Kendriya Vidyalaya COD Jabalpur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 3,
      img: schLogo,
      school: "Kendriya Vidyalaya COD Jabalpur",
      date: "Apr 2019 - March 2020",
      grade: "81.2%",
      desc: "I completed my class 10 education from Kendriya Vidyalaya COD Jabalpur, under the CBSE board, where I studied Science.",
      degree: "CBSE(X), Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "AI Career Coach",
      description:
        "AI-powered career development platform built with Next.js and Google Gemini AI. SENSAi offers smart resume building, industry insights, mock interviews, and personalized career guidance—all secured with PostgreSQL, Prisma ORM, and modern authentication. Empower your job search with intelligent, data-driven tools.",
      image: sensaiLogo,
      tags: ["Next.js", "React", "Tailwind CSS", "Prisma"],
      github: "https://github.com/Sameeksha200416/Ai-Career-Coach",
      webapp: "ai-career-coach-seven-inky.vercel.app",
    },
    {
      id: 1,
      title: "Chatty App",
      description:
        "Chatty is a full-stack real-time chat application built with the MERN stack, integrating Socket.io for instant messaging, JWT for secure authentication, and Zustand for efficient global state management. It features responsive UI components styled with TailwindCSS and Daisy UI, user presence tracking, secure login/signup flow, and smooth message delivery, providing a seamless communication experience.",
      image: chatappLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript", "Socket.io"],
      github: "https://github.com/Sameeksha200416/FullStack-ChatApp",
      webapp: "https://github.com/Sameeksha200416/FullStack-ChatApp",
    },
    {
      id: 2,
      title: "URL-TRIMR",
      description:
        "URL TRIMR is a modern, full-stack URL shortener built with React, Supabase, PostgreSQL, and TailwindCSS. Instantly shorten long URLs, generate QR codes, and track real-time analytics including clicks, device info, and location. Features a user dashboard for managing links, custom aliases, and secure authentication.",
      image: urlLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript","PostgreSQL", "Supabase"],
      github: "https://github.com/Sameeksha200416/URL-TRIMR",
      webapp: "https://url-trimr-nntu-15qz1sn6m-sameeksha200416s-projects.vercel.app/",
    },
    {
      id: 3,
      title: "SheCare AI",
      description:
        "SheCare AI is a women’s health platform that offers menstrual cycle tracking, PCOS risk assessment, health journaling, and an AI-powered chatbot. Built with React and FastAPI, it provides secure, personalized health management tools.",
      image: shecareLogo,
      tags: ["HTML", "CSS", "JAVASCRIPT", "PYTHON"],
      github: "https://github.com/Sameeksha200416/SheCare-AI",
      webapp: "https://shecare-ai-1-5jqe.onrender.com/",
    },
    {
      id: 4,
      title: "AI-Image-Enhancer",
      description:
        "An AI-powered image enhancer that improves photo quality by sharpening details, restoring colors, reducing noise, and upscaling resolution for a clear, high-definition look.",
      image: imageLogo,
      tags: ["HTML", "CSS","JavaScript","API"],
      github: "https://github.com/Sameeksha200416/AI-Image-Enhancer-V2",
      webapp: "https://ai-image-enhancer-v2.vercel.app/",
    },
    {
      id: 5,
      title: "Dev-Detective-Project",
      description:
        "DevDetective is a web application that lets you search for any GitHub username and instantly view their profile details, including repositories, followers, bio, location, and more—all in a clean and responsive UI with dark mode support.",
      image: devdetLogo,
      tags: ["HTML", "CSS","React","JavaScript"],
      github: "https://github.com/Sameeksha200416/Dev-Detective-Project",
      webapp: "https://github.com/Sameeksha200416/Dev-Detective-Project",
    },
  ];

  export const hackathons = [
    {
      id: 0,
      img: ecopreLogo, // You can change this to specific hackathon logos
      title: "Ecopreneur Hackathon 2025",
      organizer: "BGIEM Jabalpur",
      date: "June 2025",
      achievement: "1st Runner-Up",
      desc: "Our Project RePouch focuses on reducing single use plastic through smart refilling and sustainable packaging.",
    },
    {
      id: 1,
      img: sritLogo ,
      title: "HackSRIT 2025",
      organizer: "SRIT Jabalpur",
      date: "May 2025",
      achievement: "Best Girls Team",
      desc: "Built a HealthQ - an AI-powered hospital queue and resource management system.",
      
    },
    {
      id: 2,
      img: iitkgpLogo,
      title: "Global Entrepreneurship Summit 2025",
      organizer: "IIT KHARAGPUR",
      date: "Feb 2025",
      achievement: "Participant",
      desc: "Participated in the Global Entrepreneurship Summit at IIT Kharagpur, gaining exposure to entrepreneurial ideas and networking with innovators.",
      
    },
  ];

  export const achievements = [
    {
      id: 0,
      img: clgLogo,
      title: "Dean's List Academic Excellence",
      organizer: "BGIEM Jabalpur",
      date: "2023-2024",
      position: "Top 5%",
      desc: "Maintained exceptional academic performance with CGPA above 7.5 throughout the academic year, demonstrating consistent excellence in Computer Science coursework.",
      achievement: "Academic Honor",
    },
    {
      id: 1,
      img: schLogo,
      title: "Best Project Award",
      organizer: "Department of CSE",
      date: "Dec 2023",
      position: "1st Place",
      desc: "Awarded for developing the most innovative and technically sound project in the annual project exhibition for AI-powered career guidance platform.",
      achievement: "Project Excellence",
    },
    {
      id: 2,
      img: clgLogo,
      title: "GitHub Campus Expert",
      organizer: "GitHub Education",
      date: "Oct 2023",
      position: "Selected",
      desc: "Selected as GitHub Campus Expert to promote open source culture and technical learning in the college community through workshops and events.",
      achievement: "Community Leadership",
    },
    {
      id: 3,
      img: schLogo,
      title: "Coding Competition Winner",
      organizer: "TechFest 2023",
      date: "Sep 2023",
      position: "1st Place",
      desc: "Won the inter-college coding competition by solving complex algorithmic problems and demonstrating exceptional programming skills in competitive programming.",
      achievement: "Competitive Programming",
    },
  ];  