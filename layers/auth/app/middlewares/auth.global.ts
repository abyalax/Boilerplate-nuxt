export default defineNuxtRouteMiddleware((to) => {
  const publicPages = ["/login", "/register"];

  if (publicPages.includes(to.path)) {
    console.log("skip public pages", to.path);
    return;
  }
  console.log("not public pages", to.path);
});
