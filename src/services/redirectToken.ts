import * as fetch from "dva/fetch";
import {tokenApi} from "../utils/api";

/**
 * 获取token
 * */

export default function redirectToken() {
    fetch(tokenApi, {
        method: "GET",
    }).then(function (response) {
       return response.json();
    }).then(function (res: any) {
        console.log("res IS", res);
        // document.cookie = `token=${res}`;
    }).catch(err => {
        throw new Error(err)
    })
}