
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {entry1Reduser} from './entry1Reduser';
import {appReduser} from './appReduser';
import thunkMiddleware from 'redux-thunk';

//import {reducer as formReducer} from 'redux-form';
//import thunkMiddleware from 'redux-thunk';


let redusers = combineReducers({
    entry1Reduser,
    appReduser

});

const store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;