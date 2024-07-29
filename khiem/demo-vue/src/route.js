import { createWebHistory, createRouter } from 'vue-router'

// import HomeView from './HomeView.vue'
// import AboutView from './AboutView.vue'
import Dashboard from "./Dashboard.vue"
import Table from "./Table.vue"
import Form from "./Form.vue"
const routes = [
  { path: '/', component: Dashboard, name: 'dashboard' },
  { path: '/table', component: Table, name: 'table' },
  { path: '/form/:id', component: Form, name: 'form' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router