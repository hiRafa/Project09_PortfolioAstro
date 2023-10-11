// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
// 2. Define your collection(s)
const projectsSchema = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    projectURL: z.string(),
    figmaURL: z.string(),
    githubURL: z.string(),
    thumbnail: z.string(),
    technologies: z.array(z.string()),
    projectTitle: z.string(),
    projectSubtitle: z.string(),
    projectBulletList: z.array(z.string()),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  projects: projectsSchema,
};
