import { createRouter, createWebHistory } from 'vue-router';
import RegistrationView from '@/views/RegistrationView.vue';
import DashboardView from '@/components/DashboardView.vue';
import SettingsView from '@/components/SettingsView.vue';
import AllAlerts from '@/components/Alerts.vue';
// import  RegistrationLayout from '@/layout/RegistrationLayout.vue';
// import MainLayout from '@/layout/MainLayout.vue';

const routes = [
  // {
    // path: '/',
    // component: MainLayout,
    // children: [
      { path: '/', component: DashboardView },
      { path: '/alerts', component: AllAlerts },
      { path: '/settings', component: SettingsView },
      {
        path: '/registration',
        component: RegistrationView,
      },
  //   ],
  // },
  // {
  //   path: '/registration',
  //   component: RegistrationLayout,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
