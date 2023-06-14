import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SitesView from "@/views/SitesView.vue";
import SubscriptionsView from "@/views/SubscriptionsView.vue";
import ConfigView from "@/views/ConfigView.vue";
import SubView from "@/views/SubView.vue";
import AboutView from "@/views/AboutView.vue";
import LoginView from "@/views/LoginView.vue";
import UserView from "@/views/UserView.vue";
import SearchView from "@/views/SearchView.vue";
import VodView from "@/views/VodView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {auth: true}
    },
    {
      path: '/sites',
      name: 'sites',
      component: SitesView,
      meta: {auth: true}
    },
    {
      path: '/subscriptions',
      name: 'subscriptions',
      component: SubscriptionsView,
      meta: {auth: true}
    },
    {
      path: '/user',
      name: 'user',
      component: UserView,
      meta: {auth: true}
    },
    {
      path: '/config',
      name: 'config',
      component: ConfigView,
      meta: {auth: true}
    },
    {
      path: '/sub/:id',
      name: 'sub',
      component: SubView,
      meta: {auth: true}
    },
    {
      path: '/vod',
      name: 'vod',
      component: VodView,
      meta: {auth: true}
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
      meta: {auth: true}
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {guest: true}
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {auth: true}
    }
  ]
})

export default router
