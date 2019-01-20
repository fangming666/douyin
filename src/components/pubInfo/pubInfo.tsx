import * as React from "react";
import {Component} from "react";
import {connect} from "dva";
 import "./pubInfo.scss";

type PageOwnProps = {
    app:any
}

type PageState = {}


class PubInfo extends Component <PageOwnProps, PageState> {
    public render() {
        return (
            <div className={"pub-info"}>
                <p>
                    本站已支持解析下载<b>快手</b>、<b>火山小视频</b>、<b>快手</b>平台的视频, 请通过页面顶部导航菜单选择.
                </p>
                <p>
                    使用方法：
                </p>
                <ol>
                    <li>打开{this.props.app._headTitle}APP，点开某个视频，点击顶部分享按钮，在分享弹框中点击复制链接或通过分享到微信QQ等获取分享链接</li>
                    <li>将刚才复制的链接粘贴到下面的输入框</li>
                </ol>
            </div>
        )
    }
}

export default connect(({app}:any) =>({
    app
}))(PubInfo);