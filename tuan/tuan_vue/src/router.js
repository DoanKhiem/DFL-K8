import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import Dashboard from './Dashboard.vue'
import Table from './Table.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/table', component: Table },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASAURL),
  routes,
})

export default router