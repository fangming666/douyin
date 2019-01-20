import * as React from "react";
import {Component} from "react";
import loadingImg from "./../../assets/imgs/loading.svg"
import "./pubLoading.scss"

type PageOwnProps = {}

type PageState = {}


class Publoading extends Component <PageOwnProps, PageState> {
    public render() {
        return (
            <div className={"loading"}>
                <img src={loadingImg} alt="loading"/>
            </div>
        )
    }
}

export default Publoading;