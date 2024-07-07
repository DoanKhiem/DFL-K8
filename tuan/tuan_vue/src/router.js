import { createMemoryHistory, createRouter } from 'vue-router'

import Dashboard from './Dashboard.vue'
import Table from './Table.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/table', component: Table },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router