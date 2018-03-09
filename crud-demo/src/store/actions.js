export const SET_GAMES = 'SET_GAMES';
export const ADD_GAMES = 'ADD_GAMES';


export const setGames = payload => ({
    type: SET_GAMES,
    payload
})
export const addGames = payload => ({
    type: ADD_GAMES,
    payload
})

export const fetchGames = _ => {
    return dispatch => {
        setTimeout(_ => {
            const games = [1,2,3].map(i => ({ title: `${i} ==> abc`}))
            dispatch(setGames(games))
        },1000)
    }
}

export const addNewGames = payload => {
    console.log(payload, 'in actions')
    return dispatch => {
        dispatch(addGames(payload))
    }
}