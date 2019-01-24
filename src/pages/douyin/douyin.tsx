/*
* 抖音页面
* */
import * as React from "react";
import {Component} from "react";
import {connect} from "dva";
import './douyin.scss'
// @ts-ignore
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import PubInput from "./../../components/pubInput/pubInput"

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
        this.state = {
            alertInfo: "请先将视频链接粘贴到上面的输入框",//提示信息
            analyzeSuccess: false,//解析成功显示下载和预览的开关
        }
    }

    //进行解析
    private async analyze(Val: any) {
        let {dispatch} = this.props;
        if (!Val) {
            dispatch({
                type: "app/changeEmptySwitch",
                payload: {
                    alertEmptySwitch: true
                }
            });
        } else {
            //正则换成链接
            let judge = /http:\/\/v.douyin.com\/[A-Za-z0-9]+\//;
            let resultVal: any = judge.exec(Val);//转换之后的地址
            //正则进行判断格式
            let judgeSwitch =
                /[\u4E00-\u9FA5a-zA-z0-9#@!$%^&*()_+/_,."~`·！@#￥%……&*（）《》？，。/]*http:\/\/v.douyin.com\/[A-Za-z0-9]+\/[\u4E00-\u9FA5a-zA-z0-9#@!$%^&*()_+/_,."~`·！@#￥%……&*（）《》？，。/]*/;
            if (!judgeSwitch.test(resultVal)) {
                //视频格式不正确的时候
                this.setState({
                    alertInfo: "请输入正确的视频链接"
                });
                dispatch({
                    type: "app/changeEmptySwitch",
                    payload: {
                        alertEmptySwitch: true
                    }
                });
            } else {
                //视频格式正确
                try {
                    dispatch({
                        type: "app/changeEmptySwitch",
                        payload: {
                            alertEmptySwitch: false
                        }
                    });
                    await dispatch({
                        type: "douyin/queryDouyin",
                        payload: {
                            link: resultVal[0],
                            getKey: "link"
                        }
                    });
                    this.setState({
                        analyzeSuccess: true
                    })
                } catch (err) {
                    //显示接口错误信息
                    dispatch({
                        type: "app/changeEmptySwitch",
                        payload: {
                            alertEmptySwitch: true
                        }
                    });
                    this.setState({
                        analyzeSuccess: false
                    })
                    let errString: string = err.toString();
                    let resultErr: string = "";
                    if (errString.split("Error: Error:")) {
                        resultErr = errString.split("Error: Error:")[1];
                        // @ts-ignore
                        this.setState({
                            alertInfo: resultErr
                        });
                    } else {
                        this.setState({
                            alertInfo: err.toString(),
                        });
                    }
                }


            }

        }
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
                           href={this.props.douyin._douyinAnalyze}
                           download={this.props.douyin._douyinAnalyze} target="block">点击下载</a>
                    </div> :
                    null}
            </div>
        )
    }
}

export default connect(({app, douyin}: any) => ({
    app, douyin
}))(Douyin);
