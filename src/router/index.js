import { createRouter, createWebHistory } from 'vue-router';
import RegistrationView from '@/views/RegistrationView.vue';
import DashboardView from '@/components/DashboardView.vue';
import MyProfile from '@/components/MyProfile.vue';
import SettingsView from '@/components/SettingsView.vue';
import SettingsProfile from '@/components/SettingsProfile.vue';
import AllAlerts from '@/components/AlertsView.vue';
import ChatView from '@/components/ChatView.vue';
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
      { path: '/settingsprofile', component: SettingsProfile },
      { path: '/myprofile', component: MyProfile },
      { path: '/chat', component: ChatView },
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
