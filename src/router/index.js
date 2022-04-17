import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
        path: "/page1",
        name: "page1",
        component: () => import("../views/Page1.vue")
    },
    {
        path: "/page2",
        name: "page2",
        component: () => import("../views/Page2.vue")
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router