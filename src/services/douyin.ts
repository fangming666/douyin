/**
 * 抖音解析
 * */
import request from "./server";
import {douyinApi} from "../utils/api";


export function gain_douyin(reqObj:any) {
    return request(douyinApi,reqObj)
}
