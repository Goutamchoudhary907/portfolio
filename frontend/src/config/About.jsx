import ExpressJs from '../components/technologies/ExpressJs';
import JavaScript from '../components/technologies/JavaScript';
import MongoDB from '../components/technologies/MongoDB';
import NodeJs from '../components/technologies/NodeJs';
import PostgreSQL from '../components/technologies/PostgreSQL';
import Prisma from '../components/technologies/Prisma';
import ReactIcon from '../components/technologies/ReactIcon';
import TypeScript from '../components/technologies/TypeScript';

export const mySkills = [
  <TypeScript key="typescript" className='size-6'/>,
  <JavaScript key="javascript" className='size-6'/>,
  <ReactIcon key="react"  className='size-6'/>,
  <NodeJs key="nodejs" className='size-6'/>,
  <ExpressJs key="expressjs" className='size-6'/>,
  <MongoDB key="mongodb" className='size-6'/>,
  <PostgreSQL key="postgresql" className='size-6'/>,
  <Prisma key="prisma" className='size-6'/>,
];

export const about = {
  name: 'Goutam Choudhary',
  description: `I'm a Full Stack web developer who loves building products that solve real-world problems. Specialized in building MVPs. I work across the entire stack — from UI to databases.`,
};

export const certificates = [
  {
    file: '/blog/frontend-part-1.png',
    title: 'Example Certificate 1',
    issuer: 'Example Issuer',
    date: '2024-01-01',
  },
];

const achievementsConfig = { certificates };

export default achievementsConfig;