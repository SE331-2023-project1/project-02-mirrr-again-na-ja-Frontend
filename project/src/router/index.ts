import { createRouter, createWebHistory } from 'vue-router'
import StudentView from '../views/StudentView.vue'
import AdvisorView from '../views/AdvisorView.vue'
import AdvisorDetails from '@/views/event/AdvisorDetails.vue'
import StudentDetails from '@/views/event/StudentDetails.vue'
import LoginView from '@/views/LoginView.vue'
import NProgress from 'nprogress'

import AdvisorMainPage from '@/views/Advisor/AdvisorMainPage.vue'
import AdvisorAnnouncement from '@/views/Advisor/AdvisorAnnouncement.vue'
import EditStudentDetail from '@/views/event/EditStudentDetails.vue'
import RegisterView from '@/views/RegisterView.vue'
import EditAdvisorDetail from '@/views/event/EditAdvisorDetails.vue'
import AdvisorLogin from "@/views/Advisor/AdvisorLogin.vue";
import SelectUserView from "@/views/SelectUserView.vue";
import AdminLogin from "@/views/Admin/AdminLogin.vue";
import AdminMainPage from "@/views/Admin/AdminMainPage.vue";
import AddNewStudent from "@/views/AddNewStudentView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'user',
      component: SelectUserView
    },
    {
      path: '/student',
      name: 'student',
      component: StudentView,
      props: (route) => ({page: parseInt(route.query?.page as string || '1') })
    },
    {
      path: '/advisor',
      name: 'advisor',
      component: AdvisorView,
      props: (route) => ({page: parseInt(route.query?.page as string || '1') })
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
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
      path: '/main-AJ',
      name: 'main-AJ',
      component: AdvisorMainPage,
      props: (route) => ({page: parseInt(route.query?.page as string || '1') })
    },
    {
      path: '/announcement',
      name: 'announcement',
      component: AdvisorAnnouncement
    },
    {
      path: '/student/:id/edit-student',
      name: 'edit-student',
      component: EditStudentDetail,
      props: true
    },
    {
      path: '/student/:id/edit-advisor',
      name: 'edit-advisor',
      component: EditAdvisorDetail,
      props: true
    },
    {
      path: '/login-AJ',
      name: 'login-AJ',
      component: AdvisorLogin
    },
    {
      path: '/login-AD',
      name: 'login-AD',
      component: AdminLogin
    },
    {
      path: '/main-AD',
      name: 'main-AD',
      component: AdminMainPage
    },
    {
      path: '/add-student',
      name: 'add-student',
      component: AddNewStudent
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
