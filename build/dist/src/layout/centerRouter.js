import * as tslib_1 from "tslib";
/**
 * layout包裹
 * */
import Layout from "./index";
import * as PropTypes from 'prop-types';
import { connect } from "dva";
// @ts-ignore
import React, { Component } from "react";
import { Route } from "react-router-dom";
var CenterRoute = /** @class */ (function (_super) {
    tslib_1.__extends(CenterRoute, _super);
    function CenterRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CenterRoute.prototype.componentDidMount = function () {
        //修改html的页面标题
        // let {title} = this.props;
        // document.title = title;
    };
    CenterRoute.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Layout, null,
                React.createElement(Route, tslib_1.__assign({}, this.props)))));
    };
    CenterRoute.contextTypes = {
        router: PropTypes.object.isRequired,
    };
    return CenterRoute;
}(Component));
export default connect(function (_a) {
    var app = _a.app, loading = _a.loading;
    return ({
        app: app, loading: loading
    });
})(CenterRoute);
//# sourceMappingURL=centerRouter.js.map