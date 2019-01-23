import * as tslib_1 from "tslib";
import * as React from "react";
import { Component } from "react";
import { connect } from "dva";
import "./pubInfo.scss";
var PubInfo = /** @class */ (function (_super) {
    tslib_1.__extends(PubInfo, _super);
    function PubInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PubInfo.prototype.render = function () {
        return (React.createElement("div", { className: "pub-info" },
            React.createElement("p", { className: 'add-title' },
                "\u672C\u7AD9\u5DF2\u652F\u6301\u89E3\u6790\u4E0B\u8F7D",
                React.createElement("b", null, "\u5FEB\u624B"),
                "\u3001",
                React.createElement("b", null, "\u706B\u5C71\u5C0F\u89C6\u9891"),
                "\u3001",
                React.createElement("b", null, "\u5FEB\u624B"),
                "\u5E73\u53F0\u7684\u89C6\u9891, \u8BF7\u901A\u8FC7\u9875\u9762\u9876\u90E8\u5BFC\u822A\u83DC\u5355\u9009\u62E9."),
            React.createElement("p", { className: 'question-title' }, "\u4F7F\u7528\u65B9\u6CD5\uFF1A"),
            React.createElement("ol", null,
                React.createElement("li", null,
                    "\u6253\u5F00",
                    this.props.app._headTitle,
                    "APP\uFF0C\u70B9\u5F00\u67D0\u4E2A\u89C6\u9891\uFF0C\u70B9\u51FB\u9876\u90E8\u5206\u4EAB\u6309\u94AE\uFF0C\u5728\u5206\u4EAB\u5F39\u6846\u4E2D\u70B9\u51FB\u590D\u5236\u94FE\u63A5\u6216\u901A\u8FC7\u5206\u4EAB\u5230\u5FAE\u4FE1QQ\u7B49\u83B7\u53D6\u5206\u4EAB\u94FE\u63A5"),
                React.createElement("li", null, "\u5C06\u521A\u624D\u590D\u5236\u7684\u94FE\u63A5\u7C98\u8D34\u5230\u4E0B\u9762\u7684\u8F93\u5165\u6846"))));
    };
    return PubInfo;
}(Component));
export default connect(function (_a) {
    var app = _a.app;
    return ({
        app: app
    });
})(PubInfo);
//# sourceMappingURL=pubInfo.js.map