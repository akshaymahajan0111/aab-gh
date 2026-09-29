import { z } from 'zod';
export const schemas = {
  pages: {
    home: z.object({
      "hero": z.object({
        "headline": z.string(),
        "subtext": z.string(),
        "cta": z.string()
      })
    })
  }
};
export type Schemas = typeof schemas;