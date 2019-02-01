import {gain_huoshan} from "../services/huoshan";


export default {
    namespace: 'huoshan',
    state: {
        _huoshanAnalyze: ""
    },
    reducers: {
        //修改抖音解析路径
        "changeHuoshanAnalyze"(state: any, {payload: {data}}: any) {
            return {
                ...state,
                _huoshanAnalyze: data.video.replace(/\s/g, ""),
            }
        },
    },
    effects: {
        //获取快手解析视频
        * queryHuoshan({payload}: any, {call,put}: any) {
            try {
                let result: any = yield call(gain_huoshan, payload);
                let {data} = result;
                yield put({
                    type: 'changeHuoshanAnalyze',
                    payload: {
                        data: data
                    }
                })

            } catch (err) {
                throw new Error(err);
            }

        }
    }
}