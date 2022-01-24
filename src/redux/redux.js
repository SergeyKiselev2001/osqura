
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {entry1Reduser} from './entry1Reduser';
import {appReduser} from './appReduser';


//import {reducer as formReducer} from 'redux-form';
//import thunkMiddleware from 'redux-thunk';


let redusers = combineReducers({
    entry1Reduser,
    appReduser
    // messagesPage : dialogsReduser,
    // sidebarPage : sidebarReduser,
    // users : usersReduser,
    // auth : authReduser,
    // app : appReduser,
    // form : formReducer, 
});


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(redusers);

//let store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;