import { createRouter, createWebHistory } from 'vue-router';

import DashboardView from '../components/Dashboard.vue';
import SettingsView from '../components/Settings.vue';
import AllAlerts from '../components/Alerts.vue';

const routes = [
  { path: '/', component: DashboardView },
  { path: '/alerts', component: AllAlerts },
  { path: '/settings', component: SettingsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;