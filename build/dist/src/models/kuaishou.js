import * as tslib_1 from "tslib";
import { gain_kuaishou } from "../services/kuaishou";
export default {
    namespace: 'kuaishou',
    state: {
        _kuaishouAnalyze: ""
    },
    reducers: {
        //修改抖音解析路径
        "changeKuaishouAnalyze": function (state, _a) {
            var data = _a.payload.data;
            return tslib_1.__assign({}, state, { _kuaishouAnalyze: data.video.replace(/\s/g, "") });
        },
    },
    effects: {
        //获取快手解析视频
        queryKuaishou: function (_a, _b) {
            var result, data, err_1;
            var payload = _a.payload;
            var call = _b.call, put = _b.put;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, call(gain_kuaishou, payload)];
                    case 1:
                        result = _c.sent();
                        data = result.data;
                        return [4 /*yield*/, put({
                                type: 'changeKuaishouAnalyze',
                                payload: {
                                    data: data
                                }
                            })];
                    case 2:
                        _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _c.sent();
                        throw new Error(err_1);
                    case 4: return [2 /*return*/];
                }
            });
        }
    }
};
//# sourceMappingURL=kuaishou.js.map