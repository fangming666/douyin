import * as React from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import CenterRouter from "./../layout/centerRouter";
import dynamic from 'dva/dynamic'
import {config} from './../utils/index'

const {menuGlobal} = config;

function RouterConfig({history, app}: any) {
    return (
        <BrowserRouter>
            <Switch>
                    {menuGlobal.map(({path, title, ...dynamics}: any, index) => {
                        return <CenterRouter
                            exact
                            key={index}
                            title={title}
                            path={path}
                            component={dynamic({app, ...dynamics})}
                        />
                    })
                    }
            </Switch>
        </BrowserRouter>
    )
}

export default RouterConfig;


