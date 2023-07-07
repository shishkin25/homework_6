import Vue from 'vue'
import VueRouter from 'vue-router'

import TasksPage from '@/views/TasksPage.vue';
import ProjectsPage from '@/views/ProjectsPage.vue';
import Userspage from '@/views/UsersPage.vue'
import AuthPage from '@/views/AuthPage.vue'
import TaskInfoPage from '@/views/TaskInfoPage.vue';
import NotFoundPage from '@/views/NotFoundPage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/projects'
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: TasksPage
  },
  {
    path: '/tasks/:id',
    name: 'taskInfo',
    component: TaskInfoPage
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsPage
  },
  {
    path: '/users',
    name: 'users',
    component: Userspage,
    beforeEnter: (to, from, next) => {
      if (to.path === '/users' && (!localStorage.getItem('isAuth') || !JSON.parse(localStorage.getItem('isAuth')).value) ) {
        next('/auth');
      } else {
        next();
      }
    }
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthPage
  },
  {
    path: '*', 
    name: 'not-found',
    component: NotFoundPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
