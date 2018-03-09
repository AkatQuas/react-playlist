import { SET_GAMES, ADD_GAMES } from "../actions";

export default (state = [], {type, payload}) => {
    switch (type) {
        case SET_GAMES:
            return payload;
        case ADD_GAMES:
            return [
                ...state,
                payload
            ]
        default:
            return state;
    }
}