import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import ArrowRight from '../svgs/ArrowRight';
import Calender from '../svgs/Calender';

export function BlogCard({ post }) {
  const { slug, frontmatter } = post;
  const { title, description, image, tags, date } = frontmatter;
  const navigate = useNavigate();

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card className="group h-full w-full overflow-hidden border-gray-100 p-0 shadow-none transition-all dark:border-gray-800">
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover cursor-pointer"
            onClick={() => navigate(`/blog/${slug}`)}
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <h3
            className="group-hover:text-primary line-clamp-2 text-xl leading-tight font-semibold cursor-pointer"
            onClick={() => navigate(`/blog/${slug}`)}
          >
            {title}
          </h3>
          <p className="text-secondary mt-4 line-clamp-3">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="flex w-full flex-col space-y-3">
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-xs">+{tags.length - 3} more</Badge>
            )}
          </div>
          <div className="mt-4 flex items-center justify-between gap-2">
            <time className="text-secondary flex items-center gap-2 text-sm" dateTime={date}>
              <Calender className="size-4" /> {formattedDate}
            </time>
            <button
              onClick={() => navigate(`/blog/${slug}`)}
              className="text-secondary flex items-center justify-end gap-2 underline-offset-4 hover:underline"
            >
              Read More <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}