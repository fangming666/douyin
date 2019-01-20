/*
* 抖音页面
* */
import * as React from "react";
import {Component} from "react";
import {connect} from "dva";
import PubInput from "./../../components/pubInput/pubInput"

type PageOwnProps = {
    dispatch: any,
    douyin: any,
    app: any
}

type PageState = {
    alertInfo: string
}


class Douyin extends Component <PageOwnProps, PageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            alertInfo: "请先将视频链接粘贴到上面的输入框",//提示信息
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
                } catch (err) {
                    let errString: string = err.toString();
                    let resultErr: string = "";
                    if (errString.split("Error: Error:")) {
                        resultErr = errString.split("Error: Error:")[1];
                        // @ts-ignore
                        this.setState({
                            alertInfo: resultErr
                        });
                    }else{
                        //显示接口错误信息
                        dispatch({
                            type: "app/changeEmptySwitch",
                            payload: {
                                alertEmptySwitch: true
                            }
                        });
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
                <iframe src={this.props.douyin._douyinAnalyze}>
                </iframe>
                <a download={this.props.douyin._douyinAnalyze} target="block">点击下载</a>
            </div>
        )
    }
}

export default connect(({app, douyin}: any) => ({
    app, douyin
}))(Douyin);