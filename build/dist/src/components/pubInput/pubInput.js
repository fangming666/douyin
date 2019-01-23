import * as tslib_1 from "tslib";
/**
 * 公共输入框
 * */
import * as React from "react";
import { Component } from "react";
import { connect } from "dva";
import "./pubInput.scss";
var PubInput = /** @class */ (function (_super) {
    tslib_1.__extends(PubInput, _super);
    function PubInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PubInput.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "pub-input-warp" },
            React.createElement("div", { className: "pub-input clearfix" },
                React.createElement("input", { className: "float-left pub-input-item", type: "text", ref: function (input) { return _this.input = input; }, placeholder: "请将APP里复制的视频链接粘贴到这里" }),
                React.createElement("button", { className: "float-left", onClick: function () {
                        // @ts-ignore
                        var resultVal = _this.input.value;
                        // @ts-ignore
                        return _this.props.ownAnalyze(resultVal);
                    } }, "\u89E3\u6790\u89C6\u9891")),
            this.props.app._alertEmptySwitch ? React.createElement("div", { className: "pub-input-alert" }, this.props.alertInfo) : null));
    };
    return PubInput;
}(Component));
export default connect(function (_a) {
    var app = _a.app;
    return ({
        app: app
    });
})(PubInput);
//# sourceMappingURL=pubInput.js.map