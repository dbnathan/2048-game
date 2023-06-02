import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import Game2048 from './components/Game2048.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/game', component: Game2048 }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
