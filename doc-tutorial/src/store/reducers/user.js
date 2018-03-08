import { ACTIONS } from '../types';

export default (state = { name: 'max', age: 27 }, { type, payload }) => {
    switch (type) {
        case 'USER_SET_NAME_FULFILLED':
            return {
                ...state,
                name: payload
            };
        case ACTIONS.USER.SET_NAME:
            return {
                ...state,
                name: payload
            };
        case ACTIONS.USER.SET_AGE:
            return {
                ...state,
                age: payload
            };
        default:
            return state;
    }
}