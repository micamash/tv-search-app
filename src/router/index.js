import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ScheduleView from '../views/ScheduleView.vue'
import DetailsView from '../views/DetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/schedule',
    name: 'Sechdule',
    component: ScheduleView,
    component: () => import('../views/ScheduleView.vue')
  },
  {
    path: '/details/:showId',
    name: 'DetailsView',
    component: DetailsView,
    component: () => import('../views/DetailsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
