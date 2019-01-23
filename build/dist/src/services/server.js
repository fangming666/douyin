var _this = this;
import * as tslib_1 from "tslib";
/**
 * 进行请求
 * */
import * as fetch from 'dva/fetch';
import getCookie from "./../utils/getCookie";
import redirectToken from "./redirectToken";
//@ts-ignore
var globalUrl = ""; //请求的url
//@ts-ignore
var globalOptions = {}; //请求的参数
//处理http状态码
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response.json();
    }
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
}
//处理业务逻辑code
function manageCode(data) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            console.log("data is", data);
            // 判断是否有一些需要全局拦截的自定义code
            if (data.code === 401) {
                //401：token过期
                document.cookie = "token=";
                // await request(globalUrl, globalOptions);
                return [2 /*return*/];
            }
            else if (data.code !== 200) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return reject(data.msg); })];
            }
            // 传递参数到下级
            return [2 /*return*/, data];
        });
    });
}
/**
 * Requests a URL, returning a promise.
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
var request = function (url, options) {
    if (options === void 0) { options = {}; }
    return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var token, loadingDom, err_1, getKey, link, resultUrl;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = "";
                    //全局赋值
                    globalUrl = url;
                    globalOptions = options;
                    loadingDom = document.getElementsByClassName("loading")[0];
                    loadingDom.style.display = "block";
                    if (!!getCookie("token")) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, redirectToken()];
                case 2:
                    _a.sent();
                    token = getCookie("token");
                    console.log("token is", token);
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    return [3 /*break*/, 4];
                case 4:
                    getKey = options.getKey, link = options.link;
                    resultUrl = url + "?" + getKey + "=" + link + "?token=" + token;
                    return [2 /*return*/, Promise.race([
                            fetch(resultUrl, {
                                method: "GET",
                            }),
                            new Promise(function (resolve, reject) {
                                setTimeout(function () { return reject(new Error('request timeout')); }, 20000);
                            })
                        ])
                            .then(checkStatus)
                            .then(manageCode)
                            .then(function (data) {
                            loadingDom.style.display = "none";
                            return data;
                        })
                            .catch(function (err) {
                            loadingDom.style.display = "none";
                            throw new Error(err);
                        })];
            }
        });
    });
};
export default request;
//# sourceMappingURL=server.js.map