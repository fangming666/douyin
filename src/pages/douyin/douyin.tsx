/*
* 抖音页面
* */
import * as React from "react";
import {Component} from "react";
import {connect} from "dva";
import './douyin.scss'
import PubInput from "./../../components/pubInput/pubInput"
import Analyze from "./../../utils/analyze"
//@ts-ignore
import {downloadApi} from "../../utils/api"
import "./douyin.scss"

type PageOwnProps = {
    dispatch: any,
    douyin: any,
    app: any
}

type PageState = {
    alertInfo: string,
    analyzeSuccess: boolean
}


class Douyin extends Component <PageOwnProps, PageState> {
    constructor(props: any) {
        super(props);
        let text: string = "https://www.iesdouyin.com/share/video/6617227169502334212/?region=CN&mid=6597075293465217805&u_code=15d18g0ca&titleType=title&utm_source=copy_link&utm_campaign=client_share&utm_medium=android&app=aweme&iid=56681399044&timestamp=1548078657";
        console.log(text);
        this.state = {
            alertInfo: "请先将视频链接粘贴到上面的输入框",//提示信息
            analyzeSuccess: false,//解析成功显示下载和预览的开关
        }
    }

    //进行解析
    private async analyze(Val: any) {
        let {dispatch} = this.props;
        //正则换成链接
        let judge = /(http:\/\/v.douyin.com\/[A-Za-z0-9]+\/)|(https:\/\/www\.iesdouyin.com\/share\/video\/[A-Za-z0-9_?=/&]+)/;
        //正则进行判断格式
        let judgeSwitch =
            /([\s\u4E00-\u9FA5a-zA-z0-9#@!$%^&*()_+/_,."~`·！@#￥%……&*（）《》><？，。/]*http:\/\/v.douyin.com\/[A-Za-z0-9]+\/[\u4E00-\u9FA5a-zA-z0-9#@!$%^&*()_+/_,."~`·！@#￥%……&*（）《》？，。/]*)|(https:\/\/www\.iesdouyin.com\/share\/video\/[A-Za-z0-9_?=/&]+)/;
        Analyze({dispatch, Val, judge, judgeSwitch, that: this, query: "douyin/queryDouyin"});
    }


    public render() {
        return (
            <div className={"dy-warp"}>
                <PubInput alertInfo={this.state.alertInfo}
                          ownAnalyze={this.analyze.bind(this)}>
                </PubInput>
                {/*当解析成功的时候显示*/}
                {this.state.analyzeSuccess}
                {this.state.analyzeSuccess ?
                    <div className={'video-content'}>
                        <video width="320" height="240" controls>
                            <source
                                src={this.props.douyin._douyinAnalyze}
                                type="video/mp4">
                            </source>
                            <source src={this.props.douyin._douyinAnalyze} type="video/ogg">
                            </source>
                            您的浏览器不支持 video 标签。
                        </video>
                        <a className={"down-btn"}
                           href={`${downloadApi}?url=${encodeURIComponent(this.props.douyin._douyinAnalyze)}`}
                           download="视频.mp4"
                        >点击下载</a>
                    </div> :
                    null}
            </div>
        )
    }
}

export default connect(({app, douyin}: any) => ({
    app, douyin
}))(Douyin);
