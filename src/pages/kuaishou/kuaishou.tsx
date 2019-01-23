/*
* 抖音页面
* */
import * as React from "react";
import {Component} from "react";
import {connect} from "dva";
import PubInput from "./../../components/pubInput/pubInput"
import Analyze from "./../../utils/analyze"

type PageOwnProps = {
    dispatch: any,
    kuaishou: any,
    app: any
}

type PageState = {
    alertInfo: string,
    analyzeSuccess: boolean
}


class Kuaishou extends Component <PageOwnProps, PageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            alertInfo: "请先将视频链接粘贴到上面的输入框",//提示信息
            analyzeSuccess: false,//解析成功显示下载和预览的开关
        }
    }

    //进行解析
    private async analyze(Val: any) {
        let {dispatch} = this.props;
        //正则换成链接0
        let judge = /(http:\/\/yaan.m.chenzhongtech.com\/s\/[A-Za-z0-9--]+)|(http:\/\/www.gifshow.com\/s\/[A-Za-z0-9--]+)/;
        //正则进行判断格式
        let judgeSwitch =
            /([\s\u4E00-\u9FA5a-zA-z0-9#@!$%^&*()_\-+/_,."~`·！@#￥%……&*（）《》><？，。/]*http:\/\/yaan.m.chenzhongtech.com\/s\/[A-Za-z0-9]+[\u4E00-\u9FA5a-zA-z0-9#@!$%^&*()_+/_,."~`·！@#￥%……&*（）《》？，。/]*)|(http:\/\/www.gifshow.com\/s\/[A-Za-z0-9--]+)/;
        Analyze({dispatch, Val,judge,judgeSwitch, that:this,query:"kuaishou/queryKuaishou"});
    }


    public render() {
        return (
            <div>
                <div className={"dy-warp"}>
                    <PubInput alertInfo={this.state.alertInfo}
                              ownAnalyze={this.analyze.bind(this)}>
                    </PubInput>
                    {/*当解析成功的时候显示*/}
                    {this.state.analyzeSuccess}
                    {this.state.analyzeSuccess ?
                        <div>
                            <video width="320" height="240" controls>
                                <source
                                    src={this.props.kuaishou._kuaishouAnalyze}
                                    type="video/mp4">
                                </source>
                                <source src={this.props.kuaishou._kuaishouAnalyze} type="video/ogg">
                                </source>
                                您的浏览器不支持 video 标签。
                            </video>
                            <a className="down-btn"
                               href={this.props.kuaishou._kuaishouAnalyze}
                               download={this.props.kuaishou._kuaishouAnalyze} target="block">点击下载</a>
                        </div> :
                        null}
                </div>

            </div>
        )
    }
}

export default connect(({app, kuaishou}: any) => ({
    app, kuaishou
}))(Kuaishou);