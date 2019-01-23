/*
* 进行解析
* **/
export default async function Analyze(req: any) {
    let {dispatch, Val,that,judge,judgeSwitch,query} = req;
    if (!Val) {
        dispatch({
            type: "app/changeEmptySwitch",
            payload: {
                alertEmptySwitch: true
            }
        });
    } else {
        //正则换成链接
        let resultVal: any = judge.exec(Val);//转换之后的地址
        //正则进行判断格式
        if (!judgeSwitch.test(resultVal)) {
            //视频格式不正确的时候
            that.setState({
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
                await
                    dispatch({
                        type: query,
                        payload: {
                            link: resultVal[0],
                            getKey: "link"
                        }
                    });
                that.setState({
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
                that.setState({
                    analyzeSuccess: false
                });
                let errString: string = err.toString();
                let resultErr: string = "";
                if (errString.split("Error: Error:")) {
                    resultErr = errString.split("Error: Error:")[1];
                    // @ts-ignore
                    that.setState({
                        alertInfo: resultErr
                    });
                } else {
                    that.setState({
                        alertInfo: err.toString(),
                    });
                }
            }


        }

    }
}