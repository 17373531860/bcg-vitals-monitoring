import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BCGPage from '@/pages/BCGPage.vue'
import ECGPage from '@/pages/ECGPage.vue'
import FitnessPage from '@/pages/FitnessPage.vue'
import SleepStatePage from '@/pages/SleepStatePage.vue'
import ReportPage from '@/pages/ReportPage.vue'

const routes: Array<RouteRecordRaw> = [
  { 
    path: '/', 
    redirect: '/bcg' 
  },
  { 
    path: '/bcg', 
    component: BCGPage,
    name: 'BCG' 
  },
  { 
    path: '/ecg', 
    component: ECGPage,
    name: 'ECG' 
  },
  { 
    path: '/fitness', 
    component: FitnessPage,
    name: 'Fitness' 
  },
  { 
    path: '/state', 
    component: SleepStatePage,
    name: 'SleepState' 
  },
  { 
    path: '/report', 
    component: ReportPage,
    name: 'Report' 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router