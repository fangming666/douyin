/**
 * 公共的头部
 * */
import * as React from "react";
import {Component} from "react";
import logoImg from "./../../assets/imgs/logo.png";
import {NavLink} from "react-router-dom";
import {connect} from "dva"
import "./pubHead.scss"

type PageOwnProps = {
    app: any,
    dispatch: any
}

type PageState = {}


class PubHead extends Component <PageOwnProps, PageState> {
    constructor(props: any) {
        super(props);
    }



    private changeTitle(headTitle: string) {
        //改变head信息
        let {dispatch} = this.props;
        dispatch({
            type: "app/changeHeadTitle",
            payload: {
                headTitle
            }
        });
        //隐藏错误提示
        dispatch({
            type:"app/changeEmptySwitch",
            payload:{
                alertEmptySwitch:false
            }
        })
    }

    public render() {
        return (
            <div className={"pub-head-warp"}>
                <div className={"pub-head clearfix"}>
                    <a className={"float-left clearfix"} href="#">
                        <img src={logoImg} alt="logo" className={"float-left"}/>
                        <span className={"float-left"}>{this.props.app._headTitle}解析下载</span>
                    </a>
                    <div className={'head-nav float-left'}>
                        {
                            this.props.app._navArr.map((item: any, index: number) => {
                                return <NavLink exact activeClassName={'nav-active'} to={item.to} key={index} onClick={this.changeTitle.bind(this, item.name)}>
                                    {item.name}
                                </NavLink>
                            })
                        }
                    </div>
                </div>
            </div>

        )
    }
}

export default connect(({app}: any) => ({
    app
}))(PubHead);