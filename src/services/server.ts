/**
 * 进行请求
 * */
import * as fetch from 'dva/fetch';


function parseJSON(response: any) {
    return response.json();
}

function checkStatus(response: any) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error: any = new Error(response.statusText);
    error.response = response;
    throw error;
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
    loadingDom.style.display = "block";
    let {getKey, link} = options;
    let resultUrl: string = `${url}?${getKey}=${link}`;
    return fetch(resultUrl, {
        method: "GET",
    })
        .then(checkStatus)
        .then(parseJSON)
        .then((data) => {
            loadingDom.style.display = "none";
            return data;
            // return Promise.reject(data.msg)
        })
        .catch((err: any) => {
                loadingDom.style.display = "none";
                return err
            }
        );
};

export default request