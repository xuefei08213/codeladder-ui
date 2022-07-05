import { createRouter, createWebHistory } from 'vue-router'

import CodeladderIndex from '@/components/CodeladderIndex'
import LoginForm from '@/components/LoginForm'

const routes = [
	{
		path: "/",
		name: "CodeladderIndex",
		component: CodeladderIndex
	},{
        path: "/login",
        name: "login",
        component: LoginForm
        
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router;
