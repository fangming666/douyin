/**
 * 公共的底部信息
 * */
import * as React from "react";
import {Component} from "react";
import "./pubFoot.scss"

type PageOwnProps = {}

type PageState = {}


class PubFoot extends Component <PageOwnProps, PageState> {
    public render() {
        return (
            <div className={"pub-foot"}>
                <p>
                    技术支持QQ群: 739956151、627663165
                </p>
                <p>
                    视频归相关网站及作者所有，本站不存储任何视频及图片。
                </p>
                <p>
                    ©2018 iiiLab 浙ICP备15023022号
                </p>
            </div>
        )
    }
}

export default PubFoot;