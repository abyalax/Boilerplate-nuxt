import { z } from 'zod';

/**
 * POST /api/example
 *
 * Creates a new example item.
 * ALWAYS validate the body with Zod.
 */

const createExampleSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long').max(100),
  description: z.string().optional(),
});

export default defineEventHandler(async (event) => {
  // Read request body
  const body = await readBody(event);

  // Validate with Zod
  const result = createExampleSchema.safeParse(body);

  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid data',
      data: result.error.flatten(),
    });
  }

  // Create item (replace with database insertion)
  const created = {
    id: crypto.randomUUID(),
    ...result.data,
    createdAt: new Date().toISOString(),
  };

  // Return with 201 Created status
  setResponseStatus(event, 201);
  return created;
});
