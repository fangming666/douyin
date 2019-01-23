/**
 * 火山解析
 * */
import request from "./server";
import {huoshanApi} from "../utils/api";


export function gain_huoshan(reqObj:any) {
    return request(huoshanApi,reqObj)
}
