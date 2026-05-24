import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ─────────────────────────────────────────────────────────────
// EXPOSITIONS
// ─────────────────────────────────────────────────────────────
const expositions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/expositions' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional().default(''),
      statut: z.enum(['En cours', 'À venir', 'Passée']).default('En cours'),
      category: z.string().optional().default(''),
      date: z.string().optional().default(''),
      date_debut: z.coerce.date().optional(),
      image: image(),
      caption: z.string().optional().default(''),
      description: z.string().default(''),
      link: z.string().optional().default('#'),
      linkLabel: z.string().optional().default('Découvrir les œuvres'),
      target_blank: z.boolean().optional().default(false),
      featured: z.boolean().optional().default(false),
    }),
});

// ─────────────────────────────────────────────────────────────
// ARTISTES
// ─────────────────────────────────────────────────────────────
const artistes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artistes' }),
  schema: ({ image }) =>
    z.object({
      // Métadonnées de l'artiste
      name: z.string(),
      subtitle: z.string().optional().default(''),
      description: z.string().optional().default(''), // SEO
      hero_image: image(),
      hero_alt: z.string().optional().default(''),
      sort_order: z.number().optional().default(999),

      // Citation (optionnelle, affichée sous le hero)
      quote_text: z.string().optional().default(''),
      quote_author: z.string().optional().default(''),

      // Sections de la page
      // Si une section a tab_label : elle devient un onglet
      // Si aucune section n'a tab_label : tout est empilé sans TabNav
      sections: z
        .array(
          z.object({
            // Onglets
            tab_label: z.string().optional().default(''),

            // Intro de la section
            section_title: z.string().optional().default(''),
            intro_image: image().optional(),
            intro_image_alt: z.string().optional().default(''),
            intro_subtitle: z.string().optional().default(''),
            intro_text: z.string().optional().default(''), // Markdown
            cta_label: z.string().optional().default(''),
            cta_url: z.string().optional().default(''),

            // Œuvres
            artworks: z
              .array(
                z.object({
                  layout: z
                    .enum(['alternating', 'full', 'grid'])
                    .optional()
                    .default('alternating'),
                  image: image(),
                  alt: z.string(),
                  title: z.string(),
                  year: z.string().optional().default(''),
                  technique: z.string().optional().default(''),
                  dimensions: z.string().optional().default(''),
                  reference: z.string().optional().default(''),
                  format: z.string().optional().default(''),
                  price: z.string().optional().default(''),
                  contact_url: z.string().optional().default('/contact'),
                  details: z
                    .array(
                      z.object({
                        image: image(),
                        alt: z.string().optional().default(''),
                      }),
                    )
                    .optional()
                    .default([]),
                }),
              )
              .optional()
              .default([]),
          }),
        )
        .optional()
        .default([]),
    }),
});

export const collections = { expositions, artistes };
