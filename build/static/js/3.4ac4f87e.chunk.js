webpackJsonp([3],{332:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(9),o=e(349);t.default={namespace:"douyin",state:{_douyinAnalyze:""},reducers:{changeDouyinAnalyze:function(n,t){var e=t.payload.data;return r.a({},n,{_douyinAnalyze:e.video.video.replace(/\s/g,"")})}},effects:{queryDouyin:function(n,t){var e,u,a,c=n.payload,i=t.call,s=t.put;return r.d(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),[4,i(o.a,c)];case 1:return e=n.sent(),u=e.data,[4,s({type:"changeDouyinAnalyze",payload:{data:u}})];case 2:return n.sent(),[3,4];case 3:throw a=n.sent(),new Error(a);case 4:return[2]}})}}}},338:function(n,t,e){n.exports=e(341)},339:function(n,t,e){"use strict";e.d(t,"d",function(){return r}),e.d(t,"a",function(){return o}),e.d(t,"c",function(){return u}),e.d(t,"b",function(){return a});var r="/api/settoken",o="/api/douyin",u="/api/kuaishou",a="/api/huoshan"},340:function(n,t,e){"use strict";var r=e(9),o=e(338),u=(e.n(o),e(342)),a=e(343),c=this,i="",s={};function d(n){if(n.status>=200&&n.status<300)return n.json();var t=new Error(n.statusText);throw t.response=n,t}function f(n){return r.b(this,void 0,void 0,function(){return r.d(this,function(t){return 401===n.code?(document.cookie="token=",[2,l(i,s)]):200!==n.code?[2,new Promise(function(t,e){return e(n.msg)})]:[2,n]})})}var l=function(n,t){return void 0===t&&(t={}),r.b(c,void 0,void 0,function(){var e,c,l,h,y,p;return r.d(this,function(r){switch(r.label){case 0:if(e="",i=n,s=t,(c=document.getElementsByClassName("loading")[0]).style.display="flex",Object(u.a)("token"))return[3,4];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,Object(a.a)()];case 2:return r.sent(),e=Object(u.a)("token"),[3,4];case 3:throw l=r.sent(),new Error(l);case 4:return h=t.getKey,y=t.link,p=n+"?"+h+"="+y+"&token="+e,[2,Promise.race([o(p,{method:"GET"}),new Promise(function(n,t){setTimeout(function(){return t(new Error("request timeout"))},2e4)})]).then(d).then(f).then(function(n){return c.style.display="none",n}).catch(function(n){throw c.style.display="none",new Error(n)})]}})})};t.a=l},341:function(n,t,e){e(142),n.exports=self.fetch.bind(self)},342:function(n,t,e){"use strict";t.a=function(n){var t,e=new RegExp("(^| )"+n+"=([^;]*)(;|$)");return(t=document.cookie.match(e))?unescape(t[2]):null}},343:function(n,t,e){"use strict";t.a=function(){return r(o.d,{method:"GET"}).then(function(n){return n.json()}).then(function(n){var t=n.data.token;return document.cookie="token="+t,n}).catch(function(n){throw new Error(n)})};var r=e(338),o=(e.n(r),e(339))},349:function(n,t,e){"use strict";t.a=function(n){return Object(r.a)(o.a,n)};var r=e(340),o=e(339)}});
//# sourceMappingURL=3.4ac4f87e.chunk.js.map