
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {entry1Reduser} from './entry1Reduser';
import { entry2Reduser } from './entry2Reduser';
import {appReduser} from './appReduser';
import { registrationReduser } from './registrationReduser';
import thunkMiddleware from 'redux-thunk';

let redusers = combineReducers({
    entry1Reduser,
    entry2Reduser,
    appReduser,
    registrationReduser

});

const store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;