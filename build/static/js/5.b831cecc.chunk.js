webpackJsonp([5],{337:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),a=n(0),o=(n.n(a),n(39)),i=(n.n(o),n(344)),p=n(347),s=function(t){function e(e){var n=t.call(this,e)||this;return n.state={alertInfo:"\u8bf7\u5148\u5c06\u89c6\u9891\u94fe\u63a5\u7c98\u8d34\u5230\u4e0a\u9762\u7684\u8f93\u5165\u6846",analyzeSuccess:!1},n}return r.c(e,t),e.prototype.analyze=function(t){return r.b(this,void 0,void 0,function(){var e,n,a;return r.d(this,function(r){return e=this.props.dispatch,n=/http:\/\/[a-zA-Z.0-9]+\/hotsoon\/s\/[A-Za-z0-9--]+\//,a=/[\s\u4E00-\u9FA5a-zA-z0-9#@!$%^&*()\uff08\uff09\uff0c\u3010\u3011\uff01_\-+/_,."~`\xb7\uff01@#\uffe5%\u2026\u2026&*\uff08\uff09\u300a\u300b><\uff1f\uff0c\u3002/]*http:\/\/[a-zA-Z.0-9]+\/hotsoon\/s\/[A-Za-z0-9--]+\//,Object(p.a)({dispatch:e,Val:t,judge:n,judgeSwitch:a,that:this,query:"huoshan/queryHuoshan"}),[2]})})},e.prototype.render=function(){return a.createElement("div",null,a.createElement("div",{className:"dy-warp"},a.createElement(i.a,{alertInfo:this.state.alertInfo,ownAnalyze:this.analyze.bind(this)}),this.state.analyzeSuccess,this.state.analyzeSuccess?a.createElement("div",{className:"video-content"},a.createElement("video",{width:"320",height:"240",controls:!0},a.createElement("source",{src:this.props.huoshan._huoshanAnalyze,type:"video/mp4"}),a.createElement("source",{src:this.props.huoshan._huoshanAnalyze,type:"video/ogg"}),"\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301 video \u6807\u7b7e\u3002"),a.createElement("a",{className:"down-btn",href:this.props.huoshan._huoshanAnalyze,download:this.props.huoshan._huoshanAnalyze,target:"block"},"\u70b9\u51fb\u4e0b\u8f7d")):null))},e}(a.Component);e.default=Object(o.connect)(function(t){return{app:t.app,huoshan:t.huoshan}})(s)},344:function(t,e,n){"use strict";var r=n(9),a=n(0),o=(n.n(a),n(39)),i=(n.n(o),n(345)),p=(n.n(i),function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.c(e,t),e.prototype.render=function(){var t=this;return a.createElement("div",{className:"pub-input-warp"},a.createElement("div",{className:"pub-input clearfix"},a.createElement("input",{className:"float-left pub-input-item",type:"text",ref:function(e){return t.input=e},placeholder:"\u8bf7\u5c06APP\u91cc\u590d\u5236\u7684\u89c6\u9891\u94fe\u63a5\u7c98\u8d34\u5230\u8fd9\u91cc"}),a.createElement("button",{className:"float-left",onClick:function(){var e=t.input.value;return t.props.ownAnalyze(e)}},"\u89e3\u6790\u89c6\u9891")),this.props.app._alertEmptySwitch?a.createElement("div",{className:"pub-input-alert"},this.props.alertInfo):null)},e}(a.Component));e.a=Object(o.connect)(function(t){return{app:t.app}})(p)},345:function(t,e,n){var r=n(346);"string"===typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0};n(22)(r,a);r.locals&&(t.exports=r.locals)},346:function(t,e,n){(t.exports=n(21)(void 0)).push([t.i,".pub-input {\n  margin-top: 30px;\n  margin-bottom: 10px; }\n  .pub-input input {\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 6px;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    outline: none;\n    width: calc(100% - 140px); }\n  .pub-input button {\n    width: 106px;\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 6px;\n    color: #fff;\n    background-color: #20a0ff;\n    border-color: #20a0ff;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    user-select: none;\n    background-image: none;\n    border: 1px solid transparent;\n    cursor: pointer; }\n    .pub-input button:hover, .pub-input button:focus {\n      color: #fff;\n      background-color: #4db3ff;\n      border-color: #4db3ff; }\n\n.pub-input-alert {\n  color: #a94442;\n  background-color: #f2dede;\n  padding: 5px 15px;\n  text-align: center;\n  margin-bottom: 20px;\n  border: 1px solid #ebccd1;\n  border-radius: 4px; }\n",""])},347:function(t,e,n){"use strict";e.a=function(t){return r.b(this,void 0,void 0,function(){var e,n,a,o,i,p,s,c,u,l;return r.d(this,function(r){switch(r.label){case 0:return e=t.dispatch,n=t.Val,a=t.that,o=t.judge,i=t.judgeSwitch,p=t.query,n?[3,1]:(e({type:"app/changeEmptySwitch",payload:{alertEmptySwitch:!0}}),[3,5]);case 1:return s=o.exec(n),i.test(s)?[3,2]:(a.setState({alertInfo:"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u89c6\u9891\u94fe\u63a5"}),e({type:"app/changeEmptySwitch",payload:{alertEmptySwitch:!0}}),[3,5]);case 2:return r.trys.push([2,4,,5]),e({type:"app/changeEmptySwitch",payload:{alertEmptySwitch:!1}}),[4,e({type:p,payload:{link:s[0],getKey:"link"}})];case 3:return r.sent(),a.setState({analyzeSuccess:!0}),[3,5];case 4:return c=r.sent(),e({type:"app/changeEmptySwitch",payload:{alertEmptySwitch:!0}}),a.setState({analyzeSuccess:!1}),u=c.toString(),l="",u.split("Error: Error:")?(l=u.split("Error: Error:")[1],a.setState({alertInfo:l})):a.setState({alertInfo:c.toString()}),[3,5];case 5:return[2]}})})};var r=n(9)}});
//# sourceMappingURL=5.b831cecc.chunk.js.map