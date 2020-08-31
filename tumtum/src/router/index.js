import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import("../views/Login/Login");
// const CreateCount = () => import("../views/Login/childComponts/CreateCount");
const TestCreateCount = () => import("../views/Login/childComponts/TestCreateCount");
const OldUserLogin = () => import("../views/Login/childComponts/OldUserLogin");
const Intro = () => import("../views/Login/childComponts/Intro");

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
        path: "/testcreate",
        name: "TestCreate",
        component: TestCreateCount,
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
    }
]

const router = new VueRouter({
  routes,
  mode: "history",
})

export default router