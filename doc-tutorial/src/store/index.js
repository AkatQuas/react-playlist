import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import math from './reducers/math';
import user from './reducers/user';
import { STATES } from './types';

// create your own logger middleware
// 
// const myLogger = store => next => action => {
//     console.log('My Logging Action: ', action);
//     next(action);
// }

const store = createStore(
    combineReducers(
        { [STATES.MATH]: math, [STATES.USER]: user }
    ),
    {},
    applyMiddleware(logger, thunk, promise())
);

// if you only have one reducer, just pass it to createStore function
//
// const store = createStore(mathReducer, applyMiddleware(logger));

store.subscribe(_ => {
    console.log('store update with new state: ', store.getState());
});

export default store;
