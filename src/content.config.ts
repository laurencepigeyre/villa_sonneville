import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const expositions = defineCollection({
  // Charge tous les fichiers .md dans src/content/expositions/
  loader: glob({ pattern: '**/*.md', base: './src/content/expositions' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional().default(''),
      statut: z.enum(['En cours', 'À venir', 'Passée']).default('En cours'),
      category: z.string().optional().default(''),
      date: z.string().optional().default(''),
      // Utilisé pour le tri chronologique (non affiché).
      date_debut: z.coerce.date().optional(),
      // image() valide le fichier ET renvoie un ImageMetadata utilisable
      // directement par <Image /> d'astro:assets (avec width/height/format).
      // Sveltia écrit le chemin relatif au fichier md (ex: ../../assets/img/...).
      image: image(),
      caption: z.string().optional().default(''),
      description: z.string().default(''),
      link: z.string().optional().default('#'),
      linkLabel: z.string().optional().default('Découvrir les œuvres'),
      target_blank: z.boolean().optional().default(false),
      featured: z.boolean().optional().default(false),
    }),
});

export const collections = { expositions };