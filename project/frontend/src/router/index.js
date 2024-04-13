/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto';
import { setupLayouts } from 'virtual:generated-layouts';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    extendRoutes: setupLayouts
});

// router.beforeEach((to, from, next) => {
//     const userLoggedIn = localStorage.getItem('user');
//     if (!userLoggedIn && to.path !== '/login') {
//         next({ path: '/login' });
//     } else if (userLoggedIn && to.path === '/login') {
//         next({ path: '/dashboard' });
//     } else {
//         next();
//     }
// });

router.beforeEach((to, from, next) => {
  const userLoggedIn = localStorage.getItem('user');
  if (!userLoggedIn && to.path !== '/login' && to.path !== '/register') {
      next({ path: '/login' });
  } else if (userLoggedIn && (to.path === '/login' || to.path === '/register')) {
      next({ path: '/dashboard' });
  } else {
      next();
  }
});

export default router;
