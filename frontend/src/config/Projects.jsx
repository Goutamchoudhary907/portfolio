import ExpressJs from '../components/technologies/ExpressJs';
import JavaScript from '../components/technologies/JavaScript';
import MongoDB from '../components/technologies/MongoDB';
import NodeJs from '../components/technologies/NodeJs';
import PostgreSQL from '../components/technologies/PostgreSQL';
import Prisma from '../components/technologies/Prisma.jsx';
import ReactIcon from '../components/technologies/ReactIcon';
import TailwindCss from '../components/technologies/TailwindCss';
import TypeScript from '../components/technologies/TypeScript';
import Nextjs from "../components/technologies/NextJs.jsx"
export const projects = [
  {
    title: 'Rentpy',
    description: 'Full-stack room renting marketplace for students, short-term travelers, and long-term stays, featuring JWT auth, Google Maps integration, location-based search, and Razorpay payments.',
    image: '/project/rentpy.png',
    link: 'https://rentpy.vercel.app/',
    technologies: [
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/Goutamchoudhary907/Room-Renting',
    live: 'https://rentpy.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/rentpy',
    isWorking: true,
  },
  {
    title: 'ThugTap',
    description: 'Multiplayer Ludo platform with room creation, match result submissions, admin panel for approvals, proof uploads, and a secure wallet system with entry-fee locking and automated payouts.',
    image: '/project/thugtap.png',
    link: 'https://www.thugtap.sbs/',
    technologies: [
      { name: 'Nextjs', icon: <Nextjs key="nextjs" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    live: 'https://www.thugtap.sbs/',
    details: true,
    projectDetailsPageSlug: '/projects/thugtap',
    isWorking: true,
  },
  {
     title: 'PestiGuide',
    description: 'Full-stack platform helping farmers find crop-specific pesticide information. Features authentication, season-based crop selection, detailed pesticide profiles, and a responsive UI.',
    image: '/project/pestiguide.png',
    link: 'https://pestiguide.vercel.app',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
    ],
     live: 'https://pestiguide.vercel.app',
    github: 'https://github.com/Goutamchoudhary907/pestiguide',
    details: true,
    projectDetailsPageSlug: '/projects/pestiguide',
    isWorking: true,
  },
];