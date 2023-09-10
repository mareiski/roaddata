import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/LandingPage.vue') }],
  },
  {
    path: '/Legal',
    component: () => import('layouts/RasterLayout.vue'),
    children: [
      {
        path: '/Imprint',
        component: () => import('pages/Legal/Impressum.vue'),
      },
      {
        path: '/Privacy',
        component: () => import('pages/Legal/Datenschutz.vue'),
      },
      {
        path: '/Disclaimer',
        component: () => import('pages/legal/Haftungsausschluss.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
