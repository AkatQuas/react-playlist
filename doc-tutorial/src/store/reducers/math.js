import { ACTIONS } from '../types';

export default (state = {
    result: 1, lastValues: [], other: 'other'
}, { type, payload }) => {
    switch (type) {
        case ACTIONS.MATH.ADD:
            return {
                ...state,
                result: state.result + payload,
                lastValues: [...state.lastValues, state.reuslt]
            };
        case ACTIONS.MATH.SUBSTRACT:
            return {
                ...state,
                result: state.result - payload,
                lastValues: [...state.lastValues, state.reuslt]
            };
        default:
            return state;
    }
}