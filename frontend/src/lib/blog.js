/**
 * blog.js
 *
 * In Next.js, blog posts were read from .mdx files using fs + gray-matter.
 * In React (Vite), we can't read the filesystem at runtime.
 *
 * SOLUTION: Define your blog posts as static JS objects here.
 * Add a new entry to the `blogPosts` array for each post.
 */

export const blogPosts = [
  {
    slug: 'frontend-part-1',
    frontmatter: {
      title: 'Frontend Development - Part 1',
      description: 'An introduction to modern frontend development.',
      date: '2025-01-01',
      tags: ['frontend', 'react', 'web development'],
      isPublished: true,
      featured: true,
      image: '/blog/frontend-part-1.png',
    },
    content: `# Frontend Development - Part 1\n\nYour blog content goes here...`,
  },
  // Add more posts here following the same structure
];

export function getBlogPostSlugs() {
  return blogPosts.map((post) => post.slug);
}

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) || null;
}

export function getAllBlogPosts() {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  );
}

export function getPublishedBlogPosts() {
  return getAllBlogPosts().filter((post) => post.frontmatter.isPublished);
}

export function getBlogPostsByTag(tag) {
  return getPublishedBlogPosts().filter((post) =>
    post.frontmatter.tags.some(
      (postTag) => postTag.toLowerCase() === tag.toLowerCase(),
    ),
  );
}

export function getAllTags() {
  const publishedPosts = getPublishedBlogPosts();
  const tagsSet = new Set();
  publishedPosts.forEach((post) => {
    post.frontmatter.tags.forEach((tag) => tagsSet.add(tag.toLowerCase()));
  });
  return Array.from(tagsSet).sort();
}

export function getRelatedPosts(currentSlug, maxPosts = 3) {
  const currentPost = getBlogPostBySlug(currentSlug);
  if (!currentPost || !currentPost.frontmatter.isPublished) return [];

  const allPosts = getPublishedBlogPosts();
  const currentTags = currentPost.frontmatter.tags.map((t) => t.toLowerCase());

  return allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => ({
      post,
      score: post.frontmatter.tags.filter((t) =>
        currentTags.includes(t.toLowerCase()),
      ).length,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxPosts)
    .map((item) => item.post);
}