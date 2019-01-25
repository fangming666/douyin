/**
 * 进行请求
 * */
//@ts-ignore
import * as fetch from 'dva/fetch';
//@ts-ignore
import getCookie from "./../utils/getCookie"
import redirectToken from "./redirectToken"
//@ts-ignore
let globalUrl: string = "";//请求的url
//@ts-ignore
let globalOptions: any = {};//请求的参数


//处理http状态码
//@ts-ignore
function checkStatus(response: any) {
    if (response.status >= 200 && response.status < 300) {
        return response.json();
    }
    const error: any = new Error(response.statusText);
    error.response = response;
    throw error;
}


//处理业务逻辑code
//@ts-ignore
async function manageCode(data: any) {
    // 判断是否有一些需要全局拦截的自定义code
    if (data.code === 401) {
        //401：token过期
        return request(globalUrl, globalOptions);
    } else if (data.code !== 200) {
        return new Promise((resolve, reject) => reject(data.msg));
    } else {
        return data;
    }

}


/**
 * Requests a URL, returning a promise.
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
const request: any = async (url: string, options: any = {}) => {
    let token: any = '';

    //全局赋值
    globalUrl = url;
    globalOptions = options;


    //显示loading
    let loadingDom: any = document.getElementsByClassName("loading")[0];
    loadingDom.style.display = "flex";


    //若cookie是空则去获取cookie
    try {
        token = await redirectToken();
    } catch (err) {
        throw new Error(err)
    }

    //拼装url为get
    let {getKey, link} = options;
    let resultUrl: string = `${url}?${getKey}=${link}&token=${token}`;


    let myHeaders = new Headers();
    return Promise.race([
        fetch(resultUrl, {
            method: "GET",
            headers: myHeaders,
            credentials: "include"
        }),
        new Promise(function (resolve, reject) {
            setTimeout(() => reject(new Error('请求超时，请重试')), 20000)
        })])
        .then(checkStatus)
        .then(manageCode)
        .then((data) => {
            loadingDom.style.display = "none";
            return data;
        })
        .catch((err: any) => {
                loadingDom.style.display = "none";
                throw new Error(err)
            }
        );

};

export default request
