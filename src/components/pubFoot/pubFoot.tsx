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
                <p className={'contact'}>
                    技术支持QQ群:<a href="https://jq.qq.com/?_wv=1027&k=57yE7he">878427409</a>
                </p>
                <p className={'prompt'}>
                    视频归相关网站及作者所有，本站不存储任何视频及图片。
                </p>
                <p>
                    Copyright © 2019 小凡博客 鲁ICP备17049248号-1
                </p>
            </div>
        )
    }
}

export default PubFoot;
