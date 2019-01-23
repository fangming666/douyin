/**
 * 快手解析
 * */
import request from "./server";
import { kuaishouApi } from "../utils/api";
export function gain_kuaishou(reqObj) {
    return request(kuaishouApi, reqObj);
}
//# sourceMappingURL=kuaishou.js.map