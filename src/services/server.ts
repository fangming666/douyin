/**
 * 进行请求
 * */
import * as fetch from 'dva/fetch';

//处理http状态码
function checkStatus(response: any) {
    if (response.status >= 200 && response.status < 300) {
        return response.json();
    }
    const error: any = new Error(response.statusText);
    error.response = response;
    throw error;
}

//处理业务逻辑code
function manageCode(data: any) {
    // 判断是否有一些需要全局拦截的自定义code
    if (data.code !== 200) {
        return new Promise((resolve, reject) => reject(data.msg));
    }
    // 传递参数到下级
    return data;
}


/**
 * Requests a URL, returning a promise.
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @param shelterSwitch
 * @return {object}           An object containing either "data" or "err"
 */
const request = (url: string, options: any = {}) => {
    let loadingDom: any = document.getElementsByClassName("loading")[0];
    loadingDom.style.display = "flex";
    // @ts-ignore
    let {getKey, link} = options;
    let resultUrl: string = `${url}?${getKey}=${link}`;
    return Promise.race([
        fetch(resultUrl, {
            method: "GET",
        }),
        new Promise(function (resolve, reject) {
            setTimeout(() => reject(new Error('request timeout')), 20000)
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
