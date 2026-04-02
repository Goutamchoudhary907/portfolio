/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '../components/svgs/Github.jsx';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import Bun from '../components/technologies/Bun';
import JavaScript from '../components/technologies/JavaScript';
import MongoDB from '../components/technologies/MongoDB';
import NextJs from '../components/technologies/NextJs';
import NodeJs from '../components/technologies/NodeJs';
import PostgreSQL from '../components/technologies/PostgreSQL';
import Prisma from '../components/technologies/Prisma.jsx';
import ReactIcon from '../components/technologies/ReactIcon.jsx';
import TypeScript from '../components/technologies/TypeScript.jsx';
import ExpressJs from "../components/technologies/ExpressJs.jsx"
export const skillComponents = {
  TypeScript,
  ReactIcon,
  NextJs,
  Bun,
  PostgreSQL,
  NodeJs,
  MongoDB,
  Prisma,
  JavaScript,
  ExpressJs
};

export const heroConfig = {
  name: 'Goutam Choudhary',
  title: 'A Full Stack web developer.',
  avatar: '/assets/logo.png',
skills: [
  { name: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', component: 'JavaScript' },
  { name: 'Node.js', href: 'https://nodejs.org/', component: 'NodeJs' },
  { name: 'Express', href: 'https://expressjs.com/', component: 'ExpressJs' },
  { name: 'PostgreSQL', href: 'https://www.postgresql.org/', component: 'PostgreSQL' },
  { name: 'React', href: 'https://react.dev/', component: 'ReactIcon' },
],
description: {
  template:
    'I build interactive web apps using {skills:0}, {skills:1}, {skills:2}, {skills:3} and {skills:4}. With a focus on <b>full-stack development</b>. Working on APIs, database design, and production-level features.',
},
  buttons: [
    { variant: 'outline', text: 'Resume / CV', href: '/resume', icon: 'CV' },
    { variant: 'default', text: 'Get in touch', href: '/contact', icon: 'Chat' },
  ],
};

export const socialLinks = [
 { name: 'X', href: 'https://x.com/goutam907', icon: <X className="size-6" /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/goutamchoudhary/', icon: <LinkedIn /> },
  { name: 'Github', href: 'https://github.com/Goutamchoudhary907', icon: <Github className="size-6" /> },
  { name: 'Email', href: 'mailto:goutamchoudhary907@gmail.com', icon: <Mail /> },
];