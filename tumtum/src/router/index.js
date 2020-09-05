import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import("../views/Login/Login");
const CreateCount = () => import("../views/Login/childComponts/CreateCount");
const OldUserLogin = () => import("../views/Login/childComponts/OldUserLogin");
const Intro = () => import("../views/Login/childComponts/Intro");
const Avatar = () => import("../views/Avatar/Avatar")

Vue.use(VueRouter)

const routes = [{
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
    },
    {
        path: "/userlogin",
        name: "UserLogIn",
        component: OldUserLogin,
    },
    {
        path: "/intro",
        name: "Intro",
        component: Intro,
    },
    {
        path: "/avatar",
        name: "Avatar",
        component: Avatar,
    }
]

const router = new VueRouter({
    routes,
    mode: "hash",
})

export default router