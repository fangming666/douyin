/**
 * 公共输入框
 * */
import * as React from "react";
import {Component} from "react";
import {connect} from "dva";
import "./pubInput.scss"

type PageOwnProps = {
    app:any,
    alertInfo:string,//提示信息
    ownAnalyze:() =>void,//解析的方法
}

type PageState = {}


class PubInput extends Component <PageOwnProps, PageState> {
    private input: HTMLInputElement | null;
    public render() {
        return (
            <div className={"pub-input-warp"}>
                <div className={"pub-input clearfix"}>
                    <input className={"float-left pub-input-item"}
                           type="text"
                           ref={input => this.input = input}
                           placeholder={"请将APP里复制的视频链接粘贴到这里"}
                    />
                    <button className={"float-left"} onClick={() =>{
                        // @ts-ignore
                        let resultVal:any = this.input.value;
                        // @ts-ignore
                        return this.props.ownAnalyze(resultVal)
                    }}>
                        解析视频
                    </button>
                </div>
                {this.props.app._alertEmptySwitch?<div className={"pub-input-alert"}>
                    {this.props.alertInfo}
                </div>:null}
            </div>

        )
    }
}

export default connect(({app}:any) =>({
    app
}))(PubInput);