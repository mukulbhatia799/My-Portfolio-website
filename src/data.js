import { nanoid } from 'nanoid';
import care4u from './images/care4u-img.png'
import trustPay from './images/trustpay-img.png'
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
import jsonwebtoken from './icons/jsonwebtoken.svg'
import zod from './icons/zod.svg'
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



const skills = [
  {
    icon: cpp,
    title: 'CPP',
  },
  {
    icon: html,
    title: 'HTML',
  },
  {
    icon: css,
    title: 'CSS',
  },
  {
    icon: javascript,
    title: 'JavaScript',
  },
  {
    icon: react,
    title: 'React.js',
  },
  {
    icon: tailwindcss,
    title: 'TailwindCSS',
  },
  {
    icon: bootstrap,
    title: 'Bootstrap',
  },
  {
    icon: nodejs,
    title: 'Node.js',
  },
  {
    icon: expressjs,
    title: 'Express.js',
  },
  {
    icon: mongodb,
    title: 'MongoDB',
  },
  {
    icon: zod,
    title: 'Zod',
  },
  {
    icon: jsonwebtoken,
    title: "JWT"
  },
  {
    icon: postman,
    title: "Postman"
  },
  {
    icon: git,
    title: 'Git',
  },
  {
    icon: github,
    title: 'Github',
  },
];



const projects = [
  {
    id: nanoid(),
    title: 'TrustPay Payment App',
    img: trustPay,
    desc: 'Made Payment easy online.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Mongoose', 'Express', 'Tailwind', 'JWT based authentication', 'MVC Architecture'],
    github: 'https://github.com/mukulbhatia799/TrustPay-Project',
    live: 'https://trustpay-payment-app.netlify.app/',
  },

  {
    id: nanoid(),
    title: 'Care4u',
    img: care4u,
    desc: 'Hospital Bed Booking website.',
    technologies: ['HTML', 'CSS', 'Vanilla JS'],
    github: 'https://github.com/mukulbhatia799/Care4u-Hospital-Website',
    live: 'https://care4u-mukul-bhatia.netlify.app/',
  },
  {
    id: nanoid(),
    title: 'Roll a Dice Game',
    img: rollDiceGame,
    desc: "Play duo game online with your loved ones.",
    technologies: ['HTML', 'CSS', 'Vanilla JS'],
    github: 'https://github.com/mukulbhatia799/2-player-rolling-dice-game',
    live: 'https://2-player-rolling-dice-game.netlify.app/',
  },
  {
    id: nanoid(),
    title: 'Portfolio Website',
    img: portfolioImg,
    desc: "Portfolio Website.",
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    github: 'https://github.comab/mukulbhatia799/2-player-rolling-dice-game',
    live: 'https://2-player-rolling-dice-game.netlify.app/',
  }

  // {
  //   id: nanoid(),
  //   title: 'Codwiz',
  //   img: care4u,
  //   desc: 'An interactive quiz application to test your knowledge of programming languages.',
  //   technologies: ['React.js', 'TypeScript', 'MantineUI'],
  //   github: 'https://github.com/mukulbhatia799/MERN-Stack',
  //   live: 'https://github.com/mukulbhatia799/MERN-Stack',
  // },
  // {
  //   id: nanoid(),
  //   title: 'Notes App',
  //   img: care4u,
  //   desc: 'A notes app where one can add quick notes on the go. Data is saved locally.',
  //   technologies: ['React.js', 'Express', 'MongoDB'],
  //   github: 'https://github.com/mukulbhatia799/MERN-Stack',
  //   live: 'https://github.com/mukulbhatia799/MERN-Stack',
  // },
  // {
  //   id: nanoid(),
  //   title: 'Weather App',
  //   img: care4u,
  //   desc: 'A weather app that tells weather details based on search query (city, state, etc)',
  //   technologies: ['React.js', 'flutter', 'Node.js'],
  //   github: 'https://github.com/mukulbhatia799/MERN-Stack',
  //   live: 'https://github.com/mukulbhatia799/MERN-Stack',
  // },
  // {
  //   id: nanoid(),
  //   title: 'Triangle Quiz',
  //   img: care4u,
  //   desc: 'How much  do  you know  about triangles 🔺? Test your skills.',
  //   technologies: ['HTML', 'CSS', 'JavaScript'],
  //   github: 'https://github.com/mukulbhatia799/MERN-Stack',
  //   live: 'https://github.com/mukulbhatia799/MERN-Stack',
  // },
];

export const data = { projects, skills };
