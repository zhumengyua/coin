import { createRouter, createWebHistory } from 'vue-router'
import GameView from '@/views/GameView.vue'
import mainView from '@/views/mainView.vue'
import importView from '@/views/importView.vue'
import distributionView from '@/views/distributionView.vue'
import allView from '@/views/allView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'game',
      component: GameView
    },
    {
      path: '/index',
      name: 'index',
      component: mainView
    },
    {
      path: '/import',
      name: 'import',
      component: importView
    }, {
      path: '/distribution',
      name: 'distribution',
      component: distributionView
    }
    , {
      path: '/all',
      name: 'all',
      component: allView
    }
    // 
    // 
  ]
})



export default router
