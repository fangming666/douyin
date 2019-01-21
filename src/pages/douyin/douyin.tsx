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
                    let errString: string = err.toString();
                    let resultErr: string = "";
                    if (errString.split("Error: Error:")) {
                        resultErr = errString.split("Error: Error:")[1];
                        // @ts-ignore
                        this.setState({
                            alertInfo: resultErr
                        });
                    } else {
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
                {/*<div>*/}
                    {/*<video width="320" height="240" controls>*/}
                        {/*<source*/}
                            {/*src={"http://v1-dy.ixigua.com/844a1d935b1261a8693922a78b000ffb/5c45e660/video/m/220b54fc20b3e23444bb03d328ffd5b0e56116144582000036265a7f7a3e/?rc=ampqNXg2bjRtajMzZmkzM0ApQHRAb0k8NzczOjMzNDc2NTQ0PDNAKXUpQGczdylAZmxkamV6aGhkZjs0QDBua2JeMXNqcl8tLTAtL3NzLW8jbyMtMjQwMS0uLS0xMC8vLS4vaTpiLW8jOmAtbyNtbCtiK2p0OiMvLl4%3D"}*/}
                            {/*type="video/mp4"/>*/}
                        {/*<source*/}
                            {/*src={"http://v1-dy.ixigua.com/844a1d935b1261a8693922a78b000ffb/5c45e660/video/m/220b54fc20b3e23444bb03d328ffd5b0e56116144582000036265a7f7a3e/?rc=ampqNXg2bjRtajMzZmkzM0ApQHRAb0k8NzczOjMzNDc2NTQ0PDNAKXUpQGczdylAZmxkamV6aGhkZjs0QDBua2JeMXNqcl8tLTAtL3NzLW8jbyMtMjQwMS0uLS0xMC8vLS4vaTpiLW8jOmAtbyNtbCtiK2p0OiMvLl4%3D"}*/}
                            {/*type="video/ogg"/>*/}
                    {/*</video>*/}
                    {/*<a*/}
                        {/*download='http://v9-dy-y.ixigua.com/7f892873030ce11fb543953e7975caa6/5c45d9ca/video/m/220222ab7365ff74ac8b49f84b913ec94ff1159caf1000047580bbf0886/?rc=ajV5bDZ0NmxuZzMzOmkzM0ApQHRAb0lJMzgzNjozNDg8NDQ0PDNAKXUpQGczdylAZmxkamV6aGhkZjs0QDQzZ3EuMWExYl8tLWMtL3NzLW8jbyMvMDMxNS0uLS0yMC8vLS4vaTpiLW8jOmAtbyNtbCtiK2p0OiMvLl4%3D'*/}
                        {/*href="http://v9-dy-y.ixigua.com/7f892873030ce11fb543953e7975caa6/5c45d9ca/video/m/220222ab7365ff74ac8b49f84b913ec94ff1159caf1000047580bbf0886/?rc=ajV5bDZ0NmxuZzMzOmkzM0ApQHRAb0lJMzgzNjozNDg8NDQ0PDNAKXUpQGczdylAZmxkamV6aGhkZjs0QDQzZ3EuMWExYl8tLWMtL3NzLW8jbyMvMDMxNS0uLS0yMC8vLS4vaTpiLW8jOmAtbyNtbCtiK2p0OiMvLl4%3D">*/}
                        {/*click me*/}
                    {/*</a>*/}
                {/*</div>*/}
                <div>
                    {this.props.douyin._douyinAnalyze}
                </div>
                {/*当解析成功的时候显示*/}
                {this.state.analyzeSuccess}
                {this.state.analyzeSuccess ?
                    <div>
                        <video width="320" height="240" controls>
                            <source
                                src={this.props.douyin._douyinAnalyze}
                                type="video/mp4">
                            </source>
                            <source src={this.props.douyin._douyinAnalyze} type="video/ogg">
                            </source>
                            您的浏览器不支持 video 标签。
                        </video>
                        {/*<iframe src={this.props.douyin._douyinAnalyze}>*/}
                        {/*</iframe>*/}
                        <a className="down-btn"
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