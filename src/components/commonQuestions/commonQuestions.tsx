/**
 * 常见问题
 * */
import * as React from "react";
import {Component} from "react";
import "./commonQuestions.scss"

type PageOwnProps = {}

type PageState = {}


class CommonQuestions extends Component <PageOwnProps, PageState> {
    public render() {
        return (
            <div className={'common-questions'}>
                <p className={'question-title'}>
                    常见问题：
                </p>
                <ol>
                    <li>Android手机上可以用吗？
                        <p>
                            可以的，Android手机在常用的Chrome、UC、360、QQ等浏览器上都可以很方便的使用本站。推荐使用Chrome浏览器获得最佳下载体验。
                        </p>
                    </li>
                    <li>iOS设备（iPhone、iPad、iPod）上点击下载视频按钮后，跳转到视频页面，并没有直接下载，怎么办？
                        <p>
                            因Safari及微信内置浏览器均不支持下载文件，所以保存视频需要借助第三方App来完成下载，建议iOS用户在App Store下载免费的Documents
                            6，然后在Documents的内置浏览器中使用本站，可以完美下载视频，并且Documents支持将下载的视频移到手机相册。参考: iPhone上利用Documents下载和管理视频教程
                        </p></li>
                    <li>我在电脑上用的是IE浏览器，点下载视频按钮后，出现跟上面那用iPad的哥们一样的情况，跳转到视频页面，如何下载到本地呢？
                        <p>电脑上少数浏览器不支持直接下载，但可以在下载视频按钮上点击右键，然后选择"目标另存为"或"链接存储为"来下载视频；或者到跳转后的视频页面，在视频画面上点击右键，然后选择"视频另存为"来下载视频。当然，我们更推荐在电脑上使用如谷歌Chrome浏览器、360浏览器极速模式、QQ浏览器极速模式等现代浏览器来获得最佳上网体验。</p>
                    </li>
                </ol>
            </div>
        )
    }
}

export default CommonQuestions;
