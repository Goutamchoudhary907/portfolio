import { projects } from '@/config/Projects';
import { useNavigate } from 'react-router-dom';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ProjectList } from '../projects/ProjectList';
import { Button } from '../ui/button';

export default function Projects() {
  const navigate = useNavigate();

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Projects" />

      <ProjectList className="mt-8" projects={projects.slice(0, 4)} />
      <div className="mt-8 flex justify-center">
        <Button variant="outline" onClick={() => navigate('/projects')}>
          Show all projects
        </Button>
      </div>
    </Container>
  );
}