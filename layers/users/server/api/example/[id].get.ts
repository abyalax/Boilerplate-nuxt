/**
 * GET /api/example/:id
 *
 * Fetches an example item by ID.
 * [id] in the filename = dynamic parameter
 */
export default defineEventHandler(async (event) => {
  // Get route parameter
  const id = getRouterParam(event, 'id');

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID is required',
    });
  }

  // Fetch item (replace with database query)
  const item = {
    id,
    name: `Item ${id}`,
    description: 'Example item description',
    createdAt: new Date().toISOString(),
  };

  // Simulate item not found
  // if (!item) {
  //   throw createError({
  //     statusCode: 404,
  //     statusMessage: 'Item not found'
  //   })
  // }

  return item;
});
