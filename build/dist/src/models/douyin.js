import * as tslib_1 from "tslib";
import { gain_douyin } from "../services/douyin";
export default {
    namespace: 'douyin',
    state: {
        _douyinAnalyze: ""
    },
    reducers: {
        //修改抖音解析路径
        "changeDouyinAnalyze": function (state, _a) {
            var data = _a.payload.data;
            return tslib_1.__assign({}, state, { _douyinAnalyze: data.video.video.replace(/\s/g, "") });
        },
    },
    effects: {
        //获取抖音解析视频
        queryDouyin: function (_a, _b) {
            var result, data, err_1;
            var payload = _a.payload;
            var call = _b.call, put = _b.put;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, call(gain_douyin, payload)];
                    case 1:
                        result = _c.sent();
                        data = result.data;
                        return [4 /*yield*/, put({
                                type: 'changeDouyinAnalyze',
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
//# sourceMappingURL=douyin.js.map