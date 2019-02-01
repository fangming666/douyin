import {gain_kuaishou} from "../services/kuaishou";

export default {
    namespace: 'kuaishou',
    state: {
        _kuaishouAnalyze: ""
    },
    reducers: {
        //修改抖音解析路径
        "changeKuaishouAnalyze"(state: any, {payload: {data}}: any) {
            return {
                ...state,
                _kuaishouAnalyze: data.video.replace(/\s/g,""),
            }
        },
    },
    effects: {
        //获取快手解析视频
        * queryKuaishou({payload}: any, {call,put}: any) {
            try {
                let result: any = yield call(gain_kuaishou, payload);
                let {data} = result;
                yield put({
                    type: 'changeKuaishouAnalyze',
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