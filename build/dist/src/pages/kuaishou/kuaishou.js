import * as tslib_1 from "tslib";
/*
* 抖音页面
* */
import * as React from "react";
import { Component } from "react";
import { connect } from "dva";
import PubInput from "./../../components/pubInput/pubInput";
import Analyze from "./../../utils/analyze";
var Kuaishou = /** @class */ (function (_super) {
    tslib_1.__extends(Kuaishou, _super);
    function Kuaishou(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            alertInfo: "请先将视频链接粘贴到上面的输入框",
            analyzeSuccess: false,
        };
        return _this;
    }
    //进行解析
    Kuaishou.prototype.analyze = function (Val) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var dispatch, judge, judgeSwitch;
            return tslib_1.__generator(this, function (_a) {
                dispatch = this.props.dispatch;
                judge = /(http:\/\/yaan.m.chenzhongtech.com\/s\/[A-Za-z0-9--]+)|(http:\/\/www.gifshow.com\/s\/[A-Za-z0-9--]+)/;
                judgeSwitch = /([\s\u4E00-\u9FA5a-zA-z0-9#@!$%^&*()_\-+/_,."~`·！@#￥%……&*（）《》><？，。/]*http:\/\/yaan.m.chenzhongtech.com\/s\/[A-Za-z0-9]+[\u4E00-\u9FA5a-zA-z0-9#@!$%^&*()_+/_,."~`·！@#￥%……&*（）《》？，。/]*)|(http:\/\/www.gifshow.com\/s\/[A-Za-z0-9--]+)/;
                Analyze({ dispatch: dispatch, Val: Val, judge: judge, judgeSwitch: judgeSwitch, that: this, query: "kuaishou/queryKuaishou" });
                return [2 /*return*/];
            });
        });
    };
    Kuaishou.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", { className: "dy-warp" },
                React.createElement(PubInput, { alertInfo: this.state.alertInfo, ownAnalyze: this.analyze.bind(this) }),
                this.state.analyzeSuccess,
                this.state.analyzeSuccess ?
                    React.createElement("div", null,
                        React.createElement("video", { width: "320", height: "240", controls: true },
                            React.createElement("source", { src: this.props.kuaishou._kuaishouAnalyze, type: "video/mp4" }),
                            React.createElement("source", { src: this.props.kuaishou._kuaishouAnalyze, type: "video/ogg" }),
                            "\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 video \u6807\u7B7E\u3002"),
                        React.createElement("a", { className: "down-btn", href: this.props.kuaishou._kuaishouAnalyze, download: this.props.kuaishou._kuaishouAnalyze, target: "block" }, "\u70B9\u51FB\u4E0B\u8F7D")) :
                    null)));
    };
    return Kuaishou;
}(Component));
export default connect(function (_a) {
    var app = _a.app, kuaishou = _a.kuaishou;
    return ({
        app: app, kuaishou: kuaishou
    });
})(Kuaishou);
//# sourceMappingURL=kuaishou.js.map