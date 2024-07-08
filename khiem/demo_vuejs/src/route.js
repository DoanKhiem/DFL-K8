import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import Dashboard from './Dashboard.vue'
import Table from './Table.vue'

const routes = [
  { path: '/', name: 'dashboard', component: Dashboard },
  { path: '/table', name: 'table', component: Table },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router