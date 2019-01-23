import * as tslib_1 from "tslib";
/**
 * 公共的头部
 * */
import * as React from "react";
import { Component } from "react";
import logoImg from "./../../assets/imgs/logo.png";
import { NavLink } from "react-router-dom";
import { connect } from "dva";
import "./pubHead.scss";
var PubHead = /** @class */ (function (_super) {
    tslib_1.__extends(PubHead, _super);
    function PubHead(props) {
        return _super.call(this, props) || this;
    }
    PubHead.prototype.changeTitle = function (headTitle) {
        //改变head信息
        var dispatch = this.props.dispatch;
        dispatch({
            type: "app/changeHeadTitle",
            payload: {
                headTitle: headTitle
            }
        });
        //隐藏错误提示
        dispatch({
            type: "app/changeEmptySwitch",
            payload: {
                alertEmptySwitch: false
            }
        });
    };
    PubHead.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "pub-head-warp" },
            React.createElement("div", { className: "pub-head clearfix" },
                React.createElement("a", { className: "float-left clearfix", href: "#" },
                    React.createElement("img", { src: logoImg, alt: "logo", className: "float-left" }),
                    React.createElement("span", { className: "float-left" },
                        this.props.app._headTitle,
                        "\u89E3\u6790\u4E0B\u8F7D")),
                React.createElement("div", { className: 'head-nav float-left' }, this.props.app._navArr.map(function (item, index) {
                    return React.createElement(NavLink, { exact: true, activeClassName: 'nav-active', to: item.to, key: index, onClick: _this.changeTitle.bind(_this, item.name) }, item.name);
                })))));
    };
    return PubHead;
}(Component));
export default connect(function (_a) {
    var app = _a.app;
    return ({
        app: app
    });
})(PubHead);
//# sourceMappingURL=pubHead.js.map