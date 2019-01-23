import * as fetch from "dva/fetch";
import { tokenApi } from "../utils/api";
/**
 * 获取token
 * */
export default function redirectToken() {
    return fetch(tokenApi, {
        method: "GET",
    }).then(function (response) {
        return response.json();
    }).then(function (res) {
        var token = res.data.token;
        document.cookie = "token=" + token;
        return res;
    }).catch(function (err) {
        throw new Error(err);
    });
}
//# sourceMappingURL=redirectToken.js.map