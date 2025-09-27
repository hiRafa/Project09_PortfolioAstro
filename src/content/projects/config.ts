// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Define your collection(s)
const projectsSchema = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    projectURL: z.string(),
    figmaURL: z.string().optional(),
    githubURL: z.string(),
    thumbnail: z.string(),
    technologies: z.array(z.string()),
    projectTitle: z.string(),
    year: z.string(),
    projectSubtitle: z.string(),
    projectBulletList: z.array(z.string()),
    thumbnail_extra: z.array(z.string()).optional(),

    // --- New fields for portfolio
    overview: z.string(),
    challenges: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
    decisions: z.array(
      z.object({
        decision: z.string(),
        rationale: z.string(),
      })
    ),
    architecture: z.object({
      diagram: z.string(),
      workflowDiagram: z.string(),
      narrative: z.string(),
    }),
    implementation: z.array(z.string()),
    outcome: z.array(z.string()),
    reflection: z.string(),
    visuals: z.object({
      overview: z.string(),
      challengeWorkflow: z.string(),
      moduleDiagram: z.string(),
      dashboard: z.string(),
    }),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectsSchema,
};
