import { delay } from 'redux-saga';
import { queryUA, promiseAll } from '../services/clocker';
import key from 'keymaster';

export default {
    namespace: 'clocker',
    state: 1,
    reducers: {
        add(clocker, b) {
            console.log(clocker);

            return clocker + (b.payload || 1);
        }
    },
    effects: {
        *addAfter1Sec(action, { call, put }) {
            yield call(delay, 1000);
            yield put({ type: 'add' });
        },
        *addAfterUA(action, { call, put }) {
            console.log(action);

            const res = yield call(queryUA, ['test']);
            console.log(res);

            yield put({ type: 'add' });
        },
        *addAfterAll(action, { call, put }) {
            const { payload } = action;
            const res = yield call(promiseAll, payload);
            console.log(res);
            yield put({ type: 'add', payload: res[2] })
        }
    },
    subscriptions: {
        keyEventahuasoethusaotehu({ dispatch }) {
            key('ctrl+3', () => { dispatch({ type: 'addAfter1Sec' }) });
        }
    }
}