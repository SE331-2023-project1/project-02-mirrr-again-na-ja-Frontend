import { createRouter, createWebHistory } from 'vue-router'
import StudentView from '../views/StudentView.vue'
import AdvisorView from '../views/AdvisorView.vue'
import AdvisorDetails from '@/views/event/AdvisorDetails.vue'
import StudentDetails from '@/views/event/StudentDetails.vue'
import LoginView from '../views/LoginView.vue'
import NProgress from 'nprogress'

import AdvisorMainPage from '@/views/Advisor/AdvisorMainPage.vue'
import AdvisorAnnouncement from '@/views/Advisor/AdvisorAnnouncement.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'student',
      component: StudentView,
      props: (route) => ({page: parseInt(route.query?.page as string || '1') })
    },
    {
      path: '/advisor',
      name: 'advisor',
      component: AdvisorView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/advisor/:id',
      name: 'advisor-detail',
      component: AdvisorDetails,
      props: true
    },
    {
      path: '/student/:id',
      name: 'student-detail',
      component: StudentDetails,
      props: true
    },
    {
      path: '/AJ',
      name: 'AJ-main',
      component: AdvisorMainPage,
      props: (route) => ({page: parseInt(route.query?.page as string || '1') })
    },
    {
      path: '/announcement',
      name: 'announcement',
      component: AdvisorAnnouncement
    }
  ]
})

router.beforeEach(() =>{
  NProgress.start()
})
router.afterEach(() =>{
  NProgress.done()
})

export default router
