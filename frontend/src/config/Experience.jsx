import ExpressJs from '../components/technologies/ExpressJs';
import JavaScript from '../components/technologies/JavaScript';
import MongoDB from '../components/technologies/MongoDB';
import NodeJs from '../components/technologies/NodeJs';
import PostgreSQL from '../components/technologies/PostgreSQL';
import ReactIcon from '../components/technologies/ReactIcon.jsx';
import TailwindCss from '../components/technologies/TailwindCss';

export const experiences = [
  {
    isCurrent: true,
    company: 'MoonMVP',
    position: 'Full Stack Developer Intern',
    location: 'Remote',
    image: '/company/moonmvp.png',
    description: [
      'Built full-stack features using React, Node.js, and Express, handling both frontend UI and backend APIs.',
      'Implemented end-to-end functionality, integrated databases, and optimized performance for real-world production use.',
    ],
    startDate: 'Dec 2025',
    endDate: 'Present',
    technologies: [
      { name: 'JavaScript', href: 'https://javascript.com/', icon: <JavaScript /> },
      { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
      { name: 'Node.js', href: 'https://nodejs.org/', icon: <NodeJs /> },
      { name: 'Express', href: 'https://expressjs.com/', icon: <ExpressJs /> },
      { name: 'MongoDB', href: 'https://mongodb.com/', icon: <MongoDB /> },
      { name: 'PostgreSQL', href: 'https://www.postgresql.org/', icon: <PostgreSQL /> },
      { name: 'Tailwind CSS', href: 'https://tailwindcss.com/', icon: <TailwindCss /> },
    ],
    website: 'https://www.moonmvp.com/',
    github: '#',
    x: '#',
  },
];