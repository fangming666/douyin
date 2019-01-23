import * as tslib_1 from "tslib";
import * as React from "react";
import { Component } from "react";
import loadingImg from "./../../assets/imgs/loading.svg";
import "./pubLoading.scss";
var Publoading = /** @class */ (function (_super) {
    tslib_1.__extends(Publoading, _super);
    function Publoading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Publoading.prototype.render = function () {
        return (React.createElement("div", { className: "loading" },
            React.createElement("img", { src: loadingImg, alt: "loading" })));
    };
    return Publoading;
}(Component));
export default Publoading;
//# sourceMappingURL=pubLoading.js.map