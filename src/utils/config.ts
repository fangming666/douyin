/**
 * 路由菜单
 * */
const menuGlobal: object[] = [
    {
        id: "douyin",
        name: "douyin",
        path: "/",
        title:"抖音",
        models: () => [import('./../models/douyin')],
        component: () => import('./../pages/douyin/douyin')
    },
    {
        id: "kuaishou",
        name: "kuaishou",
        path: "/kuaishou",
        title:"快手",
        models: () => [import('./../models/kuaishou')],
        component: () => import('./../pages/kuaishou/kuaishou')
    },
    {
        id: "huoshan",
        name: "huoshan",
        path: "/huoshan",
        title:"火山",
        models: () => [import('./../models/huoshan')],
        component: () => import('./../pages/huoshan/huoshan')
    },


];
export default {
    menuGlobal
}