import * as tslib_1 from "tslib";
import * as React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import CenterRouter from "./../layout/centerRouter";
import dynamic from 'dva/dynamic';
import { config } from './../utils/index';
var menuGlobal = config.menuGlobal;
function RouterConfig(_a) {
    var history = _a.history, app = _a.app;
    return (React.createElement(BrowserRouter, null,
        React.createElement(Switch, null, menuGlobal.map(function (_a, index) {
            var path = _a.path, title = _a.title, dynamics = tslib_1.__rest(_a, ["path", "title"]);
            return React.createElement(CenterRouter, { exact: true, key: index, title: title, path: path, component: dynamic(tslib_1.__assign({ app: app }, dynamics)) });
        }))));
}
export default RouterConfig;
//# sourceMappingURL=index.js.map