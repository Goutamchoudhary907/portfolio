import { heroConfig, skillComponents, socialLinks } from '@/config/Hero';
import { parseTemplate } from '@/lib/hero';
import { cn } from '@/lib/utils';
import Container from '../common/Container';
import Skill from '../common/Skill';
import CV from '../svgs/CV.jsx';
import Chat from '../svgs/Chat';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { useNavigate } from 'react-router-dom';
const buttonIcons = {
  CV: CV,
  Chat: Chat,
};

export default function Hero() {
    const navigate = useNavigate();
  const { name, title, avatar, skills, description, buttons } = heroConfig;

  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part) => {
      if (part.type === 'skill' && part.skill) {
        const SkillComponent = skillComponents[part.skill.component];
        return (
          <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
            <SkillComponent />
          </Skill>
        );
      } else if (part.type === 'bold') {
        return (
          <b key={part.key} className="text-primary whitespace-pre-wrap">
            {part.text}
          </b>
        );
      } else if (part.type === 'text') {
        return (
          <span key={part.key}>
            {part.text}
          </span>
        );
      }
      return null;
    });
  };

  return (
    <Container className="mx-auto max-w-5xl">
      {/* Avatar */}
      <img
        src={avatar}
        alt="hero"
        width={100}
        height={100}
        className="size-20 rounded-full bg-blue-300 dark:bg-yellow-300"
      />

      {/* Text Area */}
      <div className="mt-8 flex flex-col gap-2">
       <h1 className="text-4xl font-bold leading-snug">
         Hi, I'm{' '}
         <span className="hero-name-highlight font-playfair font-bold">
           {name}
         </span>
         <br />
         <span className="text-secondary text-2xl font-medium">{title}</span>
       </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base text-neutral-500 md:text-lg">
          {renderDescription()}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        {buttons.map((button, index) => {
          const IconComponent = buttonIcons[button.icon];
          return (
            <Button
              key={index}
              variant={button.variant}
              className={cn(
                button.variant === 'outline' && 'inset-shadow-indigo-500',
                button.variant === 'default' && 'inset-shadow-indigo-500',
              )}
               onClick={() => {
                if (button.href.startsWith('http') || button.href.startsWith('mailto')) {
                  window.open(button.href, '_blank');
                } else {
                  navigate(button.href);
                }
              }}
            >
              {IconComponent && <IconComponent />}
              {button.text}
            </Button>
          );
        })}
      </div>

      {/* Social Links */}
      <div className="mt-8 flex gap-2">
        {socialLinks.map((link) => (
          <Tooltip key={link.name} delayDuration={0}>
            <TooltipTrigger asChild>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary flex items-center gap-2"
              >
                <span className="size-6">{link.icon}</span>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </Container>
  );
}