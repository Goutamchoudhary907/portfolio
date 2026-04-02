import Container from '@/components/common/Container';
import { ProjectContent } from '@/components/projects/ProjectContent';
import { ProjectNavigation } from '@/components/projects/ProjectNavigation';
import ArrowLeft from '@/components/svgs/ArrowLeft';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import {
  getProjectCaseStudyBySlug,
  getProjectNavigation,
  getRelatedProjectCaseStudies,
} from '@/lib/project';
import { useNavigate, useParams } from 'react-router-dom';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const caseStudy = getProjectCaseStudyBySlug(slug);
console.log('caseStudy:', caseStudy);
console.log('Component:', caseStudy?.Component);
  // Not found
  if (!caseStudy || !caseStudy.frontmatter.isPublished) {
    return (
      <Container className="py-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <p className="text-muted-foreground">This project case study doesn't exist.</p>
          <Button onClick={() => navigate('/projects')}>Back to Projects</Button>
        </div>
      </Container>
    );
  }

  const navigation = getProjectNavigation(slug);
  const relatedProjects = getRelatedProjectCaseStudies(slug, 2);

  return (
    <Container className="py-16">
      <div className="space-y-12">
        {/* Back Button */}
        <div>
          <Button
            variant="ghost"
            className="group flex items-center space-x-2"
            onClick={() => navigate('/projects')}
          >
            <ArrowLeft className="size-4" />
            <span>Back to Projects</span>
          </Button>
        </div>

        {/* Project Content */}
       <ProjectContent
        frontmatter={caseStudy.frontmatter}
        Component={caseStudy.Component}
      />

        {/* Project Navigation */}
        <ProjectNavigation
          previous={navigation.previous}
          next={navigation.next}
        />

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="space-y-6">
            <Separator />
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Related Projects</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {relatedProjects.map((project) => (
                  <div
                    key={project.slug}
                    className="group bg-card hover:bg-muted/50 rounded-lg border p-6 transition-colors cursor-pointer"
                    onClick={() => navigate(`/projects/${project.slug}`)}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <h3 className="group-hover:text-primary text-lg font-semibold">
                          {project.frontmatter.title}
                        </h3>
                        <div
                          className={`inline-block rounded px-2 py-1 text-xs font-medium ${
                            project.frontmatter.status === 'completed'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                              : project.frontmatter.status === 'in-progress'
                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                          }`}
                        >
                          {project.frontmatter.status.charAt(0).toUpperCase() +
                            project.frontmatter.status.slice(1)}
                        </div>
                      </div>
                      <p className="text-muted-foreground line-clamp-2 text-sm">
                        {project.frontmatter.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.frontmatter.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="bg-muted rounded px-2 py-1 text-xs">
                            {tech}
                          </span>
                        ))}
                        {project.frontmatter.technologies.length > 3 && (
                          <span className="bg-muted rounded px-2 py-1 text-xs">
                            +{project.frontmatter.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Back to Projects CTA */}
        <div className="text-center">
          <Separator className="mb-8" />
          <Button size="lg" onClick={() => navigate('/projects')}>
            View All Projects
          </Button>
        </div>
      </div>
    </Container>
  );
}