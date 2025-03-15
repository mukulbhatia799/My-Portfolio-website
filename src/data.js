import { nanoid } from 'nanoid';
import care4u from './images/care4u-img.png'
import trustPay1 from './images/trustpay-1.png'
import trustPay2 from './images/trustpay-2.png'
import trustPay3 from './images/trustpay-3.png'
import trustPay4 from './images/trustpay-4.png'
import trustPay6 from './images/trustpay-6.png'
import trustPay7 from './images/trustpay-7.png'
import trustPay8 from './images/trustpay-8.png'
import trustPay9 from './images/trustpay-9.png'
import trustPay10 from './images/trustpay-10.png'
import trustPay11 from './images/trustpay-11.png'
import trustPay12 from './images/trustpay-12.png'
import trustPay13 from './images/trustpay-13.png'
import trustPay14 from './images/trustpay-14.png'
import bookfinder1 from './images/bookfinder-1.png'
import bookfinder2 from './images/bookfinder-2.png'
import bookfinder3 from './images/bookfinder-3.png'
import bookfinder4 from './images/bookfinder-4.png'
import bookfinder5 from './images/bookfinder-5.png'
import bookfinder6 from './images/bookfinder-6.png'
import todo1 from './images/Todo-1.png'
import todo2 from './images/Todo-2.png'


import rollDiceGame from './images/roll-dice-game.png'
import portfolioImg from './images/portfolio-img.png'
import html from './icons/html.svg'
import css from './icons/css.svg'
import javascript from './icons/javascript.svg'
import git from './icons/git.svg'
import github from './icons/github.svg'
import react from './icons/react.svg'
import bootstrap from './icons/bootstrap.svg'
import tailwindcss from './icons/tailwindcss.svg'
import nodejs from './icons/nodejs.svg'
import mongodb from './icons/mongodb.svg'
import expressjs from './icons/expressjs.svg'
import postman from './icons/postman.svg'
import cpp from './icons/cpp.svg'
import java from './icons/java.svg'
import python from './icons/python.png'
import sql from './icons/sql.png'
import jsonwebtoken from './icons/jsonwebtoken.svg'
import zod from './icons/zod.svg'
import aws from './icons/aws.png'
import jenkins from './icons/jenkins-icon.png'
import docker from './icons/docker.svg'
import kubernetes from './icons/kubernetes.png'
import vscode from './icons/vscode.png'



// import { FaHtml5, FaCss3Alt, FaBootstrap, FaNode, FaGithub, FaReact, FaGitAlt } from "react-icons/fa";
// import { SiMongodb, SiZod, SiJsonwebtokens, SiPostman } from "react-icons/si";
// import { RiJavascriptLine } from "react-icons/ri";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { PiFileCppBold } from "react-icons/pi";




// const skills = [
//   {
//     icon: PiFileCppBold,
//     title: 'CPP',
//   },
//   {
//     icon: FaHtml5,
//     title: 'HTML',
//   },
//   {
//     icon: FaCss3Alt,
//     title: 'CSS',
//   },
//   {
//     icon: RiJavascriptLine,
//     title: 'JavaScript',
//   },
//   {
//     icon: FaReact,
//     title: 'React.js',
//   },
//   {
//     icon: RiTailwindCssFill,
//     title: 'TailwindCSS',
//   },
//   {
//     icon: FaBootstrap,
//     title: 'Bootstrap',
//   },
//   {
//     icon: FaNode,
//     title: 'Node.js',
//   },
//   {
//     icon: 'expressjs',
//     title: 'Express.js',
//   },
//   {
//     icon: SiMongodb,
//     title: 'MongoDB',
//   },
//   {
//     icon: SiZod,
//     title: 'Zod',
//   },
//   {
//     icon: SiJsonwebtokens,
//     title: "JWT"
//   },
//   {
//     icon: SiPostman,
//     title: "Postman"
//   },
//   {
//     icon: FaGitAlt,
//     title: 'Git',
//   },
//   {
//     icon: FaGithub,
//     title: 'Github',
//   },
// ];



// const tech = [
//   {
//     icon: cpp,
//     title: 'CPP',
//   },
//   {
//     icon: html,
//     title: 'HTML',
//   },
//   {
//     icon: css,
//     title: 'CSS',
//   },
//   {
//     icon: javascript,
//     title: 'JavaScript',
//   },
//   {
//     icon: react,
//     title: 'React.js',
//   },
//   {
//     icon: tailwindcss,
//     title: 'TailwindCSS',
//   },
//   {
//     icon: bootstrap,
//     title: 'Bootstrap',
//   },
//   {
//     icon: nodejs,
//     title: 'Node.js',
//   },
//   {
//     icon: expressjs,
//     title: 'Express.js',
//   },
//   {
//     icon: mongodb,
//     title: 'MongoDB',
//   },
//   {
//     icon: zod,
//     title: 'Zod',
//   },
//   {
//     icon: jsonwebtoken,
//     title: "JWT"
//   },
//   {
//     icon: postman,
//     title: "Postman"
//   },
//   {
//     icon: git,
//     title: 'Git',
//   },
//   {
//     icon: github,
//     title: 'Github',
//   },
//   {
//     icon: jenkins,
//     title: 'Jenkins'
//   },
//   {
//     icon: docker,
//     title: 'Docker'
//   }
// ];

const skills = [
  // Programming Languages
  { title: "C++", icon: cpp, category: "Programming Languages" },
  { title: "Java", icon: java, category: "Programming Languages" },
  { title: "Python", icon: python, category: "Programming Languages" },
  { title: "JavaScript", icon: javascript, category: "Programming Languages" },
  { title: "CSS", icon: css, category: "Programming Languages" },
  { title: "HTML", icon: html, category: "Programming Languages" },
  { title: "SQL", icon: sql, category: "Programming Languages" },
  
  // Frameworks & Libraries
  { title: "React", icon: react, category: "Frameworks & Libraries" },
  { title: "Node.js", icon: nodejs, category: "Frameworks & Libraries" },
  { title: "Express", icon: expressjs, category: "Frameworks & Libraries" },
  { title: "MongoDB", icon: mongodb, category: "Frameworks & Libraries" },
  { title: "Bootstrap", icon: bootstrap, category: "Frameworks & Libraries" },
  { title: "Tailwind CSS", icon: tailwindcss, category: "Frameworks & Libraries" },
  { title: "JWT", icon: jsonwebtoken, category: "Frameworks & Libraries" },
  { title: "Zod", icon: zod, category: "Frameworks & Libraries" },
  
  // Cloud & DevOps
  { title: "AWS", icon: aws, category: "Cloud & DevOps" },
  { title: "Jenkins", icon: jenkins, category: "Cloud & DevOps" },
  { title: "Docker", icon: docker, category: "Cloud & DevOps" },
  { title: "Kubernetes", icon: kubernetes, category: "Cloud & DevOps" },
  
  // Developer Tools
  { title: "Git", icon: git, category: "Developer Tools" },
  { title: "VS Code", icon: vscode, category: "Developer Tools" },
  { title: "GitHub", icon: github, category: "Developer Tools" },
  { title: "Postman", icon: postman, category: "Developer Tools" },
  // { title: "MongoDB Compass", icon: mongodbCompass, category: "Developer Tools" },
]



const projects = [
  {
    id: nanoid(),
    title: 'TrustPay',
    img: trustPay1,
    images: [
      trustPay1, trustPay2, trustPay3, trustPay4, trustPay6, trustPay7, trustPay8, trustPay9, trustPay10, trustPay11, trustPay12, trustPay13, trustPay14
    ],
    desc: 'Made online Payment easy',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Mongoose', 'Express', 'Tailwind', 'JWT based authentication', 'MVC Architecture'],
    github: 'https://github.com/mukulbhatia799/TrustPay-Project',
    live: 'https://latest-trustpay-project.netlify.app/',
  },

  {
    id: nanoid(),
    title: 'Bookfinder',
    img: bookfinder1,
    images: [
      bookfinder1, bookfinder2, bookfinder3, bookfinder4, bookfinder5, bookfinder6
    ],
    desc: "Manage collection of books",
    technologies: ['React', 'MongoDB', 'Node.js', 'Express.js', 'Tailwind CSS'],
    github: 'https://github.com/mukulbhatia799/Find-A-Book-App',
    live: 'https://bookfinder-website.netlify.app/',
  },

  {
    id: nanoid(),
    title: 'Portfolio Website',
    img: portfolioImg,
    desc: "Portfolio Website",
    technologies: ['React', 'CSS', 'Tailwind CSS'],
    github: 'https://github.com/mukulbhatia799/My-Portfolio-website',
    live: 'https://mukulbhatia-portfolio.netlify.app/',
  },

  {
    id: nanoid(),
    title: 'Care4u',
    img: care4u,
    desc: 'Hospital Bed Booking website',
    technologies: ['HTML', 'CSS', 'Vanilla JS'],
    github: 'https://github.com/mukulbhatia799/Care4u-Hospital-Website',
    live: 'https://care4u-mukul-bhatia.netlify.app/',
  },
  {
    id: nanoid(),
    title: 'Roll a Dice Game',
    img: rollDiceGame,
    desc: "Play duo game",
    technologies: ['HTML', 'CSS', 'Vanilla JS'],
    github: 'https://github.com/mukulbhatia799/2-player-rolling-dice-game',
    live: 'https://2-player-rolling-dice-game.netlify.app/',
  },
  {
    id: nanoid(),
    title: 'Todo Website',
    img: todo1,
    images: [
      todo1, todo2
    ],
    desc: "Stop Procastination, Keep working",
    technologies: ['React', 'CSS', 'Tailwind CSS'],
    github: 'https://github.com/mukulbhatia799/Todo-app',
    live: 'https://mukulbhatia-todo.netlify.app/',
  }
];

export const data = { projects, skills };
