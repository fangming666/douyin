import * as tslib_1 from "tslib";
/**
 * 公共的底部信息
 * */
import * as React from "react";
import { Component } from "react";
import "./pubFoot.scss";
var PubFoot = /** @class */ (function (_super) {
    tslib_1.__extends(PubFoot, _super);
    function PubFoot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PubFoot.prototype.render = function () {
        return (React.createElement("div", { className: "pub-foot" },
            React.createElement("p", { className: 'contact' },
                "\u6280\u672F\u652F\u6301QQ\u7FA4:",
                React.createElement("a", { href: "https://jq.qq.com/?_wv=1027&k=57yE7he" }, "878427409")),
            React.createElement("p", { className: 'prompt' }, "\u89C6\u9891\u5F52\u76F8\u5173\u7F51\u7AD9\u53CA\u4F5C\u8005\u6240\u6709\uFF0C\u672C\u7AD9\u4E0D\u5B58\u50A8\u4EFB\u4F55\u89C6\u9891\u53CA\u56FE\u7247\u3002"),
            React.createElement("p", null, "Copyright \u00A9 2019 \u5C0F\u51E1\u535A\u5BA2 \u9C81ICP\u590717049248\u53F7-1")));
    };
    return PubFoot;
}(Component));
export default PubFoot;
//# sourceMappingURL=pubFoot.js.map