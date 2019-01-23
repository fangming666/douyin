import * as tslib_1 from "tslib";
export default {
    namespace: 'app',
    state: {
        _headTitle: "抖音",
        _alertEmptySwitch: false,
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
        ],
    },
    reducers: {
        //修改headTitle的信息
        "changeHeadTitle": function (state, _a) {
            var headTitle = _a.payload.headTitle;
            return tslib_1.__assign({}, state, { _headTitle: headTitle });
        },
        //修改提示信息的显示状态
        "changeEmptySwitch": function (state, _a) {
            var alertEmptySwitch = _a.payload.alertEmptySwitch;
            return tslib_1.__assign({}, state, { _alertEmptySwitch: alertEmptySwitch });
        }
    },
    effects: {}
};
//# sourceMappingURL=app.js.map