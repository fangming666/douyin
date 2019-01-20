import * as React from "react";
import {Component} from "react";
import {withRouter} from "react-router";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import PubHead from "./../components/pubHead/pubHead"
import PubInfo from "./../components/pubInfo/pubInfo"
import PubLoading from "./../components/pubLoading/pubLoading"


type PageStateProps = {}

type PageDispatchProps = {}

type PageOwnProps = {
    children: any,
}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps


class Layout extends Component <IProps, PageState> {
    constructor(props: any) {
        super(props);
    }


    public render() {
        return (
            <div>
                <PubHead>
                </PubHead>
                <PubLoading>
                </PubLoading>
                <div className={"content"}>
                    <PubInfo>
                    </PubInfo>

                    <div >
                        <TransitionGroup>
                            <CSSTransition key={location.pathname}
                                           classNames={'fade'}
                                           timeout={100}>
                                {this.props.children}
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                </div>

            </div>

        )
    }
}

export default withRouter(Layout as any);


