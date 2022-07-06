import { createRouter, createWebHistory } from 'vue-router'

import store from '../store';

import CodeladderIndex from '@/components/CodeladderIndex'
import LoginForm from '@/components/LoginForm'
import AdminConsole from '@/components/AdminConsole'

const routes = [
	{
		path: "/",
		name: "CodeladderIndex",
		component: CodeladderIndex
	},{
        path: "/login",
        name: "login",
        component: LoginForm
    },
    {
        path:"/admin",
        name:"admin",
        component: AdminConsole,
        meta: {requiresAuth: true}
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isAuthenticated) {
        next()
        return
      }
      next('/login')
    } else {
      next()
    }
  })

export default router;
