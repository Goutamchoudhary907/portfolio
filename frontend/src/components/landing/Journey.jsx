import { journeyItems } from '@/config/Journey';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Card } from '../ui/card';

export default function Journey() {
  const navigate = useNavigate();

  return (
    <Container className="mt-10">
      <SectionHeading subHeading="My" heading="Journey" />
      <div className="mt-8 flex flex-col gap-4">
        {journeyItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              className="group"
              href={item.href}
              key={item.name}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              onClick={(e) => {
                if (!item.href.startsWith('http')) {
                  e.preventDefault();
                  navigate(item.href);
                }
              }}
            >
              <Card className="flex flex-row items-center justify-between gap-4 px-4 py-2">
                <div className="bg-muted flex items-center justify-center rounded-md p-2">
                  <Icon className="size-4" />
                </div>
                <div className="flex w-full flex-col">
                  <h3 className="text-base font-semibold">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
                <ArrowRight className="hidden size-4 transition-all duration-300 group-hover:block" />
              </Card>
            </a>
          );
        })}
      </div>
    </Container>
  );
}