/**
 * 快手解析
 * */
import request from "./server";
import {kuaishouApi} from "../utils/api";


export function gain_kuaishou(reqObj:any) {
    return request(kuaishouApi,reqObj)
}
