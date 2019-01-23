/**
 * 获取cookie
 * @param  {any} cname       cookie的key值
 * @return {string}         返回cookie的val
 * */
export default function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}
//# sourceMappingURL=getCookie.js.map