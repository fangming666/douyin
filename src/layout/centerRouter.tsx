/**
 * layout包裹
 * */
import Layout from "./index";
import * as PropTypes from 'prop-types';
import {connect} from "dva";
// @ts-ignore
import React, {Component} from "react";
import {Route} from "react-router-dom";

type PageOwnProps = {
    title: string,
    exact: boolean,
    key: number,
    path: string,
    component: any,
    location: any,
    dispatch: any,
    loading: any,
    app: any,
}

type PageState = {}

class CenterRoute extends Component<PageOwnProps, PageState> {
    static contextTypes = {
        router: PropTypes.object.isRequired,
    };

    componentDidMount() {
        /*修改html的页面标题*/
        let {title} = this.props;
        document.title = title;
    }


    public render() {
        return (
            <div>
                <Layout>
                    <Route
                        {...this.props}
                    />
                </Layout>
            </div>
        );
    }
}

export default connect(({app, loading}: any) => ({
    app, loading
}))(CenterRoute);

