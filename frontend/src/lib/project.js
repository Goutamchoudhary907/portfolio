import { projects } from '@/config/Projects';
import * as Rentpy from '@/data/projects/rentpy.mdx';
import * as ThugTap from '@/data/projects/thugtap.mdx';
import * as PestiGuide from '@/data/projects/pestiguide.mdx';
 
export const projectCaseStudies = [
  { slug: 'rentpy',     frontmatter: Rentpy.frontmatter,     Component: Rentpy.default },
  { slug: 'thugtap',    frontmatter: ThugTap.frontmatter,    Component: ThugTap.default },
  { slug: 'pestiguide', frontmatter: PestiGuide.frontmatter, Component: PestiGuide.default },
];

export function getProjectCaseStudySlugs() {
  return projectCaseStudies.map((cs) => cs.slug);
}

export function getProjectCaseStudyBySlug(slug) {
  return projectCaseStudies.find((cs) => cs.slug === slug) || null;
}

export function getAllProjectCaseStudies() {
  return [...projectCaseStudies].sort((a, b) => {
    if (a.frontmatter.featured && !b.frontmatter.featured) return -1;
    if (!a.frontmatter.featured && b.frontmatter.featured) return 1;
    return a.frontmatter.title.localeCompare(b.frontmatter.title);
  });
}

export function getPublishedProjectCaseStudies() {
  return getAllProjectCaseStudies().filter((cs) => cs.frontmatter.isPublished);
}

export function getProjectCaseStudiesByTechnology(technology) {
  return getPublishedProjectCaseStudies().filter((cs) =>
    cs.frontmatter.technologies.some(
      (tech) => tech.toLowerCase() === technology.toLowerCase(),
    ),
  );
}

export function getAllTechnologies() {
  const technologiesSet = new Set();
  getPublishedProjectCaseStudies().forEach((cs) => {
    cs.frontmatter.technologies.forEach((tech) =>
      technologiesSet.add(tech.toLowerCase()),
    );
  });
  return Array.from(technologiesSet).sort();
}

export function getProjectNavigation(currentSlug) {
  const currentIndex = projects.findIndex(
    (p) => p.projectDetailsPageSlug === `/projects/${currentSlug}`,
  );

  if (currentIndex === -1) return { previous: null, next: null };

  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return {
    previous: prev
      ? { title: prev.title, slug: prev.projectDetailsPageSlug.replace('/projects/', '') }
      : null,
    next: next
      ? { title: next.title, slug: next.projectDetailsPageSlug.replace('/projects/', '') }
      : null,
  };
}

export function getRelatedProjectCaseStudies(currentSlug, maxProjects = 2) {
  const current = getProjectCaseStudyBySlug(currentSlug);
  if (!current || !current.frontmatter.isPublished) return [];

  const currentTechs = current.frontmatter.technologies.map((t) => t.toLowerCase());

  return getPublishedProjectCaseStudies()
    .filter((cs) => cs.slug !== currentSlug)
    .map((cs) => ({
      cs,
      score: cs.frontmatter.technologies.filter((t) =>
        currentTechs.includes(t.toLowerCase()),
      ).length,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxProjects)
    .map((item) => item.cs);
}