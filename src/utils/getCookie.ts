/**
 * 获取cookie
 * @param  {any} cname       cookie的key值
 * @return {string}         返回cookie的val
 * */
export default function getCookie(cname:any)
{
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i=0; i<ca.length; i++)
    {
        let c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}