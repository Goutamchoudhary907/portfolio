import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from 'react-router-dom';
import ArrowLeft from '../svgs/ArrowLeft';
import ArrowUUpRight from '../svgs/ArrowUUpRight';

export function ProjectNavigation({ previous, next }) {
  const navigate = useNavigate();

  if (!previous && !next) return null;

  return (
    <div className="space-y-6">
      <Separator />
      <div className="grid gap-4 md:grid-cols-2">
        {/* Previous */}
        <div className={`${next ? '' : 'md:col-span-2'}`}>
          {previous ? (
            <Button
              variant="outline"
              className="group h-auto w-full justify-start p-4 text-left"
              onClick={() => navigate(`/projects/${previous.slug}`)}
            >
              <div className="flex items-center gap-3">
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                <div>
                  <div className="text-muted-foreground text-xs">Previous Project</div>
                  <div className="font-medium">{previous.title}</div>
                </div>
              </div>
            </Button>
          ) : (
            <div className="h-16" />
          )}
        </div>

        {/* Next */}
        <div className={`${previous ? '' : 'md:col-span-2'}`}>
          {next ? (
            <Button
              variant="outline"
              className="group h-auto w-full justify-end p-4 text-right"
              onClick={() => navigate(`/projects/${next.slug}`)}
            >
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-muted-foreground text-xs">Next Project</div>
                  <div className="font-medium">{next.title}</div>
                </div>
                <ArrowUUpRight className="size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Button>
          ) : (
            <div className="h-16" />
          )}
        </div>
      </div>
    </div>
  );
}