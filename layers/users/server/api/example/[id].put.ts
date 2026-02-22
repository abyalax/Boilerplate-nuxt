import { z } from 'zod';

/**
 * PUT /api/example/:id
 *
 * Updates an example item.
 */

const updateExampleSchema = z.object({
  name: z.string().min(3).max(100).optional(),
  description: z.string().optional(),
});

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID is required',
    });
  }

  const body = await readBody(event);

  // Validate
  const result = updateExampleSchema.safeParse(body);

  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid data',
      data: result.error.flatten(),
    });
  }

  // Check if it exists (replace with database query)
  // const existing = await db.example.findUnique({ where: { id } })
  // if (!existing) {
  //   throw createError({ statusCode: 404, statusMessage: 'Item not found' })
  // }

  // Update (replace with database update)
  const updated = {
    id,
    ...result.data,
    updatedAt: new Date().toISOString(),
  };

  return updated;
});
