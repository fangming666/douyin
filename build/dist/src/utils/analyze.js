import * as tslib_1 from "tslib";
/*
* 进行解析
* **/
export default function Analyze(req) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var dispatch, Val, that, judge, judgeSwitch, query, resultVal, err_1, errString, resultErr;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dispatch = req.dispatch, Val = req.Val, that = req.that, judge = req.judge, judgeSwitch = req.judgeSwitch, query = req.query;
                    if (!!Val) return [3 /*break*/, 1];
                    dispatch({
                        type: "app/changeEmptySwitch",
                        payload: {
                            alertEmptySwitch: true
                        }
                    });
                    return [3 /*break*/, 5];
                case 1:
                    resultVal = judge.exec(Val);
                    if (!!judgeSwitch.test(resultVal)) return [3 /*break*/, 2];
                    //视频格式不正确的时候
                    that.setState({
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
                            type: query,
                            payload: {
                                link: resultVal[0],
                                getKey: "link"
                            }
                        })];
                case 3:
                    _a.sent();
                    that.setState({
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
                    that.setState({
                        analyzeSuccess: false
                    });
                    errString = err_1.toString();
                    resultErr = "";
                    if (errString.split("Error: Error:")) {
                        resultErr = errString.split("Error: Error:")[1];
                        // @ts-ignore
                        that.setState({
                            alertInfo: resultErr
                        });
                    }
                    else {
                        that.setState({
                            alertInfo: err_1.toString(),
                        });
                    }
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=analyze.js.map