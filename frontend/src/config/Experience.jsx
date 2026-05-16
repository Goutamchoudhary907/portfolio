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
       'Integrated Gemini and Claude AI APIs into AdvocAI, a legal case management platform, enabling real-time document review and generation with streaming responses using React and Node.js.',
       'Built complete shipping flow for GetPalex bookstore by integrating EasyPost API — handling shipment creation, live tracking and delivery status across the full stack.',
       'Integrated Shopify API into Stockflow, an inventory management system, to sync product sales data and automate stock level updates in real time.',
       'Implemented offline-first architecture in Stockflow using IndexedDB — storing data locally when offline and syncing to server on reconnection',
       'Delivered full-stack features across 6+ client projects simultaneously using React, Node.js, Express, PostgreSQL and MongoDB'
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