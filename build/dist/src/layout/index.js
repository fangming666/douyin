import * as tslib_1 from "tslib";
import * as React from "react";
import { Component } from "react";
import { withRouter } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PubHead from "./../components/pubHead/pubHead";
import PubInfo from "./../components/pubInfo/pubInfo";
import CommonQuestions from "./../components/commonQuestions/commonQuestions";
import PubFoot from "./../components/pubFoot/pubFoot";
import PubLoading from "./../components/pubLoading/pubLoading";
var Layout = /** @class */ (function (_super) {
    tslib_1.__extends(Layout, _super);
    function Layout(props) {
        return _super.call(this, props) || this;
    }
    Layout.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(PubHead, null),
            React.createElement(PubLoading, null),
            React.createElement("div", { className: "content" },
                React.createElement(PubInfo, null),
                React.createElement("div", null,
                    React.createElement(TransitionGroup, null,
                        React.createElement(CSSTransition, { key: location.pathname, classNames: 'fade', timeout: 100 }, this.props.children))),
                React.createElement(CommonQuestions, null),
                React.createElement(PubFoot, null))));
    };
    return Layout;
}(Component));
export default withRouter(Layout);
//# sourceMappingURL=index.js.map