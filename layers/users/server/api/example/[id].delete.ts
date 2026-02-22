/**
 * DELETE /api/example/:id
 *
 * Removes an example item.
 */
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID is required',
    });
  }

  // Check if it exists (replace with database query)
  // const existing = await db.example.findUnique({ where: { id } })
  // if (!existing) {
  //   throw createError({ statusCode: 404, statusMessage: 'Item not found' })
  // }

  // Delete (replace with database delete)
  // await db.example.delete({ where: { id } })

  // Return 204 No Content
  setResponseStatus(event, 204);
  return null;
});
