export default {
    namespace: 'app',
    state: {
        _headTitle: "抖音",//head信息
        _alertEmptySwitch:false,//显示输入内容为空提示的开关
        _navArr: [{
            name: "抖音",
            to: "/"
        },
            {
                name: "快手",
                to: "/kuaishou"
            },
            {
                name: "火山小视频",
                to: "/huoshan"
            },
        ],//nav数组
    },
    reducers: {
        //修改headTitle的信息
        "changeHeadTitle"(state: any, {payload:{headTitle}}: any) {
            return {
                ...state,
                _headTitle: headTitle,
            }
        },
        //修改提示信息的显示状态
        "changeEmptySwitch"(state: any, {payload:{alertEmptySwitch}}: any) {
            return {
                ...state,
                _alertEmptySwitch: alertEmptySwitch,
            }
        }
    },
    effects: {}
}