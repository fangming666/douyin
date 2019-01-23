import * as tslib_1 from "tslib";
/*
* 抖音页面
* */
import * as React from "react";
import { Component } from "react";
import { connect } from "dva";
import PubInput from "./../../components/pubInput/pubInput";
import redirectToken from "./../../services/redirectToken";
import "./douyin.scss";
var Douyin = /** @class */ (function (_super) {
    tslib_1.__extends(Douyin, _super);
    function Douyin(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            alertInfo: "请先将视频链接粘贴到上面的输入框",
            analyzeSuccess: false,
        };
        return _this;
    }
    //进行解析
    Douyin.prototype.analyze = function (Val) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var dispatch, judge, resultVal, judgeSwitch, err_1, errString, resultErr;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dispatch = this.props.dispatch;
                        if (!!Val) return [3 /*break*/, 1];
                        dispatch({
                            type: "app/changeEmptySwitch",
                            payload: {
                                alertEmptySwitch: true
                            }
                        });
                        return [3 /*break*/, 5];
                    case 1:
                        judge = /http:\/\/v.douyin.com\/[A-Za-z0-9]+\//;
                        resultVal = judge.exec(Val);
                        judgeSwitch = /[\u4E00-\u9FA5a-zA-z0-9#@!$%^&*()_+/_,."~`·！@#￥%……&*（）《》？，。/]*http:\/\/v.douyin.com\/[A-Za-z0-9]+\/[\u4E00-\u9FA5a-zA-z0-9#@!$%^&*()_+/_,."~`·！@#￥%……&*（）《》？，。/]*/;
                        if (!!judgeSwitch.test(resultVal)) return [3 /*break*/, 2];
                        //视频格式不正确的时候
                        this.setState({
                            alertInfo: "请输入正确的视频链接"
                        });
                        dispatch({
                            type: "app/changeEmptySwitch",
                            payload: {
                                alertEmptySwitch: true
                            }
                        });
                        return [3 /*break*/, 5];
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        dispatch({
                            type: "app/changeEmptySwitch",
                            payload: {
                                alertEmptySwitch: false
                            }
                        });
                        return [4 /*yield*/, dispatch({
                                type: "douyin/queryDouyin",
                                payload: {
                                    link: resultVal[0],
                                    getKey: "link"
                                }
                            })];
                    case 3:
                        _a.sent();
                        this.setState({
                            analyzeSuccess: true
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        //显示接口错误信息
                        dispatch({
                            type: "app/changeEmptySwitch",
                            payload: {
                                alertEmptySwitch: true
                            }
                        });
                        this.setState({
                            analyzeSuccess: false
                        });
                        errString = err_1.toString();
                        resultErr = "";
                        if (errString.split("Error: Error:")) {
                            resultErr = errString.split("Error: Error:")[1];
                            // @ts-ignore
                            this.setState({
                                alertInfo: resultErr
                            });
                        }
                        else {
                            this.setState({
                                alertInfo: err_1.toString(),
                            });
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Douyin.prototype.goToken = function () {
        redirectToken();
    };
    Douyin.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("button", { onClick: this.goToken.bind(this) }, "click me"),
            React.createElement("div", { className: "dy-warp" },
                React.createElement(PubInput, { alertInfo: this.state.alertInfo, ownAnalyze: this.analyze.bind(this) }),
                this.state.analyzeSuccess,
                this.state.analyzeSuccess ?
                    React.createElement("div", null,
                        React.createElement("video", { width: "320", height: "240", controls: true },
                            React.createElement("source", { src: this.props.douyin._douyinAnalyze, type: "video/mp4" }),
                            React.createElement("source", { src: this.props.douyin._douyinAnalyze, type: "video/ogg" }),
                            "\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 video \u6807\u7B7E\u3002"),
                        React.createElement("a", { className: "down-btn", href: this.props.douyin._douyinAnalyze, download: this.props.douyin._douyinAnalyze, target: "block" }, "\u70B9\u51FB\u4E0B\u8F7D")) :
                    null)));
    };
    return Douyin;
}(Component));
export default connect(function (_a) {
    var app = _a.app, douyin = _a.douyin;
    return ({
        app: app, douyin: douyin
    });
})(Douyin);
//# sourceMappingURL=douyin.js.map