/**
 * 路由菜单
 * */
var menuGlobal = [
    {
        id: "douyin",
        name: "douyin",
        path: "/",
        title: "抖音",
        models: function () { return [import('./../models/douyin')]; },
        component: function () { return import('./../pages/douyin/douyin'); }
    },
    {
        id: "kuaishou",
        name: "kuaishou",
        path: "/kuaishou",
        title: "快手",
        models: function () { return [import('./../models/kuaishou')]; },
        component: function () { return import('./../pages/kuaishou/kuaishou'); }
    },
    {
        id: "huoshan",
        name: "huoshan",
        path: "/huoshan",
        title: "火山",
        models: function () { return [import('./../models/huoshan')]; },
        component: function () { return import('./../pages/huoshan/huoshan'); }
    },
];
export default {
    menuGlobal: menuGlobal
};
//# sourceMappingURL=config.js.map