import JourneyMDX from '../data/journey/journey.mdx';

export const journey = {
  frontmatter: JourneyMDX.frontmatter,
  Component: JourneyMDX.default || JourneyMDX,
};