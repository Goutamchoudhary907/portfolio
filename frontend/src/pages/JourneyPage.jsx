import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { journey } from '@/lib/journey';

export default function JourneyPage() {
  const { frontmatter, Component } = journey;

  if (!Component) {
    return (
      <Container className="py-16">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Journey</h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              No journey content found. Add your content to the journey config.
            </p>
          </div>
          <Separator />
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            {frontmatter?.title || 'Journey'}
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            {frontmatter?.description || 'A timeline of my learning, projects, and milestones.'}
          </p>
        </div>
        <Separator />

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <Component />
        </div>
      </div>
    </Container>
  );
}