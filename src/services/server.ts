/**
 * 进行请求
 * */
//@ts-ignore
import * as $ from 'jquery';
import {tokenApi} from "../utils/api";

//ajax请求改为promise模式，
const ajaxPromise: any = (param: any) => {
    return new Promise((resovle, reject) => {
        $.ajax({
            "type": param.type || "get",
            "async": param.async || true,
            "url": param.url,
            "data": param.data || "",
            "timeout": 10000,
            "success": res => {
                resovle(res);
            },
            "error": err => {
                reject(err);
            }
        })
    })
}

/**
 * Requests a URL, returning a promise.
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
const request: any = async (url: string, options: any = {}) => {
    let token: any = '';


    //显示loading
    let loadingDom: any = document.getElementsByClassName("loading")[0];
    loadingDom.style.display = "flex";


    //若cookie是空则去获取cookie
    try {
        let result = await ajaxPromise({url: tokenApi});
        token = result.data.token;
    } catch (err) {
        throw new Error(err)
    }


    //去请求解析
    return ajaxPromise({url, data: {token, link: options.link}}).then((res: any) => {
            loadingDom.style.display = "none";
            return res
        }
    ).catch((err: any) => {
        loadingDom.style.display = "none";
        throw new Error(err)
    })


};

export default request
