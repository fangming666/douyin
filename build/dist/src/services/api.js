import Taro from '@tarojs/taro';
import { isWeiXin } from "@utils/validate";
import Toast from '@utils/ui/toast';
export default {
    /**
     * get请求
     * @param {string} url 请求地址
     * @param {object} data 数据
     * @param {object} headers 头部配置
     * @return {Promise}
     */
    get: function (url, data, headers) {
        if (data === void 0) { data = ''; }
        if (headers === void 0) { headers = {}; }
        return this.send({ url: url, data: data, headers: headers });
    },
    /**
     * post请求
     * @param {string} url 请求地址
     * @param {object} data 数据
     * @param {object} headers 头部配置
     * @return {Promise}
     */
    post: function (url, data, headers) {
        if (headers === void 0) { headers = {}; }
        return this.baseOptions({ url: url, data: data, headers: headers }, 'POST');
    },
    /**
     * 基础配置
     * @param {object} params 参数
     * @param {string} method 方法
     * @return {Promise}
     */
    baseOptions: function (params, method) {
        if (method === void 0) { method = 'GET'; }
        var url = params.url, data = params.data;
        var systemInfo = Taro.getSystemInfoSync();
        var contentType = params.headers.contentType || 'application/x-www-form-urlencoded';
        var option = {
            isShowLoading: true,
            loadingText: '正在加载',
            url: process.env.API_URL + url,
            data: data,
            method: method,
            header: {
                'Platform': systemInfo.platform,
                'Device': systemInfo.brand + systemInfo.model,
                'System': "system=" + systemInfo.system + ";screen=" + systemInfo.screenWidth + "*" + systemInfo.screenHeight,
                'Content-Type': contentType,
                'X-Request-From': this.setRequestFrom()
            },
        };
        return option;
    },
    /**
     * 发送请求
     * @param {object} params
     * @param {string} method
     */
    send: function (params, method) {
        if (method === void 0) { method = 'GET'; }
        try {
            // 数据封装,请求处理
            var option = this.baseOptions(params, method);
            return Taro.request(option).then(function (res) {
                // 如果错误的状态码不等于200走error逻辑
                if (parseInt(res.statusCode) === 200) {
                    // 判断是否有一些需要全局拦截的自定义code
                    switch (res.data.code) {
                        default:
                            break;
                    }
                    // 传递参数到下级
                    return res;
                }
                // 返回“pending”状态的Promise对象中断链式调用
                return new Promise(function () { return Toast.showToast('系统繁忙,请稍后重试'); });
            });
        }
        catch (error) {
            throw new Error(error);
        }
    },
    setRequestFrom: function () {
        switch (process.env.TARO_ENV) {
            case 'h5':
                return isWeiXin() ? 'wx_web' : 'web';
            case 'weapp':
                return 'wx_applet';
            default:
                return '';
        }
    },
    /**
     * 简单的捕捉那些系统级别异常的如业务操作失败,系统错误等等的状态响应
     * @param {number} statusCode http返回的状态码
     * @param {number} bussinessCode 业务返回的code
     */
    catchSuccess: function (statusCode, bussinessCode) {
        // if () {
        // }
    }
};
//# sourceMappingURL=api.js.map