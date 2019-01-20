import {gain_douyin} from "../services/douyin";

export default {
    namespace: 'douyin',
    state: {
        _douyinAnalyze: ""
    },
    reducers: {
        //修改抖音解析路径
        "changeDouyinAnalyze"(state: any, {payload: {data}}: any) {
            return {
                ...state,
                _douyinAnalyze: data.video,
            }
        },
    },
    effects: {
        //获取抖音解析视频
        * queryDouyin({payload}: any, {call, put}: any) {
            try {
                let result: any = yield call(gain_douyin, payload);
                let {data, code, msg} = result;
                if (code !== 200) {
                    throw new Error(msg);
                }
                yield put({
                    type: 'changeDouyinAnalyze',
                    payload: {
                        data
                    }
                })

            } catch (err) {
                throw new Error(err);
            }

        }
    }
}