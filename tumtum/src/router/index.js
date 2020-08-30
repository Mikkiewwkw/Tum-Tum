import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import("../views/Login/Login");
const CreateCount = () => import("../views/Login/childComponts/CreateCount")

Vue.use(VueRouter)

const routes = [
    {
        path: "",
        redirect: "/login"
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: "/createcount",
        name: "CreateCount",
        component: CreateCount,
    }
]

const router = new VueRouter({
  routes,
  mode: "history",
})

export default router