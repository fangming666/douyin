/**
 * 火山解析
 * */
import request from "./server";
import { huoshanApi } from "../utils/api";
export function gain_huoshan(reqObj) {
    return request(huoshanApi, reqObj);
}
//# sourceMappingURL=huoshan.js.map